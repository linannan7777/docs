import{_ as s,c as n,o as e,d as a}from"./app-CfKFMHBg.js";const l="/docs/assets/choose_your_chart-6j7lfe6h.png",i="/docs/assets/20220501173344-B3fhz2sH.png",p="/docs/assets/20220502095949-C1-UDwAk.png",d="/docs/assets/20220501173446-BMME2blk.png",c="/docs/assets/20220501173034-DGxJLcj4.png",t="/docs/assets/20220501173557-oX5odcYL.png",o="/docs/assets/20220501173645-CTn0lpOx.png",r="/docs/assets/20220502094128-BQxko7Er.png",u="/docs/assets/hist_count-Dt6hafl-.png",v="/docs/assets/hist_cumulative-CZb1lEI9.png",m="/docs/assets/20220501172802-CvxJw7Zr.png",b={},h=a('<h2 id="数据可视化-1" tabindex="-1"><a class="header-anchor" href="#数据可视化-1"><span>数据可视化-1</span></a></h2><p>在完成了对数据的透视之后，我们可以将数据透视的结果通过可视化的方式呈现出来，简单的说，就是将数据变成漂亮的统计图表，因为人类对颜色和形状会更加敏感，然后再进一步解读数据背后隐藏的商业价值。在之前的课程中，我们已经为大家展示过用使用<code>Series</code>或<code>DataFrame</code>对象的<code>plot</code>方法生成可视化图表的操作，本章我们为大家讲解这个绘图方法的基石，它就是大名鼎鼎的 matplotlib 库。</p><p>在讲解 matplotlib 之前，请大家先看看下面这张图，它给出了常用的图表类型及其应用场景。我们在选择统计图表时，如果不知道做出怎样的选择最合适，相信这张图就能帮到你。简单的说，看趋势折线图，比数据柱状图，定关系散点图，查占比饼状图，看分布直方图，找离群箱线图。</p><img src="'+l+`" style="zoom:65%;"><h3 id="导入和配置" tabindex="-1"><a class="header-anchor" href="#导入和配置"><span>导入和配置</span></a></h3><p>之前的课程中，我们为大家讲解过如何安装和导入 matplotlib 库，如果不确定是否已经安装了 matplotlib，可以使用下面的魔法指令尝试安装或升级你的 matplotlib。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">%pip install -U matplotlib</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了解决 matplotlib 图表中文显示的问题，我们需要修改<code>pyplot</code>模块的<code>rcParams</code>配置参数，具体的操作如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">plt.rcParams[&#39;font.sans-serif&#39;].insert(0, &#39;SimHei&#39;)</span>
<span class="line">plt.rcParams[&#39;axes.unicode_minus&#39;] = False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面代码中的<code>SimHei</code>是字体名称，大家可以通过百度云盘下载并安装该字体，链接地址：https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g?pwd=e7b4。你可以尝试安装其他的中文字体，安装之后如果不知道字体叫什么名字，可以到用户主目录下名为<code>.matplotlib</code>的文件夹中找到<code>fontlist-v330.json</code>文件，打开后可以看到字体文件的路径和字体的名称等信息。需要注意的是，使用中文字体后坐标轴上的负号将会无法显示，需要将<code>axes.unicode_minus</code>参数设置为<code>False</code>，这样才能让坐标轴上的负号正常显示。</p></blockquote><p>通过下面的魔法指令，我们可以在绘图时生成<a href="https://zh.wikipedia.org/wiki/%E7%9F%A2%E9%87%8F%E5%9B%BE%E5%BD%A2" target="_blank" rel="noopener noreferrer">矢量图</a>（SVG - Scalable Vector Graphics），矢量图的特点是不会因为放大、缩小或旋转等操作而失真，看起来会舒服很多。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">%config InlineBackend.figure_format=&#39;svg&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建画布" tabindex="-1"><a class="header-anchor" href="#创建画布"><span>创建画布</span></a></h3><p><code>pyplot</code>模块的<code>figure</code>函数可以用来创建画布，创建画布时，可以通过<code>figsize</code>参数指定画布的尺寸（默认值是<code>[6.4, 4.8]</code>）；可以通过<code>dpi</code>参数设置绘图的分辨率，因为<code>dpi</code>代表了每英寸的像素点数量。除此之外，还可以通过<code>facecolor</code>参数设置画布的背景色。<code>figure</code>函数的返回值是一个<code>Figure</code>对象，它代表了绘图使用的画布，我们可以基于画布来创建绘图使用的坐标系。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.figure(figsize=(8, 4), dpi=120, facecolor=&#39;darkgray&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建坐标系" tabindex="-1"><a class="header-anchor" href="#创建坐标系"><span>创建坐标系</span></a></h3><p>可以直接使用<code>pyplot</code>模块的<code>subplot</code>函数来创建坐标系，该函数会返回<code>Axes</code>对象。<code>subplot</code>的前三个参数分别用来指定整个画布分成几行几列以及当前坐标系的索引，这三个参数的默认值都是<code>1</code>。如果没有创建坐标系，我们绘图时会使用画布上默认的也是唯一的一个坐标系；如果需要在画布上创建多个坐标系，就可以使用该函数。当然，我们也可以通过上面创建的<code>Figure</code>对象的<code>add_subplot</code>方法或<code>add_axes</code>方法来创建坐标系，前者跟<code>subplot</code>函数的作用一致，后者会产生嵌套的坐标系。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.subplot(2, 2, 1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="绘制图表" tabindex="-1"><a class="header-anchor" href="#绘制图表"><span>绘制图表</span></a></h3><h4 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图"><span>折线图</span></a></h4><p>在绘图时，如果没有先调用<code>figure</code>函数和<code>subplot</code>函数，我们将使用默认的画布和坐标系，如果要绘制折线图，可以使用<code>pyplot</code>模块的<code>plot</code>函数，并指定横轴和纵轴的数据。折线图最适合用来观察数据的趋势，尤其是当横坐标代表时间的情况下。我们可以使用<code>plot</code>函数的<code>color</code>参数来定制折线的颜色，可以使用<code>marker</code>参数来定制数据点的标记（例如：<code>*</code>表示五角星，<code>^</code>表示三角形，<code>o</code>表示小圆圈等），可以使用<code>linestyle</code>参数来定制折线的样式（例如：<code>-</code>表示实线，<code>--</code>表示虚线，<code>:</code>表示点线等），可以使用<code>linewidth</code>参数来定制折线的粗细。 下面的代码绘制了一条正弦曲线，其中<code>marker=&#39;*&#39;</code>会将数据点的标记设置为五角星形状，而<code>color=&#39;red&#39;</code>会将折线绘制为红色。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import numpy as np</span>
<span class="line"></span>
<span class="line">x = np.linspace(-2 * np.pi, 2 * np.pi, 120)</span>
<span class="line">y = np.sin(x)</span>
<span class="line"></span>
<span class="line"># 创建画布</span>
<span class="line">plt.figure(figsize=(8, 4), dpi=120)</span>
<span class="line"># 绘制折线图</span>
<span class="line">plt.plot(x, y, linewidth=2, marker=&#39;*&#39;, color=&#39;red&#39;)</span>
<span class="line"># 显示绘图</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+i+`" style="zoom:50%;"><p>如果要在一个坐标系上同时绘制正弦和余弦曲线，可以对上面的代码稍作修改。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">x = np.linspace(-2 * np.pi, 2 * np.pi, 120)</span>
<span class="line">y1, y2 = np.sin(x), np.cos(x)</span>
<span class="line"></span>
<span class="line">plt.figure(figsize=(8, 4), dpi=120)</span>
<span class="line">plt.plot(x, y1, linewidth=2, marker=&#39;*&#39;, color=&#39;red&#39;)</span>
<span class="line">plt.plot(x, y2, linewidth=2, marker=&#39;^&#39;, color=&#39;blue&#39;)</span>
<span class="line"># 定制图表上的标注（annotate函数的参数如果不理解可以先不管它）</span>
<span class="line">plt.annotate(&#39;sin(x)&#39;, xytext=(0.5, -0.75), xy=(0, -0.25), fontsize=12, arrowprops={</span>
<span class="line">    &#39;arrowstyle&#39;: &#39;-&gt;&#39;, &#39;color&#39;: &#39;darkgreen&#39;, &#39;connectionstyle&#39;: &#39;angle3, angleA=90, angleB=0&#39;</span>
<span class="line">})</span>
<span class="line">plt.annotate(&#39;cos(x)&#39;, xytext=(-3, 0.75), xy=(-1.25, 0.5), fontsize=12, arrowprops={</span>
<span class="line">    &#39;arrowstyle&#39;: &#39;-&gt;&#39;, &#39;color&#39;: &#39;darkgreen&#39;, &#39;connectionstyle&#39;: &#39;arc3, rad=0.35&#39;</span>
<span class="line">})</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+p+`" style="zoom:50%;"><p>如果要使用两个坐标系分别绘制正弦和余弦，可以用上面提到的<code>subplot</code>函数来创建坐标系，然后再绘图。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.figure(figsize=(8, 4), dpi=120)</span>
<span class="line"># 创建坐标系（第1个图）</span>
<span class="line">plt.subplot(2, 1, 1)</span>
<span class="line">plt.plot(x, y1, linewidth=2, marker=&#39;*&#39;, color=&#39;red&#39;)</span>
<span class="line"># 创建坐标系（第2个图）</span>
<span class="line">plt.subplot(2, 1, 2)</span>
<span class="line">plt.plot(x, y2, linewidth=2, marker=&#39;^&#39;, color=&#39;blue&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+d+`" style="zoom:50%;"><p>当然也可以像下面这么做，大家可以运行代码看看跟上面的图有什么区别。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.figure(figsize=(8, 4), dpi=120)</span>
<span class="line">plt.subplot(1, 2, 1)</span>
<span class="line">plt.plot(x, y1, linewidth=2, marker=&#39;*&#39;, color=&#39;red&#39;)</span>
<span class="line">plt.subplot(1, 2, 2)</span>
<span class="line">plt.plot(x, y2, linewidth=2, marker=&#39;^&#39;, color=&#39;blue&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，再试一试下面这个代码，看看运行效果如何。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">fig = plt.figure(figsize=(10, 4), dpi=120)</span>
<span class="line">plt.plot(x, y1, linewidth=2, marker=&#39;*&#39;, color=&#39;red&#39;)</span>
<span class="line"># 用Figure对象的add_axes方法在现有坐标系中嵌套一个新的坐标系，该方法的参数是一个四元组，</span>
<span class="line"># 代表了新坐标系在原坐标系中的位置，前两个值是左下角的位置，后两个值是坐标系的宽度和高度</span>
<span class="line">ax = fig.add_axes((0.595, 0.6, 0.3,0.25))</span>
<span class="line">ax.plot(x, y2, marker=&#39;^&#39;, color=&#39;blue&#39;)</span>
<span class="line">ax = fig.add_axes((0.155, 0.2, 0.3,0.25))</span>
<span class="line">ax.plot(x, y2, marker=&#39;^&#39;, color=&#39;green&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="散点图" tabindex="-1"><a class="header-anchor" href="#散点图"><span>散点图</span></a></h4><p>散点图可以帮助我们了解两个变量的关系，如果需要了解三个变量的关系，可以将散点图升级为气泡图。下面的代码中，<code>x</code>和<code>y</code>两个数组分别表示每个月的收入和每个月网购的支出，如果我们想了解<code>x</code>和<code>y</code>是否存在相关关系，就可以绘制如下所示的散点图。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">x = np.array([5550, 7500, 10500, 15000, 20000, 25000, 30000, 40000])</span>
<span class="line">y = np.array([800, 1800, 1250, 2000, 1800, 2100, 2500, 3500])</span>
<span class="line"></span>
<span class="line">plt.figure(figsize=(6, 4), dpi=120)</span>
<span class="line">plt.scatter(x, y)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+c+`" style="zoom:50%;"><h4 id="柱状图" tabindex="-1"><a class="header-anchor" href="#柱状图"><span>柱状图</span></a></h4><p>在对比数据的差异时，柱状图是非常棒的选择，我们可以使用<code>pyplot</code>模块的<code>bar</code>函数来生成柱状图，也可以使用<code>barh</code>函数来生成水平柱状图（也称为“条状图”）。我们先为柱状图准备一些数据，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">x = np.arange(4)</span>
<span class="line">y1 = np.random.randint(20, 50, 4)</span>
<span class="line">y2 = np.random.randint(10, 60, 4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绘制柱状图的代码。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.figure(figsize=(6, 4), dpi=120)</span>
<span class="line"># 通过横坐标的偏移，让两组数据对应的柱子分开，width参数控制柱子的粗细，label参数为柱子添加标签</span>
<span class="line">plt.bar(x - 0.1, y1, width=0.2, label=&#39;销售A组&#39;)</span>
<span class="line">plt.bar(x + 0.1, y2, width=0.2, label=&#39;销售B组&#39;)</span>
<span class="line"># 定制横轴的刻度</span>
<span class="line">plt.xticks(x, labels=[&#39;Q1&#39;, &#39;Q2&#39;, &#39;Q3&#39;, &#39;Q4&#39;])</span>
<span class="line"># 定制显示图例</span>
<span class="line">plt.legend()</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+t+`" style="zoom:50%;"><p>如果想绘制堆叠柱状图，可以对上面的代码稍作修改，如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">labels = [&#39;Q1&#39;, &#39;Q2&#39;, &#39;Q3&#39;, &#39;Q4&#39;]</span>
<span class="line">plt.figure(figsize=(6, 4), dpi=120)</span>
<span class="line">plt.bar(labels, y1, width=0.4, label=&#39;销售A组&#39;)</span>
<span class="line"># 注意：堆叠柱状图的关键是将之前的柱子作为新柱子的底部，可以通过bottom参数指定底部数据，新柱子绘制在底部数据之上</span>
<span class="line">plt.bar(labels, y2, width=0.4, bottom=y1, label=&#39;销售B组&#39;)</span>
<span class="line">plt.legend(loc=&#39;lower right&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+o+`" style="zoom:50%;"><h4 id="饼状图" tabindex="-1"><a class="header-anchor" href="#饼状图"><span>饼状图</span></a></h4><p>饼状图通常简称为饼图，是一个将数据划分为几个扇形区域的统计图表，它主要用于描述数量、频率等之间的相对关系。在饼图中，每个扇形区域的大小就是其所表示的数量的比例，这些扇形区域合在一起刚好是一个完整的饼。在需要展示数据构成的场景下，饼状图、树状图和瀑布图是不错的选择，我们可以使用<code>pyplot</code>模块的<code>pie</code>函数来绘制饼图，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">data = np.random.randint(100, 500, 7)</span>
<span class="line">labels = [&#39;苹果&#39;, &#39;香蕉&#39;, &#39;桃子&#39;, &#39;荔枝&#39;, &#39;石榴&#39;, &#39;山竹&#39;, &#39;榴莲&#39;]</span>
<span class="line"></span>
<span class="line">plt.figure(figsize=(5, 5), dpi=120)</span>
<span class="line">plt.pie(</span>
<span class="line">    data,</span>
<span class="line">    # 自动显示百分比</span>
<span class="line">    autopct=&#39;%.1f%%&#39;,</span>
<span class="line">    # 饼图的半径</span>
<span class="line">    radius=1,</span>
<span class="line">    # 百分比到圆心的距离</span>
<span class="line">    pctdistance=0.8,</span>
<span class="line">    # 颜色（随机生成）</span>
<span class="line">    colors=np.random.rand(7, 3),</span>
<span class="line">    # 分离距离</span>
<span class="line">    # explode=[0.05, 0, 0.1, 0, 0, 0, 0],</span>
<span class="line">    # 阴影效果</span>
<span class="line">    # shadow=True,</span>
<span class="line">    # 字体属性</span>
<span class="line">    textprops=dict(fontsize=8, color=&#39;black&#39;),</span>
<span class="line">    # 楔子属性（生成环状饼图的关键）</span>
<span class="line">    wedgeprops=dict(linewidth=1, width=0.35),</span>
<span class="line">    # 标签</span>
<span class="line">    labels=labels</span>
<span class="line">)</span>
<span class="line"># 定制图表的标题</span>
<span class="line">plt.title(&#39;水果销售额占比&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+r+`" style="zoom:50%;"><blockquote><p><strong>说明</strong>：大家可以试一试将上面代码中被注释的部分恢复，看看有什么样的效果。</p></blockquote><h4 id="直方图" tabindex="-1"><a class="header-anchor" href="#直方图"><span>直方图</span></a></h4><p>在统计学中，直方图是一种展示数据分布情况的图形，是一种二维统计图表，它的两个坐标分别是统计样本和该样本对应的某个属性的度量。下面的数据是某学校100名男学生的身高，如果我们想知道数据的分布，就可以使用直方图。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">heights = np.array([</span>
<span class="line">    170, 163, 174, 164, 159, 168, 165, 171, 171, 167, </span>
<span class="line">    165, 161, 175, 170, 174, 170, 174, 170, 173, 173, </span>
<span class="line">    167, 169, 173, 153, 165, 169, 158, 166, 164, 173, </span>
<span class="line">    162, 171, 173, 171, 165, 152, 163, 170, 171, 163, </span>
<span class="line">    165, 166, 155, 155, 171, 161, 167, 172, 164, 155, </span>
<span class="line">    168, 171, 173, 169, 165, 162, 168, 177, 174, 178, </span>
<span class="line">    161, 180, 155, 155, 166, 175, 159, 169, 165, 174, </span>
<span class="line">    175, 160, 152, 168, 164, 175, 168, 183, 166, 166, </span>
<span class="line">    182, 174, 167, 168, 176, 170, 169, 173, 177, 168, </span>
<span class="line">    172, 159, 173, 185, 161, 170, 170, 184, 171, 172</span>
<span class="line">])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code>pyplot</code>模块的<code>hist</code>函数来绘制直方图，其中<code>bins</code>参数代表了我们使用的分箱方式（身高从150厘米到190厘米，每5厘米为一个分箱），代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.figure(figsize=(6, 4), dpi=120)</span>
<span class="line"># 绘制直方图</span>
<span class="line">plt.hist(heights, bins=np.arange(145, 196, 5), color=&#39;darkcyan&#39;)</span>
<span class="line"># 定制横轴标签</span>
<span class="line">plt.xlabel(&#39;身高&#39;)</span>
<span class="line"># 定制纵轴标签</span>
<span class="line">plt.ylabel(&#39;概率密度&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+u+`" style="zoom:50%;"><p>绘制直方图时，如果将<code>hist</code>函数的<code>density</code>参数修改为<code>True</code>，同时将<code>cumulative</code>参数也修改为<code>True</code>，那么一方面纵轴会显示为概率密度，而图表会绘制概率的累计分布，如下所示。</p><p>代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dpi<span class="token operator">=</span><span class="token number">120</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 绘制直方图</span></span>
<span class="line">plt<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>heights<span class="token punctuation">,</span> bins<span class="token operator">=</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">196</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;darkcyan&#39;</span><span class="token punctuation">,</span> density<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> cumulative<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 定制横轴标签</span></span>
<span class="line">plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;身高&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 定制纵轴标签</span></span>
<span class="line">plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;概率&#39;</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+v+`" style="zoom:50%;"><h4 id="箱线图" tabindex="-1"><a class="header-anchor" href="#箱线图"><span>箱线图</span></a></h4><p>箱线图又叫箱型图或盒须图，是一种用于展示一组数据分散情况的统计图表，如下所示。因图形如箱子，而且在上下四分位数之外有线条像胡须延伸出去而得名。在箱线图中，箱子的上边界是上四分位数（$Q_3$）的位置，箱子的下边界是下四分位数（$Q_1$）的位置，箱子中间的线条是中位数（$Q_2$）的位置，而箱子的长度就是四分位距离（IQR）。除此之外，箱子上方线条的边界是最大值，箱子下方线条的边界是最小值，这两条线之外的点就是离群值（outlier）。所谓离群值，是指数据小于$Q_1 - 1.5 \\times IQR$或数据大于$Q_3 + 1.5 \\times IQR$的值，公式中的<code>1.5</code>还可以替换为<code>3</code>来发现极端离群值（extreme outlier），而介于<code>1.5</code>到<code>3</code>之间的离群值通常称之为适度离群值（mild outlier）。</p><p>可以使用<code>pyplot</code>模块的<code>boxplot</code>函数来绘制箱线图，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 数组中有47个[0, 100)范围的随机数</span>
<span class="line">data = np.random.randint(0, 100, 47)</span>
<span class="line"># 向数组中添加三个可能是离群点的数据</span>
<span class="line">data = np.append(data, 160)</span>
<span class="line">data = np.append(data, 200)</span>
<span class="line">data = np.append(data, -50)</span>
<span class="line"></span>
<span class="line">plt.figure(figsize=(6, 4), dpi=120)</span>
<span class="line"># whis参数的默认值是1.5，将其设置为3可以检测极端离群值，showmeans=True表示在图中标记均值的位置</span>
<span class="line">plt.boxplot(data, whis=1.5, showmeans=True, notch=True)</span>
<span class="line"># 定制纵轴的取值范围</span>
<span class="line">plt.ylim([-100, 250])</span>
<span class="line"># 定制横轴的刻度</span>
<span class="line">plt.xticks([1], labels=[&#39;data&#39;])</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+m+`" style="zoom:50%;"><blockquote><p><strong>说明</strong>：由于数据是随机生成的，大家运行上面的代码生成的图表可能跟我这里并不相同，以实际运行结果为准。</p></blockquote><h3 id="显示和保存图表" tabindex="-1"><a class="header-anchor" href="#显示和保存图表"><span>显示和保存图表</span></a></h3><p>可以使用<code>pyplot</code>模块的<code>show</code>函数来显示绘制的图表，我们在上面的代码中使用过这个函数。如果希望保存图表，可以使用<code>savefig</code>函数。需要注意的是，如果要同时显示和保存图表，应该先执行<code>savefig</code>函数，再执行<code>show</code>函数，因为在调用<code>show</code>函数时，图表已经被释放，位于<code>show</code>函数之后的<code>savefig</code>保存的只是一个空白的区域。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">plt.savefig(&#39;chart.png&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他图表" tabindex="-1"><a class="header-anchor" href="#其他图表"><span>其他图表</span></a></h3><p>使用 matplotlib，我们还可以绘制出其他的统计图表（如：雷达图、玫瑰图、热力图等），但实际工作中，使用频率最高的几类图表我们在上面已经为大家完整的展示出来了。此外，matplotlib 还有很多对统计图表进行定制的细节，例如定制坐标轴、定制图表上的文字和标签等。如果想了解如何用 matplotlib 绘制和定制更多的统计图表，可以直接查看 matplotlib 官方网站上的<a href="https://matplotlib.org/stable/tutorials/index.html" target="_blank" rel="noopener noreferrer">文档</a>和<a href="https://matplotlib.org/stable/gallery/index.html" target="_blank" rel="noopener noreferrer">示例</a>，在下一个章节我们会为大家做一个简要的介绍。</p>`,91),g=[h];function y(x,k){return e(),n("div",null,g)}const P=s(b,[["render",y],["__file","78.数据可视化-1.html.vue"]]),_=JSON.parse('{"path":"/python/Python-100-Days/Day66-80/78.%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96-1.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"数据可视化-1","slug":"数据可视化-1","link":"#数据可视化-1","children":[{"level":3,"title":"导入和配置","slug":"导入和配置","link":"#导入和配置","children":[]},{"level":3,"title":"创建画布","slug":"创建画布","link":"#创建画布","children":[]},{"level":3,"title":"创建坐标系","slug":"创建坐标系","link":"#创建坐标系","children":[]},{"level":3,"title":"绘制图表","slug":"绘制图表","link":"#绘制图表","children":[]},{"level":3,"title":"显示和保存图表","slug":"显示和保存图表","link":"#显示和保存图表","children":[]},{"level":3,"title":"其他图表","slug":"其他图表","link":"#其他图表","children":[]}]}],"git":{"updatedTime":1720597060000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-100-Days/Day66-80/78.数据可视化-1.md"}');export{P as comp,_ as data};
