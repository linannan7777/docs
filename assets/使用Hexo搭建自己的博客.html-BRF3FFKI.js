import{_ as e,c as s,o as n,b as a}from"./app-CstveDQQ.js";const l="/docs/assets/hexo-default-index-DvWhaLeK.png",i="/docs/assets/create-new-repo-T65WDBkf.png",d="/docs/assets/wanwang-DzWJMQA_.png",t="/docs/assets/dns-configuration-pJpM9CGb.png",r={},c=a(`<h2 id="使用hexo搭建自己的博客" tabindex="-1"><a class="header-anchor" href="#使用hexo搭建自己的博客"><span>使用Hexo搭建自己的博客</span></a></h2><p>对于一个程序员来说，搭建一个属于自己的博客平台是非常有意义的事情。首先，博客可以记录自己的成长历程，也是对自己一段时间学习和工作的总结和沉淀；其他，通过博客可以营销自己，增强自己在互联网或行业内的影响力，为将来更好的职业生涯打一个坚实的基础。前几年有一本名为《软技能 - 代码之外的生存指南》的畅销书，我记得书中有这么一段话：“流行乐队的音乐才华可能并不比夜店驻场乐队高多少，他们为什么就可以在全世界巡回演出，创造一个又一个白金记录？……你的营销做得越好，你的才华才能表现得淋漓尽致。”</p><p>这里顺便啰嗦两句，在互联网如此发达的今天，我们应该如何营销自己呢？自我营销首先要从打造个人品牌做起，对于程序员来说，最容易去做好的一件事情还是搭建自己的博客。博客相当于是你在互联网上的一个基地，尤其是当你拥有了属于自己的独立博客后，你可以做很多自己想做的事情，既可以传达自己的思想，又可以提升自己的影响力，当然如果你的博客经营得非常好，你可以从中获利。当然，除了博客，直播、视频网站、投稿、写书、技术活动都是可选的自我营销方式。当然，做自我营销也需要持之以恒，三天打鱼两天晒网是很难有什么收获的。</p><h3 id="hexo概述" tabindex="-1"><a class="header-anchor" href="#hexo概述"><span>Hexo概述</span></a></h3><p>Hexo是一个快速、简洁且高效的博客框架，它能够将<a href="https://zh.wikipedia.org/zh-hans/Markdown" target="_blank" rel="noopener noreferrer">Markdown格式</a>的文档渲染成漂亮的网页，这样我们就可以在很短的时间内迅速的创建出网站的静态内容，而Markdown格式对程序员来说相信并不陌生。要想使用Hexo来搭建自己的博客，我实在想不出有什么教程比<a href="https://hexo.io/zh-cn/" target="_blank" rel="noopener noreferrer">官方文档</a>更好，强烈建议大家阅读官方文档来了解Hexo，下面我只做一个简要的使用说明。</p><blockquote><p>说明：<strong>Markdown</strong>是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，同时也对图片、图表、数学公式提供了支持，可以用来书写电子书、软件文档等，同时也可以非常方便的转换为HTML页面或者是PDF文档。</p></blockquote><p>要使用Hexo，首先得确保计算机上已经安装了<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">node.js</a>环境和<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git</a>环境，前者是一个能够在服务器端运行JavaScript代码的环境，后者是版本控制工具。安装node.js主要是为了使用它的包管理工具npm，所以不需要先系统的学习node.js的知识；而安装git是为了利用版本控制系统克隆代码已经将博客项目托管到三方平台，如果想学习git，最好的资料是官方网站上的<a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noopener noreferrer"><em>Git Pro</em></a>和<a href="http://www.worldhello.net/gotgit/index.html" target="_blank" rel="noopener noreferrer">《Git权威指南》</a>。安装完成后，我们可以通过下面的命令来确认node.js环境以及它的包管理工具是否安装成功。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">node --version</span>
<span class="line">npm --version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过下面的命令来检查是否安装了git环境。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">git --version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以使用npm来安装Hexo，npm是node.js的包管理工具，跟Python的pip工具作用一样，可以用它来安装依赖库和三方工具。在第一次使用npm的时候，我们可以先将npm的下载源更换为国内的淘宝镜像，这样下载的速度会有非常显著的提升。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">npm config set registry https://registry.npm.taobao.org</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来我们就通过npm来安装Hexo，命令如下所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">npm install -g hexo-cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装成功后，就可以使用Hexo来创建属于自己的博客啦。</p><h3 id="搭建博客" tabindex="-1"><a class="header-anchor" href="#搭建博客"><span>搭建博客</span></a></h3><blockquote><p>说明：以下内容基本上来自于Hexo的官方文档，推荐大家阅读官方文档。</p></blockquote><p>我们先通过下面的命令来创建一个专门保存博客项目的文件夹，该命令会从github上克隆博客项目和默认的主题。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo init blog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来我们进入这个文件夹并查看目录结构。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">cd blog</span>
<span class="line">ls -lR</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">total 232</span>
<span class="line">-rw-r--r--    1 Hao  staff    1768  8  8 01:15 _config.yml</span>
<span class="line">drwxr-xr-x  274 Hao  staff    8768  8  8 01:19 node_modules</span>
<span class="line">-rw-r--r--    1 Hao  staff  109972  8  8 01:19 package-lock.json</span>
<span class="line">-rw-r--r--    1 Hao  staff     443  8  8 01:15 package.json</span>
<span class="line">drwxr-xr-x    5 Hao  staff     160  8  8 01:15 scaffolds</span>
<span class="line">drwxr-xr-x    3 Hao  staff      96  8  8 01:15 source</span>
<span class="line">drwxr-xr-x    3 Hao  staff      96  8  8 01:15 themes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：Windows环境命令行提示符中可以使用dir命令查看目录结构。需要说明的是：<code>_config.yml</code>是博客项目的配置文件；<code>package.json</code>是项目的依赖项文件；<code>scaffolds</code>保存了Markdown文件的模板，也就是向新添加的Markdown文件中默认填充的内容；<code>source</code>目录下有一个名为<code>_post</code>的目录，我们稍后可以将编写好的Markdown文件放到该目录，这样就可以利用Hexo将Markdown文件处理成博客的静态页面，生成的静态页面将置于<code>public</code>目录下；<code>themes</code>文件夹保存了博客使用的主题。</p></blockquote><p>然后我们通过下面的命令来安装项目所需的依赖项（<code>package.json</code>文件指明了这些依赖项）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">npm install</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>做完上述的操作以后，我们已经可以直接通过下面的命令来生成博客。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo generate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该命令也可以缩写为：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo g</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之前我们在安装依赖项的时候包括了一个名为<code>hexo-server</code>的依赖项，该依赖项可以帮助我们启动一个基于node.js的服务器来运行我们的博客项目，使用下面的命令即可启动服务器。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该命令也可以缩写为：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">INFO  Start processing</span>
<span class="line">INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>从运行命令的提示信息可以看到，服务器已经运转起并使用了4000端口，可以通过<code>Ctrl+C</code>来终止服务器的运行。如果要修改服务器使用的端口，可以在启动服务器的时候加上<code>-p</code>参数；如果希望服务器启动后，自动打开默认的浏览器访问服务器，可以使用<code>-o</code>参数，如下所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo s -p 8000 -o</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>至此，我们已经可以看到Hexo在没有配置也没有加入自己的Markdown文件下生成的首页，如下图所示。</p><p><img src="`+l+`" alt=""></p><p>接下来我们修改博客的配置文件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">vim _config.yml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line"># Hexo Configuration</span>
<span class="line">## Docs: https://hexo.io/docs/configuration.html</span>
<span class="line">## Source: https://github.com/hexojs/hexo/</span>
<span class="line"></span>
<span class="line"># Site</span>
<span class="line">title: 骆昊的技术专栏</span>
<span class="line">subtitle: 传道、授业、解惑，分享知识带来的快乐</span>
<span class="line">description:</span>
<span class="line">keywords:</span>
<span class="line">author: 骆昊</span>
<span class="line">language: zh</span>
<span class="line">timezone:</span>
<span class="line"></span>
<span class="line"># URL</span>
<span class="line">## If your site is put in a subdirectory, set url as &#39;http://yoursite.com/child&#39; and root as &#39;/child/&#39;</span>
<span class="line">url: http://jackfrued.top</span>
<span class="line">root: /</span>
<span class="line">permalink: :year/:month/:day/:title/</span>
<span class="line">permalink_defaults:</span>
<span class="line"></span>
<span class="line"># Directory</span>
<span class="line">source_dir: source</span>
<span class="line">public_dir: public</span>
<span class="line">tag_dir: tags</span>
<span class="line">archive_dir: archives</span>
<span class="line">category_dir: categories</span>
<span class="line">code_dir: downloads/code</span>
<span class="line">i18n_dir: :lang</span>
<span class="line">skip_render:</span>
<span class="line"></span>
<span class="line"># Writing</span>
<span class="line">new_post_name: :title.md # File name of new posts</span>
<span class="line">default_layout: post</span>
<span class="line">titlecase: false # Transform title into titlecase</span>
<span class="line">external_link: true # Open external links in new tab</span>
<span class="line">filename_case: 0</span>
<span class="line">render_drafts: false</span>
<span class="line">post_asset_folder: false</span>
<span class="line">relative_link: false</span>
<span class="line">future: true</span>
<span class="line">highlight:</span>
<span class="line">  enable: true</span>
<span class="line">  line_number: true</span>
<span class="line">  auto_detect: false</span>
<span class="line">  tab_replace:</span>
<span class="line">  </span>
<span class="line"># Home page setting</span>
<span class="line"># path: Root path for your blogs index page. (default = &#39;&#39;)</span>
<span class="line"># per_page: Posts displayed per page. (0 = disable pagination)</span>
<span class="line"># order_by: Posts order. (Order by date descending by default)</span>
<span class="line">index_generator:</span>
<span class="line">  path: &#39;&#39;</span>
<span class="line">  per_page: 10</span>
<span class="line">  order_by: -date</span>
<span class="line">  </span>
<span class="line"># Category &amp; Tag</span>
<span class="line">default_category: uncategorized</span>
<span class="line">category_map:</span>
<span class="line">tag_map:</span>
<span class="line"></span>
<span class="line"># Date / Time format</span>
<span class="line">## Hexo uses Moment.js to parse and display date</span>
<span class="line">## You can customize the date format as defined in</span>
<span class="line">## http://momentjs.com/docs/#/displaying/format/</span>
<span class="line">date_format: YYYY-MM-DD</span>
<span class="line">time_format: HH:mm:ss</span>
<span class="line"></span>
<span class="line"># Pagination</span>
<span class="line">## Set per_page to 0 to disable pagination</span>
<span class="line">per_page: 10</span>
<span class="line">pagination_dir: page</span>
<span class="line"></span>
<span class="line"># Extensions</span>
<span class="line">## Plugins: https://hexo.io/plugins/</span>
<span class="line">## Themes: https://hexo.io/themes/</span>
<span class="line">theme: landscape</span>
<span class="line"></span>
<span class="line"># Deployment</span>
<span class="line">## Docs: https://hexo.io/docs/deployment.html</span>
<span class="line">deploy:</span>
<span class="line">  type:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是YAML文件中相关选项的说明。</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>title</code></td><td>网站的标题</td></tr><tr><td><code>subtitle</code></td><td>网站的副标题</td></tr><tr><td><code>description</code></td><td>网站的描述</td></tr><tr><td><code>keywords</code></td><td>网站的关键词，可以用逗号分隔多个关键词</td></tr><tr><td><code>author</code></td><td>自己的名字</td></tr><tr><td><code>language</code></td><td>网站使用的语言</td></tr><tr><td><code>timezone</code></td><td>网站使用时区，默认使用电脑上设置的时区</td></tr><tr><td><code>url</code></td><td>网址</td></tr><tr><td><code>root</code></td><td>网站根目录</td></tr><tr><td><code>source_dir</code></td><td>资源文件夹，这个文件夹用来存放内容，默认source目录</td></tr><tr><td><code>public_dir</code></td><td>公共文件夹，这个文件夹用于存放生成的站点文件，默认public目录</td></tr><tr><td><code>tag_dir</code></td><td>标签文件夹，默认tags目录</td></tr><tr><td><code>archive_dir</code></td><td>归档文件夹，默认archives目录</td></tr><tr><td><code>category_dir</code></td><td>分类文件夹，默认categories目录</td></tr><tr><td><code>auto_spacing</code></td><td>在中文和英文之间加入空格，默认false</td></tr><tr><td><code>titlecase</code></td><td>把标题转换为首字母大写，默认false</td></tr><tr><td><code>external_link</code></td><td>在新标签中打开链接，默认true</td></tr><tr><td><code>relative_link</code></td><td>把链接改为与根目录的相对位址，默认false</td></tr><tr><td><code>default_category</code></td><td>默认分类</td></tr><tr><td><code>date_format</code></td><td>日期格式，默认YYYY-MM-DD</td></tr><tr><td><code>time_format</code></td><td>时间格式，默认HH:mm:ss</td></tr><tr><td><code>per_page</code></td><td>每页显示的文章数量 ，默认值10，0表示不使用分页</td></tr><tr><td><code>pagination_dir</code></td><td>分页目录，默认为page目录</td></tr><tr><td><code>theme</code></td><td>当前主题名称</td></tr><tr><td><code>deploy</code></td><td>部署部分的设置</td></tr></tbody></table><p>我们将编写好的Markdown文件可以拷贝到<code>source/_posts</code>目录，我们可以在每个Markdown文件的上方添加Front-matter来对文件的布局、标题、分类、标签、发布日期等信息加以说明。所谓Front-matter，就是每个Markdown文件最上方以<code>---</code>分隔的区域，可以在Front-matter中设置以下内容。</p><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>layout</code></td><td>布局</td><td></td></tr><tr><td><code>title</code></td><td>标题</td><td></td></tr><tr><td><code>date</code></td><td>建立日期</td><td>文件建立日期</td></tr><tr><td><code>updated</code></td><td>更新日期</td><td>文件更新日期</td></tr><tr><td><code>comments</code></td><td>开启文章的评论功能</td><td>true</td></tr><tr><td><code>tags</code></td><td>标签（不适用于分页）</td><td></td></tr><tr><td><code>categories</code></td><td>分类（不适用于分页）</td><td></td></tr><tr><td><code>permalink</code></td><td>覆盖文章网址</td><td></td></tr></tbody></table><p>例如：</p><div class="language-Markdown line-numbers-mode" data-highlighter="prismjs" data-ext="Markdown" data-title="Markdown"><pre class="language-Markdown"><code><span class="line">---</span>
<span class="line">title: Python编程惯例</span>
<span class="line">categories: </span>
<span class="line">- Python基础</span>
<span class="line">tags:</span>
<span class="line">- Python</span>
<span class="line">- PEP8</span>
<span class="line">date: 2019-8-1</span>
<span class="line">---</span>
<span class="line">## Python惯例</span>
<span class="line"></span>
<span class="line">“惯例”这个词指的是“习惯的做法，常规的办法，一贯的做法”，与这个词对应的英文单词叫“idiom”。由于Python跟其他很多编程语言在语法和使用上还是有比较显著的差别，因此作为一个Python开发者如果不能掌握这些惯例，就无法写出“Pythonic”的代码。下面我们总结了一些在Python开发中的惯用的代码。</span>
<span class="line"></span>
<span class="line">1. 让代码既可以被导入又可以被执行。</span>
<span class="line">   if __name__ == &#39;__main__&#39;:</span>
<span class="line"></span>
<span class="line">2. 用下面的方式判断逻辑“真”或“假”。</span>
<span class="line">   if x:</span>
<span class="line">   if not x:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在完成上述工作后，我们可以通过下面的命令先清理之前生成的内容。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo clean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来我们就可以用之前讲过的命令重新生成并运行博客项目。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo generate</span>
<span class="line">hexo server -p 8000 -o</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将博客托管到github" tabindex="-1"><a class="header-anchor" href="#将博客托管到github"><span>将博客托管到GitHub</span></a></h3><p>我们可以利用GitHub网站提供的<a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Pages服务</a>来托管我们的博客。在GitHub Pages的首页上就有一个教程指导我们如何托管自己的网站，当然第一步得在GitHub上注册一个属于自己的账号，登录成功之后才能进行后续的操作。</p><ol><li><p>根据自己的用户名创建一个仓库，仓库<strong>一定</strong>要取名为“用户名.github.io”。例如：我在GitHub上的用户名是jackfrued，那么我的托管博客项目的仓库一定要命名为jackfrued.github.io。</p><p><img src="`+i+`" alt=""></p></li><li><p>修改博客项目的配置文件<code>_config.yml</code>，配置使用GitHub来部署该博客项目。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">vim _config.yml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line"># 省略上面的内容</span>
<span class="line"># Deployment</span>
<span class="line">## Docs: https://hexo.io/docs/deployment.html</span>
<span class="line">deploy:</span>
<span class="line">  type: git</span>
<span class="line">  repo: https://github.com/jackfrued/jackfrued.github.io.git</span>
<span class="line">  branch: master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置中，type指定了使用git进行项目部署，repo指定了部署项目的git仓库的URL，我们这里使用的是HTTPS的地址，如果之前配置过密钥对也可以使用SSH的地址，branch指定了将代码同步到仓库中的哪一个分支，通常master分支就是发布项目最终工作成果的分支，也称为项目的主分支。</p></li><li><p>安装名为<code>hexo-deployer-git</code>的部署器插件，通过该插件就能实现一键部署。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">npm install hexo-deployer-git --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>可以使用下面的命令来实现一键部署到GitHub。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo deploy -g</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">hexo generate -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>接下来在浏览器中输入<a href="https://jackfrued.github.io" target="_blank" rel="noopener noreferrer">jackfrued.github.io</a>就能够看到自己的博客，现在全世界的人都可以通过这个URL来访问你的博客。大家是否注意到，访问你博客的这个URL就是刚才我们给仓库起的名字，因为你在GitHub上注册的用户名是独一无二的，所以这个域名也是全世界独一无二的。</p></li></ol><h3 id="将博客绑定到自己的域名" tabindex="-1"><a class="header-anchor" href="#将博客绑定到自己的域名"><span>将博客绑定到自己的域名</span></a></h3><p>虽然我们已经通过GitHub提供的域名访问到了自己的博客，但是如果我们不愿意“寄人篱下”，我们在利用GitHub Pages提供的托管服务同时，也可以将博客绑定到自己专属的域名。如果暂时还没有购买域名，我们可以在提供域名购买服务的网站（如：<a href="https://www.hichina.com/" target="_blank" rel="noopener noreferrer">万网</a>、<a href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer">GoDaddy</a>）上进行购买。</p><p><img src="`+d+'" alt=""></p><blockquote><p>说明：目前国内对域名的管理日趋严格，在购买域名时需要填写一大堆的个人信息，进行实名认证后才能获得域名，这一点相信大家能够理解。</p></blockquote><p>比如说，我现在已经购买了一个名为“jackfrued.top”的域名，如何让它跟“jackfrued.github.io”这个域名做一个绑定呢，我们可以利用<a href="https://dns.console.aliyun.com/" target="_blank" rel="noopener noreferrer">阿里云控制台</a>或者<a href="https://www.dnspod.cn/" target="_blank" rel="noopener noreferrer">DNSPod</a>来做一个域名解析服务。在域名解析平台登录成功后，可以添加或选择自己的域名来配置域名解析。点击“添加记录”按钮，创建一个类型为CNAME的域名解析，CNAME类型的解析代表将一个域名解析到另一个域名，如下图所示。</p><p><img src="'+t+`" alt=""></p><p>完成这一步后，还不能马上通过自己的域名访问到博客项目，最后需要在博客项目的<code>source</code>目录下添加一个名为CNAME的文件（请注意这个文件的名字是全大写字母的）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">vim CNAME</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编辑该文件的内容，如下所示。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">jackfrued.top</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以清理一下之前生成的内容，然后将项目重新生成并发布到GitHub就大功告成了！现在我们已经拥有了独立域名的博客，希望大家可以利用它做些有意义的事情（记录自己的成长历程、分享自己的工作经验、提升个人的影响力）。加油吧，程序员！</p>`,65),p=[c];function o(u,v){return n(),s("div",null,p)}const h=e(r,[["render",o],["__file","使用Hexo搭建自己的博客.html.vue"]]),b=JSON.parse('{"path":"/python/Python-100-Days/%E7%95%AA%E5%A4%96%E7%AF%87/%E4%BD%BF%E7%94%A8Hexo%E6%90%AD%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%8D%9A%E5%AE%A2.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"使用Hexo搭建自己的博客","slug":"使用hexo搭建自己的博客","link":"#使用hexo搭建自己的博客","children":[{"level":3,"title":"Hexo概述","slug":"hexo概述","link":"#hexo概述","children":[]},{"level":3,"title":"搭建博客","slug":"搭建博客","link":"#搭建博客","children":[]},{"level":3,"title":"将博客托管到GitHub","slug":"将博客托管到github","link":"#将博客托管到github","children":[]},{"level":3,"title":"将博客绑定到自己的域名","slug":"将博客绑定到自己的域名","link":"#将博客绑定到自己的域名","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/番外篇/使用Hexo搭建自己的博客.md"}');export{h as comp,b as data};
