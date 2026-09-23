---
title: "99-2 命令行与脚本"
published: 2026-09-13
description: "curl.exe 与 PowerShell 别名的坑、Python 请求模板、用 Node + jsdom 把混淆代码跑起来还原真实 DOM。"
tags: ["CTF","学习笔记","工具箱","脚本"]
category: 学习笔记
draft: false
---

> **CTF Web 学习笔记**（共 19 篇）　[📖 系列总览](/posts/ctf-learning/00-overview/)　·　[← 99-1 浏览器与 Burp](/posts/ctf-learning/99-1-browser-burp/)　·　[99-3 git 速查 →](/posts/ctf-learning/99-3-git/)

## 三、curl.exe 速查（PowerShell 里必须写 `curl.exe`）

> PowerShell 里 `curl` 是 `Invoke-WebRequest` 的别名，会报奇怪的参数错 —— **必须写 `curl.exe`**。

| 参数 | 作用 | 本套笔记中的实例 |
|---|---|---|
| `-X POST` | 指定方法 | `curl.exe -X PUT --data-binary "@x.txt" URL` |
| `-H "K: V"` | 加请求头 | `-H "Content-Type: application/json"` |
| `-d "a=b"` | 表单 body | |
| `--data-urlencode "a=中文"` | **自动 URL 编码的表单** | 02 题：`--data-urlencode "declaration=织云阁=第一"` |
| `--data-binary "@文件"` | 用文件当 body（避开中文编码） | 03 第七关：PUT 裸 body |
| `-b "k=v"` | 带 Cookie | 03 第五关：`-b "user=xt"` |
| `-A "xxx"` | 指定 User-Agent | 03 第四关：`-A "Moe Browser"` |
| `-e "url"` | 指定 Referer | 03 第六关：`-e "http://panshi/entry"` |
| `-O` | 下载文件 | 04 题：`curl.exe -O http://靶机/www.zip` |
| `-i` | 连响应头一起显示 | 想找 `Set-Cookie` / 自定义头时 |

---

## 四、Python 速查

### 最小请求模板（带中文处理）

```python
import json, urllib.request, urllib.error

def post(url, obj=None, headers=None, raw=None):
    h = {"User-Agent": "Mozilla/5.0"}
    if obj is not None:
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")   # ★ 关键：显式 UTF-8
        h["Content-Type"] = "application/json; charset=utf-8"
    elif raw is not None:
        data = raw if isinstance(raw, bytes) else raw.encode("utf-8")
    else:
        data = None
    if headers: h.update(headers)
    req = urllib.request.Request(url, data=data, headers=h, method="POST" if data else "GET")
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")
```

### 并发探测模板（试很多值时用）

```python
import concurrent.futures, itertools
def probe(x):
    ...
with concurrent.futures.ThreadPoolExecutor(max_workers=16) as ex:
    for res in ex.map(probe, candidates):
        if res: print(res)
```

### 脚本开头永远加这句（否则中文/符号会崩）

```python
import sys
try: sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception: pass
```

---

## 五、Node / jsdom 速查（分析前端混淆代码用）

### 套路一：造"假 DOM"跑混淆代码，在旁边装监控

```js
const fs = require('fs');
const captured = [];
function node(t) {
  return new Proxy({ textContent: t, data: t }, {
    set(tg, k, v) { if (k === 'textContent') captured.push(v); tg[k] = v; return true; },  // ★ 摄像头
    get(tg, k) { return tg[k]; }
  });
}
global.document = {
  body: { appendChild: (n) => captured.push('[append] ' + n.textContent) },
  createComment: (t) => node(t),
  createElement: () => node(''),
  getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
};
global.window = global; global.self = global;
global.navigator = { userAgent: 'node' };
eval(fs.readFileSync('目标.js', 'utf8'));    // 直接跑
console.log(captured);
```

> **为什么有效**：混淆只让代码"难读"，不影响"能跑"。跑起来就能观察行为。

### 套路二：用真 DOM（jsdom）复核

```powershell
npm install jsdom --cache .npmcache      # 沙箱环境下指定 cache 目录
```

```js
const { JSDOM } = require('jsdom');
const dom = await JSDOM.fromURL('http://靶机/', {
  runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true });
await new Promise(r => setTimeout(r, 3000));
const w = dom.window.document.createTreeWalker(dom.window.document, dom.window.NodeFilter.SHOW_COMMENT);
let n; while ((n = w.nextNode())) console.log(n.data);      // 打印所有注释
```

> 假 DOM 快但可能有偏差，**关键结论要用真 DOM 复核**。
