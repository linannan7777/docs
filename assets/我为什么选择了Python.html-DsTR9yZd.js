import{_ as n,c as s,o as a,d as l}from"./app-CzcyFXHz.js";const e={},i=l(`<h2 id="我为什么选择了python" tabindex="-1"><a class="header-anchor" href="#我为什么选择了python"><span>我为什么选择了Python</span></a></h2><p>目前，Python语言的发展势头在国内国外都是不可阻挡的，Python凭借其简单优雅的语法，强大的生态圈从众多语言中脱颖而出，如今已经是稳坐编程语言排行榜前三的位置。国内很多Python开发者都是从Java开发者跨界过来的，我自己也不例外。我简单的跟大家交代一下，我为什么选择了Python。</p><h3 id="python-vs-java" tabindex="-1"><a class="header-anchor" href="#python-vs-java"><span>Python vs. Java</span></a></h3><p>我们通过几个例子来比较一下，做同样的事情Java和Python的代码都是怎么写的。</p><p>例子1：在终端中输出“hello, world”。</p><p>Java代码：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">class Test {</span>
<span class="line">	</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        System.out.println(&quot;hello, world&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(&#39;hello, world&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例子2：从1到100求和。</p><p>Java代码：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">class Test {</span>
<span class="line">    </span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        int total = 0;</span>
<span class="line">        for (int i = 1; i &lt;= 100; i += 1) {</span>
<span class="line">            total += i;</span>
<span class="line">        }</span>
<span class="line">        System.out.println(total);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(sum(range(1, 101)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例子3：双色球随机选号。</p><p>Java代码：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">import java.util.List;</span>
<span class="line">import java.util.ArrayList;</span>
<span class="line">import java.util.Collections;</span>
<span class="line"></span>
<span class="line">class Test {</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 产生[min, max)范围的随机整数</span>
<span class="line">     */</span>
<span class="line">    public static int randomInt(int min, int max) {</span>
<span class="line">        return (int) (Math.random() * (max - min) + min);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        // 初始化备选红色球</span>
<span class="line">        List&lt;Integer&gt; redBalls = new ArrayList&lt;&gt;();</span>
<span class="line">        for (int i = 1; i &lt;= 33; ++i) {</span>
<span class="line">            redBalls.add(i);</span>
<span class="line">        }</span>
<span class="line">        List&lt;Integer&gt; selectedBalls = new ArrayList&lt;&gt;();</span>
<span class="line">        // 选出六个红色球</span>
<span class="line">        for (int i = 0; i &lt; 6; ++i) {</span>
<span class="line">            selectedBalls.add(redBalls.remove(randomInt(0, redBalls.size())));</span>
<span class="line">        }</span>
<span class="line">        // 对红色球进行排序</span>
<span class="line">        Collections.sort(selectedBalls);</span>
<span class="line">        // 添加一个蓝色球</span>
<span class="line">        selectedBalls.add(randomInt(1, 17));</span>
<span class="line">        // 输出选中的随机号码</span>
<span class="line">        for (int i = 0; i &lt; selectedBalls.size(); ++i) {</span>
<span class="line">            System.out.printf(&quot;%02d &quot;, selectedBalls.get(i));</span>
<span class="line">            if (i == selectedBalls.size() - 2) {</span>
<span class="line">                System.out.print(&quot;| &quot;);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from random import randint, sample</span>
<span class="line"></span>
<span class="line"># 初始化备选红色球</span>
<span class="line">red_balls = [x for x in range(1, 34)]</span>
<span class="line"># 选出六个红色球</span>
<span class="line">selected_balls = sample(red_balls, 6)</span>
<span class="line"># 对红色球进行排序</span>
<span class="line">selected_balls.sort()</span>
<span class="line"># 添加一个蓝色球</span>
<span class="line">selected_balls.append(randint(1, 16))</span>
<span class="line"># 输出选中的随机号码</span>
<span class="line">for index, ball in enumerate(selected_balls):</span>
<span class="line">    print(&#39;%02d&#39; % ball, end=&#39; &#39;)</span>
<span class="line">    if index == len(selected_balls) - 2:</span>
<span class="line">        print(&#39;|&#39;, end=&#39; &#39;)</span>
<span class="line">print()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相信，看完这些例子后，你一定感受到了我选择了Python是有道理的。</p>`,20),d=[i];function t(p,c){return a(),s("div",null,d)}const v=n(e,[["render",t],["__file","我为什么选择了Python.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/%E7%95%AA%E5%A4%96%E7%AF%87/%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E4%BA%86Python.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"我为什么选择了Python","slug":"我为什么选择了python","link":"#我为什么选择了python","children":[{"level":3,"title":"Python vs. Java","slug":"python-vs-java","link":"#python-vs-java","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/番外篇/我为什么选择了Python.md"}');export{v as comp,m as data};
