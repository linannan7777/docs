### Electron是什么？
Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验。

### 快速入门

## 安装
```sh
npm install --save-dev electron
```
希望能够执行 Electron 如下所示，在您的`package.json`配置文件中的`scripts`字段下增加一条`start`命令：
```json
{
  "scripts": {
    "start": "electron ."
  }
}
```
package.json 文件的 author 与 description 可为任意值，但对于应用打包是必填项。
## 运行主进程

任何 Electron 应用程序的入口都是 main 文件。 这个文件控制了主进程，它运行在一个完整的Node.js环境中，负责控制您应用的生命周期，显示原生界面，执行特殊操作并管理渲染器进程。

执行期间，Electron 将依据应用中 package.json 配置下main字段中配置的值查找此文件，应该在脚手架步骤中配置。

## 在窗口中打开您的页面

现在您有了一个页面，将它加载进应用窗口中。 要做到这一点，你需要 两个Electron模块：

*   app 模块，它控制应用程序的事件生命周期。
*   BrowserWindow 模块，它创建和管理应用程序 窗口。

因为主进程运行着 Node.js，您可以在 main.js 文件头部将它们导入作为 CommonJS 模块：
```js
const { app, BrowserWindow } = require('electron')
```

然后，添加一个createWindow()方法来将index.html加载进一个新的BrowserWindow实例。
```js

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile('index.html')
}
```
接着，调用createWindow()函数来打开您的窗口。

在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。 您可以通过使用 app.whenReady() API来监听此事件。 在whenReady()成功后调用createWindow()。
```js
app.whenReady().then(() => {
  createWindow()
})
```
## electron 控制台 警告
```
Electron Security Warning (Disabled webSecurity) This renderer process has "webSecurity" disabled. This
  exposes users of this app to severe security risks.

For more information and help, consult
https://electronjs.org/docs/tutorial/security.
This warning will not show up
once the app is packaged.
```
需要在 main.js 文件中 加如下代码
```js
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
```
## 管理窗口的生命周期
应用程序窗口在每个OS下有不同的行为，Electron将在app中实现这些约定的责任交给开发者们。

一般而言，你可以使用 进程 全局的 platform 属性来专门为某些操作系统运行代码。
```js
// 在Windows和Linux上，关闭所有窗口时完全退出应用程序。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 监听 app 模块的 activate 事件。如果没有任何浏览器窗口是打开的，则调用 createWindow() 方法。
app.whenReady().then(() => {
  createWindow()
  // 在 macOS 系统内, 如果没有已开启的应用窗口
  // 点击托盘图标时通常会重新创建一个新窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

```

## 通过预加载脚本从渲染器访问Node.js
在主进程通过Node的全局 process 对象访问这个信息是微不足道的。 然而，你不能直接在主进程中编辑DOM，因为它无法访问渲染器 文档 上下文。 它们存在于完全不同的进程

预加载脚本在渲染器进程加载之前加载，并有权访问两个 渲染器全局 (例如 window 和 document) 和 Node.js 环境

```js
// preload.js 的新脚本
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
```

要将此脚本附加到渲染器流程，请在你现有的 BrowserWindow 构造器中将路径中的预加载脚本传入 webPreferences.preload 选项。

```js

const { app, BrowserWindow } = require('electron')
// 在你文件顶部导入 Node.js 的 path 模块
const path = require('node:path')

// 修改已有的 createWindow() 方法
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}
```
## 打包并分发您的应用程序

最快捷的打包方式是使用 Electron Forge

1、在 package.json 文件中添加 description 的说明，否则 打包 将失败提示 空白描述无效

2、将 Electron Forge 添加到您应用的开发依赖中，并使用其"import"命令设置 Forge 的脚手架：
```sh
npm install --save-dev @electron-forge/cli
npx electron-forge import
```
3、使用 Forge 的 make 命令来创建可分发的应用程序
```
npm run make

```
Electron-forge 会创建 out 文件夹，您的软件包将在那里找到。