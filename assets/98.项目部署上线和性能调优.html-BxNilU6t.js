import{_ as s,c as n,o as e,d as a}from"./app-CfKFMHBg.js";const l="/docs/assets/aliyun-domain-DFbf6RAp.png",i="/docs/assets/aliyun-keeprecord-e4FWoDNU.png",d="/docs/assets/aliyun-dnslist-1hdxEh0D.png",r="/docs/assets/aliyun-resolve-settings-Dz54j1RD.png",c="/docs/assets/aliyun-certificate-D35ctd8F.png",p={},t=a(`<h2 id="项目部署上线指南" tabindex="-1"><a class="header-anchor" href="#项目部署上线指南"><span>项目部署上线指南</span></a></h2><h3 id="准备上线" tabindex="-1"><a class="header-anchor" href="#准备上线"><span>准备上线</span></a></h3><ol><li><p>上线前的检查工作。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py check --deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>将DEBUG设置为False并配置ALLOWED_HOSTS。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">DEBUG = False</span>
<span class="line">ALLOWED_HOSTS = [&#39;*&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安全相关的配置。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 保持HTTPS连接的时间</span>
<span class="line">SECURE_HSTS_SECONDS = 3600</span>
<span class="line">SECURE_HSTS_INCLUDE_SUBDOMAINS = True</span>
<span class="line">SECURE_HSTS_PRELOAD = True</span>
<span class="line"></span>
<span class="line"># 自动重定向到安全连接</span>
<span class="line">SECURE_SSL_REDIRECT = True</span>
<span class="line"></span>
<span class="line"># 避免浏览器自作聪明推断内容类型</span>
<span class="line">SECURE_CONTENT_TYPE_NOSNIFF = True</span>
<span class="line"></span>
<span class="line"># 避免跨站脚本攻击</span>
<span class="line">SECURE_BROWSER_XSS_FILTER = True</span>
<span class="line"></span>
<span class="line"># COOKIE只能通过HTTPS进行传输</span>
<span class="line">SESSION_COOKIE_SECURE = True</span>
<span class="line">CSRF_COOKIE_SECURE = True</span>
<span class="line"></span>
<span class="line"># 防止点击劫持攻击手段 - 修改HTTP协议响应头</span>
<span class="line"># 当前网站是不允许使用&lt;iframe&gt;标签进行加载的</span>
<span class="line">X_FRAME_OPTIONS = &#39;DENY&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>敏感信息放到环境变量或文件中。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">SECRET_KEY = os.environ[&#39;SECRET_KEY&#39;]</span>
<span class="line"></span>
<span class="line">DB_USER = os.environ[&#39;DB_USER&#39;]</span>
<span class="line">DB_PASS = os.environ[&#39;DB_PASS&#39;]</span>
<span class="line"></span>
<span class="line">REDIS_AUTH = os.environ[&#39;REDIS_AUTH&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="更新服务器python环境到3-x" tabindex="-1"><a class="header-anchor" href="#更新服务器python环境到3-x"><span>更新服务器Python环境到3.x</span></a></h3><blockquote><p>说明：如果需要清除之前的安装，就删除对应的文件和文件夹即可</p></blockquote><ol><li><p>安装底层依赖库。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel libdb4-devel libpcap-devel xz-devel libffi-devel libxml2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>下载Python源代码。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">wget https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tar.xz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>验证下载文件。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">md5sum Python-3.7.6.tar.xz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>解压缩和解归档。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">xz -d Python-3.7.6.tar.xz</span>
<span class="line">tar -xvf Python-3.7.6.tar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行安装前的配置（生成Makefile文件）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">cd Python-3.7.6</span>
<span class="line">./configure --prefix=/usr/local/python37 --enable-optimizations</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>构建和安装。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">make &amp;&amp; make install</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>配置PATH环境变量（用户或系统环境变量）并激活。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">vim ~/.bash_profile</span>
<span class="line">vim /etc/profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">... 此处省略上面的代码...</span>
<span class="line"></span>
<span class="line">export PATH=$PATH:/usr/local/python37/bin</span>
<span class="line"></span>
<span class="line">... 此处省略下面的代码...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">source ~/.bash_profile</span>
<span class="line">source /etc/profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注册软链接（符号链接）- 这一步不是必须的，但通常会比较有用。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">ln -s /usr/local/python37/bin/python3 /usr/bin/python3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>测试Python环境是否更新成功（安装Python 3一定不能破坏原来的Python 2）。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python3 --version</span>
<span class="line">python --version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构"><span>项目目录结构</span></a></h3><p>假设项目文件夹为<code>project</code>，下面的五个子目录分别是：<code>code</code>、<code>conf</code>、<code>logs</code>、<code>stat</code>和<code>venv</code>分别用来保存项目的代码、配置文件、日志文件、静态资源和虚拟环境。其中，<code>conf</code>目录下的子目录<code>cert</code>中保存了配置HTTPS需要使用的证书和密钥；<code>code</code>目录下的项目代码可以通过版本控制工具从代码仓库中检出；虚拟环境可以通过工具（如：venv、virtualenv、pyenv等）进行创建。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">project</span>
<span class="line">├── code</span>
<span class="line">│   └── fangtx</span>
<span class="line">│       ├── api</span>
<span class="line">│       ├── common</span>
<span class="line">│       ├── fangtx</span>
<span class="line">│       ├── forum</span>
<span class="line">│       ├── rent</span>
<span class="line">│       ├── user</span>
<span class="line">│       ├── manage.py</span>
<span class="line">│       ├── README.md</span>
<span class="line">│       ├── static</span>
<span class="line">│       └── templates</span>
<span class="line">├── conf</span>
<span class="line">│   ├── cert</span>
<span class="line">│   │   ├── 214915882850706.key</span>
<span class="line">│   │   └── 214915882850706.pem</span>
<span class="line">│   ├── nginx.conf</span>
<span class="line">│   └── uwsgi.ini</span>
<span class="line">├── logs</span>
<span class="line">│   ├── access.log</span>
<span class="line">│   ├── error.log</span>
<span class="line">│   └── uwsgi.log</span>
<span class="line">├── stat</span>
<span class="line">│   └── css</span>
<span class="line">│   └── images</span>
<span class="line">│   └── js</span>
<span class="line">└── venv</span>
<span class="line">    ├── bin</span>
<span class="line">    │   ├── activate</span>
<span class="line">    │   ├── activate.csh</span>
<span class="line">    │   ├── activate.fish</span>
<span class="line">    │   ├── celery</span>
<span class="line">    │   ├── celerybeat</span>
<span class="line">    │   ├── celeryd</span>
<span class="line">    │   ├── celeryd-multi</span>
<span class="line">    │   ├── coverage</span>
<span class="line">    │   ├── coverage3</span>
<span class="line">    │   ├── coverage-3.7</span>
<span class="line">    │   ├── django-admin</span>
<span class="line">    │   ├── django-admin.py</span>
<span class="line">    │   ├── easy_install</span>
<span class="line">    │   ├── easy_install-3.7</span>
<span class="line">    │   ├── pip</span>
<span class="line">    │   ├── pip3</span>
<span class="line">    │   ├── pip3.7</span>
<span class="line">    │   ├── __pycache__</span>
<span class="line">    │   ├── pyrsa-decrypt</span>
<span class="line">    │   ├── pyrsa-decrypt-bigfile</span>
<span class="line">    │   ├── pyrsa-encrypt</span>
<span class="line">    │   ├── pyrsa-encrypt-bigfile</span>
<span class="line">    │   ├── pyrsa-keygen</span>
<span class="line">    │   ├── pyrsa-priv2pub</span>
<span class="line">    │   ├── pyrsa-sign</span>
<span class="line">    │   ├── pyrsa-verify</span>
<span class="line">    │   ├── python -&gt; python3</span>
<span class="line">    │   ├── python3 -&gt; /usr/bin/python3</span>
<span class="line">    │   └── uwsgi</span>
<span class="line">    ├── include</span>
<span class="line">    ├── lib</span>
<span class="line">    │   └── python3.7</span>
<span class="line">    ├── lib64 -&gt; lib</span>
<span class="line">    ├── pip-selfcheck.json</span>
<span class="line">    └── pyvenv.cfg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面以阿里云为例，简单说明如何为项目注册域名、解析域名以及购买权威机构颁发的证书。</p><ol><li><p><a href="https://wanwang.aliyun.com/domain/" target="_blank" rel="noopener noreferrer">注册域名</a>。</p><p><img src="`+l+'" alt=""></p></li><li><p><a href="https://beian.aliyun.com/" target="_blank" rel="noopener noreferrer">域名备案</a>。</p><p><img src="'+i+'" alt=""></p></li><li><p><a href="https://dns.console.aliyun.com/#/dns/domainList" target="_blank" rel="noopener noreferrer">域名解析</a>。</p><p><img src="'+d+'" alt=""></p><p><img src="'+r+'" alt=""></p></li><li><p><a href="https://www.aliyun.com/product/cas" target="_blank" rel="noopener noreferrer">购买证书</a>。</p><p><img src="'+c+`" alt=""></p></li></ol><p>可以使用类似于sftp的工具将证书上传到<code>conf/cert</code>目录，然后使用git克隆项目代码到<code>code</code>目录。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">cd code</span>
<span class="line">git clone &lt;url&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>回到项目目录，创建并激活虚拟环境。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python3 -m venv venv</span>
<span class="line">source venv/bin/activate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>重建项目依赖项。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install -r code/teamproject/requirements.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="uwsgi的配置" tabindex="-1"><a class="header-anchor" href="#uwsgi的配置"><span>uWSGI的配置</span></a></h3><ol><li><p>安装uWSGI。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install uwsgi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改uWSGI的配置文件（<code>/root/project/conf/uwsgi.ini</code>）。</p><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">[uwsgi]</span>
<span class="line"># 配置前导路径</span>
<span class="line">base=/root/project</span>
<span class="line"># 配置项目名称</span>
<span class="line">name=teamproject</span>
<span class="line"># 守护进程</span>
<span class="line">master=true</span>
<span class="line"># 进程个数</span>
<span class="line">processes=4</span>
<span class="line"># 虚拟环境</span>
<span class="line">pythonhome=%(base)/venv</span>
<span class="line"># 项目地址</span>
<span class="line">chdir=%(base)/code/%(name)</span>
<span class="line"># 指定python解释器</span>
<span class="line">pythonpath=%(pythonhome)/bin/python</span>
<span class="line"># 指定uwsgi文件</span>
<span class="line">module=%(name).wsgi</span>
<span class="line"># 通信的地址和端口(自己服务器的IP地址和端口)</span>
<span class="line">socket=172.18.61.250:8000</span>
<span class="line"># 日志文件地址</span>
<span class="line">logto=%(base)/logs/uwsgi.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：可以先将“通信的地址和端口”项等号前面改为http来进行测试，如果没有问题再改回 成socket，然后通过Nginx来实现项目的“动静分离”（静态资源交给Nginx处理，动态内容交给 uWSGI处理）。按照下面的方式可以启动uWSGI服务器。</p></blockquote></li><li><p>启动服务器。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">nohup uwsgi --ini conf/uwsgi.ini &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="nginx的配置" tabindex="-1"><a class="header-anchor" href="#nginx的配置"><span>Nginx的配置</span></a></h3><ol><li><p>安装Nginx。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">yum -y install nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改全局配置文件（<code>/etc/nginx/nginx.conf</code>）。</p><div class="language-Nginx line-numbers-mode" data-highlighter="prismjs" data-ext="Nginx" data-title="Nginx"><pre class="language-Nginx"><code><span class="line"># 配置用户</span>
<span class="line">user nginx;</span>
<span class="line"># 工作进程数(建议跟CPU的核数量一致)</span>
<span class="line">worker_processes auto;</span>
<span class="line"># 错误日志</span>
<span class="line">error_log /var/log/nginx/error.log;</span>
<span class="line"># 进程文件</span>
<span class="line">pid /run/nginx.pid;</span>
<span class="line"># 包含其他的配置</span>
<span class="line">include /usr/share/nginx/modules/*.conf;</span>
<span class="line"># 工作模式(多路IO复用方式)和连接上限</span>
<span class="line">events {</span>
<span class="line">    use epoll;</span>
<span class="line">    worker_connections 1024;</span>
<span class="line">}</span>
<span class="line"># HTTP服务器相关配置</span>
<span class="line">http {</span>
<span class="line">    # 日志格式</span>
<span class="line">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
<span class="line">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
<span class="line">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
<span class="line">    # 访问日志</span>
<span class="line">    access_log  /var/log/nginx/access.log  main;</span>
<span class="line">    # 开启高效文件传输模式</span>
<span class="line">    sendfile            on;</span>
<span class="line">    # 用sendfile传输文件时有利于改善性能</span>
<span class="line">    tcp_nopush          on;</span>
<span class="line">    # 禁用Nagle来解决交互性问题</span>
<span class="line">    tcp_nodelay         on;</span>
<span class="line">    # 客户端保持连接时间</span>
<span class="line">    keepalive_timeout   30;</span>
<span class="line">    types_hash_max_size 2048;</span>
<span class="line">    # 包含MIME类型的配置</span>
<span class="line">    include             /etc/nginx/mime.types;</span>
<span class="line">    # 默认使用二进制流格式</span>
<span class="line">    default_type        application/octet-stream;</span>
<span class="line">    # 包含其他配置文件</span>
<span class="line">    include /etc/nginx/conf.d/*.conf;</span>
<span class="line">    # 包含项目的Nginx配置文件</span>
<span class="line">    include /root/project/conf/*.conf;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑局部配置文件（<code>/root/project/conf/nginx.conf</code>）。</p><div class="language-Nginx line-numbers-mode" data-highlighter="prismjs" data-ext="Nginx" data-title="Nginx"><pre class="language-Nginx"><code><span class="line">server {</span>
<span class="line">    listen      80;</span>
<span class="line">    server_name _;</span>
<span class="line">    access_log /root/project/logs/access.log;</span>
<span class="line">    error_log /root/project/logs/error.log;</span>
<span class="line">    location / {</span>
<span class="line">        include uwsgi_params;</span>
<span class="line">        uwsgi_pass 172.18.61.250:8000;</span>
<span class="line">    }</span>
<span class="line">    location /static/ {</span>
<span class="line">        alias /root/project/stat/;</span>
<span class="line">        expires 30d;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">server {</span>
<span class="line">    listen      443;</span>
<span class="line">    server_name _;</span>
<span class="line">    ssl         on;</span>
<span class="line">    access_log /root/project/logs/access.log;</span>
<span class="line">    error_log /root/project/logs/error.log;</span>
<span class="line">    ssl_certificate     /root/project/conf/cert/214915882850706.pem;</span>
<span class="line">    ssl_certificate_key /root/project/conf/cert/214915882850706.key;</span>
<span class="line">    ssl_session_timeout 5m;</span>
<span class="line">    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span>
<span class="line">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span>
<span class="line">    ssl_prefer_server_ciphers on;</span>
<span class="line">    location / {</span>
<span class="line">        include uwsgi_params;</span>
<span class="line">        uwsgi_pass 172.18.61.250:8000;</span>
<span class="line">    }</span>
<span class="line">    location /static/ {</span>
<span class="line">        alias /root/project/static/;</span>
<span class="line">        expires 30d;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此为止，我们可以启动Nginx来访问我们的应用程序，HTTP和HTTPS都是没有问题的，如果Nginx已经运行，在修改配置文件后，我们可以用下面的命令重新启动Nginx。</p></li><li><p>重启Nginx服务器。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">nginx -s reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">systemctl restart nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><blockquote><p>说明：可以对Django项目使用<code>python manage.py collectstatic</code>命令将静态资源收集到指定目录下，要做到这点只需要在项目的配置文件<code>settings.py</code>中添加<code>STATIC_ROOT</code>配置即可。</p></blockquote><h4 id="负载均衡配置" tabindex="-1"><a class="header-anchor" href="#负载均衡配置"><span>负载均衡配置</span></a></h4><p>下面的配置中我们使用Nginx实现负载均衡，为另外的三个Nginx服务器（通过Docker创建）提供反向代理服务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker run -d -p 801:80 --name nginx1 nginx:latest</span>
<span class="line">docker run -d -p 802:80 --name nginx2 nginx:latest</span>
<span class="line">docker run -d -p 803:80 --name nginx3 nginx:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Nginx line-numbers-mode" data-highlighter="prismjs" data-ext="Nginx" data-title="Nginx"><pre class="language-Nginx"><code><span class="line">user root;</span>
<span class="line">worker_processes auto;</span>
<span class="line">error_log /var/log/nginx/error.log;</span>
<span class="line">pid /run/nginx.pid;</span>
<span class="line"></span>
<span class="line">include /usr/share/nginx/modules/*.conf;</span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">    worker_connections 1024;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># 为HTTP服务配置负载均衡</span>
<span class="line">http {</span>
<span class="line">	upstream xx {</span>
<span class="line">		server 192.168.1.100 weight=2;</span>
<span class="line">		server 192.168.1.101 weight=1;</span>
<span class="line">		server 192.168.1.102 weight=1;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">	server {</span>
<span class="line">		listen       80 default_server;</span>
<span class="line">		listen       [::]:80 default_server;</span>
<span class="line">		listen       443 ssl;</span>
<span class="line">		listen       [::]:443 ssl;</span>
<span class="line"></span>
<span class="line">        ssl on;</span>
<span class="line">		access_log /root/project/logs/access.log;</span>
<span class="line">		error_log /root/project/logs/error.log;</span>
<span class="line">		ssl_certificate /root/project/conf/cert/214915882850706.pem;</span>
<span class="line">		ssl_certificate_key /root/project/conf/cert/214915882850706.key;</span>
<span class="line">		ssl_session_timeout 5m;</span>
<span class="line">		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span>
<span class="line">		ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span>
<span class="line">		ssl_prefer_server_ciphers on;</span>
<span class="line"></span>
<span class="line">		location / {</span>
<span class="line">			proxy_set_header Host $host;</span>
<span class="line">			proxy_set_header X-Forwarded-For $remote_addr;</span>
<span class="line">			# proxy_set_header X-Real-IP $remote_addr;</span>
<span class="line">			# proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">			proxy_buffering off;</span>
<span class="line">			proxy_pass http://fangtx;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：Nginx在配置负载均衡时，默认使用WRR（加权轮询算法），除此之外还支持ip_hash、fair（需要安装upstream_fair模块）和url_hash算法。此外，在配置upstream模块时可以指定服务器的状态值，包括：backup（备份机器，其他服务器不可用时才将请求分配到该机器）、down、fail_timeout（请求失败达到max_fails后的暂停服务时间）、max_fails（允许请求失败的次数）和weight（轮询的权重）。</p></blockquote><h3 id="keepalived" tabindex="-1"><a class="header-anchor" href="#keepalived"><span>Keepalived</span></a></h3><p>当使用Nginx进行负载均衡配置时，要考虑负载均衡服务器宕机的情况。为此可以使用Keepalived来实现负载均衡主机和备机的热切换，从而保证系统的高可用性。Keepalived的配置还是比较复杂，通常由专门做运维的人进行配置，一个基本的配置可以参照<a href="https://www.jianshu.com/p/dd93bc6d45f5" target="_blank" rel="noopener noreferrer">《Keepalived的配置和使用》</a>。</p><h3 id="mysql主从复制" tabindex="-1"><a class="header-anchor" href="#mysql主从复制"><span>MySQL主从复制</span></a></h3><p>下面还是基于Docker来演示如何配置MySQL主从复制。我们事先准备好MySQL的配置文件以及保存MySQL数据和运行日志的目录，然后通过Docker的数据卷映射来指定容器的配置、数据和日志文件的位置。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">root</span>
<span class="line">└── mysql</span>
<span class="line">    ├── master</span>
<span class="line">    │   ├── conf</span>
<span class="line">    |	└── data</span>
<span class="line">    └── slave-1</span>
<span class="line">    |	├── conf</span>
<span class="line">    |	└── data</span>
<span class="line">    └── slave-2</span>
<span class="line">    |	├── conf</span>
<span class="line">    |	└── data</span>
<span class="line">    └── slave-3</span>
<span class="line">    	├── conf</span>
<span class="line">    	└── data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>MySQL的配置文件（master和slave的配置文件需要不同的server-id）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">[mysqld]</span>
<span class="line">pid-file=/var/run/mysqld/mysqld.pid</span>
<span class="line">socket=/var/run/mysqld/mysqld.sock</span>
<span class="line">datadir=/var/lib/mysql</span>
<span class="line">log-error=/var/log/mysql/error.log</span>
<span class="line">server-id=1</span>
<span class="line">log-bin=/var/log/mysql/mysql-bin.log</span>
<span class="line">expire_logs_days=30</span>
<span class="line">max_binlog_size=256M</span>
<span class="line">symbolic-links=0</span>
<span class="line"># slow_query_log=ON</span>
<span class="line"># slow_query_log_file=/var/log/mysql/slow.log</span>
<span class="line"># long_query_time=1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建和配置master。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker run -d -p 3306:3306 --name mysql-master \\</span>
<span class="line">-v /root/mysql/master/conf:/etc/mysql/mysql.conf.d \\</span>
<span class="line">-v /root/mysql/master/data:/var/lib/mysql \\</span>
<span class="line">-e MYSQL_ROOT_PASSWORD=123456 mysql:5.7</span>
<span class="line"></span>
<span class="line">docker exec -it mysql-master /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">mysql -u root -p</span>
<span class="line">Enter password:</span>
<span class="line">Welcome to the MySQL monitor.  Commands end with ; or \\g.</span>
<span class="line">Your MySQL connection id is 1</span>
<span class="line">Server version: 5.7.23-log MySQL Community Server (GPL)</span>
<span class="line">Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.</span>
<span class="line">Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="line">affiliates. Other names may be trademarks of their respective</span>
<span class="line">owners.</span>
<span class="line">Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span>
<span class="line"></span>
<span class="line">mysql&gt; grant replication slave on *.* to &#39;slave&#39;@&#39;%&#39; identified by &#39;iamslave&#39;;</span>
<span class="line">Query OK, 0 rows affected, 1 warning (0.00 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; flush privileges;</span>
<span class="line">Query OK, 0 rows affected (0.00 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; show master status;</span>
<span class="line">+------------------+----------+--------------+------------------+-------------------+</span>
<span class="line">| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |</span>
<span class="line">+------------------+----------+--------------+------------------+-------------------+</span>
<span class="line">| mysql-bin.000003 |      590 |              |                  |                   |</span>
<span class="line">+------------------+----------+--------------+------------------+-------------------+</span>
<span class="line">1 row in set (0.00 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; quit</span>
<span class="line">Bye</span>
<span class="line">exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面创建Docker容器时使用的<code>-v</code>参数（<code>--volume</code>）表示映射数据卷，冒号前是宿主机的目录，冒号后是容器中的目录，这样相当于将宿主机中的目录挂载到了容器中。</p></li><li><p>备份主表中的数据（如果需要的话）。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">mysql&gt; flush table with read lock;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">mysqldump -u root -p 123456 -A -B &gt; /root/backup/mysql/mybak$(date +&quot;%Y%m%d%H%M%S&quot;).sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">mysql&gt; unlock table;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>创建和配置slave。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker run -d -p 3308:3306 --name mysql-slave-1 \\</span>
<span class="line">-v /root/mysql/slave-1/conf:/etc/mysql/mysql.conf.d \\</span>
<span class="line">-v /root/mysql/slave-1/data:/var/lib/mysql \\</span>
<span class="line">-e MYSQL_ROOT_PASSWORD=123456 \\</span>
<span class="line">--link mysql-master:mysql-master mysql:5.7</span>
<span class="line"></span>
<span class="line">docker run -d -p 3309:3306 --name mysql-slave-2 \\</span>
<span class="line">-v /root/mysql/slave-2/conf:/etc/mysql/mysql.conf.d \\</span>
<span class="line">-v /root/mysql/slave-2/data:/var/lib/mysql \\</span>
<span class="line">-e MYSQL_ROOT_PASSWORD=123456 \\</span>
<span class="line">--link mysql-master:mysql-master mysql:5.7</span>
<span class="line"></span>
<span class="line">docker run -d -p 3310:3306 --name mysql-slave-3 \\</span>
<span class="line">-v /root/mysql/slave-3/conf:/etc/mysql/mysql.conf.d \\</span>
<span class="line">-v /root/mysql/slave-3/data:/var/lib/mysql \\</span>
<span class="line">-e MYSQL_ROOT_PASSWORD=123456 \\</span>
<span class="line">--link mysql-master:mysql-master mysql:5.7</span>
<span class="line"></span>
<span class="line">docker exec -it mysql-slave-1 /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">mysql -u root -p</span>
<span class="line">Enter password:</span>
<span class="line">Welcome to the MySQL monitor.  Commands end with ; or \\g.</span>
<span class="line">Your MySQL connection id is 2</span>
<span class="line">Server version: 5.7.23-log MySQL Community Server (GPL)</span>
<span class="line">Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.</span>
<span class="line">Oracle is a registered trademark of Oracle Corporation and/or its</span>
<span class="line">affiliates. Other names may be trademarks of their respective</span>
<span class="line">owners.</span>
<span class="line">Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span>
<span class="line"></span>
<span class="line">mysql&gt; reset slave;</span>
<span class="line">Query OK, 0 rows affected (0.02 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; change master to master_host=&#39;mysql-master&#39;, master_user=&#39;slave&#39;, master_password=&#39;iamslave&#39;, master_log_file=&#39;mysql-bin.000003&#39;, master_log_pos=590;</span>
<span class="line">Query OK, 0 rows affected, 2 warnings (0.03 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; start slave;</span>
<span class="line">Query OK, 0 rows affected (0.01 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; show slave status\\G</span>
<span class="line">*************************** 1. row ***************************</span>
<span class="line">               Slave_IO_State: Waiting for master to send event</span>
<span class="line">                  Master_Host: mysql57</span>
<span class="line">                  Master_User: slave</span>
<span class="line">                  Master_Port: 3306</span>
<span class="line">                Connect_Retry: 60</span>
<span class="line">              Master_Log_File: mysql-bin.000001</span>
<span class="line">          Read_Master_Log_Pos: 590</span>
<span class="line">               Relay_Log_File: f352f05eb9d0-relay-bin.000002</span>
<span class="line">                Relay_Log_Pos: 320</span>
<span class="line">        Relay_Master_Log_File: mysql-bin.000001</span>
<span class="line">             Slave_IO_Running: Yes</span>
<span class="line">            Slave_SQL_Running: Yes</span>
<span class="line">             Replicate_Do_DB:</span>
<span class="line">          Replicate_Ignore_DB:</span>
<span class="line">           Replicate_Do_Table:</span>
<span class="line">       Replicate_Ignore_Table:</span>
<span class="line">      Replicate_Wild_Do_Table:</span>
<span class="line">  Replicate_Wild_Ignore_Table:</span>
<span class="line">                   Last_Errno: 0</span>
<span class="line">                   Last_Error:</span>
<span class="line">                 Skip_Counter: 0</span>
<span class="line">          Exec_Master_Log_Pos: 590</span>
<span class="line">              Relay_Log_Space: 534</span>
<span class="line">              Until_Condition: None</span>
<span class="line">               Until_Log_File:</span>
<span class="line">                Until_Log_Pos: 0</span>
<span class="line">           Master_SSL_Allowed: No</span>
<span class="line">           Master_SSL_CA_File:</span>
<span class="line">           Master_SSL_CA_Path:</span>
<span class="line">              Master_SSL_Cert:</span>
<span class="line">            Master_SSL_Cipher:</span>
<span class="line">               Master_SSL_Key:</span>
<span class="line">        Seconds_Behind_Master: 0</span>
<span class="line">Master_SSL_Verify_Server_Cert: No</span>
<span class="line">                Last_IO_Errno: 0</span>
<span class="line">                Last_IO_Error:</span>
<span class="line">               Last_SQL_Errno: 0</span>
<span class="line">               Last_SQL_Error:</span>
<span class="line">  Replicate_Ignore_Server_Ids:</span>
<span class="line">             Master_Server_Id: 1</span>
<span class="line">                  Master_UUID: 30c38043-ada1-11e8-8fa1-0242ac110002</span>
<span class="line">             Master_Info_File: /var/lib/mysql/master.info</span>
<span class="line">                    SQL_Delay: 0</span>
<span class="line">          SQL_Remaining_Delay: NULL</span>
<span class="line">      Slave_SQL_Running_State: Slave has read all relay log; waiting for more updates</span>
<span class="line">           Master_Retry_Count: 86400</span>
<span class="line">                  Master_Bind:</span>
<span class="line">      Last_IO_Error_Timestamp:</span>
<span class="line">     Last_SQL_Error_Timestamp:</span>
<span class="line">               Master_SSL_Crl:</span>
<span class="line">           Master_SSL_Crlpath:</span>
<span class="line">           Retrieved_Gtid_Set:</span>
<span class="line">            Executed_Gtid_Set:</span>
<span class="line">                Auto_Position: 0</span>
<span class="line">         Replicate_Rewrite_DB:</span>
<span class="line">                 Channel_Name:</span>
<span class="line">           Master_TLS_Version:</span>
<span class="line">1 row in set (0.00 sec)</span>
<span class="line"></span>
<span class="line">mysql&gt; quit</span>
<span class="line">Bye</span>
<span class="line">exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来可以如法炮制配置出slave2和slave3，这样就可以搭建起一个“一主带三从”的主从复制环境。上面创建创建容器时使用的<code>--link</code>参数用来配置容器在网络上的主机名（网络地址别名）。</p></li></ol><p>配置好主从复制后，写数据的操作应该master上执行，而读数据的操作应该在slave上完成。为此，在Django项目中需要配置DATABASE_ROUTERS并通过自定义的主从复制路由类来实现读写分离操作，如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">DATABASE_ROUTERS = [</span>
<span class="line">    # 此处省略其他配置</span>
<span class="line">    &#39;common.routers.MasterSlaveRouter&#39;,</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class MasterSlaveRouter(object):</span>
<span class="line">    &quot;&quot;&quot;主从复制路由&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def db_for_read(model, **hints):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Attempts to read auth models go to auth_db.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return random.choice((&#39;slave1&#39;, &#39;slave2&#39;, &#39;slave3&#39;))</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def db_for_write(model, **hints):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Attempts to write auth models go to auth_db.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return &#39;default&#39;</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def allow_relation(obj1, obj2, **hints):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Allow relations if a model in the auth app is involved.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return None</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def allow_migrate(db, app_label, model_name=None, **hints):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        Make sure the auth app only appears in the &#39;auth_db&#39;</span>
<span class="line">        database.</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        return True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的内容参考了Django官方文档的<a href="https://docs.djangoproject.com/en/2.1/topics/db/multi-db/#topics-db-multi-db-routing" target="_blank" rel="noopener noreferrer">DATABASE_ROUTERS配置</a>，对代码进行了适当的调整。</p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><p>事实上，项目上线中最为麻烦的事情就是配置软件运行环境，环境的差异会给软件的安装和部署带来诸多的麻烦，而Docker正好可以解决这个问题。关于Docker在之前的文档中我们已经介绍过了，接下来我们对Docker的知识做一些必要的补充。</p><ol><li><p>创建镜像文件。</p><p>将容器保存成镜像：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker commit -m &quot;...&quot; -a &quot;jackfrued&quot; &lt;container-name&gt; jackfrued/&lt;image-name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用Dockerfile构建镜像：</p><div class="language-Dockerfile line-numbers-mode" data-highlighter="prismjs" data-ext="Dockerfile" data-title="Dockerfile"><pre class="language-Dockerfile"><code><span class="line"># 指定基础镜像文件</span>
<span class="line">FROM centos:latest</span>
<span class="line"></span>
<span class="line"># 指定维护者信息</span>
<span class="line">MAINTAINER jackfrued</span>
<span class="line"></span>
<span class="line"># 执行命令</span>
<span class="line">RUN yum -y install gcc</span>
<span class="line">RUN cd ~</span>
<span class="line">RUN mkdir -p project/code</span>
<span class="line">RUN mkdir -p project/logs</span>
<span class="line"></span>
<span class="line"># 拷贝文件</span>
<span class="line">COPY ...</span>
<span class="line"></span>
<span class="line"># 暴露端口</span>
<span class="line">EXPOSE ...</span>
<span class="line"></span>
<span class="line"># 在容器启动时执行命令</span>
<span class="line">CMD ~/init.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker build -t jackfrued/&lt;image-name&gt; .</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>镜像的导入和导出。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker save -o &lt;file-name&gt;.tar &lt;image-name&gt;:&lt;version&gt;</span>
<span class="line">docker load -i &lt;file-name&gt;.tar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>推送到DockerHub服务器。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker tag &lt;image-name&gt;:&lt;version&gt; jackfrued/&lt;name&gt;</span>
<span class="line">docker login</span>
<span class="line">docker push jackfrued/&lt;name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>容器之间的通信。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">docker run --link &lt;container-name&gt;:&lt;alias-name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>如果我们能够在Docker中完成项目的部署，并且将整个部署好的容器打包成镜像文件进行分发和安装，这样就可以解决项目在多个节点上进行部署时可能遇到的麻烦，而且整个部署可以在很短的时间内完成。</p><h3 id="supervisor" tabindex="-1"><a class="header-anchor" href="#supervisor"><span>Supervisor</span></a></h3><p><a href="https://github.com/Supervisor/supervisor" target="_blank" rel="noopener noreferrer">Supervisor</a>是一个用Python写的进程管理工具，可以很方便的用来在类Unix系统下启动、重启（自动重启程序）和关闭进程，目前Supervisor暂时还没有提供对Python 3的支持，可以通过Python 2来安装和运行Supervisor，再通过Supervisor来管理Python 3的程序。</p><blockquote><p><strong>提示</strong>：还有一个和Supervisor功能类似的工具名为Circus，支持Python 3。</p></blockquote><ol><li><p>安装Supervisor。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">virtualenv -p /usr/bin/python venv</span>
<span class="line">source venv/bin/activate</span>
<span class="line">pip install supervisor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看Supervisor的配置文件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">vim /etc/supervisord.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">; 此处省略上面的代码</span>
<span class="line">; The [include] section can just contain the &quot;files&quot; setting.  This</span>
<span class="line">; setting can list multiple files (separated by whitespace or</span>
<span class="line">; newlines).  It can also contain wildcards.  The filenames are</span>
<span class="line">; interpreted as relative to this file.  Included files *cannot*</span>
<span class="line">; include files themselves.</span>
<span class="line">[include]</span>
<span class="line">files = supervisord.d/*.ini</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出自定义的管理配置代码可以放在<code>/etc/supervisord.d</code>目录中，并且文件名以<code>ini</code>作为后缀即可。</p></li><li><p>编写自己的配置文件<code>fangtx.ini</code>并放在<code>/etc/supervisord.d</code>目录中。</p><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">[program:project]</span>
<span class="line">command=uwsgi --ini /root/project/conf/uwsgi.ini</span>
<span class="line">stopsignal=QUIT</span>
<span class="line">autostart=true</span>
<span class="line">autorestart=true</span>
<span class="line">redirect_stderr=true</span>
<span class="line"></span>
<span class="line">[program:celery]</span>
<span class="line">; Set full path to celery program if using virtualenv</span>
<span class="line">command=/root/project/venv/bin/celery -A fangtx worker</span>
<span class="line">user=root</span>
<span class="line">numprocs=1</span>
<span class="line">stdout_logfile=/var/log/supervisor/celery.log</span>
<span class="line">stderr_logfile=/var/log/supervisor/celery_error.log</span>
<span class="line">autostart=true</span>
<span class="line">autorestart=true</span>
<span class="line">startsecs=10</span>
<span class="line"></span>
<span class="line">; Need to wait for currently executing tasks to finish at shutdown.</span>
<span class="line">; Increase this if you have very long running tasks.</span>
<span class="line">;stopwaitsecs = 600</span>
<span class="line"></span>
<span class="line">; When resorting to send SIGKILL to the program to terminate it</span>
<span class="line">; send SIGKILL to its whole process group instead,</span>
<span class="line">; taking care of its children as well.</span>
<span class="line">killasgroup=true</span>
<span class="line">; Set Celery priority higher than default (999)</span>
<span class="line">; so, if rabbitmq is supervised, it will start first.</span>
<span class="line">priority=1000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动Supervisor。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">supervisorctl -c /etc/supervisord.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="其他服务" tabindex="-1"><a class="header-anchor" href="#其他服务"><span>其他服务</span></a></h3><ol><li><p>常用开源软件。</p><table><thead><tr><th>功能</th><th>开源方案</th></tr></thead><tbody><tr><td>版本控制工具</td><td>Git、Mercurial、SVN</td></tr><tr><td>缺陷管理</td><td>Redmine、Mantis</td></tr><tr><td>负载均衡</td><td>Nginx、LVS、HAProxy</td></tr><tr><td>邮件服务</td><td>Postfix、Sendmail</td></tr><tr><td>HTTP服务</td><td>Nginx、Apache</td></tr><tr><td>消息队列</td><td>RabbitMQ、ZeroMQ、Redis、Kafka</td></tr><tr><td>文件系统</td><td>FastDFS</td></tr><tr><td>基于位置服务（LBS）</td><td>MongoDB、Redis</td></tr><tr><td>监控服务</td><td>Nagios、Zabbix</td></tr><tr><td>关系型数据库</td><td>MySQL、PostgreSQL</td></tr><tr><td>非关系型数据库</td><td>MongoDB、Redis、Cassandra、TiDB</td></tr><tr><td>搜索引擎</td><td>ElasticSearch、Solr</td></tr><tr><td>缓存服务</td><td>Mamcached、Redis</td></tr></tbody></table></li><li><p>常用云服务。</p><table><thead><tr><th>功能</th><th>可用的云服务</th></tr></thead><tbody><tr><td>团队协作工具</td><td>Teambition、钉钉</td></tr><tr><td>代码托管平台</td><td>Github、Gitee、CODING</td></tr><tr><td>邮件服务</td><td>SendCloud</td></tr><tr><td>云存储（CDN）</td><td>七牛、OSS、LeanCloud、Bmob、又拍云、S3</td></tr><tr><td>移动端推送</td><td>极光、友盟、百度</td></tr><tr><td>即时通信</td><td>环信、融云</td></tr><tr><td>短信服务</td><td>云片、极光、Luosimao、又拍云</td></tr><tr><td>第三方登录</td><td>友盟、ShareSDK</td></tr><tr><td>网站监控和统计</td><td>阿里云监控、监控宝、百度云观测、小鸟云</td></tr></tbody></table></li></ol>`,47),v=[t];function u(o,m){return e(),n("div",null,v)}const h=s(p,[["render",u],["__file","98.项目部署上线和性能调优.html.vue"]]),g=JSON.parse('{"path":"/python/Python-100-Days/Day91-100/98.%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2%E4%B8%8A%E7%BA%BF%E5%92%8C%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"项目部署上线指南","slug":"项目部署上线指南","link":"#项目部署上线指南","children":[{"level":3,"title":"准备上线","slug":"准备上线","link":"#准备上线","children":[]},{"level":3,"title":"更新服务器Python环境到3.x","slug":"更新服务器python环境到3-x","link":"#更新服务器python环境到3-x","children":[]},{"level":3,"title":"项目目录结构","slug":"项目目录结构","link":"#项目目录结构","children":[]},{"level":3,"title":"uWSGI的配置","slug":"uwsgi的配置","link":"#uwsgi的配置","children":[]},{"level":3,"title":"Nginx的配置","slug":"nginx的配置","link":"#nginx的配置","children":[]},{"level":3,"title":"Keepalived","slug":"keepalived","link":"#keepalived","children":[]},{"level":3,"title":"MySQL主从复制","slug":"mysql主从复制","link":"#mysql主从复制","children":[]},{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"Supervisor","slug":"supervisor","link":"#supervisor","children":[]},{"level":3,"title":"其他服务","slug":"其他服务","link":"#其他服务","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day91-100/98.项目部署上线和性能调优.md"}');export{h as comp,g as data};
