import{_ as s,c as n,o as e,d as a}from"./app-CfKFMHBg.js";const i="/docs/assets/pivot_table_1-CLrHJV73.png",l="/docs/assets/pivot_table_2-DCvQpUYO.png",d="/docs/assets/sales_bar_graph-Lx75m3uJ.png",t="/docs/assets/sales_pie_graph-DZJVXXT3.png",c={},p=a(`<h2 id="深入浅出pandas-4" tabindex="-1"><a class="header-anchor" href="#深入浅出pandas-4"><span>深入浅出pandas-4</span></a></h2><h3 id="数据透视" tabindex="-1"><a class="header-anchor" href="#数据透视"><span>数据透视</span></a></h3><p>经过前面的学习，我们已经将数据准备就绪而且变成了我们想要的样子，接下来就是最为重要的数据透视阶段了。当我们拿到一大堆数据的时候，如何从数据中迅速的解读出有价值的信息，把繁杂的数据变成容易解读的统计图表并再此基础上产生业务洞察，这就是数据分析要解决的核心问题。</p><h4 id="获取描述性统计信息" tabindex="-1"><a class="header-anchor" href="#获取描述性统计信息"><span>获取描述性统计信息</span></a></h4><p>首先，我们可以获取数据的描述性统计信息，通过描述性统计信息，我们可以了解数据的集中趋势和离散趋势。</p><p>例如，我们有如下所示的学生成绩表。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">scores = np.random.randint(50, 101, (5, 3))</span>
<span class="line">names = (&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;)</span>
<span class="line">courses = (&#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)</span>
<span class="line">df = pd.DataFrame(data=scores, columns=courses, index=names)</span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">     语文   数学   英语</span>
<span class="line">关羽  96    72    73</span>
<span class="line">张飞  72    70	97</span>
<span class="line">赵云  74    51	79</span>
<span class="line">马超  100   54	54</span>
<span class="line">黄忠  89    100	88</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过<code>DataFrame</code>对象的方法<code>mean</code>、<code>max</code>、<code>min</code>、<code>std</code>、<code>var</code>等方法分别获取每个学生或每门课程的平均分、最高分、最低分、标准差、方差等信息，也可以直接通过<code>describe</code>方法直接获取描述性统计信息，代码如下所示。</p><p>计算每门课程成绩的平均分。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.mean()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">语文    86.2</span>
<span class="line">数学    69.4</span>
<span class="line">英语    78.2</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算每个学生成绩的平均分。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.mean(axis=1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">关羽    80.333333</span>
<span class="line">张飞    79.666667</span>
<span class="line">赵云    68.000000</span>
<span class="line">马超    69.333333</span>
<span class="line">黄忠    92.333333</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算每门课程成绩的方差。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.var()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">语文    161.2</span>
<span class="line">数学    379.8</span>
<span class="line">英语    265.7</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过方差可以看出，数学成绩波动最大，两极分化可能更严重。</p></blockquote><p>获取每门课程的描述性统计信息。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.describe()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        语文        数学         英语</span>
<span class="line">count   5.000000	5.000000	5.000000</span>
<span class="line">mean    86.200000	69.400000	78.200000</span>
<span class="line">std     12.696456	19.488458	16.300307</span>
<span class="line">min     72.000000	51.000000	54.000000</span>
<span class="line">25%     74.000000	54.000000	73.000000</span>
<span class="line">50%     89.000000	70.000000	79.000000</span>
<span class="line">75%     96.000000	72.000000	88.000000</span>
<span class="line">max     100.000000	100.000000	97.000000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序和取头部值" tabindex="-1"><a class="header-anchor" href="#排序和取头部值"><span>排序和取头部值</span></a></h4><p>如果需要对数据进行排序，可以使用<code>DataFrame</code>对象的<code>sort_values</code>方法，该方法的<code>by</code>参数可以指定根据哪个列或哪些列进行排序，而<code>ascending</code>参数可以指定升序或是降序。例如，下面的代码展示了如何将学生表按语文成绩排降序。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.sort_values(by=&#39;语文&#39;, ascending=False)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">      语文   数学   英语</span>
<span class="line">马超	100    54	  54</span>
<span class="line">关羽	96     72     73</span>
<span class="line">黄忠	89     100    88</span>
<span class="line">赵云	74     51     79</span>
<span class="line">张飞	72     70     97</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>DataFrame</code>数据量很大，排序将是一个非常耗费时间的操作。有的时候我们只需要获得排前N名或后N名的数据，这个时候其实没有必要对整个数据进行排序，而是直接利用堆结构找出Top-N的数据。<code>DataFrame</code>的<code>nlargest</code>和<code>nsmallest</code>方法就提供对Top-N操作的支持，代码如下所示。</p><p>找出语文成绩前3名的学生信息。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.nlargest(3, &#39;语文&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">      语文   数学   英语</span>
<span class="line">马超	100    54	  54</span>
<span class="line">关羽	96     72     73</span>
<span class="line">黄忠	89     100    88</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出数学成绩最低的3名学生的信息。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.nsmallest(3, &#39;数学&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">      语文  数学  英语</span>
<span class="line">赵云  74    51	79</span>
<span class="line">马超  100   54	54</span>
<span class="line">张飞  72    70	97</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组聚合" tabindex="-1"><a class="header-anchor" href="#分组聚合"><span>分组聚合</span></a></h4><p>我们先从之前使用过的 Excel 文件中读取2020年销售数据，然后再为大家演示如何进行分组聚合操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df = pd.read_excel(&#39;data/2020年销售数据.xlsx&#39;)</span>
<span class="line">df.head()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    销售日期	 销售区域   销售渠道  销售订单     品牌    售价  销售数量</span>
<span class="line">0   2020-01-01  上海       拼多多    182894-455  八匹马  99    83</span>
<span class="line">1   2020-01-01  上海       抖音      205635-402  八匹马  219   29</span>
<span class="line">2   2020-01-01  上海       天猫      205654-021  八匹马  169   85</span>
<span class="line">3   2020-01-01  上海       天猫      205654-519  八匹马  169   14</span>
<span class="line">4   2020-01-01  上海       天猫      377781-010  皮皮虾  249   61</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要统计每个销售区域的销售总额，可以先通过“售价”和“销售数量”计算出销售额，为<code>DataFrame</code>添加一个列，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df[&#39;销售额&#39;] = df[&#39;售价&#39;] * df[&#39;销售数量&#39;]</span>
<span class="line">df.head()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    销售日期	 销售区域   销售渠道  销售订单     品牌    售价  销售数量  销售额</span>
<span class="line">0   2020-01-01  上海       拼多多    182894-455  八匹马  99    83        8217</span>
<span class="line">1   2020-01-01  上海       抖音      205635-402  八匹马  219   29        6351</span>
<span class="line">2   2020-01-01  上海       天猫      205654-021  八匹马  169   85        14365</span>
<span class="line">3   2020-01-01  上海       天猫      205654-519  八匹马  169   14        2366</span>
<span class="line">4   2020-01-01  上海       天猫      377781-010  皮皮虾  249   61        15189</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再根据“销售区域”列对数据进行分组，这里我们使用的是<code>DataFrame</code>对象的<code>groupby</code>方法。分组之后，我们取“销售额”这个列在分组内进行求和处理，代码和结果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby(&#39;销售区域&#39;).销售额.sum()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">销售区域</span>
<span class="line">上海    11610489</span>
<span class="line">北京    12477717</span>
<span class="line">安徽      895463</span>
<span class="line">广东     1617949</span>
<span class="line">江苏     2304380</span>
<span class="line">浙江      687862</span>
<span class="line">福建    10178227</span>
<span class="line">Name: 销售额, dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要统计每个月的销售总额，我们可以将“销售日期”作为groupby\`方法的参数，当然这里需要先将“销售日期”处理成月，代码和结果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby(df[&#39;销售日期&#39;].dt.month).销售额.sum()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">销售日期</span>
<span class="line">1     5409855</span>
<span class="line">2     4608455</span>
<span class="line">3     4164972</span>
<span class="line">4     3996770</span>
<span class="line">5     3239005</span>
<span class="line">6     2817936</span>
<span class="line">7     3501304</span>
<span class="line">8     2948189</span>
<span class="line">9     2632960</span>
<span class="line">10    2375385</span>
<span class="line">11    2385283</span>
<span class="line">12    1691973</span>
<span class="line">Name: 销售额, dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们将难度升级，统计每个销售区域每个月的销售总额，这又该如何处理呢？事实上，<code>groupby</code>方法的第一个参数可以是一个列表，列表中可以指定多个分组的依据，大家看看下面的代码和输出结果就明白了。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby([&#39;销售区域&#39;, df[&#39;销售日期&#39;].dt.month]).销售额.sum()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">销售区域  销售日期</span>
<span class="line">上海    1       1679125</span>
<span class="line">        2       1689527</span>
<span class="line">        3       1061193</span>
<span class="line">        4       1082187</span>
<span class="line">        5        841199</span>
<span class="line">        6        785404</span>
<span class="line">        7        863906</span>
<span class="line">        8        734937</span>
<span class="line">        9       1107693</span>
<span class="line">        10       412108</span>
<span class="line">       11       825169</span>
<span class="line">       12       528041</span>
<span class="line">北京    1       1878234</span>
<span class="line">        2       1807787</span>
<span class="line">        3       1360666</span>
<span class="line">        4       1205989</span>
<span class="line">        5        807300</span>
<span class="line">        6       1216432</span>
<span class="line">        7       1219083</span>
<span class="line">        8        645727</span>
<span class="line">        9        390077</span>
<span class="line">        10       671608</span>
<span class="line">        11       678668</span>
<span class="line">        12       596146</span>
<span class="line">安徽    4        341308</span>
<span class="line">        5        554155</span>
<span class="line">广东    3        388180</span>
<span class="line">        8        469390</span>
<span class="line">        9        365191</span>
<span class="line">        11       395188</span>
<span class="line">江苏    4        537079</span>
<span class="line">        7        841032</span>
<span class="line">        10       710962</span>
<span class="line">        12       215307</span>
<span class="line">浙江    3        248354</span>
<span class="line">        8        439508</span>
<span class="line">福建    1       1852496</span>
<span class="line">        2       1111141</span>
<span class="line">        3       1106579</span>
<span class="line">        4        830207</span>
<span class="line">        5       1036351</span>
<span class="line">        6        816100</span>
<span class="line">        7        577283</span>
<span class="line">        8        658627</span>
<span class="line">        9        769999</span>
<span class="line">        10       580707</span>
<span class="line">        11       486258</span>
<span class="line">        12       352479</span>
<span class="line">Name: 销售额, dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望统计出每个区域的销售总额以及每个区域单笔金额的最高和最低，我们可以在<code>DataFrame</code>或<code>Series</code>对象上使用<code>agg</code>方法并指定多个聚合函数，代码和结果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby(&#39;销售区域&#39;).销售额.agg([&#39;sum&#39;, &#39;max&#39;, &#39;min&#39;])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">           sum     max   min</span>
<span class="line">销售区域                        </span>
<span class="line">上海    11610489  116303   948</span>
<span class="line">北京    12477717  133411   690</span>
<span class="line">安徽      895463   68502  1683</span>
<span class="line">广东     1617949  120807   990</span>
<span class="line">江苏     2304380  114312  1089</span>
<span class="line">浙江      687862   90909  3927</span>
<span class="line">福建    10178227   87527   897</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望自定义聚合后的列的名字，可以使用如下所示的方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby(&#39;销售区域&#39;).销售额.agg(销售总额=&#39;sum&#39;, 单笔最高=&#39;max&#39;, 单笔最低=&#39;min&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">          销售总额    单笔最高  单笔最低</span>
<span class="line">销售区域                        </span>
<span class="line">上海      11610489     116303     948</span>
<span class="line">北京      12477717     133411     690</span>
<span class="line">安徽        895463      68502    1683</span>
<span class="line">广东       1617949     120807     990</span>
<span class="line">江苏       2304380     114312    1089</span>
<span class="line">浙江        687862      90909    3927</span>
<span class="line">福建      10178227      87527     897</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要对多个列使用不同的聚合函数，例如“统计每个销售区域销售额的总和以及销售数量的最低值和最高值”，我们可以按照下面的方式来操作。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df.groupby(&#39;销售区域&#39;)[[&#39;销售额&#39;, &#39;销售数量&#39;]].agg({</span>
<span class="line">    &#39;销售额&#39;: &#39;sum&#39;, &#39;销售数量&#39;: [&#39;max&#39;, &#39;min&#39;]</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">           销售额  销售数量    </span>
<span class="line">           sum    max min</span>
<span class="line">销售区域                   </span>
<span class="line">上海    11610489  100  10</span>
<span class="line">北京    12477717  100  10</span>
<span class="line">安徽      895463   98  16</span>
<span class="line">广东     1617949   98  10</span>
<span class="line">江苏     2304380  100  11</span>
<span class="line">浙江      687862   95  20</span>
<span class="line">福建    10178227  100  10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="透视表和交叉表" tabindex="-1"><a class="header-anchor" href="#透视表和交叉表"><span>透视表和交叉表</span></a></h4><p>上面的例子中，“统计每个销售区域每个月的销售总额”会产生一个看起来很长的结果，在实际工作中我们通常把那些行很多列很少的表成为“窄表”，如果我们不想得到这样的一个“窄表”，可以使用<code>DataFrame</code>的<code>pivot_table</code>方法或者是<code>pivot_table</code>函数来生成透视表。透视表的本质就是对数据进行分组聚合操作，<strong>根据 A 列对 B 列进行统计</strong>，如果大家有使用 Excel 的经验，相信对透视表这个概念一定不会陌生。例如，我们要“统计每个销售区域的销售总额”，那么“销售区域”就是我们的 A 列，而“销售额”就是我们的 B 列，在<code>pivot_table</code>函数中分别对应<code>index</code>和<code>values</code>参数，这两个参数都可以是单个列或者多个列。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.pivot_table(df, index=&#39;销售区域&#39;, values=&#39;销售额&#39;, aggfunc=&#39;sum&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">           销售额</span>
<span class="line">销售区域          </span>
<span class="line">上海    11610489</span>
<span class="line">北京    12477717</span>
<span class="line">安徽      895463</span>
<span class="line">广东     1617949</span>
<span class="line">江苏     2304380</span>
<span class="line">浙江      687862</span>
<span class="line">福建    10178227</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的结果操作跟之前用<code>groupby</code>的方式得到的结果有一些区别，<code>groupby</code>操作后，如果对单个列进行聚合，得到的结果是一个<code>Series</code>对象，而上面的结果是一个<code>DataFrame</code> 对象。</p></blockquote><p>如果要统计每个销售区域每个月的销售总额，也可以使用<code>pivot_table</code>函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">df[&#39;月份&#39;] = df[&#39;销售日期&#39;].dt.month</span>
<span class="line">pd.pivot_table(df, index=[&#39;销售区域&#39;, &#39;月份&#39;], values=&#39;销售额&#39;, aggfunc=&#39;sum&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的操作结果是一个<code>DataFrame</code>，但也是一个长长的“窄表”，如果希望做成一个行比较少列比较多的“宽表”，可以将<code>index</code>参数中的列放到<code>columns</code>参数中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.pivot_table(df, index=&#39;销售区域&#39;, columns=&#39;月份&#39;, values=&#39;销售额&#39;, aggfunc=&#39;sum&#39;, fill_value=0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>pivot_table</code>函数的<code>fill_value=0</code>会将空值处理为<code>0</code>。</p></blockquote><p>输出：</p><img src="`+i+`" style="zoom:50%;"><p>使用<code>pivot_table</code>函数时，还可以通过添加<code>margins</code>和<code>margins_name</code>参数对分组聚合的结果做一个汇总，具体的操作和效果如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.pivot_table(df, index=&#39;销售区域&#39;, columns=&#39;月份&#39;, values=&#39;销售额&#39;, aggfunc=&#39;sum&#39;, fill_value=0, margins=True, margins_name=&#39;总计&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><img src="`+l+`" style="zoom:50%;"><p>交叉表就是一种特殊的透视表，它不需要先构造一个<code>DataFrame</code>对象，而是直接通过数组或<code>Series</code>对象指定两个或多个因素进行运算得到统计结果。例如，我们要统计每个销售区域的销售总额，也可以按照如下所示的方式来完成，我们先准备三组数据。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sales_area, sales_month, sales_amount = df[&#39;销售区域&#39;], df[&#39;月份&#39;], df[&#39;销售额&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用<code>crosstab</code>函数生成交叉表。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.crosstab(index=sales_area, columns=sales_month, values=sales_amount, aggfunc=&#39;sum&#39;).fillna(0).astype(&#39;i8&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码使用了<code>DataFrame</code>对象的<code>fillna</code>方法将空值处理为0，再使用<code>astype</code>方法将数据类型处理成整数。</p></blockquote><h3 id="数据呈现" tabindex="-1"><a class="header-anchor" href="#数据呈现"><span>数据呈现</span></a></h3><p>一图胜千言，我们对数据进行透视的结果，最终要通过图表的方式呈现出来，因为图表具有极强的表现力，能够让我们迅速的解读数据中隐藏的价值。和<code>Series</code>一样，<code>DataFrame</code>对象提供了<code>plot</code>方法来支持绘图，底层仍然是通过<code>matplotlib</code>库实现图表的渲染。关于<code>matplotlib</code>的内容，我们在下一个章节进行详细的探讨，这里我们只简单的讲解<code>plot</code>方法的用法。</p><p>例如，我们想通过一张柱状图来比较“每个销售区域的销售总额”，可以直接在透视表上使用<code>plot</code>方法生成柱状图。我们先导入<code>matplotlib.pyplot</code>模块，通过修改绘图的参数使其支持中文显示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">plt.rcParams[&#39;font.sans-serif&#39;] = &#39;FZJKai-Z03S&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的<code>FZJKai-Z03S</code>是我电脑上已经安装的一种支持中文的字体的名称，字体的名称可以通过查看用户主目录下<code>.matplotlib</code>文件夹下名为<code>fontlist-v330.json</code>的文件来获得，而这个文件在执行上面的命令后就会生成。</p></blockquote><p>使用魔法指令配置生成矢量图。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">%config InlineBackend.figure_format = &#39;svg&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>绘制“每个销售区域销售总额”的柱状图。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">temp = pd.pivot_table(df, index=&#39;销售区域&#39;, values=&#39;销售额&#39;, aggfunc=&#39;sum&#39;)</span>
<span class="line">temp.plot(figsize=(8, 4), kind=&#39;bar&#39;)</span>
<span class="line">plt.xticks(rotation=0)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的第3行代码会将横轴刻度上的文字旋转到0度，第4行代码会显示图像。</p></blockquote><p>输出：</p><img src="`+d+`" style="zoom:45%;"><p>如果要绘制饼图，可以修改<code>plot</code>方法的<code>kind</code>参数为<code>pie</code>，然后使用定制饼图的参数对图表加以定制，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">temp.sort_values(by=&#39;销售额&#39;, ascending=False).plot(</span>
<span class="line">    figsize=(6, 6),</span>
<span class="line">    kind=&#39;pie&#39;,</span>
<span class="line">    y=&#39;销售额&#39;,</span>
<span class="line">    ylabel=&#39;&#39;,</span>
<span class="line">    autopct=&#39;%.2f%%&#39;,</span>
<span class="line">    pctdistance=0.8,</span>
<span class="line">    wedgeprops=dict(linewidth=1, width=0.35),</span>
<span class="line">    legend=False</span>
<span class="line">)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+t+'" style="zoom:35%;">',112),r=[p];function v(u,o){return e(),n("div",null,r)}const b=s(c,[["render",v],["__file","75.深入浅出pandas-4.html.vue"]]),h=JSON.parse('{"path":"/python/Python-100-Days/Day66-80/75.%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BApandas-4.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"深入浅出pandas-4","slug":"深入浅出pandas-4","link":"#深入浅出pandas-4","children":[{"level":3,"title":"数据透视","slug":"数据透视","link":"#数据透视","children":[]},{"level":3,"title":"数据呈现","slug":"数据呈现","link":"#数据呈现","children":[]}]}],"git":{"updatedTime":1720597060000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-100-Days/Day66-80/75.深入浅出pandas-4.md"}');export{b as comp,h as data};
