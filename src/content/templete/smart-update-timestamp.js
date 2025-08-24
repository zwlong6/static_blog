// 智能更新脚本：只更新updated字段
// 确保不会影响published、pubDate、date字段

async function smartUpdateTimestamp() {
    // 获取当前活动文件
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("没有活动文件");
        return;
    }
    
    // 读取文件内容
    const content = await app.vault.read(activeFile);
    
    // 获取当前时间
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    
    // 使用更精确的正则表达式，只匹配updated字段
    // 确保不会匹配到其他时间字段
    const updatedContent = content.replace(
        /^updated:\s*.*$/m,  // 只匹配行首的updated字段
        `updated: ${now}`
    );
    
    // 写回文件
    await app.vault.modify(activeFile, updatedContent);
    
    new Notice(`已更新updated字段为: ${now}`);
}

// 执行脚本
smartUpdateTimestamp();
