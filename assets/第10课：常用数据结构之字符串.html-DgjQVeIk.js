import{_ as n,c as s,o as e,b as a}from"./app-CgltcQVY.js";const i="/docs/assets/20210727163610-CiGSjWkI.jpg",l={},d=a('<h2 id="第10课-字符串的使用" tabindex="-1"><a class="header-anchor" href="#第10课-字符串的使用"><span>第10课：字符串的使用</span></a></h2><p>第二次世界大战促使了现代电子计算机的诞生，世界上的第一台通用电子计算机叫ENIAC（电子数值积分计算机），诞生于美国的宾夕法尼亚大学，占地167平米，重量27吨，每秒钟大约能够完成约5000次浮点运算，如下图所示。ENIAC诞生之后被应用于导弹弹道的计算，而数值计算也是现代电子计算机最为重要的一项功能。</p><img src="'+i+`" width="65%"><p>随着时间的推移，虽然数值运算仍然是计算机日常工作中最为重要的组成部分，但是今天的计算机还要处理大量的以文本形式存在的信息。如果我们希望通过Python程序来操作本这些文本信息，就必须要先了解字符串这种数据类型以及与它相关的知识。</p><h3 id="字符串的定义" tabindex="-1"><a class="header-anchor" href="#字符串的定义"><span>字符串的定义</span></a></h3><p>所谓<strong>字符串</strong>，就是<strong>由零个或多个字符组成的有限序列</strong>，一般记为： $$ s = a_1a_2 \\cdots a_n ,,,,, (0 \\le n \\le \\infty) $$ 在Python程序中，如果我们把单个或多个字符用单引号或者双引号包围起来，就可以表示一个字符串。字符串中的字符可以是特殊符号、英文字母、中文字符、日文的平假名或片假名、希腊字母、<a href="http://www.ruanyifeng.com/blog/2017/04/emoji.html" target="_blank" rel="noopener noreferrer">Emoji字符</a>等。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello, world!&#39;</span>
<span class="line">s2 = &quot;你好，世界！&quot;</span>
<span class="line">print(s1, s2)</span>
<span class="line"># 以三个双引号或单引号开头的字符串可以折行</span>
<span class="line">s3 = &#39;&#39;&#39;</span>
<span class="line">hello, </span>
<span class="line">world!</span>
<span class="line">&#39;&#39;&#39;</span>
<span class="line">print(s3, end=&#39;&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：<code>print</code>函数中的<code>end=&#39;&#39;</code>表示输出后不换行，即将默认的结束符<code>\\n</code>（换行符）更换为<code>&#39;&#39;</code>（空字符）。</p></blockquote><h3 id="转义字符和原始字符串" tabindex="-1"><a class="header-anchor" href="#转义字符和原始字符串"><span>转义字符和原始字符串</span></a></h3><p>可以在字符串中使用<code>\\</code>（反斜杠）来表示转义，也就是说<code>\\</code>后面的字符不再是它原来的意义，例如：<code>\\n</code>不是代表反斜杠和字符<code>n</code>，而是表示换行；<code>\\t</code>也不是代表反斜杠和字符<code>t</code>，而是表示制表符。所以如果字符串本身又包含了<code>&#39;</code>、<code>&quot;</code>、<code>\\</code>这些特殊的字符，必须要通过<code>\\</code>进行转义处理。例如要输出一个带单引号或反斜杠的字符串，需要用如下所示的方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;\\&#39;hello, world!\\&#39;&#39;</span>
<span class="line">print(s1)</span>
<span class="line">s2 = &#39;\\\\hello, world!\\\\&#39;</span>
<span class="line">print(s2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中的字符串可以<code>r</code>或<code>R</code>开头，这种字符串被称为原始字符串，意思是字符串中的每个字符都是它本来的含义，没有所谓的转义字符。例如，在字符串<code>&#39;hello\\n&#39;</code>中，<code>\\n</code>表示换行；而在<code>r&#39;hello\\n&#39;</code>中，<code>\\n</code>不再表示换行，就是反斜杠和字符<code>n</code>。大家可以运行下面的代码，看看会输出什么。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 字符串s1中\\t是制表符，\\n是换行符</span>
<span class="line">s1 = &#39;\\time up \\now&#39;</span>
<span class="line">print(s1)</span>
<span class="line"># 字符串s2中没有转义字符，每个字符都是原始含义</span>
<span class="line">s2 = r&#39;\\time up \\now&#39;</span>
<span class="line">print(s2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中还允许在<code>\\</code>后面还可以跟一个八进制或者十六进制数来表示字符，例如<code>\\141</code>和<code>\\x61</code>都代表小写字母<code>a</code>，前者是八进制的表示法，后者是十六进制的表示法。另外一种表示字符的方式是在<code>\\u</code>后面跟Unicode字符编码，例如<code>\\u9a86\\u660a</code>代表的是中文“骆昊”。运行下面的代码，看看输出了什么。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;\\141\\142\\143\\x61\\x62\\x63&#39;</span>
<span class="line">s2 = &#39;\\u9a86\\u660a&#39;</span>
<span class="line">print(s1, s2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的运算" tabindex="-1"><a class="header-anchor" href="#字符串的运算"><span>字符串的运算</span></a></h3><p>Python为字符串类型提供了非常丰富的运算符，我们可以使用<code>+</code>运算符来实现字符串的拼接，可以使用<code>*</code>运算符来重复一个字符串的内容，可以使用<code>in</code>和<code>not in</code>来判断一个字符串是否包含另外一个字符串，我们也可以用<code>[]</code>和<code>[:]</code>运算符从字符串取出某个字符或某些字符。</p><h4 id="拼接和重复" tabindex="-1"><a class="header-anchor" href="#拼接和重复"><span>拼接和重复</span></a></h4><p>下面的例子演示了使用<code>+</code>和<code>*</code>运算符来实现字符串的拼接和重复操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello&#39; + &#39; &#39; + &#39;world&#39;</span>
<span class="line">print(s1)    # hello world</span>
<span class="line">s2 = &#39;!&#39; * 3</span>
<span class="line">print(s2)    # !!!</span>
<span class="line">s1 += s2     # s1 = s1 + s2</span>
<span class="line">print(s1)    # hello world!!!</span>
<span class="line">s1 *= 2      # s1 = s1 * 2</span>
<span class="line">print(s1)    # hello world!!!hello world!!!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用<code>*</code>实现字符串的重复是非常有意思的一个运算符，在很多编程语言中，要表示一个有10个<code>a</code>的字符串，你只能写成<code>&quot;aaaaaaaaaa&quot;</code>，但是在Python中，你可以写成<code>&#39;a&#39; * 10</code>。你可能觉得<code>&quot;aaaaaaaaaa&quot;</code>这种写法也没有什么不方便的，那么想一想，如果字符<code>a</code>要重复100次或者1000次又会如何呢？</p><h4 id="比较运算" tabindex="-1"><a class="header-anchor" href="#比较运算"><span>比较运算</span></a></h4><p>对于两个字符串类型的变量，可以直接使用比较运算符比较两个字符串的相等性或大小。需要说明的是，因为字符串在计算机内存中也是以二进制形式存在的，那么字符串的大小比较比的是每个字符对应的编码的大小。例如<code>A</code>的编码是<code>65</code>， 而<code>a</code>的编码是<code>97</code>，所以<code>&#39;A&#39; &lt; &#39;a&#39;</code>的结果相当于就是<code>65 &lt; 97</code>的结果，很显然是<code>True</code>；而<code>&#39;boy&#39; &lt; &#39;bad&#39;</code>，因为第一个字符都是<code>&#39;b&#39;</code>比不出大小，所以实际比较的是第二个字符的大小，显然<code>&#39;o&#39; &lt; &#39;a&#39;</code>的结果是<code>False</code>，所以<code>&#39;boy&#39; &lt; &#39;bad&#39;</code>的结果也是<code>False</code>。如果不清楚两个字符对应的编码到底是多少，可以使用<code>ord</code>函数来获得，例如<code>ord(&#39;A&#39;)</code>的值是<code>65</code>，而<code>ord(&#39;昊&#39;)</code>的值是<code>26122</code>。下面的代码为大家展示了字符串的比较运算。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;a whole new world&#39;</span>
<span class="line">s2 = &#39;hello world&#39;</span>
<span class="line">print(s1 == s2, s1 &lt; s2)      # False True</span>
<span class="line">print(s2 == &#39;hello world&#39;)    # True</span>
<span class="line">print(s2 == &#39;Hello world&#39;)    # False</span>
<span class="line">print(s2 != &#39;Hello world&#39;)    # True</span>
<span class="line">s3 = &#39;骆昊&#39;</span>
<span class="line">print(ord(&#39;骆&#39;), ord(&#39;昊&#39;))               # 39558 26122</span>
<span class="line">s4 = &#39;王大锤&#39;</span>
<span class="line">print(ord(&#39;王&#39;), ord(&#39;大&#39;), ord(&#39;锤&#39;))    # 29579 22823 38180</span>
<span class="line">print(s3 &gt; s4, s3 &lt;= s4)      # True False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要强调一下的是，字符串的比较运算比较的是字符串的内容，Python中还有一个<code>is</code>运算符（身份运算符），如果用<code>is</code>来比较两个字符串，它比较的是两个变量对应的字符串对象的内存地址（不理解先跳过），简单的说就是两个变量是否对应内存中的同一个字符串。看看下面的代码就比较清楚<code>is</code>运算符的作用了。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello world&#39;</span>
<span class="line">s2 = &#39;hello world&#39;</span>
<span class="line">s3 = s2</span>
<span class="line"># 比较字符串的内容</span>
<span class="line">print(s1 == s2, s2 == s3)    # True True</span>
<span class="line"># 比较字符串的内存地址</span>
<span class="line">print(s1 is s2, s2 is s3)    # False True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员运算" tabindex="-1"><a class="header-anchor" href="#成员运算"><span>成员运算</span></a></h4><p>Python中可以用<code>in</code>和<code>not in</code>判断一个字符串中是否存在另外一个字符或字符串，<code>in</code>和<code>not in</code>运算通常称为成员运算，会产生布尔值<code>True</code>或<code>False</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello, world&#39;</span>
<span class="line">print(&#39;wo&#39; in s1)    # True</span>
<span class="line">s2 = &#39;goodbye&#39;</span>
<span class="line">print(s2 in s1)      # False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取字符串长度" tabindex="-1"><a class="header-anchor" href="#获取字符串长度"><span>获取字符串长度</span></a></h4><p>获取字符串长度没有直接的运算符，而是使用内置函数<code>len</code>，我们在上节课的提到过这个内置函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;hello, world&#39;</span>
<span class="line">print(len(s))                   # 12</span>
<span class="line">print(len(&#39;goodbye, world&#39;))    # 14</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="索引和切片" tabindex="-1"><a class="header-anchor" href="#索引和切片"><span>索引和切片</span></a></h4><p>如果希望从字符串中取出某个字符，我们可以对字符串进行索引运算，运算符是<code>[n]</code>，其中<code>n</code>是一个整数，假设字符串的长度为<code>N</code>，那么<code>n</code>可以是从<code>0</code>到<code>N-1</code>的整数，其中<code>0</code>是字符串中第一个字符的索引，而<code>N-1</code>是字符串中最后一个字符的索引，通常称之为正向索引；在Python中，字符串的索引也可以是从<code>-1</code>到<code>-N</code>的整数，其中<code>-1</code>是最后一个字符的索引，而<code>-N</code>则是第一个字符的索引，通常称之为负向索引。注意，因为<strong>字符串是不可变类型</strong>，所以<strong>不能通过索引运算修改字符串中的字符</strong>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;abc123456&#39;</span>
<span class="line">N = len(s)</span>
<span class="line"></span>
<span class="line"># 获取第一个字符</span>
<span class="line">print(s[0], s[-N])    # a a</span>
<span class="line"></span>
<span class="line"># 获取最后一个字符</span>
<span class="line">print(s[N-1], s[-1])  # 6 6</span>
<span class="line"></span>
<span class="line"># 获取索引为2或-7的字符</span>
<span class="line">print(s[2], s[-7])    # c c</span>
<span class="line"></span>
<span class="line"># 获取索引为5和-4的字符</span>
<span class="line">print(s[5], s[-4])    # 3 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家注意的是，在进行索引操作时，如果索引越界（正向索引不在<code>0</code>到<code>N-1</code>范围，负向索引不在<code>-1</code>到<code>-N</code>范围），会引发<code>IndexError</code>异常，错误提示信息为：<code>string index out of range</code>（字符串索引超出范围）。</p><p>如果要从字符串中取出多个字符，我们可以对字符串进行切片，运算符是<code>[i:j:k]</code>，其中<code>i</code>是开始索引，索引对应的字符可以取到；<code>j</code>是结束索引，索引对应的字符不能取到；<code>k</code>是步长，默认值为<code>1</code>，表示从前向后获取相邻字符的连续切片，所以<code>:k</code>部分可以省略。假设字符串的长度为<code>N</code>，当<code>k &gt; 0</code>时表示正向切片（从前向后获取字符），如果没有给出<code>i</code>和<code>j</code>的值，则<code>i</code>的默认值是<code>0</code>，<code>j</code>的默认值是<code>N</code>；当<code>k &lt; 0</code>时表示负向切片（从后向前获取字符），如果没有给出<code>i</code>和<code>j</code>的值，则<code>i</code>的默认值是<code>-1</code>，j的默认值是<code>-N - 1</code>。如果不理解，直接看下面的例子，记住第一个字符的索引是<code>0</code>或<code>-N</code>，最后一个字符的索引是<code>N-1</code>或<code>-1</code>就行了。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;abc123456&#39;</span>
<span class="line"></span>
<span class="line"># i=2, j=5, k=1的正向切片操作</span>
<span class="line">print(s[2:5])       # c12</span>
<span class="line"></span>
<span class="line"># i=-7, j=-4, k=1的正向切片操作</span>
<span class="line">print(s[-7:-4])     # c12</span>
<span class="line"></span>
<span class="line"># i=2, j=9, k=1的正向切片操作</span>
<span class="line">print(s[2:])        # c123456</span>
<span class="line"></span>
<span class="line"># i=-7, j=9, k=1的正向切片操作</span>
<span class="line">print(s[-7:])       # c123456</span>
<span class="line"></span>
<span class="line"># i=2, j=9, k=2的正向切片操作</span>
<span class="line">print(s[2::2])      # c246</span>
<span class="line"></span>
<span class="line"># i=-7, j=9, k=2的正向切片操作</span>
<span class="line">print(s[-7::2])     # c246</span>
<span class="line"></span>
<span class="line"># i=0, j=9, k=2的正向切片操作</span>
<span class="line">print(s[::2])       # ac246</span>
<span class="line"></span>
<span class="line"># i=1, j=-1, k=2的正向切片操作</span>
<span class="line">print(s[1:-1:2])    # b135</span>
<span class="line"></span>
<span class="line"># i=7, j=1, k=-1的负向切片操作</span>
<span class="line">print(s[7:1:-1])    # 54321c</span>
<span class="line"></span>
<span class="line"># i=-2, j=-8, k=-1的负向切片操作</span>
<span class="line">print(s[-2:-8:-1])  # 54321c</span>
<span class="line"></span>
<span class="line"># i=7, j=-10, k=-1的负向切片操作</span>
<span class="line">print(s[7::-1])     # 54321cba</span>
<span class="line"></span>
<span class="line"># i=-1, j=1, k=-1的负向切片操作</span>
<span class="line">print(s[:1:-1])     # 654321c</span>
<span class="line"></span>
<span class="line"># i=0, j=9, k=1的正向切片</span>
<span class="line">print(s[:])         # abc123456</span>
<span class="line"></span>
<span class="line"># i=0, j=9, k=2的正向切片</span>
<span class="line">print(s[::2])       # ac246</span>
<span class="line"></span>
<span class="line"># i=-1, j=-10, k=-1的负向切片</span>
<span class="line">print(s[::-1])      # 654321cba</span>
<span class="line"></span>
<span class="line"># i=-1, j=-10, k=-2的负向切片</span>
<span class="line">print(s[::-2])      # 642ca</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环遍历每个字符" tabindex="-1"><a class="header-anchor" href="#循环遍历每个字符"><span>循环遍历每个字符</span></a></h4><p>如果希望从字符串中取出每个字符，可以使用<code>for</code>循环对字符串进行遍历，有两种方式。</p><p>方式一：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello&#39;</span>
<span class="line">for index in range(len(s1)):</span>
<span class="line">    print(s1[index])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello&#39;</span>
<span class="line">for ch in s1:</span>
<span class="line">    print(ch)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的方法" tabindex="-1"><a class="header-anchor" href="#字符串的方法"><span>字符串的方法</span></a></h3><p>在Python中，我们可以通过字符串类型自带的方法对字符串进行操作和处理，对于一个字符串类型的变量，我们可以用<code>变量名.方法名()</code>的方式来调用它的方法。所谓方法其实就是跟某个类型的变量绑定的函数，后面我们讲面向对象编程的时候还会对这一概念详加说明。</p><h4 id="大小写相关操作" tabindex="-1"><a class="header-anchor" href="#大小写相关操作"><span>大小写相关操作</span></a></h4><p>下面的代码演示了和字符串大小写变换相关的方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello, world!&#39;</span>
<span class="line"></span>
<span class="line"># 使用capitalize方法获得字符串首字母大写后的字符串</span>
<span class="line">print(s1.capitalize())   # Hello, world!</span>
<span class="line"># 使用title方法获得字符串每个单词首字母大写后的字符串</span>
<span class="line">print(s1.title())        # Hello, World!</span>
<span class="line"># 使用upper方法获得字符串大写后的字符串</span>
<span class="line">print(s1.upper())        # HELLO, WORLD!</span>
<span class="line"></span>
<span class="line">s2 = &#39;GOODBYE&#39;</span>
<span class="line"># 使用lower方法获得字符串小写后的字符串</span>
<span class="line">print(s2.lower())        # goodbye</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找操作" tabindex="-1"><a class="header-anchor" href="#查找操作"><span>查找操作</span></a></h4><p>如果想在一个字符串中从前向后查找有没有另外一个字符串，可以使用字符串的<code>find</code>或<code>index</code>方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;hello, world!&#39;</span>
<span class="line"></span>
<span class="line"># find方法从字符串中查找另一个字符串所在的位置</span>
<span class="line"># 找到了返回字符串中另一个字符串首字符的索引</span>
<span class="line">print(s.find(&#39;or&#39;))        # 8</span>
<span class="line"># 找不到返回-1</span>
<span class="line">print(s.find(&#39;shit&#39;))      # -1</span>
<span class="line"># index方法与find方法类似</span>
<span class="line"># 找到了返回字符串中另一个字符串首字符的索引</span>
<span class="line">print(s.index(&#39;or&#39;))       # 8</span>
<span class="line"># 找不到引发异常</span>
<span class="line">print(s.index(&#39;shit&#39;))     # ValueError: substring not found</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用<code>find</code>和<code>index</code>方法时还可以通过方法的参数来指定查找的范围，也就是查找不必从索引为<code>0</code>的位置开始。<code>find</code>和<code>index</code>方法还有逆向查找（从后向前查找）的版本，分别是<code>rfind</code>和<code>rindex</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;hello good world!&#39;</span>
<span class="line"></span>
<span class="line"># 从前向后查找字符o出现的位置(相当于第一次出现)</span>
<span class="line">print(s.find(&#39;o&#39;))       # 4</span>
<span class="line"># 从索引为5的位置开始查找字符o出现的位置</span>
<span class="line">print(s.find(&#39;o&#39;, 5))    # 7</span>
<span class="line"># 从后向前查找字符o出现的位置(相当于最后一次出现)</span>
<span class="line">print(s.rfind(&#39;o&#39;))      # 12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="性质判断" tabindex="-1"><a class="header-anchor" href="#性质判断"><span>性质判断</span></a></h4><p>可以通过字符串的<code>startswith</code>、<code>endswith</code>来判断字符串是否以某个字符串开头和结尾；还可以用<code>is</code>开头的方法判断字符串的特征，这些方法都返回布尔值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s1 = &#39;hello, world!&#39;</span>
<span class="line"></span>
<span class="line"># startwith方法检查字符串是否以指定的字符串开头返回布尔值</span>
<span class="line">print(s1.startswith(&#39;He&#39;))    # False</span>
<span class="line">print(s1.startswith(&#39;hel&#39;))   # True</span>
<span class="line"># endswith方法检查字符串是否以指定的字符串结尾返回布尔值</span>
<span class="line">print(s1.endswith(&#39;!&#39;))       # True</span>
<span class="line"></span>
<span class="line">s2 = &#39;abc123456&#39;</span>
<span class="line"></span>
<span class="line"># isdigit方法检查字符串是否由数字构成返回布尔值</span>
<span class="line">print(s2.isdigit())    # False</span>
<span class="line"># isalpha方法检查字符串是否以字母构成返回布尔值</span>
<span class="line">print(s2.isalpha())    # False</span>
<span class="line"># isalnum方法检查字符串是否以数字和字母构成返回布尔值</span>
<span class="line">print(s2.isalnum())    # True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="格式化字符串" tabindex="-1"><a class="header-anchor" href="#格式化字符串"><span>格式化字符串</span></a></h4><p>在Python中，字符串类型可以通过<code>center</code>、<code>ljust</code>、<code>rjust</code>方法做居中、左对齐和右对齐的处理。如果要在字符串的左侧补零，也可以使用<code>zfill</code>方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;hello, world&#39;</span>
<span class="line"></span>
<span class="line"># center方法以宽度20将字符串居中并在两侧填充*</span>
<span class="line">print(s.center(20, &#39;*&#39;))  # ****hello, world****</span>
<span class="line"># rjust方法以宽度20将字符串右对齐并在左侧填充空格</span>
<span class="line">print(s.rjust(20))        #         hello, world</span>
<span class="line"># ljust方法以宽度20将字符串左对齐并在右侧填充~</span>
<span class="line">print(s.ljust(20, &#39;~&#39;))   # hello, world~~~~~~~~</span>
<span class="line"># 在字符串的左侧补零</span>
<span class="line">print(&#39;33&#39;.zfill(5))      # 00033</span>
<span class="line">print(&#39;-33&#39;.zfill(5))     # -0033</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们之前讲过，在用<code>print</code>函数输出字符串时，可以用下面的方式对字符串进行格式化。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = 321</span>
<span class="line">b = 123</span>
<span class="line">print(&#39;%d * %d = %d&#39; % (a, b, a * b))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以用字符串的方法来完成字符串的格式，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = 321</span>
<span class="line">b = 123</span>
<span class="line">print(&#39;{0} * {1} = {2}&#39;.format(a, b, a * b))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从Python 3.6开始，格式化字符串还有更为简洁的书写方式，就是在字符串前加上<code>f</code>来格式化字符串，在这种以<code>f</code>打头的字符串中，<code>{变量名}</code>是一个占位符，会被变量对应的值将其替换掉，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = 321</span>
<span class="line">b = 123</span>
<span class="line">print(f&#39;{a} * {b} = {a * b}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要进一步控制格式化语法中变量值的形式，可以参照下面的表格来进行字符串格式化操作。</p><table><thead><tr><th>变量值</th><th>占位符</th><th>格式化结果</th><th>说明</th></tr></thead><tbody><tr><td><code>3.1415926</code></td><td><code>{:.2f}</code></td><td><code>&#39;3.14&#39;</code></td><td>保留小数点后两位</td></tr><tr><td><code>3.1415926</code></td><td><code>{:+.2f}</code></td><td><code>&#39;+3.14&#39;</code></td><td>带符号保留小数点后两位</td></tr><tr><td><code>-1</code></td><td><code>{:+.2f}</code></td><td><code>&#39;-1.00&#39;</code></td><td>带符号保留小数点后两位</td></tr><tr><td><code>3.1415926</code></td><td><code>{:.0f}</code></td><td><code>&#39;3&#39;</code></td><td>不带小数</td></tr><tr><td><code>123</code></td><td><code>{:0&gt;10d}</code></td><td><code>&#39;0000000123&#39;</code></td><td>左边补<code>0</code>，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:x&lt;10d}</code></td><td><code>&#39;123xxxxxxx&#39;</code></td><td>右边补<code>x</code> ，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:&gt;10d}</code></td><td><code>&#39; 123&#39;</code></td><td>左边补空格，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:&lt;10d}</code></td><td><code>&#39;123 &#39;</code></td><td>右边补空格，补够10位</td></tr><tr><td><code>123456789</code></td><td><code>{:,}</code></td><td><code>&#39;123,456,789&#39;</code></td><td>逗号分隔格式</td></tr><tr><td><code>0.123</code></td><td><code>{:.2%}</code></td><td><code>&#39;12.30%&#39;</code></td><td>百分比格式</td></tr><tr><td><code>123456789</code></td><td><code>{:.2e}</code></td><td><code>&#39;1.23e+08&#39;</code></td><td>科学计数法格式</td></tr></tbody></table><h4 id="修剪操作" tabindex="-1"><a class="header-anchor" href="#修剪操作"><span>修剪操作</span></a></h4><p>字符串的<code>strip</code>方法可以帮我们获得将原字符串修剪掉左右两端空格之后的字符串。这个方法非常有实用价值，通常用来将用户输入中因为不小心键入的头尾空格去掉，<code>strip</code>方法还有<code>lstrip</code>和<code>rstrip</code>两个版本，相信从名字大家已经猜出来这两个方法是做什么用的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;   jackfrued@126.com  \\t\\r\\n&#39;</span>
<span class="line"># strip方法获得字符串修剪左右两侧空格之后的字符串</span>
<span class="line">print(s.strip())    # jackfrued@126.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换操作" tabindex="-1"><a class="header-anchor" href="#替换操作"><span>替换操作</span></a></h4><p>如果希望用新的内容替换字符串中指定的内容，可以使用<code>replace</code>方法，代码如下所示。<code>replace</code>方法的第一个参数是被替换的内容，第二个参数是替换后的内容，还可以通过第三个参数指定替换的次数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;hello, world&#39;</span>
<span class="line">print(s.replace(&#39;o&#39;, &#39;@&#39;))     # hell@, w@rld</span>
<span class="line">print(s.replace(&#39;o&#39;, &#39;@&#39;, 1))  # hell@, world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拆分-合并操作" tabindex="-1"><a class="header-anchor" href="#拆分-合并操作"><span>拆分/合并操作</span></a></h4><p>可以使用字符串的<code>split</code>方法将一个字符串拆分为多个字符串（放在一个列表中），也可以使用字符串的<code>join</code>方法将列表中的多个字符串连接成一个字符串，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;I love you&#39;</span>
<span class="line">words = s.split()</span>
<span class="line">print(words)            # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;]</span>
<span class="line">print(&#39;#&#39;.join(words))  # I#love#you</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，<code>split</code>方法默认使用空格进行拆分，我们也可以指定其他的字符来拆分字符串，而且还可以指定最大拆分次数来控制拆分的效果，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">s = &#39;I#love#you#so#much&#39;</span>
<span class="line">words = s.split(&#39;#&#39;)</span>
<span class="line">print(words)  # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;, &#39;so&#39;, &#39;much&#39;]</span>
<span class="line">words = s.split(&#39;#&#39;, 3)</span>
<span class="line">print(words)  # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;, &#39;so#much&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编码-解码操作" tabindex="-1"><a class="header-anchor" href="#编码-解码操作"><span>编码/解码操作</span></a></h4><p>Python中除了字符串<code>str</code>类型外，还有一种表示二进制数据的字节串类型（<code>bytes</code>）。所谓字节串，就是<strong>由零个或多个字节组成的有限序列</strong>。通过字符串的<code>encode</code>方法，我们可以按照某种编码方式将字符串编码为字节串，我们也可以使用字节串的<code>decode</code>方法，将字节串解码为字符串，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = &#39;骆昊&#39;</span>
<span class="line">b = a.encode(&#39;utf-8&#39;)</span>
<span class="line">c = a.encode(&#39;gbk&#39;)</span>
<span class="line">print(b, c)  # b&#39;\\xe9\\xaa\\x86\\xe6\\x98\\x8a&#39; b&#39;\\xc2\\xe6\\xea\\xbb&#39;</span>
<span class="line">print(b.decode(&#39;utf-8&#39;))</span>
<span class="line">print(c.decode(&#39;gbk&#39;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果编码和解码的方式不一致，会导致乱码问题（无法再现原始的内容）或引发<code>UnicodeDecodeError</code>错误导致程序崩溃。</p><h4 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法"><span>其他方法</span></a></h4><p>对于字符串类型来说，还有一个常用的操作是对字符串进行匹配检查，即检查字符串是否满足某种特定的模式。例如，一个网站对用户注册信息中用户名和邮箱的检查，就属于模式匹配检查。实现模式匹配检查的工具叫做正则表达式，Python语言通过标准库中的<code>re</code>模块提供了对正则表达式的支持，我们会在后续的课程中为大家讲解这个知识点。</p><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>知道如何表示和操作字符串对程序员来说是非常重要的，因为我们需要处理文本信息，Python中操作字符串可以用拼接、切片等运算符，也可以使用字符串类型的方法。</p>`,87),c=[d];function r(o,p){return e(),s("div",null,c)}const v=n(l,[["render",r],["__file","第10课：常用数据结构之字符串.html.vue"]]),u=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC10%E8%AF%BE%EF%BC%9A%E5%B8%B8%E7%94%A8%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B9%8B%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第10课：字符串的使用","slug":"第10课-字符串的使用","link":"#第10课-字符串的使用","children":[{"level":3,"title":"字符串的定义","slug":"字符串的定义","link":"#字符串的定义","children":[]},{"level":3,"title":"转义字符和原始字符串","slug":"转义字符和原始字符串","link":"#转义字符和原始字符串","children":[]},{"level":3,"title":"字符串的运算","slug":"字符串的运算","link":"#字符串的运算","children":[]},{"level":3,"title":"字符串的方法","slug":"字符串的方法","link":"#字符串的方法","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720516588000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-Core-50-Courses/第10课：常用数据结构之字符串.md"}');export{v as comp,u as data};
