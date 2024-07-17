import{_ as n,c as s,o as e,d as a}from"./app-CxrMoykp.js";const i="/docs/assets/use-pandas-in-jupyter-notebook-B2TD9TXT.png",l="/docs/assets/action-DeWZemqK.png",d={},r=a(`<h2 id="年薪50w-的python程序员如何写代码" tabindex="-1"><a class="header-anchor" href="#年薪50w-的python程序员如何写代码"><span>年薪50W+的Python程序员如何写代码</span></a></h2><h3 id="为什么要用python写代码" tabindex="-1"><a class="header-anchor" href="#为什么要用python写代码"><span>为什么要用Python写代码</span></a></h3><h4 id="没有对比就没有伤害" tabindex="-1"><a class="header-anchor" href="#没有对比就没有伤害"><span>没有对比就没有伤害</span></a></h4><blockquote><p><strong>很多互联网和移动互联网企业对开发效率的要求高于对执行效率的要求</strong>。</p></blockquote><h5 id="例子1-hello-world" tabindex="-1"><a class="header-anchor" href="#例子1-hello-world"><span>例子1：hello, world</span></a></h5><p>C的版本：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre class="language-C"><code><span class="line">#include &lt;stdio.h&gt;</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">    printf(&quot;hello, world\\n&quot;);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java的版本：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">class Example01 {</span>
<span class="line">    </span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        System.out.println(&quot;hello, world&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python的版本：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(&#39;hello, world&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="例子2-1-100求和" tabindex="-1"><a class="header-anchor" href="#例子2-1-100求和"><span>例子2：1-100求和</span></a></h5><p>C的版本：</p><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C" data-title="C"><pre class="language-C"><code><span class="line">#include &lt;stdio.h&gt;</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">    int total = 0;</span>
<span class="line">    for (int i = 1; i &lt;= 100; ++i) {</span>
<span class="line">        total += i;</span>
<span class="line">    }</span>
<span class="line">    printf(&quot;%d\\n&quot;, total);</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python的版本：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">print(sum(range(1, 101)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="例子3-创建和初始化数组-列表" tabindex="-1"><a class="header-anchor" href="#例子3-创建和初始化数组-列表"><span>例子3：创建和初始化数组（列表）</span></a></h5><p>Java的版本：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">import java.util.Arrays;</span>
<span class="line"></span>
<span class="line">public class Example03 {</span>
<span class="line"></span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        boolean[] values = new boolean[10];</span>
<span class="line">        Arrays.fill(values, true);</span>
<span class="line">        System.out.println(Arrays.toString(values));</span>
<span class="line"></span>
<span class="line">        int[] numbers = new int[10];</span>
<span class="line">        for (int i = 0; i &lt; numbers.length; ++i) {</span>
<span class="line">            numbers[i] = i + 1;</span>
<span class="line">        }</span>
<span class="line">        System.out.println(Arrays.toString(numbers));</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python的版本：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">values = [True] * 10</span>
<span class="line">print(values)</span>
<span class="line">numbers = [x for x in range(1, 11)]</span>
<span class="line">print(numbers)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="例子4-双色球随机选号" tabindex="-1"><a class="header-anchor" href="#例子4-双色球随机选号"><span>例子4：双色球随机选号</span></a></h5><p>Java的版本：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">import java.util.List;</span>
<span class="line">import java.util.ArrayList;</span>
<span class="line">import java.util.Collections;</span>
<span class="line">import java.util.Scanner;</span>
<span class="line"></span>
<span class="line">class Example03 {</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 产生[min, max)范围的随机整数</span>
<span class="line">     */</span>
<span class="line">    public static int randomInt(int min, int max) {</span>
<span class="line">        return (int) (Math.random() * (max - min) + min);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    /**</span>
<span class="line">     * 输出一组双色球号码</span>
<span class="line">     */</span>
<span class="line">    public static void display(List&lt;Integer&gt; balls) {</span>
<span class="line">        for (int i = 0; i &lt; balls.size(); ++i) {</span>
<span class="line">            System.out.printf(&quot;%02d &quot;, balls.get(i));</span>
<span class="line">            if (i == balls.size() - 2) {</span>
<span class="line">                System.out.print(&quot;| &quot;);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        System.out.println();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 生成一组随机号码</span>
<span class="line">     */</span>
<span class="line">    public static List&lt;Integer&gt; generate() {</span>
<span class="line">        List&lt;Integer&gt; redBalls = new ArrayList&lt;&gt;();</span>
<span class="line">        for (int i = 1; i &lt;= 33; ++i) {</span>
<span class="line">            redBalls.add(i);</span>
<span class="line">        }</span>
<span class="line">        List&lt;Integer&gt; selectedBalls = new ArrayList&lt;&gt;();</span>
<span class="line">        for (int i = 0; i &lt; 6; ++i) {</span>
<span class="line">            selectedBalls.add(redBalls.remove(randomInt(0, redBalls.size())));</span>
<span class="line">        }</span>
<span class="line">        Collections.sort(selectedBalls);</span>
<span class="line">        selectedBalls.add(randomInt(1, 17));</span>
<span class="line">        return selectedBalls;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        try (Scanner sc = new Scanner(System.in)) {</span>
<span class="line">            System.out.print(&quot;机选几注: &quot;);</span>
<span class="line">            int num = sc.nextInt();</span>
<span class="line">            for (int i = 0; i &lt; num; ++i) {</span>
<span class="line">                display(generate());</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python的版本：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from random import randint, sample</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def generate():</span>
<span class="line">    &quot;&quot;&quot;生成一组随机号码&quot;&quot;&quot;</span>
<span class="line">    red_balls = [x for x in range(1, 34)]</span>
<span class="line">    selected_balls = sample(red_balls, 6)</span>
<span class="line">    selected_balls.sort()</span>
<span class="line">    selected_balls.append(randint(1, 16))</span>
<span class="line">    return selected_balls</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def display(balls):</span>
<span class="line">    &quot;&quot;&quot;输出一组双色球号码&quot;&quot;&quot;</span>
<span class="line">    for index, ball in enumerate(balls):</span>
<span class="line">        print(f&#39;{ball:0&gt;2d}&#39;, end=&#39; &#39;)</span>
<span class="line">        if index == len(balls) - 2:</span>
<span class="line">            print(&#39;|&#39;, end=&#39; &#39;)</span>
<span class="line">    print()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">num = int(input(&#39;机选几注: &#39;))</span>
<span class="line">for _ in range(num):</span>
<span class="line">    display(generate())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>温馨提示</strong>：珍爱生命，远离任何形式的赌博。</p></blockquote><h5 id="例子5-实现一个简单的http服务器。" tabindex="-1"><a class="header-anchor" href="#例子5-实现一个简单的http服务器。"><span>例子5：实现一个简单的HTTP服务器。</span></a></h5><p>Java的版本：</p><blockquote><p><strong>说明</strong>：JDK 1.6以前，需要通过套接字编程来实现，具体又可以分为多线程和NIO两种做法。JDK 1.6以后，可以使用<code>com.sun.net.httpserver</code>包提供的<code>HttpServer</code>类来实现。</p></blockquote><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">import com.sun.net.httpserver.HttpExchange;</span>
<span class="line">import com.sun.net.httpserver.HttpHandler;</span>
<span class="line">import com.sun.net.httpserver.HttpServer;</span>
<span class="line"></span>
<span class="line">import java.io.IOException;</span>
<span class="line">import java.io.OutputStream;</span>
<span class="line">import java.net.InetSocketAddress;</span>
<span class="line"></span>
<span class="line">class Example05 {</span>
<span class="line"></span>
<span class="line">    public static void main(String[] arg) throws Exception {</span>
<span class="line">        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);</span>
<span class="line">        server.createContext(&quot;/&quot;, new RequestHandler());</span>
<span class="line">        server.start();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    static class RequestHandler implements HttpHandler {</span>
<span class="line">        </span>
<span class="line">        @Override</span>
<span class="line">        public void handle(HttpExchange exchange) throws IOException {</span>
<span class="line">            String response = &quot;&lt;h1&gt;hello, world&lt;/h1&gt;&quot;;</span>
<span class="line">            exchange.sendResponseHeaders(200, 0);</span>
<span class="line">            try (OutputStream os = exchange.getResponseBody()) {</span>
<span class="line">                os.write(response.getBytes());</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python的版本：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from http.server import HTTPServer, SimpleHTTPRequestHandler</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class RequestHandler(SimpleHTTPRequestHandler):</span>
<span class="line"></span>
<span class="line">    def do_GET(self):</span>
<span class="line">        self.send_response(200)</span>
<span class="line">        self.end_headers()</span>
<span class="line">        self.wfile.write(&#39;&lt;h1&gt;hello, world&lt;/h1&gt;&#39;.encode())</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">server = HTTPServer((&#39;&#39;, 8000), RequestHandler)</span>
<span class="line">server.serve_forever()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">python3 -m http.server 8000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="一行python代码可以做什么" tabindex="-1"><a class="header-anchor" href="#一行python代码可以做什么"><span>一行Python代码可以做什么</span></a></h4><blockquote><p><strong>很多时候，你的问题只需一行Python代码就能解决</strong>。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 一行代码实现求阶乘函数</span>
<span class="line">fac = lambda x: __import__(&#39;functools&#39;).reduce(int.__mul__, range(1, x + 1), 1)</span>
<span class="line"></span>
<span class="line"># 一行代码实现求最大公约数函数</span>
<span class="line">gcd = lambda x, y: y % x and gcd(y % x, x) or x</span>
<span class="line"></span>
<span class="line"># 一行代码实现判断素数的函数</span>
<span class="line">is_prime = lambda x: x &gt; 1 and not [f for f in range(2, int(x ** 0.5) + 1) if x % f == 0]</span>
<span class="line"></span>
<span class="line"># 一行代码实现快速排序</span>
<span class="line">quick_sort = lambda items: len(items) and quick_sort([x for x in items[1:] if x &lt; items[0]]) + [items[0]] + quick_sort([x for x in items[1:] if x &gt; items[0]]) or items</span>
<span class="line"></span>
<span class="line"># 生成FizzBuzz列表</span>
<span class="line">[&#39;Fizz&#39;[x % 3 * 4:] + &#39;Buzz&#39;[x % 5 * 4:] or x for x in range(1, 101)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设计模式从未如此简单" tabindex="-1"><a class="header-anchor" href="#设计模式从未如此简单"><span>设计模式从未如此简单</span></a></h4><blockquote><p><strong>Python是动态类型语言，大量的设计模式在Python中被简化或弱化</strong>。</p></blockquote><p>思考：如何优化下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def fib(num):</span>
<span class="line">    if num in (1, 2):</span>
<span class="line">        return 1</span>
<span class="line">    return fib(num - 1) + fib(num - 2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理模式在Python中可以通过内置的或自定义的装饰器来实现。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import lru_cache</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@lru_cache()</span>
<span class="line">def fib(num):</span>
<span class="line">    if num in (1, 2):</span>
<span class="line">        return 1</span>
<span class="line">    return fib(num - 1) + fib(num - 2)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">for n in range(1, 121):</span>
<span class="line">    print(f&#39;{n}: {fib(n)}&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过Python标准库<code>functools</code>模块的<code>lru_cache</code>装饰器为<code>fib</code>函数加上缓存代理，缓存函数执行的中间结果，优化代码的性能。</p></blockquote><p>单例模式在Python中可以通过自定义的装饰器或元类来实现。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import wraps</span>
<span class="line">from threading import RLock</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def singleton(cls):</span>
<span class="line">    instances = {}</span>
<span class="line">    lock = RLock()</span>
<span class="line"></span>
<span class="line">    @wraps(cls)</span>
<span class="line">    def wrapper(*args, **kwargs):</span>
<span class="line">        if cls not in instances:</span>
<span class="line">            with lock:</span>
<span class="line">                if cls not in instances:</span>
<span class="line">                    instances[cls] = cls(*args, **kwargs)</span>
<span class="line">        return instances[cls]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：需要实现单例模式的类只需要添加上面的装饰器即可。</p></blockquote><p>原型模式在Python中可以通过元类来实现。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import copy</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class PrototypeMeta(type):</span>
<span class="line"></span>
<span class="line">    def __init__(cls, *args, **kwargs):</span>
<span class="line">        super().__init__(*args, **kwargs)</span>
<span class="line">        cls.clone = lambda self, is_deep=True: \\</span>
<span class="line">            copy.deepcopy(self) if is_deep else copy.copy(self)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过元类给指定了<code>metaclass=PrototypeMeta</code>的类添加一个<code>clone</code>方法实现对象克隆，利用Python标准库<code>copy</code>模块的<code>copy</code>和<code>deepcopy</code>分别实现浅拷贝和深拷贝。</p></blockquote><h4 id="数据采集和数据分析从未如此简单" tabindex="-1"><a class="header-anchor" href="#数据采集和数据分析从未如此简单"><span>数据采集和数据分析从未如此简单</span></a></h4><blockquote><p><strong>网络数据采集是Python最擅长的领域之一。</strong></p></blockquote><p>例子：获取豆瓣电影“Top250”。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line">import time</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line">from bs4 import BeautifulSoup</span>
<span class="line"></span>
<span class="line">for page in range(10):</span>
<span class="line">    resp = requests.get(</span>
<span class="line">        url=f&#39;https://movie.douban.com/top250?start={25 * page}&#39;,</span>
<span class="line">        headers={&#39;User-Agent&#39;: &#39;BaiduSpider&#39;}</span>
<span class="line">    )</span>
<span class="line">    soup = BeautifulSoup(resp.text, &quot;lxml&quot;)</span>
<span class="line">    for elem in soup.select(&#39;a &gt; span.title:nth-child(1)&#39;):</span>
<span class="line">        print(elem.text)</span>
<span class="line">    time.sleep(random.random() * 5)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>利用NumPy、Pandas、Matplotlib可以轻松实现数据分析和可视化</strong>。</p></blockquote><p><img src="`+i+`" alt=""></p><h3 id="写出python代码的正确姿势" tabindex="-1"><a class="header-anchor" href="#写出python代码的正确姿势"><span>写出Python代码的正确姿势</span></a></h3><blockquote><p><strong>用Python写代码就要写出Pythonic的代码</strong>。</p></blockquote><h4 id="姿势1-选择结构的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势1-选择结构的正确姿势"><span>姿势1：选择结构的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;jackfrued&#39;</span>
<span class="line">fruits = [&#39;apple&#39;, &#39;orange&#39;, &#39;grape&#39;]</span>
<span class="line">owners = {&#39;name&#39;: &#39;骆昊&#39;, &#39;age&#39;: 40, &#39;gender&#39;: True}</span>
<span class="line">if name != &#39;&#39; and len(fruits) &gt; 0 and len(owners.keys()) &gt; 0:</span>
<span class="line">    print(&#39;Jackfrued love fruits.&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">name = &#39;jackfrued&#39;</span>
<span class="line">fruits = [&#39;apple&#39;, &#39;orange&#39;, &#39;grape&#39;]</span>
<span class="line">owners = {&#39;name&#39;: &#39;骆昊&#39;, &#39;age&#39;: 40, &#39;gender&#39;: True}</span>
<span class="line">if name and fruits and owners:</span>
<span class="line">    print(&#39;Jackfrued love fruits.&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="姿势2-交换两个变量的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势2-交换两个变量的正确姿势"><span>姿势2：交换两个变量的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">temp = a</span>
<span class="line">a = b</span>
<span class="line">b = temp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a = a ^ b</span>
<span class="line">b = a ^ b</span>
<span class="line">a = a ^ b</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">a, b = b, a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="姿势3-用序列组装字符串的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势3-用序列组装字符串的正确姿势"><span>姿势3：用序列组装字符串的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">chars = [&#39;j&#39;, &#39;a&#39;, &#39;c&#39;, &#39;k&#39;, &#39;f&#39;, &#39;r&#39;, &#39;u&#39;, &#39;e&#39;, &#39;d&#39;]</span>
<span class="line">name = &#39;&#39;</span>
<span class="line">for char in chars:</span>
<span class="line">    name += char</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">chars = [&#39;j&#39;, &#39;a&#39;, &#39;c&#39;, &#39;k&#39;, &#39;f&#39;, &#39;r&#39;, &#39;u&#39;, &#39;e&#39;, &#39;d&#39;]</span>
<span class="line">name = &#39;&#39;.join(chars)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="姿势4-遍历列表的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势4-遍历列表的正确姿势"><span>姿势4：遍历列表的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fruits = [&#39;orange&#39;, &#39;grape&#39;, &#39;pitaya&#39;, &#39;blueberry&#39;]</span>
<span class="line">index = 0</span>
<span class="line">for fruit in fruits:</span>
<span class="line">    print(index, &#39;:&#39;, fruit)</span>
<span class="line">    index += 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fruits = [&#39;orange&#39;, &#39;grape&#39;, &#39;pitaya&#39;, &#39;blueberry&#39;]</span>
<span class="line">for index, fruit in enumerate(fruits):</span>
<span class="line">    print(index, &#39;:&#39;, fruit)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="姿势5-创建列表的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势5-创建列表的正确姿势"><span>姿势5：创建列表的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = [7, 20, 3, 15, 11]</span>
<span class="line">result = []</span>
<span class="line">for i in data:</span>
<span class="line">    if i &gt; 10:</span>
<span class="line">        result.append(i * 3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = [7, 20, 3, 15, 11]</span>
<span class="line">result = [num * 3 for num in data if num &gt; 10]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="姿势6-确保代码健壮性的正确姿势" tabindex="-1"><a class="header-anchor" href="#姿势6-确保代码健壮性的正确姿势"><span>姿势6：确保代码健壮性的正确姿势</span></a></h4><p>跨界开发者的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = {&#39;x&#39;: &#39;5&#39;}</span>
<span class="line">if &#39;x&#39; in data and isinstance(data[&#39;x&#39;], (str, int, float)) \\</span>
<span class="line">        and data[&#39;x&#39;].isdigit():</span>
<span class="line">    value = int(data[&#39;x&#39;])</span>
<span class="line">    print(value)</span>
<span class="line">else:</span>
<span class="line">    value = None</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pythonic的代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = {&#39;x&#39;: &#39;5&#39;}</span>
<span class="line">try:</span>
<span class="line">    value = int(data[&#39;x&#39;])</span>
<span class="line">    print(value)</span>
<span class="line">except (KeyError, TypeError, ValueError):</span>
<span class="line">    value = None</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用lint工具检查你的代码规范" tabindex="-1"><a class="header-anchor" href="#使用lint工具检查你的代码规范"><span>使用Lint工具检查你的代码规范</span></a></h3><p>阅读下面的代码，看看你能看出哪些地方是有毛病的或者说不符合Python的编程规范的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from enum import *</span>
<span class="line"></span>
<span class="line">@unique</span>
<span class="line">class Suite (Enum):</span>
<span class="line">    SPADE, HEART, CLUB, DIAMOND = range(4)</span>
<span class="line"></span>
<span class="line">class Card(object):</span>
<span class="line">    def __init__(self,suite,face ):</span>
<span class="line">        self.suite = suite</span>
<span class="line">        self.face = face</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    def __repr__(self):</span>
<span class="line">        suites=&#39;♠♥♣♦&#39;</span>
<span class="line">        faces=[&#39;&#39;,&#39;A&#39;,&#39;2&#39;,&#39;3&#39;,&#39;4&#39;,&#39;5&#39;,&#39;6&#39;,&#39;7&#39;,&#39;8&#39;,&#39;9&#39;,&#39;10&#39;,&#39;J&#39;,&#39;Q&#39;,&#39;K&#39;]</span>
<span class="line">        return f&#39;{suites[self.suite.value]}{faces[self.face]}&#39;</span>
<span class="line"></span>
<span class="line">import random</span>
<span class="line"></span>
<span class="line">class Poker(object):</span>
<span class="line">    def __init__(self):</span>
<span class="line">        self.cards =[Card(suite, face) for suite in Suite</span>
<span class="line">            for face in range(1, 14)]</span>
<span class="line">        self.current=0</span>
<span class="line">    def shuffle (self):</span>
<span class="line">        self.current=0</span>
<span class="line">        random.shuffle(self.cards)</span>
<span class="line">    def deal (self):</span>
<span class="line">        card = self.cards[self.current]</span>
<span class="line">        self.current+=1</span>
<span class="line">        return card</span>
<span class="line">    def has_next (self):</span>
<span class="line">        if self.current&lt;len(self.cards): return True</span>
<span class="line">        return False</span>
<span class="line"></span>
<span class="line">p = Poker()</span>
<span class="line">p.shuffle()</span>
<span class="line">print(p.cards)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pylint的安装和使用" tabindex="-1"><a class="header-anchor" href="#pylint的安装和使用"><span>PyLint的安装和使用</span></a></h4><p>Pylint是Python代码分析工具，它分析Python代码中的错误，查找不符合代码风格标准（默认使用的代码风格是 PEP 8）和有潜在问题的代码。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install pylint</span>
<span class="line">pylint [options] module_or_package</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Pylint输出格式如下所示。</p><blockquote><p>模块名:行号:列号: 消息类型 消息</p></blockquote><p>消息类型有以下几种：</p><ol><li>C - 惯例：违反了Python编程惯例（PEP 8）的代码。</li><li>R - 重构：写得比较糟糕需要重构的代码。</li><li>W - 警告：代码中存在的不影响代码运行的问题。</li><li>E - 错误：代码中存在的影响代码运行的错误。</li><li>F - 致命错误：导致Pylint无法继续运行的错误。</li></ol><p>Pylint命令的常用参数：</p><ol><li><code>--disable=&lt;msg ids&gt;</code>或<code>-d &lt;msg ids&gt;</code>：禁用指定类型的消息。</li><li><code>--errors-only</code>或<code>-E</code>：只显示错误。</li><li><code>--rcfile=&lt;file&gt;</code>：指定配置文件。</li><li><code>--list-msgs</code>：列出Pylint的消息清单。</li><li><code>--generate-rcfile</code>：生成配置文件的样例。</li><li><code>--reports=&lt;y_or_n&gt;</code>或<code>-r &lt;y_or_n&gt;</code>：是否生成检查报告。</li></ol><h3 id="使用profile工具剖析你的代码性能" tabindex="-1"><a class="header-anchor" href="#使用profile工具剖析你的代码性能"><span>使用Profile工具剖析你的代码性能</span></a></h3><h4 id="cprofile模块" tabindex="-1"><a class="header-anchor" href="#cprofile模块"><span>cProfile模块</span></a></h4><p><code>example01.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import cProfile</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def is_prime(num):</span>
<span class="line">    for factor in range(2, int(num ** 0.5) + 1):</span>
<span class="line">        if num % factor == 0:</span>
<span class="line">            return False</span>
<span class="line">    return True</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class PrimeIter:</span>
<span class="line"></span>
<span class="line">    def __init__(self, total):</span>
<span class="line">        self.counter = 0</span>
<span class="line">        self.current = 1</span>
<span class="line">        self.total = total</span>
<span class="line"></span>
<span class="line">    def __iter__(self):</span>
<span class="line">        return self</span>
<span class="line"></span>
<span class="line">    def __next__(self):</span>
<span class="line">        if self.counter &lt; self.total:</span>
<span class="line">            self.current += 1</span>
<span class="line">            while not is_prime(self.current):</span>
<span class="line">                self.current += 1</span>
<span class="line">            self.counter += 1</span>
<span class="line">            return self.current</span>
<span class="line">        raise StopIteration()</span>
<span class="line"></span>
<span class="line">        </span>
<span class="line">cProfile.run(&#39;list(PrimeIter(10000))&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">   114734 function calls in 0.573 seconds</span>
<span class="line"></span>
<span class="line">   Ordered by: standard name</span>
<span class="line"></span>
<span class="line">   ncalls  tottime  percall  cumtime  percall filename:lineno(function)</span>
<span class="line">        1    0.006    0.006    0.573    0.573 &lt;string&gt;:1(&lt;module&gt;)</span>
<span class="line">        1    0.000    0.000    0.000    0.000 example.py:14(__init__)</span>
<span class="line">        1    0.000    0.000    0.000    0.000 example.py:19(__iter__)</span>
<span class="line">    10001    0.086    0.000    0.567    0.000 example.py:22(__next__)</span>
<span class="line">   104728    0.481    0.000    0.481    0.000 example.py:5(is_prime)</span>
<span class="line">        1    0.000    0.000    0.573    0.573 {built-in method builtins.exec}</span>
<span class="line">        1    0.000    0.000    0.000    0.000 {method &#39;disable&#39; of &#39;_lsprof.Profiler&#39; objects}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####line_profiler</p><p>给需要剖析时间性能的函数加上一个<code>profile</code>装饰器，这个函数每行代码的执行次数和时间都会被剖析。</p><p><code>example02.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@profile</span>
<span class="line">def is_prime(num):</span>
<span class="line">    for factor in range(2, int(num ** 0.5) + 1):</span>
<span class="line">        if num % factor == 0:</span>
<span class="line">            return False</span>
<span class="line">    return True</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class PrimeIter:</span>
<span class="line"></span>
<span class="line">    def __init__(self, total):</span>
<span class="line">        self.counter = 0</span>
<span class="line">        self.current = 1</span>
<span class="line">        self.total = total</span>
<span class="line"></span>
<span class="line">    def __iter__(self):</span>
<span class="line">        return self</span>
<span class="line"></span>
<span class="line">    def __next__(self):</span>
<span class="line">        if self.counter &lt; self.total:</span>
<span class="line">            self.current += 1</span>
<span class="line">            while not is_prime(self.current):</span>
<span class="line">                self.current += 1</span>
<span class="line">            self.counter += 1</span>
<span class="line">            return self.current</span>
<span class="line">        raise StopIteration()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">list(PrimeIter(1000))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装和使用<code>line_profiler</code>三方库。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install line_profiler</span>
<span class="line">kernprof -lv example.py</span>
<span class="line"></span>
<span class="line">Wrote profile results to example02.py.lprof</span>
<span class="line">Timer unit: 1e-06 s</span>
<span class="line"></span>
<span class="line">Total time: 0.089513 s</span>
<span class="line">File: example02.py</span>
<span class="line">Function: is_prime at line 1</span>
<span class="line"></span>
<span class="line"> #      Hits         Time  Per Hit   % Time  Line Contents</span>
<span class="line">==============================================================</span>
<span class="line"> 1                                           @profile</span>
<span class="line"> 2                                           def is_prime(num):</span>
<span class="line"> 3     86624      43305.0      0.5     48.4      for factor in range(2, int(num ** 0.5) + 1):</span>
<span class="line"> 4     85624      42814.0      0.5     47.8          if num % factor == 0:</span>
<span class="line"> 5      6918       3008.0      0.4      3.4              return False</span>
<span class="line"> 6      1000        386.0      0.4      0.4      return True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####memory_profiler</p><p>给需要剖析内存性能的函数加上一个<code>profile</code>装饰器，这个函数每行代码的内存使用情况都会被剖析。</p><p><code>example03.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@profile</span>
<span class="line">def eat_memory():</span>
<span class="line">    items = []</span>
<span class="line">    for _ in range(1000000):</span>
<span class="line">        items.append(object())</span>
<span class="line">    return items</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">eat_memory()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装和使用<code>memory_profiler</code>三方库。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pip install memory_profiler</span>
<span class="line">python3 -m memory_profiler example.py</span>
<span class="line"></span>
<span class="line">Filename: example03.py</span>
<span class="line"></span>
<span class="line">Line #    Mem usage    Increment   Line Contents</span>
<span class="line">================================================</span>
<span class="line">     1   38.672 MiB   38.672 MiB   @profile</span>
<span class="line">     2                             def eat_memory():</span>
<span class="line">     3   38.672 MiB    0.000 MiB       items = []</span>
<span class="line">     4   68.727 MiB    0.000 MiB       for _ in range(1000000):</span>
<span class="line">     5   68.727 MiB    1.797 MiB           items.append(object())</span>
<span class="line">     6   68.727 MiB    0.000 MiB       return items</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何构建综合职业素养" tabindex="-1"><a class="header-anchor" href="#如何构建综合职业素养"><span>如何构建综合职业素养</span></a></h3><h4 id="学习总结" tabindex="-1"><a class="header-anchor" href="#学习总结"><span>学习总结</span></a></h4><ol><li>了解全局</li><li>确定范围</li><li>定义目标</li><li>寻找资源</li><li>创建学习计划</li><li>筛选资源</li><li>开始学习，浅尝辄止（YAGNI）</li><li>动手操作，边学边玩</li><li>全面掌握，学以致用</li><li>乐为人师，融会贯通</li></ol><h4 id="时间管理" tabindex="-1"><a class="header-anchor" href="#时间管理"><span>时间管理</span></a></h4><ol><li><p>提升专注力</p></li><li><p>充分利用碎片时间</p></li><li><p>使用番茄工作法</p></li><li><p>时间是怎么浪费掉的</p></li><li><p>任何行动都比不采取行动好</p><p><img src="`+l+'" alt=""></p></li></ol><h4 id="好书推荐" tabindex="-1"><a class="header-anchor" href="#好书推荐"><span>好书推荐</span></a></h4><ol><li>职业规划：《软技能 - 代码之外的生存指南》</li><li>吴军系列：《浪潮之巅》、《硅谷之谜》、《数学之美》、……</li><li>时间管理：《成为一个更高效的人》、《番茄工作法图解》</li></ol>',128),p=[r];function c(t,v){return e(),s("div",null,p)}const m=n(d,[["render",c],["__file","年薪50W_的Python程序员如何写代码.html.vue"]]),o=JSON.parse('{"path":"/python/Python-100-Days/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%96%87%E6%A1%A3/%E5%B9%B4%E8%96%AA50W_%E7%9A%84Python%E7%A8%8B%E5%BA%8F%E5%91%98%E5%A6%82%E4%BD%95%E5%86%99%E4%BB%A3%E7%A0%81/%E5%B9%B4%E8%96%AA50W_%E7%9A%84Python%E7%A8%8B%E5%BA%8F%E5%91%98%E5%A6%82%E4%BD%95%E5%86%99%E4%BB%A3%E7%A0%81.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"年薪50W+的Python程序员如何写代码","slug":"年薪50w-的python程序员如何写代码","link":"#年薪50w-的python程序员如何写代码","children":[{"level":3,"title":"为什么要用Python写代码","slug":"为什么要用python写代码","link":"#为什么要用python写代码","children":[]},{"level":3,"title":"写出Python代码的正确姿势","slug":"写出python代码的正确姿势","link":"#写出python代码的正确姿势","children":[]},{"level":3,"title":"使用Lint工具检查你的代码规范","slug":"使用lint工具检查你的代码规范","link":"#使用lint工具检查你的代码规范","children":[]},{"level":3,"title":"使用Profile工具剖析你的代码性能","slug":"使用profile工具剖析你的代码性能","link":"#使用profile工具剖析你的代码性能","children":[]},{"level":3,"title":"如何构建综合职业素养","slug":"如何构建综合职业素养","link":"#如何构建综合职业素养","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/公开课/文档/年薪50W+的Python程序员如何写代码/年薪50W+的Python程序员如何写代码.md"}');export{m as comp,o as data};
