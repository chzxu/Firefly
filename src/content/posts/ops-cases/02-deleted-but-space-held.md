---
title: "案例 02 · 删除文件后，空间为什么不回来"
published: 2026-11-15
description: "rm 删的是目录项，不是数据。只要还有进程打开着 inode，磁盘空间就不会释放——用 lsof +L1 三步定位，并给出线上不用重启服务的截断方法。"
tags: ["Linux", "运维", "故障排查", "inode", "lsof"]
category: 运维案例分析
draft: false
---

> **运维案例分析**（共 3 篇）　[01 磁盘写满](/posts/ops-cases/01-disk-fill-baseline/)　·　[02 空间不释放](/posts/ops-cases/02-deleted-but-space-held/)　·　[03 端口占用](/posts/ops-cases/03-port-already-in-use/)

> 说明：以下输出为实测结果的归一化版本（按 40G 根分区缩放），**增量与回路量与实测一致**，
> 进程信息中的用户名已替换为 `<user>`。

## 1. 症状

- 现象：`rm` 删除了一个 5G 文件，`df` 显示的已用空间**没有回落**
- 发现方式：主动构造实验（删完立刻复查 `df`）
- 影响：磁盘看起来满了，但翻遍目录找不到大文件，清理无效

## 2. 环境

- 系统：Ubuntu 22.04（WSL2）
- 文件系统：ext4
- 实验时间：2026-11-15

## 3. 排查过程

### 3.1 建立基线

```bash
df -h / | tail -1
```

```text
/dev/sdX        40G  3.2G   35G   9% /
```

### 3.2 造文件并确认占用

```bash
fallocate -l 5G /tmp/held.log
df -h / | tail -1
```

```text
/dev/sdX        40G  8.2G   30G  21% /
```

### 3.3 让进程持有文件，然后删除

```bash
# 后台持续读取该文件，使它保持被打开状态
tail -f /tmp/held.log > /dev/null &
# 查看后台进程
jobs -l
# 删除
rm -f /tmp/held.log
ls -l /tmp/held.log
df -h / | tail -1
```

```text
ls: cannot access '/tmp/held.log': No such file or directory
/dev/sdX        40G  8.2G   30G  21% /
```

**关键**：文件确实不存在了，但使用量**还是 8.2G / 21%，一点没降**。

### 3.4 找出谁还持有这个文件

```bash
lsof +L1
```

```text
COMMAND  PID  USER   FD   TYPE DEVICE   SIZE/OFF NLINK NODE NAME
tail    3226 <user>   3r   REG   8,48 5368709120     0 1458 /tmp/held.log (deleted)
```

**三个特征一眼破案**：

| 特征 | 含义 |
|---|---|
| `NLINK 0` | 文件的链接数为 0，目录里已经没有它 |
| `(deleted)` | 名字后面带这个标记 |
| `COMMAND tail` | 是 `tail` 进程还开着它 |

> `lsof +L1` 的意思是"列出所有链接数小于 1 的已打开文件"，正是为这种场景设计的。

### 3.5 修复与验证

```bash
pkill -f "tail -f /tmp/held.log"
sleep 1
df -h / | tail -1
```

```text
/dev/sdX        40G  3.2G   35G   9% /
```

**进程退出后，inode 引用计数归零，数据块才真正释放。**

## 4. 根因

`rm` 删除的是**目录项**（文件名 → inode 的那条记录），不是数据。

要让数据块真正释放，必须**同时**满足两个条件：

```text
i_nlink == 0    （没有任何目录项指向它）
i_count == 0    （没有任何进程还打开着它）
```

本例中：

1. `rm` 之后 `i_nlink` 归零 → 所以 `ls` 报"文件不存在"
2. 但 `tail` 进程还持有文件描述符 → `i_count > 0`
3. 于是 inode 和数据块都留在磁盘上，`df` 仍然统计它们

**为什么 `du` 看不到、`df` 看得到**：

| 命令 | 统计路径 | 结果 |
|---|---|---|
| `du` | 沿**目录树**遍历 | 文件已不在目录里 → 统计不到 |
| `df` | 问**文件系统**还剩多少块 | 块还没释放 → 照实反映 |

**这是"磁盘满了但找不到大文件"最常见的原因。**

## 5. 预防

- **怎么避免**：日志轮转用 `logrotate` 的 **copytruncate** 选项——它先复制再**清空**原文件
  （`> file`），而不是删除重建。这样进程持有的一直是同一个 inode，不会泄漏
- **怎么提前发现**：监控 `lsof +L1` 的输出条数；或对比 `df` 与 `du` 的差值，
  差得越大越可疑
- **怎么最快恢复**：线上不敢重启服务时，直接截断那个 inode，进程无感：
  ```bash
  : > /proc/<PID>/fd/<FD>
  ```

## 附 · 命令速查

| 命令 | 作用 | 注意 |
|---|---|---|
| `df -h` | 文件系统层面的空间 | 统计块设备 |
| `du -sh` | 目录/文件占用 | 看不到已删除但被打开的文件 |
| `lsof +L1` | 找链接数 < 1 的已打开文件 | 需要安装 `lsof` |
| `lsof -p <PID>` | 看某进程打开了哪些文件 | 排查具体进程 |
| `: > /proc/PID/fd/N` | 不杀进程直接截断文件 | 线上应急用 |

## 进阶问题

1. 为什么 `du` 和 `df` 会不一致？还有哪些情况会导致两者差很多？
2. 用 `: > /proc/PID/fd/N` 截断之后，进程看到文件大小是多少？
3. 如果一个进程持有 100 个已删除的大文件，怎么一次性找出来并排序？