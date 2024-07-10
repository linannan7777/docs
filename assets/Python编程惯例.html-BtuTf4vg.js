import{_ as n,c as s,o as e,e as a}from"./app-B7BTqdne.js";const i={},l=a(`<h2 id="python编程惯例" tabindex="-1"><a class="header-anchor" href="#python编程惯例"><span>Python编程惯例</span></a></h2><p>“惯例”这个词指的是“习惯的做法，常规的办法，一贯的做法”，与这个词对应的英文单词叫“idiom”。由于Python跟其他很多编程语言在语法和使用上还是有比较显著的差别，因此作为一个Python开发者如果不能掌握这些惯例，就无法写出“Pythonic”的代码。下面我们总结了一些在Python开发中的惯用的代码。</p><ol><li><p>让代码既可以被导入又可以被执行。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>用下面的方式判断逻辑“真”或“假”。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">if x:</span>
<span class="line">if not x:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;jackfrued&#39;</span>
<span class="line">fruits = [&#39;apple&#39;, &#39;orange&#39;, &#39;grape&#39;]</span>
<span class="line">owners = {&#39;1001&#39;: &#39;骆昊&#39;, &#39;1002&#39;: &#39;王大锤&#39;}</span>
<span class="line">if name and fruits and owners:</span>
<span class="line">    print(&#39;I love fruits!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;jackfrued&#39;</span>
<span class="line">fruits = [&#39;apple&#39;, &#39;orange&#39;, &#39;grape&#39;]</span>
<span class="line">owners = {&#39;1001&#39;: &#39;骆昊&#39;, &#39;1002&#39;: &#39;王大锤&#39;}</span>
<span class="line">if name != &#39;&#39; and len(fruits) &gt; 0 and owners != {}:</span>
<span class="line">    print(&#39;I love fruits!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>善于使用in运算符。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">if x in items: # 包含</span>
<span class="line">for x in items: # 迭代</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;Hao LUO&#39;</span>
<span class="line">if &#39;L&#39; in name:</span>
<span class="line">    print(&#39;The name has an L in it.&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;Hao LUO&#39;</span>
<span class="line">if name.find(&#39;L&#39;) != -1:</span>
<span class="line">    print(&#39;This name has an L in it!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不使用临时变量交换两个值。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a, b = b, a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>用序列构建字符串。</p><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">chars = [&#39;j&#39;, &#39;a&#39;, &#39;c&#39;, &#39;k&#39;, &#39;f&#39;, &#39;r&#39;, &#39;u&#39;, &#39;e&#39;, &#39;d&#39;]</span>
<span class="line">name = &#39;&#39;.join(chars)</span>
<span class="line">print(name)  # jackfrued</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">chars = [&#39;j&#39;, &#39;a&#39;, &#39;c&#39;, &#39;k&#39;, &#39;f&#39;, &#39;r&#39;, &#39;u&#39;, &#39;e&#39;, &#39;d&#39;]</span>
<span class="line">name = &#39;&#39;</span>
<span class="line">for char in chars:</span>
<span class="line">    name += char</span>
<span class="line">print(name)  # jackfrued</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>EAFP优于LBYL。</p><p>EAFP - <strong>E</strong>asier to <strong>A</strong>sk <strong>F</strong>orgiveness than <strong>P</strong>ermission.</p><p>LBYL - <strong>L</strong>ook <strong>B</strong>efore <strong>Y</strong>ou <strong>L</strong>eap.</p><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">d = {&#39;x&#39;: &#39;5&#39;}</span>
<span class="line">try:</span>
<span class="line">    value = int(d[&#39;x&#39;])</span>
<span class="line">    print(value)</span>
<span class="line">except (KeyError, TypeError, ValueError):</span>
<span class="line">    value = None</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">d = {&#39;x&#39;: &#39;5&#39;}</span>
<span class="line">if &#39;x&#39; in d and isinstance(d[&#39;x&#39;], str) \\</span>
<span class="line">		and d[&#39;x&#39;].isdigit():</span>
<span class="line">    value = int(d[&#39;x&#39;])</span>
<span class="line">    print(value)</span>
<span class="line">else:</span>
<span class="line">    value = None</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用enumerate进行迭代。</p><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fruits = [&#39;orange&#39;, &#39;grape&#39;, &#39;pitaya&#39;, &#39;blueberry&#39;]</span>
<span class="line">for index, fruit in enumerate(fruits):</span>
<span class="line">	print(index, &#39;:&#39;, fruit)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fruits = [&#39;orange&#39;, &#39;grape&#39;, &#39;pitaya&#39;, &#39;blueberry&#39;]</span>
<span class="line">index = 0</span>
<span class="line">for fruit in fruits:</span>
<span class="line">    print(index, &#39;:&#39;, fruit)</span>
<span class="line">    index += 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用生成式生成列表。</p><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = [7, 20, 3, 15, 11]</span>
<span class="line">result = [num * 3 for num in data if num &gt; 10]</span>
<span class="line">print(result)  # [60, 45, 33]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = [7, 20, 3, 15, 11]</span>
<span class="line">result = []</span>
<span class="line">for i in data:</span>
<span class="line">    if i &gt; 10:</span>
<span class="line">        result.append(i * 3)</span>
<span class="line">print(result)  # [60, 45, 33]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用zip组合键和值来创建字典。</p><p><strong>好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">keys = [&#39;1001&#39;, &#39;1002&#39;, &#39;1003&#39;]</span>
<span class="line">values = [&#39;骆昊&#39;, &#39;王大锤&#39;, &#39;白元芳&#39;]</span>
<span class="line">d = dict(zip(keys, values))</span>
<span class="line">print(d)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不好</strong>的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">keys = [&#39;1001&#39;, &#39;1002&#39;, &#39;1003&#39;]</span>
<span class="line">values = [&#39;骆昊&#39;, &#39;王大锤&#39;, &#39;白元芳&#39;]</span>
<span class="line">d = {}</span>
<span class="line">for i, key in enumerate(keys):</span>
<span class="line">    d[key] = values[i]</span>
<span class="line">print(d)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p><strong>说明</strong>：这篇文章的内容来自于网络，有兴趣的读者可以阅读<a href="http://safehammad.com/downloads/python-idioms-2014-01-16.pdf" target="_blank" rel="noopener noreferrer">原文</a>。</p></blockquote>`,4),t=[l];function r(d,p){return e(),s("div",null,t)}const o=n(i,[["render",r],["__file","Python编程惯例.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/%E7%95%AA%E5%A4%96%E7%AF%87/Python%E7%BC%96%E7%A8%8B%E6%83%AF%E4%BE%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Python编程惯例","slug":"python编程惯例","link":"#python编程惯例","children":[]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/番外篇/Python编程惯例.md"}');export{o as comp,u as data};
