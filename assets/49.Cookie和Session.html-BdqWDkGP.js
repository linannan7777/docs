import{_ as s,c as n,o as e,b as i}from"./app-CstveDQQ.js";const a="/docs/assets/csrf-simple-B3g_gJBx.png",l="/docs/assets/sessionid_from_cookie-DS5z0_Ia.png",d="/docs/assets/cookie_xstorage_indexeddb-KQQxUrVZ.png",c={},t=i(`<h2 id="cookie和session" tabindex="-1"><a class="header-anchor" href="#cookie和session"><span>Cookie和Session</span></a></h2><p>我们继续来完成上一章节中的项目，实现“用户登录”的功能，并限制只有登录的用户才能投票。</p><h3 id="用户登录的准备工作" tabindex="-1"><a class="header-anchor" href="#用户登录的准备工作"><span>用户登录的准备工作</span></a></h3><p>我们先为实现用户登录做一些准备工作。</p><ol><li><p>创建用户模型。之前我们讲解过如果通过Django的ORM实现从二维表到模型的转换（反向工程），这次我们尝试把模型变成二维表（正向工程）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class User(models.Model):</span>
<span class="line">    &quot;&quot;&quot;用户&quot;&quot;&quot;</span>
<span class="line">    no = models.AutoField(primary_key=True, verbose_name=&#39;编号&#39;)</span>
<span class="line">    username = models.CharField(max_length=20, unique=True, verbose_name=&#39;用户名&#39;)</span>
<span class="line">    password = models.CharField(max_length=32, verbose_name=&#39;密码&#39;)</span>
<span class="line">    tel = models.CharField(max_length=20, verbose_name=&#39;手机号&#39;)</span>
<span class="line">    reg_date = models.DateTimeField(auto_now_add=True, verbose_name=&#39;注册时间&#39;)</span>
<span class="line">    last_visit = models.DateTimeField(null=True, verbose_name=&#39;最后登录时间&#39;)</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        db_table = &#39;tb_user&#39;</span>
<span class="line">        verbose_name = &#39;用户&#39;</span>
<span class="line">        verbose_name_plural = &#39;用户&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用下面的命令生成迁移文件并执行迁移，将<code>User</code>模型直接变成关系型数据库中的二维表<code>tb_user</code>。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">python manage.py makemigrations polls</span>
<span class="line">python manage.py migrate polls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用下面的SQL语句直接插入两条测试数据，通常不能将用户的密码直接保存在数据库中，因此我们将用户密码处理成对应的MD5摘要。MD5消息摘要算法是一种被广泛使用的密码哈希函数（散列函数），可以产生出一个128位（比特）的哈希值（散列值），用于确保信息传输完整一致。在使用哈希值时，通常会将哈希值表示为16进制字符串，因此128位的MD5摘要通常表示为32个十六进制符号。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">insert into \`tb_user\`</span>
<span class="line">    (\`username\`, \`password\`, \`tel\`, \`reg_date\`)</span>
<span class="line">values</span>
<span class="line">    (&#39;wangdachui&#39;, &#39;1c63129ae9db9c60c3e8aa94d3e00495&#39;, &#39;13122334455&#39;, now()),</span>
<span class="line">    (&#39;hellokitty&#39;, &#39;c6f8cf68e5f68b0aa4680e089ee4742c&#39;, &#39;13890006789&#39;, now());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面创建的两个用户<code>wangdachui</code>和<code>hellokitty</code>密码分别是<code>1qaz2wsx</code>和<code>Abc123!!</code>。</p></blockquote></li><li><p>我们在应用下增加一个名为<code>utils.py</code>的模块用来保存需要使用的工具函数。Python标准库中的<code>hashlib</code>模块封装了常用的哈希算法，包括：MD5、SHA1、SHA256等。下面是使用<code>hashlib</code>中的<code>md5</code>类将字符串处理成MD5摘要的函数如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import hashlib</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def gen_md5_digest(content):</span>
<span class="line">    return hashlib.md5(content.encode()).hexdigest()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编写用户登录的视图函数和模板页。</p><p>添加渲染登录页面的视图函数：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def login(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    hint = &#39;&#39;</span>
<span class="line">    return render(request, &#39;login.html&#39;, {&#39;hint&#39;: hint})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加<code>login.html</code>模板页：</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;用户登录&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        #container {</span>
<span class="line">            width: 520px;</span>
<span class="line">            margin: 10px auto;</span>
<span class="line">        }</span>
<span class="line">        .input {</span>
<span class="line">            margin: 20px 0;</span>
<span class="line">            width: 460px;</span>
<span class="line">            height: 40px;</span>
<span class="line">        }</span>
<span class="line">        .input&gt;label {</span>
<span class="line">            display: inline-block;</span>
<span class="line">            width: 140px;</span>
<span class="line">            text-align: right;</span>
<span class="line">        }</span>
<span class="line">        .input&gt;img {</span>
<span class="line">            width: 150px;</span>
<span class="line">            vertical-align: middle;</span>
<span class="line">        }</span>
<span class="line">        input[name=captcha] {</span>
<span class="line">            vertical-align: middle;</span>
<span class="line">        }</span>
<span class="line">        form+div {</span>
<span class="line">            margin-top: 20px;</span>
<span class="line">        }</span>
<span class="line">        form+div&gt;a {</span>
<span class="line">            text-decoration: none;</span>
<span class="line">            color: darkcyan;</span>
<span class="line">            font-size: 1.2em;</span>
<span class="line">        }</span>
<span class="line">        .button {</span>
<span class="line">            width: 500px;</span>
<span class="line">            text-align: center;</span>
<span class="line">            margin-top: 20px;</span>
<span class="line">        }</span>
<span class="line">        .hint {</span>
<span class="line">            color: red;</span>
<span class="line">            font-size: 12px;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;container&quot;&gt;</span>
<span class="line">        &lt;h1&gt;用户登录&lt;/h1&gt;</span>
<span class="line">        &lt;hr&gt;</span>
<span class="line">        &lt;p class=&quot;hint&quot;&gt;{{ hint }}&lt;/p&gt;</span>
<span class="line">        &lt;form action=&quot;/login/&quot; method=&quot;post&quot;&gt;</span>
<span class="line">            {% csrf_token %}</span>
<span class="line">            &lt;fieldset&gt;</span>
<span class="line">                &lt;legend&gt;用户信息&lt;/legend&gt;</span>
<span class="line">                &lt;div class=&quot;input&quot;&gt;</span>
<span class="line">                    &lt;label&gt;用户名：&lt;/label&gt;</span>
<span class="line">                    &lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;input&quot;&gt;</span>
<span class="line">                    &lt;label&gt;密码：&lt;/label&gt;</span>
<span class="line">                    &lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;input&quot;&gt;</span>
<span class="line">                    &lt;label&gt;验证码：&lt;/label&gt;</span>
<span class="line">                    &lt;input type=&quot;text&quot; name=&quot;captcha&quot;&gt;</span>
<span class="line">                    &lt;img id=&quot;code&quot; src=&quot;/captcha/&quot; alt=&quot;&quot; width=&quot;150&quot; height=&quot;40&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/fieldset&gt;</span>
<span class="line">            &lt;div class=&quot;button&quot;&gt;</span>
<span class="line">                &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;</span>
<span class="line">                &lt;input type=&quot;reset&quot; value=&quot;重置&quot;&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;a href=&quot;/&quot;&gt;返回首页&lt;/a&gt;</span>
<span class="line">            &lt;a href=&quot;/register/&quot;&gt;注册新用户&lt;/a&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在上面的表单中，我们使用了模板指令<code>{% csrf_token %}</code>为表单添加一个隐藏域（大家可以在浏览器中显示网页源代码就可以看到这个指令生成的<code>type</code>属性为<code>hidden</code>的<code>input</code>标签），它的作用是在表单中生成一个随机令牌（token）来防范<a href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0" target="_blank" rel="noopener noreferrer">跨站请求伪造</a>（简称为CSRF），这也是Django在提交表单时的硬性要求。如果我们的表单中没有这样的令牌，那么提交表单时，Django框架会产生一个响应状态码为<code>403</code>的响应（禁止访问），除非我们设置了免除CSRF令牌。下图是一个关于CSRF简单生动的例子。</p><p><img src="`+a+'" alt=""></p></li></ol><p>接下来，我们可以编写提供验证码和实现用户登录的视图函数，在此之前，我们先说说一个Web应用实现用户跟踪的方式以及Django框架对实现用户跟踪所提供的支持。对一个Web应用来说，用户登录成功后必然要让服务器能够记住该用户已经登录，这样服务器才能为这个用户提供更好的服务，而且上面说到的CSRF也是通过钓鱼网站来套取用户登录信息进行恶意操作的攻击手段，这些都是以用户跟踪技术为基础的。在理解了这些背景知识后，我们就清楚用户登录时到底需要执行哪些操作。</p><h3 id="实现用户跟踪" tabindex="-1"><a class="header-anchor" href="#实现用户跟踪"><span>实现用户跟踪</span></a></h3><p>如今，一个网站如果不通过某种方式记住你是谁以及你之前在网站的活动情况，失去的就是网站的可用性和便利性，继而很有可能导致网站用户的流式，所以记住一个用户（更专业的说法叫<strong>用户跟踪</strong>）对绝大多数Web应用来说都是必需的功能。</p><p>在服务器端，我们想记住一个用户最简单的办法就是创建一个对象，通过这个对象就可以把用户相关的信息都保存起来，这个对象就是我们常说的session（用户会话对象）。那么问题来了，HTTP本身是一个<strong>无连接</strong>（每次请求和响应的过程中，服务器一旦完成对客户端请求的响应之后就断开连接）、<strong>无状态</strong>（客户端再次发起对服务器的请求时，服务器无法得知这个客户端之前的任何信息）的协议，即便服务器通过session对象保留了用户数据，还得通过某种方式来确定当前的请求与之前保存过的哪一个session是有关联的。相信很多人都能想到，我们可以给每个session对象分配一个全局唯一的标识符来识别session对象，我们姑且称之为sessionid，每次客户端发起请求时，只要携带上这个sessionid，就有办法找到与之对应的session对象，从而实现在两次请求之间记住该用户的信息，也就是我们之前说的用户跟踪。</p><p>要让客户端记住并在每次请求时带上sessionid又有以下几种做法：</p><ol><li><p>URL重写。所谓URL重写就是在URL中携带sessionid，例如：<code>http://www.example.com/index.html?sessionid=123456</code>，服务器通过获取sessionid参数的值来取到与之对应的session对象。</p></li><li><p>隐藏域（隐式表单域）。在提交表单的时候，可以通过在表单中设置隐藏域向服务器发送额外的数据。例如：<code>&lt;input type=&quot;hidden&quot; name=&quot;sessionid&quot; value=&quot;123456&quot;&gt;</code>。</p></li><li><p>本地存储。现在的浏览器都支持多种本地存储方案，包括：cookie、localStorage、sessionStorage、IndexedDB等。在这些方案中，cookie是历史最为悠久也是被诟病得最多的一种方案，也是我们接下来首先为大家讲解的一种方案。简单的说，cookie是一种以键值对方式保存在浏览器临时文件中的数据，每次请求时，请求头中会携带本站点的cookie到服务器，那么只要将sessionid写入cookie，下次请求时服务器只要读取请求头中的cookie就能够获得这个sessionid，如下图所示。</p><p><img src="'+l+'" alt=""></p><p>在HTML5时代要，除了cookie，还可以使用新的本地存储API来保存数据，就是刚才提到的localStorage、sessionStorage、IndexedDB等技术，如下图所示。</p><p><img src="'+d+`" alt=""></p></li></ol><p><strong>总结一下</strong>，要实现用户跟踪，服务器端可以为每个用户会话创建一个session对象并将session对象的ID写入到浏览器的cookie中；用户下次请求服务器时，浏览器会在HTTP请求头中携带该网站保存的cookie信息，这样服务器就可以从cookie中找到session对象的ID并根据此ID获取到之前创建的session对象；由于session对象可以用键值对的方式保存用户数据，这样之前保存在session对象中的信息可以悉数取出，服务器也可以根据这些信息判定用户身份和了解用户偏好，为用户提供更好的个性化服务。</p><h3 id="django框架对session的支持" tabindex="-1"><a class="header-anchor" href="#django框架对session的支持"><span>Django框架对session的支持</span></a></h3><p>在创建Django项目时，默认的配置文件<code>settings.py</code>文件中已经激活了一个名为<code>SessionMiddleware</code>的中间件（关于中间件的知识我们在后面的章节做详细讲解，这里只需要知道它的存在即可），因为这个中间件的存在，我们可以直接通过请求对象的<code>session</code>属性来操作会话对象。前面我们说过，<code>session</code>属性是一个像字典一样可以读写数据的容器对象，因此我们可以使用“键值对”的方式来保留用户数据。与此同时，<code>SessionMiddleware</code>中间件还封装了对cookie的操作，在cookie中保存了sessionid，这一点我们在上面已经提到过了。</p><p>在默认情况下，Django将session的数据序列化后保存在关系型数据库中，在Django 1.6以后的版本中，默认的序列化数据的方式是JSON序列化，而在此之前一直使用Pickle序列化。JSON序列化和Pickle序列化的差别在于前者将对象序列化为字符串（字符形式），而后者将对象序列化为字节串（二进制形式），因为安全方面的原因，JSON序列化成为了目前Django框架默认序列化数据的方式，这就要求在我们保存在session中的数据必须是能够JSON序列化的，否则就会引发异常。还有一点需要说明的是，使用关系型数据库保存session中的数据在大多数时候并不是最好的选择，因为数据库可能会承受巨大的压力而成为系统性能的瓶颈，在后面的章节中我们会告诉大家如何将session保存到缓存服务中以提升系统的性能。</p><h3 id="实现用户登录验证" tabindex="-1"><a class="header-anchor" href="#实现用户登录验证"><span>实现用户登录验证</span></a></h3><p>首先，我们在刚才的<code>polls/utils.py</code>文件中编写生成随机验证码的函数<code>gen_random_code</code>，内容如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line"></span>
<span class="line">ALL_CHARS = &#39;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def gen_random_code(length=4):</span>
<span class="line">    return &#39;&#39;.join(random.choices(ALL_CHARS, k=length))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写生成验证码图片的类<code>Captcha</code>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">图片验证码</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import os</span>
<span class="line">import random</span>
<span class="line">from io import BytesIO</span>
<span class="line"></span>
<span class="line">from PIL import Image</span>
<span class="line">from PIL import ImageFilter</span>
<span class="line">from PIL.ImageDraw import Draw</span>
<span class="line">from PIL.ImageFont import truetype</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Bezier:</span>
<span class="line">    &quot;&quot;&quot;贝塞尔曲线&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self.tsequence = tuple([t / 20.0 for t in range(21)])</span>
<span class="line">        self.beziers = {}</span>
<span class="line"></span>
<span class="line">    def make_bezier(self, n):</span>
<span class="line">        &quot;&quot;&quot;绘制贝塞尔曲线&quot;&quot;&quot;</span>
<span class="line">        try:</span>
<span class="line">            return self.beziers[n]</span>
<span class="line">        except KeyError:</span>
<span class="line">            combinations = pascal_row(n - 1)</span>
<span class="line">            result = []</span>
<span class="line">            for t in self.tsequence:</span>
<span class="line">                tpowers = (t ** i for i in range(n))</span>
<span class="line">                upowers = ((1 - t) ** i for i in range(n - 1, -1, -1))</span>
<span class="line">                coefs = [c * a * b for c, a, b in zip(combinations,</span>
<span class="line">                                                      tpowers, upowers)]</span>
<span class="line">                result.append(coefs)</span>
<span class="line">            self.beziers[n] = result</span>
<span class="line">            return result</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Captcha:</span>
<span class="line">    &quot;&quot;&quot;验证码&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, width, height, fonts=None, color=None):</span>
<span class="line">        self._image = None</span>
<span class="line">        self._fonts = fonts if fonts else \\</span>
<span class="line">            [os.path.join(os.path.dirname(__file__), &#39;fonts&#39;, font)</span>
<span class="line">             for font in [&#39;Arial.ttf&#39;, &#39;Georgia.ttf&#39;, &#39;Action.ttf&#39;]]</span>
<span class="line">        self._color = color if color else random_color(0, 200, random.randint(220, 255))</span>
<span class="line">        self._width, self._height = width, height</span>
<span class="line"></span>
<span class="line">    @classmethod</span>
<span class="line">    def instance(cls, width=200, height=75):</span>
<span class="line">        &quot;&quot;&quot;用于获取Captcha对象的类方法&quot;&quot;&quot;</span>
<span class="line">        prop_name = f&#39;_instance_{width}_{height}&#39;</span>
<span class="line">        if not hasattr(cls, prop_name):</span>
<span class="line">            setattr(cls, prop_name, cls(width, height))</span>
<span class="line">        return getattr(cls, prop_name)</span>
<span class="line"></span>
<span class="line">    def _background(self):</span>
<span class="line">        &quot;&quot;&quot;绘制背景&quot;&quot;&quot;</span>
<span class="line">        Draw(self._image).rectangle([(0, 0), self._image.size],</span>
<span class="line">                                    fill=random_color(230, 255))</span>
<span class="line"></span>
<span class="line">    def _smooth(self):</span>
<span class="line">        &quot;&quot;&quot;平滑图像&quot;&quot;&quot;</span>
<span class="line">        return self._image.filter(ImageFilter.SMOOTH)</span>
<span class="line"></span>
<span class="line">    def _curve(self, width=4, number=6, color=None):</span>
<span class="line">        &quot;&quot;&quot;绘制曲线&quot;&quot;&quot;</span>
<span class="line">        dx, height = self._image.size</span>
<span class="line">        dx /= number</span>
<span class="line">        path = [(dx * i, random.randint(0, height))</span>
<span class="line">                for i in range(1, number)]</span>
<span class="line">        bcoefs = Bezier().make_bezier(number - 1)</span>
<span class="line">        points = []</span>
<span class="line">        for coefs in bcoefs:</span>
<span class="line">            points.append(tuple(sum([coef * p for coef, p in zip(coefs, ps)])</span>
<span class="line">                                for ps in zip(*path)))</span>
<span class="line">        Draw(self._image).line(points, fill=color if color else self._color, width=width)</span>
<span class="line"></span>
<span class="line">    def _noise(self, number=50, level=2, color=None):</span>
<span class="line">        &quot;&quot;&quot;绘制扰码&quot;&quot;&quot;</span>
<span class="line">        width, height = self._image.size</span>
<span class="line">        dx, dy = width / 10, height / 10</span>
<span class="line">        width, height = width - dx, height - dy</span>
<span class="line">        draw = Draw(self._image)</span>
<span class="line">        for i in range(number):</span>
<span class="line">            x = int(random.uniform(dx, width))</span>
<span class="line">            y = int(random.uniform(dy, height))</span>
<span class="line">            draw.line(((x, y), (x + level, y)),</span>
<span class="line">                      fill=color if color else self._color, width=level)</span>
<span class="line"></span>
<span class="line">    def _text(self, captcha_text, fonts, font_sizes=None, drawings=None, squeeze_factor=0.75, color=None):</span>
<span class="line">        &quot;&quot;&quot;绘制文本&quot;&quot;&quot;</span>
<span class="line">        color = color if color else self._color</span>
<span class="line">        fonts = tuple([truetype(name, size)</span>
<span class="line">                       for name in fonts</span>
<span class="line">                       for size in font_sizes or (65, 70, 75)])</span>
<span class="line">        draw = Draw(self._image)</span>
<span class="line">        char_images = []</span>
<span class="line">        for c in captcha_text:</span>
<span class="line">            font = random.choice(fonts)</span>
<span class="line">            c_width, c_height = draw.textsize(c, font=font)</span>
<span class="line">            char_image = Image.new(&#39;RGB&#39;, (c_width, c_height), (0, 0, 0))</span>
<span class="line">            char_draw = Draw(char_image)</span>
<span class="line">            char_draw.text((0, 0), c, font=font, fill=color)</span>
<span class="line">            char_image = char_image.crop(char_image.getbbox())</span>
<span class="line">            for drawing in drawings:</span>
<span class="line">                d = getattr(self, drawing)</span>
<span class="line">                char_image = d(char_image)</span>
<span class="line">            char_images.append(char_image)</span>
<span class="line">        width, height = self._image.size</span>
<span class="line">        offset = int((width - sum(int(i.size[0] * squeeze_factor)</span>
<span class="line">                                  for i in char_images[:-1]) -</span>
<span class="line">                      char_images[-1].size[0]) / 2)</span>
<span class="line">        for char_image in char_images:</span>
<span class="line">            c_width, c_height = char_image.size</span>
<span class="line">            mask = char_image.convert(&#39;L&#39;).point(lambda i: i * 1.97)</span>
<span class="line">            self._image.paste(char_image,</span>
<span class="line">                              (offset, int((height - c_height) / 2)),</span>
<span class="line">                              mask)</span>
<span class="line">            offset += int(c_width * squeeze_factor)</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def _warp(image, dx_factor=0.3, dy_factor=0.3):</span>
<span class="line">        &quot;&quot;&quot;图像扭曲&quot;&quot;&quot;</span>
<span class="line">        width, height = image.size</span>
<span class="line">        dx = width * dx_factor</span>
<span class="line">        dy = height * dy_factor</span>
<span class="line">        x1 = int(random.uniform(-dx, dx))</span>
<span class="line">        y1 = int(random.uniform(-dy, dy))</span>
<span class="line">        x2 = int(random.uniform(-dx, dx))</span>
<span class="line">        y2 = int(random.uniform(-dy, dy))</span>
<span class="line">        warp_image = Image.new(</span>
<span class="line">            &#39;RGB&#39;,</span>
<span class="line">            (width + abs(x1) + abs(x2), height + abs(y1) + abs(y2)))</span>
<span class="line">        warp_image.paste(image, (abs(x1), abs(y1)))</span>
<span class="line">        width2, height2 = warp_image.size</span>
<span class="line">        return warp_image.transform(</span>
<span class="line">            (width, height),</span>
<span class="line">            Image.QUAD,</span>
<span class="line">            (x1, y1, -x1, height2 - y2, width2 + x2, height2 + y2, width2 - x2, -y1))</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def _offset(image, dx_factor=0.1, dy_factor=0.2):</span>
<span class="line">        &quot;&quot;&quot;图像偏移&quot;&quot;&quot;</span>
<span class="line">        width, height = image.size</span>
<span class="line">        dx = int(random.random() * width * dx_factor)</span>
<span class="line">        dy = int(random.random() * height * dy_factor)</span>
<span class="line">        offset_image = Image.new(&#39;RGB&#39;, (width + dx, height + dy))</span>
<span class="line">        offset_image.paste(image, (dx, dy))</span>
<span class="line">        return offset_image</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def _rotate(image, angle=25):</span>
<span class="line">        &quot;&quot;&quot;图像旋转&quot;&quot;&quot;</span>
<span class="line">        return image.rotate(random.uniform(-angle, angle),</span>
<span class="line">                            Image.BILINEAR, expand=1)</span>
<span class="line"></span>
<span class="line">    def generate(self, captcha_text=&#39;&#39;, fmt=&#39;PNG&#39;):</span>
<span class="line">        &quot;&quot;&quot;生成验证码(文字和图片)</span>
<span class="line">        :param captcha_text: 验证码文字</span>
<span class="line">        :param fmt: 生成的验证码图片格式</span>
<span class="line">        :return: 验证码图片的二进制数据</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self._image = Image.new(&#39;RGB&#39;, (self._width, self._height), (255, 255, 255))</span>
<span class="line">        self._background()</span>
<span class="line">        self._text(captcha_text, self._fonts,</span>
<span class="line">                   drawings=[&#39;_warp&#39;, &#39;_rotate&#39;, &#39;_offset&#39;])</span>
<span class="line">        self._curve()</span>
<span class="line">        self._noise()</span>
<span class="line">        self._smooth()</span>
<span class="line">        image_bytes = BytesIO()</span>
<span class="line">        self._image.save(image_bytes, format=fmt)</span>
<span class="line">        return image_bytes.getvalue()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def pascal_row(n=0):</span>
<span class="line">    &quot;&quot;&quot;生成毕达哥拉斯三角形（杨辉三角）&quot;&quot;&quot;</span>
<span class="line">    result = [1]</span>
<span class="line">    x, numerator = 1, n</span>
<span class="line">    for denominator in range(1, n // 2 + 1):</span>
<span class="line">        x *= numerator</span>
<span class="line">        x /= denominator</span>
<span class="line">        result.append(x)</span>
<span class="line">        numerator -= 1</span>
<span class="line">    if n &amp; 1 == 0:</span>
<span class="line">        result.extend(reversed(result[:-1]))</span>
<span class="line">    else:</span>
<span class="line">        result.extend(reversed(result))</span>
<span class="line">    return result</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def random_color(start=0, end=255, opacity=255):</span>
<span class="line">    &quot;&quot;&quot;获得随机颜色&quot;&quot;&quot;</span>
<span class="line">    red = random.randint(start, end)</span>
<span class="line">    green = random.randint(start, end)</span>
<span class="line">    blue = random.randint(start, end)</span>
<span class="line">    if opacity is None:</span>
<span class="line">        return red, green, blue</span>
<span class="line">    return red, green, blue, opacity</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中用到了三个字体文件，字体文件位于<code>polls/fonts</code>目录下，大家可以自行添加字体文件，但是需要注意字体文件的文件名跟上面代码的第45行保持一致。</p></blockquote><p>接下来，我们先完成提供验证码的视图函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def get_captcha(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    &quot;&quot;&quot;验证码&quot;&quot;&quot;</span>
<span class="line">    captcha_text = gen_random_code()</span>
<span class="line">    request.session[&#39;captcha&#39;] = captcha_text</span>
<span class="line">    image_data = Captcha.instance().generate(captcha_text)</span>
<span class="line">    return HttpResponse(image_data, content_type=&#39;image/png&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面代码中的第4行，我们将随机生成的验证码字符串保存到session中，稍后用户登录时，我们要将保存在session中的验证码字符串和用户输入的验证码字符串进行比对，如果用户输入了正确的验证码才能够执行后续的登录流程，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def login(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    hint = &#39;&#39;</span>
<span class="line">    if request.method == &#39;POST&#39;:</span>
<span class="line">        username = request.POST.get(&#39;username&#39;)</span>
<span class="line">        password = request.POST.get(&#39;password&#39;)</span>
<span class="line">        if username and password:</span>
<span class="line">            password = gen_md5_digest(password)</span>
<span class="line">            user = User.objects.filter(username=username, password=password).first()</span>
<span class="line">            if user:</span>
<span class="line">                request.session[&#39;userid&#39;] = user.no</span>
<span class="line">                request.session[&#39;username&#39;] = user.username</span>
<span class="line">                return redirect(&#39;/&#39;)</span>
<span class="line">            else:</span>
<span class="line">                hint = &#39;用户名或密码错误&#39;</span>
<span class="line">        else:</span>
<span class="line">            hint = &#39;请输入有效的用户名和密码&#39;</span>
<span class="line">    return render(request, &#39;login.html&#39;, {&#39;hint&#39;: hint})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码没有对用户名和密码没有进行验证，实际项目中建议使用正则表达式验证用户输入信息，否则有可能将无效的数据交给数据库进行处理或者造成其他安全方面的隐患。</p></blockquote><p>上面的代码中，我们设定了登录成功后会在session中保存用户的编号（<code>userid</code>）和用户名（<code>username</code>），页面会重定向到首页。接下来我们可以稍微对首页的代码进行调整，在页面的右上角显示出登录用户的用户名。我们将这段代码单独写成了一个名为header.html的HTML文件，首页中可以通过在<code>&lt;body&gt;</code>标签中添加<code>{% include &#39;header.html&#39; %}</code>来包含这个页面，代码如下所示。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;div class=&quot;user&quot;&gt;</span>
<span class="line">    {% if request.session.userid %}</span>
<span class="line">    &lt;span&gt;{{ request.session.username }}&lt;/span&gt;</span>
<span class="line">    &lt;a href=&quot;/logout&quot;&gt;注销&lt;/a&gt;</span>
<span class="line">    {% else %}</span>
<span class="line">    &lt;a href=&quot;/login&quot;&gt;登录&lt;/a&gt;&amp;nbsp;&amp;nbsp;</span>
<span class="line">    {% endif %}</span>
<span class="line">    &lt;a href=&quot;/register&quot;&gt;注册&lt;/a&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户没有登录，页面会显示登录和注册的超链接；而用户登录成功后，页面上会显示用户名和注销的链接，注销链接对应的视图函数如下所示，URL的映射与之前讲过的类似，不再赘述。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def logout(request):</span>
<span class="line">    &quot;&quot;&quot;注销&quot;&quot;&quot;</span>
<span class="line">    request.session.flush()</span>
<span class="line">    return redirect(&#39;/&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码通过session对象<code>flush</code>方法来销毁session，一方面清除了服务器上session对象保存的用户数据，一方面将保存在浏览器cookie中的sessionid删除掉，稍后我们会对如何读写cookie的操作加以说明。</p><p>我们可以通过项目使用的数据库中名为<code>django_session</code> 的表来找到所有的session，该表的结构如下所示：</p><table><thead><tr><th>session_key</th><th>session_data</th><th>expire_date</th></tr></thead><tbody><tr><td>c9g2gt5cxo0k2evykgpejhic5ae7bfpl</td><td>MmI4YzViYjJhOGMyMDJkY2M5Yzg3...</td><td>2019-05-25 23:16:13.898522</td></tr></tbody></table><p>其中，第1列就是浏览器cookie中保存的sessionid；第2列是经过BASE64编码后的session中的数据，如果使用Python的<code>base64</code>对其进行解码，解码的过程和结果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import base64</span>
<span class="line"></span>
<span class="line">base64.b64decode(&#39;MmI4YzViYjJhOGMyMDJkY2M5Yzg3ZWIyZGViZmUzYmYxNzdlNDdmZjp7ImNhcHRjaGEiOiJzS3d0Iiwibm8iOjEsInVzZXJuYW1lIjoiamFja2ZydWVkIn0=&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第3列是session的过期时间，session过期后浏览器保存的cookie中的sessionid就会失效，但是数据库中的这条对应的记录仍然会存在，如果想清除过期的数据，可以使用下面的命令。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py clearsessions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Django框架默认的session过期时间为两周（1209600秒），如果想修改这个时间，可以在项目的配置文件中添加如下所示的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 配置会话的超时时间为1天（86400秒）</span>
<span class="line">SESSION_COOKIE_AGE = 86400</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>有很多对安全性要求较高的应用都必须在关闭浏览器窗口时让会话过期，不再保留用户的任何信息，如果希望在关闭浏览器窗口时就让会话过期（cookie中的sessionid失效），可以加入如下所示的配置。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 设置为True在关闭浏览器窗口时session就过期</span>
<span class="line">SESSION_EXPIRE_AT_BROWSER_CLOSE = True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不希望将session的数据保存在数据库中，可以将其放入缓存中，对应的配置如下所示，缓存的配置和使用我们在后面讲解。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 配置将会话对象放到缓存中存储</span>
<span class="line">SESSION_ENGINE = &#39;django.contrib.sessions.backends.cache&#39;</span>
<span class="line"># 配置使用哪一组缓存来保存会话</span>
<span class="line">SESSION_CACHE_ALIAS = &#39;default&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要修改session数据默认的序列化方式，可以将默认的<code>JSONSerializer</code>修改为<code>PickleSerializer</code>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SESSION_SERIALIZER = &#39;django.contrib.sessions.serializers.PickleSerializer&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，我们就可以限制只有登录用户才能为老师投票，修改后的<code>praise_or_criticize</code>函数如下所示，我们通过从<code>request.session</code>中获取<code>userid</code>来判定用户是否登录。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def praise_or_criticize(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    if request.session.get(&#39;userid&#39;):</span>
<span class="line">        try:</span>
<span class="line">            tno = int(request.GET.get(&#39;tno&#39;))</span>
<span class="line">            teacher = Teacher.objects.get(no=tno)</span>
<span class="line">            if request.path.startswith(&#39;/praise/&#39;):</span>
<span class="line">                teacher.good_count += 1</span>
<span class="line">                count = teacher.good_count</span>
<span class="line">            else:</span>
<span class="line">                teacher.bad_count += 1</span>
<span class="line">                count = teacher.bad_count</span>
<span class="line">            teacher.save()</span>
<span class="line">            data = {&#39;code&#39;: 20000, &#39;mesg&#39;: &#39;投票成功&#39;, &#39;count&#39;: count}</span>
<span class="line">        except (ValueError, Teacher.DoesNotExist):</span>
<span class="line">            data = {&#39;code&#39;: 20001, &#39;mesg&#39;: &#39;投票失败&#39;}</span>
<span class="line">    else:</span>
<span class="line">        data = {&#39;code&#39;: 20002, &#39;mesg&#39;: &#39;请先登录&#39;}</span>
<span class="line">    return JsonResponse(data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，在修改了视图函数后，<code>teachers.html</code>也需要进行调整，用户如果没有登录，就将用户引导至登录页，登录成功再返回到投票页，此处不再赘述。</p><h3 id="在视图函数中读写cookie" tabindex="-1"><a class="header-anchor" href="#在视图函数中读写cookie"><span>在视图函数中读写cookie</span></a></h3><p>下面我们对如何使用cookie做一个更为细致的说明以便帮助大家在Web项目中更好的使用这项技术。Django封装的<code>HttpRequest</code>和<code>HttpResponse</code>对象分别提供了读写cookie的操作。</p><p>HttpRequest封装的属性和方法：</p><ol><li><code>COOKIES</code>属性 - 该属性包含了HTTP请求携带的所有cookie。</li><li><code>get_signed_cookie</code>方法 - 获取带签名的cookie，如果签名验证失败，会产生<code>BadSignature</code>异常。</li></ol><p>HttpResponse封装的方法：</p><ol><li><code>set_cookie</code>方法 - 该方法可以设置一组键值对并将其最终将写入浏览器。</li><li><code>set_signed_cookie</code>方法 - 跟上面的方法作用相似，但是会对cookie进行签名来达到防篡改的作用。因为如果篡改了cookie中的数据，在不知道<a href="https://zh.wikipedia.org/wiki/%E5%AF%86%E9%92%A5" target="_blank" rel="noopener noreferrer">密钥</a>和<a href="https://zh.wikipedia.org/wiki/%E7%9B%90_(%E5%AF%86%E7%A0%81%E5%AD%A6)" target="_blank" rel="noopener noreferrer">盐</a>的情况下是无法生成有效的签名，这样服务器在读取cookie时会发现数据与签名不一致从而产生<code>BadSignature</code>异常。需要说明的是，这里所说的密钥就是我们在Django项目配置文件中指定的<code>SECRET_KEY</code>，而盐是程序中设定的一个字符串，你愿意设定为什么都可以，只要是一个有效的字符串。</li></ol><p>上面提到的方法，如果不清楚它们的具体用法，可以自己查阅一下Django的<a href="https://docs.djangoproject.com/en/2.1/ref/request-response/" target="_blank" rel="noopener noreferrer">官方文档</a>，没有什么资料比官方文档能够更清楚的告诉你这些方法到底如何使用。</p><p>刚才我们说过了，激活<code>SessionMiddleware</code>之后，每个<code>HttpRequest</code>对象都会绑定一个session属性，它是一个类似字典的对象，除了保存用户数据之外还提供了检测浏览器是否支持cookie的方法，包括：</p><ol><li><code>set_test_cookie</code>方法 - 设置用于测试的cookie。</li><li><code>test_cookie_worked</code>方法 - 检测测试cookie是否工作。</li><li><code>delete_test_cookie</code>方法 - 删除用于测试的cookie。</li><li><code>set_expiry</code>方法 - 设置会话的过期时间。</li><li><code>get_expire_age</code>/<code>get_expire_date</code>方法 - 获取会话的过期时间。</li><li><code>clear_expired</code>方法 - 清理过期的会话。</li></ol><p>下面是在执行登录之前检查浏览器是否支持cookie的代码。通常情况下，浏览器默认开启了对cookie的支持，但是可能因为某种原因，用户禁用了浏览器的cookie功能，遇到这种情况我们可以在视图函数中提供一个检查功能，如果检查到用户浏览器不支持cookie，可以给出相应的提示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def login(request):</span>
<span class="line">    if request.method == &#39;POST&#39;:</span>
<span class="line">        if request.session.test_cookie_worked():</span>
<span class="line">            request.session.delete_test_cookie()</span>
<span class="line">            # Add your code to perform login process here</span>
<span class="line">        else:</span>
<span class="line">            return HttpResponse(&quot;Please enable cookies and try again.&quot;)</span>
<span class="line">    request.session.set_test_cookie()</span>
<span class="line">    return render_to_response(&#39;login.html&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie的替代品" tabindex="-1"><a class="header-anchor" href="#cookie的替代品"><span>Cookie的替代品</span></a></h3><p>之前我们说过了，cookie的名声一直都不怎么好，当然我们在实际开发中是不会在cookie中保存用户的敏感信息（如用户的密码、信用卡的账号等）的，而且保存在cookie中的数据一般也会做好编码和签名的工作。对于支持HTML5的浏览器来说，可以使用localStorage和sessionStorage做为cookie的替代方案，相信从名字上你就能听出二者的差别，存储在<code>localStorage</code>的数据可以长期保留；而存储在<code>sessionStorage</code>的数据会在浏览器关闭时会被清除 。关于这些cookie替代品的用法，建议大家查阅<a href="https://developer.mozilla.org/zh-CN/docs/Web" target="_blank" rel="noopener noreferrer">MDN</a>来进行了解。</p>`,61),p=[t];function r(o,u){return e(),n("div",null,p)}const m=s(c,[["render",r],["__file","49.Cookie和Session.html.vue"]]),b=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/49.Cookie%E5%92%8CSession.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"Cookie和Session","slug":"cookie和session","link":"#cookie和session","children":[{"level":3,"title":"用户登录的准备工作","slug":"用户登录的准备工作","link":"#用户登录的准备工作","children":[]},{"level":3,"title":"实现用户跟踪","slug":"实现用户跟踪","link":"#实现用户跟踪","children":[]},{"level":3,"title":"Django框架对session的支持","slug":"django框架对session的支持","link":"#django框架对session的支持","children":[]},{"level":3,"title":"实现用户登录验证","slug":"实现用户登录验证","link":"#实现用户登录验证","children":[]},{"level":3,"title":"在视图函数中读写cookie","slug":"在视图函数中读写cookie","link":"#在视图函数中读写cookie","children":[]},{"level":3,"title":"Cookie的替代品","slug":"cookie的替代品","link":"#cookie的替代品","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/49.Cookie和Session.md"}');export{m as comp,b as data};
