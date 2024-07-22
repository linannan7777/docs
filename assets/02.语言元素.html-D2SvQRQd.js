import{_ as e,c as n,o as s,d as a}from"./app-CfKFMHBg.js";const d={},l=a(`<h2 id="语言元素" tabindex="-1"><a class="header-anchor" href="#语言元素"><span>语言元素</span></a></h2><h4 id="指令和程序" tabindex="-1"><a class="header-anchor" href="#指令和程序"><span>指令和程序</span></a></h4><p>计算机的硬件系统通常由五大部件构成，包括：运算器、控制器、存储器、输入设备和输出设备。其中，运算器和控制器放在一起就是我们通常所说的中央处理器，它的功能是执行各种运算和控制指令以及处理计算机软件中的数据。我们通常所说的程序实际上就是指令的集合，我们程序就是将一系列的指令按照某种方式组织到一起，然后通过这些指令去控制计算机做我们想让它做的事情。今天我们大多数时候使用的计算机，虽然它们的元器件做工越来越精密，处理能力越来越强大，但究其本质来说仍然属于<a href="https://zh.wikipedia.org/wiki/%E5%86%AF%C2%B7%E8%AF%BA%E4%BC%8A%E6%9B%BC%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">“冯·诺依曼结构”</a>的计算机。“冯·诺依曼结构”有两个关键点，一是指出要将存储设备与中央处理器分开，二是提出了将数据以二进制方式编码。二进制是一种“逢二进一”的计数法，跟我们人类使用的“逢十进一”的计数法没有实质性的区别，人类因为有十根手指所以使用了十进制（因为在数数时十根手指用完之后就只能进位了，当然凡事都有例外，玛雅人可能是因为长年光着脚的原因把脚趾头也算上了，于是他们使用了二十进制的计数法，在这种计数法的指导下玛雅人的历法就与我们平常使用的历法不一样，而按照玛雅人的历法，2012年是上一个所谓的“太阳纪”的最后一年，而2013年则是新的“太阳纪”的开始，后来这件事情被以讹传讹的方式误传为”2012年是玛雅人预言的世界末日“这种荒诞的说法，今天我们可以大胆的猜测，玛雅文明之所以发展缓慢估计也与使用了二十进制有关）。对于计算机来说，二进制在物理器件上来说是最容易实现的（高电压表示1，低电压表示0），于是在“冯·诺依曼结构”的计算机都使用了二进制。虽然我们并不需要每个程序员都能够使用二进制的思维方式来工作，但是了解二进制以及它与我们生活中的十进制之间的转换关系，以及二进制与八进制和十六进制的转换关系还是有必要的。如果你对这一点不熟悉，可以自行使用<a href="https://zh.wikipedia.org/wiki/%E4%BA%8C%E8%BF%9B%E5%88%B6" target="_blank" rel="noopener noreferrer">维基百科</a>或者<a href="https://baike.baidu.com" target="_blank" rel="noopener noreferrer">百度百科</a>科普一下。</p><blockquote><p><strong>说明</strong>：近期关于<strong>量子计算机</strong>的研究已经被推倒了风口浪尖，量子计算机基于量子力学进行运算，使用量子瞬移的方式来传递信息。2018年6月，Intel宣布开发出新款量子芯片并通过了在接近绝对零度环境下的测试；2019年，IBM和Google都推出了自己的量子计算机。</p></blockquote><h3 id="变量和类型" tabindex="-1"><a class="header-anchor" href="#变量和类型"><span>变量和类型</span></a></h3><p>在程序设计中，变量是一种存储数据的载体。计算机中的变量是实际存在的数据或者说是存储器中存储数据的一块内存空间，变量的值可以被读取和修改，这是所有计算和控制的基础。计算机能处理的数据有很多种类型，除了数值之外还可以处理文本、图形、音频、视频等各种各样的数据，那么不同的数据就需要定义不同的存储类型。Python中的数据类型很多，而且也允许我们自定义新的数据类型（这一点在后面会讲到），我们先介绍几种常用的数据类型。</p><ul><li>整型：Python中可以处理任意大小的整数（Python 2.x中有<code>int</code>和<code>long</code>两种类型的整数，但这种区分对Python来说意义不大，因此在Python 3.x中整数只有int这一种了），而且支持二进制（如<code>0b100</code>，换算成十进制是4）、八进制（如<code>0o100</code>，换算成十进制是64）、十进制（<code>100</code>）和十六进制（<code>0x100</code>，换算成十进制是256）的表示法。</li><li>浮点型：浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，浮点数除了数学写法（如<code>123.456</code>）之外还支持科学计数法（如<code>1.23456e2</code>）。</li><li>字符串型：字符串是以单引号或双引号括起来的任意文本，比如<code>&#39;hello&#39;</code>和<code>&quot;hello&quot;</code>,字符串还有原始字符串表示法、字节字符串表示法、Unicode字符串表示法，而且可以书写成多行的形式（用三个单引号或三个双引号开头，三个单引号或三个双引号结尾）。</li><li>布尔型：布尔值只有<code>True</code>、<code>False</code>两种值，要么是<code>True</code>，要么是<code>False</code>，在Python中，可以直接用<code>True</code>、<code>False</code>表示布尔值（请注意大小写），也可以通过布尔运算计算出来（例如<code>3 &lt; 5</code>会产生布尔值<code>True</code>，而<code>2 == 1</code>会产生布尔值<code>False</code>）。</li><li>复数型：形如<code>3+5j</code>，跟数学上的复数表示一样，唯一不同的是虚部的<code>i</code>换成了<code>j</code>。实际上，这个类型并不常用，大家了解一下就可以了。</li></ul><h4 id="变量命名" tabindex="-1"><a class="header-anchor" href="#变量命名"><span>变量命名</span></a></h4><p>对于每个变量我们需要给它取一个名字，就如同我们每个人都有属于自己的响亮的名字一样。在Python中，变量命名需要遵循以下这些必须遵守硬性规则和强烈建议遵守的非硬性规则。</p><ul><li>硬性规则： <ul><li>变量名由字母（广义的Unicode字符，不包括特殊字符）、数字和下划线构成，数字不能开头。</li><li>大小写敏感（大写的<code>a</code>和小写的<code>A</code>是两个不同的变量）。</li><li>不要跟关键字（有特殊含义的单词，后面会讲到）和系统保留字（如函数、模块等的名字）冲突。</li></ul></li><li>PEP 8要求： <ul><li>用小写字母拼写，多个单词用下划线连接。</li><li>受保护的实例属性用单个下划线开头（后面会讲到）。</li><li>私有的实例属性用两个下划线开头（后面会讲到）。</li></ul></li></ul><p>当然，作为一个专业的程序员，给变量（事实上应该是所有的标识符）命名时做到见名知意也是非常重要的。</p><h4 id="变量的使用" tabindex="-1"><a class="header-anchor" href="#变量的使用"><span>变量的使用</span></a></h4><p>下面通过几个例子来说明变量的类型和变量使用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">使用变量保存数据并进行加减乘除运算</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">a = 321</span>
<span class="line">b = 12</span>
<span class="line">print(a + b)    # 333</span>
<span class="line">print(a - b)    # 309</span>
<span class="line">print(a * b)    # 3852</span>
<span class="line">print(a / b)    # 26.75</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python中可以使用<code>type</code>函数对变量的类型进行检查。程序设计中函数的概念跟数学上函数的概念是一致的，数学上的函数相信大家并不陌生，它包括了函数名、自变量和因变量。如果暂时不理解这个概念也不要紧，我们会在后续的章节中专门讲解函数的定义和使用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">使用type()检查变量的类型</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">a = 100</span>
<span class="line">b = 12.345</span>
<span class="line">c = 1 + 5j</span>
<span class="line">d = &#39;hello, world&#39;</span>
<span class="line">e = True</span>
<span class="line">print(type(a))    # &lt;class &#39;int&#39;&gt;</span>
<span class="line">print(type(b))    # &lt;class &#39;float&#39;&gt;</span>
<span class="line">print(type(c))    # &lt;class &#39;complex&#39;&gt;</span>
<span class="line">print(type(d))    # &lt;class &#39;str&#39;&gt;</span>
<span class="line">print(type(e))    # &lt;class &#39;bool&#39;&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用Python中内置的函数对变量类型进行转换。</p><ul><li><code>int()</code>：将一个数值或字符串转换成整数，可以指定进制。</li><li><code>float()</code>：将一个字符串转换成浮点数。</li><li><code>str()</code>：将指定的对象转换成字符串形式，可以指定编码。</li><li><code>chr()</code>：将整数转换成该编码对应的字符串（一个字符）。</li><li><code>ord()</code>：将字符串（一个字符）转换成对应的编码（整数）。</li></ul><p>下面的代码通过键盘输入两个整数来实现对两个整数的算术运算。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">使用input()函数获取键盘输入(字符串)</span>
<span class="line">使用int()函数将输入的字符串转换成整数</span>
<span class="line">使用print()函数输出带占位符的字符串</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">print(&#39;%d + %d = %d&#39; % (a, b, a + b))</span>
<span class="line">print(&#39;%d - %d = %d&#39; % (a, b, a - b))</span>
<span class="line">print(&#39;%d * %d = %d&#39; % (a, b, a * b))</span>
<span class="line">print(&#39;%d / %d = %f&#39; % (a, b, a / b))</span>
<span class="line">print(&#39;%d // %d = %d&#39; % (a, b, a // b))</span>
<span class="line">print(&#39;%d %% %d = %d&#39; % (a, b, a % b))</span>
<span class="line">print(&#39;%d ** %d = %d&#39; % (a, b, a ** b))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的print函数中输出的字符串使用了占位符语法，其中<code>%d</code>是整数的占位符，<code>%f</code>是小数的占位符，<code>%%</code>表示百分号（因为百分号代表了占位符，所以带占位符的字符串中要表示百分号必须写成<code>%%</code>），字符串之后的<code>%</code>后面跟的变量值会替换掉占位符然后输出到终端中，运行上面的程序，看看程序执行结果就明白啦。</p></blockquote><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3><p>Python支持多种运算符，下表大致按照优先级从高到低的顺序列出了所有的运算符，运算符的优先级指的是多个运算符同时出现时，先做什么运算然后再做什么运算。除了我们之前已经用过的赋值运算符和算术运算符，我们稍后会陆续讲到其他运算符的使用。</p><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>[]</code> <code>[:]</code></td><td>下标，切片</td></tr><tr><td><code>**</code></td><td>指数</td></tr><tr><td><code>~</code> <code>+</code> <code>-</code></td><td>按位取反, 正负号</td></tr><tr><td><code>*</code> <code>/</code> <code>%</code> <code>//</code></td><td>乘，除，模，整除</td></tr><tr><td><code>+</code> <code>-</code></td><td>加，减</td></tr><tr><td><code>&gt;&gt;</code> <code>&lt;&lt;</code></td><td>右移，左移</td></tr><tr><td><code>&amp;</code></td><td>按位与</td></tr><tr><td><code>^</code> <code>|</code></td><td>按位异或，按位或</td></tr><tr><td><code>&lt;=</code> <code>&lt;</code> <code>&gt;</code> <code>&gt;=</code></td><td>小于等于，小于，大于，大于等于</td></tr><tr><td><code>==</code> <code>!=</code></td><td>等于，不等于</td></tr><tr><td><code>is</code> <code>is not</code></td><td>身份运算符</td></tr><tr><td><code>in</code> <code>not in</code></td><td>成员运算符</td></tr><tr><td><code>not</code> <code>or</code> <code>and</code></td><td>逻辑运算符</td></tr><tr><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code> <code>//=</code> <code>**=</code> <code>&amp;=</code> \`</td><td>=<code></code>^=<code></code>&gt;&gt;=<code></code>&lt;&lt;=\`</td></tr></tbody></table><blockquote><p><strong>说明：</strong> 在实际开发中，如果搞不清楚运算符的优先级，可以使用括号来确保运算的执行顺序。</p></blockquote><h4 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符"><span>赋值运算符</span></a></h4><p>赋值运算符应该是最为常见的运算符，它的作用是将右边的值赋给左边的变量。下面的例子演示了赋值运算符和复合赋值运算符的使用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">赋值运算符和复合赋值运算符</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">a = 10</span>
<span class="line">b = 3</span>
<span class="line">a += b        # 相当于：a = a + b</span>
<span class="line">a *= a + 2    # 相当于：a = a * (a + 2)</span>
<span class="line">print(a)      # 算一下这里会输出什么</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符和逻辑运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符和逻辑运算符"><span>比较运算符和逻辑运算符</span></a></h3><p>比较运算符有的地方也称为关系运算符，包括<code>==</code>、<code>!=</code>、<code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code>、<code>&gt;=</code>，我相信没有什么好解释的，大家一看就能懂，唯一需要提醒的是比较相等用的是<code>==</code>，请注意这个地方是两个等号，因为<code>=</code>是赋值运算符，我们在上面刚刚讲到过，<code>==</code>才是比较相等的比较运算符。比较运算符会产生布尔值，要么是<code>True</code>要么是<code>False</code>。</p><p>逻辑运算符有三个，分别是<code>and</code>、<code>or</code>和<code>not</code>。<code>and</code>字面意思是“而且”，所以<code>and</code>运算符会连接两个布尔值，如果两个布尔值都是<code>True</code>，那么运算的结果就是<code>True</code>；左右两边的布尔值有一个是<code>False</code>，最终的运算结果就是<code>False</code>。相信大家已经想到了，如果<code>and</code>左边的布尔值是<code>False</code>，不管右边的布尔值是什么，最终的结果都是<code>False</code>，所以在做运算的时候右边的值会被跳过（短路处理），这也就意味着在<code>and</code>运算符左边为<code>False</code>的情况下，右边的表达式根本不会执行。<code>or</code>字面意思是“或者”，所以<code>or</code>运算符也会连接两个布尔值，如果两个布尔值有任意一个是<code>True</code>，那么最终的结果就是<code>True</code>。当然，<code>or</code>运算符也是有短路功能的，在它左边的布尔值为<code>True</code>的情况下，右边的表达式根本不会执行。<code>not</code>运算符的后面会跟上一个布尔值，它的作用是得到与该布尔值相反的值，也就是说，后面的布尔值如果是<code>True</code>运算结果就是<code>False</code>，而后面的布尔值如果是<code>False</code>则运算结果就是<code>True</code>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">比较运算符和逻辑运算符的使用</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">flag0 = 1 == 1</span>
<span class="line">flag1 = 3 &gt; 2</span>
<span class="line">flag2 = 2 &lt; 1</span>
<span class="line">flag3 = flag1 and flag2</span>
<span class="line">flag4 = flag1 or flag2</span>
<span class="line">flag5 = not (1 != 2)</span>
<span class="line">print(&#39;flag0 =&#39;, flag0)    # flag0 = True</span>
<span class="line">print(&#39;flag1 =&#39;, flag1)    # flag1 = True</span>
<span class="line">print(&#39;flag2 =&#39;, flag2)    # flag2 = False</span>
<span class="line">print(&#39;flag3 =&#39;, flag3)    # flag3 = False</span>
<span class="line">print(&#39;flag4 =&#39;, flag4)    # flag4 = True</span>
<span class="line">print(&#39;flag5 =&#39;, flag5)    # flag5 = False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：比较运算符的优先级高于赋值运算符，所以<code>flag0 = 1 == 1</code>先做<code>1 == 1</code>产生布尔值<code>True</code>，再将这个值赋值给变量<code>flag0</code>。<code>print</code>函数可以输出多个值，多个值之间可以用<code>,</code>进行分隔，输出的内容之间默认以空格分开。</p></blockquote><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3><h4 id="练习1-华氏温度转换为摄氏温度。" tabindex="-1"><a class="header-anchor" href="#练习1-华氏温度转换为摄氏温度。"><span>练习1：华氏温度转换为摄氏温度。</span></a></h4><blockquote><p>提示：华氏温度到摄氏温度的转换公式为：$C=(F - 32) \\div 1.8$。</p></blockquote><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">将华氏温度转换为摄氏温度</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">f = float(input(&#39;请输入华氏温度: &#39;))</span>
<span class="line">c = (f - 32) / 1.8</span>
<span class="line">print(&#39;%.1f华氏度 = %.1f摄氏度&#39; % (f, c))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在使用<code>print</code>函数输出时，也可以对字符串内容进行格式化处理，上面<code>print</code>函数中的字符串<code>%.1f</code>是一个占位符，稍后会由一个<code>float</code>类型的变量值替换掉它。同理，如果字符串中有<code>%d</code>，后面可以用一个<code>int</code>类型的变量值替换掉它，而<code>%s</code>会被字符串的值替换掉。除了这种格式化字符串的方式外，还可以用下面的方式来格式化字符串，其中<code>{f:.1f}</code>和<code>{c:.1f}</code>可以先看成是<code>{f}</code>和<code>{c}</code>，表示输出时会用变量<code>f</code>和变量<code>c</code>的值替换掉这两个占位符，后面的<code>:.1f</code>表示这是一个浮点数，小数点后保留1位有效数字。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(f&#39;{f:.1f}华氏度 = {c:.1f}摄氏度&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><h4 id="练习2-输入圆的半径计算计算周长和面积。" tabindex="-1"><a class="header-anchor" href="#练习2-输入圆的半径计算计算周长和面积。"><span>练习2：输入圆的半径计算计算周长和面积。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入半径计算圆的周长和面积</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">radius = float(input(&#39;请输入圆的半径: &#39;))</span>
<span class="line">perimeter = 2 * 3.1416 * radius</span>
<span class="line">area = 3.1416 * radius * radius</span>
<span class="line">print(&#39;周长: %.2f&#39; % perimeter)</span>
<span class="line">print(&#39;面积: %.2f&#39; % area)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习3-输入年份判断是不是闰年。" tabindex="-1"><a class="header-anchor" href="#练习3-输入年份判断是不是闰年。"><span>练习3：输入年份判断是不是闰年。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入年份 如果是闰年输出True 否则输出False</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">year = int(input(&#39;请输入年份: &#39;))</span>
<span class="line"># 如果代码太长写成一行不便于阅读 可以使用\\对代码进行折行</span>
<span class="line">is_leap = year % 4 == 0 and year % 100 != 0 or \\</span>
<span class="line">          year % 400 == 0</span>
<span class="line">print(is_leap)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：比较运算符会产生布尔值，而逻辑运算符<code>and</code>和<code>or</code>会对这些布尔值进行组合，最终也是得到一个布尔值，闰年输出<code>True</code>，平年输出<code>False</code>。</p></blockquote>`,46),i=[l];function c(o,t){return s(),n("div",null,i)}const p=e(d,[["render",c],["__file","02.语言元素.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/02.%E8%AF%AD%E8%A8%80%E5%85%83%E7%B4%A0.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"语言元素","slug":"语言元素","link":"#语言元素","children":[{"level":3,"title":"变量和类型","slug":"变量和类型","link":"#变量和类型","children":[]},{"level":3,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":3,"title":"比较运算符和逻辑运算符","slug":"比较运算符和逻辑运算符","link":"#比较运算符和逻辑运算符","children":[]},{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/02.语言元素.md"}');export{p as comp,u as data};
