import{_ as s,c as n,o as e,b as a}from"./app-CgltcQVY.js";const i={},l=a(`<h2 id="并发编程在爬虫中的应用" tabindex="-1"><a class="header-anchor" href="#并发编程在爬虫中的应用"><span>并发编程在爬虫中的应用</span></a></h2><p>之前的课程，我们已经为大家介绍了 Python 中的多线程、多进程和异步编程，通过这三种手段，我们可以实现并发或并行编程，这一方面可以加速代码的执行，另一方面也可以带来更好的用户体验。爬虫程序是典型的 I/O 密集型任务，对于 I/O 密集型任务来说，多线程和异步 I/O 都是很好的选择，因为当程序的某个部分因 I/O 操作阻塞时，程序的其他部分仍然可以运转，这样我们不用在等待和阻塞中浪费大量的时间。下面我们以爬取“<a href="https://image.so.com/" target="_blank" rel="noopener noreferrer">360图片</a>”网站的图片并保存到本地为例，为大家分别展示使用单线程、多线程和异步 I/O 编程的爬虫程序有什么区别，同时也对它们的执行效率进行简单的对比。</p><p>“360图片”网站的页面使用了 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX" target="_blank" rel="noopener noreferrer">Ajax</a> 技术，这是很多网站都会使用的一种异步加载数据和局部刷新页面的技术。简单的说，页面上的图片都是通过 JavaScript 代码异步获取 JSON 数据并动态渲染生成的，而且整个页面还使用了瀑布式加载（一边向下滚动，一边加载更多的图片）。我们在浏览器的“开发者工具”中可以找到提供动态内容的数据接口，如下图所示，我们需要的图片信息就在服务器返回的 JSON 数据中。</p><img src="https://gitee.com/jackfrued/mypic/raw/master/20211205221352.png" style="zoom:50%;"><p>例如，要获取“美女”频道的图片，我们可以请求如下所示的URL，其中参数<code>ch</code>表示请求的频道，<code>=</code>后面的参数值<code>beauty</code>就代表了“美女”频道，参数<code>sn</code>相当于是页码，<code>0</code>表示第一页（共<code>30</code>张图片），<code>30</code>表示第二页，<code>60</code>表示第三页，以此类推。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">https://image.so.com/zjl?ch=beauty&amp;sn=0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="单线程版本" tabindex="-1"><a class="header-anchor" href="#单线程版本"><span>单线程版本</span></a></h3><p>通过上面的 URL 下载“美女”频道共<code>90</code>张图片。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">example04.py - 单线程版本爬虫</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import os</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download_picture(url):</span>
<span class="line">    filename = url[url.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">    resp = requests.get(url)</span>
<span class="line">    if resp.status_code == 200:</span>
<span class="line">        with open(f&#39;images/beauty/{filename}&#39;, &#39;wb&#39;) as file:</span>
<span class="line">            file.write(resp.content)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    if not os.path.exists(&#39;images/beauty&#39;):</span>
<span class="line">        os.makedirs(&#39;images/beauty&#39;)</span>
<span class="line">    for page in range(3):</span>
<span class="line">        resp = requests.get(f&#39;https://image.so.com/zjl?ch=beauty&amp;sn={page * 30}&#39;)</span>
<span class="line">        if resp.status_code == 200:</span>
<span class="line">            pic_dict_list = resp.json()[&#39;list&#39;]</span>
<span class="line">            for pic_dict in pic_dict_list:</span>
<span class="line">                download_picture(pic_dict[&#39;qhimg_url&#39;])</span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 macOS 或 Linux 系统上，我们可以使用<code>time</code>命令来了解上面代码的执行时间以及 CPU 的利用率，如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">time python3 example04.py </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是单线程爬虫代码在我的电脑上执行的结果。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">python3 example04.py  2.36s user 0.39s system 12% cpu 21.578 total</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里我们只需要关注代码的总耗时为<code>21.578</code>秒，CPU 利用率为<code>12%</code>。</p><h3 id="多线程版本" tabindex="-1"><a class="header-anchor" href="#多线程版本"><span>多线程版本</span></a></h3><p>我们使用之前讲到过的线程池技术，将上面的代码修改为多线程版本。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">example05.py - 多线程版本爬虫</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import os</span>
<span class="line">from concurrent.futures import ThreadPoolExecutor</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download_picture(url):</span>
<span class="line">    filename = url[url.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">    resp = requests.get(url)</span>
<span class="line">    if resp.status_code == 200:</span>
<span class="line">        with open(f&#39;images/beauty/{filename}&#39;, &#39;wb&#39;) as file:</span>
<span class="line">            file.write(resp.content)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    if not os.path.exists(&#39;images/beauty&#39;):</span>
<span class="line">        os.makedirs(&#39;images/beauty&#39;)</span>
<span class="line">    with ThreadPoolExecutor(max_workers=16) as pool:</span>
<span class="line">        for page in range(3):</span>
<span class="line">            resp = requests.get(f&#39;https://image.so.com/zjl?ch=beauty&amp;sn={page * 30}&#39;)</span>
<span class="line">            if resp.status_code == 200:</span>
<span class="line">                pic_dict_list = resp.json()[&#39;list&#39;]</span>
<span class="line">                for pic_dict in pic_dict_list:</span>
<span class="line">                    pool.submit(download_picture, pic_dict[&#39;qhimg_url&#39;])</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">time python3 example05.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">python3 example05.py  2.65s user 0.40s system 95% cpu 3.193 total</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="异步i-o版本" tabindex="-1"><a class="header-anchor" href="#异步i-o版本"><span>异步I/O版本</span></a></h3><p>我们使用<code>aiohttp</code>将上面的代码修改为异步 I/O 的版本。为了以异步 I/O 的方式实现网络资源的获取和写文件操作，我们首先得安装三方库<code>aiohttp</code>和<code>aiofile</code>，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install aiohttp aiofile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>aiohttp</code> 的用法在之前的课程中已经做过简要介绍，<code>aiofile</code>模块中的<code>async_open</code>函数跟 Python 内置函数<code>open</code>的用法大致相同，只不过它支持异步操作。下面是异步 I/O 版本的爬虫代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">example06.py - 异步I/O版本爬虫</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import asyncio</span>
<span class="line">import json</span>
<span class="line">import os</span>
<span class="line"></span>
<span class="line">import aiofile</span>
<span class="line">import aiohttp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def download_picture(session, url):</span>
<span class="line">    filename = url[url.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">    async with session.get(url, ssl=False) as resp:</span>
<span class="line">        if resp.status == 200:</span>
<span class="line">            data = await resp.read()</span>
<span class="line">            async with aiofile.async_open(f&#39;images/beauty/{filename}&#39;, &#39;wb&#39;) as file:</span>
<span class="line">                await file.write(data)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def fetch_json():</span>
<span class="line">    async with aiohttp.ClientSession() as session:</span>
<span class="line">        for page in range(3):</span>
<span class="line">            async with session.get(</span>
<span class="line">                url=f&#39;https://image.so.com/zjl?ch=beauty&amp;sn={page * 30}&#39;,</span>
<span class="line">                ssl=False</span>
<span class="line">            ) as resp:</span>
<span class="line">                if resp.status == 200:</span>
<span class="line">                    json_str = await resp.text()</span>
<span class="line">                    result = json.loads(json_str)</span>
<span class="line">                    for pic_dict in result[&#39;list&#39;]:</span>
<span class="line">                        await download_picture(session, pic_dict[&#39;qhimg_url&#39;])</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    if not os.path.exists(&#39;images/beauty&#39;):</span>
<span class="line">        os.makedirs(&#39;images/beauty&#39;)</span>
<span class="line">    loop = asyncio.get_event_loop()</span>
<span class="line">    loop.run_until_complete(fetch_json())</span>
<span class="line">    loop.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下所示的命令。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">time python3 example06.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码的执行结果如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">python3 example06.py  0.82s user 0.21s system 27% cpu 3.782 total</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>通过上面三段代码执行结果的比较，我们可以得出一个结论，使用多线程和异步 I/O 都可以改善爬虫程序的性能，因为我们不用将时间浪费在因 I/O 操作造成的等待和阻塞上，而<code>time</code>命令的执行结果也告诉我们，单线程的代码 CPU 利用率仅仅只有<code>12%</code>，而多线程版本的 CPU 利用率则高达<code>95%</code>；单线程版本的爬虫执行时间约<code>21</code>秒，而多线程和异步 I/O 的版本仅执行了<code>3</code>秒钟。另外，在运行时间差别不大的情况下，多线程的代码比异步 I/O 的代码耗费了更多的 CPU 资源，这是因为多线程的调度和切换也需要花费 CPU 时间。至此，三种方式在 I/O 密集型任务上的优劣已经一目了然，当然这只是在我的电脑上跑出来的结果。如果网络状况不是很理想或者目标网站响应很慢，那么使用多线程和异步 I/O 的优势将更为明显，有兴趣的读者可以自行试验。</p>`,32),d=[l];function c(p,t){return e(),n("div",null,d)}const o=s(i,[["render",c],["__file","63.并发编程在爬虫中的应用.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day61-65/63.%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E5%9C%A8%E7%88%AC%E8%99%AB%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"并发编程在爬虫中的应用","slug":"并发编程在爬虫中的应用","link":"#并发编程在爬虫中的应用","children":[{"level":3,"title":"单线程版本","slug":"单线程版本","link":"#单线程版本","children":[]},{"level":3,"title":"多线程版本","slug":"多线程版本","link":"#多线程版本","children":[]},{"level":3,"title":"异步I/O版本","slug":"异步i-o版本","link":"#异步i-o版本","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day61-65/63.并发编程在爬虫中的应用.md"}');export{o as comp,u as data};
