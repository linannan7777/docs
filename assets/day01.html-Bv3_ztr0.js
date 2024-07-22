import{_ as e,c as i,o as s,d as a}from"./app-CfKFMHBg.js";const n={},t=a(`<p>.git/objects/06/e21bb0105e2de6c846725a9a7172f57dd1af96 workspae项目的第一个版本(树对象)</p><p>.git/objects/56/0a3d89bf36ea10794402f6664740c284d4ae3b test.txt文件的第一个版本(git对象)</p><p>.git/objects/9d/74ec4055e0f1edc1921d749c250380ca7b5ebd workspae项目的第二个版本(树对象)</p><p>.git/objects/c3/1fb1e89d8b6b3ef34cdb5a2f999d6e29b822ba test.txt文件的第二个版本(git对象)</p><p>.git/objects/ea/e614245cc5faa121ed130b4eba7f9afbcc7cd9 new.txt文件的第一个版本(git对象)</p><p>git操作最基本的流程</p><ul><li>创建工作目录 对工作目录进行修改</li><li>git add ./ <ul><li>git hash-object -w 文件名(修改了多少个工作目录中的文件 此命令就要被执行多少次)</li><li>git update-index ...</li></ul></li><li>git commit -m &quot;注释内容&quot; <ul><li>git write-tree</li><li>git commit-tree</li></ul></li></ul><p>git高层命令(CRUD)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">git init            初始化仓库</span>
<span class="line">git status          查看文件的状态</span>
<span class="line">git diff            查看哪些修改还没有暂存</span>
<span class="line">git diff --staged   查看哪些修改以及被暂存了 还没提交</span>
<span class="line">git log --oneline   查看提交的历史记录</span>
<span class="line">git add ./          将修改添加到暂存区</span>
<span class="line">git rm 文件名       删除工作目录中对应的文件 再将修改添加到暂存区</span>
<span class="line">git mv 原文件名 新文件名  将工作目录中的文件进行重命名 再将修改添加到暂存区</span>
<span class="line">git commit </span>
<span class="line">git commit -a </span>
<span class="line">git commit -a -m 注释  </span>
<span class="line">                将暂存区提交到版本库</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git高层命令(分支)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">git branch                显示分支列表</span>
<span class="line">git branch 分支名         创建分支</span>
<span class="line">git checkout 分支名       切换分支</span>
<span class="line">git branch -D 分支名      强制删除分支</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function c(d,p){return s(),i("div",null,l)}const m=e(n,[["render",c],["__file","day01.html.vue"]]),o=JSON.parse('{"path":"/tools/git/day01.html","title":"","lang":"zh","frontmatter":{},"headers":[],"git":{"updatedTime":1721098889000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"tools/git/day01.md"}');export{m as comp,o as data};
