import{_ as s,c as n,o as e,b as a}from"./app-CgltcQVY.js";const l="/docs/assets/echarts_bar_graph-Dkh-qZxP.png",i={},t=a(`<h2 id="制作报表" tabindex="-1"><a class="header-anchor" href="#制作报表"><span>制作报表</span></a></h2><h3 id="导出excel报表" tabindex="-1"><a class="header-anchor" href="#导出excel报表"><span>导出Excel报表</span></a></h3><p>报表就是用表格、图表等格式来动态显示数据，所以有人用这样的公式来描述报表：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">报表 = 多样的格式 + 动态的数据</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>有很多的三方库支持在Python程序中写Excel文件，包括<a href="https://xlwt.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"><code>xlwt</code></a>、<a href="https://docs.xlwings.org/en/latest/quickstart.html" target="_blank" rel="noopener noreferrer"><code>xlwings</code></a>、<a href="https://openpyxl.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"><code>openpyxl</code></a>、<a href="https://xlsxwriter.readthedocs.io/" target="_blank" rel="noopener noreferrer"><code>xlswriter</code></a>等，其中的xlwt虽然只支持写xls格式的Excel文件，但在性能方面的表现还是不错的。下面我们就以<code>xlwt</code>为例，来演示如何在Django项目中导出Excel报表。</p><p>安装<code>xlwt</code>。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install xlwt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导出包含所有老师信息的Excel表格的视图函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def export_teachers_excel(request):</span>
<span class="line">    # 创建工作簿</span>
<span class="line">    wb = xlwt.Workbook()</span>
<span class="line">    # 添加工作表</span>
<span class="line">    sheet = wb.add_sheet(&#39;老师信息表&#39;)</span>
<span class="line">    # 查询所有老师的信息</span>
<span class="line">    queryset = Teacher.objects.all()</span>
<span class="line">    # 向Excel表单中写入表头</span>
<span class="line">    colnames = (&#39;姓名&#39;, &#39;介绍&#39;, &#39;好评数&#39;, &#39;差评数&#39;, &#39;学科&#39;)</span>
<span class="line">    for index, name in enumerate(colnames):</span>
<span class="line">        sheet.write(0, index, name)</span>
<span class="line">    # 向单元格中写入老师的数据</span>
<span class="line">    props = (&#39;name&#39;, &#39;detail&#39;, &#39;good_count&#39;, &#39;bad_count&#39;, &#39;subject&#39;)</span>
<span class="line">    for row, teacher in enumerate(queryset):</span>
<span class="line">        for col, prop in enumerate(props):</span>
<span class="line">            value = getattr(teacher, prop, &#39;&#39;)</span>
<span class="line">            if isinstance(value, Subject):</span>
<span class="line">                value = value.name</span>
<span class="line">            sheet.write(row + 1, col, value)</span>
<span class="line">    # 保存Excel</span>
<span class="line">    buffer = BytesIO()</span>
<span class="line">    wb.save(buffer)</span>
<span class="line">    # 将二进制数据写入响应的消息体中并设置MIME类型</span>
<span class="line">    resp = HttpResponse(buffer.getvalue(), content_type=&#39;application/vnd.ms-excel&#39;)</span>
<span class="line">    # 中文文件名需要处理成百分号编码</span>
<span class="line">    filename = quote(&#39;老师.xls&#39;)</span>
<span class="line">    # 通过响应头告知浏览器下载该文件以及对应的文件名</span>
<span class="line">    resp[&#39;content-disposition&#39;] = f&#39;attachment; filename*=utf-8\\&#39;\\&#39;{filename}&#39;</span>
<span class="line">    return resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>映射URL。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    </span>
<span class="line">    path(&#39;excel/&#39;, views.export_teachers_excel),</span>
<span class="line">    </span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出pdf报表" tabindex="-1"><a class="header-anchor" href="#导出pdf报表"><span>导出PDF报表</span></a></h3><p>在Django项目中，如果需要导出PDF报表，可以借助三方库<code>reportlab</code>来生成PDF文件的内容，再将文件的二进制数据输出给浏览器并指定MIME类型为<code>application/pdf</code>，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def export_pdf(request: HttpRequest) -&gt; HttpResponse:</span>
<span class="line">    buffer = io.BytesIO()</span>
<span class="line">    pdf = canvas.Canvas(buffer)</span>
<span class="line">    pdf.setFont(&quot;Helvetica&quot;, 80)</span>
<span class="line">    pdf.setFillColorRGB(0.2, 0.5, 0.3)</span>
<span class="line">    pdf.drawString(100, 550, &#39;hello, world!&#39;)</span>
<span class="line">    pdf.showPage()</span>
<span class="line">    pdf.save()</span>
<span class="line">    resp = HttpResponse(buffer.getvalue(), content_type=&#39;application/pdf&#39;)</span>
<span class="line">    resp[&#39;content-disposition&#39;] = &#39;inline; filename=&quot;demo.pdf&quot;&#39;</span>
<span class="line">    return resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于如何用<code>reportlab</code>定制PDF报表的内容，可以参考reportlab的<a href="https://www.reportlab.com/docs/reportlab-userguide.pdf" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><h3 id="生成前端统计图表" tabindex="-1"><a class="header-anchor" href="#生成前端统计图表"><span>生成前端统计图表</span></a></h3><p>如果项目中需要生成前端统计图表，可以使用百度的<a href="https://echarts.baidu.com/" target="_blank" rel="noopener noreferrer">ECharts</a>。具体的做法是后端通过提供数据接口返回统计图表所需的数据，前端使用ECharts来渲染出柱状图、折线图、饼图、散点图等图表。例如我们要生成一个统计所有老师好评数和差评数的报表，可以按照下面的方式来做。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def get_teachers_data(request):</span>
<span class="line">    queryset = Teacher.objects.all()</span>
<span class="line">    names = [teacher.name for teacher in queryset]</span>
<span class="line">    good_counts = [teacher.good_count for teacher in queryset]</span>
<span class="line">    bad_counts = [teacher.bad_count for teacher in queryset]</span>
<span class="line">    return JsonResponse({&#39;names&#39;: names, &#39;good&#39;: good_counts, &#39;bad&#39;: bad_counts})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>映射URL。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">urlpatterns = [</span>
<span class="line">    path(&#39;teachers_data/&#39;, views.get_teachers_data),</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用ECharts生成柱状图。</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;老师评价统计&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div id=&quot;main&quot; style=&quot;width: 600px; height: 400px&quot;&gt;&lt;/div&gt;</span>
<span class="line">    &lt;p&gt;</span>
<span class="line">        &lt;a href=&quot;/&quot;&gt;返回首页&lt;/a&gt;</span>
<span class="line">    &lt;/p&gt;</span>
<span class="line">    &lt;script src=&quot;https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        var myChart = echarts.init(document.querySelector(&#39;#main&#39;))</span>
<span class="line">        fetch(&#39;/teachers_data/&#39;)</span>
<span class="line">            .then(resp =&gt; resp.json())</span>
<span class="line">            .then(json =&gt; {</span>
<span class="line">                var option = {</span>
<span class="line">                    color: [&#39;#f00&#39;, &#39;#00f&#39;],</span>
<span class="line">                    title: {</span>
<span class="line">                        text: &#39;老师评价统计图&#39;</span>
<span class="line">                    },</span>
<span class="line">                    tooltip: {},</span>
<span class="line">                    legend: {</span>
<span class="line">                        data:[&#39;好评&#39;, &#39;差评&#39;]</span>
<span class="line">                    },</span>
<span class="line">                    xAxis: {</span>
<span class="line">                        data: json.names</span>
<span class="line">                    },</span>
<span class="line">                    yAxis: {},</span>
<span class="line">                    series: [</span>
<span class="line">                        {</span>
<span class="line">                            name: &#39;好评&#39;,</span>
<span class="line">                            type: &#39;bar&#39;,</span>
<span class="line">                            data: json.good</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: &#39;差评&#39;,</span>
<span class="line">                            type: &#39;bar&#39;,</span>
<span class="line">                            data: json.bad</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                }</span>
<span class="line">                myChart.setOption(option)</span>
<span class="line">            })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如下图所示。</p><p><img src="`+l+'" alt=""></p>',24),d=[t];function c(r,p){return e(),n("div",null,d)}const o=s(i,[["render",c],["__file","50.制作报表.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day46-60/50.%E5%88%B6%E4%BD%9C%E6%8A%A5%E8%A1%A8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"制作报表","slug":"制作报表","link":"#制作报表","children":[{"level":3,"title":"导出Excel报表","slug":"导出excel报表","link":"#导出excel报表","children":[]},{"level":3,"title":"导出PDF报表","slug":"导出pdf报表","link":"#导出pdf报表","children":[]},{"level":3,"title":"生成前端统计图表","slug":"生成前端统计图表","link":"#生成前端统计图表","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day46-60/50.制作报表.md"}');export{o as comp,u as data};
