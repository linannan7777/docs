import path from 'node:path'
import fs from 'node:fs'
// export const sidebarList = (dirPath, textName) => {
//   const sideList = []
//   const files = fs.readdirSync(path.join(__dirname, '../../', dirPath))
//   // console.log({files})
//   // const mdFiles = files.filter(file => file.endsWith('.md'))
//   const children = files.map(file => {
//     const filesPath = path.join(files, file)
//     console.log(filesPath)
//     // if (fs.lstatSync(filePath).isDirectory()) {
//     //   sideList.push({
//     //     text: file,
//     //     children: sidebarList(filePath) // 递归处理子目录
//     //   })
//     // } else {
//       // 获取文件名
//       const fileName = file.replace(/(\.\/)|(\.md)/g, '')
//       // 获取文件路径
//       const filePath = fileName
//       // 获取文件名
//       const fileText = fileName.replace(/(\/)/g, '')
//       if (fileText.toLocaleLowerCase() === 'readme') {
//         sideList.push({
//           text: '简介',
//           link: filePath.replace(/readme/i, '')
//         })
//       } else {
//         sideList.push({
//           text: fileText,
//           link: filePath
//         })
//       }
//     // }
//   })
//   return sideList
// }



// 文件根目录
const DIR_PATH = path.resolve();
console.log(DIR_PATH)
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  ".vitepress",
  "assets",
];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 把方法导出直接使用
function getList(params, path1, pathname) {
  // 存放结果
  const res = [];
  // 开始遍历params
  for (let file in params) {
    // 拼接目录
    const dir = path.join(path1, params[file]);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir);
      const hasMdFile = files.some(item => path.extname(item) === '.md')
      if (hasMdFile) {
        res.push({
          text: params[file],
          collapsible: true,
          children: getList(files, dir, `${pathname}/${params[file]}`),
        });
      }
    } else {
      // 获取名字
      const name = path.basename(params[file]);
      // 排除非 md 文件
      const suffix = path.extname(params[file]);
      if (suffix !== ".md") {
        continue;
      }
      if (name.toLocaleLowerCase() === 'readme.md') {
        res.unshift({
          text: '简介',
          link: `${pathname}/${name}`,
        })
      } else {
        res.push({
          text: name,
          link: `${pathname}/${name}`,
        })
      }
    }
  }
  // 对name做一下处理，把后缀删除
  res.map((item) => {
    item.text = item.text.replace(/\.md$/, "");
  });
  res.sort((a, b) => parseInt(a.text) - parseInt(b.text))
  return res;
}

export const sidebarList = (pathname) => {
  // 获取pathname的路径
  const dirPath = path.join(__dirname, '../../', pathname);
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname);
};