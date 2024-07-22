import{_ as s,c as n,o as a,d as e}from"./app-CfKFMHBg.js";const i="/docs/assets/20220502115005-CzbxugE5.png",l="/docs/assets/20220502115531-CxSVQA9B.png",t="/docs/assets/20220502120236-BA1kWwvj.png",p="/docs/assets/20220502121226-DFirJXCd.png",r="/docs/assets/20220502121656-BGDigcft.png",d="/docs/assets/20220502122106-aMrlZH0Z.png",c="/docs/assets/20220502122144-DAXfXvkL.png",o="/docs/assets/pyecharts_bar_chart-x5eagFoC.png",u="/docs/assets/pyecharts_pie_chart-BF2bR0gF.png",v="/docs/assets/pyecharts_map_chart-DbUxljeN.png",m={},h=e(`<h2 id="数据可视化-3" tabindex="-1"><a class="header-anchor" href="#数据可视化-3"><span>数据可视化-3</span></a></h2><p>通过前面的学习，我们已经对数据可视化工具 matplotlib 有一个初步的认知。大家可能也会发现了，matplotlib 提供的函数虽然强大，但是参数太多，要想对图表进行深度的定制就需要修改一系列的参数，这一点对新手并不友好。另一方面，使用 matplotlib 定制的统计图是静态图表，可能在某些需要交互效果的场景下并不合适。为了解决这两个问题，我们为大家介绍两个新的可视化工具，一个是 seaborn，一个是 pyecharts。</p><h3 id="seaborn" tabindex="-1"><a class="header-anchor" href="#seaborn"><span>Seaborn</span></a></h3><p>Seaborn 是建立在 matplotlib 之上的数据可视化工具，它相当于是对 matplotlib 进行了更高级的封装，而且 seaborn 也能跟 pandas 无缝整合，让我们可以用更少的代码构建出更好的统计图表，帮助我们探索和理解数据。Seaborn 包含但不局限于以下描述的功能：</p><ol><li>面向数据集的 API，可用于检查多个变量之间的关系。</li><li>支持使用分类变量来显示观察结果或汇总统计数据。</li><li>能够可视化单变量或双变量分布以及在数据子集之间进行比较的选项</li><li>各类因变量线性回归模型的自动估计与作图。</li><li>集成调色板和主题，轻松定制统计图表的视觉效果。</li></ol><p>可以使用 Python 的包管理工具 pip 来安装 seaborn。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install seaborn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 Jupyter 中，可以直接使用魔法指令进行安装，如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">%pip install seaborn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面，我们用 seaborn 自带的数据集为例，为大家简单的展示 seaborn 的用法和强大之处，想要深入研究 seaborn 的读者可以自行阅读官方<a href="https://seaborn.pydata.org/tutorial.html" target="_blank" rel="noopener noreferrer">文档</a>和并查看官方作品集中的<a href="https://seaborn.pydata.org/examples/index.html" target="_blank" rel="noopener noreferrer">示例。</a>根据官方示例来编写自己的代码是一个不错的选择，简单的说就是保留官方代码，将数据换成自己的数据即可。下图展示了 seaborn 绘制图表的函数，可以看出，seaborn 的这些函数主要支持我们通过绘制图表来探索数据的关系、分布和分类。</p><img src="`+i+`" style="zoom:75%;"><p>使用 seaborn，首先需要导入该库并设置主题，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import seaborn as sns</span>
<span class="line"></span>
<span class="line">sns.set_theme()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要在图表上显示中文，还需要用之前讲过的方法修改 matplotlib 的配置参数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">plt.rcParams[&#39;font.sans-serif&#39;].insert(0, &#39;SimHei&#39;)</span>
<span class="line">plt.rcParams[&#39;axes.unicode_minus&#39;] = False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的代码必须放在调用 set_theme 函数之后，否则调用 set_theme 函数时又会重新修改 matplotlib 配置参数中的字体设置。</p></blockquote><p>加载官方的 Tips 数据集（就餐小费数据）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">tips_df = sns.load_dataset(&#39;tips&#39;)</span>
<span class="line">tips_df.info()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下所示，其中 total_bill 表示账单总金额，tip 表示小费的金额，sex 是顾客的性别，smoker 表示顾客是否抽样，day 代表星期几，time 代表是午餐还是晚餐，size 是就餐人数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;class &#39;pandas.core.frame.DataFrame&#39;&gt;</span>
<span class="line">RangeIndex: 244 entries, 0 to 243</span>
<span class="line">Data columns (total 7 columns):</span>
<span class="line"> #   Column      Non-Null Count  Dtype   </span>
<span class="line">---  ------      --------------  -----   </span>
<span class="line"> 0   total_bill  244 non-null    float64 </span>
<span class="line"> 1   tip         244 non-null    float64 </span>
<span class="line"> 2   sex         244 non-null    category</span>
<span class="line"> 3   smoker      244 non-null    category</span>
<span class="line"> 4   day         244 non-null    category</span>
<span class="line"> 5   time        244 non-null    category</span>
<span class="line"> 6   size        244 non-null    int64   </span>
<span class="line">dtypes: category(4), float64(2), int64(1)</span>
<span class="line">memory usage: 7.4 KB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于数据集是联网加载的，上述代码可能因为 SSL 的原因无法获取到数据，可以尝试先运行下面的代码，然后再加载数据集。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import ssl</span>
<span class="line"></span>
<span class="line">ssl._create_default_https_context = ssl._create_unverified_context</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们希望了解账单金额的分布，可以使用下面的代码来绘制分布图。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.histplot(data=tips_df, x=&#39;total_bill&#39;, kde=True)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+l+`" style="zoom:50%;"><p>如果想了解变量之间的两两关系，我们可以绘制点对图，代码和效果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.pairplot(data=tips_df, hue=&#39;sex&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+t+`" style="zoom:42%;"><p>如果对上面图表的颜色不满意，还可以通过 palette 参数选择 seaborn 自带的“调色板”来修改颜色，这种方式相比于自行指定颜色或使用随机颜色方便和靠谱了很多，下图为大家展示了部分 seaborn 自带的“调色板”。</p><img src="http://localhost//mypic/20220502120749.png" style="zoom:45%;"><p>我们可以将上面的代码稍作修改，看看运行结果有什么差别。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.pairplot(data=tips_df, hue=&#39;sex&#39;, palette=&#39;Dark2&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，我们为 total_bill 和 tip 两组数据绘制联合分布图，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.jointplot(data=tips_df, x=&#39;total_bill&#39;, y=&#39;tip&#39;, hue=&#39;sex&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+p+`" style="zoom:50%;"><p>上面清晰的展示了，total_bill 和 tip 之间存在正相关关系，这一点我们也可以通过 DataFrame 对象的 corr 方法进行验证。接下来，我们可以建立回归模型来拟合这些数据点，而 seaborn 的线性回归模型图已经帮我们实现了这项功能，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.lmplot(data=tips_df, x=&#39;total_bill&#39;, y=&#39;tip&#39;, hue=&#39;sex&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+r+`" style="zoom:50%;"><p>如果我们希望了解账单金额的集中和离散趋势，可以绘制箱线图或小提琴图，代码如下所示，我们将数据按星期四、星期五、星期六和星期天分别进行展示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.boxplot(data=tips_df, x=&#39;day&#39;, y=&#39;total_bill&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+d+`" style="zoom:50%;"><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sns.violinplot(data=tips_df, x=&#39;day&#39;, y=&#39;total_bill&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+c+`" style="zoom:50%;"><blockquote><p><strong>说明</strong>：相较于箱线图，小提琴图没有标注异常点而是显示了数据的整个范围，另一方面，小提琴图很好的展示了数据的分布（密度轨迹）。</p></blockquote><h3 id="pyecharts" tabindex="-1"><a class="header-anchor" href="#pyecharts"><span>Pyecharts</span></a></h3><p>Echarts 原来是百度开发的一个前端图表库，2018年1月16日，ECharts 进入 Apache Incubator 进行孵化，目前已经是 Apache 软件基金会的顶级项目。凭借着良好的交互性和精巧的图表设计，ECharts 得到了众多开发者的认可，而 pyecharts 就是基于 Python 语言对 ECharts 进行了包装，让 Python 开发者也可以使用 ECharts 绘制外观精美且交互性强的统计图表。</p><p>可以使用 Python 的包管理工具 pip 来安装 pyecharts。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install pyecharts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 JupyterLab 中，可以直接使用魔法指令进行安装，如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">%pip install pyecharts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果想在 JupyterLab 中使用 pyecharts 绘图，我们还需要做一些准备工作，主要是修改 pyecharts 的配置，代码如下所示。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span><span class="token builtin">globals</span> <span class="token keyword">import</span> CurrentConfig<span class="token punctuation">,</span> NotebookType</span>
<span class="line"></span>
<span class="line">CurrentConfig<span class="token punctuation">.</span>NOTEBOOK_TYPE <span class="token operator">=</span> NotebookType<span class="token punctuation">.</span>JUPYTER_LAB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们通过来自于 pyecharts 官方网站新手教程中的一个例子，来认识 pyecharts。当然，我们对官网的例子进行一些调整，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from pyecharts.charts import Bar</span>
<span class="line">from pyecharts import options as opts</span>
<span class="line"></span>
<span class="line"># 创建柱状图对象并设置初始参数（宽度、高度）</span>
<span class="line">bar_chart = Bar(init_opts=opts.InitOpts(width=&#39;600px&#39;, height=&#39;450px&#39;))</span>
<span class="line"># 设置横轴数据</span>
<span class="line">bar_chart.add_xaxis([&quot;衬衫&quot;, &quot;羊毛衫&quot;, &quot;雪纺衫&quot;, &quot;裤子&quot;, &quot;高跟鞋&quot;, &quot;袜子&quot;])</span>
<span class="line"># 设置纵轴数据（第一组）</span>
<span class="line">bar_chart.add_yaxis(&quot;商家A&quot;, [25, 20, 36, 10, 75, 90])</span>
<span class="line"># 设置纵轴数据（第二组）</span>
<span class="line">bar_chart.add_yaxis(&quot;商家B&quot;, [15, 12, 30, 20, 45, 60])</span>
<span class="line"># 设置纵轴数据（第三组）</span>
<span class="line">bar_chart.add_yaxis(&quot;商家C&quot;, [12, 32, 40, 52, 35, 26])</span>
<span class="line"># 添加全局配置参数</span>
<span class="line">bar_chart.set_global_opts(</span>
<span class="line">    # 横轴相关的参数</span>
<span class="line">    xaxis_opts=opts.AxisOpts(</span>
<span class="line">        axislabel_opts=opts.LabelOpts(color=&#39;navy&#39;)</span>
<span class="line">    ),</span>
<span class="line">    # 纵轴相关的参数（标签、最小值、最大值、间隔）</span>
<span class="line">    yaxis_opts=opts.AxisOpts(</span>
<span class="line">        axislabel_opts=opts.LabelOpts(color=&#39;navy&#39;),</span>
<span class="line">        min_=0,</span>
<span class="line">        max_=100,</span>
<span class="line">        interval=10</span>
<span class="line">    ),</span>
<span class="line">    # 标题相关的参数（内容、链接、位置、文本样式）</span>
<span class="line">    title_opts=opts.TitleOpts(</span>
<span class="line">        title=&#39;2022年销售数据展示&#39;,</span>
<span class="line">        pos_left=&#39;2%&#39;,</span>
<span class="line">        title_textstyle_opts=opts.TextStyleOpts(</span>
<span class="line">            color=&#39;navy&#39;,</span>
<span class="line">            font_size=16,</span>
<span class="line">            font_family=&#39;苹方-简&#39;,</span>
<span class="line">            font_weight=&#39;bold&#39;</span>
<span class="line">        )</span>
<span class="line">    ),</span>
<span class="line">    # 工具箱相关的参数</span>
<span class="line">    toolbox_opts=opts.ToolboxOpts(</span>
<span class="line">        orient=&#39;vertical&#39;,</span>
<span class="line">        pos_left=&#39;right&#39;</span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line"># 加载绘图需要的JavaScript文件</span>
<span class="line">bar_chart.load_javascript()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行完上面的代码后，我们就可以通过调用<code>bar</code>对象的方法来完成对图表的渲染。如果直接使用<code>render</code>方法，那么绘制好的统计图表将保存到一个 HTML 文件中，打开该文件也能够看到绘制好的统计图表，而<code>render_notebook</code>方法则是将图表渲染到浏览器窗口中。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">bar_chart<span class="token punctuation">.</span>render_notebook<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面代码的运行效果如下图所示。值得一提的是，下图中的标题、图例、右侧的工具箱都是可以点击的，大家可以点击它们看看会有什么样的效果，ECharts 的魅力就在于它的交互效果，大家一定要试一试。</p><img src="`+o+`" style="zoom:55%;"><p>接下来，我们也是通过一个官方示例，看看如何绘制饼图。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pyecharts.options as opts</span>
<span class="line">from pyecharts.charts import Pie</span>
<span class="line"></span>
<span class="line"># 准备饼图需要的数据</span>
<span class="line">x_data = [&quot;直接访问&quot;, &quot;邮件营销&quot;, &quot;联盟广告&quot;, &quot;视频广告&quot;, &quot;搜索引擎&quot;]</span>
<span class="line">y_data = [335, 310, 234, 135, 1548]</span>
<span class="line">data = [(x, y) for x, y in zip(x_data, y_data)]</span>
<span class="line"></span>
<span class="line"># 创建饼图对象并设置初始化参数</span>
<span class="line">pie_chart = Pie(init_opts=opts.InitOpts(width=&quot;800px&quot;, height=&quot;400px&quot;))</span>
<span class="line"># 向饼图添加数据</span>
<span class="line">pie_chart.add(</span>
<span class="line">    &#39;&#39;, </span>
<span class="line">    data_pair=data,</span>
<span class="line">    radius=[&quot;50%&quot;, &quot;75%&quot;],</span>
<span class="line">    label_opts=opts.LabelOpts(is_show=False),</span>
<span class="line">)</span>
<span class="line"># 设置全局配置项</span>
<span class="line">pie_chart.set_global_opts(</span>
<span class="line">    # 配置图例相关的参数</span>
<span class="line">    legend_opts=opts.LegendOpts(</span>
<span class="line">        pos_left=&quot;legft&quot;,</span>
<span class="line">        orient=&quot;vertical&quot;</span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line"># 设置数据系列配置参数</span>
<span class="line">pie_chart.set_series_opts(</span>
<span class="line">    # 设置不显示工具提示</span>
<span class="line">    tooltip_opts=opts.TooltipOpts(is_show=False),</span>
<span class="line">    # 设置饼图标签的样式</span>
<span class="line">    label_opts=opts.LabelOpts(formatter=&quot;{b}({c}): {d}%&quot;)</span>
<span class="line">)</span>
<span class="line">pie_chart.load_javascript()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">pie_chart<span class="token punctuation">.</span>render_notebook<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行上面的代码，效果如下图所示。</p><img src="`+u+`" style="zoom:50%;"><p>需要提醒大家注意的是，pyecharts 并不能直接使用 NumPy 的 ndarray 和 Pandas 的 Series、DataFrame 为其提供数据，它需要的是 Python 原生的数据类型。可能大家也注意到了，上面的代码中，我们使用的都是列表、元组这样的数据类型。</p><p>最后，我们来看看如何绘制地图，绘制地图首先需要安装额外的依赖库来获取地图相关信息，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install echarts-countries-pypkg echarts-china-provinces-pypkg echarts-china-cities-pypkg echarts-china-counties-pypkg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 Jupyter 中，可以直接使用魔法指令进行安装，如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">%pip install echarts-countries-pypkg</span>
<span class="line">%pip install echarts-china-provinces-pypkg</span>
<span class="line">%pip install echarts-china-cities-pypkg</span>
<span class="line">%pip install echarts-china-counties-pypkg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的四个库分别包含了世界各国、中国省级行政区域、中国市级行政区域、中国区/县级行政区域的数据。</p></blockquote><p>然后，我们将全国各省的数据放在一个列表中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = [</span>
<span class="line">    (&#39;广东&#39;, 594), (&#39;浙江&#39;, 438), (&#39;四川&#39;, 316), (&#39;北京&#39;, 269), (&#39;山东&#39;, 248),</span>
<span class="line">    (&#39;江苏&#39;, 234), (&#39;湖南&#39;, 196), (&#39;福建&#39;, 166), (&#39;河南&#39;, 153), (&#39;辽宁&#39;, 152),</span>
<span class="line">    (&#39;上海&#39;, 138), (&#39;河北&#39;, 86), (&#39;安徽&#39;, 79), (&#39;湖北&#39;, 75), (&#39;黑龙江&#39;, 70), </span>
<span class="line">    (&#39;陕西&#39;, 63), (&#39;吉林&#39;, 59), (&#39;江西&#39;, 56), (&#39;重庆&#39;, 46), (&#39;贵州&#39;, 39),</span>
<span class="line">    (&#39;山西&#39;, 37), (&#39;云南&#39;, 33), (&#39;广西&#39;, 24), (&#39;天津&#39;, 22), (&#39;新疆&#39;, 21),</span>
<span class="line">    (&#39;海南&#39;, 18), (&#39;内蒙古&#39;, 14), (&#39;台湾&#39;, 11), (&#39;甘肃&#39;, 7), (&#39;广西壮族自治区&#39;, 4),</span>
<span class="line">    (&#39;香港&#39;, 4), (&#39;青海&#39;, 3), (&#39;新疆维吾尔自治区&#39;, 3), (&#39;内蒙古自治区&#39;, 3), (&#39;宁夏&#39;, 1)</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们使用 pyecharts 在地图上标记各省抖音大V人数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pyecharts.options as opts</span>
<span class="line">from pyecharts.charts import Map</span>
<span class="line"></span>
<span class="line">map_chart = Map(init_opts=opts.InitOpts(width=&#39;1000px&#39;, height=&#39;1000px&#39;))</span>
<span class="line">map_chart.add(&#39;&#39;, data, &#39;china&#39;, is_roam=False)</span>
<span class="line">map_chart.load_javascript()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">map_chart<span class="token punctuation">.</span>render_notebook<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码的运行效果如下图所示，将鼠标置于地图上时，会高亮对应的省并看到相关的信息。</p><img src="`+v+'" style="zoom:55%;"><p>和 seaborn 一样，我们建议大家参考官方提供的示例来使用 pyecharts，我们可以在 pyecharts <a href="https://pyecharts.org/#/zh-cn/" target="_blank" rel="noopener noreferrer">官方网站</a>的左侧导航栏中找到“图表类型”选项，下面每种类型的图表都有对应的官方示例，很多代码是可以直接使用的，我们需要做的就是将数据换成自己的数据。</p>',77),b=[h];function g(y,_){return a(),n("div",null,b)}const P=s(m,[["render",g],["__file","80.数据可视化-3.html.vue"]]),f=JSON.parse('{"path":"/python/Python-100-Days/Day66-80/80.%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96-3.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"数据可视化-3","slug":"数据可视化-3","link":"#数据可视化-3","children":[{"level":3,"title":"Seaborn","slug":"seaborn","link":"#seaborn","children":[]},{"level":3,"title":"Pyecharts","slug":"pyecharts","link":"#pyecharts","children":[]}]}],"git":{"updatedTime":1720597060000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-100-Days/Day66-80/80.数据可视化-3.md"}');export{P as comp,f as data};
