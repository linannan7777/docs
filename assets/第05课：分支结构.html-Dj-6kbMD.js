import{_ as n,c as s,o as e,d as a}from"./app-BFPhRmaa.js";const i={},l=a(`<h2 id="第05课-分支结构" tabindex="-1"><a class="header-anchor" href="#第05课-分支结构"><span>第05课：分支结构</span></a></h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><p>迄今为止，我们写的Python代码都是一条一条语句顺序执行，这种代码结构通常称之为顺序结构。然而仅有顺序结构并不能解决所有的问题，比如我们设计一个游戏，游戏第一关的通关条件是玩家获得1000分，那么在完成本局游戏后，我们要根据玩家得到分数来决定究竟是进入第二关，还是告诉玩家“Game Over”，这里就会产生两个分支，而且这两个分支只有一个会被执行。类似的场景还有很多，我们将这种结构称之为“分支结构”或“选择结构”。给大家一分钟的时间，你应该可以想到至少5个以上这样的例子，赶紧试一试。</p><h3 id="if语句的使用" tabindex="-1"><a class="header-anchor" href="#if语句的使用"><span>if语句的使用</span></a></h3><p>在Python中，要构造分支结构可以使用<code>if</code>、<code>elif</code>和<code>else</code>关键字。所谓<strong>关键字</strong>就是有特殊含义的单词，像<code>if</code>和<code>else</code>就是专门用于构造分支结构的关键字，很显然你不能够使用它作为变量名。下面的例子中演示了如何构造一个分支结构。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">用户身份验证</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">username = input(&#39;请输入用户名: &#39;)</span>
<span class="line">password = input(&#39;请输入口令: &#39;)</span>
<span class="line"># 用户名是admin且密码是123456则身份验证成功否则身份验证失败</span>
<span class="line">if username == &#39;admin&#39; and password == &#39;123456&#39;:</span>
<span class="line">    print(&#39;身份验证成功!&#39;)</span>
<span class="line">else:</span>
<span class="line">    print(&#39;身份验证失败!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，不同于C++、Java等编程语言，Python中没有用花括号来构造代码块而是<strong>使用了缩进的方式来表示代码的层次结构</strong>，如果<code>if</code>条件成立的情况下需要执行多条语句，只要保持多条语句具有相同的缩进就可以了。换句话说<strong>连续的代码如果又保持了相同的缩进那么它们属于同一个代码块</strong>，相当于是一个执行的整体。<strong>缩进</strong>可以使用任意数量的空格，但<strong>通常使用4个空格</strong>，强烈建议大家<strong>不要使用制表键来缩进代码</strong>，如果你已经习惯了这么做，可以<strong>设置代码编辑工具将1个制表键自动变成4个空格</strong>，很多的代码编辑工具都支持这项功能。</p><blockquote><p><strong>提示</strong>：<code>if</code>和<code>else</code> 的最后面有一个<code>:</code>，它是用英文输入法输入的冒号；程序中输入的<code>&#39;</code>、<code>&quot;</code>、<code>=</code>、<code>(</code>、<code>)</code>等特殊字符，都是在英文输入法状态下输入的。有很多初学者经常不注意这一点，结果运行代码的时候就会遇到很多莫名其妙的错误提示。<strong>强烈建议</strong>大家在写代码的时候都<strong>打开英文输入法</strong>（注意是英文输入法而不是中文输入法的英文输入模式），这样可以避免很多不必要的麻烦。</p></blockquote><p>如果要构造出更多的分支，可以使用<code>if...elif...else...</code>结构或者嵌套的<code>if...else...</code>结构，下面的代码演示了如何利用多分支结构实现分段函数求值。</p><p>$$ f(x) = \\begin{cases} 3x - 5, &amp; (x \\gt 1) \\ x + 2, &amp; (-1 \\le x \\le 1) \\ 5x + 3, &amp; (x \\lt -1) \\end{cases} $$</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">分段函数求值</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">x = float(input(&#39;x = &#39;))</span>
<span class="line">if x &gt; 1:</span>
<span class="line">    y = 3 * x - 5</span>
<span class="line">elif x &gt;= -1:</span>
<span class="line">    y = x + 2</span>
<span class="line">else:</span>
<span class="line">    y = 5 * x + 3</span>
<span class="line">print(f&#39;f({x}) = {y}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然根据实际开发的需要，分支结构是可以嵌套的，例如判断是否通关以后还要根据你获得的宝物或者道具的数量对你的表现给出等级（比如点亮两颗或三颗星星），那么我们就需要在<code>if</code>的内部构造出一个新的分支结构，同理<code>elif</code>和<code>else</code>中也可以再构造新的分支，我们称之为嵌套的分支结构，也就是说上面的代码也可以写成下面的样子。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">分段函数求值</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">x = float(input(&#39;x = &#39;))</span>
<span class="line">if x &gt; 1:</span>
<span class="line">    y = 3 * x - 5</span>
<span class="line">else:</span>
<span class="line">    if x &gt;= -1:</span>
<span class="line">        y = x + 2</span>
<span class="line">    else:</span>
<span class="line">        y = 5 * x + 3</span>
<span class="line">print(f&#39;f({x}) = {y}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 大家可以自己感受和评判一下这两种写法到底是哪一种更好。在<a href="https://zhuanlan.zhihu.com/p/111843067" target="_blank" rel="noopener noreferrer"><strong>Python之禅</strong></a>中有这么一句话：“<strong>Flat is better than nested</strong>”，之所以提倡代码“扁平化”，是因为代码嵌套的层次如果很多，会严重的影响代码的可读性，所以使用更为扁平化的结构在很多场景下都是较好的选择。</p></blockquote><h3 id="一些例子" tabindex="-1"><a class="header-anchor" href="#一些例子"><span>一些例子</span></a></h3><h4 id="例子1-英制单位英寸与公制单位厘米互换。" tabindex="-1"><a class="header-anchor" href="#例子1-英制单位英寸与公制单位厘米互换。"><span>例子1：英制单位英寸与公制单位厘米互换。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">英制单位英寸和公制单位厘米互换</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">value = float(input(&#39;请输入长度: &#39;))</span>
<span class="line">unit = input(&#39;请输入单位: &#39;)</span>
<span class="line">if unit == &#39;in&#39; or unit == &#39;英寸&#39;:</span>
<span class="line">    print(&#39;%f英寸 = %f厘米&#39; % (value, value * 2.54))</span>
<span class="line">elif unit == &#39;cm&#39; or unit == &#39;厘米&#39;:</span>
<span class="line">    print(&#39;%f厘米 = %f英寸&#39; % (value, value / 2.54))</span>
<span class="line">else:</span>
<span class="line">    print(&#39;请输入有效的单位&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-百分制成绩转换为等级制成绩。" tabindex="-1"><a class="header-anchor" href="#例子2-百分制成绩转换为等级制成绩。"><span>例子2：百分制成绩转换为等级制成绩。</span></a></h4><blockquote><p><strong>要求</strong>：如果输入的成绩在90分以上（含90分）输出A；80分-90分（不含90分）输出B；70分-80分（不含80分）输出C；60分-70分（不含70分）输出D；60分以下输出E。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">百分制成绩转换为等级制成绩</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">score = float(input(&#39;请输入成绩: &#39;))</span>
<span class="line">if score &gt;= 90:</span>
<span class="line">    grade = &#39;A&#39;</span>
<span class="line">elif score &gt;= 80:</span>
<span class="line">    grade = &#39;B&#39;</span>
<span class="line">elif score &gt;= 70:</span>
<span class="line">    grade = &#39;C&#39;</span>
<span class="line">elif score &gt;= 60:</span>
<span class="line">    grade = &#39;D&#39;</span>
<span class="line">else:</span>
<span class="line">    grade = &#39;E&#39;</span>
<span class="line">print(&#39;对应的等级是:&#39;, grade)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子3-输入三条边长-如果能构成三角形就计算周长和面积。" tabindex="-1"><a class="header-anchor" href="#例子3-输入三条边长-如果能构成三角形就计算周长和面积。"><span>例子3：输入三条边长，如果能构成三角形就计算周长和面积。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">判断输入的边长能否构成三角形，如果能则计算出三角形的周长和面积</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">a = float(input(&#39;a = &#39;))</span>
<span class="line">b = float(input(&#39;b = &#39;))</span>
<span class="line">c = float(input(&#39;c = &#39;))</span>
<span class="line">if a + b &gt; c and a + c &gt; b and b + c &gt; a:</span>
<span class="line">    peri = a + b + c</span>
<span class="line">    print(f&#39;周长: {peri}&#39;)</span>
<span class="line">    half = peri / 2</span>
<span class="line">    area = (half * (half - a) * (half - b) * (half - c)) ** 0.5</span>
<span class="line">    print(f&#39;面积: {area}&#39;)</span>
<span class="line">else:</span>
<span class="line">    print(&#39;不能构成三角形&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 上面通过边长计算三角形面积的公式叫做<a href="https://zh.wikipedia.org/zh-hans/%E6%B5%B7%E4%BC%A6%E5%85%AC%E5%BC%8F" target="_blank" rel="noopener noreferrer">海伦公式</a>。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>学会了Python中的分支结构和循环结构，我们就可以用Python程序来解决很多实际的问题了。这一节课相信已经帮助大家记住了<code>if</code>、<code>elif</code>、<code>else</code>这几个关键字以及如何使用它们来构造分支结构，下一节课我们为大家介绍循环结构，学完这两次课你一定会发现，你能写出很多很多非常有意思的代码。继续加油！</p>`,25),d=[l];function c(r,p){return e(),s("div",null,d)}const o=n(i,[["render",c],["__file","第05课：分支结构.html.vue"]]),v=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC05%E8%AF%BE%EF%BC%9A%E5%88%86%E6%94%AF%E7%BB%93%E6%9E%84.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第05课：分支结构","slug":"第05课-分支结构","link":"#第05课-分支结构","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"if语句的使用","slug":"if语句的使用","link":"#if语句的使用","children":[]},{"level":3,"title":"一些例子","slug":"一些例子","link":"#一些例子","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720435246000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-Core-50-Courses/第05课：分支结构.md"}');export{o as comp,v as data};
