import{_ as l,c as n,o as e,d as i}from"./app-CzcyFXHz.js";const a="/docs/assets/%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84-CPBLxfQ6.png",t="/docs/assets/%E5%AD%97%E7%AC%A6%E5%AE%9E%E4%BD%93-D84qfhos.png",d="/docs/assets/%E9%80%89%E6%8B%A9%E5%99%A8%E8%AF%AD%E6%B3%95-nrOOluFK.png",c="/docs/assets/%E5%B8%B8%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8-DgwNjM5H.png",s="/docs/assets/%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D-BPuC4sa7.png",p="/docs/assets/%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93_%E9%9D%9E%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93_%E7%AD%89%E5%AE%BD%E5%AD%97%E4%BD%93-CJIY2MKD.png",r="/docs/assets/%E5%AD%97%E4%BD%93%E6%A0%B7%E5%BC%8F-j8Vhu3ru.png",o="/docs/assets/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B-o4Jt1VML.png",u="/docs/assets/%E7%BB%8F%E5%85%B8%E5%B8%83%E5%B1%80-2-CPs9Asyy.png",v="/docs/assets/baidu_echarts-B9J7sXCK.png",m="/docs/assets/bootstrap-layoutit-Cd0WixP7.png",b={},h=i('<h2 id="web前端概述" tabindex="-1"><a class="header-anchor" href="#web前端概述"><span>Web前端概述</span></a></h2><blockquote><p><strong>说明</strong>：本文使用的部分插图来自<em>Jon Duckett</em>先生的*<a href="https://www.amazon.cn/dp/1118008189/ref=sr_1_5?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&amp;keywords=html+%26+css&amp;qid=1554609325&amp;s=gateway&amp;sr=8-5" target="_blank" rel="noopener noreferrer">HTML and CSS: Design and Build Websites</a>*一书，这是一本非常棒的前端入门书，有兴趣的读者可以在亚马逊或者其他网站上找到该书的购买链接。</p></blockquote><p>HTML 是用来描述网页的一种语言，全称是 Hyper-Text Markup Language，即超文本标记语言。我们浏览网页时看到的文字、按钮、图片、视频等元素，它们都是通过 HTML 书写并通过浏览器来呈现的。</p><h3 id="html简史" tabindex="-1"><a class="header-anchor" href="#html简史"><span>HTML简史</span></a></h3><ol><li>1991年10月：一个非正式CERN（<a href="https://zh.wikipedia.org/wiki/%E6%AD%90%E6%B4%B2%E6%A0%B8%E5%AD%90%E7%A0%94%E7%A9%B6%E7%B5%84%E7%B9%94" target="_blank" rel="noopener noreferrer">欧洲核子研究中心</a>）文件首次公开18个HTML标签，这个文件的作者是物理学家<a href="https://zh.wikipedia.org/wiki/%E8%92%82%E5%A7%86%C2%B7%E4%BC%AF%E7%BA%B3%E6%96%AF-%E6%9D%8E" target="_blank" rel="noopener noreferrer">蒂姆·伯纳斯-李</a>，因此他是<a href="https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91" target="_blank" rel="noopener noreferrer">万维网</a>的发明者，也是<a href="https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F" target="_blank" rel="noopener noreferrer">万维网联盟</a>的主席。</li><li>1995年11月：HTML 2.0标准发布（RFC 1866）。</li><li>1997年1月：HTML 3.2作为<a href="https://zh.wikipedia.org/wiki/W3C" target="_blank" rel="noopener noreferrer">W3C</a>推荐标准发布。</li><li>1997年12月：HTML 4.0作为W3C推荐标准发布。</li><li>1999年12月：HTML4.01作为W3C推荐标准发布。</li><li>2008年1月：HTML5由W3C作为工作草案发布。</li><li>2011年5月：W3C将HTML5推进至“最终征求”（Last Call）阶段。</li><li>2012年12月：W3C指定HTML5作为“候选推荐”阶段。</li><li>2014年10月：HTML5作为稳定W3C推荐标准发布，这意味着HTML5的标准化已经完成。</li></ol><h4 id="html5新特性" tabindex="-1"><a class="header-anchor" href="#html5新特性"><span>HTML5新特性</span></a></h4><ol><li>引入原生多媒体支持（audio和video标签）</li><li>引入可编程内容（canvas标签）</li><li>引入语义Web（article、aside、details、figure、footer、header、nav、section、summary等标签）</li><li>引入新的表单控件（日历、邮箱、搜索、滑条等）</li><li>引入对离线存储更好的支持（localStorage和sessionStorage）</li><li>引入对定位、拖放、WebSocket、后台任务等的支持</li></ol><h3 id="使用标签承载内容" tabindex="-1"><a class="header-anchor" href="#使用标签承载内容"><span>使用标签承载内容</span></a></h3><img src="https://gitee.com/jackfrued/mypic/raw/master/20211107163448.png" style="zoom:35%;"><img src="https://gitee.com/jackfrued/mypic/raw/master/20211107163741.png" style="zoom:75%;"><h4 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h4><ul><li>html <ul><li>head <ul><li>title</li><li>meta</li></ul></li><li>body</li></ul></li></ul><h4 id="文本" tabindex="-1"><a class="header-anchor" href="#文本"><span>文本</span></a></h4><ul><li>标题（heading）和段落（paragraph） <ul><li>h1 ~ h6</li><li>p</li></ul></li><li>上标（superscript）和下标（subscript） <ul><li>sup</li><li>sub</li></ul></li><li>空白（白色空间折叠）</li><li>折行（break）和水平标尺（horizontal ruler） <ul><li>br</li><li>hr</li></ul></li><li>语义化标签 <ul><li>加粗和强调 - strong</li><li>引用 - blockquote</li><li>缩写词和首字母缩写词 - abbr / acronym</li><li>引文 - cite</li><li>所有者联系信息 - address</li><li>内容的修改 - ins / del</li></ul></li></ul><h4 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list"><span>列表（list）</span></a></h4><ul><li>有序列表（ordered list）- ol / li</li><li>无序列表（unordered list）- ul / li</li><li>定义列表（definition list）- dl / dt / dd</li></ul><h4 id="链接-anchor" tabindex="-1"><a class="header-anchor" href="#链接-anchor"><span>链接（anchor）</span></a></h4><ul><li>页面链接</li><li>锚链接</li><li>功能链接</li></ul><h4 id="图像-image" tabindex="-1"><a class="header-anchor" href="#图像-image"><span>图像（image）</span></a></h4><ul><li><p>图像存储位置</p><p><img src="'+a+`" alt=""></p></li><li><p>图像及其宽高</p></li><li><p>选择正确的图像格式</p><ul><li>JPEG</li><li>GIF</li><li>PNG</li></ul></li><li><p>矢量图</p></li><li><p>语义化标签 - figure / figcaption</p></li></ul><h4 id="表格-table" tabindex="-1"><a class="header-anchor" href="#表格-table"><span>表格（table）</span></a></h4><ul><li>基本的表格结构 - table / tr / td / th</li><li>表格的标题 - caption</li><li>跨行和跨列 - rowspan属性 / colspan属性</li><li>长表格 - thead / tbody / tfoot</li></ul><h4 id="表单-form" tabindex="-1"><a class="header-anchor" href="#表单-form"><span>表单（form）</span></a></h4><ul><li>重要属性 - action / method / enctype</li><li>表单控件（input）- type属性 <ul><li>文本框 - <code>text</code> / 密码框 - <code>password</code> / 数字框 - <code>number</code></li><li>邮箱 - <code>email</code> / 电话 - <code>tel</code> / 日期 - <code>date</code> / 滑条 - <code>range</code> / URL - <code>url</code> / 搜索 - <code>search</code></li><li>单选按钮 - <code>radio</code> / 复选按钮 - <code>checkbox</code></li><li>文件上传 - <code>file</code> / 隐藏域 - <code>hidden</code></li><li>提交按钮 - <code>submit</code> / 图像按钮 - <code>image</code> / 重置按钮 - <code>reset</code></li></ul></li><li>下拉列表 - select / option</li><li>文本域（多行文本）- textarea</li><li>组合表单元素 - fieldset / legend</li></ul><h4 id="音视频-audio-video" tabindex="-1"><a class="header-anchor" href="#音视频-audio-video"><span>音视频（audio / video）</span></a></h4><ul><li>视频格式和播放器</li><li>视频托管服务</li><li>添加视频的准备工作</li><li>video标签和属性 - autoplay / controls / loop / muted / preload / src</li><li>audio标签和属性 - autoplay / controls / loop / muted / preload / src / width / height / poster</li></ul><h4 id="窗口-frame" tabindex="-1"><a class="header-anchor" href="#窗口-frame"><span>窗口（frame）</span></a></h4><ul><li><p>框架集（过时，不建议使用） - frameset / frame</p></li><li><p>内嵌窗口 - iframe</p></li></ul><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h4><ul><li><p>文档类型</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!doctype html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>注释</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!-- 这是一段注释，注释不能够嵌套 --&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>属性</p><ul><li>id：唯一标识</li><li>class：元素所属的类，用于区分不同的元素</li><li>title：元素的额外信息（鼠标悬浮时会显示工具提示文本）</li><li>tabindex：Tab键切换顺序</li><li>contenteditable：元素是否可编辑</li><li>draggable：元素是否可拖拽</li></ul></li><li><p>块级元素 / 行级元素</p></li><li><p>字符实体（实体替换符）</p><p><img src="`+t+'" alt=""></p></li></ul><h3 id="使用css渲染页面" tabindex="-1"><a class="header-anchor" href="#使用css渲染页面"><span>使用CSS渲染页面</span></a></h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h4><ul><li><p>CSS的作用</p></li><li><p>CSS的工作原理</p></li><li><p>规则、属性和值</p><p><img src="'+d+'" alt=""></p></li><li><p>常用选择器</p><p><img src="'+c+'" alt=""></p></li></ul><h4 id="颜色-color" tabindex="-1"><a class="header-anchor" href="#颜色-color"><span>颜色（color）</span></a></h4><ul><li>如何指定颜色</li><li>颜色术语和颜色对比</li><li>背景色</li></ul><h4 id="文本-text-font" tabindex="-1"><a class="header-anchor" href="#文本-text-font"><span>文本（text / font）</span></a></h4><ul><li><p>文本的大小和字型(font-size / font-family)</p><p><img src="'+s+'" alt=""></p><p><img src="'+p+'" alt=""></p></li><li><p>粗细、样式、拉伸和装饰(font-weight / font-style / font-stretch / text-decoration)</p><p><img src="'+r+'" alt=""></p></li><li><p>行间距(line-height)、字母间距(letter-spacing)和单词间距(word-spacing)</p></li><li><p>对齐(text-align)方式和缩进(text-ident)</p></li><li><p>链接样式（:link / :visited / :active / :hover）</p></li><li><p>CSS3新属性</p><ul><li>阴影效果 - text-shadow</li><li>首字母和首行文本(:first-letter / :first-line)</li><li>响应用户</li></ul></li></ul><h4 id="盒子-box-model" tabindex="-1"><a class="header-anchor" href="#盒子-box-model"><span>盒子（box model）</span></a></h4><ul><li><p>盒子大小的控制（width / height）</p><p><img src="'+s+'" alt=""></p></li><li><p>盒子的边框、外边距和内边距（border / margin / padding）</p><p><img src="'+o+'" alt=""></p></li><li><p>盒子的显示和隐藏（display / visibility）</p></li><li><p>CSS3新属性</p><ul><li>边框图像（border-image）</li><li>投影（border-shadow）</li><li>圆角（border-radius）</li></ul></li></ul><h4 id="列表、表格和表单" tabindex="-1"><a class="header-anchor" href="#列表、表格和表单"><span>列表、表格和表单</span></a></h4><ul><li>列表的项目符号（list-style）</li><li>表格的边框和背景（border-collapse）</li><li>表单控件的外观</li><li>表单控件的对齐</li><li>浏览器的开发者工具</li></ul><h4 id="图像" tabindex="-1"><a class="header-anchor" href="#图像"><span>图像</span></a></h4><ul><li>控制图像的大小（display: inline-block）</li><li>对齐图像</li><li>背景图像（background / background-image / background-repeat / background-position）</li></ul><h4 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h4><ul><li><p>控制元素的位置（position / z-index）</p><ul><li>普通流</li><li>相对定位</li><li>绝对定位</li><li>固定定位</li><li>浮动元素（float / clear）</li></ul></li><li><p>网站布局</p><ul><li><p>HTML5布局</p><p><img src="'+u+`" alt=""></p></li></ul></li><li><p>适配屏幕尺寸</p><ul><li>固定宽度布局</li><li>流体布局</li><li>布局网格</li></ul></li></ul><h3 id="使用javascript控制行为" tabindex="-1"><a class="header-anchor" href="#使用javascript控制行为"><span>使用JavaScript控制行为</span></a></h3><h4 id="javascript基本语法" tabindex="-1"><a class="header-anchor" href="#javascript基本语法"><span>JavaScript基本语法</span></a></h4><ul><li>语句和注释</li><li>变量和数据类型 <ul><li>声明和赋值</li><li>简单数据类型和复杂数据类型</li><li>变量的命名规则</li></ul></li><li>表达式和运算符 <ul><li>赋值运算符</li><li>算术运算符</li><li>比较运算符</li><li>逻辑运算符：<code>&amp;&amp;</code>、<code>||</code>、<code>!</code></li></ul></li><li>分支结构 <ul><li><code>if...else...</code></li><li><code>switch...cas...default...</code></li></ul></li><li>循环结构 <ul><li><code>for</code>循环</li><li><code>while</code>循环</li><li><code>do...while</code>循环</li></ul></li><li>数组 <ul><li>创建数组</li><li>操作数组中的元素</li></ul></li><li>函数 <ul><li>声明函数</li><li>调用函数</li><li>参数和返回值</li><li>匿名函数</li><li>立即调用函数</li></ul></li></ul><h4 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h4><ul><li>对象的概念</li><li>创建对象的字面量语法</li><li>访问成员运算符</li><li>创建对象的构造函数语法 <ul><li><code>this</code>关键字</li></ul></li><li>添加和删除属性 <ul><li><code>delete</code>关键字</li></ul></li><li>标准对象 <ul><li><code>Number</code> / <code>String</code> / <code>Boolean</code> / <code>Symbol</code> / <code>Array</code> / <code>Function</code></li><li><code>Date</code> / <code>Error</code> / <code>Math</code> / <code>RegExp</code> / <code>Object</code> / <code>Map</code> / <code>Set</code></li><li><code>JSON</code> / <code>Promise</code> / <code>Generator</code> / <code>Reflect</code> / <code>Proxy</code></li></ul></li></ul><h4 id="bom" tabindex="-1"><a class="header-anchor" href="#bom"><span>BOM</span></a></h4><ul><li><code>window</code>对象的属性和方法</li><li><code>history</code>对象 <ul><li><code>forward()</code> / <code>back()</code> / <code>go()</code></li></ul></li><li><code>location</code>对象</li><li><code>navigator</code>对象</li><li><code>screen</code>对象</li></ul><h4 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>DOM</span></a></h4><ul><li>DOM树</li><li>访问元素 <ul><li><code>getElementById()</code> / <code>querySelector()</code></li><li><code>getElementsByClassName()</code> / <code>getElementsByTagName()</code> / <code>querySelectorAll()</code></li><li><code>parentNode</code> / <code>previousSibling</code> / <code>nextSibling</code> / <code>children</code> / <code>firstChild</code> / <code>lastChild</code></li></ul></li><li>操作元素 <ul><li><code>nodeValue</code></li><li><code>innerHTML</code> / <code>textContent</code> / <code>createElement()</code> / <code>createTextNode()</code> / <code>appendChild()</code> / <code>insertBefore()</code> / <code>removeChild()</code></li><li><code>className</code> / <code>id</code> / <code>hasAttribute()</code> / <code>getAttribute()</code> / <code>setAttribute()</code> / <code>removeAttribute()</code></li></ul></li><li>事件处理 <ul><li>事件类型 <ul><li>UI事件：<code>load</code> / <code>unload</code> / <code>error</code> / <code>resize</code> / <code>scroll</code></li><li>键盘事件：<code>keydown</code> / <code>keyup</code> / <code>keypress</code></li><li>鼠标事件：<code>click</code> / <code>dbclick</code> / <code>mousedown</code> / <code>mouseup</code> / <code>mousemove</code> / <code>mouseover</code> / <code>mouseout</code></li><li>焦点事件：<code>focus</code> / <code>blur</code></li><li>表单事件：<code>input</code> / <code>change</code> / <code>submit</code> / <code>reset</code> / <code>cut</code> / <code>copy</code> / <code>paste</code> / <code>select</code></li></ul></li><li>事件绑定 <ul><li>HTML事件处理程序（不推荐使用，因为要做到标签与代码分离）</li><li>传统的DOM事件处理程序（只能附加一个回调函数）</li><li>事件监听器（旧的浏览器中不被支持）</li></ul></li><li>事件流：事件捕获 / 事件冒泡</li><li>事件对象（低版本IE中的window.event） <ul><li><code>target</code>（有些浏览器使用srcElement）</li><li><code>type</code></li><li><code>cancelable</code></li><li><code>preventDefault()</code></li><li><code>stopPropagation()</code>（低版本IE中的cancelBubble）</li></ul></li><li>鼠标事件 - 事件发生的位置 <ul><li>屏幕位置：<code>screenX</code>和<code>screenY</code></li><li>页面位置：<code>pageX</code>和<code>pageY</code></li><li>客户端位置：<code>clientX</code>和<code>clientY</code></li></ul></li><li>键盘事件 - 哪个键被按下了 <ul><li><code>keyCode</code>属性（有些浏览器使用<code>which</code>）</li><li><code>String.fromCharCode(event.keyCode)</code></li></ul></li><li>HTML5事件 <ul><li><code>DOMContentLoaded</code></li><li><code>hashchange</code></li><li><code>beforeunload</code></li></ul></li></ul></li></ul><h4 id="javascript-api" tabindex="-1"><a class="header-anchor" href="#javascript-api"><span>JavaScript API</span></a></h4><ul><li><p>客户端存储 - <code>localStorage</code>和<code>sessionStorage</code></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">localStorage.colorSetting = &#39;#a4509b&#39;;</span>
<span class="line">localStorage[&#39;colorSetting&#39;] = &#39;#a4509b&#39;;</span>
<span class="line">localStorage.setItem(&#39;colorSetting&#39;, &#39;#a4509b&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取位置信息 - <code>geolocation</code></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">navigator.geolocation.getCurrentPosition(function(pos) { 		  </span>
<span class="line">    console.log(pos.coords.latitude)</span>
<span class="line">    console.log(pos.coords.longitude)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>从服务器获取数据 - Fetch API</p></li><li><p>绘制图形 - <code>&lt;canvas&gt;</code>的API</p></li><li><p>音视频 - <code>&lt;audio&gt;</code>和<code>&lt;video&gt;</code>的API</p></li></ul><h3 id="使用jquery" tabindex="-1"><a class="header-anchor" href="#使用jquery"><span>使用jQuery</span></a></h3><h4 id="jquery概述" tabindex="-1"><a class="header-anchor" href="#jquery概述"><span>jQuery概述</span></a></h4><ol><li>Write Less Do More（用更少的代码来完成更多的工作）</li><li>使用CSS选择器来查找元素（更简单更方便）</li><li>使用jQuery方法来操作元素（解决浏览器兼容性问题、应用于所有元素并施加多个方法）</li></ol><h4 id="引入jquery" tabindex="-1"><a class="header-anchor" href="#引入jquery"><span>引入jQuery</span></a></h4><ul><li>下载jQuery的开发版和压缩版</li><li>从CDN加载jQuery</li></ul><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script src=&quot;https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    window.jQuery || </span>
<span class="line">        document.write(&#39;&lt;script src=&quot;js/jquery-3.3.1.min.js&quot;&gt;&lt;/script&gt;&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找元素" tabindex="-1"><a class="header-anchor" href="#查找元素"><span>查找元素</span></a></h4><ul><li>选择器 <ul><li>* / element / #id / .class / selector1, selector2</li><li>ancestor descendant / parent&gt;child / previous+next / previous~siblings</li></ul></li><li>筛选器 <ul><li>基本筛选器：:not(selector) / :first / :last / :even / :odd / :eq(index) / :gt(index) / :lt(index) / :animated / :focus</li><li>内容筛选器：:contains(&#39;…&#39;) / :empty / :parent / :has(selector)</li><li>可见性筛选器：:hidden / :visible</li><li>子节点筛选器：:nth-child(expr) / :first-child / :last-child / :only-child</li><li>属性筛选器：[attribute] / [attribute=&#39;value&#39;] / [attribute!=&#39;value&#39;] / [attribute^=&#39;value&#39;] / [attribute$=&#39;value&#39;] / [attribute|=&#39;value&#39;] / [attribute~=&#39;value&#39;]</li></ul></li><li>表单：:input / :text / :password / :radio / :checkbox / :submit / :image / :reset / :button / :file / :selected / :enabled / :disabled / :checked</li></ul><h4 id="执行操作" tabindex="-1"><a class="header-anchor" href="#执行操作"><span>执行操作</span></a></h4><ul><li>内容操作 <ul><li>获取/修改内容：<code>html()</code> / <code>text()</code> / <code>replaceWith()</code> / <code>remove()</code></li><li>获取/设置元素：<code>before()</code> / <code>after()</code> / <code>prepend()</code> / <code>append()</code> / <code>remove()</code> / <code>clone()</code> / <code>unwrap()</code> / <code>detach()</code> / <code>empty()</code> / <code>add()</code></li><li>获取/修改属性：<code>attr()</code> / <code>removeAttr()</code> / <code>addClass()</code> / <code>removeClass()</code> / <code>css()</code></li><li>获取/设置表单值：<code>val()</code></li></ul></li><li>查找操作 <ul><li>查找方法：<code>find()</code> / <code>parent()</code> / <code>children()</code> / <code>siblings()</code> / <code>next()</code> / <code>nextAll()</code> / <code>prev()</code> / <code>prevAll()</code></li><li>筛选器：<code>filter()</code> / <code>not()</code> / <code>has()</code> / <code>is()</code> / <code>contains()</code></li><li>索引编号：<code>eq()</code></li></ul></li><li>尺寸和位置 <ul><li>尺寸相关：<code>height()</code> / <code>width()</code> / <code>innerHeight()</code> / <code>innerWidth()</code> / <code>outerWidth()</code> / <code>outerHeight()</code></li><li>位置相关：<code>offset()</code> / <code>position()</code> / <code>scrollLeft()</code> / <code>scrollTop()</code></li></ul></li><li>特效和动画 <ul><li>基本动画：<code>show()</code> / <code>hide()</code> / <code>toggle()</code></li><li>消失出现：<code>fadeIn()</code> / <code>fadeOut()</code> / <code>fadeTo()</code> / <code>fadeToggle()</code></li><li>滑动效果：<code>slideDown()</code> / <code>slideUp()</code> / <code>slideToggle()</code></li><li>自定义：<code>delay()</code> / <code>stop()</code> / <code>animate()</code></li></ul></li><li>事件 <ul><li>文档加载：<code>ready()</code> / <code>load()</code></li><li>用户交互：<code>on()</code> / <code>off()</code></li></ul></li></ul><h4 id="链式操作" tabindex="-1"><a class="header-anchor" href="#链式操作"><span>链式操作</span></a></h4><h4 id="检测页面是否可用" tabindex="-1"><a class="header-anchor" href="#检测页面是否可用"><span>检测页面是否可用</span></a></h4><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script&gt;</span>
<span class="line">    $(document).ready(function() {</span>
<span class="line">        </span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script&gt;</span>
<span class="line">    $(function() {</span>
<span class="line">        </span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jquery插件" tabindex="-1"><a class="header-anchor" href="#jquery插件"><span>jQuery插件</span></a></h4><ul><li>jQuery Validation</li><li>jQuery Treeview</li><li>jQuery Autocomplete</li><li>jQuery UI</li></ul><h4 id="避免和其他库的冲突" tabindex="-1"><a class="header-anchor" href="#避免和其他库的冲突"><span>避免和其他库的冲突</span></a></h4><p>先引入其他库再引入jQuery的情况。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script src=&quot;other.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script src=&quot;jquery.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	jQuery.noConflict();</span>
<span class="line">    jQuery(function() {</span>
<span class="line">        jQuery(&#39;div&#39;).hide();</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先引入jQuery再引入其他库的情况。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line"></span>
<span class="line">&lt;script src=&quot;jquery.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script src=&quot;other.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    jQuery(function() {</span>
<span class="line">        jQuery(&#39;div&#39;).hide();</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用ajax" tabindex="-1"><a class="header-anchor" href="#使用ajax"><span>使用Ajax</span></a></h4><p>Ajax是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。</p><ul><li>原生的Ajax</li><li>基于jQuery的Ajax <ul><li>加载内容</li><li>提交表单</li></ul></li></ul><h3 id="前端框架" tabindex="-1"><a class="header-anchor" href="#前端框架"><span>前端框架</span></a></h3><h4 id="渐进式框架-vue-js" tabindex="-1"><a class="header-anchor" href="#渐进式框架-vue-js"><span>渐进式框架 - <a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a></span></a></h4><p>前后端分离开发（前端渲染）必选框架。</p><h5 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h5><ol><li><p>引入Vue的JavaScript文件，我们仍然推荐从CDN服务器加载它。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>数据绑定（声明式渲染 ）。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h1&gt;{{ product }}库存信息&lt;/h1&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			product: &#39;iPhone X&#39;</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>条件与循环。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h1&gt;库存信息&lt;/h1&gt;</span>
<span class="line">    &lt;hr&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">		&lt;li v-for=&quot;product in products&quot;&gt;</span>
<span class="line">			{{ product.name }} - {{ product.quantity }}</span>
<span class="line">			&lt;span v-if=&quot;product.quantity === 0&quot;&gt;</span>
<span class="line">				已经售罄</span>
<span class="line">			&lt;/span&gt;</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			products: [</span>
<span class="line">				{&quot;id&quot;: 1, &quot;name&quot;: &quot;iPhone X&quot;, &quot;quantity&quot;: 20},</span>
<span class="line">				{&quot;id&quot;: 2, &quot;name&quot;: &quot;华为 Mate20&quot;, &quot;quantity&quot;: 0},</span>
<span class="line">				{&quot;id&quot;: 3, &quot;name&quot;: &quot;小米 Mix3&quot;, &quot;quantity&quot;: 50}</span>
<span class="line">			]</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>计算属性。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h1&gt;库存信息&lt;/h1&gt;</span>
<span class="line">	&lt;hr&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">		&lt;li v-for=&quot;product in products&quot;&gt;</span>
<span class="line">			{{ product.name }} - {{ product.quantity }}</span>
<span class="line">			&lt;span v-if=&quot;product.quantity === 0&quot;&gt;</span>
<span class="line">				已经售罄</span>
<span class="line">			&lt;/span&gt;</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">	&lt;h2&gt;库存总量：{{ totalQuantity }}台&lt;/h2&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			products: [</span>
<span class="line">				{&quot;id&quot;: 1, &quot;name&quot;: &quot;iPhone X&quot;, &quot;quantity&quot;: 20},</span>
<span class="line">				{&quot;id&quot;: 2, &quot;name&quot;: &quot;华为 Mate20&quot;, &quot;quantity&quot;: 0},</span>
<span class="line">				{&quot;id&quot;: 3, &quot;name&quot;: &quot;小米 Mix3&quot;, &quot;quantity&quot;: 50}</span>
<span class="line">			]</span>
<span class="line">		},</span>
<span class="line">		computed: {</span>
<span class="line">			totalQuantity() {</span>
<span class="line">				return this.products.reduce((sum, product) =&gt; {</span>
<span class="line">					return sum + product.quantity</span>
<span class="line">				}, 0);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>处理事件。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h1&gt;库存信息&lt;/h1&gt;</span>
<span class="line">	&lt;hr&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">		&lt;li v-for=&quot;product in products&quot;&gt;</span>
<span class="line">			{{ product.name }} - {{ product.quantity }}</span>
<span class="line">			&lt;span v-if=&quot;product.quantity === 0&quot;&gt;</span>
<span class="line">				已经售罄</span>
<span class="line">			&lt;/span&gt;</span>
<span class="line">			&lt;button @click=&quot;product.quantity += 1&quot;&gt;</span>
<span class="line">				增加库存</span>
<span class="line">			&lt;/button&gt;</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">	&lt;h2&gt;库存总量：{{ totalQuantity }}台&lt;/h2&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			products: [</span>
<span class="line">				{&quot;id&quot;: 1, &quot;name&quot;: &quot;iPhone X&quot;, &quot;quantity&quot;: 20},</span>
<span class="line">				{&quot;id&quot;: 2, &quot;name&quot;: &quot;华为 Mate20&quot;, &quot;quantity&quot;: 0},</span>
<span class="line">				{&quot;id&quot;: 3, &quot;name&quot;: &quot;小米 Mix3&quot;, &quot;quantity&quot;: 50}</span>
<span class="line">			]</span>
<span class="line">		},</span>
<span class="line">		computed: {</span>
<span class="line">			totalQuantity() {</span>
<span class="line">				return this.products.reduce((sum, product) =&gt; {</span>
<span class="line">					return sum + product.quantity</span>
<span class="line">				}, 0);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户输入。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h1&gt;库存信息&lt;/h1&gt;</span>
<span class="line">	&lt;hr&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">		&lt;li v-for=&quot;product in products&quot;&gt;</span>
<span class="line">			{{ product.name }} - </span>
<span class="line">			&lt;input type=&quot;number&quot; v-model.number=&quot;product.quantity&quot; min=&quot;0&quot;&gt;</span>
<span class="line">			&lt;span v-if=&quot;product.quantity === 0&quot;&gt;</span>
<span class="line">				已经售罄</span>
<span class="line">			&lt;/span&gt;</span>
<span class="line">			&lt;button @click=&quot;product.quantity += 1&quot;&gt;</span>
<span class="line">				增加库存</span>
<span class="line">			&lt;/button&gt;</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">	&lt;h2&gt;库存总量：{{ totalQuantity }}台&lt;/h2&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			products: [</span>
<span class="line">				{&quot;id&quot;: 1, &quot;name&quot;: &quot;iPhone X&quot;, &quot;quantity&quot;: 20},</span>
<span class="line">				{&quot;id&quot;: 2, &quot;name&quot;: &quot;华为 Mate20&quot;, &quot;quantity&quot;: 0},</span>
<span class="line">				{&quot;id&quot;: 3, &quot;name&quot;: &quot;小米 Mix3&quot;, &quot;quantity&quot;: 50}</span>
<span class="line">			]</span>
<span class="line">		},</span>
<span class="line">		computed: {</span>
<span class="line">			totalQuantity() {</span>
<span class="line">				return this.products.reduce((sum, product) =&gt; {</span>
<span class="line">					return sum + product.quantity</span>
<span class="line">				}, 0);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过网络加载JSON数据。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">	&lt;h2&gt;库存信息&lt;/h2&gt;</span>
<span class="line">	&lt;ul&gt;</span>
<span class="line">		&lt;li v-for=&quot;product in products&quot;&gt;</span>
<span class="line">			{{ product.name }} - {{ product.quantity }}</span>
<span class="line">			&lt;span v-if=&quot;product.quantity === 0&quot;&gt;</span>
<span class="line">				已经售罄</span>
<span class="line">			&lt;/span&gt;</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	&lt;/ul&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	const app = new Vue({</span>
<span class="line">		el: &#39;#app&#39;,</span>
<span class="line">		data: {</span>
<span class="line">			products: []</span>
<span class="line">		}，</span>
<span class="line">		created() {</span>
<span class="line">			fetch(&#39;https://jackfrued.top/api/products&#39;)</span>
<span class="line">				.then(response =&gt; response.json())</span>
<span class="line">				.then(json =&gt; {</span>
<span class="line">					this.products = json</span>
<span class="line">				});</span>
<span class="line">		}</span>
<span class="line">	});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h5 id="使用脚手架-vue-cli" tabindex="-1"><a class="header-anchor" href="#使用脚手架-vue-cli"><span>使用脚手架 - vue-cli</span></a></h5><p>Vue为商业项目开发提供了非常便捷的脚手架工具vue-cli，通过工具可以省去手工配置开发环境、测试环境和运行环境的步骤，让开发者只需要关注要解决的问题。</p><ol><li>安装脚手架。</li><li>创建项目。</li><li>安装依赖包。</li><li>运行项目。</li></ol><h4 id="ui框架-element" tabindex="-1"><a class="header-anchor" href="#ui框架-element"><span>UI框架 - <a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" rel="noopener noreferrer">Element</a></span></a></h4><p>基于Vue 2.0的桌面端组件库，用于构造用户界面，支持响应式布局。</p><ol><li><p>引入Element的CSS和JavaScript文件。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!-- 引入样式 --&gt;</span>
<span class="line">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;&gt;</span>
<span class="line">&lt;!-- 引入组件库 --&gt;</span>
<span class="line">&lt;script src=&quot;https://unpkg.com/element-ui/lib/index.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一个简单的例子。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">	&lt;head&gt;</span>
<span class="line">		&lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">		&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;&gt;</span>
<span class="line">	&lt;/head&gt;</span>
<span class="line">	&lt;body&gt;</span>
<span class="line">		&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">			&lt;el-button @click=&quot;visible = true&quot;&gt;点我&lt;/el-button&gt;</span>
<span class="line">			&lt;el-dialog :visible.sync=&quot;visible&quot; title=&quot;Hello world&quot;&gt;</span>
<span class="line">				&lt;p&gt;开始使用Element吧&lt;/p&gt;</span>
<span class="line">			&lt;/el-dialog&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">	&lt;/body&gt;</span>
<span class="line">	&lt;script src=&quot;https://unpkg.com/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">	&lt;script src=&quot;https://unpkg.com/element-ui/lib/index.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">	&lt;script&gt;</span>
<span class="line">		new Vue({</span>
<span class="line">			el: &#39;#app&#39;,</span>
<span class="line">			data: {</span>
<span class="line">				visible: false,</span>
<span class="line">			}</span>
<span class="line">		})</span>
<span class="line">	&lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用组件。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">	&lt;head&gt;</span>
<span class="line">		&lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">		&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;&gt;</span>
<span class="line">	&lt;/head&gt;</span>
<span class="line">	&lt;body&gt;</span>
<span class="line">		&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">			&lt;el-table :data=&quot;tableData&quot; stripe style=&quot;width: 100%&quot;&gt;</span>
<span class="line">				&lt;el-table-column prop=&quot;date&quot; label=&quot;日期&quot; width=&quot;180&quot;&gt;</span>
<span class="line">				&lt;/el-table-column&gt;</span>
<span class="line">				&lt;el-table-column prop=&quot;name&quot; label=&quot;姓名&quot; width=&quot;180&quot;&gt;</span>
<span class="line">				&lt;/el-table-column&gt;</span>
<span class="line">				&lt;el-table-column prop=&quot;address&quot; label=&quot;地址&quot;&gt;</span>
<span class="line">				&lt;/el-table-column&gt;</span>
<span class="line">			&lt;/el-table&gt;</span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	&lt;/body&gt;</span>
<span class="line">	&lt;script src=&quot;https://unpkg.com/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">	&lt;script src=&quot;https://unpkg.com/element-ui/lib/index.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">	&lt;script&gt;</span>
<span class="line">		new Vue({</span>
<span class="line">			el: &#39;#app&#39;,</span>
<span class="line">			data: {</span>
<span class="line">				tableData:  [</span>
<span class="line">					{</span>
<span class="line">						date: &#39;2016-05-02&#39;,</span>
<span class="line">						name: &#39;王一霸&#39;,</span>
<span class="line">						address: &#39;上海市普陀区金沙江路 1518 弄&#39;</span>
<span class="line">					}, </span>
<span class="line">					{</span>
<span class="line">						date: &#39;2016-05-04&#39;,</span>
<span class="line">						name: &#39;刘二狗&#39;,</span>
<span class="line">						address: &#39;上海市普陀区金沙江路 1517 弄&#39;</span>
<span class="line">					}, </span>
<span class="line">					{</span>
<span class="line">						date: &#39;2016-05-01&#39;,</span>
<span class="line">						name: &#39;杨三萌&#39;,</span>
<span class="line">						address: &#39;上海市普陀区金沙江路 1519 弄&#39;</span>
<span class="line">					}, </span>
<span class="line">					{</span>
<span class="line">						date: &#39;2016-05-03&#39;,</span>
<span class="line">						name: &#39;陈四吹&#39;,</span>
<span class="line">						address: &#39;上海市普陀区金沙江路 1516 弄&#39;</span>
<span class="line">					}</span>
<span class="line">				]</span>
<span class="line">			}</span>
<span class="line">		})</span>
<span class="line">	&lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="报表框架-echarts" tabindex="-1"><a class="header-anchor" href="#报表框架-echarts"><span>报表框架 - <a href="https://echarts.baidu.com" target="_blank" rel="noopener noreferrer">ECharts</a></span></a></h4><p>百度出品的开源可视化库，常用于生成各种类型的报表。</p><p><img src="`+v+`" alt=""></p><h4 id="基于弹性盒子的css框架-bulma" tabindex="-1"><a class="header-anchor" href="#基于弹性盒子的css框架-bulma"><span>基于弹性盒子的CSS框架 - <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a></span></a></h4><p>Bulma是一个基于Flexbox的现代化的CSS框架，其初衷就是移动优先（Mobile First），模块化设计，可以轻松用来实现各种简单或者复杂的内容布局，即使不懂CSS的开发者也能够使用它定制出漂亮的页面。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">	&lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">	&lt;title&gt;Bulma&lt;/title&gt;</span>
<span class="line">	&lt;link href=&quot;https://cdn.bootcss.com/bulma/0.7.4/css/bulma.min.css&quot; rel=&quot;stylesheet&quot;&gt;</span>
<span class="line">	&lt;style type=&quot;text/css&quot;&gt;</span>
<span class="line">		div { margin-top: 10px; }</span>
<span class="line">		.column { color: #fff; background-color: #063; margin: 10px 10px; text-align: center; }</span>
<span class="line">	&lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">	&lt;div class=&quot;columns&quot;&gt;</span>
<span class="line">		&lt;div class=&quot;column&quot;&gt;1&lt;/div&gt;</span>
<span class="line">		&lt;div class=&quot;column&quot;&gt;2&lt;/div&gt;</span>
<span class="line">		&lt;div class=&quot;column&quot;&gt;3&lt;/div&gt;</span>
<span class="line">		&lt;div class=&quot;column&quot;&gt;4&lt;/div&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">	&lt;div&gt;</span>
<span class="line">		&lt;a class=&quot;button is-primary&quot;&gt;Primary&lt;/a&gt;</span>
<span class="line">		&lt;a class=&quot;button is-link&quot;&gt;Link&lt;/a&gt;</span>
<span class="line">		&lt;a class=&quot;button is-info&quot;&gt;Info&lt;/a&gt;</span>
<span class="line">		&lt;a class=&quot;button is-success&quot;&gt;Success&lt;/a&gt;</span>
<span class="line">		&lt;a class=&quot;button is-warning&quot;&gt;Warning&lt;/a&gt;</span>
<span class="line">		&lt;a class=&quot;button is-danger&quot;&gt;Danger&lt;/a&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">	&lt;div&gt;</span>
<span class="line">		&lt;progress class=&quot;progress is-danger is-medium&quot; max=&quot;100&quot;&gt;60%&lt;/progress&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">	&lt;div&gt;</span>
<span class="line">		&lt;table class=&quot;table is-hoverable&quot;&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;th&gt;One&lt;/th&gt;</span>
<span class="line">				&lt;th&gt;Two&lt;/th&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;td&gt;Three&lt;/td&gt;</span>
<span class="line">				&lt;td&gt;Four&lt;/td&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;td&gt;Five&lt;/td&gt;</span>
<span class="line">				&lt;td&gt;Six&lt;/td&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;td&gt;Seven&lt;/td&gt;</span>
<span class="line">				&lt;td&gt;Eight&lt;/td&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;td&gt;Nine&lt;/td&gt;</span>
<span class="line">				&lt;td&gt;Ten&lt;/td&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">			&lt;tr&gt;</span>
<span class="line">				&lt;td&gt;Eleven&lt;/td&gt;</span>
<span class="line">				&lt;td&gt;Twelve&lt;/td&gt;</span>
<span class="line">			&lt;/tr&gt;</span>
<span class="line">		&lt;/table&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="响应式布局框架-bootstrap" tabindex="-1"><a class="header-anchor" href="#响应式布局框架-bootstrap"><span>响应式布局框架 - <a href="http://www.bootcss.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a></span></a></h4><p>用于快速开发Web应用程序的前端框架，支持响应式布局。</p><ol><li><p>特点</p><ul><li>支持主流的浏览器和移动设备</li><li>容易上手</li><li>响应式设计</li></ul></li><li><p>内容</p><ul><li>网格系统</li><li>封装的CSS</li><li>现成的组件</li><li>JavaScript插件</li></ul></li><li><p>可视化</p><p><img src="`+m+'" alt=""></p></li></ol>',100),g=[h];function q(f,y){return e(),n("div",null,g)}const x=l(b,[["render",q],["__file","21-30.Web前端概述.html.vue"]]),M=JSON.parse('{"path":"/python/Python-100-Days/Day21-30/21-30.Web%E5%89%8D%E7%AB%AF%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"Web前端概述","slug":"web前端概述","link":"#web前端概述","children":[{"level":3,"title":"HTML简史","slug":"html简史","link":"#html简史","children":[]},{"level":3,"title":"使用标签承载内容","slug":"使用标签承载内容","link":"#使用标签承载内容","children":[]},{"level":3,"title":"使用CSS渲染页面","slug":"使用css渲染页面","link":"#使用css渲染页面","children":[]},{"level":3,"title":"使用JavaScript控制行为","slug":"使用javascript控制行为","link":"#使用javascript控制行为","children":[]},{"level":3,"title":"使用jQuery","slug":"使用jquery","link":"#使用jquery","children":[]},{"level":3,"title":"前端框架","slug":"前端框架","link":"#前端框架","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day21-30/21-30.Web前端概述.md"}');export{x as comp,M as data};
