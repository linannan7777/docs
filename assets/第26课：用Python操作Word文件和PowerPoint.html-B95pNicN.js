import{_ as n,c as s,o as e,b as a}from"./app-CgltcQVY.js";const i="/docs/assets/20210820002742-Bx8_PfVU.png",l="/docs/assets/20210820002843-DnPePSGz.png",d="/docs/assets/20210820004223--ZOpJlmM.png",p="/docs/assets/20210820004825-7fo3MTCu.png",c="/docs/assets/20210820010306-cmb8DcEY.png",r={},t=a(`<h2 id="第26课-用python操作word和powerpoint" tabindex="-1"><a class="header-anchor" href="#第26课-用python操作word和powerpoint"><span>第26课：用Python操作Word和PowerPoint</span></a></h2><p>在日常工作中，有很多简单重复的劳动其实完全可以交给Python程序，比如根据样板文件（模板文件）批量的生成很多个Word文件或PowerPoint文件。Word是微软公司开发的文字处理程序，相信大家都不陌生，日常办公中很多正式的文档都是用Word进行撰写和编辑的，目前使用的Word文件后缀名一般为<code>.docx</code>。PowerPoint是微软公司开发的演示文稿程序，是微软的Office系列软件中的一员，被商业人士、教师、学生等群体广泛使用，通常也将其称之为“幻灯片”。在Python中，可以使用名为<code>python-docx</code> 的三方库来操作Word，可以使用名为<code>python-pptx</code>的三方库来生成PowerPoint。</p><h3 id="操作word文档" tabindex="-1"><a class="header-anchor" href="#操作word文档"><span>操作Word文档</span></a></h3><p>我们可以先通过下面的命令来安装<code>python-docx</code>三方库。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">pip <span class="token function">install</span> python-docx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>按照<a href="https://python-docx.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">官方文档</a>的介绍，我们可以使用如下所示的代码来生成一个简单的Word文档。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from docx import Document</span>
<span class="line">from docx.shared import Cm, Pt</span>
<span class="line"></span>
<span class="line">from docx.document import Document as Doc</span>
<span class="line"></span>
<span class="line"># 创建代表Word文档的Doc对象</span>
<span class="line">document = Document()  # type: Doc</span>
<span class="line"># 添加大标题</span>
<span class="line">document.add_heading(&#39;快快乐乐学Python&#39;, 0)</span>
<span class="line"># 添加段落</span>
<span class="line">p = document.add_paragraph(&#39;Python是一门非常流行的编程语言，它&#39;)</span>
<span class="line">run = p.add_run(&#39;简单&#39;)</span>
<span class="line">run.bold = True</span>
<span class="line">run.font.size = Pt(18)</span>
<span class="line">p.add_run(&#39;而且&#39;)</span>
<span class="line">run = p.add_run(&#39;优雅&#39;)</span>
<span class="line">run.font.size = Pt(18)</span>
<span class="line">run.underline = True</span>
<span class="line">p.add_run(&#39;。&#39;)</span>
<span class="line"></span>
<span class="line"># 添加一级标题</span>
<span class="line">document.add_heading(&#39;Heading, level 1&#39;, level=1)</span>
<span class="line"># 添加带样式的段落</span>
<span class="line">document.add_paragraph(&#39;Intense quote&#39;, style=&#39;Intense Quote&#39;)</span>
<span class="line"># 添加无序列表</span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;first item in unordered list&#39;, style=&#39;List Bullet&#39;</span>
<span class="line">)</span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;second item in ordered list&#39;, style=&#39;List Bullet&#39;</span>
<span class="line">)</span>
<span class="line"># 添加有序列表</span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;first item in ordered list&#39;, style=&#39;List Number&#39;</span>
<span class="line">)</span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;second item in ordered list&#39;, style=&#39;List Number&#39;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># 添加图片（注意路径和图片必须要存在）</span>
<span class="line">document.add_picture(&#39;resources/guido.jpg&#39;, width=Cm(5.2))</span>
<span class="line"></span>
<span class="line"># 添加分节符</span>
<span class="line">document.add_section()</span>
<span class="line"></span>
<span class="line">records = (</span>
<span class="line">    (&#39;骆昊&#39;, &#39;男&#39;, &#39;1995-5-5&#39;),</span>
<span class="line">    (&#39;孙美丽&#39;, &#39;女&#39;, &#39;1992-2-2&#39;)</span>
<span class="line">)</span>
<span class="line"># 添加表格</span>
<span class="line">table = document.add_table(rows=1, cols=3)</span>
<span class="line">table.style = &#39;Dark List&#39;</span>
<span class="line">hdr_cells = table.rows[0].cells</span>
<span class="line">hdr_cells[0].text = &#39;姓名&#39;</span>
<span class="line">hdr_cells[1].text = &#39;性别&#39;</span>
<span class="line">hdr_cells[2].text = &#39;出生日期&#39;</span>
<span class="line"># 为表格添加行</span>
<span class="line">for name, sex, birthday in records:</span>
<span class="line">    row_cells = table.add_row().cells</span>
<span class="line">    row_cells[0].text = name</span>
<span class="line">    row_cells[1].text = sex</span>
<span class="line">    row_cells[2].text = birthday</span>
<span class="line"></span>
<span class="line"># 添加分页符</span>
<span class="line">document.add_page_break()</span>
<span class="line"></span>
<span class="line"># 保存文档</span>
<span class="line">document.save(&#39;demo.docx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面代码第7行中的注释<code># type: Doc</code>是为了在PyCharm中获得代码补全提示，因为如果不清楚对象具体的数据类型，PyCharm无法在后续代码中给出<code>Doc</code>对象的代码补全提示。</p></blockquote><p>执行上面的代码，打开生成的Word文档，效果如下图所示。</p><p><img src="`+i+'" alt="image-20210820002742341" width="40%">  <img src="'+l+`" alt="image-20210820002843696" width="40%"></p><p>对于一个已经存在的Word文件，我们可以通过下面的代码去遍历它所有的段落并获取对应的内容。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from docx import Document</span>
<span class="line">from docx.document import Document as Doc</span>
<span class="line"></span>
<span class="line">doc = Document(&#39;resources/离职证明.docx&#39;)  # type: Doc</span>
<span class="line">for no, p in enumerate(doc.paragraphs):</span>
<span class="line">    print(no, p.text)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：如果需要上面代码中的Word文件，可以通过下面的百度云盘地址进行获取。链接:https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g 提取码:e7b4。</p></blockquote><p>读取到的内容如下所示。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0 </span>
<span class="line">1 离 职 证 明</span>
<span class="line">2 </span>
<span class="line">3 兹证明 王大锤 ，身份证号码： 100200199512120001 ，于 2018 年 8 月 7 日至 2020 年 6 月 28 日在我单位  开发部 部门担任 Java开发工程师 职务，在职期间无不良表现。因 个人 原因，于 2020 年 6 月 28 日起终止解除劳动合同。现已结清财务相关费用，办理完解除劳动关系相关手续，双方不存在任何劳动争议。</span>
<span class="line">4 </span>
<span class="line">5 特此证明！</span>
<span class="line">6 </span>
<span class="line">7 </span>
<span class="line">8 公司名称（盖章）:成都风车车科技有限公司</span>
<span class="line">9    			2020 年 6 月 28 日</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>讲到这里，相信很多读者已经想到了，我们可以把上面的离职证明制作成一个模板文件，把姓名、身份证号、入职和离职日期等信息用占位符代替，这样通过对占位符的替换，就可以根据实际需要写入对应的信息，这样就可以批量的生成Word文档。</p><p>按照上面的思路，我们首先编辑一个离职证明的模板文件，如下图所示。</p><img src="`+d+`" alt="image-20210820004223731" width="75%" style="border:1px solid black;"><p>接下来我们读取该文件，将占位符替换为真实信息，就可以生成一个新的Word文档，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from docx import Document</span>
<span class="line">from docx.document import Document as Doc</span>
<span class="line"></span>
<span class="line"># 将真实信息用字典的方式保存在列表中</span>
<span class="line">employees = [</span>
<span class="line">    {</span>
<span class="line">        &#39;name&#39;: &#39;骆昊&#39;,</span>
<span class="line">        &#39;id&#39;: &#39;100200198011280001&#39;,</span>
<span class="line">        &#39;sdate&#39;: &#39;2008年3月1日&#39;,</span>
<span class="line">        &#39;edate&#39;: &#39;2012年2月29日&#39;,</span>
<span class="line">        &#39;department&#39;: &#39;产品研发&#39;,</span>
<span class="line">        &#39;position&#39;: &#39;架构师&#39;,</span>
<span class="line">        &#39;company&#39;: &#39;成都华为技术有限公司&#39;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &#39;name&#39;: &#39;王大锤&#39;,</span>
<span class="line">        &#39;id&#39;: &#39;510210199012125566&#39;,</span>
<span class="line">        &#39;sdate&#39;: &#39;2019年1月1日&#39;,</span>
<span class="line">        &#39;edate&#39;: &#39;2021年4月30日&#39;,</span>
<span class="line">        &#39;department&#39;: &#39;产品研发&#39;,</span>
<span class="line">        &#39;position&#39;: &#39;Python开发工程师&#39;,</span>
<span class="line">        &#39;company&#39;: &#39;成都谷道科技有限公司&#39;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &#39;name&#39;: &#39;李元芳&#39;,</span>
<span class="line">        &#39;id&#39;: &#39;2102101995103221599&#39;,</span>
<span class="line">        &#39;sdate&#39;: &#39;2020年5月10日&#39;,</span>
<span class="line">        &#39;edate&#39;: &#39;2021年3月5日&#39;,</span>
<span class="line">        &#39;department&#39;: &#39;产品研发&#39;,</span>
<span class="line">        &#39;position&#39;: &#39;Java开发工程师&#39;,</span>
<span class="line">        &#39;company&#39;: &#39;同城企业管理集团有限公司&#39;</span>
<span class="line">    },</span>
<span class="line">]</span>
<span class="line"># 对列表进行循环遍历，批量生成Word文档 </span>
<span class="line">for emp_dict in employees:</span>
<span class="line">    # 读取离职证明模板文件</span>
<span class="line">    doc = Document(&#39;resources/离职证明模板.docx&#39;)  # type: Doc</span>
<span class="line">    # 循环遍历所有段落寻找占位符</span>
<span class="line">    for p in doc.paragraphs:</span>
<span class="line">        if &#39;{&#39; not in p.text:</span>
<span class="line">            continue</span>
<span class="line">        # 不能直接修改段落内容，否则会丢失样式</span>
<span class="line">        # 所以需要对段落中的元素进行遍历并进行查找替换</span>
<span class="line">        for run in p.runs:</span>
<span class="line">            if &#39;{&#39; not in run.text:</span>
<span class="line">                continue</span>
<span class="line">            # 将占位符换成实际内容</span>
<span class="line">            start, end = run.text.find(&#39;{&#39;), run.text.find(&#39;}&#39;)</span>
<span class="line">            key, place_holder = run.text[start + 1:end], run.text[start:end + 1]</span>
<span class="line">            run.text = run.text.replace(place_holder, emp_dict[key])</span>
<span class="line">    # 每个人对应保存一个Word文档</span>
<span class="line">    doc.save(f&#39;{emp_dict[&quot;name&quot;]}离职证明.docx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码，会在当前路径下生成三个Word文档，如下图所示。</p><img src="`+p+`" alt="image-20210820004825183" width="50%"><h3 id="生成powerpoint" tabindex="-1"><a class="header-anchor" href="#生成powerpoint"><span>生成PowerPoint</span></a></h3><p>首先我们需要安装名为<code>python-pptx</code>的三方库，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install python-pptx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用Python操作PowerPoint的内容，因为实际应用场景不算很多，我不打算在这里进行赘述，有兴趣的读者可以自行阅读<code>python-pptx</code>的<a href="https://python-pptx.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">官方文档</a>，下面仅展示一段来自于官方文档的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from pptx import Presentation</span>
<span class="line"></span>
<span class="line"># 创建幻灯片对象</span>
<span class="line">pres = Presentation()</span>
<span class="line"></span>
<span class="line"># 选择母版添加一页</span>
<span class="line">title_slide_layout = pres.slide_layouts[0]</span>
<span class="line">slide = pres.slides.add_slide(title_slide_layout)</span>
<span class="line"># 获取标题栏和副标题栏</span>
<span class="line">title = slide.shapes.title</span>
<span class="line">subtitle = slide.placeholders[1]</span>
<span class="line"># 编辑标题和副标题</span>
<span class="line">title.text = &quot;Welcome to Python&quot;</span>
<span class="line">subtitle.text = &quot;Life is short, I use Python&quot;</span>
<span class="line"></span>
<span class="line"># 选择母版添加一页</span>
<span class="line">bullet_slide_layout = pres.slide_layouts[1]</span>
<span class="line">slide = pres.slides.add_slide(bullet_slide_layout)</span>
<span class="line"># 获取页面上所有形状</span>
<span class="line">shapes = slide.shapes</span>
<span class="line"># 获取标题和主体</span>
<span class="line">title_shape = shapes.title</span>
<span class="line">body_shape = shapes.placeholders[1]</span>
<span class="line"># 编辑标题</span>
<span class="line">title_shape.text = &#39;Introduction&#39;</span>
<span class="line"># 编辑主体内容</span>
<span class="line">tf = body_shape.text_frame</span>
<span class="line">tf.text = &#39;History of Python&#39;</span>
<span class="line"># 添加一个一级段落</span>
<span class="line">p = tf.add_paragraph()</span>
<span class="line">p.text = &#39;X\\&#39;max 1989&#39;</span>
<span class="line">p.level = 1</span>
<span class="line"># 添加一个二级段落</span>
<span class="line">p = tf.add_paragraph()</span>
<span class="line">p.text = &#39;Guido began to write interpreter for Python.&#39;</span>
<span class="line">p.level = 2</span>
<span class="line"></span>
<span class="line"># 保存幻灯片</span>
<span class="line">pres.save(&#39;test.pptx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，生成的PowerPoint文件如下图所示。</p><img src="`+c+'" alt="image-20210820010306008" width="75%"><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>用Python程序解决办公自动化的问题真的非常酷，它可以将我们从繁琐乏味的劳动中解放出来。写这类代码就是去做一件一劳永逸的事情，写代码的过程即便不怎么愉快，使用这些代码的时候应该是非常开心的。</p>',31),v=[t];function o(u,m){return e(),s("div",null,v)}const h=n(r,[["render",o],["__file","第26课：用Python操作Word文件和PowerPoint.html.vue"]]),_=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC26%E8%AF%BE%EF%BC%9A%E7%94%A8Python%E6%93%8D%E4%BD%9CWord%E6%96%87%E4%BB%B6%E5%92%8CPowerPoint.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第26课：用Python操作Word和PowerPoint","slug":"第26课-用python操作word和powerpoint","link":"#第26课-用python操作word和powerpoint","children":[{"level":3,"title":"操作Word文档","slug":"操作word文档","link":"#操作word文档","children":[]},{"level":3,"title":"生成PowerPoint","slug":"生成powerpoint","link":"#生成powerpoint","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720516588000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-Core-50-Courses/第26课：用Python操作Word文件和PowerPoint.md"}');export{h as comp,_ as data};
