import{_ as s,c as n,o as e,d as a}from"./app-CzcyFXHz.js";const l="/docs/assets/drf-app-D68VgcxS.png",i="/docs/assets/json-web-token-DpzkacU8.png",t={},d=a(`<h2 id="restful架构和drf入门" tabindex="-1"><a class="header-anchor" href="#restful架构和drf入门"><span>RESTful架构和DRF入门</span></a></h2><p>把软件（Software）、平台（Platform）、基础设施（Infrastructure）做成服务（Service）是很多IT企业都一直在做的事情，这就是大家经常听到的SasS（软件即服务）、PasS（平台即服务）和IasS（基础设置即服务）。实现面向服务的架构（SOA）有诸多的方式，包括RPC（远程过程调用）、Web Service、REST等，在技术层面上，SOA是一种<strong>抽象的、松散耦合的粗粒度软件架构</strong>；在业务层面上，SOA的核心概念是“<strong>重用</strong>”和“<strong>互操作</strong>”，它将系统资源整合成可操作的、标准的服务，使得这些资源能够被重新组合和应用。在实现SOA的诸多方案中，REST被认为是最适合互联网应用的架构，符合REST规范的架构也经常被称作RESTful架构。</p><h3 id="rest概述" tabindex="-1"><a class="header-anchor" href="#rest概述"><span>REST概述</span></a></h3><p>REST这个词，是<strong>Roy Thomas Fielding</strong>在他2000年的博士论文中提出的，Roy是HTTP协议（1.0和1.1版）的主要设计者、Apache服务器软件主要作者、Apache基金会第一任主席。在他的博士论文中，Roy把他对互联网软件的架构原则定名为REST，即<strong>RE</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer的缩写，中文通常翻译为“<strong>表现层状态转移</strong>”或“<strong>表述状态转移</strong>”。</p><p>这里的“表现层”其实指的是“资源”的“表现层”。所谓资源，就是网络上的一个实体，或者说是网络上的一个具体信息。它可以是一段文本、一张图片、一首歌曲或一种服务。我们可以用一个URI（统一资源定位符）指向资源，要获取到这个资源，访问它的URI即可，URI就是资源在互联网上的唯一标识。资源可以有多种外在表现形式。我们把资源具体呈现出来的形式，叫做它的“表现层”。比如，文本可以用<code>text/plain</code>格式表现，也可以用<code>text/html</code>格式、<code>text/xml</code>格式、<code>application/json</code>格式表现，甚至可以采用二进制格式；图片可以用<code>image/jpeg</code>格式表现，也可以用<code>image/png</code>格式表现。URI只代表资源的实体，不代表它的表现形式。严格地说，有些网址最后的<code>.html</code>后缀名是不必要的，因为这个后缀名表示格式，属于“表现层”范畴，而URI应该只代表“资源”的位置，它的具体表现形式，应该在HTTP请求的头信息中用<code>Accept</code>和<code>Content-Type</code>字段指定，这两个字段才是对“表现层”的描述。</p><p>访问一个网站，就代表了客户端和服务器的一个互动过程。在这个过程中，势必涉及到数据和状态的变化。Web应用通常使用HTTP作为其通信协议，客户端想要操作服务器，必须通过HTTP请求，让服务器端发生“状态转移”，而这种转移是建立在表现层之上的，所以就是“表现层状态转移”。客户端通过HTTP的动词GET、POST、PUT（或PATCH）、DELETE，分别对应对资源的四种基本操作，其中GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT（或PATCH）用来更新资源，DELETE用来删除资源。</p><p>简单的说RESTful架构就是：“每一个URI代表一种资源，客户端通过四个HTTP动词，对服务器端资源进行操作，实现资源的表现层状态转移”。</p><p>我们在设计Web应用时，如果需要向客户端提供资源，就可以使用REST风格的URI，这是实现RESTful架构的第一步。当然，真正的RESTful架构并不只是URI符合REST风格，更为重要的是“无状态”和“幂等性”两个词，我们在后面的课程中会为大家阐述这两点。下面的例子给出了一些符合REST风格的URI，供大家在设计URI时参考。</p><table><thead><tr><th>请求方法（HTTP动词）</th><th>URI</th><th>解释</th></tr></thead><tbody><tr><td><strong>GET</strong></td><td><code>/students/</code></td><td>获取所有学生</td></tr><tr><td><strong>POST</strong></td><td><code>/students/</code></td><td>新建一个学生</td></tr><tr><td><strong>GET</strong></td><td><code>/students/ID/</code></td><td>获取指定ID的学生信息</td></tr><tr><td><strong>PUT</strong></td><td><code>/students/ID/</code></td><td>更新指定ID的学生信息（提供该学生的全部信息）</td></tr><tr><td><strong>PATCH</strong></td><td><code>/students/ID/</code></td><td>更新指定ID的学生信息（提供该学生的部分信息）</td></tr><tr><td><strong>DELETE</strong></td><td><code>/students/ID/</code></td><td>删除指定ID的学生信息</td></tr><tr><td><strong>GET</strong></td><td><code>/students/ID/friends/</code></td><td>列出指定ID的学生的所有朋友</td></tr><tr><td><strong>DELETE</strong></td><td><code>/students/ID/friends/ID/</code></td><td>删除指定ID的学生的指定ID的朋友</td></tr></tbody></table><h3 id="drf使用入门" tabindex="-1"><a class="header-anchor" href="#drf使用入门"><span>DRF使用入门</span></a></h3><p>在Django项目中，如果要实现REST架构，即将网站的资源发布成REST风格的API接口，可以使用著名的三方库<code>djangorestframework</code> ，我们通常将其简称为DRF。</p><h4 id="安装和配置drf" tabindex="-1"><a class="header-anchor" href="#安装和配置drf"><span>安装和配置DRF</span></a></h4><p>安装DRF。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install djangorestframework</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置DRF。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">INSTALLED_APPS = [</span>
<span class="line"></span>
<span class="line">    &#39;rest_framework&#39;,</span>
<span class="line">    </span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"># 下面的配置根据项目需要进行设置</span>
<span class="line">REST_FRAMEWORK = {</span>
<span class="line">    # 配置默认页面大小</span>
<span class="line">    # &#39;PAGE_SIZE&#39;: 10,</span>
<span class="line">    # 配置默认的分页类</span>
<span class="line">    # &#39;DEFAULT_PAGINATION_CLASS&#39;: &#39;...&#39;,</span>
<span class="line">    # 配置异常处理器</span>
<span class="line">    # &#39;EXCEPTION_HANDLER&#39;: &#39;...&#39;,</span>
<span class="line">    # 配置默认解析器</span>
<span class="line">    # &#39;DEFAULT_PARSER_CLASSES&#39;: (</span>
<span class="line">    #     &#39;rest_framework.parsers.JSONParser&#39;,</span>
<span class="line">    #     &#39;rest_framework.parsers.FormParser&#39;,</span>
<span class="line">    #     &#39;rest_framework.parsers.MultiPartParser&#39;,</span>
<span class="line">    # ),</span>
<span class="line">    # 配置默认限流类</span>
<span class="line">    # &#39;DEFAULT_THROTTLE_CLASSES&#39;: (</span>
<span class="line">    #     &#39;...&#39;</span>
<span class="line">    # ),</span>
<span class="line">    # 配置默认授权类</span>
<span class="line">    # &#39;DEFAULT_PERMISSION_CLASSES&#39;: (</span>
<span class="line">    #     &#39;...&#39;,</span>
<span class="line">    # ),</span>
<span class="line">    # 配置默认认证类</span>
<span class="line">    # &#39;DEFAULT_AUTHENTICATION_CLASSES&#39;: (</span>
<span class="line">    #     &#39;...&#39;,</span>
<span class="line">    # ),</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写序列化器" tabindex="-1"><a class="header-anchor" href="#编写序列化器"><span>编写序列化器</span></a></h4><p>前后端分离的开发需要后端为前端、移动端提供API数据接口，而API接口通常情况下都是返回JSON格式的数据，这就需要对模型对象进行序列化处理。DRF中封装了<code>Serializer</code>类和<code>ModelSerializer</code>类用于实现序列化操作，通过继承<code>Serializer</code>类或<code>ModelSerializer</code>类，我们可以自定义序列化器，用于将对象处理成字典，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework import serializers </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectSerializer(serializers.ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Subject</span>
<span class="line">        fields = &#39;__all__&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码直接继承了<code>ModelSerializer</code>，通过<code>Meta</code>类的<code>model</code>属性指定要序列化的模型以及<code>fields</code>属性指定需要序列化的模型字段，稍后我们就可以在视图函数中使用该类来实现对<code>Subject</code>模型的序列化。</p><h4 id="编写视图函数" tabindex="-1"><a class="header-anchor" href="#编写视图函数"><span>编写视图函数</span></a></h4><p>DRF框架支持两种实现数据接口的方式，一种是FBV（基于函数的视图），另一种是CBV（基于类的视图）。我们先看看FBV的方式如何实现数据接口，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.decorators import api_view</span>
<span class="line">from rest_framework.response import Response</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@api_view((&#39;GET&#39;, ))</span>
<span class="line">def show_subjects(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    subjects = Subject.objects.all().order_by(&#39;no&#39;)</span>
<span class="line">    # 创建序列化器对象并指定要序列化的模型</span>
<span class="line">    serializer = SubjectSerializer(subjects, many=True)</span>
<span class="line">    # 通过序列化器的data属性获得模型对应的字典并通过创建Response对象返回JSON格式的数据</span>
<span class="line">    return Response(serializer.data)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比上一个章节的使用<code>bpmapper</code>实现模型序列化的代码，使用DRF的代码更加简单明了，而且DRF本身自带了一套页面，可以方便我们查看我们使用DRF定制的数据接口，如下图所示。</p><p><img src="`+l+`" alt=""></p><p>直接使用上一节写好的页面，就可以通过Vue.js把上面接口提供的学科数据渲染并展示出来，此处不再进行赘述。</p><h4 id="实现老师信息数据接口" tabindex="-1"><a class="header-anchor" href="#实现老师信息数据接口"><span>实现老师信息数据接口</span></a></h4><p>编写序列化器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class SubjectSimpleSerializer(serializers.ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Subject</span>
<span class="line">        fields = (&#39;no&#39;, &#39;name&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class TeacherSerializer(serializers.ModelSerializer):</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Teacher</span>
<span class="line">        exclude = (&#39;subject&#39;, )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写视图函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">@api_view((&#39;GET&#39;, ))</span>
<span class="line">def show_teachers(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    try:</span>
<span class="line">        sno = int(request.GET.get(&#39;sno&#39;))</span>
<span class="line">        subject = Subject.objects.only(&#39;name&#39;).get(no=sno)</span>
<span class="line">        teachers = Teacher.objects.filter(subject=subject).defer(&#39;subject&#39;).order_by(&#39;no&#39;)</span>
<span class="line">        subject_seri = SubjectSimpleSerializer(subject)</span>
<span class="line">        teacher_seri = TeacherSerializer(teachers, many=True)</span>
<span class="line">        return Response({&#39;subject&#39;: subject_seri.data, &#39;teachers&#39;: teacher_seri.data})</span>
<span class="line">    except (TypeError, ValueError, Subject.DoesNotExist):</span>
<span class="line">        return Response(status=404)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置URL映射。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    </span>
<span class="line">    path(&#39;api/teachers/&#39;, show_teachers),</span>
<span class="line">    </span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过Vue.js渲染页面。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;老师信息&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        /* 此处省略掉层叠样式表 */</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;container&quot;&gt;</span>
<span class="line">        &lt;h1&gt;{{ subject.name }}学科的老师信息&lt;/h1&gt;</span>
<span class="line">        &lt;hr&gt;</span>
<span class="line">        &lt;h2 v-if=&quot;loaded &amp;&amp; teachers.length == 0&quot;&gt;暂无该学科老师信息&lt;/h2&gt;</span>
<span class="line">        &lt;div class=&quot;teacher&quot; v-for=&quot;teacher in teachers&quot;&gt;</span>
<span class="line">            &lt;div class=&quot;photo&quot;&gt;</span>
<span class="line">                &lt;img :src=&quot;&#39;/static/images/&#39; + teacher.photo&quot; height=&quot;140&quot; alt=&quot;&quot;&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">            &lt;div class=&quot;info&quot;&gt;</span>
<span class="line">                &lt;div&gt;</span>
<span class="line">                    &lt;span&gt;&lt;strong&gt;姓名：{{ teacher.name }}&lt;/strong&gt;&lt;/span&gt;</span>
<span class="line">                    &lt;span&gt;性别：{{ teacher.sex | maleOrFemale }}&lt;/span&gt;</span>
<span class="line">                    &lt;span&gt;出生日期：{{ teacher.birth }}&lt;/span&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;intro&quot;&gt;{{ teacher.intro }}&lt;/div&gt;</span>
<span class="line">                &lt;div class=&quot;comment&quot;&gt;</span>
<span class="line">                    &lt;a href=&quot;&quot; @click.prevent=&quot;vote(teacher, true)&quot;&gt;好评&lt;/a&gt;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    (&lt;strong&gt;{{ teacher.good_count }}&lt;/strong&gt;)</span>
<span class="line">                    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    &lt;a href=&quot;&quot; @click.prevent=&quot;vote(teacher, false)&quot;&gt;差评&lt;/a&gt;&amp;nbsp;&amp;nbsp;</span>
<span class="line">                    (&lt;strong&gt;{{ teacher.bad_count }}&lt;/strong&gt;)</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;a href=&quot;/static/html/subjects.html&quot;&gt;返回首页&lt;/a&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        let app = new Vue({</span>
<span class="line">            el: &#39;#container&#39;,</span>
<span class="line">            data: {</span>
<span class="line">                subject: {},</span>
<span class="line">                teachers: [],</span>
<span class="line">                loaded: false</span>
<span class="line">            },</span>
<span class="line">            created() {</span>
<span class="line">                fetch(&#39;/api/teachers/&#39; + location.search)</span>
<span class="line">                    .then(resp =&gt; resp.json())</span>
<span class="line">                    .then(json =&gt; {</span>
<span class="line">                        this.subject = json.subject</span>
<span class="line">                        this.teachers = json.teachers</span>
<span class="line">                    })</span>
<span class="line">            },</span>
<span class="line">            filters: {</span>
<span class="line">                maleOrFemale(sex) {</span>
<span class="line">                    return sex? &#39;男&#39;: &#39;女&#39;</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">            methods: {</span>
<span class="line">               vote(teacher, flag) {</span>
<span class="line">                    let url = flag? &#39;/praise/&#39; : &#39;/criticize/&#39;</span>
<span class="line">                    url += &#39;?tno=&#39; + teacher.no</span>
<span class="line">                    fetch(url).then(resp =&gt; resp.json()).then(json =&gt; {</span>
<span class="line">                        if (json.code === 10000) {</span>
<span class="line">                            if (flag) {</span>
<span class="line">                                teacher.good_count = json.count</span>
<span class="line">                            } else {</span>
<span class="line">                                teacher.bad_count = json.count</span>
<span class="line">                            }</span>
<span class="line">                        }</span>
<span class="line">                    })</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前后端分离下的用户登录" tabindex="-1"><a class="header-anchor" href="#前后端分离下的用户登录"><span>前后端分离下的用户登录</span></a></h3><p>之前我们提到过， HTTP是无状态的，一次请求结束连接断开，下次服务器再收到请求，它就不知道这个请求是哪个用户发过来的。但是对于一个Web应用而言，它是需要有状态管理的，这样才能让服务器知道HTTP请求来自哪个用户，从而判断是否允许该用户请求以及为用户提供更好的服务，这个过程就是常说的<strong>会话管理</strong>。</p><p>之前我们做会话管理（用户跟踪）的方法是：用户登录成功后，在服务器端通过一个session对象保存用户相关数据，然后把session对象的ID写入浏览器的cookie中；下一次请求时，HTTP请求头中携带cookie的数据，服务器从HTTP请求头读取cookie中的sessionid，根据这个标识符找到对应的session对象，这样就能够获取到之前保存在session中的用户数据。我们刚才说过，REST架构是最适合互联网应用的架构，它强调了HTTP的无状态性，这样才能保证应用的水平扩展能力（当并发访问量增加时，可以通过增加新的服务器节点来为系统扩容）。显然，基于session实现用户跟踪的方式需要服务器保存session对象，在做水平扩展增加新的服务器节点时，需要复制和同步session对象，这显然是非常麻烦的。解决这个问题有两种方案，一种是架设缓存服务器（如Redis），让多个服务器节点共享缓存服务并将session对象直接置于缓存服务器中；另一种方式放弃基于session的用户跟踪，使用<strong>基于token的用户跟踪</strong>。</p><p>基于token的用户跟踪是在用户登录成功后，为用户生成身份标识并保存在浏览器本地存储（localStorage、sessionStorage、cookie等）中，这样的话服务器不需要保存用户状态，从而可以很容易的做到水平扩展。基于token的用户跟踪具体流程如下：</p><ol><li>用户登录时，如果登录成功就按照某种方式为用户生成一个令牌（token），该令牌中通常包含了用户标识、过期时间等信息而且需要加密并生成指纹（避免伪造或篡改令牌），服务器将令牌返回给前端；</li><li>前端获取到服务器返回的token，保存在浏览器本地存储中（可以保存在<code>localStorage</code>或<code>sessionStorage</code>中，对于使用Vue.js的前端项目来说，还可以通过Vuex进行状态管理）；</li><li>对于使用了前端路由的项目来说，前端每次路由跳转，可以先判断<code>localStroage</code>中有无token，如果没有则跳转到登录页；</li><li>每次请求后端数据接口，在HTTP请求头里携带token；后端接口判断请求头有无token，如果没有token以及token是无效的或过期的，服务器统一返回401；</li><li>如果前端收到HTTP响应状态码401，则重定向到登录页面。</li></ol><p>通过上面的描述，相信大家已经发现了，基于token的用户跟踪最为关键是在用户登录成功时，要为用户生成一个token作为用户的身份标识。生成token的方法很多，其中一种比较成熟的解决方案是使用JSON Web Token。</p><h4 id="jwt概述" tabindex="-1"><a class="header-anchor" href="#jwt概述"><span>JWT概述</span></a></h4><p>JSON Web Token通常简称为JWT，它是一种开放标准（RFC 7519）。随着RESTful架构的流行，越来越多的项目使用JWT作为用户身份认证的方式。JWT相当于是三个JSON对象经过编码后，用<code>.</code>分隔并组合到一起，这三个JSON对象分别是头部（header）、载荷（payload）和签名（signature），如下图所示。</p><p><img src="`+i+`" alt=""></p><ol><li><p>头部</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">  &quot;alg&quot;: &quot;HS256&quot;,</span>
<span class="line">  &quot;typ&quot;: &quot;JWT&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>alg</code>属性表示签名的算法，默认是HMAC SHA256（简写成<code>HS256</code>）；<code>typ</code>属性表示这个令牌的类型，JWT中都统一书写为<code>JWT</code>。</p></li><li><p>载荷</p><p>载荷部分用来存放实际需要传递的数据。JWT官方文档中规定了7个可选的字段：</p><ul><li>iss ：签发人</li><li>exp：过期时间</li><li>sub：主题</li><li>aud：受众</li><li>nbf：生效时间</li><li>iat：签发时间</li><li>jti：编号</li></ul><p>除了官方定义的字典，我们可以根据应用的需要添加自定义的字段，如下所示。</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">  &quot;sub&quot;: &quot;1234567890&quot;,</span>
<span class="line">  &quot;nickname&quot;: &quot;jackfrued&quot;,</span>
<span class="line">  &quot;role&quot;: &quot;admin&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>签名</p><p>签名部分是对前面两部分生成一个指纹，防止数据伪造和篡改。实现签名首先需要指定一个密钥。这个密钥只有服务器才知道，不能泄露给用户。然后，使用头部指定的签名算法（默认是<code>HS256</code>），按照下面的公式产生签名。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">HS256(base64Encode(header) + &#39;.&#39; + base64Encode(payload), secret)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>算出签名以后，把头部、载荷、签名三个部分拼接成一个字符串，每个部分用<code>.</code>进行分隔，这样一个JWT就生成好了。</p></li></ol><h4 id="jwt的优缺点" tabindex="-1"><a class="header-anchor" href="#jwt的优缺点"><span>JWT的优缺点</span></a></h4><p>使用JWT的优点非常明显，包括：</p><ol><li>更容易实现水平扩展，因为令牌保存在浏览器中，服务器不需要做状态管理。</li><li>更容易防范CSRF攻击，因为在请求头中添加<code>localStorage</code>或<code>sessionStorage</code>中的token必须靠JavaScript代码完成，而不是自动添加到请求头中的。</li><li>可以防伪造和篡改，因为JWT有签名，伪造和篡改的令牌无法通过签名验证，会被认定是无效的令牌。</li></ol><p>当然，任何技术不可能只有优点没有缺点，JWT也有诸多缺点，大家需要在使用的时候引起注意，具体包括：</p><ol><li>可能会遭受到XSS攻击（跨站脚本攻击），通过注入恶意脚本执行JavaScript代码获取到用户令牌。</li><li>在令牌过期之前，无法作废已经颁发的令牌，要解决这个问题，还需要额外的中间层和代码来辅助。</li><li>JWT是用户的身份令牌，一旦泄露，任何人都可以获得该用户的所有权限。为了降低令牌被盗用后产生的风险，JWT的有效期应该设置得比较短。对于一些比较重要的权限，使用时应通过其他方式再次对用户进行认证，例如短信验证码等。</li></ol><h4 id="使用pyjwt" tabindex="-1"><a class="header-anchor" href="#使用pyjwt"><span>使用PyJWT</span></a></h4><p>在Python代码中，可以使用三方库<code>PyJWT</code>生成和验证JWT，下面是安装<code>PyJWT</code>的命令。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install pyjwt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>生成令牌。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">payload = {</span>
<span class="line">    &#39;exp&#39;: datetime.datetime.utcnow() + datetime.timedelta(days=1),</span>
<span class="line">    &#39;userid&#39;: 10001</span>
<span class="line">}</span>
<span class="line">token = jwt.encode(payload, settings.SECRET_KEY).decode()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证令牌。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">try:</span>
<span class="line">    token = &#39;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTQ4NzIzOTEsInVzZXJpZCI6MTAwMDF9.FM-bNxemWLqQQBIsRVvc4gq71y42I9m2zt5nlFxNHUo&#39;</span>
<span class="line">    payload = jwt.decode(token, settings.SECRET_KEY)</span>
<span class="line">except InvalidTokenError:</span>
<span class="line">    raise AuthenticationFailed(&#39;无效的令牌或令牌已经过期&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不清楚JWT具体的使用方式，可以先看看第55天的内容，里面提供了完整的投票项目代码的地址。</p>`,58),c=[d];function r(p,o){return e(),n("div",null,c)}const u=s(t,[["render",r],["__file","54.RESTful架构和DRF入门.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/54.RESTful%E6%9E%B6%E6%9E%84%E5%92%8CDRF%E5%85%A5%E9%97%A8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"RESTful架构和DRF入门","slug":"restful架构和drf入门","link":"#restful架构和drf入门","children":[{"level":3,"title":"REST概述","slug":"rest概述","link":"#rest概述","children":[]},{"level":3,"title":"DRF使用入门","slug":"drf使用入门","link":"#drf使用入门","children":[]},{"level":3,"title":"前后端分离下的用户登录","slug":"前后端分离下的用户登录","link":"#前后端分离下的用户登录","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/54.RESTful架构和DRF入门.md"}');export{u as comp,m as data};
