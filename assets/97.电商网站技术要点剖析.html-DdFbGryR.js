import{_ as s,c as n,o as e,d as a}from"./app-CfKFMHBg.js";const i="/docs/assets/shopping-pdm-C8R5p48E.png",l="/docs/assets/oauth2-CvH4gYsU.png",t="/docs/assets/alipay_web_developer-C91oi9Kq.png",d={},p=a('<h2 id="电商网站技术要点剖析" tabindex="-1"><a class="header-anchor" href="#电商网站技术要点剖析"><span>电商网站技术要点剖析</span></a></h2><h3 id="商业模式" tabindex="-1"><a class="header-anchor" href="#商业模式"><span>商业模式</span></a></h3><ol><li>B2B - 商家对商家，交易双方都是企业（商家），最典型的案例就是阿里巴巴。</li><li>C2C - 个人对个人，例如：淘宝、人人车。</li><li>B2C - 商家对个人，例如：唯品会，聚美优品。</li><li>C2B - 个人对商家，先有消费者提出需求，后有商家按需求组织生产，例如： 尚品宅配。</li><li>O2O - 线上到线下，将线下的商务机会与互联网结合，让互联网成为线下交易的平台，例如：美团外卖、饿了么。</li><li>B2B2C - 商家对商家对个人，例如：天猫、京东。</li></ol><h3 id="需求要点" tabindex="-1"><a class="header-anchor" href="#需求要点"><span>需求要点</span></a></h3><ol><li>用户端 <ul><li><p>首页（商品分类、广告轮播、滚动快讯、瀑布加载、推荐、折扣、热销、……）</p></li><li><p>用户（登录（第三方登录）、注册、注销、自服务（个人信息、浏览历史、收货地址、……））</p></li><li><p>商品（分类、列表、详情、搜索、热门搜索、搜索历史、添加到购物车、收藏、关注、评论、……）</p></li><li><p>购物车（查看、编辑（修改数量、删除商品、清空））</p></li><li><p>订单（提交订单（支付）、历史订单、订单详情、订单评价、……）</p></li></ul></li><li>管理端 <ul><li>核心业务实体的CRUD</li><li>定时任务（周期性和非周期性，如处理未支付订单、采集数据对异常事件报警、……）</li><li>报表功能（导入导出Excel、PDF等以及前端ECharts统计图表展示）</li><li>权限控制（RBAC、白名单、黑名单、……）</li><li>业务流转（如发起退款流程，常用流程引擎有：Activity、Airflow、Spiff等）</li><li>三方服务（接入地图、短信、物流、支付、实名认证、天气、监控、云存储、……）</li></ul></li></ol><h3 id="物理模型设计" tabindex="-1"><a class="header-anchor" href="#物理模型设计"><span>物理模型设计</span></a></h3><p>首先要搞清楚两个概念：SPU（Standard Product Unit）和SKU（Stock Keeping Unit）。</p><ul><li>SPU：iPhone 6s</li><li>SKU：iPhone 6s 64G 土豪金</li></ul><p><img src="'+i+'" alt=""></p><h3 id="第三方登录" tabindex="-1"><a class="header-anchor" href="#第三方登录"><span>第三方登录</span></a></h3><p>第三方登录是指利用第三方网站（通常是知名社交网站）的账号进行登录验证（主要是通过知名第三方网站获取到用户相关信息），比如国内的 QQ、微博，国外的Google、Facebook等。第三方登录大部分都是使用<a href="https://en.wikipedia.org/wiki/OAuth" target="_blank" rel="noopener noreferrer">OAuth</a>协议，它是一个关于授权的开放网络标准（<strong>数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌，用来代替密码，供第三方应用使用</strong>），得到了广泛的应用，目前通常使用的是2.0版本。关于OAuth的基础知识，可以阅读阮一峰老师的<a href="http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html" target="_blank" rel="noopener noreferrer">《理解OAuth 2.0》</a>。关于<strong>令牌</strong>和<strong>密码</strong>的区别，我们可以简单总结出以下三点差异：</p><ol><li>令牌是短期的，到期会自动失效，用户自己无法修改。密码一般长期有效，用户不修改，就不会发生变化。</li><li>令牌可以被数据所有者撤销，会立即失效。以上例而言，屋主可以随时取消快递员的令牌。密码一般不允许被他人撤销。</li><li>令牌有权限范围（scope），比如只能进小区的二号门。对于网络服务来说，只读令牌就比读写令牌更安全。密码一般是完整权限。</li></ol><p>所以，通过令牌既可以让第三方应用获得权限，同时又随时可控，不会危及系统安全。这就是OAuth协议的优势。</p><h4 id="oauth-2-0授权流程" tabindex="-1"><a class="header-anchor" href="#oauth-2-0授权流程"><span>OAuth 2.0授权流程</span></a></h4><ol><li>用户打开客户端以后，客户端要求用户（资源所有者）给予授权。</li><li>用户（资源所有者）同意给予客户端授权。</li><li>客户端使用上一步获得的授权，向认证服务器申请访问令牌。</li><li>认证服务器对客户端进行认证以后，发放访问令牌。</li><li>客户端使用访问令牌向资源服务器申请获取资源。</li><li>资源服务器确认访问令牌无误，同意向客户端开放资源。</li></ol><p><img src="'+l+`" alt=""></p><p>如果使用微博登录进行接入，其具体步骤可以参考微博开放平台上的<a href="http://open.weibo.com/wiki/Connect/login" target="_blank" rel="noopener noreferrer">“微博登录接入”</a>文档。使用QQ登录进行接入，需要首先注册成为QQ互联开发者并通过审核，具体的步骤可以参考QQ互联上的<a href="http://wiki.connect.qq.com/" target="_blank" rel="noopener noreferrer">“接入指南”</a>，具体的步骤可以参考<a href="http://wiki.connect.qq.com/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C_oauth2-0" target="_blank" rel="noopener noreferrer">“网站开发流程”</a>。</p><blockquote><p>提示：在Gitbook上面有一本名为<a href="https://shenxgan.gitbooks.io/django/content/publish/2015-08-10-django-oauth-login.html" target="_blank" rel="noopener noreferrer">《Django博客入门》</a>的书以Github为例介绍了第三方账号登录，有兴趣的可以自行阅读。</p></blockquote><p>通常电商网站在使用第三方登录时，会要求与网站账号进行绑定或者根据获取到的第三方账号信息（如：手机号）自动完成账号绑定。</p><h3 id="缓存预热和查询缓存" tabindex="-1"><a class="header-anchor" href="#缓存预热和查询缓存"><span>缓存预热和查询缓存</span></a></h3><h4 id="缓存预热" tabindex="-1"><a class="header-anchor" href="#缓存预热"><span>缓存预热</span></a></h4><p>所谓缓存预热，是指在启动服务器时将数据提前加载到缓存中，为此可以在Django应用的<code>apps.py</code>模块中编写<code>AppConfig</code>的子类并重写<code>ready()</code>方法，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">from django.apps import AppConfig</span>
<span class="line">from django.core.cache import cache</span>
<span class="line"></span>
<span class="line">SELECT_PROVINCE_SQL = &#39;select distid, name from tb_district where pid is null&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class CommonConfig(AppConfig):</span>
<span class="line">    name = &#39;common&#39;</span>
<span class="line"></span>
<span class="line">    def ready(self):</span>
<span class="line">        conn = pymysql.connect(host=&#39;1.2.3.4&#39;, port=3306,</span>
<span class="line">                               user=&#39;root&#39;, password=&#39;pass&#39;,</span>
<span class="line">                               database=&#39;db&#39;, charset=&#39;utf8&#39;,</span>
<span class="line">                               cursorclass=pymysql.cursors.DictCursor)</span>
<span class="line">        try:</span>
<span class="line">            with conn.cursor() as cursor:</span>
<span class="line">                cursor.execute(SELECT_PROVINCE_SQL)</span>
<span class="line">                provinces = cursor.fetchall()</span>
<span class="line">                cache.set(&#39;provinces&#39;, provinces)</span>
<span class="line">        finally:</span>
<span class="line">            conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，还需要在应用的<code>__init__.py</code>中编写下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">default_app_config = &#39;common.apps.CommonConfig&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者在项目的<code>settings.py</code>文件中注册应用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    ...</span>
<span class="line">    &#39;common.apps.CommonConfig&#39;,</span>
<span class="line">    ...</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询缓存" tabindex="-1"><a class="header-anchor" href="#查询缓存"><span>查询缓存</span></a></h4><p>自定义装饰器实现查询结果的缓存。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from pickle import dumps, loads</span>
<span class="line"></span>
<span class="line">from django.core.cache import caches</span>
<span class="line"></span>
<span class="line">MODEL_CACHE_KEY = &#39;project:modelcache:%s&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def my_model_cache(key, section=&#39;default&#39;, timeout=None):</span>
<span class="line">    &quot;&quot;&quot;实现模型缓存的装饰器&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def wrapper1(func):</span>
<span class="line"></span>
<span class="line">        def wrapper2(*args, **kwargs):</span>
<span class="line">            real_key = &#39;%s:%s&#39; % (MODEL_CACHE_KEY % key, &#39;:&#39;.join(map(str, args)))</span>
<span class="line">            serialized_data = caches[section].get(real_key)</span>
<span class="line">            if serialized_data:</span>
<span class="line">                data = loads(serialized_data)</span>
<span class="line">            else:</span>
<span class="line">                data = func(*args, **kwargs)</span>
<span class="line">                cache.set(real_key, dumps(data), timeout=timeout)</span>
<span class="line">            return data</span>
<span class="line"></span>
<span class="line">        return wrapper2</span>
<span class="line"></span>
<span class="line">    return wrapper1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@my_model_cache(key=&#39;provinces&#39;)</span>
<span class="line">def get_all_provinces():</span>
<span class="line">    return list(Province.objects.all())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="购物车实现" tabindex="-1"><a class="header-anchor" href="#购物车实现"><span>购物车实现</span></a></h3><p>问题一：已登录用户的购物车放在哪里？未登录用户的购物车放在哪里？</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class CartItem(object):</span>
<span class="line">    &quot;&quot;&quot;购物车中的商品项&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, sku, amount=1, selected=False):</span>
<span class="line">        self.sku = sku</span>
<span class="line">        self.amount = amount</span>
<span class="line">        self.selected = selected</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def total(self):</span>
<span class="line">        return self.sku.price * self.amount</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class ShoppingCart(object):</span>
<span class="line">    &quot;&quot;&quot;购物车&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self.items = {}</span>
<span class="line">        self.index = 0</span>
<span class="line"></span>
<span class="line">    def add_item(self, item):</span>
<span class="line">        if item.sku.id in self.items:</span>
<span class="line">            self.items[item.sku.id].amount += item.amount</span>
<span class="line">        else:</span>
<span class="line">            self.items[item.sku.id] = item</span>
<span class="line"></span>
<span class="line">    def remove_item(self, sku_id):</span>
<span class="line">        if sku_id in self.items:</span>
<span class="line">            self.items.remove(sku_id)</span>
<span class="line"></span>
<span class="line">    def clear_all_items(self):</span>
<span class="line">        self.items.clear()</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def cart_items(self):</span>
<span class="line">        return self.items.values()</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def cart_total(self):</span>
<span class="line">        total = 0</span>
<span class="line">        for item in self.items.values():</span>
<span class="line">            total += item.total</span>
<span class="line">        return total</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已登录用户的购物车可以放在数据库中（可以先在Redis中缓存）；未登录用户的购物车可以保存在Cookie、localStorage或sessionStorage中（减少服务器端内存开销）。</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &#39;1001&#39;: {sku: {...}, &#39;amount&#39;: 1, &#39;selected&#39;: True}, </span>
<span class="line">    &#39;1002&#39;: {sku: {...}, &#39;amount&#39;: 2, &#39;selected&#39;: False},</span>
<span class="line">    &#39;1003&#39;: {sku: {...}, &#39;amount&#39;: 3, &#39;selected&#39;: True},</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">request.get_signed_cookie(&#39;cart&#39;)</span>
<span class="line"></span>
<span class="line">cart_base64 = base64.base64encode(pickle.dumps(cart))</span>
<span class="line">response.set_signed_cookie(&#39;cart&#39;, cart_base64)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题二：用户登录之后，如何合并购物车？（目前电商应用的购物车几乎都做了持久化处理，主要是方便在多个终端之间共享数据）</p><h3 id="集成支付功能" tabindex="-1"><a class="header-anchor" href="#集成支付功能"><span>集成支付功能</span></a></h3><p>问题一：支付信息如何持久化？（必须保证每笔交易都有记录）</p><p>问题二：如何接入支付宝？（接入其他平台基本类似）</p><ol><li><a href="https://open.alipay.com/platform/home.htm" target="_blank" rel="noopener noreferrer">蚂蚁金服开放平台</a>。</li><li><a href="https://open.alipay.com/platform/homeRoleSelection.htm" target="_blank" rel="noopener noreferrer">入驻平台</a>。</li><li><a href="https://openhome.alipay.com/platform/appManage.htm#/apps" target="_blank" rel="noopener noreferrer">开发者中心</a>。</li><li><a href="https://docs.open.alipay.com/270/105899/" target="_blank" rel="noopener noreferrer">文档中心</a>。</li><li><a href="https://docs.open.alipay.com/54/103419" target="_blank" rel="noopener noreferrer">SDK集成</a> - <a href="https://pypi.org/project/alipay-sdk-python/" target="_blank" rel="noopener noreferrer">PYPI链接</a>。</li><li><a href="https://docs.open.alipay.com/270/105900/" target="_blank" rel="noopener noreferrer">API列表</a>。</li></ol><p><img src="`+t+`" alt=""></p><p>配置文件：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ALIPAY_APPID = &#39;......&#39;</span>
<span class="line">ALIPAY_URL = &#39;https://openapi.alipaydev.com/gateway.do&#39;</span>
<span class="line">ALIPAY_DEBUG = False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获得支付链接（发起支付）：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 创建调用支付宝的对象</span>
<span class="line">alipay = AliPay(</span>
<span class="line">    # 在线创建应用时分配的ID</span>
<span class="line">    appid=settings.ALIPAY_APPID,</span>
<span class="line">    app_notify_url=None,</span>
<span class="line">    # 自己应用的私钥</span>
<span class="line">    app_private_key_path=os.path.join(</span>
<span class="line">        os.path.dirname(os.path.abspath(__file__)), </span>
<span class="line">        &#39;keys/app_private_key.pem&#39;),</span>
<span class="line">    # 支付宝的公钥</span>
<span class="line">    alipay_public_key_path=os.path.join(</span>
<span class="line">        os.path.dirname(os.path.abspath(__file__)), </span>
<span class="line">        &#39;keys/alipay_public_key.pem&#39;),</span>
<span class="line">    sign_type=&#39;RSA2&#39;,</span>
<span class="line">    debug=settings.ALIPAY_DEBUG</span>
<span class="line">)</span>
<span class="line"># 调用获取支付页面操作</span>
<span class="line">order_info = alipay.api_alipay_trade_page_pay(</span>
<span class="line">    out_trade_no=&#39;...&#39;,</span>
<span class="line">    total_amount=&#39;...&#39;,</span>
<span class="line">    subject=&#39;...&#39;,</span>
<span class="line">    return_url=&#39;http://...&#39;</span>
<span class="line">)</span>
<span class="line"># 生成完整的支付页面URL</span>
<span class="line">alipay_url = settings.ALIPAY_URL + &#39;?&#39; + order_info</span>
<span class="line">return JsonResponse({&#39;alipay_url&#39;: alipay_url})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面返回的链接可以进入支付页面，支付完成后会自动跳转回上面代码中设定好的项目页面，在该页面中可以获得订单号（out_trade_no）、支付流水号（trade_no）、交易金额（total_amount）和对应的签名（sign）并请求后端验证和保存交易结果，代码如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 创建调用支付宝的对象</span>
<span class="line">alipay = AliPay(</span>
<span class="line">    # 在线创建应用时分配的ID</span>
<span class="line">    appid=settings.ALIPAY_APPID,</span>
<span class="line">    app_notify_url=None,</span>
<span class="line">    # 自己应用的私钥</span>
<span class="line">    app_private_key_path=os.path.join(</span>
<span class="line">        os.path.dirname(os.path.abspath(__file__)), </span>
<span class="line">        &#39;keys/app_private_key.pem&#39;),</span>
<span class="line">    # 支付宝的公钥</span>
<span class="line">    alipay_public_key_path=os.path.join(</span>
<span class="line">        os.path.dirname(os.path.abspath(__file__)), </span>
<span class="line">        &#39;keys/alipay_public_key.pem&#39;),</span>
<span class="line">    sign_type=&#39;RSA2&#39;,</span>
<span class="line">    debug=settings.ALIPAY_DEBUG</span>
<span class="line">)</span>
<span class="line"># 请求参数（假设是POST请求）中包括订单号、支付流水号、交易金额和签名</span>
<span class="line">params = request.POST.dict()</span>
<span class="line"># 调用验证操作</span>
<span class="line">if alipay.verify(params, params.pop(&#39;sign&#39;)):</span>
<span class="line">    # 对交易进行持久化操作</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支付宝的支付API还提供了交易查询、交易结算、退款、退款查询等一系列的接口，可以根据业务需要进行调用，此处不再进行赘述。</p><h3 id="秒杀和超卖" tabindex="-1"><a class="header-anchor" href="#秒杀和超卖"><span>秒杀和超卖</span></a></h3><ol><li>秒杀：秒杀是通常意味着要在很短的时间处理极高的并发，系统在短时间需要承受平时百倍以上的流量，因此秒杀架构是一个比较复杂的问题，其核心思路是流量控制和性能优化，需要从前端（通过JavaScript实现倒计时、避免重复提交和限制频繁刷新）到后台各个环节的配合。流量控制主要是限制只有少部分流量进入服务后端（毕竟最终只有少部分用户能够秒杀成功），同时在物理架构上使用缓存（一方面是因为读操作多写操作少；另外可以将库存放在Redis中，利用DECR原语实现减库存；同时也可以利用Redis来进行限流，道理跟限制频繁发送手机验证码是一样的）和消息队列（消息队列最为重要的作用就是“削峰”和“上下游节点解耦合”）来进行优化；此外还要采用无状态服务设计，这样才便于进行水平扩展（通过增加设备来为系统扩容）。</li><li>超卖现象：比如某商品的库存为1，此时用户1和用户2并发购买该商品，用户1提交订单后该商品的库存被修改为0，而此时用户2并不知道的情况下提交订单，该商品的库存再次被修改为-1这就是超卖现象。解决超卖现象有三种常见的思路： <ul><li>悲观锁控制：查询商品数量的时候就用<code>select ... for update</code>对数据加锁，这样的话用户1查询库存时，用户2因无法读取库存数量被阻塞，直到用户1提交或者回滚了更新库存的操作后才能继续，从而解决了超卖问题。但是这种做法对并发访问量很高的商品来说性能太过糟糕，实际开发中可以在库存小于某个值时才考虑加锁，但是总的来说这种做法不太可取。</li><li>乐观锁控制：查询商品数量不用加锁，更新库存的时候设定商品数量必须与之前查询数量相同才能更新，否则说明其他事务已经更新了库存，必须重新发出请求。</li><li>尝试减库存：将上面的查询（<code>select</code>）和更新（<code>update</code>）操作合并为一条SQL操作，更新库存的时候，在<code>where</code>筛选条件中加上<code>库存&gt;=购买数量</code>或<code>库存-购买数量&gt;=0</code>的条件，这种做法要求事务隔离级别为读提交（read committed）。</li></ul></li></ol><blockquote><p>提示：有兴趣的可以自己在知乎上看看关于这类问题的讨论。</p></blockquote><h3 id="静态资源管理" tabindex="-1"><a class="header-anchor" href="#静态资源管理"><span>静态资源管理</span></a></h3><p>静态资源的管理可以自己架设文件服务器或者分布式文件服务器（FastDFS），但是一般的项目中没有必要这样做而且效果未必是最好的，我们建议使用云存储服务来管理网站的静态资源，国内外的云服务提供商如<a href="https://amazonaws-china.com/cn/" target="_blank" rel="noopener noreferrer">亚马逊</a>、<a href="https://www.aliyun.com/product/oss" target="_blank" rel="noopener noreferrer">阿里云</a>、<a href="https://www.qiniu.com/products/kodo" target="_blank" rel="noopener noreferrer">七牛</a>、<a href="https://leancloud.cn/storage/" target="_blank" rel="noopener noreferrer">LeanCloud</a>、<a href="https://www.bmob.cn/cloud" target="_blank" rel="noopener noreferrer">Bmob</a>等都提供了非常优质的云存储服务，而且价格也是一般公司可以接受的，具体的操作可以参考官方文档，例如：阿里云的<a href="https://www.alibabacloud.com/zh/support/developer-resources" target="_blank" rel="noopener noreferrer">对象存储 OSS开发人员指南</a>。</p><h3 id="全文检索" tabindex="-1"><a class="header-anchor" href="#全文检索"><span>全文检索</span></a></h3><h4 id="方案选择" tabindex="-1"><a class="header-anchor" href="#方案选择"><span>方案选择</span></a></h4><ol><li>使用数据库的模糊查询功能 - 效率低，每次需要全表扫描，不支持分词。</li><li>使用数据库的全文检索功能 - MySQL 5.6以前只适用于MyISAM引擎，检索操作和其他的DML操作耦合在数据库中，可能导致检索操作非常缓慢，数据量达到百万级性能显著下降，查询时间很长。</li><li>使用开源搜索引擎 - 索引数据和原始数据分离，可以使用ElasticSearch或Solr来提供外置索引服务，如果不考虑高并发的全文检索需求，纯Python的Whoosh也可以考虑。</li></ol><h4 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>ElasticSearch</span></a></h4><p>ElasticSearch既是一个分布式文档数据库又是一个高可扩展的开源全文搜索和分析引擎，它允许存储、搜索和分析大量的数据，并且这个过程是近实时的。它通常被用作底层引擎和技术，为复杂的搜索功能和要求提供动力，大家熟知的维基百科、Stack-Overflow、Github都使用了ElasticSearch。</p><p>ElasticSearch的底层是开源搜索引擎<a href="https://lucene.apache.org/" target="_blank" rel="noopener noreferrer">Lucene</a>，但是直接用Lucene会非常麻烦，必须自己编写代码去调用它的接口而且只支持Java语言。ElasticSearch相当于对Lucene进行了一次全面的封装，提供了REST风格的API接口，通过基于HTTP协议的访问方式屏蔽了编程语言的差异。ElasticSearch会为数据构建<a href="https://zh.wikipedia.org/zh-hans/%E5%80%92%E6%8E%92%E7%B4%A2%E5%BC%95" target="_blank" rel="noopener noreferrer">倒排索引</a>，但是ElasticSearch内置的分词器对中文分词的支持几乎为零，因此需要通过安装elasticsearch-analysis-ik插件来提供中文分词服务。</p><p>ElasticSearch的安装和配置可以参考<a href="https://blog.csdn.net/jinyidong/article/details/80475320" target="_blank" rel="noopener noreferrer">《ElasticSearch之Docker安装》</a>。除了ElasticSearch之外，也可以使用Solr、Whoosh等来提供搜索引擎服务，基本上Django项目中可以考虑如下几种方案：</p><ul><li>haystack（django-haystack / drf-haystack） + whoosh + Jieba</li><li>haystack （django-haystack / drf-haystack）+ elasticsearch</li><li>requests + elasticsearch</li><li>django-elasticsearch-dsl</li></ul><p>####安装和使用ElasticSearch</p><ol><li><p>使用Docker安装ElasticSearch。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker pull elasticsearch:7.6.0</span>
<span class="line">docker run -d -p 9200:9200 -p 9300:9300 -e &quot;discovery.type=single-node&quot; -e ES_JAVA_OPTS=&quot;-Xms512m -Xmx512m&quot; --name es elasticsearch:7.6.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：上面创建容器时通过<code>-e</code>参数指定了使用单机模式和Java虚拟机最小最大可用堆空间的大小，堆空间大小可以根据服务器实际能够提供给ElasticSearch的内存大小来决定，默认为2G。</p></blockquote></li><li><p>创建数据库。</p><p>请求：PUT - <code>http://1.2.3.4:9200/demo/</code></p><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">   &quot;acknowledged&quot;: true,</span>
<span class="line">   &quot;shards_acknowledged&quot;: true,</span>
<span class="line">   &quot;index&quot;: &quot;demo&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看创建的数据库。</p><p>请求：GET - <code>http://1.2.3.4:9200/demo/</code></p><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;demo&quot;: {</span>
<span class="line">        &quot;aliases&quot;: {},</span>
<span class="line">        &quot;mappings&quot;: {},</span>
<span class="line">        &quot;settings&quot;: {</span>
<span class="line">            &quot;index&quot;: {</span>
<span class="line">                &quot;creation_date&quot;: &quot;1552213970199&quot;,</span>
<span class="line">                &quot;number_of_shards&quot;: &quot;5&quot;,</span>
<span class="line">                &quot;number_of_replicas&quot;: &quot;1&quot;,</span>
<span class="line">                &quot;uuid&quot;: &quot;ny3rCn10SAmCsqW6xPP1gw&quot;,</span>
<span class="line">                &quot;version&quot;: {</span>
<span class="line">                    &quot;created&quot;: &quot;6050399&quot;</span>
<span class="line">                },</span>
<span class="line">                &quot;provided_name&quot;: &quot;demo&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>插入数据。</p><p>请求：POST - <code>http://1.2.3.4:9200/demo/goods/1/</code></p><p>请求头：Content-Type: application/json</p><p>参数：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;no&quot;: &quot;5089253&quot;,</span>
<span class="line">    &quot;title&quot;: &quot;Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机&quot;,</span>
<span class="line">    &quot;brand&quot;: &quot;Apple&quot;,</span>
<span class="line">    &quot;name&quot;: &quot;Apple iPhone X&quot;,</span>
<span class="line">    &quot;product&quot;: &quot;中国大陆&quot;,</span>
<span class="line">    &quot;resolution&quot;: &quot;2436 x 1125&quot;,</span>
<span class="line">    &quot;intro&quot;: &quot;一直以来，Apple都心存一个设想，期待能够打造出这样一部iPhone：它有整面屏幕，能让你在使用时，完全沉浸其中，仿佛忘了它的存在。它是如此智能，哪怕轻轻一瞥，都能得到它心有灵犀的回应。而这个设想，终于随着iPhone X的到来成为了现实。现在，就跟未来见个面吧。&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">    &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">    &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">    &quot;_version&quot;: 4,</span>
<span class="line">    &quot;result&quot;: &quot;created&quot;,</span>
<span class="line">    &quot;_shards&quot;: {</span>
<span class="line">        &quot;total&quot;: 2,</span>
<span class="line">        &quot;successful&quot;: 1,</span>
<span class="line">        &quot;failed&quot;: 0</span>
<span class="line">    },</span>
<span class="line">    &quot;_seq_no&quot;: 3,</span>
<span class="line">    &quot;_primary_term&quot;: 1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除数据。</p><p>请求：DELETE - <code>http://1.2.3.4:9200/demo/goods/1/</code></p><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">    &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">    &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">    &quot;_version&quot;: 2,</span>
<span class="line">    &quot;result&quot;: &quot;deleted&quot;,</span>
<span class="line">    &quot;_shards&quot;: {</span>
<span class="line">        &quot;total&quot;: 2,</span>
<span class="line">        &quot;successful&quot;: 1,</span>
<span class="line">        &quot;failed&quot;: 0</span>
<span class="line">    },</span>
<span class="line">    &quot;_seq_no&quot;: 1,</span>
<span class="line">    &quot;_primary_term&quot;: 1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新数据。</p><p>请求：PUT - <code>http://1.2.3.4:9200/demo/goods/1/_update</code></p><p>请求头：Content-Type: application/json</p><p>参数：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">	&quot;doc&quot;: {</span>
<span class="line">		&quot;no&quot;: &quot;5089253&quot;,</span>
<span class="line">    	&quot;title&quot;: &quot;Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机&quot;,</span>
<span class="line">    	&quot;brand&quot;: &quot;Apple(苹果)&quot;,</span>
<span class="line">    	&quot;name&quot;: &quot;Apple iPhone X&quot;,</span>
<span class="line">    	&quot;product&quot;: &quot;美国&quot;,</span>
<span class="line">    	&quot;resolution&quot;: &quot;2436 x 1125&quot;,</span>
<span class="line">    	&quot;intro&quot;: &quot;一直以来，Apple都心存一个设想，期待能够打造出这样一部iPhone：它有整面屏幕，能让你在使用时，完全沉浸其中，仿佛忘了它的存在。它是如此智能，哪怕轻轻一瞥，都能得到它心有灵犀的回应。而这个设想，终于随着iPhone X的到来成为了现实。现在，就跟未来见个面吧。&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">    &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">    &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">    &quot;_version&quot;: 10,</span>
<span class="line">    &quot;result&quot;: &quot;updated&quot;,</span>
<span class="line">    &quot;_shards&quot;: {</span>
<span class="line">        &quot;total&quot;: 2,</span>
<span class="line">        &quot;successful&quot;: 1,</span>
<span class="line">        &quot;failed&quot;: 0</span>
<span class="line">    },</span>
<span class="line">    &quot;_seq_no&quot;: 9,</span>
<span class="line">    &quot;_primary_term&quot;: 1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查询数据。</p><p>请求：GET - <code>http://1.2.3.4:9200/demo/goods/1/</code></p><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">    &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">    &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">    &quot;_version&quot;: 10,</span>
<span class="line">    &quot;found&quot;: true,</span>
<span class="line">    &quot;_source&quot;: {</span>
<span class="line">        &quot;doc&quot;: {</span>
<span class="line">            &quot;no&quot;: &quot;5089253&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机&quot;,</span>
<span class="line">            &quot;brand&quot;: &quot;Apple(苹果)&quot;,</span>
<span class="line">            &quot;name&quot;: &quot;Apple iPhone X&quot;,</span>
<span class="line">            &quot;product&quot;: &quot;美国&quot;,</span>
<span class="line">            &quot;resolution&quot;: &quot;2436 x 1125&quot;,</span>
<span class="line">            &quot;intro&quot;: &quot;一直以来，Apple都心存一个设想，期待能够打造出这样一部iPhone：它有整面屏幕，能让你在使用时，完全沉浸其中，仿佛忘了它的存在。它是如此智能，哪怕轻轻一瞥，都能得到它心有灵犀的回应。而这个设想，终于随着iPhone X的到来成为了现实。现在，就跟未来见个面吧。&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="配置中文分词和拼音插件" tabindex="-1"><a class="header-anchor" href="#配置中文分词和拼音插件"><span>配置中文分词和拼音插件</span></a></h4><ol><li><p>进入Docker容器的plugins目录。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker exec -it es /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>下载和ElasticSearch版本对应的<a href="https://github.com/medcl/elasticsearch-analysis-ik" target="_blank" rel="noopener noreferrer">ik</a>和<a href="https://github.com/medcl/elasticsearch-analysis-pinyin" target="_blank" rel="noopener noreferrer">pinyin</a>插件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">yum install -y wget</span>
<span class="line">cd plugins/</span>
<span class="line">mkdir ik</span>
<span class="line">cd ik</span>
<span class="line">wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.0/elasticsearch-analysis-ik-7.6.0.zip</span>
<span class="line">unzip elasticsearch-analysis-ik-7.6.0.zip</span>
<span class="line">rm -f elasticsearch-analysis-ik-7.6.0.zip</span>
<span class="line">cd ..</span>
<span class="line">mkdir pinyin</span>
<span class="line">cd pinyin</span>
<span class="line">wget https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v7.6.0/elasticsearch-analysis-pinyin-7.6.0.zip</span>
<span class="line">unzip elasticsearch-analysis-pinyin-7.6.0.zip</span>
<span class="line">rm -f elasticsearch-analysis-pinyin-7.6.0.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出容器，重启ElasticSearch。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker restart es</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>测试中文分词效果。</p><p>请求：POST - <code>http://1.2.3.4:9200/_analyze</code></p><p>请求头：Content-Type: application/json</p><p>参数：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;ik_smart&quot;,</span>
<span class="line">  &quot;text&quot;: &quot;中国男足在2022年卡塔尔世界杯预选赛中勇夺小组最后一名&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;tokens&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;中国&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 0,</span>
<span class="line">            &quot;end_offset&quot;: 2,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 0</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;男足&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 2,</span>
<span class="line">            &quot;end_offset&quot;: 4,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 1</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;在&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 4,</span>
<span class="line">            &quot;end_offset&quot;: 5,</span>
<span class="line">            &quot;type&quot;: &quot;CN_CHAR&quot;,</span>
<span class="line">            &quot;position&quot;: 2</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;2022年&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 5,</span>
<span class="line">            &quot;end_offset&quot;: 10,</span>
<span class="line">            &quot;type&quot;: &quot;TYPE_CQUAN&quot;,</span>
<span class="line">            &quot;position&quot;: 3</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;卡塔尔&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 10,</span>
<span class="line">            &quot;end_offset&quot;: 13,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 4</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;世界杯&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 13,</span>
<span class="line">            &quot;end_offset&quot;: 16,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 5</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;预选赛&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 16,</span>
<span class="line">            &quot;end_offset&quot;: 19,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 6</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;中&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 19,</span>
<span class="line">            &quot;end_offset&quot;: 20,</span>
<span class="line">            &quot;type&quot;: &quot;CN_CHAR&quot;,</span>
<span class="line">            &quot;position&quot;: 7</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;勇夺&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 20,</span>
<span class="line">            &quot;end_offset&quot;: 22,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 8</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;小组&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 22,</span>
<span class="line">            &quot;end_offset&quot;: 24,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 9</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;最后&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 24,</span>
<span class="line">            &quot;end_offset&quot;: 26,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 10</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;一名&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 26,</span>
<span class="line">            &quot;end_offset&quot;: 28,</span>
<span class="line">            &quot;type&quot;: &quot;CN_WORD&quot;,</span>
<span class="line">            &quot;position&quot;: 11</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试拼音分词效果。</p><p>请求：POST - <code>http://1.2.3.4:9200/_analyze</code></p><p>请求头：Content-Type: application/json</p><p>参数：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;pinyin&quot;,</span>
<span class="line">  &quot;text&quot;: &quot;张学友&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;tokens&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;zhang&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 0,</span>
<span class="line">            &quot;end_offset&quot;: 0,</span>
<span class="line">            &quot;type&quot;: &quot;word&quot;,</span>
<span class="line">            &quot;position&quot;: 0</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;zxy&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 0,</span>
<span class="line">            &quot;end_offset&quot;: 0,</span>
<span class="line">            &quot;type&quot;: &quot;word&quot;,</span>
<span class="line">            &quot;position&quot;: 0</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;xue&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 0,</span>
<span class="line">            &quot;end_offset&quot;: 0,</span>
<span class="line">            &quot;type&quot;: &quot;word&quot;,</span>
<span class="line">            &quot;position&quot;: 1</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;token&quot;: &quot;you&quot;,</span>
<span class="line">            &quot;start_offset&quot;: 0,</span>
<span class="line">            &quot;end_offset&quot;: 0,</span>
<span class="line">            &quot;type&quot;: &quot;word&quot;,</span>
<span class="line">            &quot;position&quot;: 2</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="全文检索功能" tabindex="-1"><a class="header-anchor" href="#全文检索功能"><span>全文检索功能</span></a></h4><p>可以通过GET或者POST请求进行搜索，下面演示了搜索有“未来”关键词商品。</p><ol><li><p>GET - <code>http://120.77.222.217:9200/demo/goods/_search?q=未来</code></p><blockquote><p>注意：URL中的中文应该要处理成百分号编码。</p></blockquote><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;took&quot;: 19,</span>
<span class="line">    &quot;timed_out&quot;: false,</span>
<span class="line">    &quot;_shards&quot;: {</span>
<span class="line">        &quot;total&quot;: 5,</span>
<span class="line">        &quot;successful&quot;: 5,</span>
<span class="line">        &quot;skipped&quot;: 0,</span>
<span class="line">        &quot;failed&quot;: 0</span>
<span class="line">    },</span>
<span class="line">    &quot;hits&quot;: {</span>
<span class="line">        &quot;total&quot;: 2,</span>
<span class="line">        &quot;max_score&quot;: 0.73975396,</span>
<span class="line">        &quot;hits&quot;: [</span>
<span class="line">            {</span>
<span class="line">                &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">                &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">                &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">                &quot;_score&quot;: 0.73975396,</span>
<span class="line">                &quot;_source&quot;: {</span>
<span class="line">                    &quot;doc&quot;: {</span>
<span class="line">                        &quot;no&quot;: &quot;5089253&quot;,</span>
<span class="line">                        &quot;title&quot;: &quot;Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机&quot;,</span>
<span class="line">                        &quot;brand&quot;: &quot;Apple(苹果)&quot;,</span>
<span class="line">                        &quot;name&quot;: &quot;Apple iPhone X&quot;,</span>
<span class="line">                        &quot;product&quot;: &quot;美国&quot;,</span>
<span class="line">                        &quot;resolution&quot;: &quot;2436*1125&quot;,</span>
<span class="line">                        &quot;intro&quot;: &quot;一直以来，Apple都心存一个设想，期待能够打造出这样一部iPhone：它有整面屏幕，能让你在使用时，完全沉浸其中，仿佛忘了它的存在。它是如此智能，哪怕轻轻一瞥，都能得到它心有灵犀的回应。而这个设想，终于随着iPhone X的到来成为了现实。现在，就跟未来见个面吧。&quot;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">                &quot;_index&quot;: &quot;demo&quot;,</span>
<span class="line">                &quot;_type&quot;: &quot;goods&quot;,</span>
<span class="line">                &quot;_id&quot;: &quot;3&quot;,</span>
<span class="line">                &quot;_score&quot;: 0.68324494,</span>
<span class="line">                &quot;_source&quot;: {</span>
<span class="line">                    &quot;no&quot;: &quot;42417956432&quot;,</span>
<span class="line">                    &quot;title&quot;: &quot;小米9 透明尊享版 手机 透明尊享 全网通(12GB + 256GB)&quot;,</span>
<span class="line">                    &quot;brand&quot;: &quot;小米（MI）&quot;,</span>
<span class="line">                    &quot;name&quot;: &quot;小米（MI）小米9透明&quot;,</span>
<span class="line">                    &quot;product&quot;: &quot;中国大陆&quot;,</span>
<span class="line">                    &quot;resolution&quot;: &quot;2340*1080&quot;,</span>
<span class="line">                    &quot;intro&quot;: &quot;全面透明机身，独特科幻机甲风，来自未来的设计。&quot;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>URL中可用的搜索参数如下表所示：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>q</td><td>查询字符串</td></tr><tr><td>analyzer</td><td>分析查询字符串使用的分词器</td></tr><tr><td>analyze_wildcard</td><td>通配符或者前缀查询是否被分析，默认为false</td></tr><tr><td>default_operator</td><td>多个条件之间的关系，默认为OR，可以修改为AND</td></tr><tr><td>explain</td><td>在返回的结果中包含评分机制的解释</td></tr><tr><td>fields</td><td>只返回索引中指定的列，多个列中间用逗号隔开</td></tr><tr><td>sort</td><td>排序参考的字段，可以用:asc和:desc来指定升序和降序</td></tr><tr><td>timeout</td><td>超时时间</td></tr><tr><td>from</td><td>匹配结果的开始值，默认为0</td></tr><tr><td>size</td><td>匹配结果的条数，默认为10</td></tr></tbody></table></li><li><p>POST - <code>http://120.77.222.217:9200/demo/goods/_search</code></p><p>请求头：Content-Type: application/json</p><p>参数：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;term&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST搜索是基于DSL的。</p></li></ol><h4 id="django对接elasticsearch" tabindex="-1"><a class="header-anchor" href="#django对接elasticsearch"><span>Django对接ElasticSearch</span></a></h4><p>Python对接ElasticSearch的第三方库是HayStack，在Django项目中可以使用django-haystack，通过HayStack可以在不修改代码对接多种搜索引擎服务。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">pip <span class="token function">install</span> django-haystack elasticsearch</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置文件：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    ...</span>
<span class="line">    &#39;haystack&#39;,</span>
<span class="line">    ...</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">HAYSTACK_CONNECTIONS = {</span>
<span class="line">    &#39;default&#39;: {</span>
<span class="line">        # 引擎配置</span>
<span class="line">        &#39;ENGINE&#39;: &#39;haystack.backends.elasticsearch_backend.ElasticsearchSearchEngine&#39;,</span>
<span class="line">        # 搜索引擎服务的URL</span>
<span class="line">        &#39;URL&#39;: &#39;http://1.2.3.4:9200&#39;,</span>
<span class="line">        # 索引库的名称</span>
<span class="line">        &#39;INDEX_NAME&#39;: &#39;goods&#39;,</span>
<span class="line">    },</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># 添加/删除/更新数据时自动生成索引</span>
<span class="line">HAYSTACK_SIGNAL_PROCESSOR = &#39;haystack.signals.RealtimeSignalProcessor&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引类：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from haystack import indexes</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class GoodsIndex(indexes.SearchIndex, indexes.Indexable):</span>
<span class="line">    text = indexes.CharField(document=True, use_template=True)</span>
<span class="line"></span>
<span class="line">    def get_model(self):</span>
<span class="line">        return Goods</span>
<span class="line"></span>
<span class="line">    def index_queryset(self, using=None):</span>
<span class="line">        return self.get_model().objects.all()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑text字段的模板（需要放在templates/search/indexes/demo/goods_text.txt）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">{{object.title}}</span>
<span class="line">{{object.intro}}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置URL：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    # ...</span>
<span class="line">    url(&#39;search/&#39;, include(&#39;haystack.urls&#39;)),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成初始索引：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py rebuild_index</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>说明：可以参考<a href="https://www.zmrenwu.com/post/45/" target="_blank" rel="noopener noreferrer">《Django Haystack 全文检索与关键词高亮》</a>一文来更深入的了解基于Haystack的全文检索操作。</p></blockquote>`,84),c=[p];function u(o,r){return e(),n("div",null,c)}const m=s(d,[["render",u],["__file","97.电商网站技术要点剖析.html.vue"]]),b=JSON.parse('{"path":"/python/Python-100-Days/Day91-100/97.%E7%94%B5%E5%95%86%E7%BD%91%E7%AB%99%E6%8A%80%E6%9C%AF%E8%A6%81%E7%82%B9%E5%89%96%E6%9E%90.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"电商网站技术要点剖析","slug":"电商网站技术要点剖析","link":"#电商网站技术要点剖析","children":[{"level":3,"title":"商业模式","slug":"商业模式","link":"#商业模式","children":[]},{"level":3,"title":"需求要点","slug":"需求要点","link":"#需求要点","children":[]},{"level":3,"title":"物理模型设计","slug":"物理模型设计","link":"#物理模型设计","children":[]},{"level":3,"title":"第三方登录","slug":"第三方登录","link":"#第三方登录","children":[]},{"level":3,"title":"缓存预热和查询缓存","slug":"缓存预热和查询缓存","link":"#缓存预热和查询缓存","children":[]},{"level":3,"title":"购物车实现","slug":"购物车实现","link":"#购物车实现","children":[]},{"level":3,"title":"集成支付功能","slug":"集成支付功能","link":"#集成支付功能","children":[]},{"level":3,"title":"秒杀和超卖","slug":"秒杀和超卖","link":"#秒杀和超卖","children":[]},{"level":3,"title":"静态资源管理","slug":"静态资源管理","link":"#静态资源管理","children":[]},{"level":3,"title":"全文检索","slug":"全文检索","link":"#全文检索","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day91-100/97.电商网站技术要点剖析.md"}');export{m as comp,b as data};
