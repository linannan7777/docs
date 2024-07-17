import{_ as n,c as s,o as a,d as e}from"./app-CxrMoykp.js";const i={},l=e(`<h2 id="用函数还是用复杂的表达式" tabindex="-1"><a class="header-anchor" href="#用函数还是用复杂的表达式"><span>用函数还是用复杂的表达式</span></a></h2><p>Perl语言的原作者<em>Larry Wall</em>曾经说过，伟大的程序员都有三个优点：懒惰、暴躁和自负。乍一看这三个词语没有一个是褒义词，但在程序员的世界里，这三个词有不同的意义。首先，懒惰会促使程序员去写一些省事儿的程序来辅助自己或别人更好的完成工作，这样我们就无需做那些重复和繁琐的劳动；同理能够用3行代码解决的事情，我们也绝不会写出10行代码来。其次，暴躁会让程序员主动的去完成一些你还没有提出的工作，去优化自己的代码让它更有效率，能够3秒钟完成的任务，我们绝不能容忍1分钟的等待。最后，自负会促使程序员写出可靠无误的代码，我们写代码不是为了接受批评和指责，而是为了让其他人来膜拜。</p><p>那么接下来就有一个很有意思的问题值得探讨一下，我们需要一个程序从输入的三个数中找出最大的那个数。这个程序对任何会编程的人来说都是小菜一碟，甚至不会编程的人经过10分钟的学习也能搞定。下面是用来解决这个问题的Python代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">if a &gt; b:</span>
<span class="line">	the_max = a</span>
<span class="line">else:</span>
<span class="line">	the_max = b</span>
<span class="line">if c &gt; the_max:</span>
<span class="line">	the_max = c</span>
<span class="line">print(&#39;The max is:&#39;, the_max)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们刚才说了，程序员都是懒惰的，很多程序员都会使用三元条件运算符来改写上面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">the_max = a if a &gt; b else b</span>
<span class="line">the_max = c if c &gt; the_max else the_max</span>
<span class="line">print(&#39;The max is:&#39;, the_max)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，Python在2.5版本以前是没有上面代码第4行和第5行中使用的三元条件运算符的，究其原因是Guido van Rossum（Python之父）认为三元条件运算符并不能帮助 Python变得更加简洁，于是那些习惯了在C/C++或Java中使用三元条件运算符（在这些语言中，三元条件运算符也称为“Elvis运算符”，因为<code>?:</code>放在一起很像著名摇滚歌手猫王Elvis的大背头）的程序员试着用<code>and</code>和<code>or</code>运算符的短路特性来模拟出三元操作符，于是在那个年代，上面的代码是这样写的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">the_max = a &gt; b and a or b</span>
<span class="line">the_max = c &gt; the_max and c or the_max</span>
<span class="line">print(&#39;The max is:&#39;, the_max)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这种做法在某些场景下是不能成立的，且看下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = 0</span>
<span class="line">b = -100</span>
<span class="line"># 下面的代码本来预期输出a的值，结果却得到了b的值</span>
<span class="line"># 因为a的值0在进行逻辑运算时会被视为False来处理</span>
<span class="line">print(True and a or b)</span>
<span class="line"># print(a if True else b)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以在Python 2.5以后引入了三元条件运算符来避免上面的风险（上面代码被注释掉的最后一句话）。那么，问题又来了，上面的代码还可以写得更简短吗？答案是肯定的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">print(&#39;The max is:&#39;, (a if a &gt; b else b) if (a if a &gt; b else b) &gt; c else c)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样做真的好吗？如此复杂的表达式是不是让代码变得晦涩了很多呢？我们发现，在实际开发中很多开发者都喜欢过度的使用某种语言的特性或语法糖，于是简单的多行代码变成了复杂的单行表达式，这样做真的好吗？这个问题我也不止一次的问过自己，现在我能给出的答案是下面的代码，使用辅助函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def the_max(x, y):</span>
<span class="line">	return x if x &gt; y else y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">print(&#39;The max is:&#39;, the_max(the_max(a, b), c))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我定义了一个辅助函数<code>the_max</code>用来找出参数传入的两个值中较大的那一个，于是下面的输出语句可以通过两次调用<code>the_max</code>函数来找出三个数中的最大值，现在代码的可读性是不是好了很多。用辅助函数来替代复杂的表达式真的是一个不错的选择，关键是比较大小的逻辑转移到这个辅助函数后不仅可以反复调用它，而且还可以进行级联操作。</p><p>当然，很多语言中比较大小的函数根本没有必要自己来实现（通常都是内置函数），Python也是如此。Python内置的max函数利用了Python对可变参数的支持，允许一次性传入多个值或者一个迭代器并找出那个最大值，所以上面讨论的问题在Python中也就是一句话的事，但是从复杂表达式到使用辅助函数简化复杂表达式这个思想是非常值得玩味的，所以分享出来跟大家做一个交流。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = int(input(&#39;a = &#39;))</span>
<span class="line">b = int(input(&#39;b = &#39;))</span>
<span class="line">c = int(input(&#39;c = &#39;))</span>
<span class="line">print(&#39;The max is:&#39;, max(a, b, c))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[l];function d(c,p){return a(),s("div",null,t)}const m=n(i,[["render",d],["__file","用函数还是用复杂的表达式.html.vue"]]),v=JSON.parse('{"path":"/python/Python-100-Days/%E7%95%AA%E5%A4%96%E7%AF%87/%E7%94%A8%E5%87%BD%E6%95%B0%E8%BF%98%E6%98%AF%E7%94%A8%E5%A4%8D%E6%9D%82%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"用函数还是用复杂的表达式","slug":"用函数还是用复杂的表达式","link":"#用函数还是用复杂的表达式","children":[]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/番外篇/用函数还是用复杂的表达式.md"}');export{m as comp,v as data};
