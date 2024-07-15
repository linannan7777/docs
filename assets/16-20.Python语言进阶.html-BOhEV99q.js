import{_ as n,c as s,o as e,d as i}from"./app-BFPhRmaa.js";const a="/docs/assets/algorithm_complexity_1-Dy7J5vKt.png",l="/docs/assets/algorithm_complexity_2-B9SoWDh5.png",d={},c=i(`<h2 id="python语言进阶" tabindex="-1"><a class="header-anchor" href="#python语言进阶"><span>Python语言进阶</span></a></h2><h3 id="重要知识点" tabindex="-1"><a class="header-anchor" href="#重要知识点"><span>重要知识点</span></a></h3><ul><li><p>生成式（推导式）的用法</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">prices = {</span>
<span class="line">    &#39;AAPL&#39;: 191.88,</span>
<span class="line">    &#39;GOOG&#39;: 1186.96,</span>
<span class="line">    &#39;IBM&#39;: 149.24,</span>
<span class="line">    &#39;ORCL&#39;: 48.44,</span>
<span class="line">    &#39;ACN&#39;: 166.89,</span>
<span class="line">    &#39;FB&#39;: 208.09,</span>
<span class="line">    &#39;SYMC&#39;: 21.29</span>
<span class="line">}</span>
<span class="line"># 用股票价格大于100元的股票构造一个新的字典</span>
<span class="line">prices2 = {key: value for key, value in prices.items() if value &gt; 100}</span>
<span class="line">print(prices2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：生成式（推导式）可以用来生成列表、集合和字典。</p></blockquote></li><li><p>嵌套的列表的坑</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">names = [&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;]</span>
<span class="line">courses = [&#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;]</span>
<span class="line"># 录入五个学生三门课程的成绩</span>
<span class="line"># 错误 - 参考http://pythontutor.com/visualize.html#mode=edit</span>
<span class="line"># scores = [[None] * len(courses)] * len(names)</span>
<span class="line">scores = [[None] * len(courses) for _ in range(len(names))]</span>
<span class="line">for row, name in enumerate(names):</span>
<span class="line">    for col, course in enumerate(courses):</span>
<span class="line">        scores[row][col] = float(input(f&#39;请输入{name}的{course}成绩: &#39;))</span>
<span class="line">        print(scores)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://pythontutor.com/" target="_blank" rel="noopener noreferrer">Python Tutor</a> - VISUALIZE CODE AND GET LIVE HELP</p></li><li><p><code>heapq</code>模块（堆排序）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">从列表中找出最大的或最小的N个元素</span>
<span class="line">堆结构(大根堆/小根堆)</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import heapq</span>
<span class="line"></span>
<span class="line">list1 = [34, 25, 12, 99, 87, 63, 58, 78, 88, 92]</span>
<span class="line">list2 = [</span>
<span class="line">    {&#39;name&#39;: &#39;IBM&#39;, &#39;shares&#39;: 100, &#39;price&#39;: 91.1},</span>
<span class="line">    {&#39;name&#39;: &#39;AAPL&#39;, &#39;shares&#39;: 50, &#39;price&#39;: 543.22},</span>
<span class="line">    {&#39;name&#39;: &#39;FB&#39;, &#39;shares&#39;: 200, &#39;price&#39;: 21.09},</span>
<span class="line">    {&#39;name&#39;: &#39;HPQ&#39;, &#39;shares&#39;: 35, &#39;price&#39;: 31.75},</span>
<span class="line">    {&#39;name&#39;: &#39;YHOO&#39;, &#39;shares&#39;: 45, &#39;price&#39;: 16.35},</span>
<span class="line">    {&#39;name&#39;: &#39;ACME&#39;, &#39;shares&#39;: 75, &#39;price&#39;: 115.65}</span>
<span class="line">]</span>
<span class="line">print(heapq.nlargest(3, list1))</span>
<span class="line">print(heapq.nsmallest(3, list1))</span>
<span class="line">print(heapq.nlargest(2, list2, key=lambda x: x[&#39;price&#39;]))</span>
<span class="line">print(heapq.nlargest(2, list2, key=lambda x: x[&#39;shares&#39;]))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>itertools</code>模块</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">迭代工具模块</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import itertools</span>
<span class="line"></span>
<span class="line"># 产生ABCD的全排列</span>
<span class="line">itertools.permutations(&#39;ABCD&#39;)</span>
<span class="line"># 产生ABCDE的五选三组合</span>
<span class="line">itertools.combinations(&#39;ABCDE&#39;, 3)</span>
<span class="line"># 产生ABCD和123的笛卡尔积</span>
<span class="line">itertools.product(&#39;ABCD&#39;, &#39;123&#39;)</span>
<span class="line"># 产生ABC的无限循环序列</span>
<span class="line">itertools.cycle((&#39;A&#39;, &#39;B&#39;, &#39;C&#39;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>collections</code>模块</p><p>常用的工具类：</p><ul><li><code>namedtuple</code>：命令元组，它是一个类工厂，接受类型的名称和属性列表来创建一个类。</li><li><code>deque</code>：双端队列，是列表的替代实现。Python中的列表底层是基于数组来实现的，而deque底层是双向链表，因此当你需要在头尾添加和删除元素时，deque会表现出更好的性能，渐近时间复杂度为$O(1)$。</li><li><code>Counter</code>：<code>dict</code>的子类，键是元素，值是元素的计数，它的<code>most_common()</code>方法可以帮助我们获取出现频率最高的元素。<code>Counter</code>和<code>dict</code>的继承关系我认为是值得商榷的，按照CARP原则，<code>Counter</code>跟<code>dict</code>的关系应该设计为关联关系更为合理。</li><li><code>OrderedDict</code>：<code>dict</code>的子类，它记录了键值对插入的顺序，看起来既有字典的行为，也有链表的行为。</li><li><code>defaultdict</code>：类似于字典类型，但是可以通过默认的工厂函数来获得键对应的默认值，相比字典中的<code>setdefault()</code>方法，这种做法更加高效。</li></ul><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">找出序列中出现次数最多的元素</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from collections import Counter</span>
<span class="line"></span>
<span class="line">words = [</span>
<span class="line">    &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;, &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;,</span>
<span class="line">    &#39;the&#39;, &#39;eyes&#39;, &#39;the&#39;, &#39;eyes&#39;, &#39;the&#39;, &#39;eyes&#39;, &#39;not&#39;, &#39;around&#39;,</span>
<span class="line">    &#39;the&#39;, &#39;eyes&#39;, &quot;don&#39;t&quot;, &#39;look&#39;, &#39;around&#39;, &#39;the&#39;, &#39;eyes&#39;,</span>
<span class="line">    &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;, &quot;you&#39;re&quot;, &#39;under&#39;</span>
<span class="line">]</span>
<span class="line">counter = Counter(words)</span>
<span class="line">print(counter.most_common(3))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="数据结构和算法" tabindex="-1"><a class="header-anchor" href="#数据结构和算法"><span>数据结构和算法</span></a></h3><ul><li><p>算法：解决问题的方法和步骤</p></li><li><p>评价算法的好坏：渐近时间复杂度和渐近空间复杂度。</p></li><li><p>渐近时间复杂度的大O标记：</p><ul><li><img src="http://latex.codecogs.com/gif.latex?O(c)"> - 常量时间复杂度 - 布隆过滤器 / 哈希存储</li><li><img src="http://latex.codecogs.com/gif.latex?O(log_2n)"> - 对数时间复杂度 - 折半查找（二分查找）</li><li><img src="http://latex.codecogs.com/gif.latex?O(n)"> - 线性时间复杂度 - 顺序查找 / 计数排序</li><li><img src="http://latex.codecogs.com/gif.latex?O(n*log_2n)"> - 对数线性时间复杂度 - 高级排序算法（归并排序、快速排序）</li><li><img src="http://latex.codecogs.com/gif.latex?O(n^2)"> - 平方时间复杂度 - 简单排序算法（选择排序、插入排序、冒泡排序）</li><li><img src="http://latex.codecogs.com/gif.latex?O(n^3)"> - 立方时间复杂度 - Floyd算法 / 矩阵乘法运算</li><li><img src="http://latex.codecogs.com/gif.latex?O(2^n)"> - 几何级数时间复杂度 - 汉诺塔</li><li><img src="http://latex.codecogs.com/gif.latex?O(n!)"> - 阶乘时间复杂度 - 旅行经销商问题 - NPC</li></ul><p><img src="`+a+'" alt=""></p><p><img src="'+l+`" alt=""></p></li><li><p>排序算法（选择、冒泡和归并）和查找算法（顺序和折半）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def select_sort(items, comp=lambda x, y: x &lt; y):</span>
<span class="line">    &quot;&quot;&quot;简单选择排序&quot;&quot;&quot;</span>
<span class="line">    items = items[:]</span>
<span class="line">    for i in range(len(items) - 1):</span>
<span class="line">        min_index = i</span>
<span class="line">        for j in range(i + 1, len(items)):</span>
<span class="line">            if comp(items[j], items[min_index]):</span>
<span class="line">                min_index = j</span>
<span class="line">        items[i], items[min_index] = items[min_index], items[i]</span>
<span class="line">    return items</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def bubble_sort(items, comp=lambda x, y: x &gt; y):</span>
<span class="line">    &quot;&quot;&quot;冒泡排序&quot;&quot;&quot;</span>
<span class="line">    items = items[:]</span>
<span class="line">    for i in range(len(items) - 1):</span>
<span class="line">        swapped = False</span>
<span class="line">        for j in range(len(items) - 1 - i):</span>
<span class="line">            if comp(items[j], items[j + 1]):</span>
<span class="line">                items[j], items[j + 1] = items[j + 1], items[j]</span>
<span class="line">                swapped = True</span>
<span class="line">        if not swapped:</span>
<span class="line">            break</span>
<span class="line">    return items</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def bubble_sort(items, comp=lambda x, y: x &gt; y):</span>
<span class="line">    &quot;&quot;&quot;搅拌排序(冒泡排序升级版)&quot;&quot;&quot;</span>
<span class="line">    items = items[:]</span>
<span class="line">    for i in range(len(items) - 1):</span>
<span class="line">        swapped = False</span>
<span class="line">        for j in range(len(items) - 1 - i):</span>
<span class="line">            if comp(items[j], items[j + 1]):</span>
<span class="line">                items[j], items[j + 1] = items[j + 1], items[j]</span>
<span class="line">                swapped = True</span>
<span class="line">        if swapped:</span>
<span class="line">            swapped = False</span>
<span class="line">            for j in range(len(items) - 2 - i, i, -1):</span>
<span class="line">                if comp(items[j - 1], items[j]):</span>
<span class="line">                    items[j], items[j - 1] = items[j - 1], items[j]</span>
<span class="line">                    swapped = True</span>
<span class="line">        if not swapped:</span>
<span class="line">            break</span>
<span class="line">    return items</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def merge(items1, items2, comp=lambda x, y: x &lt; y):</span>
<span class="line">    &quot;&quot;&quot;合并(将两个有序的列表合并成一个有序的列表)&quot;&quot;&quot;</span>
<span class="line">    items = []</span>
<span class="line">    index1, index2 = 0, 0</span>
<span class="line">    while index1 &lt; len(items1) and index2 &lt; len(items2):</span>
<span class="line">        if comp(items1[index1], items2[index2]):</span>
<span class="line">            items.append(items1[index1])</span>
<span class="line">            index1 += 1</span>
<span class="line">        else:</span>
<span class="line">            items.append(items2[index2])</span>
<span class="line">            index2 += 1</span>
<span class="line">    items += items1[index1:]</span>
<span class="line">    items += items2[index2:]</span>
<span class="line">    return items</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def merge_sort(items, comp=lambda x, y: x &lt; y):</span>
<span class="line">    return _merge_sort(list(items), comp)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def _merge_sort(items, comp):</span>
<span class="line">    &quot;&quot;&quot;归并排序&quot;&quot;&quot;</span>
<span class="line">    if len(items) &lt; 2:</span>
<span class="line">        return items</span>
<span class="line">    mid = len(items) // 2</span>
<span class="line">    left = _merge_sort(items[:mid], comp)</span>
<span class="line">    right = _merge_sort(items[mid:], comp)</span>
<span class="line">    return merge(left, right, comp)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def seq_search(items, key):</span>
<span class="line">    &quot;&quot;&quot;顺序查找&quot;&quot;&quot;</span>
<span class="line">    for index, item in enumerate(items):</span>
<span class="line">        if item == key:</span>
<span class="line">            return index</span>
<span class="line">    return -1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def bin_search(items, key):</span>
<span class="line">    &quot;&quot;&quot;折半查找&quot;&quot;&quot;</span>
<span class="line">    start, end = 0, len(items) - 1</span>
<span class="line">    while start &lt;= end:</span>
<span class="line">        mid = (start + end) // 2</span>
<span class="line">        if key &gt; items[mid]:</span>
<span class="line">            start = mid + 1</span>
<span class="line">        elif key &lt; items[mid]:</span>
<span class="line">            end = mid - 1</span>
<span class="line">        else:</span>
<span class="line">            return mid</span>
<span class="line">    return -1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>常用算法：</p><ul><li>穷举法 - 又称为暴力破解法，对所有的可能性进行验证，直到找到正确答案。</li><li>贪婪法 - 在对问题求解时，总是做出在当前看来</li><li>最好的选择，不追求最优解，快速找到满意解。</li><li>分治法 - 把一个复杂的问题分成两个或更多的相同或相似的子问题，再把子问题分成更小的子问题，直到可以直接求解的程度，最后将子问题的解进行合并得到原问题的解。</li><li>回溯法 - 回溯法又称为试探法，按选优条件向前搜索，当搜索到某一步发现原先选择并不优或达不到目标时，就退回一步重新选择。</li><li>动态规划 - 基本思想也是将待求解问题分解成若干个子问题，先求解并保存这些子问题的解，避免产生大量的重复运算。</li></ul><p>穷举法例子：百钱百鸡和五人分鱼。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 公鸡5元一只 母鸡3元一只 小鸡1元三只</span>
<span class="line"># 用100元买100只鸡 问公鸡/母鸡/小鸡各多少只</span>
<span class="line">for x in range(20):</span>
<span class="line">    for y in range(33):</span>
<span class="line">        z = 100 - x - y</span>
<span class="line">        if 5 * x + 3 * y + z // 3 == 100 and z % 3 == 0:</span>
<span class="line">            print(x, y, z)</span>
<span class="line"></span>
<span class="line"># A、B、C、D、E五人在某天夜里合伙捕鱼 最后疲惫不堪各自睡觉</span>
<span class="line"># 第二天A第一个醒来 他将鱼分为5份 扔掉多余的1条 拿走自己的一份</span>
<span class="line"># B第二个醒来 也将鱼分为5份 扔掉多余的1条 拿走自己的一份</span>
<span class="line"># 然后C、D、E依次醒来也按同样的方式分鱼 问他们至少捕了多少条鱼</span>
<span class="line">fish = 6</span>
<span class="line">while True:</span>
<span class="line">    total = fish</span>
<span class="line">    enough = True</span>
<span class="line">    for _ in range(5):</span>
<span class="line">        if (total - 1) % 5 == 0:</span>
<span class="line">            total = (total - 1) // 5 * 4</span>
<span class="line">        else:</span>
<span class="line">            enough = False</span>
<span class="line">            break</span>
<span class="line">    if enough:</span>
<span class="line">        print(fish)</span>
<span class="line">        break</span>
<span class="line">    fish += 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>贪婪法例子：假设小偷有一个背包，最多能装20公斤赃物，他闯入一户人家，发现如下表所示的物品。很显然，他不能把所有物品都装进背包，所以必须确定拿走哪些物品，留下哪些物品。</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">价格（美元）</th><th style="text-align:center;">重量（kg）</th></tr></thead><tbody><tr><td style="text-align:center;">电脑</td><td style="text-align:center;">200</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">收音机</td><td style="text-align:center;">20</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:center;">钟</td><td style="text-align:center;">175</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">花瓶</td><td style="text-align:center;">50</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">书</td><td style="text-align:center;">10</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">油画</td><td style="text-align:center;">90</td><td style="text-align:center;">9</td></tr></tbody></table><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">贪婪法：在对问题求解时，总是做出在当前看来是最好的选择，不追求最优解，快速找到满意解。</span>
<span class="line">输入：</span>
<span class="line">20 6</span>
<span class="line">电脑 200 20</span>
<span class="line">收音机 20 4</span>
<span class="line">钟 175 10</span>
<span class="line">花瓶 50 2</span>
<span class="line">书 10 1</span>
<span class="line">油画 90 9</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">class Thing(object):</span>
<span class="line">    &quot;&quot;&quot;物品&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, price, weight):</span>
<span class="line">        self.name = name</span>
<span class="line">        self.price = price</span>
<span class="line">        self.weight = weight</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def value(self):</span>
<span class="line">        &quot;&quot;&quot;价格重量比&quot;&quot;&quot;</span>
<span class="line">        return self.price / self.weight</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def input_thing():</span>
<span class="line">    &quot;&quot;&quot;输入物品信息&quot;&quot;&quot;</span>
<span class="line">    name_str, price_str, weight_str = input().split()</span>
<span class="line">    return name_str, int(price_str), int(weight_str)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    max_weight, num_of_things = map(int, input().split())</span>
<span class="line">    all_things = []</span>
<span class="line">    for _ in range(num_of_things):</span>
<span class="line">        all_things.append(Thing(*input_thing()))</span>
<span class="line">    all_things.sort(key=lambda x: x.value, reverse=True)</span>
<span class="line">    total_weight = 0</span>
<span class="line">    total_price = 0</span>
<span class="line">    for thing in all_things:</span>
<span class="line">        if total_weight + thing.weight &lt;= max_weight:</span>
<span class="line">            print(f&#39;小偷拿走了{thing.name}&#39;)</span>
<span class="line">            total_weight += thing.weight</span>
<span class="line">            total_price += thing.price</span>
<span class="line">    print(f&#39;总价值: {total_price}美元&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分治法例子：<a href="https://zh.wikipedia.org/zh/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">快速排序</a>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">快速排序 - 选择枢轴对元素进行划分，左边都比枢轴小右边都比枢轴大</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">def quick_sort(items, comp=lambda x, y: x &lt;= y):</span>
<span class="line">    items = list(items)[:]</span>
<span class="line">    _quick_sort(items, 0, len(items) - 1, comp)</span>
<span class="line">    return items</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def _quick_sort(items, start, end, comp):</span>
<span class="line">    if start &lt; end:</span>
<span class="line">        pos = _partition(items, start, end, comp)</span>
<span class="line">        _quick_sort(items, start, pos - 1, comp)</span>
<span class="line">        _quick_sort(items, pos + 1, end, comp)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def _partition(items, start, end, comp):</span>
<span class="line">    pivot = items[end]</span>
<span class="line">    i = start - 1</span>
<span class="line">    for j in range(start, end):</span>
<span class="line">        if comp(items[j], pivot):</span>
<span class="line">            i += 1</span>
<span class="line">            items[i], items[j] = items[j], items[i]</span>
<span class="line">    items[i + 1], items[end] = items[end], items[i + 1]</span>
<span class="line">    return i + 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯法例子：<a href="https://zh.wikipedia.org/zh/%E9%AA%91%E5%A3%AB%E5%B7%A1%E9%80%BB" target="_blank" rel="noopener noreferrer">骑士巡逻</a>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">递归回溯法：叫称为试探法，按选优条件向前搜索，当搜索到某一步，发现原先选择并不优或达不到目标时，就退回一步重新选择，比较经典的问题包括骑士巡逻、八皇后和迷宫寻路等。</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import sys</span>
<span class="line">import time</span>
<span class="line"></span>
<span class="line">SIZE = 5</span>
<span class="line">total = 0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def print_board(board):</span>
<span class="line">    for row in board:</span>
<span class="line">        for col in row:</span>
<span class="line">            print(str(col).center(4), end=&#39;&#39;)</span>
<span class="line">        print()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def patrol(board, row, col, step=1):</span>
<span class="line">    if row &gt;= 0 and row &lt; SIZE and \\</span>
<span class="line">        col &gt;= 0 and col &lt; SIZE and \\</span>
<span class="line">        board[row][col] == 0:</span>
<span class="line">        board[row][col] = step</span>
<span class="line">        if step == SIZE * SIZE:</span>
<span class="line">            global total</span>
<span class="line">            total += 1</span>
<span class="line">            print(f&#39;第{total}种走法: &#39;)</span>
<span class="line">            print_board(board)</span>
<span class="line">        patrol(board, row - 2, col - 1, step + 1)</span>
<span class="line">        patrol(board, row - 1, col - 2, step + 1)</span>
<span class="line">        patrol(board, row + 1, col - 2, step + 1)</span>
<span class="line">        patrol(board, row + 2, col - 1, step + 1)</span>
<span class="line">        patrol(board, row + 2, col + 1, step + 1)</span>
<span class="line">        patrol(board, row + 1, col + 2, step + 1)</span>
<span class="line">        patrol(board, row - 1, col + 2, step + 1)</span>
<span class="line">        patrol(board, row - 2, col + 1, step + 1)</span>
<span class="line">        board[row][col] = 0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    board = [[0] * SIZE for _ in range(SIZE)]</span>
<span class="line">    patrol(board, SIZE - 1, SIZE - 1)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态规划例子：子列表元素之和的最大值。</p><blockquote><p>说明：子列表指的是列表中索引（下标）连续的元素构成的列表；列表中的元素是int类型，可能包含正整数、0、负整数；程序输入列表中的元素，输出子列表元素求和的最大值，例如：</p><p>输入：1 -2 3 5 -3 2</p><p>输出：8</p><p>输入：0 -2 3 5 -1 2</p><p>输出：9</p><p>输入：-9 -2 -3 -5 -3</p><p>输出：-2</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    items = list(map(int, input().split()))</span>
<span class="line">    overall = partial = items[0]</span>
<span class="line">    for i in range(1, len(items)):</span>
<span class="line">        partial = max(items[i], partial + items[i])</span>
<span class="line">        overall = max(partial, overall)</span>
<span class="line">    print(overall)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：这个题目最容易想到的解法是使用二重循环，但是代码的时间性能将会变得非常的糟糕。使用动态规划的思想，仅仅是多用了两个变量，就将原来$O(N^2)$复杂度的问题变成了$O(N)$。</p></blockquote></li></ul><h3 id="函数的使用方式" tabindex="-1"><a class="header-anchor" href="#函数的使用方式"><span>函数的使用方式</span></a></h3><ul><li><p>将函数视为“一等公民”</p><ul><li>函数可以赋值给变量</li><li>函数可以作为函数的参数</li><li>函数可以作为函数的返回值</li></ul></li><li><p>高阶函数的用法（<code>filter</code>、<code>map</code>以及它们的替代品）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">items1 = list(map(lambda x: x ** 2, filter(lambda x: x % 2, range(1, 10))))</span>
<span class="line">items2 = [x ** 2 for x in range(1, 10) if x % 2]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>位置参数、可变参数、关键字参数、命名关键字参数</p></li><li><p>参数的元信息（代码可读性问题）</p></li><li><p>匿名函数和内联函数的用法（<code>lambda</code>函数）</p></li><li><p>闭包和作用域问题</p><ul><li><p>Python搜索变量的LEGB顺序（Local &gt;&gt;&gt; Embedded &gt;&gt;&gt; Global &gt;&gt;&gt; Built-in）</p></li><li><p><code>global</code>和<code>nonlocal</code>关键字的作用</p><p><code>global</code>：声明或定义全局变量（要么直接使用现有的全局作用域的变量，要么定义一个变量放到全局作用域）。</p><p><code>nonlocal</code>：声明使用嵌套作用域的变量（嵌套作用域必须存在该变量，否则报错）。</p></li></ul></li><li><p>装饰器函数（使用装饰器和取消装饰器）</p><p>例子：输出函数执行时间的装饰器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def record_time(func):</span>
<span class="line">    &quot;&quot;&quot;自定义装饰函数的装饰器&quot;&quot;&quot;</span>
<span class="line">    </span>
<span class="line">    @wraps(func)</span>
<span class="line">    def wrapper(*args, **kwargs):</span>
<span class="line">        start = time()</span>
<span class="line">        result = func(*args, **kwargs)</span>
<span class="line">        print(f&#39;{func.__name__}: {time() - start}秒&#39;)</span>
<span class="line">        return result</span>
<span class="line">        </span>
<span class="line">    return wrapper</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果装饰器不希望跟<code>print</code>函数耦合，可以编写可以参数化的装饰器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import wraps</span>
<span class="line">from time import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def record(output):</span>
<span class="line">    &quot;&quot;&quot;可以参数化的装饰器&quot;&quot;&quot;</span>
<span class="line">	</span>
<span class="line">	def decorate(func):</span>
<span class="line">		</span>
<span class="line">		@wraps(func)</span>
<span class="line">		def wrapper(*args, **kwargs):</span>
<span class="line">			start = time()</span>
<span class="line">			result = func(*args, **kwargs)</span>
<span class="line">			output(func.__name__, time() - start)</span>
<span class="line">			return result</span>
<span class="line">            </span>
<span class="line">		return wrapper</span>
<span class="line">	</span>
<span class="line">	return decorate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import wraps</span>
<span class="line">from time import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Record():</span>
<span class="line">    &quot;&quot;&quot;通过定义类的方式定义装饰器&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, output):</span>
<span class="line">        self.output = output</span>
<span class="line"></span>
<span class="line">    def __call__(self, func):</span>
<span class="line"></span>
<span class="line">        @wraps(func)</span>
<span class="line">        def wrapper(*args, **kwargs):</span>
<span class="line">            start = time()</span>
<span class="line">            result = func(*args, **kwargs)</span>
<span class="line">            self.output(func.__name__, time() - start)</span>
<span class="line">            return result</span>
<span class="line"></span>
<span class="line">        return wrapper</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：由于对带装饰功能的函数添加了@wraps装饰器，可以通过<code>func.__wrapped__</code>方式获得被装饰之前的函数或类来取消装饰器的作用。</p></blockquote><p>例子：用装饰器来实现单例模式。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import wraps</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def singleton(cls):</span>
<span class="line">    &quot;&quot;&quot;装饰类的装饰器&quot;&quot;&quot;</span>
<span class="line">    instances = {}</span>
<span class="line"></span>
<span class="line">    @wraps(cls)</span>
<span class="line">    def wrapper(*args, **kwargs):</span>
<span class="line">        if cls not in instances:</span>
<span class="line">            instances[cls] = cls(*args, **kwargs)</span>
<span class="line">        return instances[cls]</span>
<span class="line"></span>
<span class="line">    return wrapper</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@singleton</span>
<span class="line">class President:</span>
<span class="line">    &quot;&quot;&quot;总统(单例类)&quot;&quot;&quot;</span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面的代码中用到了闭包（closure），不知道你是否已经意识到了。还没有一个小问题就是，上面的代码并没有实现线程安全的单例，如果要实现线程安全的单例应该怎么做呢？</p></blockquote><p>线程安全的单例装饰器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import wraps</span>
<span class="line">from threading import RLock</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def singleton(cls):</span>
<span class="line">    &quot;&quot;&quot;线程安全的单例装饰器&quot;&quot;&quot;</span>
<span class="line">    instances = {}</span>
<span class="line">    locker = RLock()</span>
<span class="line"></span>
<span class="line">    @wraps(cls)</span>
<span class="line">    def wrapper(*args, **kwargs):</span>
<span class="line">        if cls not in instances:</span>
<span class="line">            with locker:</span>
<span class="line">                if cls not in instances:</span>
<span class="line">                    instances[cls] = cls(*args, **kwargs)</span>
<span class="line">        return instances[cls]</span>
<span class="line"></span>
<span class="line">    return wrapper</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面的代码用到了<code>with</code>上下文语法来进行锁操作，因为锁对象本身就是上下文管理器对象（支持<code>__enter__</code>和<code>__exit__</code>魔术方法）。在<code>wrapper</code>函数中，我们先做了一次不带锁的检查，然后再做带锁的检查，这样做比直接加锁检查性能要更好，如果对象已经创建就没有必须再去加锁而是直接返回该对象就可以了。</p></blockquote></li></ul><h3 id="面向对象相关知识" tabindex="-1"><a class="header-anchor" href="#面向对象相关知识"><span>面向对象相关知识</span></a></h3><ul><li><p>三大支柱：封装、继承、多态</p><p>例子：工资结算系统。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">月薪结算系统 - 部门经理每月15000 程序员每小时200 销售员1800底薪加销售额5%提成</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from abc import ABCMeta, abstractmethod</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Employee(metaclass=ABCMeta):</span>
<span class="line">    &quot;&quot;&quot;员工(抽象类)&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name):</span>
<span class="line">        self.name = name</span>
<span class="line"></span>
<span class="line">    @abstractmethod</span>
<span class="line">    def get_salary(self):</span>
<span class="line">        &quot;&quot;&quot;结算月薪(抽象方法)&quot;&quot;&quot;</span>
<span class="line">        pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Manager(Employee):</span>
<span class="line">    &quot;&quot;&quot;部门经理&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 15000.0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Programmer(Employee):</span>
<span class="line">    &quot;&quot;&quot;程序员&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, working_hour=0):</span>
<span class="line">        self.working_hour = working_hour</span>
<span class="line">        super().__init__(name)</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 200.0 * self.working_hour</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Salesman(Employee):</span>
<span class="line">    &quot;&quot;&quot;销售员&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, sales=0.0):</span>
<span class="line">        self.sales = sales</span>
<span class="line">        super().__init__(name)</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 1800.0 + self.sales * 0.05</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class EmployeeFactory:</span>
<span class="line">    &quot;&quot;&quot;创建员工的工厂（工厂模式 - 通过工厂实现对象使用者和对象之间的解耦合）&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def create(emp_type, *args, **kwargs):</span>
<span class="line">        &quot;&quot;&quot;创建员工&quot;&quot;&quot;</span>
<span class="line">        all_emp_types = {&#39;M&#39;: Manager, &#39;P&#39;: Programmer, &#39;S&#39;: Salesman}</span>
<span class="line">        cls = all_emp_types[emp_type.upper()]</span>
<span class="line">        return cls(*args, **kwargs) if cls else None</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    emps = [</span>
<span class="line">        EmployeeFactory.create(&#39;M&#39;, &#39;曹操&#39;), </span>
<span class="line">        EmployeeFactory.create(&#39;P&#39;, &#39;荀彧&#39;, 120),</span>
<span class="line">        EmployeeFactory.create(&#39;P&#39;, &#39;郭嘉&#39;, 85), </span>
<span class="line">        EmployeeFactory.create(&#39;S&#39;, &#39;典韦&#39;, 123000),</span>
<span class="line">    ]</span>
<span class="line">    for emp in emps:</span>
<span class="line">        print(f&#39;{emp.name}: {emp.get_salary():.2f}元&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类与类之间的关系</p><ul><li>is-a关系：继承</li><li>has-a关系：关联 / 聚合 / 合成</li><li>use-a关系：依赖</li></ul><p>例子：扑克游戏。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">经验：符号常量总是优于字面常量，枚举类型是定义符号常量的最佳选择</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from enum import Enum, unique</span>
<span class="line"></span>
<span class="line">import random</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@unique</span>
<span class="line">class Suite(Enum):</span>
<span class="line">    &quot;&quot;&quot;花色&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    SPADE, HEART, CLUB, DIAMOND = range(4)</span>
<span class="line"></span>
<span class="line">    def __lt__(self, other):</span>
<span class="line">        return self.value &lt; other.value</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Card:</span>
<span class="line">    &quot;&quot;&quot;牌&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, suite, face):</span>
<span class="line">        &quot;&quot;&quot;初始化方法&quot;&quot;&quot;</span>
<span class="line">        self.suite = suite</span>
<span class="line">        self.face = face</span>
<span class="line"></span>
<span class="line">    def show(self):</span>
<span class="line">        &quot;&quot;&quot;显示牌面&quot;&quot;&quot;</span>
<span class="line">        suites = [&#39;♠︎&#39;, &#39;♥︎&#39;, &#39;♣︎&#39;, &#39;♦︎&#39;]</span>
<span class="line">        faces = [&#39;&#39;, &#39;A&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;, &#39;10&#39;, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;]</span>
<span class="line">        return f&#39;{suites[self.suite.value]}{faces[self.face]}&#39;</span>
<span class="line"></span>
<span class="line">    def __repr__(self):</span>
<span class="line">        return self.show()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Poker:</span>
<span class="line">    &quot;&quot;&quot;扑克&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self.index = 0</span>
<span class="line">        self.cards = [Card(suite, face)</span>
<span class="line">                      for suite in Suite</span>
<span class="line">                      for face in range(1, 14)]</span>
<span class="line"></span>
<span class="line">    def shuffle(self):</span>
<span class="line">        &quot;&quot;&quot;洗牌（随机乱序）&quot;&quot;&quot;</span>
<span class="line">        random.shuffle(self.cards)</span>
<span class="line">        self.index = 0</span>
<span class="line"></span>
<span class="line">    def deal(self):</span>
<span class="line">        &quot;&quot;&quot;发牌&quot;&quot;&quot;</span>
<span class="line">        card = self.cards[self.index]</span>
<span class="line">        self.index += 1</span>
<span class="line">        return card</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def has_more(self):</span>
<span class="line">        return self.index &lt; len(self.cards)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Player:</span>
<span class="line">    &quot;&quot;&quot;玩家&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name):</span>
<span class="line">        self.name = name</span>
<span class="line">        self.cards = []</span>
<span class="line"></span>
<span class="line">    def get_one(self, card):</span>
<span class="line">        &quot;&quot;&quot;摸一张牌&quot;&quot;&quot;</span>
<span class="line">        self.cards.append(card)</span>
<span class="line"></span>
<span class="line">    def sort(self, comp=lambda card: (card.suite, card.face)):</span>
<span class="line">        &quot;&quot;&quot;整理手上的牌&quot;&quot;&quot;</span>
<span class="line">        self.cards.sort(key=comp)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    poker = Poker()</span>
<span class="line">    poker.shuffle()</span>
<span class="line">    players = [Player(&#39;东邪&#39;), Player(&#39;西毒&#39;), Player(&#39;南帝&#39;), Player(&#39;北丐&#39;)]</span>
<span class="line">    while poker.has_more:</span>
<span class="line">        for player in players:</span>
<span class="line">                player.get_one(poker.deal())</span>
<span class="line">    for player in players:</span>
<span class="line">        player.sort()</span>
<span class="line">        print(player.name, end=&#39;: &#39;)</span>
<span class="line">        print(player.cards)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中使用了Emoji字符来表示扑克牌的四种花色，在某些不支持Emoji字符的系统上可能无法显示。</p></blockquote></li><li><p>对象的复制（深复制/深拷贝/深度克隆和浅复制/浅拷贝/影子克隆）</p></li><li><p>垃圾回收、循环引用和弱引用</p><p>Python使用了自动化内存管理，这种管理机制以<strong>引用计数</strong>为基础，同时也引入了<strong>标记-清除</strong>和<strong>分代收集</strong>两种机制为辅的策略。</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre class="language-C"><code><span class="line">typedef struct _object {</span>
<span class="line">    /* 引用计数 */</span>
<span class="line">    int ob_refcnt;</span>
<span class="line">    /* 对象指针 */</span>
<span class="line">    struct _typeobject *ob_type;</span>
<span class="line">} PyObject;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre class="language-C"><code><span class="line">/* 增加引用计数的宏定义 */</span>
<span class="line">#define Py_INCREF(op)   ((op)-&gt;ob_refcnt++)</span>
<span class="line">/* 减少引用计数的宏定义 */</span>
<span class="line">#define Py_DECREF(op) \\ //减少计数</span>
<span class="line">    if (--(op)-&gt;ob_refcnt != 0) \\</span>
<span class="line">        ; \\</span>
<span class="line">    else \\</span>
<span class="line">        __Py_Dealloc((PyObject *)(op))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导致引用计数+1的情况：</p><ul><li>对象被创建，例如<code>a = 23</code></li><li>对象被引用，例如<code>b = a</code></li><li>对象被作为参数，传入到一个函数中，例如<code>f(a)</code></li><li>对象作为一个元素，存储在容器中，例如<code>list1 = [a, a]</code></li></ul><p>导致引用计数-1的情况：</p><ul><li>对象的别名被显式销毁，例如<code>del a</code></li><li>对象的别名被赋予新的对象，例如<code>a = 24</code></li><li>一个对象离开它的作用域，例如f函数执行完毕时，f函数中的局部变量（全局变量不会）</li><li>对象所在的容器被销毁，或从容器中删除对象</li></ul><p>引用计数可能会导致循环引用问题，而循环引用会导致内存泄露，如下面的代码所示。为了解决这个问题，Python中引入了“标记-清除”和“分代收集”。在创建一个对象的时候，对象被放在第一代中，如果在第一代的垃圾检查中对象存活了下来，该对象就会被放到第二代中，同理在第二代的垃圾检查中对象存活下来，该对象就会被放到第三代中。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 循环引用会导致内存泄露 - Python除了引用技术还引入了标记清理和分代回收</span>
<span class="line"># 在Python 3.6以前如果重写__del__魔术方法会导致循环引用处理失效</span>
<span class="line"># 如果不想造成循环引用可以使用弱引用</span>
<span class="line">list1 = []</span>
<span class="line">list2 = [] </span>
<span class="line">list1.append(list2)</span>
<span class="line">list2.append(list1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下情况会导致垃圾回收：</p><ul><li>调用<code>gc.collect()</code></li><li><code>gc</code>模块的计数器达到阀值</li><li>程序退出</li></ul><p>如果循环引用中两个对象都定义了<code>__del__</code>方法，<code>gc</code>模块不会销毁这些不可达对象，因为gc模块不知道应该先调用哪个对象的<code>__del__</code>方法，这个问题在Python 3.6中得到了解决。</p><p>也可以通过<code>weakref</code>模块构造弱引用的方式来解决循环引用的问题。</p></li><li><p>魔法属性和方法（请参考《Python魔法方法指南》）</p><p>有几个小问题请大家思考：</p><ul><li>自定义的对象能不能使用运算符做运算？</li><li>自定义的对象能不能放到<code>set</code>中？能去重吗？</li><li>自定义的对象能不能作为<code>dict</code>的键？</li><li>自定义的对象能不能使用上下文语法？</li></ul></li><li><p>混入（Mixin）</p><p>例子：自定义字典限制只有在指定的key不存在时才能在字典中设置键值对。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class SetOnceMappingMixin:</span>
<span class="line">    &quot;&quot;&quot;自定义混入类&quot;&quot;&quot;</span>
<span class="line">    __slots__ = ()</span>
<span class="line"></span>
<span class="line">    def __setitem__(self, key, value):</span>
<span class="line">        if key in self:</span>
<span class="line">            raise KeyError(str(key) + &#39; already set&#39;)</span>
<span class="line">        return super().__setitem__(key, value)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SetOnceDict(SetOnceMappingMixin, dict):</span>
<span class="line">    &quot;&quot;&quot;自定义字典&quot;&quot;&quot;</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">my_dict= SetOnceDict()</span>
<span class="line">try:</span>
<span class="line">    my_dict[&#39;username&#39;] = &#39;jackfrued&#39;</span>
<span class="line">    my_dict[&#39;username&#39;] = &#39;hellokitty&#39;</span>
<span class="line">except KeyError:</span>
<span class="line">    pass</span>
<span class="line">print(my_dict)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>元编程和元类</p><p>对象是通过类创建的，类是通过元类创建的，元类提供了创建类的元信息。所有的类都直接或间接的继承自<code>object</code>，所有的元类都直接或间接的继承自<code>type</code>。</p><p>例子：用元类实现单例模式。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import threading</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SingletonMeta(type):</span>
<span class="line">    &quot;&quot;&quot;自定义元类&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(cls, *args, **kwargs):</span>
<span class="line">        cls.__instance = None</span>
<span class="line">        cls.__lock = threading.RLock()</span>
<span class="line">        super().__init__(*args, **kwargs)</span>
<span class="line"></span>
<span class="line">    def __call__(cls, *args, **kwargs):</span>
<span class="line">        if cls.__instance is None:</span>
<span class="line">            with cls.__lock:</span>
<span class="line">                if cls.__instance is None:</span>
<span class="line">                    cls.__instance = super().__call__(*args, **kwargs)</span>
<span class="line">        return cls.__instance</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class President(metaclass=SingletonMeta):</span>
<span class="line">    &quot;&quot;&quot;总统(单例类)&quot;&quot;&quot;</span>
<span class="line">    </span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>面向对象设计原则</p><ul><li>单一职责原则 （<strong>S</strong>RP）- 一个类只做该做的事情（类的设计要高内聚）</li><li>开闭原则 （<strong>O</strong>CP）- 软件实体应该对扩展开发对修改关闭</li><li>依赖倒转原则（DIP）- 面向抽象编程（在弱类型语言中已经被弱化）</li><li>里氏替换原则（<strong>L</strong>SP） - 任何时候可以用子类对象替换掉父类对象</li><li>接口隔离原则（<strong>I</strong>SP）- 接口要小而专不要大而全（Python中没有接口的概念）</li><li>合成聚合复用原则（CARP） - 优先使用强关联关系而不是继承关系复用代码</li><li>最少知识原则（迪米特法则，Lo<strong>D</strong>）- 不要给没有必然联系的对象发消息</li></ul><blockquote><p><strong>说明</strong>：上面加粗的字母放在一起称为面向对象的<strong>SOLID</strong>原则。</p></blockquote></li><li><p>GoF设计模式</p><ul><li>创建型模式：单例、工厂、建造者、原型</li><li>结构型模式：适配器、门面（外观）、代理</li><li>行为型模式：迭代器、观察者、状态、策略</li></ul><p>例子：可插拔的哈希算法（策略模式）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class StreamHasher():</span>
<span class="line">    &quot;&quot;&quot;哈希摘要生成器&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, alg=&#39;md5&#39;, size=4096):</span>
<span class="line">        self.size = size</span>
<span class="line">        alg = alg.lower()</span>
<span class="line">        self.hasher = getattr(__import__(&#39;hashlib&#39;), alg.lower())()</span>
<span class="line"></span>
<span class="line">    def __call__(self, stream):</span>
<span class="line">        return self.to_digest(stream)</span>
<span class="line"></span>
<span class="line">    def to_digest(self, stream):</span>
<span class="line">        &quot;&quot;&quot;生成十六进制形式的摘要&quot;&quot;&quot;</span>
<span class="line">        for buf in iter(lambda: stream.read(self.size), b&#39;&#39;):</span>
<span class="line">            self.hasher.update(buf)</span>
<span class="line">        return self.hasher.hexdigest()</span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    hasher1 = StreamHasher()</span>
<span class="line">    with open(&#39;Python-3.7.6.tgz&#39;, &#39;rb&#39;) as stream:</span>
<span class="line">        print(hasher1.to_digest(stream))</span>
<span class="line">    hasher2 = StreamHasher(&#39;sha1&#39;)</span>
<span class="line">    with open(&#39;Python-3.7.6.tgz&#39;, &#39;rb&#39;) as stream:</span>
<span class="line">        print(hasher2(stream))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="迭代器和生成器" tabindex="-1"><a class="header-anchor" href="#迭代器和生成器"><span>迭代器和生成器</span></a></h3><ul><li><p>迭代器是实现了迭代器协议的对象。</p><ul><li>Python中没有像<code>protocol</code>或<code>interface</code>这样的定义协议的关键字。</li><li>Python中用魔术方法表示协议。</li><li><code>__iter__</code>和<code>__next__</code>魔术方法就是迭代器协议。</li></ul><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Fib(object):</span>
<span class="line">    &quot;&quot;&quot;迭代器&quot;&quot;&quot;</span>
<span class="line">    </span>
<span class="line">    def __init__(self, num):</span>
<span class="line">        self.num = num</span>
<span class="line">        self.a, self.b = 0, 1</span>
<span class="line">        self.idx = 0</span>
<span class="line">   </span>
<span class="line">    def __iter__(self):</span>
<span class="line">        return self</span>
<span class="line"></span>
<span class="line">    def __next__(self):</span>
<span class="line">        if self.idx &lt; self.num:</span>
<span class="line">            self.a, self.b = self.b, self.a + self.b</span>
<span class="line">            self.idx += 1</span>
<span class="line">            return self.a</span>
<span class="line">        raise StopIteration()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成器是语法简化版的迭代器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def fib(num):</span>
<span class="line">    &quot;&quot;&quot;生成器&quot;&quot;&quot;</span>
<span class="line">    a, b = 0, 1</span>
<span class="line">    for _ in range(num):</span>
<span class="line">        a, b = b, a + b</span>
<span class="line">        yield a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成器进化为协程。</p><p>生成器对象可以使用<code>send()</code>方法发送数据，发送的数据会成为生成器函数中通过<code>yield</code>表达式获得的值。这样，生成器就可以作为协程使用，协程简单的说就是可以相互协作的子程序。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def calc_avg():</span>
<span class="line">    &quot;&quot;&quot;流式计算平均值&quot;&quot;&quot;</span>
<span class="line">    total, counter = 0, 0</span>
<span class="line">    avg_value = None</span>
<span class="line">    while True:</span>
<span class="line">        value = yield avg_value</span>
<span class="line">        total, counter = total + value, counter + 1</span>
<span class="line">        avg_value = total / counter</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">gen = calc_avg()</span>
<span class="line">next(gen)</span>
<span class="line">print(gen.send(10))</span>
<span class="line">print(gen.send(20))</span>
<span class="line">print(gen.send(30))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程"><span>并发编程</span></a></h3><p>Python中实现并发编程的三种方案：多线程、多进程和异步I/O。并发编程的好处在于可以提升程序的执行效率以及改善用户体验；坏处在于并发的程序不容易开发和调试，同时对其他程序来说它并不友好。</p><ul><li><p>多线程：Python中提供了<code>Thread</code>类并辅以<code>Lock</code>、<code>Condition</code>、<code>Event</code>、<code>Semaphore</code>和<code>Barrier</code>。Python中有GIL来防止多个线程同时执行本地字节码，这个锁对于CPython是必须的，因为CPython的内存管理并不是线程安全的，因为GIL的存在多线程并不能发挥CPU的多核特性。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">面试题：进程和线程的区别和联系？</span>
<span class="line">进程 - 操作系统分配内存的基本单位 - 一个进程可以包含一个或多个线程</span>
<span class="line">线程 - 操作系统分配CPU的基本单位</span>
<span class="line">并发编程（concurrent programming）</span>
<span class="line">1. 提升执行性能 - 让程序中没有因果关系的部分可以并发的执行</span>
<span class="line">2. 改善用户体验 - 让耗时间的操作不会造成程序的假死</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import glob</span>
<span class="line">import os</span>
<span class="line">import threading</span>
<span class="line"></span>
<span class="line">from PIL import Image</span>
<span class="line"></span>
<span class="line">PREFIX = &#39;thumbnails&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def generate_thumbnail(infile, size, format=&#39;PNG&#39;):</span>
<span class="line">    &quot;&quot;&quot;生成指定图片文件的缩略图&quot;&quot;&quot;</span>
<span class="line">	file, ext = os.path.splitext(infile)</span>
<span class="line">	file = file[file.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">	outfile = f&#39;{PREFIX}/{file}_{size[0]}_{size[1]}.{ext}&#39;</span>
<span class="line">	img = Image.open(infile)</span>
<span class="line">	img.thumbnail(size, Image.ANTIALIAS)</span>
<span class="line">	img.save(outfile, format)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">	if not os.path.exists(PREFIX):</span>
<span class="line">		os.mkdir(PREFIX)</span>
<span class="line">	for infile in glob.glob(&#39;images/*.png&#39;):</span>
<span class="line">		for size in (32, 64, 128):</span>
<span class="line">            # 创建并启动线程</span>
<span class="line">			threading.Thread(</span>
<span class="line">				target=generate_thumbnail, </span>
<span class="line">				args=(infile, (size, size))</span>
<span class="line">			).start()</span>
<span class="line">			</span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">	main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个线程竞争资源的情况。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">多线程程序如果没有竞争资源处理起来通常也比较简单</span>
<span class="line">当多个线程竞争临界资源的时候如果缺乏必要的保护措施就会导致数据错乱</span>
<span class="line">说明：临界资源就是被多个线程竞争的资源</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import time</span>
<span class="line">import threading</span>
<span class="line"></span>
<span class="line">from concurrent.futures import ThreadPoolExecutor</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Account(object):</span>
<span class="line">    &quot;&quot;&quot;银行账户&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self.balance = 0.0</span>
<span class="line">        self.lock = threading.Lock()</span>
<span class="line"></span>
<span class="line">    def deposit(self, money):</span>
<span class="line">        # 通过锁保护临界资源</span>
<span class="line">        with self.lock:</span>
<span class="line">            new_balance = self.balance + money</span>
<span class="line">            time.sleep(0.001)</span>
<span class="line">            self.balance = new_balance</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    account = Account()</span>
<span class="line">    # 创建线程池</span>
<span class="line">    pool = ThreadPoolExecutor(max_workers=10)</span>
<span class="line">    futures = []</span>
<span class="line">    for _ in range(100):</span>
<span class="line">        future = pool.submit(account.deposit, 1)</span>
<span class="line">        futures.append(future)</span>
<span class="line">    # 关闭线程池</span>
<span class="line">    pool.shutdown()</span>
<span class="line">    for future in futures:</span>
<span class="line">        future.result()</span>
<span class="line">    print(account.balance)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改上面的程序，启动5个线程向账户中存钱，5个线程从账户中取钱，取钱时如果余额不足就暂停线程进行等待。为了达到上述目标，需要对存钱和取钱的线程进行调度，在余额不足时取钱的线程暂停并释放锁，而存钱的线程将钱存入后要通知取钱的线程，使其从暂停状态被唤醒。可以使用<code>threading</code>模块的<code>Condition</code>来实现线程调度，该对象也是基于锁来创建的，代码如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">多个线程竞争一个资源 - 保护临界资源 - 锁（Lock/RLock）</span>
<span class="line">多个线程竞争多个资源（线程数&gt;资源数） - 信号量（Semaphore）</span>
<span class="line">多个线程的调度 - 暂停线程执行/唤醒等待中的线程 - Condition</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from concurrent.futures import ThreadPoolExecutor</span>
<span class="line">from random import randint</span>
<span class="line">from time import sleep</span>
<span class="line"></span>
<span class="line">import threading</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Account:</span>
<span class="line">    &quot;&quot;&quot;银行账户&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, balance=0):</span>
<span class="line">        self.balance = balance</span>
<span class="line">        lock = threading.RLock()</span>
<span class="line">        self.condition = threading.Condition(lock)</span>
<span class="line"></span>
<span class="line">    def withdraw(self, money):</span>
<span class="line">        &quot;&quot;&quot;取钱&quot;&quot;&quot;</span>
<span class="line">        with self.condition:</span>
<span class="line">            while money &gt; self.balance:</span>
<span class="line">                self.condition.wait()</span>
<span class="line">            new_balance = self.balance - money</span>
<span class="line">            sleep(0.001)</span>
<span class="line">            self.balance = new_balance</span>
<span class="line"></span>
<span class="line">    def deposit(self, money):</span>
<span class="line">        &quot;&quot;&quot;存钱&quot;&quot;&quot;</span>
<span class="line">        with self.condition:</span>
<span class="line">            new_balance = self.balance + money</span>
<span class="line">            sleep(0.001)</span>
<span class="line">            self.balance = new_balance</span>
<span class="line">            self.condition.notify_all()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def add_money(account):</span>
<span class="line">    while True:</span>
<span class="line">        money = randint(5, 10)</span>
<span class="line">        account.deposit(money)</span>
<span class="line">        print(threading.current_thread().name, </span>
<span class="line">              &#39;:&#39;, money, &#39;====&gt;&#39;, account.balance)</span>
<span class="line">        sleep(0.5)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def sub_money(account):</span>
<span class="line">    while True:</span>
<span class="line">        money = randint(10, 30)</span>
<span class="line">        account.withdraw(money)</span>
<span class="line">        print(threading.current_thread().name, </span>
<span class="line">              &#39;:&#39;, money, &#39;&lt;====&#39;, account.balance)</span>
<span class="line">        sleep(1)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    account = Account()</span>
<span class="line">    with ThreadPoolExecutor(max_workers=15) as pool:</span>
<span class="line">        for _ in range(5):</span>
<span class="line">            pool.submit(add_money, account)</span>
<span class="line">        for _ in range(10):</span>
<span class="line">            pool.submit(sub_money, account)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多进程：多进程可以有效的解决GIL的问题，实现多进程主要的类是<code>Process</code>，其他辅助的类跟<code>threading</code>模块中的类似，进程间共享数据可以使用管道、套接字等，在<code>multiprocessing</code>模块中有一个<code>Queue</code>类，它基于管道和锁机制提供了多个进程共享的队列。下面是官方文档上关于多进程和进程池的一个示例。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">多进程和进程池的使用</span>
<span class="line">多线程因为GIL的存在不能够发挥CPU的多核特性</span>
<span class="line">对于计算密集型任务应该考虑使用多进程</span>
<span class="line">time python3 example22.py</span>
<span class="line">real    0m11.512s</span>
<span class="line">user    0m39.319s</span>
<span class="line">sys     0m0.169s</span>
<span class="line">使用多进程后实际执行时间为11.512秒，而用户时间39.319秒约为实际执行时间的4倍</span>
<span class="line">这就证明我们的程序通过多进程使用了CPU的多核特性，而且这台计算机配置了4核的CPU</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import concurrent.futures</span>
<span class="line">import math</span>
<span class="line"></span>
<span class="line">PRIMES = [</span>
<span class="line">    1116281,</span>
<span class="line">    1297337,</span>
<span class="line">    104395303,</span>
<span class="line">    472882027,</span>
<span class="line">    533000389,</span>
<span class="line">    817504243,</span>
<span class="line">    982451653,</span>
<span class="line">    112272535095293,</span>
<span class="line">    112582705942171,</span>
<span class="line">    112272535095293,</span>
<span class="line">    115280095190773,</span>
<span class="line">    115797848077099,</span>
<span class="line">    1099726899285419</span>
<span class="line">] * 5</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def is_prime(n):</span>
<span class="line">    &quot;&quot;&quot;判断素数&quot;&quot;&quot;</span>
<span class="line">    if n % 2 == 0:</span>
<span class="line">        return False</span>
<span class="line"></span>
<span class="line">    sqrt_n = int(math.floor(math.sqrt(n)))</span>
<span class="line">    for i in range(3, sqrt_n + 1, 2):</span>
<span class="line">        if n % i == 0:</span>
<span class="line">            return False</span>
<span class="line">    return True</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    with concurrent.futures.ProcessPoolExecutor() as executor:</span>
<span class="line">        for number, prime in zip(PRIMES, executor.map(is_prime, PRIMES)):</span>
<span class="line">            print(&#39;%d is prime: %s&#39; % (number, prime))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>重点</strong>：<strong>多线程和多进程的比较</strong>。</p><p>以下情况需要使用多线程：</p><ol><li>程序需要维护许多共享的状态（尤其是可变状态），Python中的列表、字典、集合都是线程安全的，所以使用线程而不是进程维护共享状态的代价相对较小。</li><li>程序会花费大量时间在I/O操作上，没有太多并行计算的需求且不需占用太多的内存。</li></ol><p>以下情况需要使用多进程：</p><ol><li>程序执行计算密集型任务（如：字节码操作、数据处理、科学计算）。</li><li>程序的输入可以并行的分成块，并且可以将运算结果合并。</li><li>程序在内存使用方面没有任何限制且不强依赖于I/O操作（如：读写文件、套接字等）。</li></ol></blockquote></li><li><p>异步处理：从调度程序的任务队列中挑选任务，该调度程序以交叉的形式执行这些任务，我们并不能保证任务将以某种顺序去执行，因为执行顺序取决于队列中的一项任务是否愿意将CPU处理时间让位给另一项任务。异步任务通常通过多任务协作处理的方式来实现，由于执行时间和顺序的不确定，因此需要通过回调式编程或者<code>future</code>对象来获取任务执行的结果。Python 3通过<code>asyncio</code>模块和<code>await</code>和<code>async</code>关键字（在Python 3.7中正式被列为关键字）来支持异步处理。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">异步I/O - async / await</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import asyncio</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def num_generator(m, n):</span>
<span class="line">    &quot;&quot;&quot;指定范围的数字生成器&quot;&quot;&quot;</span>
<span class="line">    yield from range(m, n + 1)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def prime_filter(m, n):</span>
<span class="line">    &quot;&quot;&quot;素数过滤器&quot;&quot;&quot;</span>
<span class="line">    primes = []</span>
<span class="line">    for i in num_generator(m, n):</span>
<span class="line">        flag = True</span>
<span class="line">        for j in range(2, int(i ** 0.5 + 1)):</span>
<span class="line">            if i % j == 0:</span>
<span class="line">                flag = False</span>
<span class="line">                break</span>
<span class="line">        if flag:</span>
<span class="line">            print(&#39;Prime =&gt;&#39;, i)</span>
<span class="line">            primes.append(i)</span>
<span class="line"></span>
<span class="line">        await asyncio.sleep(0.001)</span>
<span class="line">    return tuple(primes)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def square_mapper(m, n):</span>
<span class="line">    &quot;&quot;&quot;平方映射器&quot;&quot;&quot;</span>
<span class="line">    squares = []</span>
<span class="line">    for i in num_generator(m, n):</span>
<span class="line">        print(&#39;Square =&gt;&#39;, i * i)</span>
<span class="line">        squares.append(i * i)</span>
<span class="line"></span>
<span class="line">        await asyncio.sleep(0.001)</span>
<span class="line">    return squares</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    loop = asyncio.get_event_loop()</span>
<span class="line">    future = asyncio.gather(prime_filter(2, 100), square_mapper(1, 100))</span>
<span class="line">    future.add_done_callback(lambda x: print(x.result()))</span>
<span class="line">    loop.run_until_complete(future)</span>
<span class="line">    loop.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码使用<code>get_event_loop</code>函数获得系统默认的事件循环，通过<code>gather</code>函数可以获得一个<code>future</code>对象，<code>future</code>对象的<code>add_done_callback</code>可以添加执行完成时的回调函数，<code>loop</code>对象的<code>run_until_complete</code>方法可以等待通过<code>future</code>对象获得协程执行结果。</p></blockquote><p>Python中有一个名为<code>aiohttp</code>的三方库，它提供了异步的HTTP客户端和服务器，这个三方库可以跟<code>asyncio</code>模块一起工作，并提供了对<code>Future</code>对象的支持。Python 3.6中引入了<code>async</code>和<code>await</code>来定义异步执行的函数以及创建异步上下文，在Python 3.7中它们正式成为了关键字。下面的代码异步的从5个URL中获取页面并通过正则表达式的命名捕获组提取了网站的标题。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import asyncio</span>
<span class="line">import re</span>
<span class="line"></span>
<span class="line">import aiohttp</span>
<span class="line"></span>
<span class="line">PATTERN = re.compile(r&#39;\\&lt;title\\&gt;(?P&lt;title&gt;.*)\\&lt;\\/title\\&gt;&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def fetch_page(session, url):</span>
<span class="line">    async with session.get(url, ssl=False) as resp:</span>
<span class="line">        return await resp.text()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def show_title(url):</span>
<span class="line">    async with aiohttp.ClientSession() as session:</span>
<span class="line">        html = await fetch_page(session, url)</span>
<span class="line">        print(PATTERN.search(html).group(&#39;title&#39;))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    urls = (&#39;https://www.python.org/&#39;,</span>
<span class="line">            &#39;https://git-scm.com/&#39;,</span>
<span class="line">            &#39;https://www.jd.com/&#39;,</span>
<span class="line">            &#39;https://www.taobao.com/&#39;,</span>
<span class="line">            &#39;https://www.douban.com/&#39;)</span>
<span class="line">    loop = asyncio.get_event_loop()</span>
<span class="line">    cos = [show_title(url) for url in urls]</span>
<span class="line">    loop.run_until_complete(asyncio.wait(cos))</span>
<span class="line">    loop.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>重点</strong>：<strong>异步I/O与多进程的比较</strong>。</p><p>当程序不需要真正的并发性或并行性，而是更多的依赖于异步处理和回调时，<code>asyncio</code>就是一种很好的选择。如果程序中有大量的等待与休眠时，也应该考虑<code>asyncio</code>，它很适合编写没有实时数据处理需求的Web应用服务器。</p></blockquote><p>Python还有很多用于处理并行任务的三方库，例如：<code>joblib</code>、<code>PyMP</code>等。实际开发中，要提升系统的可扩展性和并发性通常有垂直扩展（增加单个节点的处理能力）和水平扩展（将单个节点变成多个节点）两种做法。可以通过消息队列来实现应用程序的解耦合，消息队列相当于是多线程同步队列的扩展版本，不同机器上的应用程序相当于就是线程，而共享的分布式消息队列就是原来程序中的Queue。消息队列（面向消息的中间件）的最流行和最标准化的实现是AMQP（高级消息队列协议），AMQP源于金融行业，提供了排队、路由、可靠传输、安全等功能，最著名的实现包括：Apache的ActiveMQ、RabbitMQ等。</p><p>要实现任务的异步化，可以使用名为<code>Celery</code>的三方库。<code>Celery</code>是Python编写的分布式任务队列，它使用分布式消息进行工作，可以基于RabbitMQ或Redis来作为后端的消息代理。</p></li></ul>`,14),p=[c];function r(t,v){return e(),s("div",null,p)}const o=n(d,[["render",r],["__file","16-20.Python语言进阶.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/Day16-20/16-20.Python%E8%AF%AD%E8%A8%80%E8%BF%9B%E9%98%B6.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"Python语言进阶","slug":"python语言进阶","link":"#python语言进阶","children":[{"level":3,"title":"重要知识点","slug":"重要知识点","link":"#重要知识点","children":[]},{"level":3,"title":"数据结构和算法","slug":"数据结构和算法","link":"#数据结构和算法","children":[]},{"level":3,"title":"函数的使用方式","slug":"函数的使用方式","link":"#函数的使用方式","children":[]},{"level":3,"title":"面向对象相关知识","slug":"面向对象相关知识","link":"#面向对象相关知识","children":[]},{"level":3,"title":"迭代器和生成器","slug":"迭代器和生成器","link":"#迭代器和生成器","children":[]},{"level":3,"title":"并发编程","slug":"并发编程","link":"#并发编程","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day16-20/16-20.Python语言进阶.md"}');export{o as comp,m as data};
