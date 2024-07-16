import{_ as s,c as n,o as e,d as a}from"./app-CzcyFXHz.js";const i="/docs/assets/arpanet-EhzfB6j7.png",l="/docs/assets/osimodel-CjMNX91b.png",p="/docs/assets/before-browser-C3nv-K_I.jpg",d="/docs/assets/after-browser-DQC5L7-P.jpg",r="/docs/assets/TCP-IP-model-C0z_-a5w.png",c="/docs/assets/telnet-CEQOFsWt.png",t={},v=a('<h2 id="网络编程入门" tabindex="-1"><a class="header-anchor" href="#网络编程入门"><span>网络编程入门</span></a></h2><h3 id="计算机网络基础" tabindex="-1"><a class="header-anchor" href="#计算机网络基础"><span>计算机网络基础</span></a></h3><p>计算机网络是独立自主的计算机互联而成的系统的总称，组建计算机网络最主要的目的是实现多台计算机之间的通信和资源共享。今天计算机网络中的设备和计算机网络的用户已经多得不可计数，而计算机网络也可以称得上是一个“复杂巨系统”，对于这样的系统，我们不可能用一两篇文章把它讲清楚，有兴趣的读者可以自行阅读Andrew S.Tanenbaum老师的经典之作《计算机网络》或Kurose和Ross老师合著的《计算机网络:自顶向下方法》来了解计算机网络的相关知识。</p><h4 id="计算机网络发展史" tabindex="-1"><a class="header-anchor" href="#计算机网络发展史"><span>计算机网络发展史</span></a></h4><ol><li><p>1960s - 美国国防部ARPANET项目问世，奠定了分组交换网络的基础。</p><p><img src="'+i+'" alt=""></p></li><li><p>1980s - 国际标准化组织（ISO）发布OSI/RM，奠定了网络技术标准化的基础。</p><p><img src="'+l+'" alt=""></p></li><li><p>1990s - 英国人<a href="https://zh.wikipedia.org/wiki/%E6%8F%90%E5%A7%86%C2%B7%E6%9F%8F%E5%85%A7%E8%8C%B2-%E6%9D%8E" target="_blank" rel="noopener noreferrer">蒂姆·伯纳斯-李</a>发明了图形化的浏览器，浏览器的简单易用性使得计算机网络迅速被普及。</p><p>在没有浏览器的年代，上网是这样的。</p><p><img src="'+p+'" alt=""></p><p>有了浏览器以后，上网是这样的。</p><p><img src="'+d+'" alt=""></p></li></ol><h4 id="tcp-ip模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip模型"><span>TCP/IP模型</span></a></h4><p>实现网络通信的基础是网络通信协议，这些协议通常是由<a href="https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%BB%84" target="_blank" rel="noopener noreferrer">互联网工程任务组</a> （IETF）制定的。所谓“协议”就是通信计算机双方必须共同遵从的一组约定，例如怎样建立连接、怎样互相识别等，网络协议的三要素是：语法、语义和时序。构成我们今天使用的Internet的基础的是TCP/IP协议族，所谓协议族就是一系列的协议及其构成的通信模型，我们通常也把这套东西称为TCP/IP模型。与国际标准化组织发布的OSI/RM这个七层模型不同，TCP/IP是一个四层模型，也就是说，该模型将我们使用的网络从逻辑上分解为四个层次，自底向上依次是：网络接口层、网络层、传输层和应用层，如下图所示。</p><p><img src="'+r+`" alt=""></p><p>IP通常被翻译为网际协议，它服务于网络层，主要实现了寻址和路由的功能。接入网络的每一台主机都需要有自己的IP地址，IP地址就是主机在计算机网络上的身份标识。当然由于IPv4地址的匮乏，我们平常在家里、办公室以及其他可以接入网络的公共区域上网时获得的IP地址并不是全球唯一的IP地址，而是一个<a href="https://zh.wikipedia.org/zh-hans/%E5%B1%80%E5%9F%9F%E7%BD%91" target="_blank" rel="noopener noreferrer">局域网（LAN）</a>中的内部IP地址，通过<a href="https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2" target="_blank" rel="noopener noreferrer">网络地址转换（NAT）服务</a>我们也可以实现对网络的访问。计算机网络上有大量的被我们称为“<a href="https://zh.wikipedia.org/wiki/%E8%B7%AF%E7%94%B1%E5%99%A8" target="_blank" rel="noopener noreferrer">路由器</a>”的网络中继设备，它们会存储转发我们发送到网络上的数据分组，让从源头发出的数据最终能够找到传送到目的地通路，这项功能就是所谓的路由。</p><p>TCP全称传输控制协议，它是基于IP提供的寻址和路由服务而建立起来的负责实现端到端可靠传输的协议，之所以将TCP称为可靠的传输协议是因为TCP向调用者承诺了三件事情：</p><ol><li>数据不传丢不传错（利用握手、校验和重传机制可以实现）。</li><li>流量控制（通过滑动窗口匹配数据发送者和接收者之间的传输速度）。</li><li>拥塞控制（通过RTT时间以及对滑动窗口的控制缓解网络拥堵）。</li></ol><h4 id="网络应用模式" tabindex="-1"><a class="header-anchor" href="#网络应用模式"><span>网络应用模式</span></a></h4><ol><li>C/S模式和B/S模式。这里的C指的是Client（客户端），通常是一个需要安装到某个宿主操作系统上的应用程序；而B指的是Browser（浏览器），它几乎是所有图形化操作系统都默认安装了的一个应用软件；通过C或B都可以实现对S（服务器）的访问。关于二者的比较和讨论在网络上有一大堆的文章，在此我们就不再浪费笔墨了。</li><li>去中心化的网络应用模式。不管是B/S还是C/S都需要服务器的存在，服务器就是整个应用模式的中心，而去中心化的网络应用通常没有固定的服务器或者固定的客户端，所有应用的使用者既可以作为资源的提供者也可以作为资源的访问者。</li></ol><h3 id="基于http协议的网络资源访问" tabindex="-1"><a class="header-anchor" href="#基于http协议的网络资源访问"><span>基于HTTP协议的网络资源访问</span></a></h3><h4 id="http-超文本传输协议" tabindex="-1"><a class="header-anchor" href="#http-超文本传输协议"><span>HTTP（超文本传输协议）</span></a></h4><p>HTTP是超文本传输协议（Hyper-Text Transfer Proctol）的简称，维基百科上对HTTP的解释是：超文本传输协议是一种用于分布式、协作式和超媒体信息系统的应用层协议，它是<a href="https://zh.wikipedia.org/wiki/%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2" target="_blank" rel="noopener noreferrer">万维网</a>数据通信的基础，设计HTTP最初的目的是为了提供一种发布和接收<a href="https://zh.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">HTML</a>页面的方法，通过HTTP或者<a href="https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">HTTPS</a>（超文本传输安全协议）请求的资源由URI（<a href="https://zh.wikipedia.org/wiki/%E7%B5%B1%E4%B8%80%E8%B3%87%E6%BA%90%E6%A8%99%E8%AD%98%E7%AC%A6" target="_blank" rel="noopener noreferrer">统一资源标识符</a>）来标识。关于HTTP的更多内容，我们推荐阅读阮一峰老师的<a href="http://www.ruanyifeng.com/blog/2016/08/http.html" target="_blank" rel="noopener noreferrer">《HTTP 协议入门》</a>，简单的说，通过HTTP我们可以获取网络上的（基于字符的）资源，开发中经常会用到的网络API（有的地方也称之为网络数据接口）就是基于HTTP来实现数据传输的。</p><h4 id="json格式" tabindex="-1"><a class="header-anchor" href="#json格式"><span>JSON格式</span></a></h4><p><strong>JSON</strong>（<strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation）是一种轻量级的数据交换语言，该语言以易于让人阅读的文字（纯文本）为基础，用来传输由属性值或者序列性的值组成的数据对象。尽管JSON是最初只是Javascript中一种创建对象的字面量语法，但它在当下更是一种独立于语言的数据格式，很多编程语言都支持JSON格式数据的生成和解析，Python内置的json模块也提供了这方面的功能。由于JSON是纯文本，它和<a href="https://zh.wikipedia.org/wiki/XML" target="_blank" rel="noopener noreferrer">XML</a>一样都适用于异构系统之间的数据交换，而相较于XML，JSON显得更加的轻便和优雅。下面是表达同样信息的XML和JSON，而JSON的优势是相当直观的。</p><p>XML的例子：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="line">&lt;message&gt;</span>
<span class="line">	&lt;from&gt;Alice&lt;/from&gt;</span>
<span class="line">	&lt;to&gt;Bob&lt;/to&gt;</span>
<span class="line">	&lt;content&gt;Will you marry me?&lt;/content&gt;</span>
<span class="line">&lt;/message&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON的例子：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;from&quot;: &quot;Alice&quot;,</span>
<span class="line">    &quot;to&quot;: &quot;Bob&quot;,</span>
<span class="line">    &quot;content&quot;: &quot;Will you marry me?&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="requests库" tabindex="-1"><a class="header-anchor" href="#requests库"><span>requests库</span></a></h4><p>requests是一个基于HTTP协议来使用网络的第三库，其<a href="http://cn.python-requests.org/zh_CN/latest/" target="_blank" rel="noopener noreferrer">官方网站</a>有这样的一句介绍它的话：“Requests是唯一的一个<strong>非转基因</strong>的Python HTTP库，人类可以安全享用。”简单的说，使用requests库可以非常方便的使用HTTP，避免安全缺陷、冗余代码以及“重复发明轮子”（行业黑话，通常用在软件工程领域表示重新创造一个已有的或是早已被优化過的基本方法）。前面的文章中我们已经使用过这个库，下面我们还是通过requests来实现一个访问网络数据接口并从中获取美女图片下载链接然后下载美女图片到本地的例子程序，程序中使用了<a href="https://www.tianapi.com/" target="_blank" rel="noopener noreferrer">天行数据</a>提供的网络API。</p><p>我们可以先通过pip安装requests及其依赖库。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install requests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果使用PyCharm作为开发工具，可以直接在代码中书写<code>import requests</code>，然后通过代码修复功能来自动下载安装requests。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import time</span>
<span class="line">from threading import Thread</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 继承Thread类创建自定义的线程类</span>
<span class="line">class DownloadHanlder(Thread):</span>
<span class="line"></span>
<span class="line">    def __init__(self, url):</span>
<span class="line">        super().__init__()</span>
<span class="line">        self.url = url</span>
<span class="line"></span>
<span class="line">    def run(self):</span>
<span class="line">        filename = self.url[self.url.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">        resp = requests.get(self.url)</span>
<span class="line">        with open(&#39;/Users/Hao/&#39; + filename, &#39;wb&#39;) as f:</span>
<span class="line">            f.write(resp.content)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 通过requests模块的get函数获取网络资源</span>
<span class="line">    # 下面的代码中使用了天行数据接口提供的网络API</span>
<span class="line">    # 要使用该数据接口需要在天行数据的网站上注册</span>
<span class="line">    # 然后用自己的Key替换掉下面代码的中APIKey即可</span>
<span class="line">    resp = requests.get(</span>
<span class="line">        &#39;http://api.tianapi.com/meinv/?key=APIKey&amp;num=10&#39;)</span>
<span class="line">    # 将服务器返回的JSON格式的数据解析为字典</span>
<span class="line">    data_model = resp.json()</span>
<span class="line">    for mm_dict in data_model[&#39;newslist&#39;]:</span>
<span class="line">        url = mm_dict[&#39;picUrl&#39;]</span>
<span class="line">        # 通过多线程的方式实现图片下载</span>
<span class="line">        DownloadHanlder(url).start()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于传输层协议的套接字编程" tabindex="-1"><a class="header-anchor" href="#基于传输层协议的套接字编程"><span>基于传输层协议的套接字编程</span></a></h3><p>套接字这个词对很多不了解网络编程的人来说显得非常晦涩和陌生，其实说得通俗点，套接字就是一套用<a href="https://zh.wikipedia.org/wiki/C%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">C语言</a>写成的应用程序开发库，主要用于实现进程间通信和网络编程，在网络应用开发中被广泛使用。在Python中也可以基于套接字来使用传输层提供的传输服务，并基于此开发自己的网络应用。实际开发中使用的套接字可以分为三类：流套接字（TCP套接字）、数据报套接字和原始套接字。</p><h4 id="tcp套接字" tabindex="-1"><a class="header-anchor" href="#tcp套接字"><span>TCP套接字</span></a></h4><p>所谓TCP套接字就是使用TCP协议提供的传输服务来实现网络通信的编程接口。在Python中可以通过创建socket对象并指定type属性为SOCK_STREAM来使用TCP套接字。由于一台主机可能拥有多个IP地址，而且很有可能会配置多个不同的服务，所以作为服务器端的程序，需要在创建套接字对象后将其绑定到指定的IP地址和端口上。这里的端口并不是物理设备而是对IP地址的扩展，用于区分不同的服务，例如我们通常将HTTP服务跟80端口绑定，而MySQL数据库服务默认绑定在3306端口，这样当服务器收到用户请求时就可以根据端口号来确定到底用户请求的是HTTP服务器还是数据库服务器提供的服务。端口的取值范围是0~65535，而1024以下的端口我们通常称之为“著名端口”（留给像FTP、HTTP、SMTP等“著名服务”使用的端口，有的地方也称之为“周知端口”），自定义的服务通常不使用这些端口，除非自定义的是HTTP或FTP这样的著名服务。</p><p>下面的代码实现了一个提供时间日期的服务器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from socket import socket, SOCK_STREAM, AF_INET</span>
<span class="line">from datetime import datetime</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 1.创建套接字对象并指定使用哪种传输服务</span>
<span class="line">    # family=AF_INET - IPv4地址</span>
<span class="line">    # family=AF_INET6 - IPv6地址</span>
<span class="line">    # type=SOCK_STREAM - TCP套接字</span>
<span class="line">    # type=SOCK_DGRAM - UDP套接字</span>
<span class="line">    # type=SOCK_RAW - 原始套接字</span>
<span class="line">    server = socket(family=AF_INET, type=SOCK_STREAM)</span>
<span class="line">    # 2.绑定IP地址和端口(端口用于区分不同的服务)</span>
<span class="line">    # 同一时间在同一个端口上只能绑定一个服务否则报错</span>
<span class="line">    server.bind((&#39;192.168.1.2&#39;, 6789))</span>
<span class="line">    # 3.开启监听 - 监听客户端连接到服务器</span>
<span class="line">    # 参数512可以理解为连接队列的大小</span>
<span class="line">    server.listen(512)</span>
<span class="line">    print(&#39;服务器启动开始监听...&#39;)</span>
<span class="line">    while True:</span>
<span class="line">        # 4.通过循环接收客户端的连接并作出相应的处理(提供服务)</span>
<span class="line">        # accept方法是一个阻塞方法如果没有客户端连接到服务器代码不会向下执行</span>
<span class="line">        # accept方法返回一个元组其中的第一个元素是客户端对象</span>
<span class="line">        # 第二个元素是连接到服务器的客户端的地址(由IP和端口两部分构成)</span>
<span class="line">        client, addr = server.accept()</span>
<span class="line">        print(str(addr) + &#39;连接到了服务器.&#39;)</span>
<span class="line">        # 5.发送数据</span>
<span class="line">        client.send(str(datetime.now()).encode(&#39;utf-8&#39;))</span>
<span class="line">        # 6.断开连接</span>
<span class="line">        client.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行服务器程序后我们可以通过Windows系统的telnet来访问该服务器，结果如下图所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">telnet 192.168.1.2 6789</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="`+c+`" alt=""></p><p>当然我们也可以通过Python的程序来实现TCP客户端的功能，相较于实现服务器程序，实现客户端程序就简单多了，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from socket import socket</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 1.创建套接字对象默认使用IPv4和TCP协议</span>
<span class="line">    client = socket()</span>
<span class="line">    # 2.连接到服务器(需要指定IP地址和端口)</span>
<span class="line">    client.connect((&#39;192.168.1.2&#39;, 6789))</span>
<span class="line">    # 3.从服务器接收数据</span>
<span class="line">    print(client.recv(1024).decode(&#39;utf-8&#39;))</span>
<span class="line">    client.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，上面的服务器并没有使用多线程或者异步I/O的处理方式，这也就意味着当服务器与一个客户端处于通信状态时，其他的客户端只能排队等待。很显然，这样的服务器并不能满足我们的需求，我们需要的服务器是能够同时接纳和处理多个用户请求的。下面我们来设计一个使用多线程技术处理多个用户请求的服务器，该服务器会向连接到服务器的客户端发送一张图片。</p><p>服务器端代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from socket import socket, SOCK_STREAM, AF_INET</span>
<span class="line">from base64 import b64encode</span>
<span class="line">from json import dumps</span>
<span class="line">from threading import Thread</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    </span>
<span class="line">    # 自定义线程类</span>
<span class="line">    class FileTransferHandler(Thread):</span>
<span class="line"></span>
<span class="line">        def __init__(self, cclient):</span>
<span class="line">            super().__init__()</span>
<span class="line">            self.cclient = cclient</span>
<span class="line"></span>
<span class="line">        def run(self):</span>
<span class="line">            my_dict = {}</span>
<span class="line">            my_dict[&#39;filename&#39;] = &#39;guido.jpg&#39;</span>
<span class="line">            # JSON是纯文本不能携带二进制数据</span>
<span class="line">            # 所以图片的二进制数据要处理成base64编码</span>
<span class="line">            my_dict[&#39;filedata&#39;] = data</span>
<span class="line">            # 通过dumps函数将字典处理成JSON字符串</span>
<span class="line">            json_str = dumps(my_dict)</span>
<span class="line">            # 发送JSON字符串</span>
<span class="line">            self.cclient.send(json_str.encode(&#39;utf-8&#39;))</span>
<span class="line">            self.cclient.close()</span>
<span class="line"></span>
<span class="line">    # 1.创建套接字对象并指定使用哪种传输服务</span>
<span class="line">    server = socket()</span>
<span class="line">    # 2.绑定IP地址和端口(区分不同的服务)</span>
<span class="line">    server.bind((&#39;192.168.1.2&#39;, 5566))</span>
<span class="line">    # 3.开启监听 - 监听客户端连接到服务器</span>
<span class="line">    server.listen(512)</span>
<span class="line">    print(&#39;服务器启动开始监听...&#39;)</span>
<span class="line">    with open(&#39;guido.jpg&#39;, &#39;rb&#39;) as f:</span>
<span class="line">        # 将二进制数据处理成base64再解码成字符串</span>
<span class="line">        data = b64encode(f.read()).decode(&#39;utf-8&#39;)</span>
<span class="line">    while True:</span>
<span class="line">        client, addr = server.accept()</span>
<span class="line">        # 启动一个线程来处理客户端的请求</span>
<span class="line">        FileTransferHandler(client).start()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from socket import socket</span>
<span class="line">from json import loads</span>
<span class="line">from base64 import b64decode</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    client = socket()</span>
<span class="line">    client.connect((&#39;192.168.1.2&#39;, 5566))</span>
<span class="line">    # 定义一个保存二进制数据的对象</span>
<span class="line">    in_data = bytes()</span>
<span class="line">    # 由于不知道服务器发送的数据有多大每次接收1024字节</span>
<span class="line">    data = client.recv(1024)</span>
<span class="line">    while data:</span>
<span class="line">        # 将收到的数据拼接起来</span>
<span class="line">        in_data += data</span>
<span class="line">        data = client.recv(1024)</span>
<span class="line">    # 将收到的二进制数据解码成JSON字符串并转换成字典</span>
<span class="line">    # loads函数的作用就是将JSON字符串转成字典对象</span>
<span class="line">    my_dict = loads(in_data.decode(&#39;utf-8&#39;))</span>
<span class="line">    filename = my_dict[&#39;filename&#39;]</span>
<span class="line">    filedata = my_dict[&#39;filedata&#39;].encode(&#39;utf-8&#39;)</span>
<span class="line">    with open(&#39;/Users/Hao/&#39; + filename, &#39;wb&#39;) as f:</span>
<span class="line">        # 将base64格式的数据解码成二进制数据并写入文件</span>
<span class="line">        f.write(b64decode(filedata))</span>
<span class="line">    print(&#39;图片已保存.&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个案例中，我们使用了JSON作为数据传输的格式（通过JSON格式对传输的数据进行了序列化和反序列化的操作），但是JSON并不能携带二进制数据，因此对图片的二进制数据进行了Base64编码的处理。Base64是一种用64个字符表示所有二进制数据的编码方式，通过将二进制数据每6位一组的方式重新组织，刚好可以使用0~9的数字、大小写字母以及“+”和“/”总共64个字符表示从<code>000000</code>到<code>111111</code>的64种状态。<a href="https://zh.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer">维基百科</a>上有关于Base64编码的详细讲解，不熟悉Base64的读者可以自行阅读。</p><blockquote><p><strong>说明：</strong> 上面的代码主要为了讲解网络编程的相关内容因此并没有对异常状况进行处理，请读者自行添加异常处理代码来增强程序的健壮性。</p></blockquote><h4 id="udp套接字" tabindex="-1"><a class="header-anchor" href="#udp套接字"><span>UDP套接字</span></a></h4><p>传输层除了有可靠的传输协议TCP之外，还有一种非常轻便的传输协议叫做用户数据报协议，简称UDP。TCP和UDP都是提供端到端传输服务的协议，二者的差别就如同打电话和发短信的区别，后者不对传输的可靠性和可达性做出任何承诺从而避免了TCP中握手和重传的开销，所以在强调性能和而不是数据完整性的场景中（例如传输网络音视频数据），UDP可能是更好的选择。可能大家会注意到一个现象，就是在观看网络视频时，有时会出现卡顿，有时会出现花屏，这无非就是部分数据传丢或传错造成的。在Python中也可以使用UDP套接字来创建网络应用，对此我们不进行赘述，有兴趣的读者可以自行研究。</p><h3 id="网络应用开发" tabindex="-1"><a class="header-anchor" href="#网络应用开发"><span>网络应用开发</span></a></h3><h4 id="发送电子邮件" tabindex="-1"><a class="header-anchor" href="#发送电子邮件"><span>发送电子邮件</span></a></h4><p>在即时通信软件如此发达的今天，电子邮件仍然是互联网上使用最为广泛的应用之一，公司向应聘者发出录用通知、网站向用户发送一个激活账号的链接、银行向客户推广它们的理财产品等几乎都是通过电子邮件来完成的，而这些任务应该都是由程序自动完成的。</p><p>就像我们可以用HTTP（超文本传输协议）来访问一个网站一样，发送邮件要使用SMTP（简单邮件传输协议），SMTP也是一个建立在TCP（传输控制协议）提供的可靠数据传输服务的基础上的应用级协议，它规定了邮件的发送者如何跟发送邮件的服务器进行通信的细节，而Python中的smtplib模块将这些操作简化成了几个简单的函数。</p><p>下面的代码演示了如何在Python发送邮件。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from smtplib import SMTP</span>
<span class="line">from email.header import Header</span>
<span class="line">from email.mime.text import MIMEText</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 请自行修改下面的邮件发送者和接收者</span>
<span class="line">    sender = &#39;abcdefg@126.com&#39;</span>
<span class="line">    receivers = [&#39;uvwxyz@qq.com&#39;, &#39;uvwxyz@126.com&#39;]</span>
<span class="line">    message = MIMEText(&#39;用Python发送邮件的示例代码.&#39;, &#39;plain&#39;, &#39;utf-8&#39;)</span>
<span class="line">    message[&#39;From&#39;] = Header(&#39;王大锤&#39;, &#39;utf-8&#39;)</span>
<span class="line">    message[&#39;To&#39;] = Header(&#39;骆昊&#39;, &#39;utf-8&#39;)</span>
<span class="line">    message[&#39;Subject&#39;] = Header(&#39;示例代码实验邮件&#39;, &#39;utf-8&#39;)</span>
<span class="line">    smtper = SMTP(&#39;smtp.126.com&#39;)</span>
<span class="line">    # 请自行修改下面的登录口令</span>
<span class="line">    smtper.login(sender, &#39;secretpass&#39;)</span>
<span class="line">    smtper.sendmail(sender, receivers, message.as_string())</span>
<span class="line">    print(&#39;邮件发送完成!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要发送带有附件的邮件，那么可以按照下面的方式进行操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from smtplib import SMTP</span>
<span class="line">from email.header import Header</span>
<span class="line">from email.mime.text import MIMEText</span>
<span class="line">from email.mime.image import MIMEImage</span>
<span class="line">from email.mime.multipart import MIMEMultipart</span>
<span class="line"></span>
<span class="line">import urllib</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 创建一个带附件的邮件消息对象</span>
<span class="line">    message = MIMEMultipart()</span>
<span class="line">    </span>
<span class="line">    # 创建文本内容</span>
<span class="line">    text_content = MIMEText(&#39;附件中有本月数据请查收&#39;, &#39;plain&#39;, &#39;utf-8&#39;)</span>
<span class="line">    message[&#39;Subject&#39;] = Header(&#39;本月数据&#39;, &#39;utf-8&#39;)</span>
<span class="line">    # 将文本内容添加到邮件消息对象中</span>
<span class="line">    message.attach(text_content)</span>
<span class="line"></span>
<span class="line">    # 读取文件并将文件作为附件添加到邮件消息对象中</span>
<span class="line">    with open(&#39;/Users/Hao/Desktop/hello.txt&#39;, &#39;rb&#39;) as f:</span>
<span class="line">        txt = MIMEText(f.read(), &#39;base64&#39;, &#39;utf-8&#39;)</span>
<span class="line">        txt[&#39;Content-Type&#39;] = &#39;text/plain&#39;</span>
<span class="line">        txt[&#39;Content-Disposition&#39;] = &#39;attachment; filename=hello.txt&#39;</span>
<span class="line">        message.attach(txt)</span>
<span class="line">    # 读取文件并将文件作为附件添加到邮件消息对象中</span>
<span class="line">    with open(&#39;/Users/Hao/Desktop/汇总数据.xlsx&#39;, &#39;rb&#39;) as f:</span>
<span class="line">        xls = MIMEText(f.read(), &#39;base64&#39;, &#39;utf-8&#39;)</span>
<span class="line">        xls[&#39;Content-Type&#39;] = &#39;application/vnd.ms-excel&#39;</span>
<span class="line">        xls[&#39;Content-Disposition&#39;] = &#39;attachment; filename=month-data.xlsx&#39;</span>
<span class="line">        message.attach(xls)</span>
<span class="line">    </span>
<span class="line">    # 创建SMTP对象</span>
<span class="line">    smtper = SMTP(&#39;smtp.126.com&#39;)</span>
<span class="line">    # 开启安全连接</span>
<span class="line">    # smtper.starttls()</span>
<span class="line">    sender = &#39;abcdefg@126.com&#39;</span>
<span class="line">    receivers = [&#39;uvwxyz@qq.com&#39;]</span>
<span class="line">    # 登录到SMTP服务器</span>
<span class="line">    # 请注意此处不是使用密码而是邮件客户端授权码进行登录</span>
<span class="line">    # 对此有疑问的读者可以联系自己使用的邮件服务器客服</span>
<span class="line">    smtper.login(sender, &#39;secretpass&#39;)</span>
<span class="line">    # 发送邮件</span>
<span class="line">    smtper.sendmail(sender, receivers, message.as_string())</span>
<span class="line">    # 与邮件服务器断开连接</span>
<span class="line">    smtper.quit()</span>
<span class="line">    print(&#39;发送完成!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="发送短信" tabindex="-1"><a class="header-anchor" href="#发送短信"><span>发送短信</span></a></h4><p>发送短信也是项目中常见的功能，网站的注册码、验证码、营销信息基本上都是通过短信来发送给用户的。在下面的代码中我们使用了<a href="http://www.ihuyi.com/" target="_blank" rel="noopener noreferrer">互亿无线</a>短信平台（该平台为注册用户提供了50条免费短信以及常用开发语言发送短信的demo，可以登录该网站并在用户自服务页面中对短信进行配置）提供的API接口实现了发送短信的服务，当然国内的短信平台很多，读者可以根据自己的需要进行选择（通常会考虑费用预算、短信达到率、使用的难易程度等指标），如果需要在商业项目中使用短信服务建议购买短信平台提供的套餐服务。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import urllib.parse</span>
<span class="line">import http.client</span>
<span class="line">import json</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    host  = &quot;106.ihuyi.com&quot;</span>
<span class="line">    sms_send_uri = &quot;/webservice/sms.php?method=Submit&quot;</span>
<span class="line">    # 下面的参数需要填入自己注册的账号和对应的密码</span>
<span class="line">    params = urllib.parse.urlencode({&#39;account&#39;: &#39;你自己的账号&#39;, &#39;password&#39; : &#39;你自己的密码&#39;, &#39;content&#39;: &#39;您的验证码是：147258。请不要把验证码泄露给其他人。&#39;, &#39;mobile&#39;: &#39;接收者的手机号&#39;, &#39;format&#39;:&#39;json&#39; })</span>
<span class="line">    print(params)</span>
<span class="line">    headers = {&#39;Content-type&#39;: &#39;application/x-www-form-urlencoded&#39;, &#39;Accept&#39;: &#39;text/plain&#39;}</span>
<span class="line">    conn = http.client.HTTPConnection(host, port=80, timeout=30)</span>
<span class="line">    conn.request(&#39;POST&#39;, sms_send_uri, params, headers)</span>
<span class="line">    response = conn.getresponse()</span>
<span class="line">    response_str = response.read()</span>
<span class="line">    jsonstr = response_str.decode(&#39;utf-8&#39;)</span>
<span class="line">    print(json.loads(jsonstr))</span>
<span class="line">    conn.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),m=[v];function u(o,b){return e(),n("div",null,m)}const _=s(t,[["render",u],["__file","14.网络编程入门和网络应用开发.html.vue"]]),g=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/14.%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"网络编程入门","slug":"网络编程入门","link":"#网络编程入门","children":[{"level":3,"title":"计算机网络基础","slug":"计算机网络基础","link":"#计算机网络基础","children":[]},{"level":3,"title":"基于HTTP协议的网络资源访问","slug":"基于http协议的网络资源访问","link":"#基于http协议的网络资源访问","children":[]},{"level":3,"title":"基于传输层协议的套接字编程","slug":"基于传输层协议的套接字编程","link":"#基于传输层协议的套接字编程","children":[]},{"level":3,"title":"网络应用开发","slug":"网络应用开发","link":"#网络应用开发","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/14.网络编程入门和网络应用开发.md"}');export{_ as comp,g as data};
