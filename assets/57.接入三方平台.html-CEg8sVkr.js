import{_ as s,c as n,o as e,d as a}from"./app-CxrMoykp.js";const i="/docs/assets/luosimao-sms-apikey-BFnWjIS5.png",l="/docs/assets/luosimao-sms-signature-D3yjQjTB.png",t="/docs/assets/luosimao-sms-whitelist-BS4DTQGy.png",p="/docs/assets/luosimao-pay-onlinebuy-Cf11HpGv.png",d="/docs/assets/qiniu-manage-console-B3rDqSyt.png",c="/docs/assets/qiniu-storage-service-B8VoJ97r.png",o="/docs/assets/qiniu-storage-create-C7D6eYz2.png",r="/docs/assets/qiniu-secretkey-management-CPQXPCty.png",u="/docs/assets/qiniu-document-python-Byo_xJTp.png",m="/docs/assets/qiniu-file-management-BdNm-EhC.png",v={},b=a('<h2 id="接入三方平台" tabindex="-1"><a class="header-anchor" href="#接入三方平台"><span>接入三方平台</span></a></h2><p>在Web应用的开发过程中，有一些任务并不是我们自己能够完成的。例如，我们的Web项目中需要做个人或企业的实名认证，很显然我们并没有能力判断用户提供的认证信息的真实性，这个时候我们就要借助三方平台提供的服务来完成该项操作。再比如说，我们的项目中需要提供在线支付功能，这类业务通常也是借助支付网关来完成而不是自己去实现，我们只需要接入像微信、支付宝、银联这样的三方平台即可。</p><p>在项目中接入三方平台基本上就两种方式：API接入和SDK接入。</p><ol><li>API接入指的是通过访问三方提供的URL来完成操作或获取数据。国内有很多这样的平台提供了大量常用的服务，例如<a href="https://www.juhe.cn/" target="_blank" rel="noopener noreferrer">聚合数据</a>上提供了生活服务类、金融科技类、交通地理类、充值缴费类等各种类型的API。我们可以通过Python程序发起网络请求，通过访问URL获取数据，这些API接口跟我们项目中提供的数据接口是一样的，只不过我们项目中的API是供自己使用的，而这类三方平台提供的API是开放的。当然开放并不代表免费，大多数能够提供有商业价值的数据的API都是需要付费才能使用的。</li><li>SDK接入指的是通过安装三方库并使用三方库封装的类、函数来使用三方平台提供的服务的方式。例如我们刚才说到的接入支付宝，就需要先安装支付宝的SDK，然后通过支付宝封装的类和方法完成对支付服务的调用。</li></ol><p>下面我们通过具体的例子来讲解如何接入三方平台。</p><h3 id="接入短信网关" tabindex="-1"><a class="header-anchor" href="#接入短信网关"><span>接入短信网关</span></a></h3><p>一个Web项目有很多地方都可以用到短信服务，例如：手机验证码登录、重要消息提醒、产品营销短信等。要实现发送短信的功能，可以通过接入短信网关来实现，国内比较有名的短信网关包括：云片短信、网易云信、螺丝帽、SendCloud等，这些短信网关一般都提供了免费试用功能。下面我们以<a href="https://luosimao.com/" target="_blank" rel="noopener noreferrer">螺丝帽</a>平台为例，讲解如何在项目中接入短信网关，其他平台操作基本类似。</p><ol><li><p>注册账号，新用户可以免费试用。</p></li><li><p>登录到管理后台，进入短信版块。</p></li><li><p>点击“触发发送”可以找到自己专属的API Key（身份标识）。</p><p><img src="'+i+'" alt=""></p></li><li><p>点击“签名管理”可以添加短信签名，短信都必须携带签名，免费试用的短信要在短信中添加“【铁壳测试】”这个签名，否则短信无法发送。</p><p><img src="'+l+'" alt=""></p></li><li><p>点击“IP白名单”将运行Django项目的服务器地址（公网IP地址，本地运行可以打开<a href="">xxx</a>网站查看自己本机的公网IP地址）填写到白名单中，否则短信无法发送。</p><p><img src="'+t+'" alt=""></p></li><li><p>如果没有剩余的短信条数，可以到“充值”页面选择“短信服务”进行充值。</p><p><img src="'+p+`" alt=""></p></li></ol><p>接下来，我们可以通过调用螺丝帽短信网关实现发送短信验证码的功能，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def send_mobile_code(tel, code):</span>
<span class="line">    &quot;&quot;&quot;发送短信验证码&quot;&quot;&quot;</span>
<span class="line">    resp = requests.post(</span>
<span class="line">        url=&#39;http://sms-api.luosimao.com/v1/send.json&#39;,</span>
<span class="line">        auth=(&#39;api&#39;, &#39;key-自己的APIKey&#39;),</span>
<span class="line">        data={</span>
<span class="line">            &#39;mobile&#39;: tel,</span>
<span class="line">            &#39;message&#39;: f&#39;您的短信验证码是{code}，打死也不能告诉别人哟。【Python小课】&#39;</span>
<span class="line">        },</span>
<span class="line">        verify=False</span>
<span class="line">    )</span>
<span class="line">    return resp.json()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码需要先安装<code>requests</code>三方库，这个三方库封装了HTTP网络请求的相关功能，使用起来非常的简单，我们在之前的内容中也讲到过这个三方库。<code>send_mobile_code</code>函数有两个参数，第一个参数是手机号，第二个参数是短信验证码的内容，第5行代码需要提供自己的API Key，就是上面第2步中查看到的自己的API Key。请求螺丝帽的短信网关会返回JSON格式的数据，对于上面的代码如果返回<code>{&#39;err&#39;: 0, &#39;msg&#39;: &#39;ok&#39;}</code>，则表示短信发送成功，如果<code>err</code>字段的值不为<code>0</code>而是其他值，则表示短信发送失败，可以在螺丝帽官方的<a href="https://luosimao.com/docs/api/" target="_blank" rel="noopener noreferrer">开发文档</a>页面上查看到不同的数值代表的含义，例如：<code>-20</code>表示余额不足，<code>-32</code>表示缺少短信签名。</p><p>可以在视图函数中调用上面的函数来完成发送短信验证码的功能，稍后我们可以把这个功能跟用户注册结合起来。</p><p>生成随机验证码和验证手机号的函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line">import re</span>
<span class="line"></span>
<span class="line">TEL_PATTERN = re.compile(r&#39;1[3-9]\\d{9}&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def check_tel(tel):</span>
<span class="line">    &quot;&quot;&quot;检查手机号&quot;&quot;&quot;</span>
<span class="line">    return TEL_PATTERN.fullmatch(tel) is not None</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def random_code(length=6):</span>
<span class="line">    &quot;&quot;&quot;生成随机短信验证码&quot;&quot;&quot;</span>
<span class="line">    return &#39;&#39;.join(random.choices(&#39;0123456789&#39;, k=length))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发送短信验证码的视图函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@api_view((&#39;GET&#39;, ))</span>
<span class="line">def get_mobilecode(request, tel):</span>
<span class="line">    &quot;&quot;&quot;获取短信验证码&quot;&quot;&quot;</span>
<span class="line">    if check_tel(tel):</span>
<span class="line">        redis_cli = get_redis_connection()</span>
<span class="line">        if redis_cli.exists(f&#39;vote:block-mobile:{tel}&#39;):</span>
<span class="line">            data = {&#39;code&#39;: 30001, &#39;message&#39;: &#39;请不要在60秒内重复发送短信验证码&#39;}</span>
<span class="line">        else:</span>
<span class="line">            code = random_code()</span>
<span class="line">            send_mobile_code(tel, code)</span>
<span class="line">            # 通过Redis阻止60秒内容重复发送短信验证码</span>
<span class="line">            redis_cli.set(f&#39;vote:block-mobile:{tel}&#39;, &#39;x&#39;, ex=60)</span>
<span class="line">            # 将验证码在Redis中保留10分钟（有效期10分钟）</span>
<span class="line">            redis_cli.set(f&#39;vote2:valid-mobile:{tel}&#39;, code, ex=600)</span>
<span class="line">            data = {&#39;code&#39;: 30000, &#39;message&#39;: &#39;短信验证码已发送，请注意查收&#39;}</span>
<span class="line">    else:</span>
<span class="line">        data = {&#39;code&#39;: 30002, &#39;message&#39;: &#39;请输入有效的手机号&#39;}</span>
<span class="line">    return Response(data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码利用Redis实现了两个额外的功能，一个是阻止用户60秒内重复发送短信验证码，一个是将用户的短信验证码保留10分钟，也就是说这个短信验证码的有效期只有10分钟，我们可以要求用户在注册时提供该验证码来验证用户手机号的真实性。</p></blockquote><h3 id="接入云存储服务" tabindex="-1"><a class="header-anchor" href="#接入云存储服务"><span>接入云存储服务</span></a></h3><p>当我们提到<strong>云存储</strong>这个词的时候，通常是指把数据存放在由第三方提供的虚拟服务器环境下，简单的说就是将某些数据或资源通过第三平台托管。一般情况下，提供云存储服务的公司都运营着大型的数据中心，需要云存储服务的个人或组织通过向其购买或租赁存储空间来满足数据存储的需求。在开发Web应用时，可以将静态资源，尤其是用户上传的静态资源直接置于云存储服务中，云存储通常会提供对应的URL使得用户可以访问该静态资源。国内外比较有名的云存储服务（如：亚马逊的S3、阿里的OSS2等）一般都物美价廉，相比自己架设静态资源服务器，云存储的代价更小，而且一般的云存储平台都提供了CDN服务，用于加速对静态资源的访问，所以不管从哪个角度出发，使用云存储的方式管理Web应用的数据和静态资源都是非常好的选择，除非这些资源涉及到个人或商业隐私，否则就可以托管到云存储中。</p><p>下面我们以接入<a href="https://www.qiniu.com/" target="_blank" rel="noopener noreferrer">七牛云</a>为例，讲解如何实现将用户上传的文件保存到七牛云存储。七牛云是国内知名的云计算及数据服务提供商，七牛云在海量文件存储、CDN、视频点播、互动直播以及大规模异构数据的智能分析与处理等领域都有自己的产品，而且非付费用户也可以免费接入，使用其提供的服务。下面是接入七牛云的流程：</p><ol><li><p>注册账号，登录管理控制台。</p><p><img src="`+d+'" alt=""></p></li><li><p>选择左侧菜单中的对象存储。</p><p><img src="'+c+'" alt=""></p></li><li><p>在空间管理中选择新建空间（例如：myvote），如果提示空间名称已被占用，更换一个再尝试即可。注意，创建空间后会提示绑定自定义域名，如果暂时还没有自己的域名，可以使用七牛云提供的临时域名，但是临时域名会在30天后被回收，所以最好准备自己的域名（域名需要备案，不清楚如何操作的请自行查阅相关资料）。</p><p><img src="'+o+'" alt=""></p></li><li><p>在网页的右上角点击个人头像中的“密钥管理”，查看自己的密钥，稍后在代码中需要使用AK（AccessKey）和SK（SecretKey）两个密钥来认证用户身份。</p><p><img src="'+r+'" alt=""></p></li><li><p>点击网页上方菜单中的“文档”，进入到<a href="https://developer.qiniu.com/" target="_blank" rel="noopener noreferrer">七牛开发者中心</a>，选择导航菜单中的“SDK&amp;工具”并点击“官方SDK”子菜单，找到Python（服务端）并点击“文档”查看官方文档。</p><p><img src="'+u+`" alt=""></p></li></ol><p>接下来，只要安装官方文档提供的示例，就可以接入七牛云，使用七牛云提供的云存储以及其他服务。首先可以通过下面的命令安装七牛云的三方库。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install qiniu</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来可以通过<code>qiniu</code>模块中的<code>put_file</code>和<code>put_stream</code>两个函数实现文件上传，前者可以上传指定路径的文件，后者可以将内存中的二进制数据上传至七牛云，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import qiniu</span>
<span class="line"></span>
<span class="line">AUTH = qiniu.Auth(&#39;密钥管理中的AccessKey&#39;, &#39;密钥管理中的SecretKey&#39;)</span>
<span class="line">BUCKET_NAME = &#39;myvote&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def upload_file_to_qiniu(key, file_path):</span>
<span class="line">    &quot;&quot;&quot;上传指定路径的文件到七牛云&quot;&quot;&quot;</span>
<span class="line">    token = AUTH.upload_token(BUCKET_NAME, key)</span>
<span class="line">    return qiniu.put_file(token, key, file_path)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def upload_stream_to_qiniu(key, stream, size):</span>
<span class="line">    &quot;&quot;&quot;上传二进制数据流到七牛云&quot;&quot;&quot;</span>
<span class="line">    token = AUTH.upload_token(BUCKET_NAME, key)</span>
<span class="line">    return qiniu.put_stream(token, key, stream, None, size)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个文件上传的简单前端页。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;上传文件&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;form action=&quot;/upload/&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;input type=&quot;file&quot; name=&quot;photo&quot;&gt;</span>
<span class="line">            &lt;input type=&quot;submit&quot; value=&quot;上传&quot;&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/form&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：前端如果使用表单实现文件上传，表单的method属性必须设置为post，enctype属性需要设置为multipart/form-data，表单中type属性为file的input标签，就是上传文件的文件选择器。</p></blockquote><p>实现上传功能的视图函数如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.views.decorators.csrf import csrf_exempt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@csrf_exempt</span>
<span class="line">def upload(request):</span>
<span class="line">    # 如果上传的文件小于2.5M，则photo对象的类型为InMemoryUploadedFile，文件在内存中</span>
<span class="line">    # 如果上传的文件超过2.5M，则photo对象的类型为TemporaryUploadedFile，文件在临时路径下</span>
<span class="line">    photo = request.FILES.get(&#39;photo&#39;)</span>
<span class="line">    _, ext = os.path.splitext(photo.name)</span>
<span class="line">    # 通过UUID和原来文件的扩展名生成独一无二的新的文件名</span>
<span class="line">    filename = f&#39;{uuid.uuid1().hex}{ext}&#39;</span>
<span class="line">    # 对于内存中的文件，可以使用上面封装好的函数upload_stream_to_qiniu上传文件到七牛云</span>
<span class="line">    # 如果文件保存在临时路径下，可以使用upload_file_to_qiniu实现文件上传</span>
<span class="line">    upload_stream_to_qiniu(filename, photo.file, photo.size)</span>
<span class="line">    return redirect(&#39;/static/html/upload.html&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的视图函数使用了<code>csrf_exempt</code>装饰器，该装饰器能够让表单免除必须提供CSRF令牌的要求。此外，代码第11行使用了<code>uuid</code>模块的<code>uuid1</code>函数来生成全局唯一标识符。</p></blockquote><p>运行项目尝试文件上传的功能，文件上传成功后，可以在七牛云“空间管理”中点击自己空间并进入“文件管理”界面，在这里可以看到我们刚才上传成功的文件，而且可以通过七牛云提供的域名获取该文件。</p><p><img src="`+m+'" alt=""></p>',33),h=[b];function g(_,q){return e(),n("div",null,h)}const f=s(v,[["render",g],["__file","57.接入三方平台.html.vue"]]),P=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/57.%E6%8E%A5%E5%85%A5%E4%B8%89%E6%96%B9%E5%B9%B3%E5%8F%B0.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"接入三方平台","slug":"接入三方平台","link":"#接入三方平台","children":[{"level":3,"title":"接入短信网关","slug":"接入短信网关","link":"#接入短信网关","children":[]},{"level":3,"title":"接入云存储服务","slug":"接入云存储服务","link":"#接入云存储服务","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/57.接入三方平台.md"}');export{f as comp,P as data};
