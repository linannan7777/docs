## 如何更高效的在不同项目使用nvm切换不同的node版本
使用 `nvm`（Node Version Manager）高效地在不同项目间切换 Node.js 版本，可以遵循以下最佳实践：

1. **项目级 `.nvmrc` 文件**：
   - 在每个项目根目录下创建一个 `.nvmrc` 文件，里面写入推荐使用的 Node.js 版本号，如 `16.16.0`。这样，当进入项目目录后，使用 `nvm use` 命令（无需指定版本），nvm 会自动读取 `.nvmrc` 文件并切换到指定的 Node.js 版本。

2. **自动切换版本**：
   - 利用 `nvm` 的自动切换功能，可以设置 `nvm` 在每次进入项目目录时自动检测并使用 `.nvmrc` 文件中指定的版本。这可以通过在 shell 配置文件（如 `.bashrc`, `.zshrc`）中添加以下代码实现：
     ```shell
     ## 自动加载项目中的 .nvmrc 文件
     autoload -U add-zsh-hook
     add-zsh-hook chpwd load-nvmrc
     load-nvmrc() {
       if [ -f .nvmrc ]; then
         nvm use
       elif [ -f ../.nvmrc ]; then
         nvm use
       fi
     }
     ## 初始化加载
     load-nvmrc
     ```
     注意：这段代码适用于Zsh，对于Bash或其他shell，语法可能略有不同。

3. **批量管理项目**：
   - 如果你有多个项目需要频繁切换，可以利用终端的多标签页或者工作区功能，为每个项目打开一个独立的终端会话，每个会话保持在对应项目的目录下，并已切换到正确的 Node.js 版本。

4. **脚本自动化**：
   - 对于复杂的项目结构或特殊需求，可以编写脚本来自动化版本切换和启动开发环境的过程。例如，编写一个简单的脚本，先切换 Node.js 版本，然后启动开发服务器或执行其他必要的命令。

5. **定期更新 nvm 和 Node.js**：
   - 保持 `nvm` 和 Node.js 版本最新，以便获得最新的特性和安全修复。使用 `nvm update` 更新 `nvm` 本身，用 `nvm install latest` 安装最新的 Node.js 版本。

6. **环境隔离**：
   - 如果你在同一台机器上同时开发多个项目，使用虚拟环境（如 Docker 容器或 VMs）可以进一步隔离项目环境，每个环境可以预装所需版本的 Node.js，减少版本冲突的风险。

遵循这些实践，你可以有效地在不同项目间快速、准确地切换 Node.js 版本，提高开发效率并减少潜在的版本兼容性问题。

## 配置了.nvmrc文件，使用 nvm use 命令后返回Invalid version.
如果你在项目中配置了 `.nvmrc` 文件，并尝试使用 `nvm use` 命令时收到 "Invalid version." 的错误信息，这通常意味着 `nvm` 无法识别 `.nvmrc` 文件中指定的 Node.js 版本号格式。这可能由以下原因引起：

1. **版本号格式错误**：确保 `.nvmrc` 文件中的版本号格式正确无误。正确的格式通常是 `x.y.z`，其中 x、y 和 z 分别代表主版本号、次版本号和补丁版本号。例如：`16.14.0`。检查是否有拼写错误，多余的字符，或是使用了非数字字符。

2. **包含前导或尾随空白字符**：有时候，编辑器或意外的操作可能导致 `.nvmrc` 文件中版本号前后有空格、制表符等空白字符。确保版本号周围没有多余的空白字符。

3. **编码问题**：虽然较为罕见，但文件编码问题也可能导致 `nvm` 无法正确读取版本号。确保 `.nvmrc` 文件保存为普通的文本格式，如 UTF-8 编码。

4. **版本号不存在**：确认所指定的 Node.js 版本是否真实存在并且已被 `nvm` 索引。你可以通过运行 `nvm ls-remote` 查看所有可安装的 Node.js 版本。如果版本号确实不存在，你需要在 `.nvmrc` 中替换为一个有效的版本号。

解决步骤如下：

- 打开 `.nvmrc` 文件，检查并修正版本号。
- 清除版本号周围的任何空白字符。
- 确认文件编码无误。
- 使用 `nvm ls-remote` 确认版本号的有效性。
- 再次尝试运行 `nvm use`。

如果问题依旧存在，尝试手动删除 `.nvmrc` 文件中的内容，重新输入正确的版本号，保存后再次执行 `nvm use`。如果以上步骤都无法解决问题，可能需要检查 `nvm` 是否正确安装和配置，或者考虑重新安装 `nvm`。

## 为什么我本地nvm version返回的是1.1.9?
本地的 `nvm` 返回版本号 `1.1.9` 表明你可能使用了一个不同的 `nvm` 实现。`nvm` 有多个不同的实现，其中一些针对特定的平台或环境：

