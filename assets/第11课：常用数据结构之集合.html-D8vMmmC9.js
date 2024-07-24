import{_ as s,c as n,o as e,b as a}from"./app-CgltcQVY.js";const i="/docs/assets/20210819154520-Bqf2Ar6x.png",l={},d=a(`<h2 id="第11课-常用数据结构之集合" tabindex="-1"><a class="header-anchor" href="#第11课-常用数据结构之集合"><span>第11课：常用数据结构之集合</span></a></h2><p>在学习了列表和元组之后，我们再来学习一种容器型的数据类型，它的名字叫集合（set）。说到集合这个词大家一定不会陌生，在数学课本上就有这个概念。通常我们对集合的定义是“<strong>把一定范围的、确定的、可以区别的事物当作一个整体来看待</strong>”，集合中的各个事物通常称为集合的<strong>元素</strong>。集合应该满足以下特性：</p><ol><li><strong>无序性</strong>：一个集合中，每个元素的地位都是相同的，元素之间是无序的。</li><li><strong>互异性</strong>：一个集合中，任何两个元素都是不相同的，即元素在集合中只能出现一次。</li><li><strong>确定性</strong>：给定一个集合和一个任意元素，该元素要么属这个集合，要么不属于这个集合，二者必居其一，不允许有模棱两可的情况出现。</li></ol><p>Python程序中的集合跟数学上的集合是完全一致的，需要强调的是上面所说的无序性和互异性。无序性说明集合中的元素并不像列中的元素那样一个挨着一个，可以通过索引实现随机访问（随机访问指的是给定一个有效的范围，随机抽取出一个数字，然后通过这个数字可以获取到对应的元素），所以Python中的<strong>集合肯定不能够支持索引运算</strong>。另外，集合的互异性决定了<strong>集合中不能有重复元素</strong>，这一点也是集合区别于列表的关键，说得更直白一些就是，Python中的集合类型会对其中的元素做去重处理。Python中的集合一定是支持<code>in</code>和<code>not in</code>成员运算的，这样就可以确定一个元素是否属于集合，也就是上面所说的集合的确定性。<strong>集合的成员运算在性能上要优于列表的成员运算</strong>，这是集合的底层存储特性（哈希存储）决定的，此处我们暂时不做讨论，大家可以先记下这个结论。</p><h3 id="创建集合" tabindex="-1"><a class="header-anchor" href="#创建集合"><span>创建集合</span></a></h3><p>在Python中，创建集合可以使用<code>{}</code>字面量语法，<code>{}</code>中需要至少有一个元素，因为没有元素的<code>{}</code>并不是空集合而是一个空字典，我们下一节课就会大家介绍字典的知识。当然，也可以使用内置函数<code>set</code>来创建一个集合，准确的说<code>set</code>并不是一个函数，而是创建集合对象的构造器，这个知识点我们很快也会讲到，现在不理解跳过它就可以了。要创建空集合可以使用<code>set()</code>；也可以将其他序列转换成集合，例如：<code>set(&#39;hello&#39;)</code>会得到一个包含了4个字符的集合（重复的<code>l</code>会被去掉）。除了这两种方式，我们还可以使用生成式语法来创建集合，就像我们之前用生成式创建列表那样。要知道集合中有多少个元素，还是使用内置函数<code>len</code>；使用<code>for</code>循环可以实现对集合元素的遍历。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 创建集合的字面量语法(重复元素不会出现在集合中)</span>
<span class="line">set1 = {1, 2, 3, 3, 3, 2}</span>
<span class="line">print(set1)         # {1, 2, 3}</span>
<span class="line">print(len(set1))    # 3</span>
<span class="line"></span>
<span class="line"># 创建集合的构造器语法(后面会讲到什么是构造器)</span>
<span class="line">set2 = set(&#39;hello&#39;)</span>
<span class="line">print(set2)         # {&#39;h&#39;, &#39;l&#39;, &#39;o&#39;, &#39;e&#39;}</span>
<span class="line"></span>
<span class="line"># 将列表转换成集合(可以去掉列表中的重复元素)</span>
<span class="line">set3 = set([1, 2, 3, 3, 2, 1])</span>
<span class="line">print(set3)         # {1, 2, 3}</span>
<span class="line"></span>
<span class="line"># 创建集合的生成式语法(将列表生成式的[]换成{})</span>
<span class="line">set4 = {num for num in range(1, 20) if num % 3 == 0 or num % 5 == 0}</span>
<span class="line">print(set4)         # {3, 5, 6, 9, 10, 12, 15, 18}</span>
<span class="line"></span>
<span class="line"># 集合元素的循环遍历</span>
<span class="line">for elem in set4:</span>
<span class="line">    print(elem)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家，集合中的元素必须是<code>hashable</code>类型。所谓<code>hashable</code>类型指的是能够计算出哈希码的数据类型，大家可以暂时将哈希码理解为和变量对应的唯一的ID值。通常不可变类型都是<code>hashable</code>类型，如整数、浮点、字符串、元组等，而可变类型都不是<code>hashable</code>类型，因为可变类型无法确定唯一的ID值，所以也就不能放到集合中。集合本身也是可变类型，所以集合不能够作为集合中的元素，这一点在使用集合的时候一定要注意。</p><h3 id="集合的运算" tabindex="-1"><a class="header-anchor" href="#集合的运算"><span>集合的运算</span></a></h3><p>Python为集合类型提供了非常丰富的运算符，主要包括：成员运算、交集运算、并集运算、差集运算、比较运算（相等性、子集、超集）等。</p><h4 id="成员运算" tabindex="-1"><a class="header-anchor" href="#成员运算"><span>成员运算</span></a></h4><p>可以通过成员运算<code>in</code>和<code>not in </code>检查元素是否在集合中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = {11, 12, 13, 14, 15}</span>
<span class="line">print(10 in set1)        # False </span>
<span class="line">print(15 in set1)        # True</span>
<span class="line">set2 = {&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Swift&#39;}</span>
<span class="line">print(&#39;Ruby&#39; in set2)    # False</span>
<span class="line">print(&#39;Java&#39; in set2)    # True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="交并差运算" tabindex="-1"><a class="header-anchor" href="#交并差运算"><span>交并差运算</span></a></h4><p>Python中的集合跟数学上的集合一样，可以进行交集、并集、差集等运算，而且可以通过运算符和方法调用两种方式来进行操作，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = {1, 2, 3, 4, 5, 6, 7}</span>
<span class="line">set2 = {2, 4, 6, 8, 10}</span>
<span class="line"></span>
<span class="line"># 交集</span>
<span class="line"># 方法一: 使用 &amp; 运算符</span>
<span class="line">print(set1 &amp; set2)                # {2, 4, 6}</span>
<span class="line"># 方法二: 使用intersection方法</span>
<span class="line">print(set1.intersection(set2))    # {2, 4, 6}</span>
<span class="line"></span>
<span class="line"># 并集</span>
<span class="line"># 方法一: 使用 | 运算符</span>
<span class="line">print(set1 | set2)         # {1, 2, 3, 4, 5, 6, 7, 8, 10}</span>
<span class="line"># 方法二: 使用union方法</span>
<span class="line">print(set1.union(set2))    # {1, 2, 3, 4, 5, 6, 7, 8, 10}</span>
<span class="line"></span>
<span class="line"># 差集</span>
<span class="line"># 方法一: 使用 - 运算符</span>
<span class="line">print(set1 - set2)              # {1, 3, 5, 7}</span>
<span class="line"># 方法二: 使用difference方法</span>
<span class="line">print(set1.difference(set2))    # {1, 3, 5, 7}</span>
<span class="line"></span>
<span class="line"># 对称差</span>
<span class="line"># 方法一: 使用 ^ 运算符</span>
<span class="line">print(set1 ^ set2)                        # {1, 3, 5, 7, 8, 10}</span>
<span class="line"># 方法二: 使用symmetric_difference方法</span>
<span class="line">print(set1.symmetric_difference(set2))    # {1, 3, 5, 7, 8, 10}</span>
<span class="line"># 方法三: 对称差相当于两个集合的并集减去交集</span>
<span class="line">print((set1 | set2) - (set1 &amp; set2))      # {1, 3, 5, 7, 8, 10}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码可以看出，对两个集合求交集，<code>&amp;</code>运算符和<code>intersection</code>方法的作用是完全相同的，使用运算符的方式更直观而且代码也比较简短。相信大家对交集、并集、差集、对称差这几个概念是比较清楚的，如果没什么印象了可以看看下面的图。</p><img src="`+i+`" width="90%"><p>集合的交集、并集、差集运算还可以跟赋值运算一起构成复合赋值运算，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = {1, 3, 5, 7}</span>
<span class="line">set2 = {2, 4, 6}</span>
<span class="line"># 将set1和set2求并集再赋值给set1</span>
<span class="line"># 也可以通过set1.update(set2)来实现</span>
<span class="line">set1 |= set2</span>
<span class="line">print(set1)    # {1, 2, 3, 4, 5, 6, 7}</span>
<span class="line">set3 = {3, 6, 9}</span>
<span class="line"># 将set1和set3求交集再赋值给set1</span>
<span class="line"># 也可以通过set1.intersection_update(set3)来实现</span>
<span class="line">set1 &amp;= set3</span>
<span class="line">print(set1)    # {3, 6}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较运算" tabindex="-1"><a class="header-anchor" href="#比较运算"><span>比较运算</span></a></h4><p>两个集合可以用<code>==</code>和<code>!=</code>进行相等性判断，如果两个集合中的元素完全相同，那么<code>==</code>比较的结果就是<code>True</code>，否则就是<code>False</code>。如果集合<code>A</code>的任意一个元素都是集合<code>B</code>的元素，那么集合<code>A</code>称为集合<code>B</code>的子集，即对于$ \\forall{a} \\in {A}$，均有$ {a} \\in {B} $，则$ {A} \\subseteq {B} $，<code>A</code>是<code>B</code>的子集，反过来也可以称<code>B</code>是<code>A</code>的超集。如果<code>A</code>是<code>B</code>的子集且<code>A</code>不等于<code>B</code>，那么<code>A</code>就是<code>B</code>的真子集。Python为集合类型提供了判断子集和超集的运算符，其实就是我们非常熟悉的<code>&lt;</code>和<code>&gt;</code>运算符，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = {1, 3, 5}</span>
<span class="line">set2 = {1, 2, 3, 4, 5}</span>
<span class="line">set3 = set2</span>
<span class="line"># &lt;运算符表示真子集，&lt;=运算符表示子集</span>
<span class="line">print(set1 &lt; set2, set1 &lt;= set2)    # True True</span>
<span class="line">print(set2 &lt; set3, set2 &lt;= set3)    # False True</span>
<span class="line"># 通过issubset方法也能进行子集判断</span>
<span class="line">print(set1.issubset(set2))      # True</span>
<span class="line"></span>
<span class="line"># 反过来可以用issuperset或&gt;运算符进行超集判断</span>
<span class="line">print(set2.issuperset(set1))    # True</span>
<span class="line">print(set2 &gt; set1)              # True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合的方法" tabindex="-1"><a class="header-anchor" href="#集合的方法"><span>集合的方法</span></a></h3><p>Python中的集合是可变类型，我们可以通过集合类型的方法为集合添加或删除元素。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 创建一个空集合</span>
<span class="line">set1 = set()</span>
<span class="line"></span>
<span class="line"># 通过add方法添加元素</span>
<span class="line">set1.add(33)</span>
<span class="line">set1.add(55)</span>
<span class="line">set1.update({1, 10, 100, 1000})</span>
<span class="line">print(set1)    # {33, 1, 100, 55, 1000, 10}</span>
<span class="line"></span>
<span class="line"># 通过discard方法删除指定元素</span>
<span class="line">set1.discard(100)</span>
<span class="line">set1.discard(99)</span>
<span class="line">print(set1)    # {1, 10, 33, 55, 1000}</span>
<span class="line"></span>
<span class="line"># 通过remove方法删除指定元素，建议先做成员运算再删除</span>
<span class="line"># 否则元素如果不在集合中就会引发KeyError异常</span>
<span class="line">if 10 in set1:</span>
<span class="line">    set1.remove(10)</span>
<span class="line">print(set1)    # {33, 1, 55, 1000}</span>
<span class="line"></span>
<span class="line"># pop方法可以从集合中随机删除一个元素并返回该元素</span>
<span class="line">print(set1.pop())</span>
<span class="line"></span>
<span class="line"># clear方法可以清空整个集合</span>
<span class="line">set1.clear()</span>
<span class="line"></span>
<span class="line">print(set1)    # set()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要判断两个集合有没有相同的元素可以使用<code>isdisjoint</code>方法，没有相同元素返回<code>True</code>，否则返回<code>False</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = {&#39;Java&#39;, &#39;Python&#39;, &#39;Go&#39;, &#39;Kotlin&#39;}</span>
<span class="line">set2 = {&#39;Kotlin&#39;, &#39;Swift&#39;, &#39;Java&#39;, &#39;Objective-C&#39;, &#39;Dart&#39;}</span>
<span class="line">set3 = {&#39;HTML&#39;, &#39;CSS&#39;, &#39;JavaScript&#39;}</span>
<span class="line">print(set1.isdisjoint(set2))    # False</span>
<span class="line">print(set1.isdisjoint(set3))    # True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不可变集合" tabindex="-1"><a class="header-anchor" href="#不可变集合"><span>不可变集合</span></a></h3><p>Python中还有一种不可变类型的集合，名字叫<code>frozenset</code>。<code>set</code>跟<code>frozenset</code>的区别就如同<code>list</code>跟<code>tuple</code>的区别，<code>frozenset</code>由于是不可变类型，能够计算出哈希码，因此它可以作为<code>set</code>中的元素。除了不能添加和删除元素，<code>frozenset</code>在其他方面跟<code>set</code>基本是一样的，下面的代码简单的展示了<code>frozenset</code>的用法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">set1 = frozenset({1, 3, 5, 7})</span>
<span class="line">set2 = frozenset(range(1, 6))</span>
<span class="line">print(set1 &amp; set2)    # frozenset({1, 3, 5})</span>
<span class="line">print(set1 | set2)    # frozenset({1, 2, 3, 4, 5, 7})</span>
<span class="line">print(set1 - set2)    # frozenset({7})</span>
<span class="line">print(set1 &lt; set2)    # False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>Python中的集合底层使用了<strong>哈希存储</strong>的方式，对于这一点我们暂时不做介绍，在后面的课程有需要的时候再为大家讲解集合的底层原理，现阶段大家只需要知道<strong>集合是一种容器</strong>，元素必须是<code>hashable</code>类型，与列表不同的地方在于集合中的元素<strong>没有序</strong>、<strong>不能用索引运算</strong>、<strong>不能重复</strong>。</p>`,33),c=[d];function t(p,r){return e(),n("div",null,c)}const v=s(l,[["render",t],["__file","第11课：常用数据结构之集合.html.vue"]]),u=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC11%E8%AF%BE%EF%BC%9A%E5%B8%B8%E7%94%A8%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B9%8B%E9%9B%86%E5%90%88.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第11课：常用数据结构之集合","slug":"第11课-常用数据结构之集合","link":"#第11课-常用数据结构之集合","children":[{"level":3,"title":"创建集合","slug":"创建集合","link":"#创建集合","children":[]},{"level":3,"title":"集合的运算","slug":"集合的运算","link":"#集合的运算","children":[]},{"level":3,"title":"集合的方法","slug":"集合的方法","link":"#集合的方法","children":[]},{"level":3,"title":"不可变集合","slug":"不可变集合","link":"#不可变集合","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720516588000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-Core-50-Courses/第11课：常用数据结构之集合.md"}');export{v as comp,u as data};
