# Templater 脚本使用指南

## 问题描述
Obsidian的Templater插件在运行脚本时会将脚本内容插入到文档中，这通常不是我们想要的结果。

## 解决方案

### 方案1：修改脚本返回值（推荐）
将脚本的返回值改为空字符串 `""`，这样Templater运行时就不会插入任何内容到文档中。

**示例：**
```javascript
// 修改前
return `已更新updated字段为: ${now}`;

// 修改后  
return ""; // 返回空字符串，不插入内容
```

### 方案2：使用Templater的User Scripts功能
1. 在Templater设置中启用"User Scripts"
2. 将脚本放在正确的目录中：
   - Windows: `%APPDATA%\Obsidian\obsidian-xxx\templater-obsidian\scripts\`
   - macOS: `~/Library/Application Support/obsidian-xxx/templater-obsidian/scripts/`
   - Linux: `~/.config/obsidian-xxx/templater-obsidian/scripts/`

### 方案3：使用命令面板运行脚本
1. 按 `Ctrl/Cmd + P` 打开命令面板
2. 输入 "Templater: Run script"
3. 选择要运行的脚本
4. 这样脚本会执行但不会插入内容到当前文档

### 方案4：创建专门的模板文件
如果您需要脚本输出特定内容，可以：
1. 创建一个模板文件（如 `timestamp-template.md`）
2. 在模板中使用 `<% tp.file.include("[[timestamp-template]]") %>`
3. 这样只会插入模板内容，而不是脚本代码

## 当前脚本说明
`smart-update-timestamp.js` 脚本已经修改为返回空字符串，运行后不会在文档中插入任何内容。

## 使用建议
- 对于工具类脚本（如更新时间戳），建议使用方案1
- 对于需要输出内容的脚本，建议使用方案4
- 对于复杂的自动化任务，建议使用方案2的User Scripts功能