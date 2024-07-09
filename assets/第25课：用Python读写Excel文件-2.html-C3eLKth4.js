import{_ as n,c as s,o as e,d as l}from"./app-DnIfyyvW.js";const a="/docs/assets/20210819235009-Bt9oqTVD.png",i={},c=l(`<h2 id="第25课-用python读写excel文件-2" tabindex="-1"><a class="header-anchor" href="#第25课-用python读写excel文件-2"><span>第25课：用Python读写Excel文件-2</span></a></h2><h3 id="excel简介" tabindex="-1"><a class="header-anchor" href="#excel简介"><span>Excel简介</span></a></h3><p>Excel是Microsoft（微软）为使用Windows和macOS操作系统开发的一款电子表格软件。Excel凭借其直观的界面、出色的计算功能和图表工具，再加上成功的市场营销，一直以来都是最为流行的个人计算机数据处理软件。当然，Excel也有很多竞品，例如Google Sheets、LibreOffice Calc、Numbers等，这些竞品基本上也能够兼容Excel，至少能够读写较新版本的Excel文件，当然这些不是我们讨论的重点。掌握用Python程序操作Excel文件，可以让日常办公自动化的工作更加轻松愉快，而且在很多商业项目中，导入导出Excel文件都是特别常见的功能。</p><p>本章我们继续讲解基于另一个三方库<code>openpyxl</code>如何进行Excel文件操作，首先需要先安装它。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install openpyxl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>openpyxl</code>的优点在于，当我们打开一个Excel文件后，既可以对它进行读操作，又可以对它进行写操作，而且在操作的便捷性上是优于<code>xlwt</code>和<code>xlrd</code>的。此外，如果要进行样式编辑和公式计算，使用<code>openpyxl</code>也远比上一个章节我们讲解的方式更为简单，而且<code>openpyxl</code>还支持数据透视和插入图表等操作，功能非常强大。有一点需要再次强调，<code>openpyxl</code>并不支持操作Office 2007以前版本的Excel文件。</p><h3 id="读取excel文件" tabindex="-1"><a class="header-anchor" href="#读取excel文件"><span>读取Excel文件</span></a></h3><p>例如在当前文件夹下有一个名为“阿里巴巴2020年股票数据.xlsx”的Excel文件，如果想读取并显示该文件的内容，可以通过如下所示的代码来完成。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import datetime</span>
<span class="line"></span>
<span class="line">import openpyxl</span>
<span class="line"></span>
<span class="line"># 加载一个工作簿 ---&gt; Workbook</span>
<span class="line">wb = openpyxl.load_workbook(&#39;阿里巴巴2020年股票数据.xlsx&#39;)</span>
<span class="line"># 获取工作表的名字</span>
<span class="line">print(wb.sheetnames)</span>
<span class="line"># 获取工作表 ---&gt; Worksheet</span>
<span class="line">sheet = wb.worksheets[0]</span>
<span class="line"># 获得单元格的范围</span>
<span class="line">print(sheet.dimensions)</span>
<span class="line"># 获得行数和列数</span>
<span class="line">print(sheet.max_row, sheet.max_column)</span>
<span class="line"></span>
<span class="line"># 获取指定单元格的值</span>
<span class="line">print(sheet.cell(3, 3).value)</span>
<span class="line">print(sheet[&#39;C3&#39;].value)</span>
<span class="line">print(sheet[&#39;G255&#39;].value)</span>
<span class="line"></span>
<span class="line"># 获取多个单元格（嵌套元组）</span>
<span class="line">print(sheet[&#39;A2:C5&#39;])</span>
<span class="line"></span>
<span class="line"># 读取所有单元格的数据</span>
<span class="line">for row_ch in range(2, sheet.max_row + 1):</span>
<span class="line">    for col_ch in &#39;ABCDEFG&#39;:</span>
<span class="line">        value = sheet[f&#39;{col_ch}{row_ch}&#39;].value</span>
<span class="line">        if type(value) == datetime.datetime:</span>
<span class="line">            print(value.strftime(&#39;%Y年%m月%d日&#39;), end=&#39;\\t&#39;)</span>
<span class="line">        elif type(value) == int:</span>
<span class="line">            print(f&#39;{value:&lt;10d}&#39;, end=&#39;\\t&#39;)</span>
<span class="line">        elif type(value) == float:</span>
<span class="line">            print(f&#39;{value:.4f}&#39;, end=&#39;\\t&#39;)</span>
<span class="line">        else:</span>
<span class="line">            print(value, end=&#39;\\t&#39;)</span>
<span class="line">    print()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面代码中使用的Excel文件“阿里巴巴2020年股票数据.xlsx”可以通过后面的百度云盘地址进行获取。链接:https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g 提取码:e7b4。</p></blockquote><p>需要提醒大家一点，<code>openpyxl</code>获取指定的单元格有两种方式，一种是通过<code>cell</code>方法，需要注意，该方法的行索引和列索引都是从<code>1</code>开始的，这是为了照顾用惯了Excel的人的习惯；另一种是通过索引运算，通过指定单元格的坐标，例如<code>C3</code>、<code>G255</code>，也可以取得对应的单元格，再通过单元格对象的<code>value</code>属性，就可以获取到单元格的值。通过上面的代码，相信大家还注意到了，可以通过类似<code>sheet[&#39;A2:C5&#39;]</code>或<code>sheet[&#39;A2&#39;:&#39;C5&#39;]</code>这样的切片操作获取多个单元格，该操作将返回嵌套的元组，相当于获取到了多行多列。</p><h3 id="写excel文件" tabindex="-1"><a class="header-anchor" href="#写excel文件"><span>写Excel文件</span></a></h3><p>下面我们使用<code>openpyxl</code>来进行写Excel操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line"></span>
<span class="line">import openpyxl</span>
<span class="line"></span>
<span class="line"># 第一步：创建工作簿（Workbook）</span>
<span class="line">wb = openpyxl.Workbook()</span>
<span class="line"></span>
<span class="line"># 第二步：添加工作表（Worksheet）</span>
<span class="line">sheet = wb.active</span>
<span class="line">sheet.title = &#39;期末成绩&#39;</span>
<span class="line"></span>
<span class="line">titles = (&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)</span>
<span class="line">for col_index, title in enumerate(titles):</span>
<span class="line">    sheet.cell(1, col_index + 1, title)</span>
<span class="line"></span>
<span class="line">names = (&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;)</span>
<span class="line">for row_index, name in enumerate(names):</span>
<span class="line">    sheet.cell(row_index + 2, 1, name)</span>
<span class="line">    for col_index in range(2, 5):</span>
<span class="line">        sheet.cell(row_index + 2, col_index, random.randrange(50, 101))</span>
<span class="line"></span>
<span class="line"># 第四步：保存工作簿</span>
<span class="line">wb.save(&#39;考试成绩表.xlsx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调整样式和公式计算" tabindex="-1"><a class="header-anchor" href="#调整样式和公式计算"><span>调整样式和公式计算</span></a></h4><p>在使用<code>openpyxl</code>操作Excel时，如果要调整单元格的样式，可以直接通过单元格对象（<code>Cell</code>对象）的属性进行操作。单元格对象的属性包括字体（<code>font</code>）、对齐（<code>alignment</code>）、边框（<code>border</code>）等，具体的可以参考<code>openpyxl</code>的<a href="https://openpyxl.readthedocs.io/en/stable/index.html" target="_blank" rel="noopener noreferrer">官方文档</a>。在使用<code>openpyxl</code>时，如果需要做公式计算，可以完全按照Excel中的操作方式来进行，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import openpyxl</span>
<span class="line">from openpyxl.styles import Font, Alignment, Border, Side</span>
<span class="line"></span>
<span class="line"># 对齐方式</span>
<span class="line">alignment = Alignment(horizontal=&#39;center&#39;, vertical=&#39;center&#39;)</span>
<span class="line"># 边框线条</span>
<span class="line">side = Side(color=&#39;ff7f50&#39;, style=&#39;mediumDashed&#39;)</span>
<span class="line"></span>
<span class="line">wb = openpyxl.load_workbook(&#39;考试成绩表.xlsx&#39;)</span>
<span class="line">sheet = wb.worksheets[0]</span>
<span class="line"></span>
<span class="line"># 调整行高和列宽</span>
<span class="line">sheet.row_dimensions[1].height = 30</span>
<span class="line">sheet.column_dimensions[&#39;E&#39;].width = 120</span>
<span class="line"></span>
<span class="line">sheet[&#39;E1&#39;] = &#39;平均分&#39;</span>
<span class="line"># 设置字体</span>
<span class="line">sheet.cell(1, 5).font = Font(size=18, bold=True, color=&#39;ff1493&#39;, name=&#39;华文楷体&#39;)</span>
<span class="line"># 设置对齐方式</span>
<span class="line">sheet.cell(1, 5).alignment = alignment</span>
<span class="line"># 设置单元格边框</span>
<span class="line">sheet.cell(1, 5).border = Border(left=side, top=side, right=side, bottom=side)</span>
<span class="line">for i in range(2, 7):</span>
<span class="line">    # 公式计算每个学生的平均分</span>
<span class="line">    sheet[f&#39;E{i}&#39;] = f&#39;=average(B{i}:D{i})&#39;</span>
<span class="line">    sheet.cell(i, 5).font = Font(size=12, color=&#39;4169e1&#39;, italic=True)</span>
<span class="line">    sheet.cell(i, 5).alignment = alignment</span>
<span class="line"></span>
<span class="line">wb.save(&#39;考试成绩表.xlsx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成统计图表" tabindex="-1"><a class="header-anchor" href="#生成统计图表"><span>生成统计图表</span></a></h3><p>通过<code>openpyxl</code>库，可以直接向Excel中插入统计图表，具体的做法跟在Excel中插入图表大体一致。我们可以创建指定类型的图表对象，然后通过该对象的属性对图表进行设置。当然，最为重要的是为图表绑定数据，即横轴代表什么，纵轴代表什么，具体的数值是多少。最后，可以将图表对象添加到表单中，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from openpyxl import Workbook</span>
<span class="line">from openpyxl.chart import BarChart, Reference</span>
<span class="line"></span>
<span class="line">wb = Workbook(write_only=True)</span>
<span class="line">sheet = wb.create_sheet()</span>
<span class="line"></span>
<span class="line">rows = [</span>
<span class="line">    (&#39;类别&#39;, &#39;销售A组&#39;, &#39;销售B组&#39;),</span>
<span class="line">    (&#39;手机&#39;, 40, 30),</span>
<span class="line">    (&#39;平板&#39;, 50, 60),</span>
<span class="line">    (&#39;笔记本&#39;, 80, 70),</span>
<span class="line">    (&#39;外围设备&#39;, 20, 10),</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"># 向表单中添加行</span>
<span class="line">for row in rows:</span>
<span class="line">    sheet.append(row)</span>
<span class="line"></span>
<span class="line"># 创建图表对象</span>
<span class="line">chart = BarChart()</span>
<span class="line">chart.type = &#39;col&#39;</span>
<span class="line">chart.style = 10</span>
<span class="line"># 设置图表的标题</span>
<span class="line">chart.title = &#39;销售统计图&#39;</span>
<span class="line"># 设置图表纵轴的标题</span>
<span class="line">chart.y_axis.title = &#39;销量&#39;</span>
<span class="line"># 设置图表横轴的标题</span>
<span class="line">chart.x_axis.title = &#39;商品类别&#39;</span>
<span class="line"># 设置数据的范围</span>
<span class="line">data = Reference(sheet, min_col=2, min_row=1, max_row=5, max_col=3)</span>
<span class="line"># 设置分类的范围</span>
<span class="line">cats = Reference(sheet, min_col=1, min_row=2, max_row=5)</span>
<span class="line"># 给图表添加数据</span>
<span class="line">chart.add_data(data, titles_from_data=True)</span>
<span class="line"># 给图表设置分类</span>
<span class="line">chart.set_categories(cats)</span>
<span class="line">chart.shape = 4</span>
<span class="line"># 将图表添加到表单指定的单元格中</span>
<span class="line">sheet.add_chart(chart, &#39;A10&#39;)</span>
<span class="line"></span>
<span class="line">wb.save(&#39;demo.xlsx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，打开生成的Excel文件，效果如下图所示。</p><img src="`+a+'" alt="image-20210819235009026" width="75%"><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>掌握了Python程序操作Excel的方法，可以解决日常办公中很多繁琐的处理Excel电子表格工作，最常见就是将多个数据格式相同的Excel文件合并到一个文件以及从多个Excel文件或表单中提取指定的数据。如果数据体量较大或者处理数据的方式比较复杂，我们还是推荐大家使用Python数据分析神器之一的<code>pandas</code>库。</p>',24),d=[c];function p(r,t){return e(),s("div",null,d)}const o=n(i,[["render",p],["__file","第25课：用Python读写Excel文件-2.html.vue"]]),m=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC25%E8%AF%BE%EF%BC%9A%E7%94%A8Python%E8%AF%BB%E5%86%99Excel%E6%96%87%E4%BB%B6-2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第25课：用Python读写Excel文件-2","slug":"第25课-用python读写excel文件-2","link":"#第25课-用python读写excel文件-2","children":[{"level":3,"title":"Excel简介","slug":"excel简介","link":"#excel简介","children":[]},{"level":3,"title":"读取Excel文件","slug":"读取excel文件","link":"#读取excel文件","children":[]},{"level":3,"title":"写Excel文件","slug":"写excel文件","link":"#写excel文件","children":[]},{"level":3,"title":"生成统计图表","slug":"生成统计图表","link":"#生成统计图表","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720516588000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-Core-50-Courses/第25课：用Python读写Excel文件-2.md"}');export{o as comp,m as data};
