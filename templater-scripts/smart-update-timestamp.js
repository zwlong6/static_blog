module.exports = async function(tp) {
    // 获取当前活动文件
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("没有活动文件");
        return ""; // 返回空字符串，不插入内容
    }
    
    // 读取文件内容
    const content = await app.vault.read(activeFile);
    
    // 获取当前时间（UTC+8时区）
    const now = new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/\//g, '-');
    
    // 使用更精确的正则表达式，只匹配updated字段
    const updatedContent = content.replace(
        /^updated:\s*.*$/m,  // 只匹配行首的updated字段
        `updated: ${now}`
    );
    
    // 写回文件
    await app.vault.modify(activeFile, updatedContent);
    
    new Notice(`已更新updated字段为: ${now}`);
    return ""; // 返回空字符串，不插入内容
};
