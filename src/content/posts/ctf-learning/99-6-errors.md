---
title: "99-6 真实报错对照表"
published: 2026-09-17
description: "把踩过的真实报错逐条对照：回显长什么样、真正的原因是什么、该怎么修。"
tags: ["CTF","学习笔记","工具箱","排错"]
category: 学习笔记
draft: false
---

> **CTF Web 学习笔记**（共 19 篇）　[📖 系列总览](/posts/ctf-learning/00-overview/)　·　[← 99-5 上传绕过速查](/posts/ctf-learning/99-5-upload-bypass/)

## 八、真实报错对照表（本套笔记里踩过的）

| 报错 / 现象 | 真正原因 | 修法 |
|---|---|---|
| 回显 `光芒：none` 而不是你写的内容 | body 没被解析（Content-Type 错 / JSON 语法错） | 检查请求头与 body 格式 |
| 回显 `光芒：?????` | 客户端把中文编码坏了（PowerShell/Burp） | 用 UTF-8 字节 / URL 编码 |
| `sh: 1: cd: can't cd to index.php` | **你的输入被拼进了 shell 命令**（命令注入征兆） | 这是好消息，继续注入 |
| `目标地址长度超过限制` | 输入框有长度校验 | 拆成短命令，或用变量拼接 |
| `405 Method Not Allowed` | 请求方法不对 | 换 GET/POST/PUT |
| `400` + `请使用PUT方法发送正确的请求体` | body 内容/格式不对 | 注意是裸文本还是表单 |
| 页面一直转圈 / 无响应 | `Content-Length` 比实际 body **大** | 改成正确的字节数 |
| `detected dubious ownership`（git） | 仓库属主与当前用户不一致 | `git config --global --add safe.directory "*"` |
| jsdom 报 `getContext() method` 未实现 | jsdom 不支持 canvas | 无关紧要，忽略 |
| 输入 `{{7*7}}` **原样输出** | 这个引擎不认 `{{ }}` 定界符（EJS 只扫描 `<% %>`） | 换语法试：`<%= 7*7 %>`、`#{7*7}`、`${7*7}` |
| 输入 `<%= 7*7 %>` 返回 **`49`** | **服务器把你的输入当代码执行了**（SSTI 征兆） | 这是好消息 —— 接着升级到命令执行（见 11 章） |
| `require is not defined` | 模板函数是 `new Function()` 造的，**只能访问全局作用域**，够不到模块作用域的 `require` | 改走 `process.mainModule.require(...)` |
| `process is not defined` | 有沙箱，或者你的输入其实落在"数据"侧没进模板 | 找别的全局对象；先确认注入点是不是真在模板里 |
