---
title: <% tp.file.title %>
description: 文章描述（必需）
published: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
pubDate: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
updated: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>  # 每次保存时只更新此字段
draft: true
series: markdown
tags:
  - Markdown
  - Blogging
category: Examples
pinned: true
author: zwl
licenseName: CC BY 4.0
sourceLink: https://zzzero.site
image: http://www.98qy.com/sjbz/api.php?r=<% tp.date.now("YYMMDDHHmmss") %>
---

# <% tp.file.title %>

## 文章内容

在这里写入您的文章内容...
