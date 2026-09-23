---
title: "99-1 浏览器与 Burp"
published: 2026-09-12
description: "F12 开发者工具、Burp 改包、浏览器改请求头的固有限制，以及中文编码最容易踩的那个坑。"
tags: ["CTF","学习笔记","工具箱","Burp"]
category: 学习笔记
draft: false
---

> **CTF Web 学习笔记**（共 19 篇）　[📖 系列总览](/posts/ctf-learning/00-overview/)　·　[← 99 工具箱总入口](/posts/ctf-learning/99-0-toolbox/)　·　[99-2 命令行与脚本 →](/posts/ctf-learning/99-2-cli-script/)

## 一、F12 开发者工具速查

| 面板 | 用来干什么 | 什么时候必须用 |
|---|---|---|
| **Network** | 看请求长什么样、带了哪些参数/头 | 一切"我不知道该改哪个参数"的场景 |
| **Elements** | 看真实 DOM（含注释、隐藏元素） | 页面上看不见的东西（04、05 题） |
| **Console** | 直接跑 JS 发请求、抓 DOM 内容 | 不想装工具时最快 |
| **Sources** | 看 JS 源码、打断点 | 分析前端逻辑 |

### 必背技巧

```js
// ① 把页面上所有注释抓出来（05 题用过）
[...document.body.innerHTML.matchAll(/<!--([\s\S]*?)-->/g)].map(m=>m[1])

// ② 直接发一个 POST（01、03 题用过）
fetch('/api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({a:1})}).then(r=>r.json()).then(console.log)

// ③ 发一个 PUT 并把结果渲染到页面上（03 第七关用过）
fetch('/void_rebirth',{method:'PUT',body:'新生！'}).then(r=>r.text()).then(t=>{document.open();document.write(t);document.close()})

// ④ 把结果复制到剪贴板（DevTools 专属函数）
copy(something)
```

### 页面一直在动 / DOM 抓不住怎么办

| 方法 | 操作 |
|---|---|
| **冻结 JS**（推荐） | `Ctrl+Shift+P` → 输入 `Disable JavaScript` → 回车（恢复：`Enable JavaScript`） |
| **快照复制** | Elements 面板右键 `<body>` → Copy → **Copy outerHTML**，粘到记事本搜 |
| **用代码读** | 别用眼睛看，用 Console 一行抓成数组（见上） |

> ⚠️ **浏览器对请求头有限制**：`fetch` **无法**设置 `User-Agent`、`Host`、`Cookie` 这类头（`Referer` 只能用受约束的 `referrer` 选项间接影响）。这是**浏览器实现**层面的限制，不同版本略有差异。
>
> **实用结论**：要做「任意伪造请求头」这种操作，直接用 Burp / curl，别跟浏览器较劲。

---

## 二、Burp Suite 速查

### 改哪个部位 —— 对照表

| 想改的东西 | 在 Burp 里改哪里 |
|---|---|
| URL 查询参数 `?level=B` | 请求行（第一行） |
| 请求方法 `GET`/`POST`/`PUT` | 请求行第一个单词 |
| 请求头 `User-Agent` 等 | 请求头区，直接改那一行 |
| 请求体 body | 空行下面的部分 |
| **中文内容** | ⚠️ 见下面的坑 |

### ⚠️ 最大的坑：Burp 会吃掉中文

**我在本机 Burp 上遇到的现象**：Repeater 里**直接敲中文**，服务端收到的字节变成了 `?`（很可能是客户端按 ISO-8859-1 编码后发出的）。不同版本 / 字符集设置下表现可能不同。

**定位方法**：切到 Hex 视图核对**实际发送的字节**，就能判断坏在客户端还是服务端。

| 解决办法 | 操作 |
|---|---|
| **URL 编码**（表单用） | 选中中文 → 按 `Ctrl+U` |
| **Hex 视图**（裸 body 用） | 切到 "Hex" 标签，把字节改成 `E6 96 B0 ...` |
| 干脆别用 Burp | 用浏览器 Console 的 `fetch`（自动 UTF-8） |

**`Content-Length` 必须等于 body 的字节数**（不是字符数！中文一个字 3 字节）。
Burp 一般会自动更新，但手改完 body 一定要核对一眼。
