# 入门篇
## 创建并运行 npm script 命令

### npm init
npm 为我们提供了快速创建 package.json 文件的命令 npm init，执行该命令会问几个基本问题，如包名称、版本号、作者信息、入口文件、仓库地址、许可协议等，多数问题已经提供了默认值，你可以在问题后敲回车接受默认值。

或者你可以使用 `npm init -f`（意指 --force，或者使用 --yes）告诉 npm 直接跳过参数问答环节，快速生成 package.json.

初始化 package.json 时的字段默认值是可以自己配置的:
```sh
npm config set init.author.email "xxx@gmail.com"
npm config set init.author.name "xxx"
npm config set init.author.url "http://github.com/xxx"
npm config set init.license "MIT"
npm config set init.version "0.1.0"
```

### 用 npm run 执行任意命令
作为 npm 内置的核心功能之一，npm run 实际上是 npm run-script 命令的简写。当我们运行 npm run xxx 时，基本步骤如下：

1、从 package.json 文件中读取 scripts 对象里面的全部配置；

2、以传给 npm run 的第一个参数作为键，本例中为 xxx，在 scripts 对象里面获取对应的值作为接下来要执行的命令，如果没找到直接报错；

3、在系统默认的 shell 中执行上述命令，系统默认 shell 通常是 bash，windows 环境下可能略有不同。

如果不带任何参数执行 npm run，它会列出可执行的所有命令。

如果运行 npm run eslint，npm 会在 shell 中运行 eslint **.js。
有没有好奇过上面的 eslint 命令是从哪里来的？其实，npm 在执行指定 script 之前会把 node_modules/.bin 加到环境变量 $PATH 的前面，这意味着任何内含可执行文件的 npm 依赖都可以在 npm script 中直接调用，换句话说，你不需要在 npm script 中加上可执行文件的完整路径。比如 ./node_modules/.bin/eslint **.js。


## 运行多个 npm script 的各种姿势
前端项目通常会包括多个 npm script，对多个命令进行编排是很自然的需求，有时候需要将多个命令串行，即脚本遵循严格的执行顺序；有时候则需要让它们并行来提高速度，比如不相互阻塞的 npm script。社区中也有比 npm 内置的多命令运行机制更好用的解决方案：npm-run-all

### 让多个 npm script 串行

只需要用 && 符号把多条 npm script 按先后顺序串起来即可

需要注意的是，串行执行的时候如果前序命令失败（通常进程退出码非0），后续全部命令都会终止

### 让多个 npm script 并行

在严格串行的情况下，我们必须要确保代码中没有编码规范问题才能运行测试，在某些时候可能并不是我们想要的，因为我们真正需要的是，代码变更时同时给出测试结果和测试运行结果。这就需要把子命令的运行从串行改成并行，实现方式更简单，把连接多条命令的 `&&` 符号替换成 `&`

但 npm 内置支持的多条命令并行跟 js 里面同时发起多个异步请求非常类似，它只负责触发多条命令，而不管结果的收集，如果并行的命令执行时间差异非常大，就会发现有些结果在进程退出之后才输出。怎么解决这个问题呢？

答案也很简单，在命令的增加` & wait`

加上 wait 的额外好处是，如果我们在任何子命令中启动了长时间运行的进程，比如启用了 mocha 的 --watch配置，可以使用 ctrl + c来结束进程，如果没加的话，你就没办法直接结束启动到后台的进程。

### 更好的管理方式
可以使用 npm-run-all实现更轻量和简洁的多命令运行

npm-run-all是一个npm包，它允许你运行多个npm script，并且可以控制它们的执行顺序。

**npm-run-all安装：**
```sh
npm i npm-run-all -D
```

