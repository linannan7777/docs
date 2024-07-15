import{_ as n,c as s,o as i,d as e}from"./app-BFPhRmaa.js";const a={},l=e(`<h2 id="构造程序逻辑" tabindex="-1"><a class="header-anchor" href="#构造程序逻辑"><span>构造程序逻辑</span></a></h2><p>学完前面的几个章节后，我觉得有必要在这里带大家做一些练习来巩固之前所学的知识，虽然迄今为止我们学习的内容只是Python的冰山一角，但是这些内容已经足够我们来构建程序中的逻辑。对于编程语言的初学者来说，在学习了Python的核心语言元素（变量、类型、运算符、表达式、分支结构、循环结构等）之后，必须做的一件事情就是尝试用所学知识去解决现实中的问题，换句话说就是锻炼自己把用人类自然语言描述的算法（解决问题的方法和步骤）翻译成Python代码的能力，而这件事情必须通过大量的练习才能达成。</p><p>我们在本章为大家整理了一些经典的案例和习题，希望通过这些例子，一方面帮助大家巩固之前所学的Python知识，另一方面帮助大家了解如何建立程序中的逻辑以及如何运用一些简单的算法解决现实中的问题。</p><h3 id="经典的例子" tabindex="-1"><a class="header-anchor" href="#经典的例子"><span>经典的例子</span></a></h3><ol><li><p>寻找<strong>水仙花数</strong>。</p><blockquote><p><strong>说明</strong>：水仙花数也被称为超完全数字不变数、自恋数、自幂数、阿姆斯特朗数，它是一个3位数，该数字每个位上数字的立方之和正好等于它本身，例如：$1^3 + 5^3+ 3^3=153$。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">找出所有水仙花数</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">for num in range(100, 1000):</span>
<span class="line">    low = num % 10</span>
<span class="line">    mid = num // 10 % 10</span>
<span class="line">    high = num // 100</span>
<span class="line">    if num == low ** 3 + mid ** 3 + high ** 3:</span>
<span class="line">        print(num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们通过整除和求模运算分别找出了一个三位数的个位、十位和百位，这种小技巧在实际开发中还是常用的。用类似的方法，我们还可以实现将一个正整数反转，例如：将12345变成54321，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">正整数的反转</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">num = int(input(&#39;num = &#39;))</span>
<span class="line">reversed_num = 0</span>
<span class="line">while num &gt; 0:</span>
<span class="line">    reversed_num = reversed_num * 10 + num % 10</span>
<span class="line">    num //= 10</span>
<span class="line">print(reversed_num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>百钱百鸡</strong>问题。</p><blockquote><p><strong>说明</strong>：百钱百鸡是我国古代数学家<a href="https://baike.baidu.com/item/%E5%BC%A0%E4%B8%98%E5%BB%BA/10246238" target="_blank" rel="noopener noreferrer">张丘建</a>在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？翻译成现代文是：公鸡5元一只，母鸡3元一只，小鸡1元三只，用100块钱买一百只鸡，问公鸡、母鸡、小鸡各有多少只？</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">《百钱百鸡》问题</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">for x in range(0, 20):</span>
<span class="line">    for y in range(0, 33):</span>
<span class="line">        z = 100 - x - y</span>
<span class="line">        if 5 * x + 3 * y + z / 3 == 100:</span>
<span class="line">            print(&#39;公鸡: %d只, 母鸡: %d只, 小鸡: %d只&#39; % (x, y, z))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面使用的方法叫做<strong>穷举法</strong>，也称为<strong>暴力搜索法</strong>，这种方法通过一项一项的列举备选解决方案中所有可能的候选项并检查每个候选项是否符合问题的描述，最终得到问题的解。这种方法看起来比较笨拙，但对于运算能力非常强大的计算机来说，通常都是一个可行的甚至是不错的选择，而且问题的解如果存在，这种方法一定能够找到它。</p></li><li><p><strong>CRAPS赌博游戏</strong>。</p><blockquote><p><strong>说明</strong>：CRAPS又称花旗骰，是美国拉斯维加斯非常受欢迎的一种的桌上赌博游戏。该游戏使用两粒骰子，玩家通过摇两粒骰子获得点数进行游戏。简单的规则是：玩家第一次摇骰子如果摇出了7点或11点，玩家胜；玩家第一次如果摇出2点、3点或12点，庄家胜；其他点数玩家继续摇骰子，如果玩家摇出了7点，庄家胜；如果玩家摇出了第一次摇的点数，玩家胜；其他点数，玩家继续要骰子，直到分出胜负。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">Craps赌博游戏</span>
<span class="line">我们设定玩家开始游戏时有1000元的赌注</span>
<span class="line">游戏结束的条件是玩家输光所有的赌注</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from random import randint</span>
<span class="line"></span>
<span class="line">money = 1000</span>
<span class="line">while money &gt; 0:</span>
<span class="line">    print(&#39;你的总资产为:&#39;, money)</span>
<span class="line">    needs_go_on = False</span>
<span class="line">    while True:</span>
<span class="line">        debt = int(input(&#39;请下注: &#39;))</span>
<span class="line">        if 0 &lt; debt &lt;= money:</span>
<span class="line">            break</span>
<span class="line">    first = randint(1, 6) + randint(1, 6)</span>
<span class="line">    print(&#39;玩家摇出了%d点&#39; % first)</span>
<span class="line">    if first == 7 or first == 11:</span>
<span class="line">        print(&#39;玩家胜!&#39;)</span>
<span class="line">        money += debt</span>
<span class="line">    elif first == 2 or first == 3 or first == 12:</span>
<span class="line">        print(&#39;庄家胜!&#39;)</span>
<span class="line">        money -= debt</span>
<span class="line">    else:</span>
<span class="line">        needs_go_on = True</span>
<span class="line">    while needs_go_on:</span>
<span class="line">        needs_go_on = False</span>
<span class="line">        current = randint(1, 6) + randint(1, 6)</span>
<span class="line">        print(&#39;玩家摇出了%d点&#39; % current)</span>
<span class="line">        if current == 7:</span>
<span class="line">            print(&#39;庄家胜&#39;)</span>
<span class="line">            money -= debt</span>
<span class="line">        elif current == first:</span>
<span class="line">            print(&#39;玩家胜&#39;)</span>
<span class="line">            money += debt</span>
<span class="line">        else:</span>
<span class="line">            needs_go_on = True</span>
<span class="line">print(&#39;你破产了, 游戏结束!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>###有用的练习</p><ol><li><p>生成<strong>斐波那契数列</strong>的前20个数。</p><blockquote><p><strong>说明</strong>：斐波那契数列（Fibonacci sequence），又称黄金分割数列，是意大利数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）在《计算之书》中提出一个在理想假设条件下兔子成长率的问题而引入的数列，所以这个数列也被戏称为&quot;兔子数列&quot;。斐波那契数列的特点是数列的前两个数都是1，从第三个数开始，每个数都是它前面两个数的和，形如：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...。斐波那契数列在现代物理、准晶体结构、化学等领域都有直接的应用。</p></blockquote></li><li><p>找出10000以内的<strong>完美数</strong>。</p><blockquote><p><strong>说明</strong>：完美数又称为完全数或完备数，它的所有的真因子（即除了自身以外的因子）的和（即因子函数）恰好等于它本身。例如：6（$6=1+2+3$）和28（$28=1+2+4+7+14$）就是完美数。完美数有很多神奇的特性，有兴趣的可以自行了解。</p></blockquote></li><li><p>输出<strong>100以内所有的素数</strong>。</p><blockquote><p><strong>说明</strong>：素数指的是只能被1和自身整除的正整数（不包括1）。</p></blockquote></li></ol><p>上面练习的参考答案在本章对应的代码目录中，如果需要帮助请读者自行查看参考答案。</p>`,8),d=[l];function r(p,c){return i(),s("div",null,d)}const o=n(a,[["render",r],["__file","05.构造程序逻辑.html.vue"]]),v=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/05.%E6%9E%84%E9%80%A0%E7%A8%8B%E5%BA%8F%E9%80%BB%E8%BE%91.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"构造程序逻辑","slug":"构造程序逻辑","link":"#构造程序逻辑","children":[{"level":3,"title":"经典的例子","slug":"经典的例子","link":"#经典的例子","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/05.构造程序逻辑.md"}');export{o as comp,v as data};
