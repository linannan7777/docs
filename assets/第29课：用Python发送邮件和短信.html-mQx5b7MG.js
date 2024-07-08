import{_ as n,c as s,o as a,d as e}from"./app-DCPYa7PH.js";const i={},l=e(`<h2 id="第29课-用python发送邮件和短信" tabindex="-1"><a class="header-anchor" href="#第29课-用python发送邮件和短信"><span>第29课：用Python发送邮件和短信</span></a></h2><p>在前面的课程中，我们已经教会大家如何用Python程序自动的生成Excel、Word、PDF文档，接下来我们还可以更进一步，就是通过邮件将生成好的文档发送给指定的收件人，然后用短信告知对方我们发出了邮件。这些事情利用Python程序也可以轻松愉快的解决。</p><h3 id="发送电子邮件" tabindex="-1"><a class="header-anchor" href="#发送电子邮件"><span>发送电子邮件</span></a></h3><p>在即时通信软件如此发达的今天，电子邮件仍然是互联网上使用最为广泛的应用之一，公司向应聘者发出录用通知、网站向用户发送一个激活账号的链接、银行向客户推广它们的理财产品等几乎都是通过电子邮件来完成的，而这些任务应该都是由程序自动完成的。</p><p>我们可以用HTTP（超文本传输协议）来访问网站资源，HTTP是一个应用级协议，它建立在TCP（传输控制协议）之上，TCP为很多应用级协议提供了可靠的数据传输服务。如果要发送电子邮件，需要使用SMTP（简单邮件传输协议），它也是建立在TCP之上的应用级协议，规定了邮件的发送者如何跟邮件服务器进行通信的细节。Python通过名为<code>smtplib</code>的模块将这些操作简化成了<code>SMTP_SSL</code>对象，通过该对象的<code>login</code>和<code>send_mail</code>方法，就能够完成发送邮件的操作。</p><p>我们先尝试一下发送一封极为简单的邮件，该邮件不包含附件、图片以及其他超文本内容。发送邮件首先需要接入邮件服务器，我们可以自己架设邮件服务器，这件事情对新手并不友好，但是我们可以选择使用第三方提供的邮件服务。例如，我在&lt;www.126.com&gt;已经注册了账号，登录成功之后，就可以在设置中开启SMTP服务，这样就相当于获得了邮件服务器，具体的操作如下所示。</p><img src="https://github.com/jackfrued/mypic/raw/master/20210820190307.png" alt="image-20210820190306861" width="95%"><p><img src="https://github.com/jackfrued/mypic/raw/master/20210820190816.png" alt="image-20210820190816557"></p><p>用手机扫码上面的二维码可以通过发送短信的方式来获取授权码，短信发送成功后，点击“我已发送”就可以获得授权码。授权码需要妥善保管，因为一旦泄露就会被其他人冒用你的身份来发送邮件。接下来，我们就可以编写发送邮件的代码了，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import smtplib</span>
<span class="line">from email.header import Header</span>
<span class="line">from email.mime.multipart import MIMEMultipart</span>
<span class="line">from email.mime.text import MIMEText</span>
<span class="line"></span>
<span class="line"># 创建邮件主体对象</span>
<span class="line">email = MIMEMultipart()</span>
<span class="line"># 设置发件人、收件人和主题</span>
<span class="line">email[&#39;From&#39;] = &#39;xxxxxxxxx@126.com&#39;</span>
<span class="line">email[&#39;To&#39;] = &#39;yyyyyy@qq.com;zzzzzz@1000phone.com&#39;</span>
<span class="line">email[&#39;Subject&#39;] = Header(&#39;上半年工作情况汇报&#39;, &#39;utf-8&#39;)</span>
<span class="line"># 添加邮件正文内容</span>
<span class="line">content = &quot;&quot;&quot;据德国媒体报道，当地时间9日，德国火车司机工会成员进行了投票，</span>
<span class="line">定于当地时间10日起进行全国性罢工，货运交通方面的罢工已于当地时间10日19时开始。</span>
<span class="line">此后，从11日凌晨2时到13日凌晨2时，德国全国范围内的客运和铁路基础设施将进行48小时的罢工。&quot;&quot;&quot;</span>
<span class="line">email.attach(MIMEText(content, &#39;plain&#39;, &#39;utf-8&#39;))</span>
<span class="line"></span>
<span class="line"># 创建SMTP_SSL对象（连接邮件服务器）</span>
<span class="line">smtp_obj = smtplib.SMTP_SSL(&#39;smtp.126.com&#39;, 465)</span>
<span class="line"># 通过用户名和授权码进行登录</span>
<span class="line">smtp_obj.login(&#39;xxxxxxxxx@126.com&#39;, &#39;邮件服务器的授权码&#39;)</span>
<span class="line"># 发送邮件（发件人、收件人、邮件内容（字符串））</span>
<span class="line">smtp_obj.sendmail(</span>
<span class="line">    &#39;xxxxxxxxx@126.com&#39;,</span>
<span class="line">    [&#39;yyyyyy@qq.com&#39;, &#39;zzzzzz@1000phone.com&#39;],</span>
<span class="line">    email.as_string()</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要发送带有附件的邮件，只需要将附件的内容处理成BASE64编码，那么它就和普通的文本内容几乎没有什么区别。BASE64是一种基于64个可打印字符来表示二进制数据的表示方法，常用于某些需要表示、传输、存储二进制数据的场合，电子邮件就是其中之一。对这种编码方式不理解的同学，推荐阅读<a href="http://www.ruanyifeng.com/blog/2008/06/base64.html" target="_blank" rel="noopener noreferrer">《Base64笔记》</a>一文。在之前的内容中，我们也提到过，Python标准库的<code>base64</code>模块提供了对BASE64编解码的支持。</p><p>下面的代码演示了如何发送带附件的邮件。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import smtplib</span>
<span class="line">from email.header import Header</span>
<span class="line">from email.mime.multipart import MIMEMultipart</span>
<span class="line">from email.mime.text import MIMEText</span>
<span class="line">from urllib.parse import quote</span>
<span class="line"></span>
<span class="line"># 创建邮件主体对象</span>
<span class="line">email = MIMEMultipart()</span>
<span class="line"># 设置发件人、收件人和主题</span>
<span class="line">email[&#39;From&#39;] = &#39;xxxxxxxxx@126.com&#39;</span>
<span class="line">email[&#39;To&#39;] = &#39;zzzzzzzz@1000phone.com&#39;</span>
<span class="line">email[&#39;Subject&#39;] = Header(&#39;请查收离职证明文件&#39;, &#39;utf-8&#39;)</span>
<span class="line"># 添加邮件正文内容（带HTML标签排版的内容）</span>
<span class="line">content = &quot;&quot;&quot;&lt;p&gt;亲爱的前同事：&lt;/p&gt;</span>
<span class="line">&lt;p&gt;你需要的离职证明在附件中，请查收！&lt;/p&gt;</span>
<span class="line">&lt;br&gt;</span>
<span class="line">&lt;p&gt;祝，好！&lt;/p&gt;</span>
<span class="line">&lt;hr&gt;</span>
<span class="line">&lt;p&gt;孙美丽 即日&lt;/p&gt;&quot;&quot;&quot;</span>
<span class="line">email.attach(MIMEText(content, &#39;html&#39;, &#39;utf-8&#39;))</span>
<span class="line"># 读取作为附件的文件</span>
<span class="line">with open(f&#39;resources/王大锤离职证明.docx&#39;, &#39;rb&#39;) as file:</span>
<span class="line">    attachment = MIMEText(file.read(), &#39;base64&#39;, &#39;utf-8&#39;)</span>
<span class="line">    # 指定内容类型</span>
<span class="line">    attachment[&#39;content-type&#39;] = &#39;application/octet-stream&#39;</span>
<span class="line">    # 将中文文件名处理成百分号编码</span>
<span class="line">    filename = quote(&#39;王大锤离职证明.docx&#39;)</span>
<span class="line">    # 指定如何处置内容</span>
<span class="line">    attachment[&#39;content-disposition&#39;] = f&#39;attachment; filename=&quot;{filename}&quot;&#39;</span>
<span class="line"></span>
<span class="line"># 创建SMTP_SSL对象（连接邮件服务器）</span>
<span class="line">smtp_obj = smtplib.SMTP_SSL(&#39;smtp.126.com&#39;, 465)</span>
<span class="line"># 通过用户名和授权码进行登录</span>
<span class="line">smtp_obj.login(&#39;xxxxxxxxx@126.com&#39;, &#39;邮件服务器的授权码&#39;)</span>
<span class="line"># 发送邮件（发件人、收件人、邮件内容（字符串））</span>
<span class="line">smtp_obj.sendmail(</span>
<span class="line">    &#39;xxxxxxxxx@126.com&#39;,</span>
<span class="line">    &#39;zzzzzzzz@1000phone.com&#39;,</span>
<span class="line">    email.as_string()</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便大家用Python实现邮件发送，我将上面的代码封装成了函数，使用的时候大家只需要调整邮件服务器域名、端口、用户名和授权码就可以了。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import smtplib</span>
<span class="line">from email.header import Header</span>
<span class="line">from email.mime.multipart import MIMEMultipart</span>
<span class="line">from email.mime.text import MIMEText</span>
<span class="line">from urllib.parse import quote</span>
<span class="line"></span>
<span class="line"># 邮件服务器域名（自行修改）</span>
<span class="line">EMAIL_HOST = &#39;smtp.126.com&#39;</span>
<span class="line"># 邮件服务端口（通常是465）</span>
<span class="line">EMAIL_PORT = 465</span>
<span class="line"># 登录邮件服务器的账号（自行修改）</span>
<span class="line">EMAIL_USER = &#39;xxxxxxxxx@126.com&#39;</span>
<span class="line"># 开通SMTP服务的授权码（自行修改）</span>
<span class="line">EMAIL_AUTH = &#39;邮件服务器的授权码&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def send_email(*, from_user, to_users, subject=&#39;&#39;, content=&#39;&#39;, filenames=[]):</span>
<span class="line">    &quot;&quot;&quot;发送邮件</span>
<span class="line">    </span>
<span class="line">    :param from_user: 发件人</span>
<span class="line">    :param to_users: 收件人，多个收件人用英文分号进行分隔</span>
<span class="line">    :param subject: 邮件的主题</span>
<span class="line">    :param content: 邮件正文内容</span>
<span class="line">    :param filenames: 附件要发送的文件路径</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    email = MIMEMultipart()</span>
<span class="line">    email[&#39;From&#39;] = from_user</span>
<span class="line">    email[&#39;To&#39;] = to_users</span>
<span class="line">    email[&#39;Subject&#39;] = subject</span>
<span class="line"></span>
<span class="line">    message = MIMEText(content, &#39;plain&#39;, &#39;utf-8&#39;)</span>
<span class="line">    email.attach(message)</span>
<span class="line">    for filename in filenames:</span>
<span class="line">        with open(filename, &#39;rb&#39;) as file:</span>
<span class="line">            pos = filename.rfind(&#39;/&#39;)</span>
<span class="line">            display_filename = filename[pos + 1:] if pos &gt;= 0 else filename</span>
<span class="line">            display_filename = quote(display_filename)</span>
<span class="line">            attachment = MIMEText(file.read(), &#39;base64&#39;, &#39;utf-8&#39;)</span>
<span class="line">            attachment[&#39;content-type&#39;] = &#39;application/octet-stream&#39;</span>
<span class="line">            attachment[&#39;content-disposition&#39;] = f&#39;attachment; filename=&quot;{display_filename}&quot;&#39;</span>
<span class="line">            email.attach(attachment)</span>
<span class="line"></span>
<span class="line">    smtp = smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT)</span>
<span class="line">    smtp.login(EMAIL_USER, EMAIL_AUTH)</span>
<span class="line">    smtp.sendmail(from_user, to_users.split(&#39;;&#39;), email.as_string())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送短信" tabindex="-1"><a class="header-anchor" href="#发送短信"><span>发送短信</span></a></h3><p>发送短信也是项目中常见的功能，网站的注册码、验证码、营销信息基本上都是通过短信来发送给用户的。发送短信需要三方平台的支持，下面我们以<a href="https://luosimao.com/" target="_blank" rel="noopener noreferrer">螺丝帽平台</a>为例，为大家介绍如何用Python程序发送短信。注册账号和购买短信服务的细节我们不在这里进行赘述，大家可以咨询平台的客服。</p><p><img src="https://github.com/jackfrued/mypic/raw/master/20210820194421.png" alt="image-20210820194420911"></p><p>接下来，我们可以通过<code>requests</code>库向平台提供的短信网关发起一个HTTP请求，通过将接收短信的手机号和短信内容作为参数，就可以发送短信，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def send_message_by_luosimao(tel, message):</span>
<span class="line">    &quot;&quot;&quot;发送短信（调用螺丝帽短信网关）&quot;&quot;&quot;</span>
<span class="line">    resp = requests.post(</span>
<span class="line">        url=&#39;http://sms-api.luosimao.com/v1/send.json&#39;,</span>
<span class="line">        auth=(&#39;api&#39;, &#39;key-注册成功后平台分配的KEY&#39;),</span>
<span class="line">        data={</span>
<span class="line">            &#39;mobile&#39;: tel,</span>
<span class="line">            &#39;message&#39;: message</span>
<span class="line">        },</span>
<span class="line">        timeout=10,</span>
<span class="line">        verify=False</span>
<span class="line">    )</span>
<span class="line">    return resp.json()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def gen_mobile_code(length=6):</span>
<span class="line">    &quot;&quot;&quot;生成指定长度的手机验证码&quot;&quot;&quot;</span>
<span class="line">    return &#39;&#39;.join(random.choices(&#39;0123456789&#39;, k=length))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    code = gen_mobile_code()</span>
<span class="line">    message = f&#39;您的短信验证码是{code}，打死也不能告诉别人哟！【Python小课】&#39;</span>
<span class="line">    print(send_message_by_luosimao(&#39;13500112233&#39;, message))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面请求螺丝帽的短信网关<code>http://sms-api.luosimao.com/v1/send.json</code>会返回JSON格式的数据，如果返回<code>{&#39;error&#39;: 0, &#39;msg&#39;: &#39;OK&#39;}</code>就说明短信已经发送成功了，如果<code>error</code>的值不是<code>0</code>，可以通过查看官方的<a href="https://luosimao.com/docs/api/" target="_blank" rel="noopener noreferrer">开发文档</a>了解到底哪个环节出了问题。螺丝帽平台常见的错误类型如下图所示。</p><img src="https://github.com/jackfrued/mypic/raw/master/20210820195505.png" alt="image-20210820195505761" style="zoom:50%;"><p>目前，大多数短信平台都会要求短信内容必须附上签名，下图是我在螺丝帽平台配置的短信签名“【Python小课】”。有些涉及到敏感内容的短信，还需要提前配置短信模板，有兴趣的读者可以自行研究。一般情况下，平台为了防范短信被盗用，还会要求设置“IP白名单”，不清楚如何配置的可以咨询平台客服。</p><p><img src="https://github.com/jackfrued/mypic/raw/master/20210820194653.png" alt="image-20210820194653785"></p><p>当然国内的短信平台很多，读者可以根据自己的需要进行选择（通常会考虑费用预算、短信达到率、使用的难易程度等指标），如果需要在商业项目中使用短信服务建议购买短信平台提供的套餐服务。</p><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>其实，发送邮件和发送短信一样，也可以通过调用三方服务来完成，在实际的商业项目中，建议自己架设邮件服务器或购买三方服务来发送邮件，这个才是比较靠谱的选择。</p>`,27),p=[l];function c(d,t){return a(),s("div",null,p)}const r=n(i,[["render",c],["__file","第29课：用Python发送邮件和短信.html.vue"]]),v=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC29%E8%AF%BE%EF%BC%9A%E7%94%A8Python%E5%8F%91%E9%80%81%E9%82%AE%E4%BB%B6%E5%92%8C%E7%9F%AD%E4%BF%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第29课：用Python发送邮件和短信","slug":"第29课-用python发送邮件和短信","link":"#第29课-用python发送邮件和短信","children":[{"level":3,"title":"发送电子邮件","slug":"发送电子邮件","link":"#发送电子邮件","children":[]},{"level":3,"title":"发送短信","slug":"发送短信","link":"#发送短信","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720435246000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-Core-50-Courses/第29课：用Python发送邮件和短信.md"}');export{r as comp,v as data};
