// Templater脚本：只更新updated字段
// 将此脚本放在Templater的脚本文件夹中

module.exports = async function(tp) {
    // 获取当前时间
    const now = tp.date.now("YYYY-MM-DD HH:mm:ss");
    
    // 获取当前文件内容
    const file = tp.file.find_tfile(tp.file.title);
    const content = await tp.file.read(file);
    
    // 只更新updated字段，保持其他时间字段不变
    const updatedContent = content.replace(
        /updated: .*/,
        `updated: ${now}`
    );
    
    // 写回文件
    await tp.file.write(file, updatedContent);
    
    return `Updated only 'updated' field to: ${now}`;
};
