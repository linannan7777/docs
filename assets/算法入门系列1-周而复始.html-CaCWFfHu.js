import{_ as n,c as s,o as e,e as a}from"./app-B7BTqdne.js";const i={},l=a(`<h2 id="算法入门系列课程1-周而复始" tabindex="-1"><a class="header-anchor" href="#算法入门系列课程1-周而复始"><span>算法入门系列课程1 - 周而复始</span></a></h2><h3 id="算法概述" tabindex="-1"><a class="header-anchor" href="#算法概述"><span>算法概述</span></a></h3><ol><li><p>什么是算法？</p><p>解决问题的正确方法和具体的实施步骤。</p><p>例子1：如何在两栋相距50m的大楼的两个房间牵一条线（两个房间都有窗）？</p><ul><li>养一只鸟（如鸽子），将线送过去</li><li>用很长的杆子将线递过去</li><li>用无人机（遥控飞行器）将线送过去</li></ul><p>如何评价这些方法的好坏？<strong>少花钱，不费事</strong>！</p><p>例子2：大教室里坐了几百名学生一起听课，如何快速的统计学生人数？</p><p>例子3：向列表容器中<strong>逆向</strong>插入100000个元素。</p><ul><li><p>方法1：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">nums = []</span>
<span class="line">for i in range(100000):</span>
<span class="line">    nums.append(i)</span>
<span class="line">nums.reverse()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法2：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">nums = []</span>
<span class="line">for i in range(100000):</span>
<span class="line">    nums.insert(0, i)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>例子3：生成Fibonacci数列（前100个Fibonacci数）。</p><ul><li><p>方法1 - 递推：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a, b = 0, 1</span>
<span class="line">for num in range(1, 101):</span>
<span class="line">    a, b = b, a + b</span>
<span class="line">    print(f&#39;{num}: {a}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法2 - 递归：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def fib(num):</span>
<span class="line">    if num in (1, 2):</span>
<span class="line">        return 1</span>
<span class="line">    return fib(num - 1) + fib(num - 2)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">for num in range(1, 101):</span>
<span class="line">    print(f&#39;{num}: {fib(num)}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法3 - 改进的递归：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def fib(num, temp={}):</span>
<span class="line">    if num in (1, 2):</span>
<span class="line">        return 1</span>
<span class="line">    elif num not in temp:</span>
<span class="line">        temp[num] = fib(num - 1) + fib(num - 2)</span>
<span class="line">    return temp[num]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法4 - 改进的递归：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import lru_cache</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@lru_cache()</span>
<span class="line">def fib(num):</span>
<span class="line">    if num in (1, 2):</span>
<span class="line">        return 1</span>
<span class="line">    return fib(num - 1) + fib(num - 2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>如何评价算法的好坏？</p><p><a href="https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6" target="_blank" rel="noopener noreferrer">渐近时间复杂度</a>和渐近空间复杂度。</p></li><li><p>大<em><strong>O</strong></em>符号的意义？</p><p>表示一个函数相对于输入规模的增长速度，也可以称之为函数的数量级。</p><table><thead><tr><th>大<em>O</em>符号</th><th>说明</th><th>例子</th></tr></thead><tbody><tr><td>$$O(c)$$</td><td>常量时间复杂度</td><td>布隆过滤器 / 哈希存储</td></tr><tr><td>$$O(log_2n)$$</td><td>对数时间复杂度</td><td>二分查找（折半查找）</td></tr><tr><td>$$O(n)$$</td><td>线性时间复杂度</td><td>顺序查找 / 桶排序</td></tr><tr><td>$$O(n*log_2n)$$</td><td>对数线性时间复杂度</td><td>高级排序算法（归并排序、快速排序）</td></tr><tr><td>$$O(n^2)$$</td><td>平方时间复杂度</td><td>简单排序算法（选择排序、插入排序、冒泡排序）</td></tr><tr><td>$$O(n^3)$$</td><td>立方时间复杂度</td><td>Floyd算法 / 矩阵乘法运算</td></tr><tr><td>$$O(2^n)$$</td><td>几何级数时间复杂度</td><td>汉诺塔</td></tr><tr><td>$$O(n!)$$</td><td>阶乘时间复杂度</td><td>旅行经销商问题</td></tr></tbody></table></li></ol><h3 id="穷举法" tabindex="-1"><a class="header-anchor" href="#穷举法"><span>穷举法</span></a></h3><p>在计算机科学中，<strong>穷举法</strong>或者<strong>暴力搜索法</strong>是一个非常非常直观的解决问题的方法，这种方法通过一项一项的列举解决方案所有可能的候选项以及检查每个候选项是否符合问题的描述，最终得到问题的解。</p><p>虽然暴力搜索很容易实现，并且如果解决方案存在它就一定能够找到，但是它的代价是和候选方案的数量成比例的，由于这一点，在很多实际问题中，消耗的代价会随着问题规模的增加而快速地增长。因此，当问题规模有限或当存在可用于将候选解决方案的集合减少到可管理大小时，就可以使用暴力搜索。另外，当实现方法的简单度比速度更重要的时候，也可以考虑使用这种方法。</p><h3 id="经典例子" tabindex="-1"><a class="header-anchor" href="#经典例子"><span>经典例子</span></a></h3><ol><li><p><strong>百钱百鸡</strong>问题：公鸡5元一只，母鸡3元一只，小鸡1元三只，用100元买一百只鸡，问公鸡、母鸡、小鸡各有多少只？</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">for x in range(21):</span>
<span class="line">    for y in range(34):</span>
<span class="line">        z = 100 - x - y</span>
<span class="line">        if z % 3 == 0 and 5 * x + 3 * y + z // 3 == 100:</span>
<span class="line">            print(x, y, z)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>五人分鱼</strong>问题：ABCDE五人在某天夜里合伙捕鱼，最后疲惫不堪各自睡觉。第二天A第一个醒来，他将鱼分为5份，扔掉多余的1条，拿走了属于自己的一份；B第二个醒来，也将鱼分为5份，扔掉多余的1条，拿走属于自己的一份；然后C、D、E依次醒来，也按同样的方式分鱼，问他们至少捕了多少条鱼？</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fish = 6</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>暴力破解口令</strong>：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import re</span>
<span class="line"></span>
<span class="line">import PyPDF2</span>
<span class="line"></span>
<span class="line">with open(&#39;Python_Tricks_encrypted.pdf&#39;, &#39;rb&#39;) as pdf_file_stream:</span>
<span class="line">    reader = PyPDF2.PdfFileReader(pdf_file_stream)</span>
<span class="line">    with open(&#39;dictionary.txt&#39;, &#39;r&#39;) as txt_file_stream:</span>
<span class="line">        file_iter = iter(lambda: txt_file_stream.readline(), &#39;&#39;)</span>
<span class="line">        for word in file_iter:</span>
<span class="line">            word = re.sub(r&#39;\\s&#39;, &#39;&#39;, word)</span>
<span class="line">            if reader.decrypt(word):</span>
<span class="line">                print(word)</span>
<span class="line">                break</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,8),d=[l];function t(r,p){return e(),s("div",null,d)}const u=n(i,[["render",t],["__file","算法入门系列1-周而复始.html.vue"]]),v=JSON.parse('{"path":"/python/Python-100-Days/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%96%87%E6%A1%A3/%E7%AC%AC05%E6%AC%A1%E5%85%AC%E5%BC%80%E8%AF%BE-%E7%AE%97%E6%B3%95%E5%85%A5%E9%97%A8%E7%B3%BB%E5%88%971-%E5%91%A8%E8%80%8C%E5%A4%8D%E5%A7%8B/%E7%AE%97%E6%B3%95%E5%85%A5%E9%97%A8%E7%B3%BB%E5%88%971-%E5%91%A8%E8%80%8C%E5%A4%8D%E5%A7%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"算法入门系列课程1 - 周而复始","slug":"算法入门系列课程1-周而复始","link":"#算法入门系列课程1-周而复始","children":[{"level":3,"title":"算法概述","slug":"算法概述","link":"#算法概述","children":[]},{"level":3,"title":"穷举法","slug":"穷举法","link":"#穷举法","children":[]},{"level":3,"title":"经典例子","slug":"经典例子","link":"#经典例子","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/公开课/文档/第05次公开课-算法入门系列1-周而复始/算法入门系列1-周而复始.md"}');export{u as comp,v as data};
