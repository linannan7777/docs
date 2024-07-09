import path from 'node:path'
import fs from 'node:fs'
export const sidebarList = (dicPath, textName) => {
  const files = fs.readdirSync(path.join(__dirname, '../../', dicPath))
  const mdFiles = files.filter(file => file.endsWith('.md'))
  const children = mdFiles.map(file => {
    // 获取文件名
    const fileName = file.replace(/(\.\/)|(\.md)/g, '')
    // 获取文件路径
    const filePath = fileName
    // 获取文件名
    const fileText = fileName.replace(/(\/)/g, '')
    if (fileText.toLocaleLowerCase() === 'readme') {
      return {
        text: '简介',
        link: filePath.replace(/readme/i, '')
      }
    }
    return {
      text: fileText,
      link: filePath
    }
  })
  return [{
    text: textName,
    children: children,
  }]
}