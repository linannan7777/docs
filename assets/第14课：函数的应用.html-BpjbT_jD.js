import{_ as n,c as s,o as e,d as a}from"./app-BFPhRmaa.js";const i={},l=a(`<h2 id="第14课-函数的应用" tabindex="-1"><a class="header-anchor" href="#第14课-函数的应用"><span>第14课：函数的应用</span></a></h2><p>接下来我们通过一些案例来为大家讲解函数的应用。</p><h3 id="经典小案例" tabindex="-1"><a class="header-anchor" href="#经典小案例"><span>经典小案例</span></a></h3><h4 id="案例1-设计一个生成验证码的函数。" tabindex="-1"><a class="header-anchor" href="#案例1-设计一个生成验证码的函数。"><span>案例1：设计一个生成验证码的函数。</span></a></h4><blockquote><p><strong>说明</strong>：验证码由数字和英文大小写字母构成，长度可以用参数指定。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line">import string</span>
<span class="line"></span>
<span class="line">ALL_CHARS = string.digits + string.ascii_letters</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def generate_code(code_len=4):</span>
<span class="line">    &quot;&quot;&quot;生成指定长度的验证码</span>
<span class="line">    </span>
<span class="line">    :param code_len: 验证码的长度(默认4个字符)</span>
<span class="line">    :return: 由大小写英文字母和数字构成的随机验证码字符串</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    return &#39;&#39;.join(random.choices(ALL_CHARS, k=code_len))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用下面的代码生成10组随机验证码来测试上面的函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">for _ in range(10):</span>
<span class="line">    print(generate_code()) </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>random</code>模块的<code>sample</code>和<code>choices</code>函数都可以实现随机抽样，<code>sample</code>实现无放回抽样，这意味着抽样取出的字符是不重复的；<code>choices</code>实现有放回抽样，这意味着可能会重复选中某些字符。这两个函数的第一个参数代表抽样的总体，而参数<code>k</code>代表抽样的数量。</p></blockquote><h4 id="案例2-设计一个函数返回给定文件的后缀名。" tabindex="-1"><a class="header-anchor" href="#案例2-设计一个函数返回给定文件的后缀名。"><span>案例2：设计一个函数返回给定文件的后缀名。</span></a></h4><blockquote><p><strong>说明</strong>：文件名通常是一个字符串，而文件的后缀名指的是文件名中最后一个<code>.</code>后面的部分，也称为文件的扩展名，它是某些操作系统用来标记文件类型的一种机制，例如在Windows系统上，后缀名<code>exe</code>表示这是一个可执行程序，而后缀名<code>txt</code>表示这是一个纯文本文件。需要注意的是，在Linux和macOS系统上，文件名可以以<code>.</code>开头，表示这是一个隐藏文件，像<code>.gitignore</code>这样的文件名，<code>.</code>后面并不是后缀名，这个文件没有后缀名或者说后缀名为<code>&#39;&#39;</code>。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def get_suffix(filename, ignore_dot=True):</span>
<span class="line">    &quot;&quot;&quot;获取文件名的后缀名</span>
<span class="line">    </span>
<span class="line">    :param filename: 文件名</span>
<span class="line">    :param ignore_dot: 是否忽略后缀名前面的点</span>
<span class="line">    :return: 文件的后缀名</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    # 从字符串中逆向查找.出现的位置</span>
<span class="line">    pos = filename.rfind(&#39;.&#39;)</span>
<span class="line">    # 通过切片操作从文件名中取出后缀名</span>
<span class="line">    if pos &lt;= 0:</span>
<span class="line">        return &#39;&#39;</span>
<span class="line">    return filename[pos + 1:] if ignore_dot else filename[pos:]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用下面的代码对上面的函数做一个简单的测验。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(get_suffix(&#39;readme.txt&#39;))       # txt</span>
<span class="line">print(get_suffix(&#39;readme.txt.md&#39;))    # md</span>
<span class="line">print(get_suffix(&#39;.readme&#39;))          #</span>
<span class="line">print(get_suffix(&#39;readme.&#39;))          #</span>
<span class="line">print(get_suffix(&#39;readme&#39;))           #</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>get_suffix</code>函数还有一个更为便捷的实现方式，就是直接使用<code>os.path</code>模块的<code>splitext</code>函数，这个函数会将文件名拆分成带路径的文件名和扩展名两个部分，然后返回一个二元组，二元组中的第二个元素就是文件的后缀名（包含<code>.</code>），如果要去掉后缀名中的<code>.</code>，可以做一个字符串的切片操作，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from os.path import splitext</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def get_suffix(filename, ignore_dot=True):</span>
<span class="line">    return splitext(filename)[1][1:]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>思考</strong>：如果要给上面的函数增加一个参数，用来控制文件的后缀名是否包含<code>.</code>，应该怎么做？</p></blockquote><h4 id="案例3-写一个判断给定的正整数是不是质数的函数。" tabindex="-1"><a class="header-anchor" href="#案例3-写一个判断给定的正整数是不是质数的函数。"><span>案例3：写一个判断给定的正整数是不是质数的函数。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def is_prime(num: int) -&gt; bool:</span>
<span class="line">    &quot;&quot;&quot;判断一个正整数是不是质数</span>
<span class="line"></span>
<span class="line">    :param num: 正整数</span>
<span class="line">    :return: 如果是质数返回True，否则返回False</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    for i in range(2, int(num ** 0.5) + 1):</span>
<span class="line">        if num % i == 0:</span>
<span class="line">            return False</span>
<span class="line">    return num != 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例4-写出计算两个正整数最大公约数和最小公倍数的函数。" tabindex="-1"><a class="header-anchor" href="#案例4-写出计算两个正整数最大公约数和最小公倍数的函数。"><span>案例4：写出计算两个正整数最大公约数和最小公倍数的函数。</span></a></h4><p>代码一：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def gcd_and_lcm(x: int, y: int) -&gt; int:</span>
<span class="line">    &quot;&quot;&quot;求最大公约数和最小公倍数&quot;&quot;&quot;</span>
<span class="line">    a, b = x, y</span>
<span class="line">    while b % a != 0:</span>
<span class="line">        a, b = b % a, a</span>
<span class="line">    return a, x * y // a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码二：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def gcd(x: int, y: int) -&gt; int:</span>
<span class="line">    &quot;&quot;&quot;求最大公约数&quot;&quot;&quot;</span>
<span class="line">    while y % x != 0:</span>
<span class="line">        x, y = y % x, x</span>
<span class="line">    return x</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def lcm(x: int, y: int) -&gt; int:</span>
<span class="line">    &quot;&quot;&quot;求最小公倍数&quot;&quot;&quot;</span>
<span class="line">    return x * y // gcd(x, y)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>思考</strong>：请比较上面的代码一和代码二，想想哪种做法是更好的选择。</p></blockquote><h4 id="案例5-写出计算一组样本数据描述性统计信息的函数。" tabindex="-1"><a class="header-anchor" href="#案例5-写出计算一组样本数据描述性统计信息的函数。"><span>案例5：写出计算一组样本数据描述性统计信息的函数。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import math</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def ptp(data):</span>
<span class="line">    &quot;&quot;&quot;求极差（全距）&quot;&quot;&quot;</span>
<span class="line">    return max(data) - min(data)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def average(data):</span>
<span class="line">    &quot;&quot;&quot;求均值&quot;&quot;&quot;</span>
<span class="line">    return sum(data) / len(data)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def variance(data):</span>
<span class="line">    &quot;&quot;&quot;求方差&quot;&quot;&quot;</span>
<span class="line">    x_bar = average(data)</span>
<span class="line">    temp = [(num - x_bar) ** 2 for num in data]</span>
<span class="line">    return sum(temp) / (len(temp) - 1)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def standard_deviation(data):</span>
<span class="line">    &quot;&quot;&quot;求标准差&quot;&quot;&quot;</span>
<span class="line">    return math.sqrt(variance(data))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def median(data):</span>
<span class="line">    &quot;&quot;&quot;找中位数&quot;&quot;&quot;</span>
<span class="line">    temp, size = sorted(data), len(data)</span>
<span class="line">    if size % 2 != 0:</span>
<span class="line">        return temp[size // 2]</span>
<span class="line">    else:</span>
<span class="line">        return average(temp[size // 2 - 1:size // 2 + 1])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>在写代码尤其是开发商业项目的时候，一定要有意识的<strong>将相对独立且重复出现的功能封装成函数</strong>，这样不管是自己还是团队的其他成员都可以通过调用函数的方式来使用这些功能。</p>`,29),d=[l];function t(c,r){return e(),s("div",null,d)}const o=n(i,[["render",t],["__file","第14课：函数的应用.html.vue"]]),u=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC14%E8%AF%BE%EF%BC%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%BA%94%E7%94%A8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第14课：函数的应用","slug":"第14课-函数的应用","link":"#第14课-函数的应用","children":[{"level":3,"title":"经典小案例","slug":"经典小案例","link":"#经典小案例","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720435246000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-Core-50-Courses/第14课：函数的应用.md"}');export{o as comp,u as data};
