import{_ as n,c as s,o as a,d as e}from"./app-CfKFMHBg.js";const i={},l=e(`<h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构"><span>循环结构</span></a></h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h3><p>我们在写程序的时候，一定会遇到需要重复执行某条或某些指令的场景。例如用程序控制机器人踢足球，如果机器人持球而且还没有进入射门范围，那么我们就要一直发出让机器人向球门方向移动的指令。在这个场景中，让机器人向球门方向移动就是一个需要重复的动作，当然这里还会用到上一课讲的分支结构来判断机器人是否持球以及是否进入射门范围。再举一个简单的例子，如果要实现每隔1秒中在屏幕上打印一次“hello, world”并持续打印一个小时，我们肯定不能够直接把<code>print(&#39;hello, world&#39;)</code>这句代码写3600遍，这里同样需要循环结构。</p><p>循环结构就是程序中控制某条或某些指令重复执行的结构。在Python中构造循环结构有两种做法，一种是<code>for-in</code>循环，一种是<code>while</code>循环。</p><h3 id="for-in循环" tabindex="-1"><a class="header-anchor" href="#for-in循环"><span>for-in循环</span></a></h3><p>如果明确的知道循环执行的次数或者要对一个容器进行迭代（后面会讲到），那么我们推荐使用<code>for-in</code>循环，例如下面代码中计算1~100求和的结果（$\\displaystyle \\sum \\limits_{n=1}^{100}n$）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">用for循环实现1~100求和</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">sum = 0</span>
<span class="line">for x in range(101):</span>
<span class="line">    sum += x</span>
<span class="line">print(sum)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是上面代码中的<code>range(1, 101)</code>可以用来构造一个从1到100的范围，当我们把这样一个范围放到<code>for-in</code>循环中，就可以通过前面的循环变量<code>x</code>依次取出从1到100的整数。当然，<code>range</code>的用法非常灵活，下面给出了一个例子：</p><ul><li><code>range(101)</code>：可以用来产生0到100范围的整数，需要注意的是取不到101。</li><li><code>range(1, 101)</code>：可以用来产生1到100范围的整数，相当于前面是闭区间后面是开区间。</li><li><code>range(1, 101, 2)</code>：可以用来产生1到100的奇数，其中2是步长，即每次数值递增的值。</li><li><code>range(100, 0, -2)</code>：可以用来产生100到1的偶数，其中-2是步长，即每次数字递减的值。</li></ul><p>知道了这一点，我们可以用下面的代码来实现1~100之间的偶数求和。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">用for循环实现1~100之间的偶数求和</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">sum = 0</span>
<span class="line">for x in range(2, 101, 2):</span>
<span class="line">    sum += x</span>
<span class="line">print(sum)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以通过在循环中使用分支结构的方式来实现相同的功能，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">用for循环实现1~100之间的偶数求和</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">sum = 0</span>
<span class="line">for x in range(1, 101):</span>
<span class="line">    if x % 2 == 0:</span>
<span class="line">        sum += x</span>
<span class="line">print(sum)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：相较于上面直接跳过奇数的做法，下面这种做法很明显并不是很好的选择。</p></blockquote><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环"><span>while循环</span></a></h3><p>如果要构造不知道具体循环次数的循环结构，我们推荐使用<code>while</code>循环。<code>while</code>循环通过一个能够产生或转换出<code>bool</code>值的表达式来控制循环，表达式的值为<code>True</code>则继续循环；表达式的值为<code>False</code>则结束循环。</p><p>下面我们通过一个“猜数字”的小游戏来看看如何使用<code>while</code>循环。猜数字游戏的规则是：计算机出一个1到100之间的随机数，玩家输入自己猜的数字，计算机给出对应的提示信息（大一点、小一点或猜对了），如果玩家猜中了数字，计算机提示用户一共猜了多少次，游戏结束，否则游戏继续。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">猜数字游戏</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import random</span>
<span class="line"></span>
<span class="line">answer = random.randint(1, 100)</span>
<span class="line">counter = 0</span>
<span class="line">while True:</span>
<span class="line">    counter += 1</span>
<span class="line">    number = int(input(&#39;请输入: &#39;))</span>
<span class="line">    if number &lt; answer:</span>
<span class="line">        print(&#39;大一点&#39;)</span>
<span class="line">    elif number &gt; answer:</span>
<span class="line">        print(&#39;小一点&#39;)</span>
<span class="line">    else:</span>
<span class="line">        print(&#39;恭喜你猜对了!&#39;)</span>
<span class="line">        break</span>
<span class="line">print(&#39;你总共猜了%d次&#39; % counter)</span>
<span class="line">if counter &gt; 7:</span>
<span class="line">    print(&#39;你的智商余额明显不足&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中使用了<code>break</code>关键字来提前终止循环，需要注意的是<code>break</code>只能终止它所在的那个循环，这一点在使用嵌套的循环结构（下面会讲到）需要引起注意。除了<code>break</code>之外，还有另一个关键字是<code>continue</code>，它可以用来放弃本次循环后续的代码直接让循环进入下一轮。</p><p>和分支结构一样，循环结构也是可以嵌套的，也就是说在循环中还可以构造循环结构。下面的例子演示了如何通过嵌套的循环来输出一个九九乘法表。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输出乘法口诀表(九九表)</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">for i in range(1, 10):</span>
<span class="line">    for j in range(1, i + 1):</span>
<span class="line">        print(&#39;%d*%d=%d&#39; % (i, j, i * j), end=&#39;\\t&#39;)</span>
<span class="line">    print()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3><h4 id="练习1-输入一个正整数判断是不是素数。" tabindex="-1"><a class="header-anchor" href="#练习1-输入一个正整数判断是不是素数。"><span>练习1：输入一个正整数判断是不是素数。</span></a></h4><blockquote><p><strong>提示</strong>：素数指的是只能被1和自身整除的大于1的整数。</p></blockquote><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入一个正整数判断它是不是素数</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">Date: 2018-03-01</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from math import sqrt</span>
<span class="line"></span>
<span class="line">num = int(input(&#39;请输入一个正整数: &#39;))</span>
<span class="line">end = int(sqrt(num))</span>
<span class="line">is_prime = True</span>
<span class="line">for x in range(2, end + 1):</span>
<span class="line">    if num % x == 0:</span>
<span class="line">        is_prime = False</span>
<span class="line">        break</span>
<span class="line">if is_prime and num != 1:</span>
<span class="line">    print(&#39;%d是素数&#39; % num)</span>
<span class="line">else:</span>
<span class="line">    print(&#39;%d不是素数&#39; % num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习2-输入两个正整数-计算它们的最大公约数和最小公倍数。" tabindex="-1"><a class="header-anchor" href="#练习2-输入两个正整数-计算它们的最大公约数和最小公倍数。"><span>练习2：输入两个正整数，计算它们的最大公约数和最小公倍数。</span></a></h4><blockquote><p><strong>提示</strong>：两个数的最大公约数是两个数的公共因子中最大的那个数；两个数的最小公倍数则是能够同时被两个数整除的最小的那个数。</p></blockquote><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入两个正整数计算它们的最大公约数和最小公倍数</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">Date: 2018-03-01</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">x = int(input(&#39;x = &#39;))</span>
<span class="line">y = int(input(&#39;y = &#39;))</span>
<span class="line"># 如果x大于y就交换x和y的值</span>
<span class="line">if x &gt; y:</span>
<span class="line">    # 通过下面的操作将y的值赋给x, 将x的值赋给y</span>
<span class="line">    x, y = y, x</span>
<span class="line"># 从两个数中较小的数开始做递减的循环</span>
<span class="line">for factor in range(x, 0, -1):</span>
<span class="line">    if x % factor == 0 and y % factor == 0:</span>
<span class="line">        print(&#39;%d和%d的最大公约数是%d&#39; % (x, y, factor))</span>
<span class="line">        print(&#39;%d和%d的最小公倍数是%d&#39; % (x, y, x * y // factor))</span>
<span class="line">        break</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习3-打印如下所示的三角形图案。" tabindex="-1"><a class="header-anchor" href="#练习3-打印如下所示的三角形图案。"><span>练习3：打印如下所示的三角形图案。</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">*</span>
<span class="line">**</span>
<span class="line">***</span>
<span class="line">****</span>
<span class="line">*****</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    *</span>
<span class="line">   **</span>
<span class="line">  ***</span>
<span class="line"> ****</span>
<span class="line">*****</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    *</span>
<span class="line">   ***</span>
<span class="line">  *****</span>
<span class="line"> *******</span>
<span class="line">*********</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">打印三角形图案</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">row = int(input(&#39;请输入行数: &#39;))</span>
<span class="line">for i in range(row):</span>
<span class="line">    for _ in range(i + 1):</span>
<span class="line">        print(&#39;*&#39;, end=&#39;&#39;)</span>
<span class="line">    print()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">for i in range(row):</span>
<span class="line">    for j in range(row):</span>
<span class="line">        if j &lt; row - i - 1:</span>
<span class="line">            print(&#39; &#39;, end=&#39;&#39;)</span>
<span class="line">        else:</span>
<span class="line">            print(&#39;*&#39;, end=&#39;&#39;)</span>
<span class="line">    print()</span>
<span class="line"></span>
<span class="line">for i in range(row):</span>
<span class="line">    for _ in range(row - i - 1):</span>
<span class="line">        print(&#39; &#39;, end=&#39;&#39;)</span>
<span class="line">    for _ in range(2 * i + 1):</span>
<span class="line">        print(&#39;*&#39;, end=&#39;&#39;)</span>
<span class="line">    print()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),d=[l];function c(r,p){return a(),s("div",null,d)}const v=n(i,[["render",c],["__file","04.循环结构.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/04.%E5%BE%AA%E7%8E%AF%E7%BB%93%E6%9E%84.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"循环结构","slug":"循环结构","link":"#循环结构","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"for-in循环","slug":"for-in循环","link":"#for-in循环","children":[]},{"level":3,"title":"while循环","slug":"while循环","link":"#while循环","children":[]},{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/04.循环结构.md"}');export{v as comp,u as data};
