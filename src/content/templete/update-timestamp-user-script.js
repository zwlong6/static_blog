// Templater用户脚本：只更新updated字段
// 使用方法：在命令面板中运行此脚本

async function updateTimestamp() {
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
    
    // 只更新updated字段，保持其他时间字段不变
    const updatedContent = content.replace(
        /updated: .*/,
        `updated: ${now}`
    );
    
    // 写回文件
    await app.vault.modify(activeFile, updatedContent);
    
    new Notice(`已更新updated字段为: ${now}`);
}

// 执行脚本
updateTimestamp();
