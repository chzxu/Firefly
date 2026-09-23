---
title: CTF 学习笔记 —— 一站式安全学习导航
published: 2026-05-13
pinned: true
description: 从零开始的 CTF 学习之路，涵盖 Web、Misc、Crypto、Reverse、Pwn 五大方向的题型速查、学习路线规划、训练平台导航，以及 Linux / Kali / Git 三大指令速查手册。
tags: [CTF, 网络安全, 学习笔记, 工具速查]
category: 学习笔记
draft: false
---

<div class="flex justify-center my-6 not-prose">
  <a href="/ctf/index.html"
     class="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
     style="background: var(--primary); color: white;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    前往 CTF 学习导航
  </a>
</div>

---

## 这是什么？

**CTF 学习导航** 是一个一站式学习工具页面，专为从零开始学习 CTF（Capture The Flag）网络安全竞赛而整理。无论你是完全零基础的小白，还是有一定经验的选手，都能在这里找到需要的学习资源和速查工具。

> 🦞 风雨丛中笑，兄弟心中照。

## 核心功能

### 🃏 CTF 题型速查

覆盖五大经典方向：

- **Web** — SQL 注入、XSS、文件上传、反序列化等
- **Misc** — 隐写术、流量分析、编码解码、取证
- **Crypto** — 古典密码、RSA、AES、ECC
- **Reverse** — 反汇编、脱壳、代码混淆
- **Pwn** — 栈溢出、堆利用、格式化字符串

### 🗺️ 菜鸡路线规划

一份 6 个月的从零学习路线图，每个阶段可勾选标记进度，进度数据自动保存在浏览器中。按部就班，循序渐进。

### 🎮 训练平台 & 安全社区

汇总了 BUUCTF、BugKu、攻防世界、CTFHub、青椿 CTF 等主流训练平台，以及 FreeBuf、先知社区、安全客等安全资讯站点。支持搜索和热力图数据追踪。

### 📖 三大指令速查手册

| 手册 | 分类数 | 特点 |
|------|--------|------|
| 🐧 **Linux 指令学院** | 10 | 54 条常用指令，覆盖文件操作、权限、进程、网络、文本处理 |
| ☠️ **Kali Linux 速查** | 10 | 56 条安全工具指令，信息收集、漏洞分析、Web 攻击、密码攻击 |
| ⎇ **Git 速查手册** | 10 | 50+ 条 Git 指令，基础操作、分支管理、远程协作、撤销回退 |

每本手册都支持**分类标签筛选**和**实时关键词搜索**，点击卡片即可展开查看语法、示例和实用提示。

### 🧰 内置工具箱

页面内置了常用编码解码工具：Base64、Hex、ROT13、URL 编解码，以及哈希自动识别工具，无需切换其他网站。

### 📊 数据追踪

- **GitHub 风格热力图** — 记录每日学习点击，激励坚持
- **站点排行榜** — 统计最常访问的站点 Top 10
- **CTF 赛事倒计时** — 自动计算距下一场比赛的时间

## 使用方式

无需安装任何工具，点击页面顶部的跳转按钮即可打开。所有数据（学习进度、点击记录）均存储在浏览器 `localStorage` 中，不会丢失。

如果你也想系统学习 CTF 网络安全，希望这个导航页能帮到你。

---

## 📚 CTF Web 学习笔记系列（共 19 篇）

导航页解决「去哪练、查什么」，这一套笔记解决「怎么想、怎么动手」。它整理了 **11 道 Web 靶场的完整解题思路**，外加一整套工具箱速查 —— 每篇都按「一眼看懂 → 思路图 → 动手步骤 → 原理拆解 → 延伸与防御」展开，命令和回显都是实跑出来的。

### 入门与靶场篇

| # | 文章 | 一句话考点 |
|---|---|---|
| 00 | [总览｜CTF Web 入门地图](/posts/ctf-learning/00-overview/) | 11 道题的主线、四条铁律、通用排查口诀 |
| 01 | [问剑石·天赋测试](/posts/ctf-learning/01-wenjianshi/) | 页面显示的中文，不是后端校验的值 |
| 02 | [D-Accelerator｜命令注入](/posts/ctf-learning/02-command-injection/) | `ping` 参数被拼进 shell → RCE |
| 03 | [七绝傀儡阵｜HTTP 请求的七个部位](/posts/ctf-learning/03-qijue-kuileizhen/) | 七道禁制对应请求报文的七个零件 |
| 04 | [Project X｜三种文件泄露](/posts/ctf-learning/04-projectx/) | 备份包 / `.git` 历史 / `.DS_Store` |
| 05 | [eieieieaa｜混淆 JS 与 e/i 二进制](/posts/ctf-learning/05-eieieieaa/) | 25 条假 flag，真东西藏在注释里 |
| 06 | [玄机阁·九重天衍禁制｜SQL 注入](/posts/ctf-learning/06-sql-injection/) | 报错被关掉时怎么判断注入 |
| 07 | [玄机阁·天衍真言术｜魔法哈希](/posts/ctf-learning/07-magic-hash/) | 两个不同的值，md5 却「相等」 |
| 08 | [破界之眼｜路径穿越](/posts/ctf-learning/08-path-traversal/) | 没拦住 `../` 的任意文件读取 |
| 09 | [千机禁域｜只挡前门](/posts/ctf-learning/09-qianji-jinyu/) | 参数枚举 + `php://filter` 读源码 |
| 10 | [灵纹上传·通幽关｜文件上传绕过](/posts/ctf-learning/10-file-upload/) | 后缀 / 魔数 / `.htaccess` 三张牌 |
| 11 | [站内搜索｜服务端模板注入 SSTI](/posts/ctf-learning/11-ssti/) | 输入被拼进模板就成了服务器上的代码 |

### 工具箱速查

| # | 文章 | 内容 |
|---|---|---|
| 99 | [工具箱总入口](/posts/ctf-learning/99-0-toolbox/) | 标注说明、排查口诀、索引 |
| 99-1 | [浏览器与 Burp](/posts/ctf-learning/99-1-browser-burp/) | F12、改包、中文编码的坑 |
| 99-2 | [命令行与脚本](/posts/ctf-learning/99-2-cli-script/) | `curl.exe`、Python 模板、Node + jsdom |
| 99-3 | [git 速查](/posts/ctf-learning/99-3-git/) | 翻历史、`reflog`、`safe.directory` |
| 99-4 | [编码与魔法哈希](/posts/ctf-learning/99-4-encoding/) | 进制互转、`0e` 碰撞表 |
| 99-5 | [上传绕过速查](/posts/ctf-learning/99-5-upload-bypass/) | 三张牌 + 三条硬规矩 |
| 99-6 | [真实报错对照表](/posts/ctf-learning/99-6-errors/) | 踩过的报错 → 真正原因 → 修法 |

> 建议从 [00 总览](/posts/ctf-learning/00-overview/) 开始读；每篇文章顶部都有系列导航，可以直接跳到相邻章节。
