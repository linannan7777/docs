import{_ as e,c as s,o as n,d as a}from"./app-BFPhRmaa.js";const l="/docs/assets/pycharm-vote-project-BvmwRkTX.png",i="/docs/assets/django-admin-login-BsY3dNnr.png",d="/docs/assets/django-admin-apps-CpEwtf3Y.png",t="/docs/assets/django-admin-models-uv_WLBCV.png",c="/docs/assets/django-admin-add-model-CGE6jxiG.png",r="/docs/assets/django-admin-view-models-Ctyo-wVH.png",o="/docs/assets/django-admin-delete-update-model-u9XQBA1r.png",p="/docs/assets/django-admin-view-models-subject-hGN6J2iB.png",v="/docs/assets/django-admin-view-models-teacher-C6u5ldaz.png",u={},m=a('<h2 id="深入模型" tabindex="-1"><a class="header-anchor" href="#深入模型"><span>深入模型</span></a></h2><p>在上一个章节中，我们提到了Django是基于MVC架构的Web框架，MVC架构追求的是“模型”和“视图”的解耦合。所谓“模型”说得更直白一些就是数据（的表示），所以通常也被称作“数据模型”。在实际的项目中，数据模型通常通过数据库实现持久化操作，而关系型数据库在过去和当下都是持久化的首选方案，下面我们通过完成一个投票项目来讲解和模型相关的知识点。投票项目的首页会展示某在线教育平台所有的学科；点击学科可以查看到该学科的老师及其信息；用户登录后在查看老师的页面为老师投票，可以投赞成票和反对票；未登录的用户可以通过登录页进行登录；尚未注册的用户可以通过注册页输入个人信息进行注册。在这个项目中，我们使用MySQL数据库来实现数据持久化操作。</p><h3 id="创建项目和应用" tabindex="-1"><a class="header-anchor" href="#创建项目和应用"><span>创建项目和应用</span></a></h3><p>我们首先创建Django项目<code>vote</code>并为其添加虚拟环境和依赖项。接下来，在项目下创建名为<code>polls</code>的应用和保存模板页的文件夹<code>tempaltes</code>，项目文件夹的结构如下所示。</p><p><img src="'+l+`" alt=""></p><p>根据上面描述的项目需求，我们准备了四个静态页面，分别是展示学科的页面<code>subjects.html</code>，显示学科老师的页面<code>teachers.html</code>，登录页面<code>login.html</code>，注册页面<code>register.html</code>，稍后我们会将静态页修改为Django项目所需的模板页。</p><h3 id="配置关系型数据库mysql" tabindex="-1"><a class="header-anchor" href="#配置关系型数据库mysql"><span>配置关系型数据库MySQL</span></a></h3><ol><li><p>在MySQL中创建数据库，创建用户，授权用户访问该数据库。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">create database vote default charset utf8;</span>
<span class="line">create user &#39;hellokitty&#39;@&#39;%&#39; identified by &#39;Hellokitty.618&#39;;</span>
<span class="line">grant all privileges on vote.* to &#39;hellokitty&#39;@&#39;%&#39;;</span>
<span class="line">flush privileges;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在MySQL中创建保存学科和老师信息的二维表（保存用户信息的表稍后处理）。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">use vote;</span>
<span class="line"></span>
<span class="line">-- 创建学科表</span>
<span class="line">create table \`tb_subject\`</span>
<span class="line">(</span>
<span class="line">	\`no\` integer auto_increment comment &#39;学科编号&#39;,</span>
<span class="line">    \`name\` varchar(50) not null comment &#39;学科名称&#39;,</span>
<span class="line">    \`intro\` varchar(1000) not null default &#39;&#39; comment &#39;学科介绍&#39;,</span>
<span class="line">    \`is_hot\` boolean not null default 0 comment &#39;是不是热门学科&#39;,</span>
<span class="line">    primary key (\`no\`)</span>
<span class="line">);</span>
<span class="line">-- 创建老师表</span>
<span class="line">create table \`tb_teacher\`</span>
<span class="line">(</span>
<span class="line">    \`no\` integer auto_increment comment &#39;老师编号&#39;,</span>
<span class="line">    \`name\` varchar(20) not null comment &#39;老师姓名&#39;,</span>
<span class="line">    \`sex\` boolean not null default 1 comment &#39;老师性别&#39;,</span>
<span class="line">    \`birth\` date not null comment &#39;出生日期&#39;,</span>
<span class="line">    \`intro\` varchar(1000) not null default &#39;&#39; comment &#39;老师介绍&#39;,</span>
<span class="line">    \`photo\` varchar(255) not null default &#39;&#39; comment &#39;老师照片&#39;,</span>
<span class="line">    \`gcount\` integer not null default 0 comment &#39;好评数&#39;,</span>
<span class="line">    \`bcount\` integer not null default 0 comment &#39;差评数&#39;,</span>
<span class="line">    \`sno\` integer not null comment &#39;所属学科&#39;,</span>
<span class="line">    primary key (\`no\`),</span>
<span class="line">    foreign key (\`sno\`) references \`tb_subject\` (\`no\`)</span>
<span class="line">);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在虚拟环境中安装连接MySQL数据库所需的依赖项。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install mysqlclient</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果因为某些原因无法安装<code>mysqlclient</code>三方库，可以使用它的替代品<code>pymysql</code>，<code>pymysql</code>是用纯Python开发的连接MySQL的Python库，安装更容易成功，但是需要在Django项目文件夹的<code>__init__.py</code>中添加如下所示的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">pymysql.install_as_MySQLdb()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用Django 2.2及以上版本，还会遇到PyMySQL跟Django框架的兼容性问题，兼容性问题会导致项目无法运行，需要按照GitHub上PyMySQL仓库<a href="https://github.com/PyMySQL/PyMySQL/issues/790" target="_blank" rel="noopener noreferrer">Issues</a>中提供的方法进行处理。总体来说，使用<code>pymysql</code>会比较麻烦，强烈建议大家首选安装<code>mysqlclient</code>。</p></blockquote></li><li><p>修改项目的settings.py文件，首先将我们创建的应用<code>polls</code>添加已安装的项目（<code>INSTALLED_APPS</code>）中，然后配置MySQL作为持久化方案。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line">    &#39;django.contrib.admin&#39;,</span>
<span class="line">    &#39;django.contrib.auth&#39;,</span>
<span class="line">    &#39;django.contrib.contenttypes&#39;,</span>
<span class="line">    &#39;django.contrib.sessions&#39;,</span>
<span class="line">    &#39;django.contrib.messages&#39;,</span>
<span class="line">    &#39;django.contrib.staticfiles&#39;,</span>
<span class="line">    &#39;polls&#39;,</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">DATABASES = {</span>
<span class="line">    &#39;default&#39;: {</span>
<span class="line">        # 数据库引擎配置</span>
<span class="line">        &#39;ENGINE&#39;: &#39;django.db.backends.mysql&#39;,</span>
<span class="line">        # 数据库的名字</span>
<span class="line">        &#39;NAME&#39;: &#39;vote&#39;,</span>
<span class="line">        # 数据库服务器的IP地址（本机可以写localhost或127.0.0.1）</span>
<span class="line">        &#39;HOST&#39;: &#39;localhost&#39;,</span>
<span class="line">        # 启动MySQL服务的端口号</span>
<span class="line">        &#39;PORT&#39;: 3306,</span>
<span class="line">        # 数据库用户名和口令</span>
<span class="line">        &#39;USER&#39;: &#39;hellokitty&#39;,</span>
<span class="line">        &#39;PASSWORD&#39;: &#39;Hellokitty.618&#39;,</span>
<span class="line">        # 数据库使用的字符集</span>
<span class="line">        &#39;CHARSET&#39;: &#39;utf8&#39;,</span>
<span class="line">        # 数据库时间日期的时区设定</span>
<span class="line">        &#39;TIME_ZONE&#39;: &#39;Asia/Chongqing&#39;,</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置ENGINE属性时，常用的可选值包括：</p><ul><li><code>&#39;django.db.backends.sqlite3&#39;</code>：SQLite嵌入式数据库。</li><li><code>&#39;django.db.backends.postgresql&#39;</code>：BSD许可证下发行的开源关系型数据库产品。</li><li><code>&#39;django.db.backends.mysql&#39;</code>：甲骨文公司经济高效的数据库产品。</li><li><code>&#39;django.db.backends.oracle&#39;</code>：甲骨文公司关系型数据库旗舰产品。</li></ul><p>其他的配置可以参考官方文档中<a href="https://docs.djangoproject.com/zh-hans/2.0/ref/databases/#third-party-notes" target="_blank" rel="noopener noreferrer">数据库配置</a>的部分。</p></li><li><p>Django框架提供了ORM来解决数据持久化问题，ORM翻译成中文叫“对象关系映射”。因为Python是面向对象的编程语言，我们在Python程序中使用对象模型来保存数据，而关系型数据库使用关系模型，用二维表来保存数据，这两种模型并不匹配。使用ORM是为了实现对象模型到关系模型的<strong>双向转换</strong>，这样就不用在Python代码中书写SQL语句和游标操作，因为这些都会由ORM自动完成。利用Django的ORM，我们可以直接将刚才创建的学科表和老师表变成Django中的模型类。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">python manage.py inspectdb &gt; polls/models.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以对自动生成的模型类稍作调整，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.db import models</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Subject(models.Model):</span>
<span class="line">    no = models.AutoField(primary_key=True, verbose_name=&#39;编号&#39;)</span>
<span class="line">    name = models.CharField(max_length=50, verbose_name=&#39;名称&#39;)</span>
<span class="line">    intro = models.CharField(max_length=1000, verbose_name=&#39;介绍&#39;)</span>
<span class="line">    is_hot = models.BooleanField(verbose_name=&#39;是否热门&#39;)</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        managed = False</span>
<span class="line">        db_table = &#39;tb_subject&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Teacher(models.Model):</span>
<span class="line">    no = models.AutoField(primary_key=True, verbose_name=&#39;编号&#39;)</span>
<span class="line">    name = models.CharField(max_length=20, verbose_name=&#39;姓名&#39;)</span>
<span class="line">    sex = models.BooleanField(default=True, verbose_name=&#39;性别&#39;)</span>
<span class="line">    birth = models.DateField(verbose_name=&#39;出生日期&#39;)</span>
<span class="line">    intro = models.CharField(max_length=1000, verbose_name=&#39;个人介绍&#39;)</span>
<span class="line">    photo = models.ImageField(max_length=255, verbose_name=&#39;照片&#39;)</span>
<span class="line">    good_count = models.IntegerField(default=0, db_column=&#39;gcount&#39;, verbose_name=&#39;好评数&#39;)</span>
<span class="line">    bad_count = models.IntegerField(default=0, db_column=&#39;bcount&#39;, verbose_name=&#39;差评数&#39;)</span>
<span class="line">    subject = models.ForeignKey(Subject, models.DO_NOTHING, db_column=&#39;sno&#39;)</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        managed = False</span>
<span class="line">        db_table = &#39;tb_teacher&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：模型类都直接或间接继承自<code>Model</code>类，模型类跟关系型数据库的二维表对应，模型对象跟表中的记录对应，模型对象的属性跟表中的字段对应。如果对上面模型类的属性定义不是特别理解，可以看看本文后面提供的“模型定义参考”部分的内容。</p></blockquote></li></ol><h3 id="使用orm完成模型的crud操作" tabindex="-1"><a class="header-anchor" href="#使用orm完成模型的crud操作"><span>使用ORM完成模型的CRUD操作</span></a></h3><p>有了Django框架的ORM，我们可以直接使用面向对象的方式来实现对数据的CRUD（增删改查）操作。我们可以在PyCharm的终端中输入下面的命令进入到Django项目的交互式环境，然后尝试对模型的操作。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">python manage.py shell</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="新增" tabindex="-1"><a class="header-anchor" href="#新增"><span>新增</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from polls.models import Subject</span>
<span class="line"></span>
<span class="line">subject1 = Subject(name=&#39;Python全栈开发&#39;, intro=&#39;当下最热门的学科&#39;, is_hot=True)</span>
<span class="line">subject1.save()</span>
<span class="line">subject2 = Subject(name=&#39;全栈软件测试&#39;, intro=&#39;学习自动化测试的学科&#39;, is_hot=False)</span>
<span class="line">subject2.save()</span>
<span class="line">subject3 = Subject(name=&#39;JavaEE分布式开发&#39;, intro=&#39;基于Java语言的服务器应用开发&#39;, is_hot=True)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">subject = Subject.objects.get(no=2)</span>
<span class="line">subject.delete()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h4><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">subject = Subject.objects.get(no=1)</span>
<span class="line">subject.name = &#39;Python全栈+人工智能&#39;</span>
<span class="line">subject.save()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h4><ol><li>查询所有对象。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">Subjects.objects.all()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>过滤数据。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line"># 查询名称为“Python全栈+人工智能”的学科</span>
<span class="line">Subject.objects.filter(name=&#39;Python全栈+人工智能&#39;)</span>
<span class="line"></span>
<span class="line"># 查询名称包含“全栈”的学科（模糊查询）</span>
<span class="line">Subject.objects.filter(name__contains=&#39;全栈&#39;)</span>
<span class="line">Subject.objects.filter(name__startswith=&#39;全栈&#39;)</span>
<span class="line">Subject.objects.filter(name__endswith=&#39;全栈&#39;)</span>
<span class="line"></span>
<span class="line"># 查询所有热门学科</span>
<span class="line">Subject.objects.filter(is_hot=True)</span>
<span class="line"></span>
<span class="line"># 查询编号大于3小于10的学科</span>
<span class="line">Subject.objects.filter(no__gt=3).filter(no__lt=10)</span>
<span class="line">Subject.objects.filter(no__gt=3, no__lt=10)</span>
<span class="line"></span>
<span class="line"># 查询编号在3到7之间的学科</span>
<span class="line">Subject.objects.filter(no__ge=3, no__le=7)</span>
<span class="line">Subject.objects.filter(no__range=(3, 7))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>查询单个对象。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line"># 查询主键为1的学科</span>
<span class="line">Subject.objects.get(pk=1)</span>
<span class="line">Subject.objects.get(no=1)</span>
<span class="line">Subject.objects.filter(no=1).first()</span>
<span class="line">Subject.objects.filter(no=1).last()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>排序。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line"># 查询所有学科按编号升序排列</span>
<span class="line">Subject.objects.order_by(&#39;no&#39;)</span>
<span class="line"># 查询所有部门按部门编号降序排列</span>
<span class="line">Subject.objects.order_by(&#39;-no&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>切片（分页查询）。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line"># 按编号从小到大查询前3个学科</span>
<span class="line">Subject.objects.order_by(&#39;no&#39;)[:3]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>计数。</li></ol><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 查询一共有多少个学科</span>
<span class="line">Subject.objects.count()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>高级查询。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line"># 查询编号为1的学科的老师</span>
<span class="line">Teacher.objects.filter(subject__no=1)</span>
<span class="line">Subject.objects.get(pk=1).teacher_set.all() </span>
<span class="line"></span>
<span class="line"># 查询学科名称有“全栈”二字的学科的老师</span>
<span class="line">Teacher.objects.filter(subject__name__contains=&#39;全栈&#39;) </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明1</strong>：由于老师与学科之间存在多对一外键关联，所以能通过学科反向查询到该学科的老师（从一对多关系中“一”的一方查询“多”的一方），反向查询属性默认的名字是<code>类名小写_set</code>（如上面例子中的<code>teacher_set</code>），当然也可以在创建模型时通过<code>ForeingKey</code>的<code>related_name</code>属性指定反向查询属性的名字。如果不希望执行反向查询可以将<code>related_name</code>属性设置为<code>&#39;+&#39;</code>或者以<code>&#39;+&#39;</code>开头的字符串。</p></blockquote><blockquote><p><strong>说明2</strong>：ORM查询多个对象时会返回QuerySet对象，QuerySet使用了惰性查询，即在创建QuerySet对象的过程中不涉及任何数据库活动，等真正用到对象时（对QuerySet求值）才向数据库发送SQL语句并获取对应的结果，这一点在实际开发中需要引起注意！</p></blockquote><blockquote><p><strong>说明3</strong>：如果希望更新多条数据，不用先逐一获取模型对象再修改对象属性，可以直接使用QuerySet对象的<code>update()</code>方法一次性更新多条数据。</p></blockquote><h3 id="利用django后台管理模型" tabindex="-1"><a class="header-anchor" href="#利用django后台管理模型"><span>利用Django后台管理模型</span></a></h3><p>在创建好模型类之后，可以通过Django框架自带的后台管理应用（<code>admin</code>应用）实现对模型的管理。虽然实际应用中，这个后台可能并不能满足我们的需求，但是在学习Django框架时，我们可以利用<code>admin</code>应用来管理我们的模型，同时也通过它来了解一个项目的后台管理系统需要哪些功能。使用Django自带的<code>admin</code>应用步骤如下所示。</p><ol><li><p>将<code>admin</code>应用所需的表迁移到数据库中。<code>admin</code>应用本身也需要数据库的支持，而且在<code>admin</code>应用中已经定义好了相关的数据模型类，我们只需要通过模型迁移操作就能自动在数据库中生成所需的二维表。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">python manage.py migrate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>创建访问<code>admin</code>应用的超级用户账号，这里需要输入用户名、邮箱和口令。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">python manage.py createsuperuser</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：输入口令时没有回显也不能退格，需要一气呵成完成输入。</p></blockquote></li><li><p>运行项目，在浏览器中访问<code>http://127.0.0.1:8000/admin</code>，输入刚才创建的超级用户账号和密码进行登录。</p><p><img src="`+i+'" alt=""></p><p>登录后进入管理员操作平台。</p><p><img src="'+d+`" alt=""></p><p>注意，我们暂时还没能在<code>admin</code>应用中看到之前创建的模型类，为此需要在<code>polls</code>应用的<code>admin.py</code>文件中对需要管理的模型进行注册。</p></li><li><p>注册模型类。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.contrib import admin</span>
<span class="line"></span>
<span class="line">from polls.models import Subject, Teacher</span>
<span class="line"></span>
<span class="line">admin.site.register(Subject)</span>
<span class="line">admin.site.register(Teacher)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册模型类后，就可以在后台管理系统中看到它们。</p><p><img src="`+t+'" alt=""></p></li><li><p>对模型进行CRUD操作。</p><p>可以在管理员平台对模型进行C（新增）、R（查看）、U（更新）、D（删除）操作，如下图所示。</p><ul><li><p>添加学科。</p><p><img src="'+c+'" alt=""></p></li><li><p>查看所有学科。</p><p><img src="'+r+'" alt=""></p></li><li><p>删除和更新学科。</p><p><img src="'+o+`" alt=""></p></li></ul></li><li><p>注册模型管理类。</p><p>可能大家已经注意到了，刚才在后台查看部门信息的时候，显示的部门信息并不直观，为此我们再修改<code>admin.py</code>文件，通过注册模型管理类，可以在后台管理系统中更好的管理模型。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.contrib import admin</span>
<span class="line"></span>
<span class="line">from polls.models import Subject, Teacher</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectModelAdmin(admin.ModelAdmin):</span>
<span class="line">    list_display = (&#39;no&#39;, &#39;name&#39;, &#39;intro&#39;, &#39;is_hot&#39;)</span>
<span class="line">    search_fields = (&#39;name&#39;, )</span>
<span class="line">    ordering = (&#39;no&#39;, )</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class TeacherModelAdmin(admin.ModelAdmin):</span>
<span class="line">    list_display = (&#39;no&#39;, &#39;name&#39;, &#39;sex&#39;, &#39;birth&#39;, &#39;good_count&#39;, &#39;bad_count&#39;, &#39;subject&#39;)</span>
<span class="line">    search_fields = (&#39;name&#39;, )</span>
<span class="line">    ordering = (&#39;no&#39;, )</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">admin.site.register(Subject, SubjectModelAdmin)</span>
<span class="line">admin.site.register(Teacher, TeacherModelAdmin)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p><p><img src="'+v+`" alt=""></p><p>为了更好的查看模型，我们为<code>Subject</code>类添加<code>__str__</code>魔法方法，并在该方法中返回学科名字。这样在如上图所示的查看老师的页面上显示老师所属学科时，就不再是<code>Subject object(1)</code>这样晦涩的信息，而是学科的名称。</p></li></ol><h3 id="实现学科页和老师页效果" tabindex="-1"><a class="header-anchor" href="#实现学科页和老师页效果"><span>实现学科页和老师页效果</span></a></h3><ol><li><p>修改<code>polls/views.py</code>文件，编写视图函数实现对学科页和老师页的渲染。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.shortcuts import render, redirect</span>
<span class="line"></span>
<span class="line">from polls.models import Subject, Teacher</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def show_subjects(request):</span>
<span class="line">    subjects = Subject.objects.all().order_by(&#39;no&#39;)</span>
<span class="line">    return render(request, &#39;subjects.html&#39;, {&#39;subjects&#39;: subjects})</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def show_teachers(request):</span>
<span class="line">    try:</span>
<span class="line">        sno = int(request.GET.get(&#39;sno&#39;))</span>
<span class="line">        teachers = []</span>
<span class="line">        if sno:</span>
<span class="line">            subject = Subject.objects.only(&#39;name&#39;).get(no=sno)</span>
<span class="line">            teachers = Teacher.objects.filter(subject=subject).order_by(&#39;no&#39;)</span>
<span class="line">        return render(request, &#39;teachers.html&#39;, {</span>
<span class="line">            &#39;subject&#39;: subject,</span>
<span class="line">            &#39;teachers&#39;: teachers</span>
<span class="line">        })</span>
<span class="line">    except (ValueError, Subject.DoesNotExist):</span>
<span class="line">        return redirect(&#39;/&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>templates/subjects.html</code>和<code>templates/teachers.html</code>模板页。</p><p><code>subjects.html</code></p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">   &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">   &lt;title&gt;学科信息&lt;/title&gt;</span>
<span class="line">   &lt;style&gt;</span>
<span class="line">       #container {</span>
<span class="line">           width: 80%;</span>
<span class="line">           margin: 10px auto;</span>
<span class="line">       }</span>
<span class="line">       .user {</span>
<span class="line">           float: right;</span>
<span class="line">           margin-right: 10px;</span>
<span class="line">       }</span>
<span class="line">       .user&gt;a {</span>
<span class="line">           margin-right: 10px;</span>
<span class="line">       }</span>
<span class="line">       #main&gt;dl&gt;dt {</span>
<span class="line">           font-size: 1.5em;</span>
<span class="line">           font-weight: bold;</span>
<span class="line">       }</span>
<span class="line">       #main&gt;dl&gt;dd {</span>
<span class="line">           font-size: 1.2em;</span>
<span class="line">       }</span>
<span class="line">       a {</span>
<span class="line">           text-decoration: none;</span>
<span class="line">           color: darkcyan;</span>
<span class="line">       }</span>
<span class="line">   &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">   &lt;div id=&quot;container&quot;&gt;</span>
<span class="line">       &lt;div class=&quot;user&quot;&gt;</span>
<span class="line">           &lt;a href=&quot;login.html&quot;&gt;用户登录&lt;/a&gt;</span>
<span class="line">           &lt;a href=&quot;register.html&quot;&gt;快速注册&lt;/a&gt;</span>
<span class="line">       &lt;/div&gt;</span>
<span class="line">       &lt;h1&gt;扣丁学堂所有学科&lt;/h1&gt;</span>
<span class="line">       &lt;hr&gt;</span>
<span class="line">       &lt;div id=&quot;main&quot;&gt;</span>
<span class="line">           {% for subject in subjects %}</span>
<span class="line">           &lt;dl&gt;</span>
<span class="line">               &lt;dt&gt;</span>
<span class="line">                   &lt;a href=&quot;/teachers/?sno={{ subject.no }}&quot;&gt;{{ subject.name }}&lt;/a&gt;</span>
<span class="line">                   {% if subject.is_hot %}</span>
<span class="line">                   &lt;img src=&quot;/static/images/hot-icon-small.png&quot;&gt;</span>
<span class="line">                   {% endif %}</span>
<span class="line">               &lt;/dt&gt;</span>
<span class="line">               &lt;dd&gt;{{ subject.intro }}&lt;/dd&gt;</span>
<span class="line">           &lt;/dl&gt;</span>
<span class="line">           {% endfor %}</span>
<span class="line">       &lt;/div&gt;</span>
<span class="line">   &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>teachers.html</code></p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
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
<span class="line">                    &lt;span&gt;出生日期：{{ teacher.birth | date:&#39;Y年n月j日&#39;}}&lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;intro&quot;&gt;{{ teacher.intro }}&lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;comment&quot;&gt;</span>
<span class="line">                    &lt;a href=&quot;&quot;&gt;好评&lt;/a&gt;&amp;nbsp;(&lt;strong&gt;{{ teacher.good_count }}&lt;/strong&gt;)</span>
<span class="line">                    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    &lt;a href=&quot;&quot;&gt;差评&lt;/a&gt;&amp;nbsp;&lt;strong&gt;{{ teacher.bad_count }}&lt;/strong&gt;)</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        {% endfor %}</span>
<span class="line">        &lt;a href=&quot;/&quot;&gt;返回首页&lt;/a&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>vote/urls.py</code>文件，实现映射URL。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from django.contrib import admin</span>
<span class="line">from django.urls import path</span>
<span class="line"></span>
<span class="line">from polls.views import show_subjects, show_teachers</span>
<span class="line"></span>
<span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;admin/&#39;, admin.site.urls),</span>
<span class="line">    path(&#39;&#39;, show_subjects),</span>
<span class="line">    path(&#39;teachers/&#39;, show_teachers),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>到此为止，页面上需要的图片（静态资源）还没有能够正常展示，我们在下一章节中为大家介绍如何处理模板页上的需要的静态资源。</p><h3 id="补充内容" tabindex="-1"><a class="header-anchor" href="#补充内容"><span>补充内容</span></a></h3><h4 id="django模型最佳实践" tabindex="-1"><a class="header-anchor" href="#django模型最佳实践"><span>Django模型最佳实践</span></a></h4><ol><li>正确的为模型和关系字段命名。</li><li>设置适当的<code>related_name</code>属性。</li><li>用<code>OneToOneField</code>代替<code>ForeignKeyField(unique=True)</code>。</li><li>通过“迁移操作”（migrate）来添加模型。</li><li>用NoSQL来应对需要降低范式级别的场景。</li><li>如果布尔类型可以为空要使用<code>NullBooleanField</code>。</li><li>在模型中放置业务逻辑。</li><li>用<code>&lt;ModelName&gt;.DoesNotExists</code>取代<code>ObjectDoesNotExists</code>。</li><li>在数据库中不要出现无效数据。</li><li>不要对<code>QuerySet</code>调用<code>len()</code>函数。</li><li>将<code>QuerySet</code>的<code>exists()</code>方法的返回值用于<code>if</code>条件。</li><li>用<code>DecimalField</code>来存储货币相关数据而不是<code>FloatField</code>。</li><li>定义<code>__str__</code>方法。</li><li>不要将数据文件放在同一个目录中。</li></ol><blockquote><p><strong>说明</strong>：以上内容来自于STEELKIWI网站的<a href="https://steelkiwi.com/blog/best-practices-working-django-models-python/" target="_blank" rel="noopener noreferrer"><em>Best Practice working with Django models in Python</em></a>，有兴趣的小伙伴可以阅读原文。</p></blockquote><h4 id="模型定义参考" tabindex="-1"><a class="header-anchor" href="#模型定义参考"><span>模型定义参考</span></a></h4><h5 id="字段" tabindex="-1"><a class="header-anchor" href="#字段"><span>字段</span></a></h5><p>对字段名称的限制</p><ul><li>字段名不能是Python的保留字，否则会导致语法错误</li><li>字段名不能有多个连续下划线，否则影响ORM查询操作</li></ul><p>Django模型字段类</p><table><thead><tr><th>字段类</th><th>说明</th></tr></thead><tbody><tr><td><code>AutoField</code></td><td>自增ID字段</td></tr><tr><td><code>BigIntegerField</code></td><td>64位有符号整数</td></tr><tr><td><code>BinaryField</code></td><td>存储二进制数据的字段，对应Python的<code>bytes</code>类型</td></tr><tr><td><code>BooleanField</code></td><td>存储<code>True</code>或<code>False</code></td></tr><tr><td><code>CharField</code></td><td>长度较小的字符串</td></tr><tr><td><code>DateField</code></td><td>存储日期，有<code>auto_now</code>和<code>auto_now_add</code>属性</td></tr><tr><td><code>DateTimeField</code></td><td>存储日期和日期，两个附加属性同上</td></tr><tr><td><code>DecimalField</code></td><td>存储固定精度小数，有<code>max_digits</code>（有效位数）和<code>decimal_places</code>（小数点后面）两个必要的参数</td></tr><tr><td><code>DurationField</code></td><td>存储时间跨度</td></tr><tr><td><code>EmailField</code></td><td>与<code>CharField</code>相同，可以用<code>EmailValidator</code>验证</td></tr><tr><td><code>FileField</code></td><td>文件上传字段</td></tr><tr><td><code>FloatField</code></td><td>存储浮点数</td></tr><tr><td><code>ImageField</code></td><td>其他同<code>FileFiled</code>，要验证上传的是不是有效图像</td></tr><tr><td><code>IntegerField</code></td><td>存储32位有符号整数。</td></tr><tr><td><code>GenericIPAddressField</code></td><td>存储IPv4或IPv6地址</td></tr><tr><td><code>NullBooleanField</code></td><td>存储<code>True</code>、<code>False</code>或<code>null</code>值</td></tr><tr><td><code>PositiveIntegerField</code></td><td>存储无符号整数（只能存储正数）</td></tr><tr><td><code>SlugField</code></td><td>存储slug（简短标注）</td></tr><tr><td><code>SmallIntegerField</code></td><td>存储16位有符号整数</td></tr><tr><td><code>TextField</code></td><td>存储数据量较大的文本</td></tr><tr><td><code>TimeField</code></td><td>存储时间</td></tr><tr><td><code>URLField</code></td><td>存储URL的<code>CharField</code></td></tr><tr><td><code>UUIDField</code></td><td>存储全局唯一标识符</td></tr></tbody></table><h5 id="字段属性" tabindex="-1"><a class="header-anchor" href="#字段属性"><span>字段属性</span></a></h5><p>通用字段属性</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>null</code></td><td>数据库中对应的字段是否允许为<code>NULL</code>，默认为<code>False</code></td></tr><tr><td><code>blank</code></td><td>后台模型管理验证数据时，是否允许为<code>NULL</code>，默认为<code>False</code></td></tr><tr><td><code>choices</code></td><td>设定字段的选项，各元组中的第一个值是设置在模型上的值，第二值是人类可读的值</td></tr><tr><td><code>db_column</code></td><td>字段对应到数据库表中的列名，未指定时直接使用字段的名称</td></tr><tr><td><code>db_index</code></td><td>设置为<code>True</code>时将在该字段创建索引</td></tr><tr><td><code>db_tablespace</code></td><td>为有索引的字段设置使用的表空间，默认为<code>DEFAULT_INDEX_TABLESPACE</code></td></tr><tr><td><code>default</code></td><td>字段的默认值</td></tr><tr><td><code>editable</code></td><td>字段在后台模型管理或<code>ModelForm</code>中是否显示，默认为<code>True</code></td></tr><tr><td><code>error_messages</code></td><td>设定字段抛出异常时的默认消息的字典，其中的键包括<code>null</code>、<code>blank</code>、<code>invalid</code>、<code>invalid_choice</code>、<code>unique</code>和<code>unique_for_date</code></td></tr><tr><td><code>help_text</code></td><td>表单小组件旁边显示的额外的帮助文本。</td></tr><tr><td><code>primary_key</code></td><td>将字段指定为模型的主键，未指定时会自动添加<code>AutoField</code>用于主键，只读。</td></tr><tr><td><code>unique</code></td><td>设置为<code>True</code>时，表中字段的值必须是唯一的</td></tr><tr><td><code>verbose_name</code></td><td>字段在后台模型管理显示的名称，未指定时使用字段的名称</td></tr></tbody></table><p><code>ForeignKey</code>属性</p><ol><li><code>limit_choices_to</code>：值是一个Q对象或返回一个Q对象，用于限制后台显示哪些对象。</li><li><code>related_name</code>：用于获取关联对象的关联管理器对象（反向查询），如果不允许反向，该属性应该被设置为<code>&#39;+&#39;</code>，或者以<code>&#39;+&#39;</code>结尾。</li><li><code>to_field</code>：指定关联的字段，默认关联对象的主键字段。</li><li><code>db_constraint</code>：是否为外键创建约束，默认值为<code>True</code>。</li><li><code>on_delete</code>：外键关联的对象被删除时对应的动作，可取的值包括<code>django.db.models</code>中定义的： <ul><li><code>CASCADE</code>：级联删除。</li><li><code>PROTECT</code>：抛出<code>ProtectedError</code>异常，阻止删除引用的对象。</li><li><code>SET_NULL</code>：把外键设置为<code>null</code>，当<code>null</code>属性被设置为<code>True</code>时才能这么做。</li><li><code>SET_DEFAULT</code>：把外键设置为默认值，提供了默认值才能这么做。</li></ul></li></ol><p><code>ManyToManyField</code>属性</p><ol><li><code>symmetrical</code>：是否建立对称的多对多关系。</li><li><code>through</code>：指定维持多对多关系的中间表的Django模型。</li><li><code>throughfields</code>：定义了中间模型时可以指定建立多对多关系的字段。</li><li><code>db_table</code>：指定维持多对多关系的中间表的表名。</li></ol><h5 id="模型元数据选项" tabindex="-1"><a class="header-anchor" href="#模型元数据选项"><span>模型元数据选项</span></a></h5><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>abstract</code></td><td>设置为True时模型是抽象父类</td></tr><tr><td><code>app_label</code></td><td>如果定义模型的应用不在INSTALLED_APPS中可以用该属性指定</td></tr><tr><td><code>db_table</code></td><td>模型使用的数据表名称</td></tr><tr><td><code>db_tablespace</code></td><td>模型使用的数据表空间</td></tr><tr><td><code>default_related_name</code></td><td>关联对象回指这个模型时默认使用的名称，默认为&lt;model_name&gt;_set</td></tr><tr><td><code>get_latest_by</code></td><td>模型中可排序字段的名称。</td></tr><tr><td><code>managed</code></td><td>设置为True时，Django在迁移中创建数据表并在执行flush管理命令时把表移除</td></tr><tr><td><code>order_with_respect_to</code></td><td>标记对象为可排序的</td></tr><tr><td><code>ordering</code></td><td>对象的默认排序</td></tr><tr><td><code>permissions</code></td><td>创建对象时写入权限表的额外权限</td></tr><tr><td><code>default_permissions</code></td><td>默认为<code>(&#39;add&#39;, &#39;change&#39;, &#39;delete&#39;)</code></td></tr><tr><td><code>unique_together</code></td><td>设定组合在一起时必须独一无二的字段名</td></tr><tr><td><code>index_together</code></td><td>设定一起建立索引的多个字段名</td></tr><tr><td><code>verbose_name</code></td><td>为对象设定人类可读的名称</td></tr><tr><td><code>verbose_name_plural</code></td><td>设定对象的复数名称</td></tr></tbody></table><h4 id="查询参考" tabindex="-1"><a class="header-anchor" href="#查询参考"><span>查询参考</span></a></h4><h5 id="按字段查找可以用的条件" tabindex="-1"><a class="header-anchor" href="#按字段查找可以用的条件"><span>按字段查找可以用的条件</span></a></h5><ol><li><code>exact</code> / <code>iexact</code>：精确匹配/忽略大小写的精确匹配查询</li><li><code>contains</code> / <code>icontains</code> / <code>startswith</code> / <code>istartswith</code> / <code>endswith</code> / <code>iendswith</code>：基于<code>like</code>的模糊查询</li><li><code>in</code> ：集合运算</li><li><code>gt</code> / <code>gte</code> / <code>lt</code> / <code>lte</code>：大于/大于等于/小于/小于等于关系运算</li><li><code>range</code>：指定范围查询（SQL中的<code>between…and…</code>）</li><li><code>year</code> / <code>month</code> / <code>day</code> / <code>week_day</code> / <code>hour</code> / <code>minute</code> / <code>second</code>：查询时间日期</li><li><code>isnull</code>：查询空值（True）或非空值（False）</li><li><code>search</code>：基于全文索引的全文检索（一般很少使用）</li><li><code>regex</code> / <code>iregex</code>：基于正则表达式的模糊匹配查询</li></ol>`,63),b=[m];function h(g,y){return n(),s("div",null,b)}const j=e(u,[["render",h],["__file","47.深入模型.html.vue"]]),S=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/47.%E6%B7%B1%E5%85%A5%E6%A8%A1%E5%9E%8B.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"深入模型","slug":"深入模型","link":"#深入模型","children":[{"level":3,"title":"创建项目和应用","slug":"创建项目和应用","link":"#创建项目和应用","children":[]},{"level":3,"title":"配置关系型数据库MySQL","slug":"配置关系型数据库mysql","link":"#配置关系型数据库mysql","children":[]},{"level":3,"title":"使用ORM完成模型的CRUD操作","slug":"使用orm完成模型的crud操作","link":"#使用orm完成模型的crud操作","children":[]},{"level":3,"title":"利用Django后台管理模型","slug":"利用django后台管理模型","link":"#利用django后台管理模型","children":[]},{"level":3,"title":"实现学科页和老师页效果","slug":"实现学科页和老师页效果","link":"#实现学科页和老师页效果","children":[]},{"level":3,"title":"补充内容","slug":"补充内容","link":"#补充内容","children":[]}]}],"git":{"updatedTime":1720597287000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-100-Days/Day46-60/47.深入模型.md"}');export{j as comp,S as data};
