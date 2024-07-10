import{_ as n,c as s,o as a,e}from"./app-B7BTqdne.js";const i="/docs/assets/pycharm-django-static-Bj_ABYCA.png",l="/docs/assets/synchronous-web-request-Cby4xP27.png",t="/docs/assets/asynchronous-web-request-K3RqFZS9.png",c={},d=e('<h2 id="静态资源和ajax请求" tabindex="-1"><a class="header-anchor" href="#静态资源和ajax请求"><span>静态资源和Ajax请求</span></a></h2><h3 id="加载静态资源" tabindex="-1"><a class="header-anchor" href="#加载静态资源"><span>加载静态资源</span></a></h3><p>如果要在Django项目中使用静态资源，可以先创建一个用于保存静态资源的目录。在<code>vote</code>项目中，我们将静态资源置于名为<code>static</code>的文件夹中，在该文件夹包含了三个子文件夹：css、js和images，分别用来保存外部CSS文件、外部JavaScript文件和图片资源，如下图所示。</p><p><img src="'+i+`" alt=""></p><p>为了能够找到保存静态资源的文件夹，我们还需要修改Django项目的配置文件<code>settings.py</code>，如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">STATICFILES_DIRS = [os.path.join(BASE_DIR, &#39;static&#39;), ]</span>
<span class="line">STATIC_URL = &#39;/static/&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好静态资源之后，大家可以运行项目，然后看看之前我们写的页面上的图片是否能够正常加载出来。需要说明的是，在项目正式部署到线上环境后，我们通常会把静态资源交给专门的静态资源服务器（如Nginx、Apache）来处理，而不是有运行Python代码的服务器来管理静态资源，所以上面的配置并不适用于生产环境，仅供项目开发阶段测试使用。使用静态资源的正确姿势我们会在后续的章节为大家讲解。</p><h3 id="ajax概述" tabindex="-1"><a class="header-anchor" href="#ajax概述"><span>Ajax概述</span></a></h3><p>接下来就可以实现“好评”和“差评”的功能了，很明显如果能够在不刷新页面的情况下实现这两个功能会带来更好的用户体验，因此我们考虑使用<a href="https://zh.wikipedia.org/wiki/AJAX" target="_blank" rel="noopener noreferrer">Ajax</a>技术来实现“好评”和“差评”。Ajax是Asynchronous Javascript And XML的缩写 , 简单的说，使用Ajax技术可以在不重新加载整个页面的情况下对页面进行局部刷新。</p><p>对于传统的Web应用，每次页面上需要加载新的内容都需要重新请求服务器并刷新整个页面，如果服务器短时间内无法给予响应或者网络状况并不理想，那么可能会造成浏览器长时间的空白并使得用户处于等待状态，在这个期间用户什么都做不了，如下图所示。很显然，这样的Web应用并不能带来很好的用户体验。</p><p><img src="`+l+'" alt=""></p><p>对于使用Ajax技术的Web应用，浏览器可以向服务器发起异步请求来获取数据。异步请求不会中断用户体验，当服务器返回了新的数据，我们可以通过JavaScript代码进行DOM操作来实现对页面的局部刷新，这样就相当于在不刷新整个页面的情况下更新了页面的内容，如下图所示。</p><p><img src="'+t+`" alt=""></p><p>在使用Ajax技术时，浏览器跟服务器通常会交换XML或JSON格式的数据，XML是以前使用得非常多的一种数据格式，近年来几乎已经完全被JSON取代，下面是两种数据格式的对比。</p><p>XML格式：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="line">&lt;message&gt;</span>
<span class="line">	&lt;from&gt;Alice&lt;/from&gt;</span>
<span class="line">    &lt;to&gt;Bob&lt;/to&gt;</span>
<span class="line">    &lt;content&gt;Dinner is on me!&lt;/content&gt;</span>
<span class="line">&lt;/message&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON格式：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;from&quot;: &quot;Alice&quot;,</span>
<span class="line">    &quot;to&quot;: &quot;Bob&quot;,</span>
<span class="line">    &quot;content&quot;: &quot;Dinner is on me!&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的对比，明显JSON格式的数据要紧凑得多，所以传输效率更高，而且JSON本身也是JavaScript中的一种对象表达式语法，在JavaScript代码中处理JSON格式的数据更加方便。</p><h3 id="用ajax实现投票功能" tabindex="-1"><a class="header-anchor" href="#用ajax实现投票功能"><span>用Ajax实现投票功能</span></a></h3><p>下面，我们使用Ajax技术来实现投票的功能，首先修改项目的<code>urls.py</code>文件，为“好评”和“差评”功能映射对应的URL。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.contrib import admin</span>
<span class="line">from django.urls import path</span>
<span class="line"></span>
<span class="line">from vote import views</span>
<span class="line"></span>
<span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;&#39;, views.show_subjects),</span>
<span class="line">    path(&#39;teachers/&#39;, views.show_teachers),</span>
<span class="line">    path(&#39;praise/&#39;, views.praise_or_criticize),</span>
<span class="line">    path(&#39;criticize/&#39;, views.praise_or_criticize),</span>
<span class="line">    path(&#39;admin/&#39;, admin.site.urls),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设计视图函数<code>praise_or_criticize</code>来支持“好评”和“差评”功能，该视图函数通过Django封装的JsonResponse类将字典序列化成JSON字符串作为返回给浏览器的响应内容。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def praise_or_criticize(request):</span>
<span class="line">    &quot;&quot;&quot;好评&quot;&quot;&quot;</span>
<span class="line">    try:</span>
<span class="line">        tno = int(request.GET.get(&#39;tno&#39;))</span>
<span class="line">        teacher = Teacher.objects.get(no=tno)</span>
<span class="line">        if request.path.startswith(&#39;/praise&#39;):</span>
<span class="line">            teacher.good_count += 1</span>
<span class="line">            count = teacher.good_count</span>
<span class="line">        else:</span>
<span class="line">            teacher.bad_count += 1</span>
<span class="line">            count = teacher.bad_count</span>
<span class="line">        teacher.save()</span>
<span class="line">        data = {&#39;code&#39;: 20000, &#39;mesg&#39;: &#39;操作成功&#39;, &#39;count&#39;: count}</span>
<span class="line">    except (ValueError, Teacher.DoseNotExist):</span>
<span class="line">        data = {&#39;code&#39;: 20001, &#39;mesg&#39;: &#39;操作失败&#39;}</span>
<span class="line">    return JsonResponse(data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改显示老师信息的模板页，引入jQuery库来实现事件处理、Ajax请求和DOM操作。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;老师信息&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        #container {</span>
<span class="line">            width: 80%;</span>
<span class="line">            margin: 10px auto;</span>
<span class="line">        }</span>
<span class="line">        .teacher {</span>
<span class="line">            width: 100%;</span>
<span class="line">            margin: 0 auto;</span>
<span class="line">            padding: 10px 0;</span>
<span class="line">            border-bottom: 1px dashed gray;</span>
<span class="line">            overflow: auto;</span>
<span class="line">        }</span>
<span class="line">        .teacher&gt;div {</span>
<span class="line">            float: left;</span>
<span class="line">        }</span>
<span class="line">        .photo {</span>
<span class="line">            height: 140px;</span>
<span class="line">            border-radius: 75px;</span>
<span class="line">            overflow: hidden;</span>
<span class="line">            margin-left: 20px;</span>
<span class="line">        }</span>
<span class="line">        .info {</span>
<span class="line">            width: 75%;</span>
<span class="line">            margin-left: 30px;</span>
<span class="line">        }</span>
<span class="line">        .info div {</span>
<span class="line">            clear: both;</span>
<span class="line">            margin: 5px 10px;</span>
<span class="line">        }</span>
<span class="line">        .info span {</span>
<span class="line">            margin-right: 25px;</span>
<span class="line">        }</span>
<span class="line">        .info a {</span>
<span class="line">            text-decoration: none;</span>
<span class="line">            color: darkcyan;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;container&quot;&gt;</span>
<span class="line">        &lt;h1&gt;{{ subject.name }}学科的老师信息&lt;/h1&gt;</span>
<span class="line">        &lt;hr&gt;</span>
<span class="line">        {% if not teachers %}</span>
<span class="line">            &lt;h2&gt;暂无该学科老师信息&lt;/h2&gt;</span>
<span class="line">        {% endif %}</span>
<span class="line">        {% for teacher in teachers %}</span>
<span class="line">        &lt;div class=&quot;teacher&quot;&gt;</span>
<span class="line">            &lt;div class=&quot;photo&quot;&gt;</span>
<span class="line">                &lt;img src=&quot;/static/images/{{ teacher.photo }}&quot; height=&quot;140&quot; alt=&quot;&quot;&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            &lt;div class=&quot;info&quot;&gt;</span>
<span class="line">                &lt;div&gt;</span>
<span class="line">                    &lt;span&gt;&lt;strong&gt;姓名：{{ teacher.name }}&lt;/strong&gt;&lt;/span&gt;</span>
<span class="line">                    &lt;span&gt;性别：{{ teacher.sex | yesno:&#39;男,女&#39; }}&lt;/span&gt;</span>
<span class="line">                    &lt;span&gt;出生日期：{{ teacher.birth }}&lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;intro&quot;&gt;{{ teacher.intro }}&lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;comment&quot;&gt;</span>
<span class="line">                    &lt;a href=&quot;/praise/?tno={{ teacher.no }}&quot;&gt;好评&lt;/a&gt;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    (&lt;strong&gt;{{ teacher.good_count }}&lt;/strong&gt;)</span>
<span class="line">                    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    &lt;a href=&quot;/criticize/?tno={{ teacher.no }}&quot;&gt;差评&lt;/a&gt;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    (&lt;strong&gt;{{ teacher.bad_count }}&lt;/strong&gt;)</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        {% endfor %}</span>
<span class="line">        &lt;a href=&quot;/&quot;&gt;返回首页&lt;/a&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        $(() =&gt; {</span>
<span class="line">            $(&#39;.comment&gt;a&#39;).on(&#39;click&#39;, (evt) =&gt; {</span>
<span class="line">                evt.preventDefault()</span>
<span class="line">                let url = $(evt.target).attr(&#39;href&#39;)</span>
<span class="line">                $.getJSON(url, (json) =&gt; {</span>
<span class="line">                    if (json.code == 20000) {</span>
<span class="line">                        $(evt.target).next().text(json.count)</span>
<span class="line">                    } else {</span>
<span class="line">                        alert(json.mesg)</span>
<span class="line">                    }</span>
<span class="line">                })</span>
<span class="line">            })</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的前端代码中，使用了jQuery库封装的<code>getJSON</code>方法向服务器发送异步请求，如果不熟悉前端的jQuery库，可以参考<a href="https://www.runoob.com/manual/jquery/" target="_blank" rel="noopener noreferrer">《jQuery API手册》</a>。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>到此为止，这个投票项目的核心功能已然完成，在下面的章节中我们会要求用户必须登录才能投票，没有账号的用户可以通过注册功能注册一个账号。</p>`,29),p=[d];function r(v,o){return a(),s("div",null,p)}const m=n(c,[["render",r],["__file","48.静态资源和Ajax请求.html.vue"]]),b=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/48.%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E5%92%8CAjax%E8%AF%B7%E6%B1%82.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"静态资源和Ajax请求","slug":"静态资源和ajax请求","link":"#静态资源和ajax请求","children":[{"level":3,"title":"加载静态资源","slug":"加载静态资源","link":"#加载静态资源","children":[]},{"level":3,"title":"Ajax概述","slug":"ajax概述","link":"#ajax概述","children":[]},{"level":3,"title":"用Ajax实现投票功能","slug":"用ajax实现投票功能","link":"#用ajax实现投票功能","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/48.静态资源和Ajax请求.md"}');export{m as comp,b as data};
