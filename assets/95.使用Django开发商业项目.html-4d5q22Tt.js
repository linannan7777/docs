import{_ as a,r as i,c as l,a as d,b as s,e as c,w as r,d as n,o as t}from"./app-BFPhRmaa.js";const p="/docs/assets/web-application-DFf9hx-G.png",o="/docs/assets/django_request_response_cycle-MaPr57hy.png",v="/docs/assets/mvc-Doy5KTZK.png",u="/docs/assets/http-request-CivjnFNS.png",m="/docs/assets/http-response-Bl78k1US.png",b="/docs/assets/click-jacking-Xjcd5IHc.png",h="/docs/assets/builtin-middlewares-CZORpKRL.png",g="/docs/assets/rbac-basic-WCcE9-z8.png",y="/docs/assets/rbac-full-Du5U_6jd.png",_="/docs/assets/celery_architecture-BNZPFAJ3.png",f="/docs/assets/selenium_ide-DkefWl22.png",S={},P=n('<h2 id="使用django开发商业项目" tabindex="-1"><a class="header-anchor" href="#使用django开发商业项目"><span>使用Django开发商业项目</span></a></h2><blockquote><p><strong>说明</strong>：本文的部分插图来自于《Python项目开发实战》和《精通Django》，这两本书中都包含了对Django框架精彩的讲解，有兴趣的读者可以自行购买阅读。</p></blockquote><h3 id="web应用" tabindex="-1"><a class="header-anchor" href="#web应用"><span>Web应用</span></a></h3><p>问题1：描述一个Web应用的工作流程。</p><p><img src="'+p+'" alt=""></p><p>问题2：描述项目的物理架构。（上图中补充负载均衡（反向代理）服务器、数据库服务器、文件服务器、邮件服务器、缓存服务器、防火墙等，而且每个节点都有可能是多节点构成的集群。当然，架构都是根据业务的需要一步步演进而不是一蹴而就的。）</p><p>问题3：描述Django项目的工作流程。（如下图所示）</p><p><img src="'+o+'" alt=""></p><h3 id="mvc架构模式" tabindex="-1"><a class="header-anchor" href="#mvc架构模式"><span>MVC架构模式</span></a></h3><p>问题1：为什么要使用MVC架构模式？（模型和视图解耦合）</p><p>问题2：MVC架构中每个部分的作用？（如下图所示）</p><p><img src="'+v+'" alt=""></p><h3 id="http请求和响应" tabindex="-1"><a class="header-anchor" href="#http请求和响应"><span>HTTP请求和响应</span></a></h3><h4 id="http请求-请求行-请求头-空行-消息体" tabindex="-1"><a class="header-anchor" href="#http请求-请求行-请求头-空行-消息体"><span>HTTP请求 = 请求行+请求头+空行+[消息体]</span></a></h4><p><img src="'+u+'" alt=""></p><h4 id="http响应-响应行-响应头-空行-消息体" tabindex="-1"><a class="header-anchor" href="#http响应-响应行-响应头-空行-消息体"><span>HTTP响应 = 响应行+响应头+空行+消息体</span></a></h4><p><img src="'+m+`" alt=""></p><ol><li><p><code>HTTPRequest</code>对象的属性和方法：</p><ul><li><code>method</code> - 获取请求方法</li><li><code>path</code> / <code>get_full_path()</code> - 获取请求路径/带查询字符串的路径</li><li><code>scheme</code> / <code>is_secure()</code> / <code>get_host()</code> / <code>get_port()</code> - 获取请求的协议/主机/端口</li><li><code>META</code> / <code>COOKIES</code> - 获取请求头/Cookie信息</li><li><code>GET</code> / <code>POST</code> / <code>FILES</code> - 获取GET或POST请求参数/上传的文件</li><li><code>get_signed_cookie()</code> - 获取带签名的Cookie</li><li><code>is_ajax()</code> - 是不是Ajax异步请求</li><li><code>body</code> / <code>content_type</code> / <code>encoding</code> - 获取请求的消息体（bytes流）/MIME类型/编码</li></ul></li><li><p>中间件添加的属性：</p><ul><li><code>session</code> / <code>user</code> / <code>site</code></li></ul></li><li><p><code>HttpResponse</code>对象的属性和方法：</p><ul><li><code>set_cookie()</code> / <code>set_signed_cookie()</code> / <code>delete_cookie()</code> - 添加/删除Cookie</li><li><code>__setitem__</code> / <code>__getitem__</code> / <code>__delitem__</code> - 添加/获取/删除响应头</li><li><code>charset</code> / <code>content</code> / <code>status_code</code> - 响应的字符集/消息体（bytes流）/状态码 <ul><li>1xx：请求已经收到，继续处理</li><li>2xx（成功）：请求已经成功收到、理解和接收。</li><li>3xx（重定向）：为完成请求要继续执行后续的操作。</li><li>4xx（客户端错误）：请求不正确或不能够被受理。</li><li>5xx（服务器错误）：服务器处理请求失败。</li></ul></li></ul></li><li><p><code>JsonResponse</code>（<code>HttpResponse</code>的子类型）对象</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.http import HttpResponse, JsonResponse</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; response = JsonResponse({&#39;foo&#39;: &#39;bar&#39;})</span>
<span class="line">&gt;&gt;&gt; response.content</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; response = JsonResponse([1, 2, 3], safe=False)</span>
<span class="line">&gt;&gt;&gt; response.content</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; response = HttpResponse(b&#39;...&#39;)</span>
<span class="line">&gt;&gt;&gt; response[&#39;cotent-type&#39;] = &#39;application/pdf&#39;;</span>
<span class="line">&gt;&gt;&gt; response[&#39;content-disposition&#39;] = &#39;inline; filename=&quot;xyz.pdf&quot;&#39;</span>
<span class="line">&gt;&gt;&gt; response[&#39;content-disposition&#39;] = &#39;attachment; filename=&quot;xyz.pdf&quot;&#39;</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; response.set_signed_cookie(&#39;foo&#39;, &#39;bar&#39;, salt=&#39;&#39;)</span>
<span class="line">&gt;&gt;&gt; response.status_code = 200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="数据模型-model" tabindex="-1"><a class="header-anchor" href="#数据模型-model"><span>数据模型(Model)</span></a></h3><p>问题1：关系型数据库表的设计应该注意哪些问题（范式理论和逆范式）？如何通过表来创建模型类（反向工程）？如何通过模型类来创建表（正向工程）？</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py makemigrations &lt;appname&gt;</span>
<span class="line">python manage.py migrate</span>
<span class="line"></span>
<span class="line">python manage.py inspectdb &gt; &lt;appname&gt;/models.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题2：关系型数据库中数据完整性指的是什么？什么时候需要牺牲数据完整性？（实体完整性/参照完整性/域完整性）</p><p>问题3：ORM是什么以及解决了什么问题？（对象模型-关系模型双向转换）</p><ol><li><p><code>Field</code>及其子类的属性：</p><ul><li>通用选项： <ul><li><code>db_column</code> / <code>db_tablespace</code></li><li><code>null</code> / <code>blank</code> / <code>default</code></li><li><code>primary_key</code></li><li><code>db_index</code> / <code>unqiue</code></li><li><code>choices</code> / <code>help_text</code> / <code>error_message</code> / <code>editable</code> / <code>hidden</code></li></ul></li><li>其他选项： <ul><li><code>CharField</code>: <code>max_length</code></li><li><code>DateField</code>: <code>auto_now</code> / <code>auto_now_add</code></li><li><code>DecimalField</code>: <code>max_digits</code> / <code>decimal_places</code></li><li><code>FileField</code>: <code>storage</code> / <code>upload_to</code></li><li><code>ImageField</code>: <code>height_field</code> / <code>width_field</code></li></ul></li></ul></li><li><p><code>ForeignKey</code>的属性：</p><ul><li><p>重要属性：</p><ul><li><p><code>db_constraint</code>（提升性能或者数据分片的情况可能需要设置为<code>False</code>）</p></li><li><p><code>on_delete</code></p><ul><li><code>CASCADE</code>：级联删除。</li></ul><ul><li><code>PROTECT</code>：抛出<code>ProtectedError</code>异常，阻止删除引用的对象。</li><li><code>SET_NULL</code>：把外键设置为<code>null</code>，当<code>null</code>属性被设置为<code>True</code>时才能这么做。</li><li><code>SET_DEFAULT</code>：把外键设置为默认值，提供了默认值才能这么做。</li></ul></li><li><p><code>related_name</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Dept(models.Model):</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Emp(models.Model):</span>
<span class="line">    dept = models.ForeignKey(related_name=&#39;+&#39;, ...)</span>
<span class="line">    </span>
<span class="line"> </span>
<span class="line">Dept.objects.get(no=10).emp_set.all()</span>
<span class="line">Emp.objects.filter(dept__no=10)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：<code>related_name</code>设置为<code>&#39;+&#39;</code>，可以防止一对多外键关联从“一”的一方查询“多”的一方。</p></blockquote></li></ul></li><li><p>其他属性：</p><ul><li><code>to_field</code> / <code>limit_choices_to</code> / <code>swappable</code></li></ul></li></ul></li><li><p><code>Model</code>的属性和方法</p><ul><li><p><code>objects</code> / <code>pk</code></p></li><li><p><code>save()</code> / <code>delete()</code></p></li><li><p><code>clean()</code> / <code>validate_unique()</code> / <code>full_clean()</code></p></li></ul></li><li><p><code>QuerySet</code>的方法</p><ul><li><p><code>get()</code> / <code>all()</code> / <code>values()</code></p><blockquote><p>说明：<code>values()</code>返回的<code>QuerySet</code>中不是模型对象而是字典</p></blockquote></li><li><p><code>count()</code> / <code>order_by()</code> / <code>exists()</code> / <code>reverse()</code></p></li><li><p><code>filter()</code> / <code>exclude()</code></p><ul><li><p><code>exact</code> / <code>iexact</code>：精确匹配/忽略大小写的精确匹配查询</p></li><li><p><code>contains</code> / <code>icontains</code> / <code>startswith / istartswith / endswith / iendswith</code>：基于<code>like</code>的模糊查询</p></li><li><p><code>in</code>：集合运算</p></li><li><p><code>gt</code> / <code>gte</code> / <code>lt</code> / <code>lte</code>：大于/大于等于/小于/小于等于关系运算</p></li><li><p><code>range</code>：指定范围查询（SQL中的<code>between…and…</code>）</p></li><li><p><code>year</code> / <code>month</code> / <code>day</code> / <code>week_day</code> / <code>hour</code> / <code>minute</code> / <code>second</code>：查询时间日期</p></li><li><p><code>isnull</code>：查询空值（<code>True</code>）或非空值（<code>False</code>）</p></li><li><p><code>search</code>：基于全文索引的全文检索</p></li><li><p><code>regex</code> / <code>iregex</code>：基于正则表达式的模糊匹配查询</p></li><li><p><code>aggregate()</code> / <code>annotate()</code></p></li><li><p><code>Avg</code> / <code>Count</code> / <code>Sum</code> / <code>Max</code> / <code>Min</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.db.models import Avg</span>
<span class="line">&gt;&gt;&gt; Emp.objects.aggregate(avg_sal=Avg(&#39;sal&#39;))</span>
<span class="line">(0.001) SELECT AVG(\`TbEmp\`.\`sal\`) AS \`avg_sal\` FROM \`TbEmp\`; args=()</span>
<span class="line">{&#39;avg_sal&#39;: 3521.4286}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; Emp.objects.values(&#39;dept&#39;).annotate(total=Count(&#39;dept&#39;))</span>
<span class="line">(0.001) SELECT \`TbEmp\`.\`dno\`, COUNT(\`TbEmp\`.\`dno\`) AS \`total\` FROM \`TbEmp\` GROUP BY \`TbEmp\`.\`dno\` ORDER BY NULL LIMIT 21; args=()</span>
<span class="line">&lt;QuerySet [{&#39;dept&#39;: 10, &#39;total&#39;: 4}, {&#39;dept&#39;: 20, &#39;total&#39;: 7}, {&#39;dept&#39;: 30, &#39;total&#39;: 3}]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>first()</code> / <code>last()</code></p><blockquote><p>说明：调用<code>first()</code>方法相当于用<code>[0]</code>对<code>QuerySet</code>进行切片。</p></blockquote></li><li><p><code>only()</code> / <code>defer()</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; Emp.objects.filter(pk=7800).only(&#39;name&#39;, &#39;sal&#39;)</span>
<span class="line">(0.001) SELECT \`TbEmp\`.\`empno\`, \`TbEmp\`.\`ename\`, \`TbEmp\`.\`sal\` FROM \`TbEmp\` WHERE \`TbEmp\`.\`empno\` = 7800 LIMIT 21; args=(7800,)</span>
<span class="line">&lt;QuerySet [&lt;Emp: Emp object (7800)&gt;]&gt;</span>
<span class="line">&gt;&gt;&gt; Emp.objects.filter(pk=7800).defer(&#39;name&#39;, &#39;sal&#39;)</span>
<span class="line">(0.001) SELECT \`TbEmp\`.\`empno\`, \`TbEmp\`.\`job\`, \`TbEmp\`.\`mgr\`, \`TbEmp\`.\`comm\`, \`TbEmp\`.\`dno\` FROM \`TbEmp\` WHERE \`TbEmp\`.\`empno\` = 7800 LIMIT 21; args=(7800,)</span>
<span class="line">&lt;QuerySet [&lt;Emp: Emp object (7800)&gt;]&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>create()</code> / <code>update()</code> / <code>raw()</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; Emp.objects.filter(dept__no=20).update(sal=F(&#39;sal&#39;) + 100)</span>
<span class="line">(0.011) UPDATE \`TbEmp\` SET \`sal\` = (\`TbEmp\`.\`sal\` + 100) WHERE \`TbEmp\`.\`dno\` = 20; args=(100, 20)</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; Emp.objects.raw(&#39;select empno, ename, job from TbEmp where dno=10&#39;)</span>
<span class="line">&lt;RawQuerySet: select empno, ename, job from TbEmp where dno=10&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>Q</code>对象和<code>F</code>对象</p><blockquote><p>说明：Q对象主要用来解决多条件组合的复杂查询；F对象主要用于更新数据。</p></blockquote><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.db.models import Q</span>
<span class="line">&gt;&gt;&gt; Emp.objects.filter(</span>
<span class="line">...     Q(name__startswith=&#39;张&#39;),</span>
<span class="line">...     Q(sal__lte=5000) | Q(comm__gte=1000)</span>
<span class="line">... ) # 查询名字以“张”开头且工资小于等于5000或补贴大于等于1000的员工</span>
<span class="line">&lt;QuerySet [&lt;Emp: 张三丰&gt;]&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from backend.models import Emp, Dept</span>
<span class="line">&gt;&gt;&gt; emps = Emp.objects.filter(dept__no=20)</span>
<span class="line">&gt;&gt;&gt; from django.db.models import F</span>
<span class="line">&gt;&gt;&gt; emps.update(sal=F(&#39;sal&#39;) + 100)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>原生SQL查询</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.db import connections</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">with connections[&#39;...&#39;].cursor() as cursor:</span>
<span class="line">    cursor.execute(&quot;UPDATE TbEmp SET sal=sal+10 WHERE dno=30&quot;)</span>
<span class="line">    cursor.execute(&quot;SELECT ename, job FROM TbEmp WHERE dno=10&quot;)</span>
<span class="line">    row = cursor.fetchall()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模型管理器</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class BookManager(models.Manager):</span>
<span class="line">    </span>
<span class="line">    def title_count(self, keyword):</span>
<span class="line">        return self.filter(title__icontains=keyword).count()</span>
<span class="line"></span>
<span class="line">class Book(models.Model):</span>
<span class="line">    </span>
<span class="line">    objects = BookManager()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="视图函数-controller" tabindex="-1"><a class="header-anchor" href="#视图函数-controller"><span>视图函数(Controller)</span></a></h3><h4 id="如何设计视图函数" tabindex="-1"><a class="header-anchor" href="#如何设计视图函数"><span>如何设计视图函数</span></a></h4><ol><li><p>用户的每个请求（用户故事）对应一个视图函数，当然也可以将用户要执行的业务逻辑封装到独立的函数中，也就是有专门的模块处理程序中的业务逻辑。</p></li><li><p>用户的请求可能会包含多个（持久化）操作，这些操作有可能需要设计成不可分割的原子性操作，那么这里就形成了事务的边界。</p><ul><li><p>事务的ACID特性。</p><ul><li>原子性（Atomicity）：事务中各项的操作要么全做要么全不做；</li><li>一致性（Consistentcy）：事务前后系统的状态是一致的；</li><li>隔离性（Isolation）：并发执行的事务无法看到彼此的中间状态；</li><li>持久性（Duration）：事务完成后所做的改动都会被持久化。</li></ul></li><li><p>事务隔离级别 - 设置事务隔离级别是为了数据库底层依据事务隔离级别为数据加上适当的锁。如果需要保证数据的强一致性，那么关系型数据库仍然是唯一的也是最好的选择，因为关系型数据库可以通过锁机制来保护数据。事务隔离级别从低到高依次是：Read Uncommitted（读未提交）、Read Committed（读提交）、Repeatable Read（可重复读）、Serializable（串行化）。事务隔离级别越高，数据并发访问的问题越少，但是性能越差；事务隔离级别越低，数据并发访问的问题越多，但是性能越好。</p></li><li><p>数据并发访问会产生5种问题（请参考我的<a href="https://blog.csdn.net/jackfrued/article/details/44921941" target="_blank" rel="noopener noreferrer">《Java面试题全集（上）》</a>第80题对该问题的讲解）：</p><ul><li>第1类丢失更新（A事务撤销覆盖B事务更新的数据）和第2类丢失更新（A事务提交覆盖B事务更新的数据）。</li><li>脏读（读脏数据）：一个事务读取到其他尚未提交的事务的数据。</li><li>不可重复读： 一个事务在读取它的查询结果时，被另一个事务更新了它的查询记录导致无法读到数据。</li><li>幻读：一个事务在读取它的查询结果时，发现读到了被另一个事务提交的新数据。</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">-- 设置全局默认的事务隔离级别</span>
<span class="line">set global transaction isolation level repeatable read;</span>
<span class="line">-- 设置当前会话的事务隔离级别</span>
<span class="line">set session transaction isolation level read committed;</span>
<span class="line">-- 查询当前会话的事务隔离级别</span>
<span class="line">select @@tx_isolation;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Django中的事务控制。</p><ul><li><p>给每个请求绑定事务环境（反模式）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ATOMIC_REQUESTS = True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>使用事务装饰器（简单易用） - 粗粒度（控制不够精细）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@transaction.non_atomic_requests</span>
<span class="line">@transaction.atomic</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用上下文语法（细粒度 - 事务控制的范围更加精准）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">with transaction.atomic():</span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关闭自动提交使用手动提交。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">AUTOCOMMIT = False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">transaction.commit()</span>
<span class="line">transaction.rollback()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ol><h4 id="url配置" tabindex="-1"><a class="header-anchor" href="#url配置"><span>URL配置</span></a></h4><ol><li><p>可以让部分URL只在调试模式下生效。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.conf import settings</span>
<span class="line"></span>
<span class="line">urlpatterns = [</span>
<span class="line">    ...</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">if settings.DEBUG:</span>
<span class="line">    urlpatterns += [ ... ]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以使用命名捕获组捕获路径参数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">url(r&#39;api/code/(?P&lt;mobile&gt;1[3-9]\\d{9})&#39;),</span>
<span class="line">path(&#39;api/code/&lt;str:mobile&gt;&#39;),</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>URL配置不关心请求使用的方法（一个视图函数可以处理不同的请求方式）。</p></li><li><p>如果使用<code>url</code>函数捕获的路径参数都是字符串，<code>path</code>函数可以指定路径参数类型。</p></li><li><p>可以使用<code>include</code>函数引入其他URL配置并指定<code>namespace</code>来解决命名冲突，捕获的参数会向下传递。</p></li><li><p>在<code>url</code>和<code>path</code>函数甚至是<code>include</code>函数中都可以用字典向视图传入额外的参数，如果参数与捕获的参数同名，则使用字典中的参数。</p></li><li><p>可以用<code>reverse</code>函数实现URL的逆向解析（从名字解析出URL），在模板中也可以用<code>{% url %}</code>实现同样的操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">path(&#39;&#39;, views.index, name=&#39;index&#39;)</span>
<span class="line"></span>
<span class="line">return redirect(reverse(&#39;index&#39;))</span>
<span class="line">return redirect(&#39;index&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="模板-view" tabindex="-1"><a class="header-anchor" href="#模板-view"><span>模板(View)</span></a></h3><h4 id="后端渲染" tabindex="-1"><a class="header-anchor" href="#后端渲染"><span>后端渲染</span></a></h4><ol><li><p>模板的配置和渲染函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">TEMPLATES = [</span>
<span class="line">    {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django.template.backends.django.DjangoTemplates&#39;,</span>
<span class="line">        &#39;DIRS&#39;: [os.path.join(BASE_DIR, &#39;templates&#39;), ],</span>
<span class="line">        &#39;APP_DIRS&#39;: True,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;context_processors&#39;: [</span>
<span class="line">                &#39;django.template.context_processors.debug&#39;,</span>
<span class="line">                &#39;django.template.context_processors.request&#39;,</span>
<span class="line">                &#39;django.contrib.auth.context_processors.auth&#39;,</span>
<span class="line">                &#39;django.contrib.messages.context_processors.messages&#39;,</span>
<span class="line">            ],</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">resp = render(request, &#39;index.html&#39;, {&#39;foo&#39;: ...})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>模板遇到变量名的查找顺序。</p><ul><li>字典查找（如：<code>foo[&#39;bar&#39;]</code>）</li><li>属性查找（如：<code>foo.bar</code>）</li><li>方法调用（如：<code>foo.bar()</code>） <ul><li>方法不能有必须传值的参数</li><li>在模板中不能够给方法传参</li><li>如果方法的<code>alters_data</code>被设置为<code>True</code>则不能调用该方法（避免误操作的风险），模型对象动态生成的<code>delete()</code>和<code>save()</code>方法都设定了<code>alters_data = True</code>。</li></ul></li><li>列表索引查找（如：<code>foo[0]</code>）</li></ul></li><li><p>模板标签的使用。</p><ul><li><code>{% if %}</code> / <code>{% else %}</code> / <code>{% endif %}</code></li><li><code>{% for %}</code> / <code>{% endfor %}</code></li><li><code>{% ifequal %}</code> / <code>{% endifequal %}</code> / <code>{% ifnotequal %}</code> / <code>{% endifnotequal %}</code></li><li><code>{# comment #}</code> / <code>{% comment %}</code> / <code>{% endcomment %}</code></li></ul></li><li><p>过滤器的使用。</p><ul><li><code>lower</code> / <code>upper</code> / <code>first</code> / <code>last</code> / <code>truncatewords</code> / <code>date </code>/ <code>time</code> / <code>length</code> / <code>pluralize</code> / <code>center</code> / <code>ljust</code> / <code>rjust</code> / <code>cut</code> / <code>urlencode</code> / <code>default_if_none</code> / <code>filesizeformat</code> / <code>join</code> / <code>slice</code> / <code>slugify</code></li></ul></li><li><p>模板的包含和继承。</p><ul><li><code>{% include %}</code> / <code>{% block %}</code></li><li><code>{% extends %}</code></li></ul></li><li><p>模板加载器（后面优化部分会讲到）。</p><ul><li><p>文件系统加载器</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">TEMPLATES = [{</span>
<span class="line">    &#39;BACKEND&#39;: &#39;django.template.backends.django.DjangoTemplates&#39;,</span>
<span class="line">    &#39;DIRS&#39;: [os.path.join(BASE_DIR, &#39;templates&#39;)],</span>
<span class="line">}]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用目录加载器</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">TEMPLATES = [{</span>
<span class="line">    &#39;BACKEND&#39;: &#39;django.template.backends.django.DjangoTemplates&#39;,</span>
<span class="line">    &#39;APP_DIRS&#39;: True,</span>
<span class="line">}]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h4 id="前端渲染" tabindex="-1"><a class="header-anchor" href="#前端渲染"><span>前端渲染</span></a></h4><ol><li>前端模板引擎：Handlebars / Mustache。</li><li>前端MV*框架。 <ul><li>MVC - AngularJS</li><li>MVVM(Model-View-ViewModel) - Vue.js</li></ul></li></ol><h4 id="其他视图" tabindex="-1"><a class="header-anchor" href="#其他视图"><span>其他视图</span></a></h4><ol><li><p>MIME（多用途Internet邮件扩展）类型 - 告知浏览器传输的数据类型。</p><table><thead><tr><th>Content-Type</th><th>说明</th></tr></thead><tbody><tr><td>application/json</td><td><a href="https://zh.wikipedia.org/wiki/JSON" target="_blank" rel="noopener noreferrer">JSON</a>（JavaScript Object Notation）</td></tr><tr><td>application/pdf</td><td><a href="https://zh.wikipedia.org/wiki/PDF" target="_blank" rel="noopener noreferrer">PDF</a>（Portable Document Format）</td></tr><tr><td>audio/mpeg</td><td><a href="https://zh.wikipedia.org/wiki/MP3" target="_blank" rel="noopener noreferrer">MP3</a>或其他<a href="https://zh.wikipedia.org/wiki/MPEG" target="_blank" rel="noopener noreferrer">MPEG</a>音频文件</td></tr><tr><td>audio/vnd.wave</td><td><a href="https://zh.wikipedia.org/wiki/WAV" target="_blank" rel="noopener noreferrer">WAV</a>音频文件</td></tr><tr><td>image/gif</td><td><a href="https://zh.wikipedia.org/wiki/GIF" target="_blank" rel="noopener noreferrer">GIF</a>图像文件</td></tr><tr><td>image/jpeg</td><td><a href="https://zh.wikipedia.org/wiki/JPEG" target="_blank" rel="noopener noreferrer">JPEG</a>图像文件</td></tr><tr><td>image/png</td><td><a href="https://zh.wikipedia.org/wiki/PNG" target="_blank" rel="noopener noreferrer">PNG</a>图像文件</td></tr><tr><td>text/html</td><td><a href="https://zh.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">HTML</a>文件</td></tr><tr><td>text/xml</td><td><a href="https://zh.wikipedia.org/wiki/XML" target="_blank" rel="noopener noreferrer">XML</a></td></tr><tr><td>video/mp4</td><td><a href="https://zh.wikipedia.org/wiki/MP4" target="_blank" rel="noopener noreferrer">MP4</a>视频文件</td></tr><tr><td>video/quicktime</td><td><a href="https://zh.wikipedia.org/wiki/QuickTime" target="_blank" rel="noopener noreferrer">QuickTime</a>视频文件</td></tr></tbody></table></li><li><p>如何处置生成的内容（inline / attachment）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from urllib.parse import quote</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; response[&#39;content-type&#39;] = &#39;application/pdf&#39;</span>
<span class="line">&gt;&gt;&gt; filename = quote(&#39;Python语言规范.pdf&#39;)</span>
<span class="line">&gt;&gt;&gt; filename</span>
<span class="line">&#39;Python%E8%AF%AD%E8%A8%80%E8%A7%84%E8%8C%83.pdf&#39;</span>
<span class="line">&gt;&gt;&gt; response[&#39;content-disposition&#39;] = f&#39;attachment; filename=&quot;{filename}&quot;&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>提醒：URL以及请求和响应头中的中文都应该处理成<a href="https://zh.wikipedia.org/zh-hans/%E7%99%BE%E5%88%86%E5%8F%B7%E7%BC%96%E7%A0%81" target="_blank" rel="noopener noreferrer">百分号编码</a>。</p></blockquote></li><li><p>生成CSV / Excel / PDF / 统计报表。</p><ul><li><p>向浏览器传输二进制数据。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from io import BytesIO</span>
<span class="line"></span>
<span class="line">buffer = BytesIO()</span>
<span class="line"></span>
<span class="line">resp = HttpResponse(content_type=&#39;...&#39;)</span>
<span class="line">resp[&#39;Content-Disposition&#39;] = &#39;attachment; filename=&quot;...&quot;&#39;</span>
<span class="line">resp.write(buffer.getvalue())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from io import BytesIO</span>
<span class="line"></span>
<span class="line">import xlwt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def get_style(name, color=0, bold=False, italic=False):</span>
<span class="line">    font = xlwt.Font()</span>
<span class="line">    font.name, font.colour_index, font.bold, font.italic = \\</span>
<span class="line">    	name, color, bold, italic</span>
<span class="line">    style = xlwt.XFStyle()</span>
<span class="line">    style.font = font</span>
<span class="line">    return style</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def export_emp_excel(request):</span>
<span class="line">    # 创建Excel工作簿(使用三方库xlwt)</span>
<span class="line">    workbook = xlwt.Workbook()</span>
<span class="line">    # 向工作簿中添加工作表</span>
<span class="line">    sheet = workbook.add_sheet(&#39;员工详细信息&#39;)</span>
<span class="line">    # 设置表头</span>
<span class="line">    titles = [&#39;编号&#39;, &#39;姓名&#39;, &#39;主管&#39;, &#39;职位&#39;, &#39;工资&#39;, &#39;部门名称&#39;]</span>
<span class="line">    for col, title in enumerate(titles):</span>
<span class="line">        sheet.write(0, col, title, get_style(&#39;HanziPenSC-W3&#39;, 2, True))</span>
<span class="line">    # 使用Django的ORM框架查询员工数据</span>
<span class="line">    emps = Emp.objects.all().select_related(&#39;dept&#39;).select_related(&#39;mgr&#39;)</span>
<span class="line">    cols = [&#39;no&#39;, &#39;name&#39;, &#39;mgr&#39;, &#39;job&#39;, &#39;sal&#39;, &#39;dept&#39;]</span>
<span class="line">    # 通过嵌套的循环将员工表的数据写入Excel工作表的单元格</span>
<span class="line">    for row, emp in enumerate(emps):</span>
<span class="line">        for col, prop in enumerate(cols):</span>
<span class="line">            val = getattr(emp, prop, &#39;&#39;)</span>
<span class="line">            if isinstance(val, (Dept, Emp)):</span>
<span class="line">                val = val.name</span>
<span class="line">            sheet.write(row + 1, col, val)</span>
<span class="line">    # 将Excel文件的二进制数据写入内存</span>
<span class="line">    buffer = BytesIO()</span>
<span class="line">    workbook.save(buffer)</span>
<span class="line">    # 通过HttpResponse对象向浏览器输出Excel文件</span>
<span class="line">    resp = HttpResponse(buffer.getvalue())</span>
<span class="line">    resp[&#39;content-type&#39;] = &#39;application/msexcel&#39;</span>
<span class="line">    # 如果文件名有中文需要处理成百分号编码</span>
<span class="line">    resp[&#39;content-disposition&#39;] = &#39;attachment; filename=&quot;detail.xls&quot;&#39;</span>
<span class="line">    return resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>大文件的流式处理：<code>StreamingHttpResponse</code>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def download_file(request):</span>
<span class="line">    file_stream = open(&#39;...&#39;, &#39;rb&#39;)</span>
<span class="line">    # 如果文件的二进制数据较大则最好用迭代器进行处理避免过多的占用服务器内存</span>
<span class="line">    file_iter = iter(lambda: file_stream.read(4096), b&#39;&#39;)</span>
<span class="line">    resp = StreamingHttpResponse(file_iter)</span>
<span class="line">    # 中文文件名要处理成百分号编码</span>
<span class="line">    filename = quote(&#39;...&#39;, &#39;utf-8&#39;)</span>
<span class="line">    resp[&#39;Content-Type&#39;] = &#39;...&#39;</span>
<span class="line">    resp[&#39;Content-Disposition&#39;] = f&#39;attachment; filename=&quot;{filename}&quot;&#39;</span>
<span class="line">    return resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：如果需要生成PDF文件，可以需要安装<code>reportlab</code>。另外，使用StreamingHttpResponse只能减少内存的开销，但是如果下载一个大文件会导致一个请求长时间占用服务器资源，比较好的做法还是把报表提前生成好（可以考虑使用定时任务），放在静态资源服务器或者是云存储服务器上以访问静态资源的方式访问。</p></blockquote></li><li><p><a href="http://echarts.baidu.com/" target="_blank" rel="noopener noreferrer">ECharts</a>或<a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a>。</p><ul><li>思路：后端只提供JSON格式的数据，前端JavaScript渲染生成图表。</li></ul><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def get_charts_data(request):</span>
<span class="line">    &quot;&quot;&quot;获取统计图表JSON数据&quot;&quot;&quot;</span>
<span class="line">    names = []</span>
<span class="line">    totals = []</span>
<span class="line">    # 通过connections获取指定数据库连接并创建游标对象</span>
<span class="line">    with connections[&#39;backend&#39;].cursor() as cursor:</span>
<span class="line">        # 在使用ORM框架时可以使用对象管理器的aggregate()和annotate()方法实现分组和聚合函数查询</span>
<span class="line">        # 执行原生SQL查询(如果ORM框架不能满足业务或性能需求)</span>
<span class="line">        cursor.execute(&#39;select dname, total from vw_dept_emp&#39;)</span>
<span class="line">        for row in cursor.fetchall():</span>
<span class="line">            names.append(row[0])</span>
<span class="line">            totals.append(row[1])</span>
<span class="line">    return JsonResponse({&#39;names&#39;: names, &#39;totals&#39;: totals})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;统计图表&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        #main {</span>
<span class="line">            width: 600px;</span>
<span class="line">            height: 400px;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;main&quot;&gt;&lt;/div&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        var myChart = echarts.init($(&#39;#main&#39;)[0]);</span>
<span class="line">        $.ajax({</span>
<span class="line">            &#39;url&#39;: &#39;charts_data&#39;,</span>
<span class="line">            &#39;type&#39;: &#39;get&#39;,</span>
<span class="line">            &#39;data&#39;: {},</span>
<span class="line">            &#39;dataType&#39;: &#39;json&#39;,</span>
<span class="line">            &#39;success&#39;: function(json) {</span>
<span class="line">                var option = {</span>
<span class="line">                    title: {</span>
<span class="line">                        text: &#39;员工分布统计图&#39;</span>
<span class="line">                    },</span>
<span class="line">                    tooltip: {},</span>
<span class="line">                    legend: {</span>
<span class="line">                        data:[&#39;人数&#39;]</span>
<span class="line">                    },</span>
<span class="line">                    xAxis: {</span>
<span class="line">                        data: json.names</span>
<span class="line">                    },</span>
<span class="line">                    yAxis: {},</span>
<span class="line">                    series: [{</span>
<span class="line">                        name: &#39;人数&#39;,</span>
<span class="line">                        type: &#39;bar&#39;,</span>
<span class="line">                        data: json.totals</span>
<span class="line">                    }]</span>
<span class="line">                };</span>
<span class="line">                myChart.setOption(option);</span>
<span class="line">            },</span>
<span class="line">            &#39;error&#39;: function() {}</span>
<span class="line">        });</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h3><p>问题1：中间件背后的设计理念是什么？（分离横切关注功能/拦截过滤器模式）</p><p>问题2：中间件有哪些不同的实现方式？（参考下面的代码）</p><p>问题3：描述Django内置的中间件及其执行顺序。（推荐阅读：<a href="https://docs.djangoproject.com/zh-hans/2.0/ref/middleware/#middleware-ordering" target="_blank" rel="noopener noreferrer">Django官方文档 - 中间件 - 中间件顺序</a>）</p><h4 id="激活中间件" tabindex="-1"><a class="header-anchor" href="#激活中间件"><span>激活中间件</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">MIDDLEWARE = [</span>
<span class="line">    &#39;django.middleware.security.SecurityMiddleware&#39;,</span>
<span class="line">    &#39;django.contrib.sessions.middleware.SessionMiddleware&#39;,</span>
<span class="line">    &#39;django.middleware.common.CommonMiddleware&#39;,</span>
<span class="line">    &#39;django.middleware.csrf.CsrfViewMiddleware&#39;,</span>
<span class="line">    &#39;django.contrib.auth.middleware.AuthenticationMiddleware&#39;,</span>
<span class="line">    &#39;django.contrib.messages.middleware.MessageMiddleware&#39;,</span>
<span class="line">    &#39;django.middleware.clickjacking.XFrameOptionsMiddleware&#39;,</span>
<span class="line">    &#39;common.middlewares.block_sms_middleware&#39;,</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义中间件" tabindex="-1"><a class="header-anchor" href="#自定义中间件"><span>自定义中间件</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def simple_middleware(get_response):</span>
<span class="line">    </span>
<span class="line">    def middleware(request, *args, **kwargs):</span>
<span class="line">        </span>
<span class="line">		response = get_response(request, *args, **kwargs)</span>
<span class="line">        </span>
<span class="line">		return response</span>
<span class="line">    </span>
<span class="line">    return middleware</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class MyMiddleware:</span>
<span class="line">        </span>
<span class="line">    def __init__(self, get_response):</span>
<span class="line">        self.get_response = get_response</span>
<span class="line">        </span>
<span class="line">    def __call__(self, request):</span>
<span class="line">        </span>
<span class="line">        response = self.get_response(request)</span>
<span class="line">       </span>
<span class="line">        return response</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class MyMiddleware(MiddlewareMixin):</span>
<span class="line">    </span>
<span class="line">    def __init__(self):</span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def process_request(request):</span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def process_view(request, view_func, view_args, view_kwargs):</span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def process_template_response(request, response):</span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def process_response(request, response):</span>
<span class="line">        pass</span>
<span class="line">    </span>
<span class="line">    def process_exception(request, exception):</span>
<span class="line">        pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置中间件" tabindex="-1"><a class="header-anchor" href="#内置中间件"><span>内置中间件</span></a></h4><ol><li><p>CommonMiddleware - 基础设置中间件</p><ul><li>DISALLOWED_USER_AGENTS - 不被允许的用户代理（浏览器）</li><li>APPEND_SLASH - 是否追加<code>/</code></li><li>USE_ETAG - 浏览器缓存相关</li></ul></li><li><p>SecurityMiddleware - 安全相关中间件</p><ul><li>SECURE_HSTS_SECONDS - 强制使用HTTPS的时间</li><li>SECURE_HSTS_INCLUDE_SUBDOMAINS - HTTPS是否覆盖子域名</li><li>SECURE_CONTENT_TYPE_NOSNIFF - 是否允许浏览器推断内容类型</li><li>SECURE_BROWSER_XSS_FILTER - 是否启用跨站脚本攻击过滤器</li><li>SECURE_SSL_REDIRECT - 是否重定向到HTTPS连接</li><li>SECURE_REDIRECT_EXEMPT - 免除重定向到HTTPS</li></ul></li><li><p>SessionMiddleware - 会话中间件</p></li><li><p>CsrfViewMiddleware - 防范跨站身份伪造中间件</p></li><li><p>XFrameOptionsMiddleware - 防范点击劫持攻击中间件</p><p><img src="`+b+'" alt=""></p></li></ol><p><img src="'+h+`" alt=""></p><h3 id="表单" tabindex="-1"><a class="header-anchor" href="#表单"><span>表单</span></a></h3><ol><li>用法：通常不要用来生成页面上的表单控件（耦合度太高不容易定制），主要用来验证数据。</li><li>Form的属性和方法： <ul><li><code>is_valid()</code> / <code>is_multipart()</code></li><li><code>errors</code> / <code>fields</code> / <code>is_bound</code> / <code>changed_data</code> / <code>cleaned_data</code></li><li><code>add_error()</code> / <code>has_errors()</code> / <code>non_field_errors()</code></li><li><code>clean()</code></li></ul></li><li>Form.errors的方法： <ul><li><code>as_data()</code> / <code>as_json()</code> / <code>get_json_data()</code></li></ul></li></ol><p>问题1：Django中的<code>Form</code>和<code>ModelForm</code>有什么作用？（通常不用来生成表单主要用来验证数据）</p><p>问题2：表单上传文件时应该注意哪些问题？（表单的设置、多文件上传、图片预览（FileReader）、Ajax上传文件、上传后的文件如何存储、调用云存储（如<a href="https://www.aliyun.com/product/oss" target="_blank" rel="noopener noreferrer">阿里云OSS</a>、<a href="https://www.qiniu.com/" target="_blank" rel="noopener noreferrer">七牛云</a>、<a href="https://leancloud.cn/storage/" target="_blank" rel="noopener noreferrer">LeanCloud</a>等））</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;form action=&quot;&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;file&quot; name=&quot;...&quot; multiple&gt;</span>
<span class="line">    &lt;input type=&quot;file&quot; name=&quot;foo&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;file&quot; name=&quot;foo&quot;&gt;</span>
<span class="line">    &lt;input type=&quot;file&quot; name=&quot;foo&quot;&gt;</span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：上传图片文件的预览效果可以通过HTML5的FileReader来实现。</p></blockquote><blockquote><p>说明：使用云存储通常是比自己配置分布式文件系统这种方式更靠谱的做法，而且云存储通常成本并不太高，不仅如此大多数云存储还提供了如图片剪裁、生成水印、视频转码、CDN等服务。如果要自己做上传的视频文件转码，需要安装三方库ffmpeg，在程序中调用该三方库可以实现转码。</p></blockquote><h3 id="cookie和session" tabindex="-1"><a class="header-anchor" href="#cookie和session"><span>Cookie和Session</span></a></h3><p>问题1：使用Cookie能解决什么问题？（用户跟踪，解决HTTP协议无状态问题）</p><ol><li><p>URL重写</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">http://www.abc.com/path/resource?foo=bar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>隐藏域（隐式表单域）- 埋点</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;form action=&quot;&quot; method=&quot;post&quot;&gt;</span>
<span class="line"></span>
<span class="line">    &lt;input type=&quot;hidden&quot; name=&quot;foo&quot; value=&quot;bar&quot;&gt;</span>
<span class="line">    </span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Cookie - 浏览器中的临时文件（文本文件）- BASE64</p></li></ol><p>问题2：Cookie和Session之间关系是什么？（Session的标识通过Cookie保存和传输）</p><h4 id="session的配置" tabindex="-1"><a class="header-anchor" href="#session的配置"><span>Session的配置</span></a></h4><ol><li><p>Session对应的中间件：<code>django.contrib.sessions.middleware.SessionMiddleware</code>。</p></li><li><p>Session引擎。</p><ul><li><p>基于数据库（默认方式）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    &#39;django.contrib.sessions&#39;,</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基于缓存（推荐使用）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SESSION_ENGINE = &#39;django.contrib.sessions.backends.cache&#39;</span>
<span class="line">SESSION_CACHE_ALIAS = &#39;session&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基于文件（基本不考虑）</p></li><li><p>基于Cookie（不靠谱）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SESSION_ENGINE = &#39;django.contrib.sessions.backends.signed_cookies&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p>Cookie相关的配置。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SESSION_COOKIE_NAME = &#39;djang_session_id&#39;</span>
<span class="line">SESSION_COOKIE_AGE = 1209600</span>
<span class="line"># 如果设置为True，Cookie就是基于浏览器窗口的Cookie，不会持久化</span>
<span class="line">SESSION_EXPIRE_AT_BROWSER_CLOSE = False </span>
<span class="line">SESSION_SAVE_EVERY_REQUEST = False</span>
<span class="line">SESSION_COOKIE_HTTPONLY = True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>session的属性和方法。</p><ul><li><code>session_key</code> / <code>session_data</code> / <code>expire_date</code></li><li><code>__getitem__</code> / <code>__setitem__</code> / <code>__delitem__</code> / <code>__contains__</code></li><li><code>set_expiry()</code> / <code>get_expiry_age()</code> / <code>get_expiry_date()</code> - 设置/获取会话超期时间</li><li><code>flush()</code> - 销毁会话</li><li><code>set_test_cookie()</code> / <code>test_cookie_worked()</code> / <code>delete_test_cookie()</code> - 测试浏览器是否支持Cookie（提示用户如果浏览器禁用Cookie可能会影响网站的使用）</li></ul></li><li><p>session的序列化。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SESSION_SERIALIZER = &#39;django.contrib.sessions.serializers.JSONSerializer&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>JSONSerializer（1.6及以后默认）- 如果想将自定义的对象放到session中，会遇到“Object of type &#39;XXX&#39; is not JSON serializable”的问题（如果配置使用Redis保存Session，django-redis使用了Pickle序列化，这个问题就不存在了）。</p></li><li><p>PickleSerializer（1.6以前的默认）- 因为安全问题不推荐使用，但是只要不去反序列化用户构造的恶意的Payload其实也没有什么风险。关于这种方式的安全漏洞，可以参考《<a href="http://www.polaris-lab.com/index.php/archives/178/" target="_blank" rel="noopener noreferrer">Python Pickle的任意代码执行漏洞实践和Payload构造》</a>一文或《软件架构-Python语言实现》上关于这个问题的讲解。</p><blockquote><p>说明：如果使用了django_redis整合Redis作为session的存储引擎，那么由于django_redis又封装了一个PickleSerializer来提供序列化，所以不会存在上述的问题，且Redis中保存的value是pickle序列化之后的结果。</p></blockquote></li></ul></li></ol><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存"><span>缓存</span></a></h3><h4 id="配置缓存" tabindex="-1"><a class="header-anchor" href="#配置缓存"><span>配置缓存</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">CACHES = {</span>
<span class="line">    # 默认缓存</span>
<span class="line">    &#39;default&#39;: {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django_redis.cache.RedisCache&#39;,</span>
<span class="line">        &#39;LOCATION&#39;: [</span>
<span class="line">            &#39;redis://1.2.3.4:6379/0&#39;,</span>
<span class="line">        ],</span>
<span class="line">        &#39;KEY_PREFIX&#39;: &#39;teamproject&#39;,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;CLIENT_CLASS&#39;: &#39;django_redis.client.DefaultClient&#39;,</span>
<span class="line">            &#39;CONNECTION_POOL_KWARGS&#39;: {</span>
<span class="line">                &#39;max_connections&#39;: 1000,</span>
<span class="line">            },</span>
<span class="line">            &#39;PASSWORD&#39;: &#39;yourpass&#39;,</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    # 页面缓存</span>
<span class="line">    &#39;page&#39;: {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django_redis.cache.RedisCache&#39;,</span>
<span class="line">        &#39;LOCATION&#39;: [</span>
<span class="line">            &#39;redis://1.2.3.4:6379/1&#39;,</span>
<span class="line">        ],</span>
<span class="line">        &#39;KEY_PREFIX&#39;: &#39;teamproject:page&#39;,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;CLIENT_CLASS&#39;: &#39;django_redis.client.DefaultClient&#39;,</span>
<span class="line">            &#39;CONNECTION_POOL_KWARGS&#39;: {</span>
<span class="line">                &#39;max_connections&#39;: 500,</span>
<span class="line">            },</span>
<span class="line">            &#39;PASSWORD&#39;: &#39;yourpass&#39;,</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    # 会话缓存</span>
<span class="line">    &#39;session&#39;: {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django_redis.cache.RedisCache&#39;,</span>
<span class="line">        &#39;LOCATION&#39;: [</span>
<span class="line">            &#39;redis://1.2.3.4:6379/2&#39;,</span>
<span class="line">        ],</span>
<span class="line">        &#39;KEY_PREFIX&#39;: &#39;teamproject:session&#39;,</span>
<span class="line">        &#39;TIMEOUT&#39;: 1209600,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;CLIENT_CLASS&#39;: &#39;django_redis.client.DefaultClient&#39;,</span>
<span class="line">            &#39;CONNECTION_POOL_KWARGS&#39;: {</span>
<span class="line">                &#39;max_connections&#39;: 2000,</span>
<span class="line">            },</span>
<span class="line">            &#39;PASSWORD&#39;: &#39;yourpass&#39;,</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    # 接口数据缓存</span>
<span class="line">    &#39;api&#39;: {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django_redis.cache.RedisCache&#39;,</span>
<span class="line">        &#39;LOCATION&#39;: [</span>
<span class="line">            &#39;redis://1.2.3.4:6379/3&#39;,</span>
<span class="line">        ],</span>
<span class="line">        &#39;KEY_PREFIX&#39;: &#39;teamproject:api&#39;,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;CLIENT_CLASS&#39;: &#39;django_redis.client.DefaultClient&#39;,</span>
<span class="line">            &#39;CONNECTION_POOL_KWARGS&#39;: {</span>
<span class="line">                &#39;max_connections&#39;: 500,</span>
<span class="line">            },</span>
<span class="line">            &#39;PASSWORD&#39;: &#39;yourpass&#39;,</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：通过Redis底层提供的多个数据库来隔离缓存数据有助于缓存数据的管理。如果配置了Redis的主从复制（读写分离），LOCATION列表中可以配置多个Redis连接，第一个被视为master用来进行写操作，后面的被视为slave用来进行读操作。</p></blockquote><h4 id="全站缓存" tabindex="-1"><a class="header-anchor" href="#全站缓存"><span>全站缓存</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">MIDDLEWARE_CLASSES = [</span>
<span class="line">    &#39;django.middleware.cache.UpdateCacheMiddleware&#39;,</span>
<span class="line">    ...</span>
<span class="line">    &#39;django.middleware.common.CommonMiddleware&#39;,</span>
<span class="line">    ...</span>
<span class="line">    &#39;django.middleware.cache.FetchFromCacheMiddleware&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">CACHE_MIDDLEWARE_ALIAS = &#39;default&#39;</span>
<span class="line">CACHE_MIDDLEWARE_SECONDS = 300</span>
<span class="line">CACHE_MIDDLEWARE_KEY_PREFIX = &#39;djang:cache&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="视图层缓存" tabindex="-1"><a class="header-anchor" href="#视图层缓存"><span>视图层缓存</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.views.decorators.cache import cache_page</span>
<span class="line">from django.views.decorators.vary import vary_on_cookie</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@cache_page(timeout=60 * 15, cache=&#39;page&#39;)</span>
<span class="line">@vary_on_cookie</span>
<span class="line">def my_view(request):</span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.views.decorators.cache import cache_page</span>
<span class="line"></span>
<span class="line">urlpatterns = [</span>
<span class="line">    url(r&#39;^foo/([0-9]{1,2})/$&#39;, cache_page(60 * 15)(my_view)),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他内容" tabindex="-1"><a class="header-anchor" href="#其他内容"><span>其他内容</span></a></h4><ol><li><p>模板片段缓存。</p><ul><li><code>{% load cache %}</code></li><li><code>{% cache %}</code> / <code>{% endcache %}</code></li></ul></li><li><p>使用底层API访问缓存。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.core.cache import cache</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; cache.set(&#39;my_key&#39;, &#39;hello, world!&#39;, 30)</span>
<span class="line">&gt;&gt;&gt; cache.get(&#39;my_key&#39;)</span>
<span class="line">&gt;&gt;&gt; cache.clear()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.core.cache import caches</span>
<span class="line">&gt;&gt;&gt; cache1 = caches[&#39;page&#39;]</span>
<span class="line">&gt;&gt;&gt; cache2 = caches[&#39;page&#39;]</span>
<span class="line">&gt;&gt;&gt; cache1 is cache2</span>
<span class="line">True</span>
<span class="line">&gt;&gt;&gt; cache3 = caches[&#39;session&#39;]</span>
<span class="line">&gt;&gt;&gt; cache2 is cache3</span>
<span class="line">False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django_redis import get_redis_connection</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; redis_client = get_redis_connection()</span>
<span class="line">&gt;&gt;&gt; redis_client.hgetall()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h3><h4 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别"><span>日志级别</span></a></h4><p>NOTSET &lt; DEBUG &lt; INFO &lt; WARNING &lt; ERROR &lt; CRITICAL</p><h4 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置"><span>日志配置</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">LOGGING = {</span>
<span class="line">    &#39;version&#39;: 1,</span>
<span class="line">    &#39;disable_existing_loggers&#39;: False,</span>
<span class="line">    # 配置日志格式化器</span>
<span class="line">    &#39;formatters&#39;: {</span>
<span class="line">        &#39;simple&#39;: {</span>
<span class="line">            &#39;format&#39;: &#39;%(asctime)s %(module)s.%(funcName)s: %(message)s&#39;,</span>
<span class="line">            &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span>
<span class="line">        },</span>
<span class="line">        &#39;verbose&#39;: {</span>
<span class="line">            &#39;format&#39;: &#39;%(asctime)s %(levelname)s [%(process)d-%(threadName)s] &#39;</span>
<span class="line">                      &#39;%(module)s.%(funcName)s line %(lineno)d: %(message)s&#39;,</span>
<span class="line">            &#39;datefmt&#39;: &#39;%Y-%m-%d %H:%M:%S&#39;,</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    # 配置日志过滤器</span>
<span class="line">    &#39;filters&#39;: {</span>
<span class="line">        &#39;require_debug_true&#39;: {</span>
<span class="line">            &#39;()&#39;: &#39;django.utils.log.RequireDebugTrue&#39;,</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">    # 配置日志处理器</span>
<span class="line">    &#39;handlers&#39;: {</span>
<span class="line">        &#39;console&#39;: {</span>
<span class="line">            &#39;class&#39;: &#39;logging.StreamHandler&#39;,</span>
<span class="line">            &#39;level&#39;: &#39;DEBUG&#39;,</span>
<span class="line">            &#39;filters&#39;: [&#39;require_debug_true&#39;],</span>
<span class="line">            &#39;formatter&#39;: &#39;simple&#39;,</span>
<span class="line">        },</span>
<span class="line">        &#39;file1&#39;: {</span>
<span class="line">            &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span>
<span class="line">            &#39;filename&#39;: &#39;access.log&#39;,</span>
<span class="line">            &#39;when&#39;: &#39;W0&#39;,</span>
<span class="line">            &#39;backupCount&#39;: 12,</span>
<span class="line">            &#39;formatter&#39;: &#39;simple&#39;,</span>
<span class="line">            &#39;level&#39;: &#39;INFO&#39;,</span>
<span class="line">        },</span>
<span class="line">        &#39;file2&#39;: {</span>
<span class="line">            &#39;class&#39;: &#39;logging.handlers.TimedRotatingFileHandler&#39;,</span>
<span class="line">            &#39;filename&#39;: &#39;error.log&#39;,</span>
<span class="line">            &#39;when&#39;: &#39;D&#39;,</span>
<span class="line">            &#39;backupCount&#39;: 31,</span>
<span class="line">            &#39;formatter&#39;: &#39;verbose&#39;,</span>
<span class="line">            &#39;level&#39;: &#39;WARNING&#39;,</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">    # 配置日志器</span>
<span class="line">    &#39;loggers&#39;: {</span>
<span class="line">        &#39;django&#39;: {</span>
<span class="line">            &#39;handlers&#39;: [&#39;console&#39;, &#39;file1&#39;, &#39;file2&#39;],</span>
<span class="line">            &#39;propagate&#39;: True,</span>
<span class="line">            &#39;level&#39;: &#39;DEBUG&#39;,</span>
<span class="line">        },</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://docs.djangoproject.com/zh-hans/2.0/topics/logging/#s-examples" target="_blank" rel="noopener noreferrer">日志配置官方示例</a>。</p><h4 id="日志分析" tabindex="-1"><a class="header-anchor" href="#日志分析"><span>日志分析</span></a></h4><ol><li><p>Linux相关命令：head、tail、grep、awk、uniq、sort</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">tail -10000 access.log | awk &#39;{print $1}&#39; | uniq -c | sort -r</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>实时日志文件分析：Python + 正则表达式 + Crontab</p></li><li><p><a href="https://github.com/jkklee/web_log_analyse" target="_blank" rel="noopener noreferrer">《Python日志分析工具》</a>。</p></li><li><p><a href="https://www.ibm.com/developerworks/cn/opensource/os-cn-elk/index.html" target="_blank" rel="noopener noreferrer">《集中式日志系统ELK》</a>。</p><ul><li>ElasticSearch：搜索引擎，实现全文检索。</li><li>Logstash：负责从指定节点收集日志。</li><li>Kibana：日志可视化工具。</li></ul></li><li><p>大数据日志处理：Flume+Kafka日志采集、Storm / Spark实时数据处理、Impala实时查询。</p></li></ol><h3 id="restful" tabindex="-1"><a class="header-anchor" href="#restful"><span>RESTful</span></a></h3><p>问题1：RESTful架构到底解决了什么问题？（URL具有自描述性、资源表述与视图的解耦和、互操作性利用构建微服务以及集成第三方系统、无状态性提高水平扩展能力）</p><p>问题2：项目在使用RESTful架构时有没有遇到一些问题或隐患？（对资源访问的限制、资源从属关系检查、避免泄露业务信息、防范可能的攻击）</p><blockquote><p>补充：下面的几个和安全性相关的响应头在前面讲中间件的时候提到过的。</p><ul><li>X-Frame-Options: DENY</li><li>X-Content-Type-Options: nosniff</li><li>X-XSS-Protection: 1; mode=block;</li><li>Strict­-Transport-­Security: max-age=31536000;</li></ul></blockquote><p>问题3：如何保护API中的敏感信息以及防范重放攻击？（摘要和令牌）</p><p>推荐阅读：<a href="https://help.aliyun.com/knowledge_detail/50041.html" target="_blank" rel="noopener noreferrer">《如何有效防止API的重放攻击》</a>。</p><h4 id="使用djangorestframework" tabindex="-1"><a class="header-anchor" href="#使用djangorestframework"><span>使用djangorestframework</span></a></h4><p>安装djangorestfrmework（为了描述方便，以下统一简称为DRF）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install djangorestframework</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置DRF。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    </span>
<span class="line">    &#39;rest_framework&#39;,</span>
<span class="line">    </span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">REST_FRAMEWORK = {</span>
<span class="line">    # 配置默认页面大小</span>
<span class="line">    &#39;PAGE_SIZE&#39;: 10,</span>
<span class="line">    # 配置默认的分页类</span>
<span class="line">    &#39;DEFAULT_PAGINATION_CLASS&#39;: &#39;rest_framework.pagination.PageNumberPagination&#39;,</span>
<span class="line">    # 配置异常处理器</span>
<span class="line">    # &#39;EXCEPTION_HANDLER&#39;: &#39;api.exceptions.exception_handler&#39;,</span>
<span class="line">    # 配置默认解析器</span>
<span class="line">    # &#39;DEFAULT_PARSER_CLASSES&#39;: (</span>
<span class="line">    #     &#39;rest_framework.parsers.JSONParser&#39;,</span>
<span class="line">    #     &#39;rest_framework.parsers.FormParser&#39;,</span>
<span class="line">    #     &#39;rest_framework.parsers.MultiPartParser&#39;,</span>
<span class="line">    # ),</span>
<span class="line">    # 配置默认限流类</span>
<span class="line">    # &#39;DEFAULT_THROTTLE_CLASSES&#39;: (),</span>
<span class="line">    # 配置默认授权类</span>
<span class="line">    # &#39;DEFAULT_PERMISSION_CLASSES&#39;: (</span>
<span class="line">    #     &#39;rest_framework.permissions.IsAuthenticated&#39;,</span>
<span class="line">    # ),</span>
<span class="line">    # 配置默认认证类</span>
<span class="line">    # &#39;DEFAULT_AUTHENTICATION_CLASSES&#39;: (</span>
<span class="line">    #     &#39;rest_framework_jwt.authentication.JSONWebTokenAuthentication&#39;,</span>
<span class="line">    # ),</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写序列化器" tabindex="-1"><a class="header-anchor" href="#编写序列化器"><span>编写序列化器</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework import serializers</span>
<span class="line">from rest_framework.serializers import ModelSerializer</span>
<span class="line"></span>
<span class="line">from common.models import District, HouseType, Estate, Agent</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class DistrictSerializer(ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = District</span>
<span class="line">        fields = (&#39;distid&#39;, &#39;name&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class HouseTypeSerializer(ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = HouseType</span>
<span class="line">        fields = &#39;__all__&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class AgentSerializer(ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Agent</span>
<span class="line">        fields = (&#39;agentid&#39;, &#39;name&#39;, &#39;tel&#39;, &#39;servstar&#39;, &#39;certificated&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class EstateSerializer(ModelSerializer):</span>
<span class="line">    district = serializers.SerializerMethodField()</span>
<span class="line">    agents = serializers.SerializerMethodField()</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def get_agents(estate):</span>
<span class="line">        return AgentSerializer(estate.agents, many=True).data</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def get_district(estate):</span>
<span class="line">        return DistrictSerializer(estate.district).data</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Estate</span>
<span class="line">        fields = &#39;__all__&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法1-使用装饰器" tabindex="-1"><a class="header-anchor" href="#方法1-使用装饰器"><span>方法1：使用装饰器</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@api_view([&#39;GET&#39;])</span>
<span class="line">@cache_page(timeout=None, cache=&#39;api&#39;)</span>
<span class="line">def provinces(request):</span>
<span class="line">    queryset = District.objects.filter(parent__isnull=True)</span>
<span class="line">    serializer = DistrictSerializer(queryset, many=True)</span>
<span class="line">    return Response(serializer.data)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@api_view([&#39;GET&#39;])</span>
<span class="line">@cache_page(timeout=300, cache=&#39;api&#39;)</span>
<span class="line">def cities(request, provid):</span>
<span class="line">    queryset = District.objects.filter(parent__distid=provid)</span>
<span class="line">    serializer = DistrictSerializer(queryset, many=True)</span>
<span class="line">    return Response(serializer.data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;districts/&#39;, views.provinces, name=&#39;districts&#39;),</span>
<span class="line">    path(&#39;districts/&lt;int:provid&gt;/&#39;, views.cities, name=&#39;cities&#39;),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：上面使用了Django自带的视图装饰器（@cache_page）来实现对API接口返回数据的缓存。</p></blockquote><h4 id="方法2-使用apiview及其子类" tabindex="-1"><a class="header-anchor" href="#方法2-使用apiview及其子类"><span>方法2：使用APIView及其子类</span></a></h4><p>更好的复用代码，不要重“复发明轮子”。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class HouseTypeApiView(CacheResponseMixin, ListAPIView):</span>
<span class="line">    queryset = HouseType.objects.all()</span>
<span class="line">    serializer_class = HouseTypeSerializer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;housetypes/&#39;, views.HouseTypeApiView.as_view(), name=&#39;housetypes&#39;),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：上面使用了drf_extensions提供的CacheResponseMixin混入类实现了对接口数据的缓存。如果重写了获取数据的方法，可以使用drf_extensions提供的@cache_response来实现对接口数据的缓存，也可以用自定义的函数来生成缓存中的key。当然还有一个选择就是通过Django提供的@method_decorator装饰器，将@cache_page装饰器处理为装饰方法的装饰器，这样也能提供使用缓存服务。</p></blockquote><p><code>drf-extensions</code>配置如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 配置DRF扩展来支持缓存API接口调用结果</span>
<span class="line">REST_FRAMEWORK_EXTENSIONS = {</span>
<span class="line">    &#39;DEFAULT_CACHE_RESPONSE_TIMEOUT&#39;: 300,</span>
<span class="line">    &#39;DEFAULT_USE_CACHE&#39;: &#39;default&#39;,</span>
<span class="line">    # 配置默认缓存单个对象的key函数</span>
<span class="line">    &#39;DEFAULT_OBJECT_CACHE_KEY_FUNC&#39;: &#39;rest_framework_extensions.utils.default_object_cache_key_func&#39;,</span>
<span class="line">    # 配置默认缓存对象列表的key函数</span>
<span class="line">    &#39;DEFAULT_LIST_CACHE_KEY_FUNC&#39;: &#39;rest_framework_extensions.utils.default_list_cache_key_func&#39;,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法3-使用viewset及其子类" tabindex="-1"><a class="header-anchor" href="#方法3-使用viewset及其子类"><span>方法3：使用ViewSet及其子类</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class HouseTypeViewSet(CacheResponseMixin, viewsets.ModelViewSet):</span>
<span class="line">    queryset = HouseType.objects.all()</span>
<span class="line">    serializer_class = HouseTypeSerializer</span>
<span class="line">    pagination_class = None</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">router = DefaultRouter()</span>
<span class="line">router.register(&#39;housetypes&#39;, views.HouseTypeViewSet)</span>
<span class="line"></span>
<span class="line">urlpatterns += router.urls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>djangorestframework提供了基于Bootstrap定制的页面来显示接口返回的JSON数据，当然也可以使用<a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer">POSTMAN</a>这样的工具对API接口进行测试。</p><h4 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h4><p>在这里顺便提一下跟前端相关的几个问题。</p><p>问题1：如何让浏览器能够发起DELETE/PUT/PATCH？</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;form method=&quot;post&quot;&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;input type=&quot;hidden&quot; name=&quot;_method&quot; value=&quot;delete&quot;&gt;</span>
<span class="line">    </span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">if request.method == &#39;POST&#39; and &#39;_method&#39; in request.POST:</span>
<span class="line">    request.method = request.POST[&#39;_method&#39;].upper()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script&gt;</span>
<span class="line">    $.ajax({</span>
<span class="line">        &#39;url&#39;: &#39;/api/provinces&#39;,</span>
<span class="line">        &#39;type&#39;: &#39;put&#39;,</span>
<span class="line">        &#39;data&#39;: {},</span>
<span class="line">        &#39;dataType&#39;: &#39;json&#39;,</span>
<span class="line">        &#39;success&#39;: function(json) {</span>
<span class="line">            // Web = 标签(内容) + CSS(显示) + JS(行为)</span>
<span class="line">            // JavaScript = ES + BOM + DOM</span>
<span class="line">            // DOM操作实现页面的局部刷新</span>
<span class="line">        },</span>
<span class="line">        &#39;error&#39;: function() {}</span>
<span class="line">    });</span>
<span class="line">    $.getJSON(&#39;/api/provinces&#39;, function(json) {</span>
<span class="line">        // DOM操作实现页面的局部刷新</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题2：如何解决多个JavaScript库之间某个定义（如$函数）冲突的问题？</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script src=&quot;js/abc.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    // $已经被后加载的JavaScript库占用了</span>
<span class="line">    // 但是可以直接用绑定在window对象上的jQuery去代替$</span>
<span class="line">    jQuery(function() {</span>
<span class="line">        jQuery(&#39;#okBtn&#39;).on(&#39;click&#39;, function() {});</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;script src=&quot;js/abc.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    // 将$让出给其他的JavaScript库使用</span>
<span class="line">	jQuery.noConflict();</span>
<span class="line">	jQuery(function() {</span>
<span class="line">        jQuery(&#39;#okBtn&#39;).on(&#39;click&#39;, function() {});</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题3：jQuery对象与原生DOM对象之间如何转换？</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;button id=&quot;okBtn&quot;&gt;点我&lt;/button&gt;</span>
<span class="line">&lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    var btn = document.getElementById(&#39;okBtn&#39;);	// 原生JavaScript对象(使用相对麻烦)</span>
<span class="line">    var $btn = $(&#39;#okBtn&#39;);	// jQuery对象(拥有更多的属性和方法而且没有浏览器兼容性问题)</span>
<span class="line">    $btn.on(&#39;click&#39;, function() {});</span>
<span class="line">    // $(btn)可以将原生JavaScript对象转成jQuery对象</span>
<span class="line">    // $btn.get(0)或$btn[0]可以获得原生的JavaScript对象</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="过滤数据" tabindex="-1"><a class="header-anchor" href="#过滤数据"><span>过滤数据</span></a></h4><p>如果需要过滤数据（对数据接口设置筛选条件、排序条件等），可以使用<code>django-filter</code>三方库来实现。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install django-filter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    </span>
<span class="line">    &#39;django_filters&#39;,</span>
<span class="line"></span>
<span class="line">]</span>
<span class="line">REST_FRAMEWORK = {</span>
<span class="line">  	</span>
<span class="line">    &#39;DEFAULT_FILTER_BACKENDS&#39;: (</span>
<span class="line">        &#39;django_filters.rest_framework.DjangoFilterBackend&#39;,</span>
<span class="line">        &#39;rest_framework.filters.OrderingFilter&#39;,</span>
<span class="line">    ),</span>
<span class="line">    </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.utils.decorators import method_decorator</span>
<span class="line">from django.views.decorators.cache import cache_page</span>
<span class="line">from django_filters.rest_framework import DjangoFilterBackend</span>
<span class="line">from rest_framework.filters import OrderingFilter</span>
<span class="line">from rest_framework.generics import RetrieveAPIView, ListCreateAPIView</span>
<span class="line"></span>
<span class="line">from api.serializers import EstateSerializer</span>
<span class="line">from common.models import Estate</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@method_decorator(decorator=cache_page(timeout=120, cache=&#39;api&#39;, key_prefix=&#39;estates&#39;), name=&#39;get&#39;)</span>
<span class="line">class EstateView(RetrieveAPIView, ListCreateAPIView):</span>
<span class="line">    queryset = Estate.objects.all().select_related(&#39;district&#39;).prefetch_related(&#39;agents&#39;)</span>
<span class="line">    serializer_class = EstateSerializer</span>
<span class="line">    filter_backends = (DjangoFilterBackend, OrderingFilter)</span>
<span class="line">    filter_fields = (&#39;name&#39;, &#39;district&#39;)</span>
<span class="line">    ordering = (&#39;-hot&#39;, )</span>
<span class="line">    ordering_fields = (&#39;hot&#39;, &#39;estateid&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django_filters import rest_framework as drf</span>
<span class="line">from common.models import HouseInfo</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class HouseInfoFilter(drf.FilterSet):</span>
<span class="line">    &quot;&quot;&quot;自定义房源数据过滤器&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    title = drf.CharFilter(lookup_expr=&#39;starts&#39;)</span>
<span class="line">    dist = drf.NumberFilter(field_name=&#39;district&#39;)</span>
<span class="line">    min_price = drf.NumberFilter(field_name=&#39;price&#39;, lookup_expr=&#39;gte&#39;)</span>
<span class="line">    max_price = drf.NumberFilter(field_name=&#39;price&#39;, lookup_expr=&#39;lte&#39;)</span>
<span class="line">    type = drf.NumberFilter()</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = HouseInfo</span>
<span class="line">        fields = (&#39;title&#39;, &#39;district&#39;, &#39;min_price&#39;, &#39;max_price&#39;, &#39;type&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class HouseInfoViewSet(CacheResponseMixin, ReadOnlyModelViewSet):</span>
<span class="line">    queryset = HouseInfo.objects.all() \\</span>
<span class="line">        .select_related(&#39;type&#39;, &#39;district&#39;, &#39;estate&#39;, &#39;agent&#39;) \\</span>
<span class="line">        .prefetch_related(&#39;tags&#39;).order_by(&#39;-pubdate&#39;)</span>
<span class="line">    serializer_class = HouseInfoSerializer</span>
<span class="line">    filter_backends = (DjangoFilterBackend, OrderingFilter)</span>
<span class="line">    filterset_class = HouseInfoFilter</span>
<span class="line">    ordering = (&#39;price&#39;,)</span>
<span class="line">    ordering_fields = (&#39;price&#39;, &#39;area&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="身份认证" tabindex="-1"><a class="header-anchor" href="#身份认证"><span>身份认证</span></a></h4><p>查看DRF中APIView类的代码可以看出，DRF默认的认证方案是 <code>DEFAULT_AUTHENTICATION_CLASSES</code>，如果修改authentication_classes就可以自行定制身份认证的方案。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class APIView(View):</span>
<span class="line"></span>
<span class="line">    # The following policies may be set at either globally, or per-view.</span>
<span class="line">    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES</span>
<span class="line">    parser_classes = api_settings.DEFAULT_PARSER_CLASSES</span>
<span class="line">    authentication_classes = api_settings.DEFAULT_AUTHENTICATION_CLASSES</span>
<span class="line">    throttle_classes = api_settings.DEFAULT_THROTTLE_CLASSES</span>
<span class="line">    permission_classes = api_settings.DEFAULT_PERMISSION_CLASSES</span>
<span class="line">    content_negotiation_class = api_settings.DEFAULT_CONTENT_NEGOTIATION_CLASS</span>
<span class="line">    metadata_class = api_settings.DEFAULT_METADATA_CLASS</span>
<span class="line">    versioning_class = api_settings.DEFAULT_VERSIONING_CLASS</span>
<span class="line"></span>
<span class="line">   	# 此处省略下面的代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">DEFAULTS = {</span>
<span class="line">    # Base API policies</span>
<span class="line">    &#39;DEFAULT_RENDERER_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.renderers.JSONRenderer&#39;,</span>
<span class="line">        &#39;rest_framework.renderers.BrowsableAPIRenderer&#39;,</span>
<span class="line">    ),</span>
<span class="line">    &#39;DEFAULT_PARSER_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.parsers.JSONParser&#39;,</span>
<span class="line">        &#39;rest_framework.parsers.FormParser&#39;,</span>
<span class="line">        &#39;rest_framework.parsers.MultiPartParser&#39;</span>
<span class="line">    ),</span>
<span class="line">    &#39;DEFAULT_AUTHENTICATION_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.authentication.SessionAuthentication&#39;,</span>
<span class="line">        &#39;rest_framework.authentication.BasicAuthentication&#39;</span>
<span class="line">    ),</span>
<span class="line">    &#39;DEFAULT_PERMISSION_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.permissions.AllowAny&#39;,</span>
<span class="line">    ),</span>
<span class="line">    &#39;DEFAULT_THROTTLE_CLASSES&#39;: (),</span>
<span class="line">    &#39;DEFAULT_CONTENT_NEGOTIATION_CLASS&#39;: &#39;rest_framework.negotiation.DefaultContentNegotiation&#39;,</span>
<span class="line">    &#39;DEFAULT_METADATA_CLASS&#39;: &#39;rest_framework.metadata.SimpleMetadata&#39;,</span>
<span class="line">    &#39;DEFAULT_VERSIONING_CLASS&#39;: None,</span>
<span class="line"></span>
<span class="line">    # 此处省略下面的代码</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义认证类，继承<code>BaseAuthentication</code>并重写<code>authenticate(self, request)</code>方法，通过请求中的userid和token来确定用户身份。如果认证成功，该方法应返回一个二元组（用户和令牌的信息），否则产生异常。也可以重写 <code>authenticate_header(self, request)</code>方法来返回一个字符串，该字符串将用于<code>HTTP 401 Unauthorized</code>响应中的WWW-Authenticate响应头的值。如果未重写该方法，那么当未经身份验证的请求被拒绝访问时，身份验证方案将返回<code>HTTP 403 Forbidden</code>响应。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class MyAuthentication(BaseAuthentication):</span>
<span class="line">    &quot;&quot;&quot;自定义用户身份认证类&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def authenticate(self, request):</span>
<span class="line">        try:</span>
<span class="line">            token = request.GET[&#39;token&#39;] or request.POST[&#39;token&#39;]</span>
<span class="line">            user_token = UserToken.objects.filter(token=token).first()</span>
<span class="line">            if user_token:</span>
<span class="line">                return user_token.user, user_token</span>
<span class="line">            else:</span>
<span class="line">                raise AuthenticationFailed(&#39;请提供有效的用户身份标识&#39;)</span>
<span class="line">        except KeyError:</span>
<span class="line">            raise AuthenticationFailed(&#39;请提供有效的用户身份标识&#39;)</span>
<span class="line"></span>
<span class="line">    def authenticate_header(self, request):</span>
<span class="line">        pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用自定义的认证类。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class EstateViewSet(CacheResponseMixin, ModelViewSet):</span>
<span class="line">    # 通过queryset指定如何获取数据（资源）</span>
<span class="line">    queryset = Estate.objects.all().select_related(&#39;district&#39;).prefetch_related(&#39;agents&#39;)</span>
<span class="line">    # 通过serializer_class指定如何序列化数据</span>
<span class="line">    serializer_class = EstateSerializer</span>
<span class="line">    # 指定根据哪些字段进行数据筛选</span>
<span class="line">    filter_fields = (&#39;district&#39;, &#39;name&#39;)</span>
<span class="line">    # 指定根据哪些字段对数据进行排序</span>
<span class="line">    ordering_fields = (&#39;hot&#39;, )</span>
<span class="line">    # 指定用于进行用户身份验证的类</span>
<span class="line">    authentication_classes = (MyAuthentication, )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：也可以在Django配置文件中将自定义的认证类设置为默认认证方式。</p></blockquote><h4 id="授予权限" tabindex="-1"><a class="header-anchor" href="#授予权限"><span>授予权限</span></a></h4><p>权限检查总是在视图的最开始处运行，在任何其他代码被允许进行之前。最简单的权限是允许通过身份验证的用户访问，并拒绝未经身份验证的用户访问，这对应于dfr中的<code>IsAuthenticated</code>类，可以用它来取代默认的<code>AllowAny</code>类。权限策略可以在Django的DRF配置中用<code>DEFAULT_PERMISSION_CLASSES</code>全局设置。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">REST_FRAMEWORK = {</span>
<span class="line">    &#39;DEFAULT_PERMISSION_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.permissions.IsAuthenticated&#39;,</span>
<span class="line">    )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在基于<code>APIView</code>类的视图上设置身份验证策略。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.permissions import IsAuthenticated</span>
<span class="line">from rest_framework.views import APIView</span>
<span class="line"></span>
<span class="line">class ExampleView(APIView):</span>
<span class="line">    permission_classes = (IsAuthenticated, )</span>
<span class="line">    # 此处省略其他代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者在基于<code>@api_view</code>装饰器的视图函数上设置。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.decorators import api_view, permission_classes</span>
<span class="line">from rest_framework.permissions import IsAuthenticated</span>
<span class="line"></span>
<span class="line">@api_view([&#39;GET&#39;])</span>
<span class="line">@permission_classes((IsAuthenticated, ))</span>
<span class="line">def example_view(request, format=None):</span>
<span class="line">    # 此处省略其他代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义权限需要继承<code>BasePermission</code>并实现以下方法中的一个或两个，下面是BasePermission的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@six.add_metaclass(BasePermissionMetaclass)</span>
<span class="line">class BasePermission(object):</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    A base class from which all permission classes should inherit.</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def has_permission(self, request, view):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Return \`True\` if permission is granted, \`False\` otherwise.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return True</span>
<span class="line"></span>
<span class="line">    def has_object_permission(self, request, view, obj):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Return \`True\` if permission is granted, \`False\` otherwise.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果请求被授予访问权限，则方法应该返回True，否则返False。下面的例子演示了阻止黑名单中的IP地址访问接口数据（这个在反爬虫的时候很有用哟）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework import permissions</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class BlacklistPermission(permissions.BasePermission):</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    Global permission check for blacklisted IPs.</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def has_permission(self, request, view):</span>
<span class="line">        ip_addr = request.META[&#39;REMOTE_ADDR&#39;]</span>
<span class="line">        blacklisted = Blacklist.objects.filter(ip_addr=ip_addr).exists()</span>
<span class="line">        return not blacklisted</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要实现更为完整的权限验证，可以考虑RBAC或ACL。</p><ol><li><p>RBAC - 基于角色的访问控制，如下图所示。</p><p><img src="`+g+'" alt=""></p><p><img src="'+y+`" alt=""></p></li><li><p>ACL - 访问控制列表（每个用户绑定自己的访问白名单或黑名单）。</p></li></ol><h4 id="访问限流" tabindex="-1"><a class="header-anchor" href="#访问限流"><span>访问限流</span></a></h4><p>可以修改dfr配置的<code>DEFAULT_THROTTLE_CLASSES</code> 和 <code>DEFAULT_THROTTLE_RATES</code>两个值来设置全局默认限流策略。例如：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">REST_FRAMEWORK = {</span>
<span class="line">    &#39;DEFAULT_THROTTLE_CLASSES&#39;: (</span>
<span class="line">        &#39;rest_framework.throttling.AnonRateThrottle&#39;,</span>
<span class="line">        &#39;rest_framework.throttling.UserRateThrottle&#39;</span>
<span class="line">    ),</span>
<span class="line">    &#39;DEFAULT_THROTTLE_RATES&#39;: {</span>
<span class="line">        &#39;anon&#39;: &#39;3/min&#39;,</span>
<span class="line">        &#39;user&#39;: &#39;10000/day&#39;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DEFAULT_THROTTLE_RATES</code>中使用的频率描述可能包括<code>second</code>、<code>minute</code>、<code>hour</code>或<code>day</code>。</p><p>如果要为接口单独设置限流，可以在每个视图或视图集上设置限流策略，如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.throttling import UserRateThrottle</span>
<span class="line">from rest_framework.views import APIView</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class ExampleView(APIView):</span>
<span class="line">    throttle_classes = (UserRateThrottle, )</span>
<span class="line">    # 此处省略下面的代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@api_view([&#39;GET&#39;])</span>
<span class="line">@throttle_classes([UserRateThrottle, ])</span>
<span class="line">def example_view(request, format=None):</span>
<span class="line">    # 此处省略下面的代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以通过继承<code>SimpleRateThrottle</code>来自定义限流策略，通常需要重写<code>allow_request</code>和<code>wait</code>方法。</p><h3 id="异步任务和计划任务" tabindex="-1"><a class="header-anchor" href="#异步任务和计划任务"><span>异步任务和计划任务</span></a></h3><h4 id="celery的应用" tabindex="-1"><a class="header-anchor" href="#celery的应用"><span>Celery的应用</span></a></h4><p>Celery 是一个简单、灵活且可靠的，处理大量消息的分布式系统，并且提供维护这样一个系统的必需工具。它是一个专注于实时处理的任务队列，同时也支持任务调度。</p><p>推荐阅读：<a href="http://docs.jinkan.org/docs/celery/" target="_blank" rel="noopener noreferrer">《Celery官方文档中文版》</a>，上面有极为详细的配置和使用指南。</p><p><img src="`+_+`" alt=""></p><p>Celery是一个本身不提供队列服务，官方推荐使用RabbitMQ或Redis来实现消息队列服务，前者是更好的选择，它对AMQP（高级消息队列协议）做出了非常好的实现。</p><ol><li><p>安装RabbitMQ。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker pull rabbitmq</span>
<span class="line">docker run -d -p 5672:5672 --name myrabbit rabbitmq</span>
<span class="line">docker container exec -it myrabbit /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建用户、资源以及分配操作权限。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">rabbitmqctl add_user luohao 123456</span>
<span class="line">rabbitmqctl set_user_tags luohao administrator</span>
<span class="line">rabbitmqctl add_vhost vhost1</span>
<span class="line">rabbitmqctl set_permissions -p vhost1 luohao &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建Celery实例。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 注册环境变量</span>
<span class="line">os.environ.setdefault(&#39;DJANGO_SETTINGS_MODULE&#39;, &#39;项目名.settings&#39;)</span>
<span class="line"></span>
<span class="line"># 创建Celery实例</span>
<span class="line">app = celery.Celery(</span>
<span class="line">    &#39;fangtx&#39;,</span>
<span class="line">    broker=&#39;amqp://luohao:123456@1.2.3.4:5672/vhost1&#39;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># 从项目的配置文件读取Celery配置信息</span>
<span class="line"># app.config_from_object(&#39;django.conf:settings&#39;)</span>
<span class="line"># 从指定的文件(例如celery_config.py)中读取Celery配置信息</span>
<span class="line"># app.config_from_object(&#39;celery_config&#39;)</span>
<span class="line"></span>
<span class="line"># 让Celery自动从参数指定的应用中发现异步任务/定时任务</span>
<span class="line"># app.autodiscover_tasks([&#39;common&#39;, ])</span>
<span class="line"># 让Celery自动从所有注册的应用中发现异步任务/定时任务</span>
<span class="line">app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动Celery创建woker（消息的消费者）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">celery -A &lt;name&gt; worker -l debug &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>执行异步任务。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@app.task</span>
<span class="line">def send_email(from_user, to_user, cc_user, subject, content):</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 消息的生产者</span>
<span class="line">send_email.delay(&#39;&#39;, [], [], &#39;&#39;, &#39;&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建定时任务。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 配置定时任务（计划任务）</span>
<span class="line">app.conf.update(</span>
<span class="line">    timezone=settings.TIME_ZONE,</span>
<span class="line">    enable_utc=True,</span>
<span class="line">    # 定时任务（计划任务）相当于是消息的生产者</span>
<span class="line">    # 如果只有生产者没有消费者那么消息就会在消息队列中积压</span>
<span class="line">    # 将来实际部署项目的时候生产者、消费者、消息队列可能都是不同节点</span>
<span class="line">    beat_schedule={</span>
<span class="line">        &#39;task1&#39;: {</span>
<span class="line">            &#39;task&#39;: &#39;common.tasks.scheduled_task&#39;,</span>
<span class="line">            &#39;schedule&#39;: crontab(&#39;*&#39;, &#39;*&#39;, &#39;*&#39;, &#39;*&#39;, &#39;*&#39;),</span>
<span class="line">            &#39;args&#39;: (&#39;...&#39;, )</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@app.task</span>
<span class="line">def scheduled_task(*args, **kwargs):</span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动Celery创建执行定时任务的beat（消息的生产者）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">celery -A &lt;name&gt; beat -l info</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>检查消息队列状况。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">rabbitmqctl list_queues -p vhost1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>监控Celery - 可以通过flower来对Celery进行监控。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install flower</span>
<span class="line">celery flower --broker=amqp://luohao:123456@120.77.222.217:5672/vhost1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题"><span>其他问题</span></a></h3><p>问题1：如何解决JavaScript跨域获取数据的问题？（django-cors-headers）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    &#39;corsheaders&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">MIDDLEWARE = [</span>
<span class="line">    &#39;corsheaders.middleware.CorsMiddleware&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">CORS_ORIGIN_ALLOW_ALL = True</span>
<span class="line"># 配置跨域白名单</span>
<span class="line"># CORS_ORIGIN_WHITELIST = (&#39;www.abc.com&#39;, &#39;www.baidu.com&#39;)</span>
<span class="line"># CORS_ORIGIN_REGEX_WHITELIST = (&#39;...&#39;, )</span>
<span class="line"># CORS_ALLOW_CREDENTIALS = True</span>
<span class="line"># CORS_ALLOW_METHODS = (&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题2：网站图片（水印、剪裁）和视频（截图、水印、转码）是如何处理的？（云存储、FFmpeg）</p><p>问题3：网站如何架设（静态资源）文件系统？（FastDFS、云存储、CDN）</p><h3 id="安全保护" tabindex="-1"><a class="header-anchor" href="#安全保护"><span>安全保护</span></a></h3><p>问题1：什么是跨站脚本攻击（XSS)，如何防范？（对提交的内容进行消毒）</p><p>问题2：什么是跨站身份伪造（CSRF），如何防范？（使用随机令牌）</p><p>问题3：什么是SQL注射攻击（SQL Injection），如何防范？（不拼接SQL语句，避免使用单引号）</p><p>问题4：什么是点击劫持攻击（Click-hacking），如何防范？（不允许<code>&lt;iframe&gt;</code>加载非同源站点内容）</p><h4 id="django提供的安全措施" tabindex="-1"><a class="header-anchor" href="#django提供的安全措施"><span>Django提供的安全措施</span></a></h4><p>签名数据的API</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.core.signing import Signer</span>
<span class="line">&gt;&gt;&gt; signer = Signer()</span>
<span class="line">&gt;&gt;&gt; value = signer.sign(&#39;hello, world!&#39;)</span>
<span class="line">&gt;&gt;&gt; value</span>
<span class="line">&#39;hello, world!:BYMlgvWMTSPLxC-DqxByleiMVXU&#39;</span>
<span class="line">&gt;&gt;&gt; signer.unsign(value)</span>
<span class="line">&#39;hello, world!&#39;</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; signer = Signer(salt=&#39;yoursalt&#39;)</span>
<span class="line">&gt;&gt;&gt; signer.sign(&#39;hello, world!&#39;)</span>
<span class="line">&#39;hello, world!:9vEvG6EA05hjMDB5MtUr33nRA_M&#39;</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; from django.core.signing import TimestampSigner</span>
<span class="line">&gt;&gt;&gt; signer = TimestampSigner()</span>
<span class="line">&gt;&gt;&gt; value = signer.sign(&#39;hello, world!&#39;)</span>
<span class="line">&gt;&gt;&gt; value</span>
<span class="line">&#39;hello, world!:1fpmcQ:STwj464IFE6eUB-_-hyUVF3d2So&#39;</span>
<span class="line">&gt;&gt;&gt; signer.unsign(value, max_age=5)</span>
<span class="line">Traceback (most recent call last):</span>
<span class="line"> File &quot;&lt;console&gt;&quot;, line 1, in &lt;module&gt;</span>
<span class="line"> File &quot;/Users/Hao/Desktop/fang.com/venv/lib/python3.6/site-packages/django/core/signing.py&quot;, line 198, in unsign</span>
<span class="line"> &#39;Signature age %s &gt; %s seconds&#39; % (age, max_age))</span>
<span class="line"> django.core.signing.SignatureExpired: Signature age 21.020604848861694 &gt; 5 seconds</span>
<span class="line">&gt;&gt;&gt; signer.unsign(value, max_age=120)</span>
<span class="line">&#39;hello, world!&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSRF令牌和小工具</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">{% csrf_token %}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>@csrf_exempt：免除令牌</li><li>@csrf_protect：提供令牌保护</li><li>@require_csrf_token：提供令牌保护</li><li>@ensure_csrf_cookie：强制视图发送带令牌的cookie</li></ul><blockquote><p>说明：可以在Chrome浏览器中安装EditThisCookie插件来方便的查看Cookie。</p></blockquote><h4 id="用户敏感信息的保护" tabindex="-1"><a class="header-anchor" href="#用户敏感信息的保护"><span>用户敏感信息的保护</span></a></h4><ol><li><p>哈希摘要（签名）</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; import hashlib</span>
<span class="line">&gt;&gt;&gt; </span>
<span class="line">&gt;&gt;&gt; md5_hasher = hashlib.md5()</span>
<span class="line">&gt;&gt;&gt; md5_hasher.update(&#39;hello, world!&#39;.encode())</span>
<span class="line">&gt;&gt;&gt; md5_hasher.hexdigest()</span>
<span class="line">&#39;3adbbad1791fbae3ec908894c4963870&#39;</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; sha1_hasher = hashlib.sha1()</span>
<span class="line">&gt;&gt;&gt; sha1_hasher.update(&#39;hello, world!&#39;.encode())</span>
<span class="line">&gt;&gt;&gt; sha1_hasher.update(&#39;goodbye, world!&#39;.encode())</span>
<span class="line">&gt;&gt;&gt; sha1_hasher.hexdigest()</span>
<span class="line">&#39;1f09d30c707d53f3d16c530dd73d70a6ce7596a9&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>加密和解密（对称加密和非对称加密）</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install pycrypto</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>AES对称加密：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from hashlib import md5</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; from Crypto.Cipher import AES</span>
<span class="line">&gt;&gt;&gt; from Crypto import Random</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; key = md5(b&#39;mysecret&#39;).hexdigest()</span>
<span class="line">&gt;&gt;&gt; iv = Random.new().read(AES.block_size)</span>
<span class="line">&gt;&gt;&gt; str1 = &#39;我爱你们！&#39;</span>
<span class="line">&gt;&gt;&gt; str2 = AES.new(key, AES.MODE_CFB, iv).encrypt(str1)</span>
<span class="line">b&#39;p\\x96o\\x85\\x0bq\\xc4-Y\\xc4\\xbcp\\n)&amp;&#39;</span>
<span class="line">&gt;&gt;&gt; str3 = AES.new(key, AES.MODE_CFB, iv).decrypt(str2).decode()</span>
<span class="line">&#39;我爱你们！&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RSA非对称加密：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from Crypto.PublicKey import RSA</span>
<span class="line">&gt;&gt;&gt; # 生成密钥对</span>
<span class="line">&gt;&gt;&gt; key_pair = RSA.generate(2048)</span>
<span class="line">&gt;&gt;&gt; # 导入公钥</span>
<span class="line">&gt;&gt;&gt; pub_key = RSA.importKey(key_pair.publickey().exportKey())</span>
<span class="line">&gt;&gt;&gt; # 导入私钥</span>
<span class="line">&gt;&gt;&gt; pri_key = RSA.importKey(key_pair.exportKey())</span>
<span class="line">&gt;&gt;&gt; # 明文</span>
<span class="line">&gt;&gt;&gt; message1 = &#39;hello, world!&#39;.encode()</span>
<span class="line">&gt;&gt;&gt; # 加密数据</span>
<span class="line">&gt;&gt;&gt; message2 = pub_key.encrypt(message1, None)</span>
<span class="line">(b&#39;\\x03\\x86t\\xa0\\x00\\xc4\\xea\\xd2\\x80\\xed\\xa7YN7\\x07\\xff\\x88\\xaa\\x1eW\\x0cmH0\\x06\\xa7\\&#39;\\xbc&lt;w@q\\x8b\\xaf\\xf7:g\\x92{=\\xe2E\\xa5@\\x1as2\\xdd\\xcb\\x8e[\\x98\\x85\\xdf,X\\xecj.U\\xd6\\xa7W&amp;u\\&#39;Uz&quot;\\x0f\\x0e\\\\&lt;\\xa4\\xfavC\\x93\\xa7\\xbcO&quot;\\xb9a\\x06]&lt;.\\xc1\\r1}*\\xdf\\xccdqXML\\x93\\x1b\\xe9\\xda\\xdf\\xab|\\xf8\\x18\\xe4\\x99\\xbb\\x7f\\x18}\\xd9\\x9a\\x1e*J\\\\\\xca\\x1a\\xd1\\x85\\xf7t\\x81\\xd95{\\x19\\xc9\\x81\\xb6^}\\x9c5\\xca\\xfe\\xcf\\xc8\\xd8M\\x9a\\x8c-\\xf1t\\xee\\xf9\\x12\\x90\\x01\\xca\\x92~\\x00c5qg5g\\x95&amp;\\x10\\xb1\\x0b\\x1fo\\x95\\xf2\\xbc\\x8d\\xf3f&quot;@\\xc5\\x188\\x0bX\\x9cfo\\xea\\x97\\x05@\\xe5\\xb2\\xda\\xb8\\x97a\\xa5w\\xa8\\x01\\x9a\\xa5N\\xc4\\x81\\x8d\\x0f&lt;\\x96iU\\xd3\\x95\\xacJZs\\xab_ #\\xee\\xf9\\x0f\\xf2\\x12\\xdb\\xfc\\xf8g\\x18v\\x02k+\\xda\\x16Si\\xbf\\xbb\\xec\\xf7w\\x90\\xde\\xae\\x97\\t\\xed{}5\\xd0&#39;,)</span>
<span class="line">&gt;&gt;&gt; # 解密数据</span>
<span class="line">&gt;&gt;&gt; message3 = pri_key.decrypt(message2)</span>
<span class="line">&#39;hello, world!&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="安全相关建议" tabindex="-1"><a class="header-anchor" href="#安全相关建议"><span>安全相关建议</span></a></h4><ol><li>虽然 Django 自带了稳固的安全保护措施，但是依然要采用正确的方式部署应用程序，利用 Web 服务器、操作系统和其他组件提供的安全保护措施。</li><li>记得把 Python 代码放在 Web 服务器的文档根目录之外，避免代码意外泄露。</li><li>谨慎处理用户上传的文件。</li><li>Django本身没有对请求次数加以限制（包括验证用户身份的请求），为了防止暴力攻击和破解，可以考虑使用具有一次消费性的验证码或对这类请求的次数进行限制。</li><li>将缓存系统、数据库服务器以及重要的资源服务器都放在第二级防火墙之后（不要放在DMZ）。</li></ol><h3 id="测试相关" tabindex="-1"><a class="header-anchor" href="#测试相关"><span>测试相关</span></a></h3><p>测试是发现和标记缺陷的过程。所谓的缺陷是指实际结果和期望结果之间的任何差别。有的地方，测试也被认为是执行以找出错误为目的的程序的过程。 测试是为了让产品达到以下目标：</p><ol><li>满足需求用户满意</li><li>改善产品的市场占有率</li><li>树立对产品的信任</li><li>减少开发和维护的成本</li></ol><h4 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试"><span>功能测试</span></a></h4><p>如果一个软件单元的行为方式与它的开发规范完全一样，那么该软件单元就通过了它的功能测试。</p><ul><li>白盒测试：开发人员自己实现，最基本的形式是单元测试，还有集成测试和系统测试。</li><li>黑盒测试：由开发团队之外的人执行，对测试代码没有可见性，将被测系统视为黑盒子。通常由测试人员或QA工程师来执行，Web应用可以通过Selenium这样的测试框架自动化实施。</li></ul><h4 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试"><span>性能测试</span></a></h4><p>软件在高工作负载下对其响应性和健壮性展开的测试。</p><ul><li><p>负载测试：在特定负载下执行的测试。</p></li><li><p>压力测试：突发条件或极限条件下的性能测试。</p></li></ul><h4 id="安全性测试" tabindex="-1"><a class="header-anchor" href="#安全性测试"><span>安全性测试</span></a></h4><p>系统的敏感数据都是经过认证和授权之后才能访问。</p><h4 id="其他测试" tabindex="-1"><a class="header-anchor" href="#其他测试"><span>其他测试</span></a></h4><p>易用性测试 / 安装测试 / 可访问性测试</p><h4 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试"><span>单元测试</span></a></h4><p>测试函数和对象的方法（程序中最小最基本的单元）。通过对实际输出和预期输出的比对以及各种的断言条件来判定被测单元是否满足设计需求。</p><ul><li>测试用例</li><li>测试固件 - 每次测试时都要使用的东西。</li><li>测试套件（测试集）- 组合了多个测试用例而构成的集合。</li></ul><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class UtilTest(unittest.TestCase):</span>
<span class="line"></span>
<span class="line">    def setUp(self):</span>
<span class="line">        self.pattern = re.compile(r&#39;\\d{6}&#39;)</span>
<span class="line"></span>
<span class="line">    def test_gen_mobile_code(self):</span>
<span class="line">        for _ in range(100):</span>
<span class="line">            self.assertIsNotNone(self.pattern.match(gen_mobile_code()))</span>
<span class="line"></span>
<span class="line">    def test_to_md5_hex(self):</span>
<span class="line">        md5_dict = {</span>
<span class="line">            &#39;123456&#39;: &#39;e10adc3949ba59abbe56e057f20f883e&#39;,</span>
<span class="line">            &#39;123123123&#39;: &#39;f5bb0c8de146c67b44babbf4e6584cc0&#39;,</span>
<span class="line">            &#39;1qaz2wsx&#39;: &#39;1c63129ae9db9c60c3e8aa94d3e00495&#39;,</span>
<span class="line">        }</span>
<span class="line">        for key, value in md5_dict.items():</span>
<span class="line">            self.assertEqual(value, to_md5_hex(key))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TestCase</code>的断言方法：</p><ul><li>assertEqual / assertNotEqual</li><li>assertTrue / assertFalse / assertIsNot</li><li>assertRaise / assertRaiseRegexp</li><li>assertAlmostEqual / assertNotAlmostEqual</li><li>assertGreater / assertGreaterEqual / assertLess / assertLessEqual</li><li>assertRegexpMatches / assertNotRegexpMatches</li><li>assertListEqual / assertSetEqual / assertTupleEqual / assertDictEqual</li></ul><p>可以使用nose2或pytest来辅助执行单元测试，同时通过cov-core或pytest-cov可以对测试覆度进行评估。覆盖率由百分比表示。比如测试代码执行过了程序的每一行，那么覆盖率就是100%。这种时候，几乎不会出现新程序上线后突然无法运行的尴尬情况。覆盖率不关心代码内容究竟是什么，覆盖率是用来检查“测试代码不足、测试存在疏漏”的一个指标，“测试内容是否妥当”并不归它管。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install nose2 pytest cov-core pytest-cov</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以使用Selenium来实现Web应用的自动化测试，它还可以用于屏幕抓取与浏览器行为模拟，通过爬虫抓取页面上的动态数据也可以使用它。Selenium其实包括三个部分：</p><ul><li><p>Selenium IDE：嵌入到浏览器的插件，可以录制和回放脚本。</p><p><img src="`+f+`" alt=""></p></li><li><p>Selenium WebDriver：支持多种语言可以操控浏览器的API。</p></li><li><p>Selenium Standalone Server：Selenium Grid、远程控制、分布式部署。</p></li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install selenium</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from selenium import webdriver</span>
<span class="line">import pytest</span>
<span class="line">import contextlib</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@pytest.fixture(scope=&#39;session&#39;)</span>
<span class="line">def chrome():</span>
<span class="line">    # 设置使用无头浏览器(不会打开浏览器窗口)</span>
<span class="line">    options = webdriver.ChromeOptions()</span>
<span class="line">    options.add_argument(&#39;--headless&#39;)</span>
<span class="line">    driver = webdriver.Chrome(options=options)</span>
<span class="line">    yield driver</span>
<span class="line">    driver.quit()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def test_baidu_index(chrome):</span>
<span class="line">    chrome.get(&#39;https://www.baidu.com&#39;)</span>
<span class="line">    assert chrome.title == &#39;百度一下，你就知道&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了Selenium之外，还有一个Web自动化测试工具名叫Robot Framework。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">nose2 -v -C</span>
<span class="line">pytest --cov</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">Ran 7 tests in 0.002s</span>
<span class="line"></span>
<span class="line">OK</span>
<span class="line">Name                       Stmts   Miss  Cover</span>
<span class="line">----------------------------------------------</span>
<span class="line">example01.py                  15      0   100%</span>
<span class="line">example02.py                  49     49     0%</span>
<span class="line">example03.py                  22     22     0%</span>
<span class="line">example04.py                  61     61     0%</span>
<span class="line">example05.py                  29     29     0%</span>
<span class="line">example06.py                  39     39     0%</span>
<span class="line">example07.py                  19     19     0%</span>
<span class="line">example08.py                  27     27     0%</span>
<span class="line">example09.py                  18     18     0%</span>
<span class="line">example10.py                  19     19     0%</span>
<span class="line">example11.py                  22     22     0%</span>
<span class="line">example12.py                  28     28     0%</span>
<span class="line">example13.py                  28     28     0%</span>
<span class="line">test_ddt_example.py           18      0   100%</span>
<span class="line">test_pytest_example.py        11      6    45%</span>
<span class="line">test_unittest_example.py      22      0   100%</span>
<span class="line">----------------------------------------------</span>
<span class="line">TOTAL                        427    367    14%</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在测试过程中需要孤立各种外部依赖（数据库、外部接口调用、时间依赖），具体又包括两个方面：</p><ol><li><p>数据源：数据本地化 / 置于内存中 / 测试之后回滚</p></li><li><p>资源虚拟化：存根/桩（stub）、仿制/模拟（mock）、伪造（fake）</p><ul><li>stub：测试期间为提供响应的函数生成的替代品</li><li>mock：代替实际对象（以及该对象的API）的对象</li><li>fake：没有达到生产级别的轻量级对象</li></ul></li></ol><h4 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试"><span>集成测试</span></a></h4><p>集成多个函数或方法的输入输出的测试，测试时需要将多个测试对象组合在一起。</p><ul><li>测试组件互操作性 / 需求变更测试 / 外部依赖和API / 调试硬件问题 / 在代码路径中发现异常</li></ul><h4 id="系统测试" tabindex="-1"><a class="header-anchor" href="#系统测试"><span>系统测试</span></a></h4><p>对需求的测试，测试成品是否最终满足了所有需求，在客户验收项目时进行。</p><h4 id="数据驱动测试" tabindex="-1"><a class="header-anchor" href="#数据驱动测试"><span>数据驱动测试</span></a></h4><p>使用外部数据源实现对输入值与期望值的参数化，避免在测试中使用硬编码的数据。</p><p>被测函数：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def add(x, y):</span>
<span class="line">    return x + y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>data.csv文件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">3,1,2</span>
<span class="line">0,1,-1</span>
<span class="line">100,50,50</span>
<span class="line">100,1,99</span>
<span class="line">15,7,8</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import csv</span>
<span class="line"></span>
<span class="line">from unittest import TestCase</span>
<span class="line">from ddt import ddt, data, unpack</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@ddt</span>
<span class="line">class TestAdd(TestCase):</span>
<span class="line"></span>
<span class="line">    def load_data_from_csv(filename):</span>
<span class="line">        data_items = []</span>
<span class="line">        with open(filename, &#39;r&#39;, newline=&#39;&#39;) as fs:</span>
<span class="line">            reader = csv.reader(fs)</span>
<span class="line">            for row in reader:</span>
<span class="line">                data_items.append(list(map(int, row)))</span>
<span class="line">        return data_items</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    @data(*load_data_from_csv(&#39;data.csv&#39;))</span>
<span class="line">    @unpack</span>
<span class="line">    def test_add(self, result, param1, param2):</span>
<span class="line">        self.assertEqual(result, add(param1, param2))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="django中的测试" tabindex="-1"><a class="header-anchor" href="#django中的测试"><span>Django中的测试</span></a></h4><ol><li>测试Django视图 - Django中提供的<code>TestCase</code>扩展了<code>unittest</code>中的<code>TestCase</code>，绑定了一个名为<code>client</code>的属性，可以用来模拟浏览器发出的GET、POST、DELETE、PUT等请求。</li></ol><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class SomeViewTest(TestCase):</span>
<span class="line"></span>
<span class="line">    def test_example_view(self):</span>
<span class="line">        resp = self.client.get(reverse(&#39;index&#39;))</span>
<span class="line">        self.assertEqual(200, resp.status_code)</span>
<span class="line">        self.assertEqual(5, resp.context[&#39;num&#39;])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行测试 - 配置测试数据库。</li></ol><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">DATABASES = {</span>
<span class="line">    &#39;default&#39;: {</span>
<span class="line">        &#39;ENGINE&#39;: &#39;django.db.backends.mysql&#39;,</span>
<span class="line">        &#39;HOST&#39;: &#39;localhost&#39;,</span>
<span class="line">        &#39;PORT&#39;: 3306,</span>
<span class="line">        &#39;NAME&#39;: &#39;DbName&#39;,</span>
<span class="line">        &#39;USER&#39;: os.environ[&#39;DB_USER&#39;],</span>
<span class="line">        &#39;PASSWORD&#39;: os.environ[&#39;DB_PASS&#39;],</span>
<span class="line">        &#39;TEST&#39;: {</span>
<span class="line">            &#39;NAME&#39;: &#39;DbName_for_testing&#39;,</span>
<span class="line">            &#39;CHARSET&#39;: &#39;utf8&#39;,</span>
<span class="line">        },</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py test</span>
<span class="line">python manage.py test common</span>
<span class="line">python manage.py test common.tests.UtilsTest</span>
<span class="line">python manage.py test common.tests.UtilsTest.test_to_md5_hex</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>评估测试覆盖度</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install coverage</span>
<span class="line">coverage run --source=&lt;path1&gt; --omit=&lt;path2&gt; manage.py test common</span>
<span class="line">coverage report</span>
<span class="line"></span>
<span class="line">Name                            Stmts   Miss  Cover</span>
<span class="line">---------------------------------------------------</span>
<span class="line">common/__init__.py                  0      0   100%</span>
<span class="line">common/admin.py                     1      0   100%</span>
<span class="line">common/apps.py                      3      3     0%</span>
<span class="line">common/forms.py                    16     16     0%</span>
<span class="line">common/helper.py                   32     32     0%</span>
<span class="line">common/middlewares.py              19     19     0%</span>
<span class="line">common/migrations/__init__.py       0      0   100%</span>
<span class="line">common/models.py                   71      2    97%</span>
<span class="line">common/serializers.py              14     14     0%</span>
<span class="line">common/tests.py                    14      8    43%</span>
<span class="line">common/urls_api.py                  3      3     0%</span>
<span class="line">common/urls_user.py                 3      3     0%</span>
<span class="line">common/utils.py                    22      7    68%</span>
<span class="line">common/views.py                    69     69     0%</span>
<span class="line">---------------------------------------------------</span>
<span class="line">TOTAL                             267    176    34%</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="性能测试-1" tabindex="-1"><a class="header-anchor" href="#性能测试-1"><span>性能测试</span></a></h4><p>问题1：性能测试的指标有哪些？</p><ol><li><p>ab（ Apache Benchmark） / webbench / httpperf</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">yum -y install httpd</span>
<span class="line">ab -c 10 -n 1000 http://www.baidu.com/</span>
<span class="line">...</span>
<span class="line">Benchmarking www.baidu.com (be patient).....done</span>
<span class="line">Server Software:        BWS/1.1</span>
<span class="line">Server Hostname:        www.baidu.com</span>
<span class="line">Server Port:            80</span>
<span class="line">Document Path:          /</span>
<span class="line">Document Length:        118005 bytes</span>
<span class="line">Concurrency Level:      10</span>
<span class="line">Time taken for tests:   0.397 seconds</span>
<span class="line">Complete requests:      100</span>
<span class="line">Failed requests:        98</span>
<span class="line">   (Connect: 0, Receive: 0, Length: 98, Exceptions: 0)</span>
<span class="line">Write errors:           0</span>
<span class="line">Total transferred:      11918306 bytes</span>
<span class="line">HTML transferred:       11823480 bytes</span>
<span class="line">Requests per second:    252.05 [#/sec] (mean)</span>
<span class="line">Time per request:       39.675 [ms] (mean)</span>
<span class="line">Time per request:       3.967 [ms] (mean, across all concurrent requests)</span>
<span class="line">Transfer rate:          29335.93 [Kbytes/sec] received</span>
<span class="line">Connection Times (ms)</span>
<span class="line">              min  mean[+/-sd] median   max</span>
<span class="line">Connect:        6    7   0.6      7       9</span>
<span class="line">Processing:    20   27  22.7     24     250</span>
<span class="line">Waiting:        8   11  21.7      9     226</span>
<span class="line">Total:         26   34  22.8     32     258</span>
<span class="line">Percentage of the requests served within a certain time (ms)</span>
<span class="line">  50%     32</span>
<span class="line">  66%     34</span>
<span class="line">  75%     34</span>
<span class="line">  80%     34</span>
<span class="line">  90%     36</span>
<span class="line">  95%     39</span>
<span class="line">  98%     51</span>
<span class="line">  99%    258</span>
<span class="line"> 100%    258 (longest request)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mysqlslap</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">mysqlslap -a -c 100 -h 1.2.3.4 -u root -p</span>
<span class="line">mysqlslap -a -c 100 --number-of-queries=1000 --auto-generate-sql-load-type=read -h &lt;负载均衡服务器IP地址&gt; -u root -p</span>
<span class="line">mysqlslap -a --concurrency=50,100 --number-of-queries=1000 --debug-info --auto-generate-sql-load-type=mixed -h 1.2.3.4 -u root -p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>sysbench</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">sysbench --test=threads --num-threads=64 --thread-yields=100 --thread-locks=2 run</span>
<span class="line">sysbench --test=memory --num-threads=512 --memory-block-size=256M --memory-total-size=32G run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>JMeter</p><p>请查看<a href="https://www.ibm.com/developerworks/cn/java/l-jmeter/index.html" target="_blank" rel="noopener noreferrer">《使用JMeter进行性能测试》</a>。</p></li><li><p>LoadRunner / QTP</p></li></ol><h3 id="项目调试" tabindex="-1"><a class="header-anchor" href="#项目调试"><span>项目调试</span></a></h3><p>可以使用django-debug-toolbar来辅助项目调试。</p><ol><li><p>安装</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install django-debug-toolbar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>配置 - 修改settings.py。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    &#39;debug_toolbar&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">MIDDLEWARE = [</span>
<span class="line">    &#39;debug_toolbar.middleware.DebugToolbarMiddleware&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">DEBUG_TOOLBAR_CONFIG = {</span>
<span class="line">    # 引入jQuery库</span>
<span class="line">    &#39;JQUERY_URL&#39;: &#39;https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js&#39;,</span>
<span class="line">    # 工具栏是否折叠</span>
<span class="line">    &#39;SHOW_COLLAPSED&#39;: True,</span>
<span class="line">    # 是否显示工具栏</span>
<span class="line">    &#39;SHOW_TOOLBAR_CALLBACK&#39;: lambda x: True,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置 - 修改urls.py。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">if settings.DEBUG:</span>
<span class="line"></span>
<span class="line">    import debug_toolbar</span>
<span class="line"></span>
<span class="line">    urlpatterns.insert(0, path(&#39;__debug__/&#39;, include(debug_toolbar.urls)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 - 在页面右侧可以看到一个调试工具栏，上面包括了执行时间、项目设置、请求头、SQL、静态资源、模板、缓存、信号等调试信息，查看起来非常的方便。</p></li><li><p>项目上线之前，请记住<strong>去掉django-debug-toolbar相关的所有配置</strong>。</p></li></ol><h3 id="部署相关" tabindex="-1"><a class="header-anchor" href="#部署相关"><span>部署相关</span></a></h3>`,244),x=n(`<h3 id="性能相关" tabindex="-1"><a class="header-anchor" href="#性能相关"><span>性能相关</span></a></h3><h4 id="网站优化两大定律" tabindex="-1"><a class="header-anchor" href="#网站优化两大定律"><span>网站优化两大定律：</span></a></h4><ol><li><p>尽可能的使用缓存 - 牺牲空间换取时间（普适策略）。</p></li><li><p>能推迟的都推迟 - 使用消息队列将并行任务串行来缓解服务器压力。</p><ul><li>服务器CPU利用率出现瞬时峰值 - 削峰（CPU利用率平缓的增长）</li><li>上下游节点解耦合（下订单和受理订单的系统通常是分离的）</li></ul></li></ol><h4 id="django框架" tabindex="-1"><a class="header-anchor" href="#django框架"><span>Django框架</span></a></h4><ol><li><p>配置缓存来缓解数据库的压力，并有合理的机制应对<a href="https://www.cnblogs.com/zhangweizhong/p/6258797.html" target="_blank" rel="noopener noreferrer">缓存穿透和缓存雪崩</a>。</p></li><li><p>开启<a href="https://docs.djangoproject.com/en/2.0/ref/templates/api/#django.template.loaders.cached.Loader" target="_blank" rel="noopener noreferrer">模板缓存</a>来加速模板的渲染。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">TEMPLATES = [</span>
<span class="line">    {</span>
<span class="line">        &#39;BACKEND&#39;: &#39;django.template.backends.django.DjangoTemplates&#39;,</span>
<span class="line">        &#39;DIRS&#39;: [os.path.join(BASE_DIR, &#39;templates&#39;), ],</span>
<span class="line">        # &#39;APP_DIRS&#39;: True,</span>
<span class="line">        &#39;OPTIONS&#39;: {</span>
<span class="line">            &#39;context_processors&#39;: [</span>
<span class="line">                &#39;django.template.context_processors.debug&#39;,</span>
<span class="line">                &#39;django.template.context_processors.request&#39;,</span>
<span class="line">                &#39;django.contrib.auth.context_processors.auth&#39;,</span>
<span class="line">                &#39;django.contrib.messages.context_processors.messages&#39;,</span>
<span class="line">            ],</span>
<span class="line">            &#39;loaders&#39;: [(</span>
<span class="line">                &#39;django.template.loaders.cached.Loader&#39;, [</span>
<span class="line">                    &#39;django.template.loaders.filesystem.Loader&#39;,</span>
<span class="line">                    &#39;django.template.loaders.app_directories.Loader&#39;,</span>
<span class="line">                ], ),</span>
<span class="line">            ],</span>
<span class="line">        },</span>
<span class="line">    },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用惰性求值、迭代器、<code>defer()</code>、<code>only()</code>等缓解内存压力。</p></li><li><p>用<code>select_related()</code>和<code>prefetch_related()</code>执行预加载避免“1+N查询问题”。</p></li></ol><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h4><ol><li><p>用ID生成器代替自增主键（性能更好、适用于分布式环境）。</p><ul><li><p>自定义ID生成器 - snowflake</p></li><li><p>UUID</p></li></ul><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; my_uuid = uuid.uuid1()</span>
<span class="line">&gt;&gt;&gt; my_uuid</span>
<span class="line">UUID(&#39;63f859d0-a03a-11e8-b0ad-60f81da8d840&#39;)</span>
<span class="line">&gt;&gt;&gt; my_uuid.hex</span>
<span class="line">&#39;63f859d0a03a11e8b0ad60f81da8d840&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>避免不必要的外键列上的约束（除非必须保证参照完整性），更不要使用触发器之类的机制。</p></li><li><p>使用索引来优化查询性能（索引放在要用于查询的字段上）。InnoDB用的是BTREE索引，使用&gt;、&lt;、&gt;=、&lt;=、BETWEEN或者LIKE &#39;pattern&#39;（pattern不以通配符开头）时都可以用到索引。因为建立索引需要额外的磁盘空间，而主键上是有默认的索引，所以主键要尽可能选择较短的数据类型来减少磁盘占用，提高索引的缓存效果。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">create index idx_goods_name on tb_goods (gname(10));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">-- 无法使用索引</span>
<span class="line">select * from tb_goods where gname like &#39;%iPhone%&#39;;</span>
<span class="line">-- 可以使用索引</span>
<span class="line">select * from tb_goods where gname like &#39;iPhone%&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 无法使用索引</span>
<span class="line">Goods.objects.filter(name_icontains=&#39;iPhone&#39;)</span>
<span class="line"># 可以使用索引</span>
<span class="line">Goods.objects.filter(name__istartswith=&#39;iPhone&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用存储过程（存储在服务器端编译过的一组SQL语句）。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">drop procedure if exists sp_avg_sal_by_dept;</span>
<span class="line"></span>
<span class="line">create procedure sp_avg_sal_by_dept(deptno integer, out avg_sal float)</span>
<span class="line">begin </span>
<span class="line">    select avg(sal) into avg_sal from TbEmp where dno=deptno;</span>
<span class="line">end;</span>
<span class="line"></span>
<span class="line">call sp_avg_sal_by_dept(10, @a);</span>
<span class="line"></span>
<span class="line">select @a;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from django.db import connection</span>
<span class="line">&gt;&gt;&gt; cursor = connection.cursor()</span>
<span class="line">&gt;&gt;&gt; cursor.callproc(&#39;sp_avg_sal_by_dept&#39;, (10, 0))</span>
<span class="line">&gt;&gt;&gt; cursor.execute(&#39;select @_sp_avg_sal_by_dept_1&#39;)</span>
<span class="line">&gt;&gt;&gt; cursor.fetchone()</span>
<span class="line">(2675.0,)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用数据分区。通过分区可以存储更多的数据、优化查询更大的吞吐量、可以快速删除过期的数据。关于这个知识点可以看看MySQL的<a href="https://dev.mysql.com/doc/refman/5.7/en/partitioning-overview.html" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><ul><li>RANGE分区：基于连续区间范围，把数据分配到不同的分区。</li><li>LIST分区：基于枚举值的范围，把数据分配到不同的分区。</li><li>HASH分区 / KEY分区：基于分区个数，把数据分配到不同的分区。</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">CREATE TABLE tb_emp (</span>
<span class="line">    eno INT NOT NULL,</span>
<span class="line">    ename VARCHAR(20) NOT NULL,</span>
<span class="line">    job VARCHAR(10) NOT NULL,</span>
<span class="line">    hiredate DATE NOT NULL,</span>
<span class="line">    dno INT NOT NULL</span>
<span class="line">)</span>
<span class="line">PARTITION BY HASH(dno)</span>
<span class="line">PARTITIONS 4;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">CREATE TABLE tb_emp (</span>
<span class="line">    eno INT NOT NULL,</span>
<span class="line">    ename VARCHAR(20) NOT NULL,</span>
<span class="line">    job VARCHAR(10) NOT NULL,</span>
<span class="line">    hiredate DATE NOT NULL,</span>
<span class="line">    dno INT NOT NULL</span>
<span class="line">)</span>
<span class="line">PARTITION BY RANGE( YEAR(hiredate) ) (</span>
<span class="line">    PARTITION p0 VALUES LESS THAN (1960),</span>
<span class="line">    PARTITION p1 VALUES LESS THAN (1970),</span>
<span class="line">    PARTITION p2 VALUES LESS THAN (1980),</span>
<span class="line">    PARTITION p3 VALUES LESS THAN (1990),</span>
<span class="line">    PARTITION p4 VALUES LESS THAN MAXVALUE</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>explain</code>来分析查询性能 - 执行计划。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">explain select * from ...;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>explain</code>结果解析：</p><ul><li>select_type：表示select操作的类型，常见的值有SIMPLE（简单查询，没有使用子查询或者表连接查询）、PRIMARY（主查询，外层的查询）、UNION（并集操作中的第二个或者后面的查询）、SUBQUERY（子查询中的第一个SELECT）等。</li><li>table：输出结果的表。</li><li>type：MySQL在表中找到所需行的方式，也称为访问类型，常见的值有： <ul><li>ALL：全表扫描（遍历全表找到匹配的行）</li><li>index：索引全扫描（遍历整个索引）</li><li>range：索引范围扫描</li><li>ref：非唯一索引扫描或唯一索引的前缀扫描</li><li>eq_ref：唯一索引扫描</li><li>const / system：表中最多有一行匹配</li><li>NULL：不用访问表或者索引</li></ul></li><li>possible_keys：查询时可能用到的索引。</li><li>key：实际使用的索引。</li><li>key_len：使用到索引字段的长度。</li><li>rows：扫描行的数量。</li><li>Extra：额外的信息（执行情况的说明或描述）。</li></ul><blockquote><p>说明：关于MySQL更多的知识尤其是性能调优和运维方面的内容，推荐大家阅读网易出品的《深入浅出MySQL（第2版）》，网易出品必属精品。</p></blockquote></li><li><p>使用慢查询日志来发现性能低下的查询。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">mysql&gt; show variables like &#39;slow_query%&#39;;</span>
<span class="line">+---------------------------+----------------------------------+</span>
<span class="line">| Variable_name             | Value                            |</span>
<span class="line">+---------------------------+----------------------------------+</span>
<span class="line">| slow_query_log            | OFF                              |</span>
<span class="line">| slow_query_log_file       | /mysql/data/localhost-slow.log   |</span>
<span class="line">+---------------------------+----------------------------------+</span>
<span class="line"></span>
<span class="line">mysql&gt; show variables like &#39;long_query_time&#39;;</span>
<span class="line">+-----------------+-----------+</span>
<span class="line">| Variable_name   | Value     |</span>
<span class="line">+-----------------+-----------+</span>
<span class="line">| long_query_time | 10.000000 |</span>
<span class="line">+-----------------+-----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">mysql&gt; set global slow_query_log=&#39;ON&#39;; </span>
<span class="line">mysql&gt; set global long_query_time=1;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">[mysqld]</span>
<span class="line">slow_query_log=ON</span>
<span class="line">slow_query_log_file=/usr/local/mysql/data/slow.log</span>
<span class="line">long_query_time=1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,7);function E(T,j){const e=i("RouteLink");return t(),l("div",null,[P,d("p",null,[s("请参考"),c(e,{to:"/python/Python-100-Days/Day91-100/98.%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2%E4%B8%8A%E7%BA%BF%E5%92%8C%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98.html"},{default:r(()=>[s("《项目部署上线和性能调优》")]),_:1}),s("。")]),x])}const w=a(S,[["render",E],["__file","95.使用Django开发商业项目.html.vue"]]),k=JSON.parse('{"path":"/python/Python-100-Days/Day91-100/95.%E4%BD%BF%E7%94%A8Django%E5%BC%80%E5%8F%91%E5%95%86%E4%B8%9A%E9%A1%B9%E7%9B%AE.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"使用Django开发商业项目","slug":"使用django开发商业项目","link":"#使用django开发商业项目","children":[{"level":3,"title":"Web应用","slug":"web应用","link":"#web应用","children":[]},{"level":3,"title":"MVC架构模式","slug":"mvc架构模式","link":"#mvc架构模式","children":[]},{"level":3,"title":"HTTP请求和响应","slug":"http请求和响应","link":"#http请求和响应","children":[]},{"level":3,"title":"数据模型(Model)","slug":"数据模型-model","link":"#数据模型-model","children":[]},{"level":3,"title":"视图函数(Controller)","slug":"视图函数-controller","link":"#视图函数-controller","children":[]},{"level":3,"title":"模板(View)","slug":"模板-view","link":"#模板-view","children":[]},{"level":3,"title":"中间件","slug":"中间件","link":"#中间件","children":[]},{"level":3,"title":"表单","slug":"表单","link":"#表单","children":[]},{"level":3,"title":"Cookie和Session","slug":"cookie和session","link":"#cookie和session","children":[]},{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]},{"level":3,"title":"RESTful","slug":"restful","link":"#restful","children":[]},{"level":3,"title":"异步任务和计划任务","slug":"异步任务和计划任务","link":"#异步任务和计划任务","children":[]},{"level":3,"title":"其他问题","slug":"其他问题","link":"#其他问题","children":[]},{"level":3,"title":"安全保护","slug":"安全保护","link":"#安全保护","children":[]},{"level":3,"title":"测试相关","slug":"测试相关","link":"#测试相关","children":[]},{"level":3,"title":"项目调试","slug":"项目调试","link":"#项目调试","children":[]},{"level":3,"title":"部署相关","slug":"部署相关","link":"#部署相关","children":[]},{"level":3,"title":"性能相关","slug":"性能相关","link":"#性能相关","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day91-100/95.使用Django开发商业项目.md"}');export{w as comp,k as data};
