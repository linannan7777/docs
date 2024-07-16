import{_ as s,c as n,o as e,d as a}from"./app-CzcyFXHz.js";const l={},i=a(`<h2 id="前后端分离开发入门" tabindex="-1"><a class="header-anchor" href="#前后端分离开发入门"><span>前后端分离开发入门</span></a></h2><p>在传统的Web应用开发中，大多数的程序员会将浏览器作为前后端的分界线。将浏览器中为用户进行页面展示的部分称之为前端，而将运行在服务器为前端提供业务逻辑和数据准备的所有代码统称为后端。所谓前后端分离的开发，就是前后端工程师约定好数据交互接口，并行的进行开发和测试，后端只提供数据，不负责将数据渲染到页面上，前端通过HTTP请求获取数据并负责将数据渲染到页面上，这个工作是交给浏览器中的JavaScript代码来完成。</p><p>使用前后端分离开发有诸多的好处，下面我们简要的说下这些好处：</p><ol><li><strong>提升开发效率</strong>。前后端分离以后，可以实现前后端代码的解耦，只要前后端沟通约定好应用所需接口以及接口参数，便可以开始并行开发，无需等待对方的开发工作结束。在这种情况下，前后端工程师都可以只专注于自己的开发工作，有助于打造出更好的团队。除此之外，在前后端分离的开发模式下，即使需求发生变更，只要接口与数据格式不变，后端开发人员就不需要修改代码，只要前端进行变动即可。</li><li><strong>增强代码的可维护性</strong>。前后端分离后，应用的代码不再是前后端混合，只有在运行期才会有调用依赖关系，这样的话维护代码的工作将变得轻松愉快很多，再不会牵一发而动全身。当你的代码变得简明且整洁时，代码的可读性和可维护性都会有质的提升。</li><li><strong>支持多终端和服务化架构</strong>。前后端分离后，同一套数据接口可以为不同的终端提供服务，更有助于打造多终端应用；此外，由于后端提供的接口之间可以通过HTTP(S)进行调用，有助于打造服务化架构（包括微服务）。</li></ol><p>接下来我们就用前后端分离的方式来改写之前的投票应用。</p><h3 id="返回json格式的数据" tabindex="-1"><a class="header-anchor" href="#返回json格式的数据"><span>返回JSON格式的数据</span></a></h3><p>刚才说过，在前后端分离的开发模式下，后端需要为前端提供数据接口，这些接口通常返回JSON格式的数据。在Django项目中，我们可以先将对象处理成字典，然后就可以利用Django封装的<code>JsonResponse</code>向浏览器返回JSON格式的数据，具体的做法如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def show_subjects(request):</span>
<span class="line">    queryset = Subject.objects.all()</span>
<span class="line">    subjects = []</span>
<span class="line">    for subject in queryset:</span>
<span class="line">        subjects.append({</span>
<span class="line">            &#39;no&#39;: subject.no,</span>
<span class="line">            &#39;name&#39;: subject.name,</span>
<span class="line">            &#39;intro&#39;: subject.intro,</span>
<span class="line">            &#39;isHot&#39;: subject.is_hot</span>
<span class="line">        })</span>
<span class="line">    return JsonResponse(subjects, safe=False)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们通过循环遍历查询学科得到的<code>QuerySet</code>对象，将每个学科的数据处理成一个字典，在将字典保存在名为<code>subjects</code>的列表容器中，最后利用<code>JsonResponse</code>完成对列表的序列化，向浏览器返回JSON格式的数据。由于<code>JsonResponse</code>序列化的是一个列表而不是字典，所以需要指定<code>safe</code>参数的值为<code>False</code>才能完成对<code>subjects</code>的序列化，否则会产生<code>TypeError</code>异常。</p><p>可能大家已经发现了，自己写代码将一个对象转成字典是比较麻烦的，如果对象的属性很多而且某些属性又关联到一个比较复杂的对象时，情况会变得更加糟糕。为此我们可以使用一个名为<code>bpmappers</code>的三方库来简化将对象转成字典的操作，这个三方库本身也提供了对Django框架的支持。</p><p>安装三方库<code>bpmappers</code>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install bpmappers</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编写映射器（实现对象到字典转换）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from bpmappers.djangomodel import ModelMapper</span>
<span class="line"></span>
<span class="line">from poll2.models import Subject</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectMapper(ModelMapper):</span>
<span class="line">   </span>
<span class="line">    class Meta:</span>
<span class="line">        model = Subject</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改视图函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def show_subjects(request):</span>
<span class="line">    queryset = Subject.objects.all()</span>
<span class="line">    subjects = []</span>
<span class="line">    for subject in queryset:</span>
<span class="line">        subjects.append(SubjectMapper(subject).as_dict())</span>
<span class="line">    return JsonResponse(subjects, safe=False)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置URL映射。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    </span>
<span class="line">    path(&#39;api/subjects/&#39;, show_subjects),</span>
<span class="line">    </span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后访问该接口，可以得到如下所示的JSON格式数据。</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;no&quot;: 1,</span>
<span class="line">        &quot;name&quot;: &quot;Python全栈+人工智能&quot;,</span>
<span class="line">        &quot;intro&quot;: &quot;Python是一种计算机程序设计语言。是一种面向对象的动态类型语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、大型项目的开发。&quot;,</span>
<span class="line">        &quot;is_hot&quot;: true</span>
<span class="line">    },</span>
<span class="line">    // 此处省略下面的内容</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不希望在JSON数据中显示学科的成立时间，我们可以在映射器中排除<code>create_date</code>属性；如果希望将是否为热门学科对应的键取名为<code>isHot</code>（默认的名字是<code>is_hot</code>），也可以通过修改映射器来做到。具体的做法如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from bpmappers import RawField</span>
<span class="line">from bpmappers.djangomodel import ModelMapper</span>
<span class="line"></span>
<span class="line">from poll2.models import Subject</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectMapper(ModelMapper):</span>
<span class="line">    isHot = RawField(&#39;is_hot&#39;)</span>
<span class="line"></span>
<span class="line">    class Meta:</span>
<span class="line">        model = Subject</span>
<span class="line">        exclude = (&#39;is_hot&#39;, )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看学科接口返回的JSON数据。</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;no&quot;: 101,</span>
<span class="line">        &quot;name&quot;: &quot;Python全栈+人工智能&quot;,</span>
<span class="line">        &quot;intro&quot;: &quot;Python是一种计算机程序设计语言。是一种面向对象的动态类型语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、大型项目的开发。&quot;,</span>
<span class="line">        &quot;isHot&quot;: true</span>
<span class="line">    },</span>
<span class="line">    // 此处省略下面的内容</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>bpmappers</code>详细的使用指南，请参考它的<a href="https://bpmappers.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">官方文档</a>，这个官方文档是用日语书写的，可以使用浏览器的翻译功能将它翻译成你熟悉的语言即可。</p><h3 id="使用vue-js渲染页面" tabindex="-1"><a class="header-anchor" href="#使用vue-js渲染页面"><span>使用Vue.js渲染页面</span></a></h3><p>接下来我们通过前端框架Vue.js来实现页面的渲染。如果希望全面的了解和学习Vue.js，建议阅读它的<a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">官方教程</a>或者在<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>上搜索Vue.js的新手教程（Vue.js Crash Course）进行学习。</p><p>重新改写subjects.html页面，使用Vue.js来渲染页面。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;学科信息&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">		/* 此处省略层叠样式表 */</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;container&quot;&gt;</span>
<span class="line">        &lt;h1&gt;扣丁学堂所有学科&lt;/h1&gt;</span>
<span class="line">        &lt;hr&gt;</span>
<span class="line">        &lt;div id=&quot;main&quot;&gt;</span>
<span class="line">            &lt;dl v-for=&quot;subject in subjects&quot;&gt;</span>
<span class="line">                &lt;dt&gt;</span>
<span class="line">                    &lt;a :href=&quot;&#39;/static/html/teachers.html?sno=&#39; + subject.no&quot;&gt;</span>
<span class="line">                        {{ subject.name }}</span>
<span class="line">                    &lt;/a&gt;</span>
<span class="line">                    &lt;img v-if=&quot;subject.is_hot&quot; src=&quot;/static/images/hot-icon-small.png&quot;&gt;</span>
<span class="line">                &lt;/dt&gt;</span>
<span class="line">                &lt;dd&gt;{{ subject.intro }}&lt;/dd&gt;</span>
<span class="line">            &lt;/dl&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        let app = new Vue({</span>
<span class="line">            el: &#39;#main&#39;,</span>
<span class="line">            data: {</span>
<span class="line">                subjects: []</span>
<span class="line">            },</span>
<span class="line">            created() {</span>
<span class="line">                fetch(&#39;/api/subjects/&#39;)</span>
<span class="line">                    .then(resp =&gt; resp.json())</span>
<span class="line">                    .then(json =&gt; {</span>
<span class="line">                        this.subjects = json</span>
<span class="line">                    })</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前后端分离的开发需要将前端页面作为静态资源进行部署，项目实际上线的时候，我们会对整个Web应用进行动静分离，静态资源通过Nginx或Apache服务器进行部署，生成动态内容的Python程序部署在uWSGI或者Gunicorn服务器上，对动态内容的请求由Nginx或Apache路由到uWSGI或Gunicorn服务器上。</p><p>在开发阶段，我们通常会使用Django自带的测试服务器，如果要尝试前后端分离，可以先将静态页面放在之前创建的放静态资源的目录下，具体的做法可以参考<a href="https://gitee.com/jackfrued/django19062" target="_blank" rel="noopener noreferrer">项目完整代码</a>。</p>`,31),t=[i];function d(c,p){return e(),n("div",null,t)}const u=s(l,[["render",d],["__file","53.前后端分离开发入门.html.vue"]]),o=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/53.%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"前后端分离开发入门","slug":"前后端分离开发入门","link":"#前后端分离开发入门","children":[{"level":3,"title":"返回JSON格式的数据","slug":"返回json格式的数据","link":"#返回json格式的数据","children":[]},{"level":3,"title":"使用Vue.js渲染页面","slug":"使用vue-js渲染页面","link":"#使用vue-js渲染页面","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/53.前后端分离开发入门.md"}');export{u as comp,o as data};