1. **nvm-sh (Node Version Manager)**: 这是最常用的 `nvm` 实现，通常在 Unix 系统上使用（如 Linux 和 macOS）。它的最新版本通常是 `0.xx.x` 系列。
2. **nvm-windows**: 这是 `nvm` 的 Windows 实现，版本号通常在 `1.xx.x` 系列。

你提到的 `1.1.9` 版本可能是 `nvm-windows`。以下是一些相关的信息和解决方法：

- 检查和安装正确的 `nvm` 版本

  - 如果你在使用 Unix 系统（Linux, macOS）
1. **卸载当前版本**:
   如果你安装了错误的 `nvm` 版本，首先卸载它。这个步骤因系统和安装方式不同而异，但一般情况下可以使用：
   ```sh
   rm -rf ~/.nvm
   ```

2. **重新安装 `nvm-sh`**:
   按照以下步骤安装 `nvm-sh`：
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   ```
   或者使用 wget：
   ```sh
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   ```

3. **加载 nvm**:
   确保在当前 shell session 中加载 `nvm`。可以在 `.bashrc`、`.bash_profile`、`.zshrc` 或其他 shell 配置文件中添加以下行：
   ```sh
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" ## This loads nvm
   ```

   然后重新启动终端或运行以下命令使配置文件生效：
   ```sh
   source ~/.bashrc
   ```
   或
   ```sh
   source ~/.zshrc
   ```

> 如果你在使用 Windows

1. **使用 nvm-windows**:
   如果你在 Windows 上，`nvm-windows` 可能是你更合适的选择。你可以从 [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases) 页面下载最新版本并按照安装说明进行安装。

2. **检查版本**:
   安装后，可以使用以下命令检查 `nvm-windows` 的版本：
   ```sh
   nvm version
   ```

>确认 nvm 正常工作

无论你使用的是哪种实现，确保安装正确并加载后，以下命令应该正常工作：
```sh
nvm ls-remote
nvm install <version>
nvm use <version>
nvm ls
```

>总结

你当前看到的 `1.1.9` 版本可能是 `nvm-windows`。如果你使用的是 Unix 系统，建议卸载当前的 `nvm` 版本并安装 `nvm-sh`。如果你使用的是 Windows 系统，则继续使用 `nvm-windows` 并参考它的文档和帮助信息。



## nvm-windows 如何使用.npmrc?

`nvm-windows` 默认不支持 `.nvmrc` 文件，但你可以通过一些手动步骤来实现类似的功能。以下是一些方法来在 `nvm-windows` 上使用 `.nvmrc` 文件：

> 方法 1：手动切换版本

1. **创建 `.nvmrc` 文件**:
   在你的项目根目录中创建一个 `.nvmrc` 文件，并在其中写入你希望使用的 Node.js 版本，例如：
   ```
   14.17.0
   ```

2. **手动读取并切换版本**:
   每次进入项目目录时，可以手动读取 `.nvmrc` 文件并切换 Node.js 版本。你可以在 PowerShell 中运行以下命令：
   ```powershell
   $version = Get-Content .nvmrc
   nvm use $version
   ```

> 方法 2：使用 PowerShell 脚本自动切换版本

1. **创建 PowerShell 脚本**:
   创建一个 PowerShell 脚本（例如 `use-node.ps1`）并将其放在你的项目根目录中。脚本内容如下：
   ```powershell
   $version = Get-Content .nvmrc
   nvm use $version
   ```

2. **运行脚本**:
   每次进入项目目录时，运行这个脚本来切换 Node.js 版本：
   ```powershell
   .\use-node.ps1
   ```

> 方法 3：在 PowerShell 配置中自动切换

如果你希望在进入项目目录时自动切换版本，可以在 PowerShell 配置文件中添加以下内容：

1. **编辑 PowerShell 配置文件**:
   打开或创建你的 PowerShell 配置文件（`$PROFILE`）。

2. **添加以下代码**:
   将以下代码添加到配置文件中，以便在每次进入包含 `.nvmrc` 文件的目录时自动切换 Node.js 版本：
   ```powershell
   function Set-NodeVersion {
       if (Test-Path .nvmrc) {
           $version = Get-Content .nvmrc
           nvm use $version
       }
   }

   $ExecutionContext.InvokeCommand.InvokeScript("Register-ObjectEvent -InputObject (Get-PSProvider -PSProvider FileSystem).Drives -EventName 'PropertyChanged' -Action {
       $global:location = (Get-Location).Path
       Set-NodeVersion
   }")
   ```

3. **重启 PowerShell**:
   重启 PowerShell 以使配置文件生效。

> 总结

虽然 `nvm-windows` 没有内置对 `.nvmrc` 文件的支持，但通过上述方法，你可以手动或自动实现类似的功能。手动方法适合偶尔使用，而自动方法可以提高日常工作的效率。