**npm-run-all使用：**
```sh
// 修改前
"scripts": {
  "test": "npm run lint:js & npm run lint:css & npm run lint:json & npm run lint:markdown & mocha tests/ & wait"
}
// 修改后
"scripts": {
  "test": "npm-run-all lint:js lint:css lint:json lint:markdown mocha"
}
```
npm-run-all 还支持通配符匹配分组的 npm script，上面的脚本可以进一步简化成
```sh
"scripts": {
  "test": "npm-run-all lint:* mocha"
}
```
并行执行的时候，我们并不需要在后面增加 & wait，因为 npm-run-all 已经帮我们做了


## 给 npm script 传递参数和添加注释

### 给 npm script 传递参数
eslint 内置了代码风格自动修复模式，只需给它传入 --fix参数即可。但是如果调用其他的脚本传入参数时该如何呢？

```sh

"scripts": {
  "lint:js": "eslint *.js",
  "lint:js:fix": "npm run lint:js -- --fix"
}
```
要格外注意 --fix参数前面的 --分隔符，意指要给 npm run lint:js实际指向的命令传递额外的参数。

### 给 npm script 添加注释

如果 package.json 中的 scripts 越来越多，或者出现复杂的编排命令，你可能需要给它们添加注释以保障代码可读性，但 json 天然是不支持添加注释的，下面是 2 种比较 trick 的方式。

第一种方式是，package.json 中可以增加 //为键的值，注释就可以写在对应的值里面，npm 会忽略这种键，比如，我们想要给 test 命令添加注释，按如下方式添加：

```sh

"scripts": {
  "//": "运行所有代码检查和单元测试",
  "test": "npm-run-all --parallel lint:* mocha"
}
```
这种方式的明显不足是，npm run 列出来的命令列表不能把注释和实际命令对应上，如果你声明了多个，npm run 只会列出最后那个


另外一种方式是直接在 script 声明中做手脚，因为命令的本质是 shell 命令（适用于 linux 平台），我们可以在命令前面加上注释，具体做法如下：
```sh

"scripts": {
  "test": "# 运行所有代码检查和单元测试 \n    npm-run-all --parallel lint:* mocha"
}
```
**注意注释后面的换行符 \n 和多余的空格。** 
换行符是用于将注释和命令分隔开，这样命令就相当于微型的 shell 脚本，多余的空格是为了控制缩进，也可以用制表符 \t替代。这种做法能让 npm run 列出来的命令更美观，但是 scripts 声明阅读起来不那么整齐美观。


上面两种方式都有明显的缺陷，个人建议的更优方案还是把复杂的命令剥离到单独的文件中管理，在单独的文件中可以自由给它添加注释

### 调整 npm script 运行时日志输出
- 默认日志输出级别

即不加任何日志控制参数得到的输出，可能是你最常用的，能看到执行的命令、命令执行的结果。

- 显示尽可能少的有用信息

结合其他工具调用 npm script 的时候比较有用，需要使用 --loglevel silent，或者 --silent，或者更简单的 -s来控制

- 显示尽可能多的运行时状态

排查脚本问题的时候比较有用，需要使用 --loglevel verbose，或者 --verbose，或者更简单的 -d来控制


## 监听文件变化并自动运行 npm script

### 单元测试自动化
mocha 本身支持 --watch参数，即在代码变化时自动重跑所有的测试，我们只需要在 scripts 对象中新增一条命令即可

### 代码检查自动化
我们使用的代码检查工具 stylelint、eslint、jsonlint不全支持 watch 模式，这里我们需要借助 onchange 工具包来实现，onchange 可以方便的让我们在文件被修改、添加、删除时运行需要的命令。

使用如下命令安装 onchange 到项目依赖中：
```sh
npm i onchange -D
# npm install onchange --save-dev
# yarn add onchange -D
```

添加 watch:lint 和 watch 两个子命令：
```sh
"watch": "npm-run-all --parallel watch:*",
"watch:lint": "onchange -i \"**/*.js\" \"**/*.less\" -- npm run lint",
"watch:test": "npm t -- --watch",
```


# 实战篇