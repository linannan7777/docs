import{_ as e,c as s,o as n,b as a}from"./app-CgltcQVY.js";const i={},l=a(`<h2 id="restful架构和drf进阶" tabindex="-1"><a class="header-anchor" href="#restful架构和drf进阶"><span>RESTful架构和DRF进阶</span></a></h2><p>除了上一节讲到的方法，使用DRF创建REST风格的数据接口也可以通过CBV（基于类的视图）的方式。使用CBV创建数据接口的特点是代码简单，开发效率高，但是没有FBV（基于函数的视图）灵活，因为使用FBV的方式，数据接口对应的视图函数执行什么样的代码以及返回什么的数据是高度可定制的。下面我们以定制学科的数据接口为例，讲解通过CBV方式定制数据接口的具体做法。</p><h3 id="使用cbv" tabindex="-1"><a class="header-anchor" href="#使用cbv"><span>使用CBV</span></a></h3><h4 id="继承apiview的子类" tabindex="-1"><a class="header-anchor" href="#继承apiview的子类"><span>继承APIView的子类</span></a></h4><p>修改之前项目中的<code>polls/views.py</code>，去掉<code>show_subjects</code>视图函数，添加一个名为<code>SubjectView</code>的类，该类继承自<code>ListAPIView</code>，<code>ListAPIView</code>能接收GET请求，它封装了获取数据列表并返回JSON数据的<code>get</code>方法。<code>ListAPIView</code>是<code>APIView</code> 的子类，<code>APIView</code>还有很多的子类，例如<code>CreateAPIView</code>可以支持POST请求，<code>UpdateAPIView</code>可以支持PUT和PATCH请求，<code>DestoryAPIView</code>可以支持DELETE请求。<code>SubjectView</code> 的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.generics import ListAPIView</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectView(ListAPIView):</span>
<span class="line">    # 通过queryset指定如何获取学科数据</span>
<span class="line">    queryset = Subject.objects.all()</span>
<span class="line">    # 通过serializer_class指定如何序列化学科数据</span>
<span class="line">    serializer_class = SubjectSerializer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刚才说过，由于<code>SubjectView</code>的父类<code>ListAPIView</code>已经实现了<code>get</code>方法来处理获取学科列表的GET请求，所以我们只需要声明如何获取学科数据以及如何序列化学科数据，前者用<code>queryset</code>属性指定，后者用<code>serializer_class</code>属性指定。要使用上面的<code>SubjectView</code>，需要修改<code>urls.py</code>文件，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;api/subjects/&#39;, SubjectView.as_view()),   </span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，上面的做法较之之前讲到的FBV要简单很多。</p><h4 id="继承modelviewset" tabindex="-1"><a class="header-anchor" href="#继承modelviewset"><span>继承ModelViewSet</span></a></h4><p>如果学科对应的数据接口需要支持GET、POST、PUT、PATCH、DELETE请求来支持对学科资源的获取、新增、更新、删除操作，更为简单的做法是继承<code>ModelViewSet</code>来编写学科视图类。再次修改<code>polls/views.py</code>文件，去掉<code>SubjectView</code>类，添加一个名为<code>SubjectViewSet</code>的类，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.viewsets import ModelViewSet</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class SubjectViewSet(ModelViewSet):</span>
<span class="line">    queryset = Subject.objects.all()</span>
<span class="line">    serializer_class = SubjectSerializer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过查看<code>ModelViewSet</code>类的源代码可以发现，该类共有6个父类，其中前5个父类分别实现对POST（新增学科）、GET（获取指定学科）、PUT/PATCH（更新学科）、DELETE（删除学科）和GET（获取学科列表）操作的支持，对应的方法分别是<code>create</code>、<code>retrieve</code>、<code>update</code>、<code>destroy</code>和<code>list</code>。由于<code>ModelViewSet</code>的父类中已经实现了这些方法，所以我们几乎没有编写任何代码就完成了学科数据全套接口的开发，我们要做的仅仅是指出如何获取到数据（通过<code>queryset</code>属性指定）以及如何序列化数据（通过<code>serializer_class</code>属性指定），这一点跟上面继承<code>APIView</code>的子类做法是一致的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class ModelViewSet(mixins.CreateModelMixin,</span>
<span class="line">                   mixins.RetrieveModelMixin,</span>
<span class="line">                   mixins.UpdateModelMixin,</span>
<span class="line">                   mixins.DestroyModelMixin,</span>
<span class="line">                   mixins.ListModelMixin,</span>
<span class="line">                   GenericViewSet):</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    A viewset that provides default \`create()\`, \`retrieve()\`, \`update()\`,</span>
<span class="line">    \`partial_update()\`, \`destroy()\` and \`list()\` actions.</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    pass</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要使用上面的<code>SubjectViewSet</code>，需要在<code>urls.py</code>文件中进行URL映射。由于<code>ModelViewSet</code>相当于是多个视图函数的汇总，所以不同于之前映射URL的方式，我们需要先创建一个路由器并通过它注册<code>SubjectViewSet</code>，然后将注册成功后生成的URL一并添加到<code>urlspattern</code>列表中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.routers import DefaultRouter</span>
<span class="line"></span>
<span class="line">router = DefaultRouter()</span>
<span class="line">router.register(&#39;api/subjects&#39;, SubjectViewSet)</span>
<span class="line">urlpatterns += router.urls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了<code>ModelViewSet</code>类外，DRF还提供了一个名为<code>ReadOnlyModelViewSet</code> 的类，从名字上就可以看出，该类是只读视图的集合，也就意味着，继承该类定制的数据接口只能支持GET请求，也就是获取单个资源和资源列表的请求。</p><h3 id="数据分页" tabindex="-1"><a class="header-anchor" href="#数据分页"><span>数据分页</span></a></h3><p>在使用GET请求获取资源列表时，我们通常不会一次性的加载所有的数据，除非数据量真的很小。大多数获取资源列表的操作都支持数据分页展示，也就说我们可以通过指定页码（或类似于页码的标识）和页面大小（一次加载多少条数据）来获取不同的数据。我们可以通过对<code>QuerySet</code>对象的切片操作来实现分页，也可以利用Django框架封装的<code>Paginator</code>和<code>Page</code>对象来实现分页。使用DRF时，可以在Django配置文件中修改<code>REST_FRAMEWORK</code>并配置默认的分页类和页面大小来实现分页，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">REST_FRAMEWORK = {</span>
<span class="line">    &#39;PAGE_SIZE&#39;: 10,</span>
<span class="line">    &#39;DEFAULT_PAGINATION_CLASS&#39;: &#39;rest_framework.pagination.PageNumberPagination&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面配置的<code>PageNumberPagination</code>分页器之外，DRF还提供了<code>LimitOffsetPagination</code>和<code>CursorPagination</code>分页器，值得一提的是<code>CursorPagination</code>，它可以避免使用页码分页时暴露网站的数据体量，有兴趣的读者可以自行了解。如果不希望使用配置文件中默认的分页设定，可以在视图类中添加一个<code>pagination_class</code>属性来重新指定分页器，通常可以将该属性指定为自定义的分页器，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from rest_framework.pagination import PageNumberPagination</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class CustomizedPagination(PageNumberPagination):</span>
<span class="line">    # 默认页面大小</span>
<span class="line">    page_size = 5</span>
<span class="line">    # 页面大小对应的查询参数</span>
<span class="line">    page_size_query_param = &#39;size&#39;</span>
<span class="line">    # 页面大小的最大值</span>
<span class="line">    max_page_size = 50</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class SubjectView(ListAPIView):</span>
<span class="line">    # 指定如何获取数据</span>
<span class="line">    queryset = Subject.objects.all()</span>
<span class="line">    # 指定如何序列化数据</span>
<span class="line">    serializer_class = SubjectSerializer</span>
<span class="line">    # 指定如何分页</span>
<span class="line">    pagination_class = CustomizedPagination</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不希望数据分页，可以将<code>pagination_class</code>属性设置为<code>None</code>来取消默认的分页器。</p><h3 id="数据筛选" tabindex="-1"><a class="header-anchor" href="#数据筛选"><span>数据筛选</span></a></h3><p>如果希望使用CBV定制获取老师信息的数据接口，也可以通过继承<code>ListAPIView</code>来实现。但是因为要通过指定的学科来获取对应的老师信息，因此需要对老师数据进行筛选而不是直接获取所有老师的数据。如果想从请求中获取学科编号并通过学科编号对老师进行筛选，可以通过重写<code>get_queryset</code>方法来做到，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class TeacherView(ListAPIView):</span>
<span class="line">    serializer_class = TeacherSerializer</span>
<span class="line"></span>
<span class="line">    def get_queryset(self):</span>
<span class="line">        queryset = Teacher.objects.defer(&#39;subject&#39;)</span>
<span class="line">        try:</span>
<span class="line">            sno = self.request.GET.get(&#39;sno&#39;, &#39;&#39;)</span>
<span class="line">            queryset = queryset.filter(subject__no=sno)</span>
<span class="line">            return queryset</span>
<span class="line">        except ValueError:</span>
<span class="line">            raise Http404(&#39;No teachers found.&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述方式之外，还可以使用三方库<code>django-filter</code>来配合DRF实现对数据的筛选，使用<code>django-filter</code>后，可以通过为视图类配置<code>filter-backends</code>属性并指定使用<code>DjangoFilterBackend</code>来支持数据筛选。在完成上述配置后，可以使用<code>filter_fields</code> 属性或<code>filterset_class</code>属性来指定如何筛选数据，有兴趣的读者可以自行研究。</p>`,28),d=[l];function c(t,r){return n(),s("div",null,d)}const p=e(i,[["render",c],["__file","55.RESTful架构和DRF进阶.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/55.RESTful%E6%9E%B6%E6%9E%84%E5%92%8CDRF%E8%BF%9B%E9%98%B6.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"RESTful架构和DRF进阶","slug":"restful架构和drf进阶","link":"#restful架构和drf进阶","children":[{"level":3,"title":"使用CBV","slug":"使用cbv","link":"#使用cbv","children":[]},{"level":3,"title":"数据分页","slug":"数据分页","link":"#数据分页","children":[]},{"level":3,"title":"数据筛选","slug":"数据筛选","link":"#数据筛选","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/55.RESTful架构和DRF进阶.md"}');export{p as comp,u as data};
