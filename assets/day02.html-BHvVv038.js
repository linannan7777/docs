import{_ as e,c as s,o as a,d as n}from"./app-CxrMoykp.js";const i={},t=n(`<h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支"><span>切换分支</span></a></h3><p>最佳实践: 每次切换分支前 当前分支一定得是干净的(已提交状态) 坑: 在切换分支时 如果当前分支上有未暂存的修改(第一次) 或者 有未提交的暂存(第一次) 分支可以切换成功 但是这种操作可能会污染其他分支 动三个地方 HEAD 暂存区 工作目录</p><h3 id="后悔药" tabindex="-1"><a class="header-anchor" href="#后悔药"><span>后悔药</span></a></h3><p>工作区 如何撤回自己在工作目录中的修改 : git checkout --filename 暂存区 如何何撤回自己的暂存 : git reset HEAD filename 版本库<br> 如何撤回自己的提交 : git commit --amend 1.注释写错了,重新给用户一次机会改注释</p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset"><span>reset</span></a></h3><p>git log :<br> git reflog : 主要是HEAD有变化 那么git reflog机会记录下来 三部曲 第一部： git rest --soft HEAD~ (--amend)<br> 只动HEAD (带着分支一起移动)<br> 第二部: git reset [--mixed] HEAD~ 动HEAD (带着分支一起移动)<br> 动了暂存区 第三部: git reset --hard HEAD~<br> 动HEAD (带着分支一起移动)<br> 动了暂存区 动了工作目录</p><h3 id="checkout" tabindex="-1"><a class="header-anchor" href="#checkout"><span>checkout</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">git  checkout commithash   &amp;   git reset --hard commithash         </span>
<span class="line">    1.  checkout只动HEAD    --hard动HEAD而且带着分支一起走</span>
<span class="line">    2.  checkout对工作目录是安全的   --hard是强制覆盖工作目录</span>
<span class="line"></span>
<span class="line">git checkout  commithash</span>
<span class="line">git checkout --filename  </span>
<span class="line">        相比于git reset --hard  commitHash --filename  </span>
<span class="line">        第一  第二步都没做</span>
<span class="line">        只会动了工作目录</span>
<span class="line">git checkout  commithash  &lt;file&gt;    </span>
<span class="line">        将会跳过第 1 步 </span>
<span class="line">        更新暂存区 </span>
<span class="line">        更新工作目录   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径reset" tabindex="-1"><a class="header-anchor" href="#路径reset"><span>路径reset</span></a></h3><p>git reset HEAD filename (reset 将会跳过第 1 步)<br> 动了暂存区</p>`,10),l=[t];function c(r,d){return a(),s("div",null,l)}const o=e(i,[["render",c],["__file","day02.html.vue"]]),p=JSON.parse('{"path":"/tools/git/day02.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":3,"title":"切换分支","slug":"切换分支","link":"#切换分支","children":[]},{"level":3,"title":"后悔药","slug":"后悔药","link":"#后悔药","children":[]},{"level":3,"title":"reset","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"checkout","slug":"checkout","link":"#checkout","children":[]},{"level":3,"title":"路径reset","slug":"路径reset","link":"#路径reset","children":[]}],"git":{"updatedTime":1721098889000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"tools/git/day02.md"}');export{o as comp,p as data};