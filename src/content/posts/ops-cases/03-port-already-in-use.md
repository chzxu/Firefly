---
title: "案例 03 · 端口被占用：从 ss 定位到 TIME_WAIT"
published: 2026-11-16
description: "服务报 Address already in use 之后，用 ss 和 lsof 找到占用者；更关键的是杀进程后端口为什么有时仍不可用——TIME_WAIT 到底落在哪一端。"
tags: ["Linux", "运维", "故障排查", "网络", "TIME_WAIT"]
category: 运维案例分析
draft: false
---

> 环境：Ubuntu 22.04（WSL2）· 实测于 2026-11-16

## 1. 症状

- 现象：启动服务时报 `Address already in use`，服务起不来
- 发现方式：不知道端口已被占用，直接启动新服务
- 影响：新进程启动失败，旧的占用者还在跑

## 2. 环境

- 系统：Ubuntu 22.04（WSL2）
- 端口：8080 / 8081
- 复现时间：2026-11-16

## 3. 排查过程

### 3.1 先确认端口状态

```bash
ss -tulpn | grep 8080 || echo "8080空闲"
```

输出：

```text
8080空闲
```

启动前是空的，说明问题不在这里——继续往下做才能复现。

### 3.2 复现冲突

```bash
python3 -m http.server 8080 &
python3 -m http.server 8080
```

输出：

```text
OSError: [Errno 98] Address already in use
```

**关键**：这个错误是内核返回的（`EADDRINUSE`，即 Errno 98），不是 Python 自己判定
的。任何时候 bind 一个已被占用的 4 元组都会得到它。

### 3.3 两个工具定位，对比输出

```bash
ss -tulpn | grep 8080
lsof -i :8080
```

输出：

```text
tcp   LISTEN 0      5      0.0.0.0:8080   0.0.0.0:*   users:(("python3",pid=2608,fd=3))

COMMAND  PID      USER  FD   TYPE DEVICE SIZE/OFF NODE NAME
python3 2608  <user>    3u  IPv4  15186      0t0  TCP *:http-alt (LISTEN)
```

**两条命令的差别**：

| | `ss -tulpn` | `lsof -i :8080` |
|---|---|---|
| 看什么 | 这台机器**所有监听端口** | **指定端口**上的所有连接（含已建立） |
| 端口显示 | 数字（没加 `-n` 才解析） | 默认解析成服务名 `http-alt` |
| 适合 | "这机器开了什么服务" | "谁占着 8080" |

**顺带记住 `ss` 的五个参数**：

| 参数 | 含义 |
|---|---|
| `-t` | TCP |
| `-u` | UDP |
| `-l` | 只看 LISTEN 状态 |
| `-p` | 显示进程（看别人的进程需要 root） |
| `-n` | 数字端口，不解析服务名 |

### 3.4 杀掉后端口能不能立刻用（TIME_WAIT）

**第一次尝试失败的原因**：只启动了服务、从来没连过它，所以一条连接都没有，
自然看不到 TIME_WAIT。**必须先建立连接再杀。**

```bash
python3 -m http.server 8080 &
curl -s -o /dev/null http://127.0.0.1:8080/     # ← 关键：制造一次连接
ss -tan | grep 8080
pkill -f "http.server 8080"
sleep 1
ss -tan | grep 8080
```

输出：

```text
# 连过一次之后
LISTEN    0  5    0.0.0.0:8080      0.0.0.0:*
TIME-WAIT 0  0    127.0.0.1:58008   127.0.0.1:8080

# kill 之后
TIME-WAIT 0  0    127.0.0.1:58008   127.0.0.1:8080
```

**三个要点**：

1. TIME-WAIT 落在 **58008 → 8080**，是**客户端那一侧**（curl 的临时端口），不是服务端的 8080
2. 原因：**TIME_WAIT 出现在主动关闭连接的一端**。curl 读完响应就关了，所以是它进入等待
3. kill 之后 LISTEN 消失了，只剩 TIME-WAIT —— 服务端端口**已经可用**

再验证一次绑定：

```bash
python3 -m http.server 8080 &
```

输出：

```text
重新绑定成功
```

**为什么能起来**：Python 的 `http.server` 默认开启 `SO_REUSEADDR`，允许在
TIME_WAIT 期间重新 bind 同一端口。

**换个不开这个选项的程序就会被卡住**：

```bash
nc -l -p 8080 &
nc -l -p 8080      # 这里才会因 TIME_WAIT 失败
```

### 3.5 权限差异

```bash
sudo python3 -m http.server 8081 &
ss -tulpn | grep 8081          # 普通用户
sudo ss -tulpn | grep 8081     # root
```

输出：

```text
（待补：本机 sudo 需要交互输入密码，未能在脚本里跑通，请手动执行一次粘贴到此）
```

**预期结果**：

- 普通用户执行：`users:(...)` 那列为空 —— 看不到进程归属
- `sudo` 执行：能看到完整的 `users:(("python3",pid=...,fd=...))`

**这就是线上最常见的坑**：SSH 进去发现端口被占，但 `ss -tulpn` 不显示是谁。

### 3.6 修复与验证

确认占用者是自己能动的进程后：

```bash
nc -l -p 8080 &            # 故意占住
ss -tulpn | grep 8080
kill <PID>
sleep 1
ss -tulpn | grep 8080 || echo "端口已经释放"
```

输出：

```text
tcp   LISTEN 0  1  0.0.0.0:8080  0.0.0.0:*  users:(("nc",pid=2652,fd=3))
端口已经释放
```

## 4. 根因

本次属于 **A：旧进程没退干净**。

具体机制：

1. `nc`（或上一版服务）没有正常退出，进程还在，它持有的**监听套接字**仍然存在
2. 监听套接字绑定在 `0.0.0.0:8080` 这个 4 元组上
3. 新进程调用 `bind()` 时，内核检查该地址端口组合已被占用 → 返回 `EADDRINUSE`（98）
4. Python 把这个错误包成 `OSError: [Errno 98] Address already in use`

**注意区分**：报错是内核发的，不是 Python 判定"端口被占"。

另外两种常见根因，以及怎么区分：

| 根因 | 特征 | 怎么确认 |
|---|---|---|
| A. 进程没退干净 | `ss` 里有 LISTEN + PID | `ss -tulpn` 能看到进程 |
| B. TIME_WAIT 残留 | `ss` 里只有 TIME-WAIT，没有 LISTEN | `ss -tan state time-wait` |
| C. 权限不足（绑 <1024） | 报错文字和占用**完全一样** | `sudo` 试一次，能起来就是权限问题 |

## 5. 预防

- **怎么避免**：服务用 systemd 托管，重启时它会先停干净再启动；启动脚本里加重试，
  报 `EADDRINUSE` 时先确认旧进程 PID 再处理，不要盲目 `pkill`
- **怎么提前发现**：巡检脚本里加一条 `ss -tulpn` 采集，和预期端口清单比对；
  关注 TIME-WAIT 数量（`ss -tan state time-wait | wc -l`）
- **怎么最快恢复**：先 `ss -tulpn` 确认是谁 → 是自己的旧进程就 `kill <PID>`；
  TIME_WAIT 就等 60 秒或确认程序开了 `SO_REUSEADDR`

## 附 · 命令速查

| 命令 | 作用 | 关键点 |
|---|---|---|
| `ss -tulpn` | 所有监听端口及所属进程 | t=TCP u=UDP l=监听 p=进程 n=数字 |
| `ss -tan state time-wait` | 只看 TIME_WAIT | 排查"端口没用却起不来" |
| `ss -tnp state established` | 已建立的连接 | 排查"没人连得上"必用 |
| `lsof -i :端口` | 该端口上的进程与连接 | 含监听 + 已建立 |
| `kill <PID>` | 终止进程 | 端口不会立刻可用 |
| `sudo ss -tulpn` | 看别人的进程 | 不加 sudo 看不到 |

## 进阶 · 三个问题

### 1. `ss -tulpn` 里 Listen 那列的数字是什么？

不是列名，是 **Recv-Q** 和 **Send-Q** 两个数字。以本机输出为例：

```text
LISTEN 0      5      0.0.0.0:8080    0.0.0.0:*
       ↑      ↑
    Recv-Q  Send-Q
```

| 列 | LISTEN 状态下的含义 |
|---|---|
| **Recv-Q** | 已完成三次握手、**还没被 accept()** 的连接数 |
| **Send-Q** | **backlog 上限** —— `listen(fd, N)` 里的 N |

这里 `0 5` 表示：0 个连接在排队，上限 5（Python `http.server` 的
`request_queue_size` 默认值 5；`nc` 默认是 1）。

**运维意义**：Recv-Q 持续等于 Send-Q，说明 accept 队列满了，新连接会被丢弃 →
客户端表现是"连接超时但进程没死"。相关内核参数：`net.core.somaxconn`、
`tcp_max_syn_backlog`。

### 2. 为什么 kill 之后立刻重启，有时能起来有时不能？

**能起来**：程序开启了 `SO_REUSEADDR`（Python `http.server`、nginx、大多数服务端
框架都开了），允许在 TIME_WAIT 状态下复用端口。

**起不来**：程序没开 `SO_REUSEADDR`（`nc` 默认不开），或者端口上真有进程在
LISTEN。

**TIME_WAIT 的本质**：主动关闭连接的一端会保留该 4 元组 `2*MSL`（Linux 默认 60 秒），
目的是防止旧连接的迟到报文被新连接误收。

### 3. 容器里的进程占着端口，宿主机 `ss -tulpn` 能看到吗？

**不一定，取决于网络模式**：

- `bridge` 模式（默认）：宿主机看到的是 **docker-proxy** 进程，不是容器内的真实进程
- `host` 模式：容器与宿主机共享网络命名空间，**能直接看到容器进程**

**背后的原因**：`ss` 读的是当前**网络命名空间**的 socket 表。容器有自己的 netns，
宿主机在默认 netns 里自然看不到，只能看到做端口映射的代理进程。
排查容器端口应该进容器执行 `ss`，或用 `nsenter -t <PID> -n ss -tulpn`。