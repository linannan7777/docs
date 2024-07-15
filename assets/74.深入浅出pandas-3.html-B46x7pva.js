import{_ as e,c as s,o as n,d as a}from"./app-BFPhRmaa.js";const l={},i=a(`<h2 id="深入浅出pandas-3" tabindex="-1"><a class="header-anchor" href="#深入浅出pandas-3"><span>深入浅出pandas-3</span></a></h2><p>在完成数据加载之后，我们可能需要对事实表和维度表进行连接，这是对数据进行多维度拆解的基础；我们可能从不同的数据源加载了结构相同的数据，我们需要将这些数据拼接起来；我们把这些操作统称为数据重塑。当然，由于企业的信息化水平以及数据中台建设水平的差异，我们拿到的数据未必是质量很好的，可能还需要对数据中的缺失值、重复值、异常值进行适当的处理。即便我们获取的数据在质量上是没有问题的，但也可能需要对数据进行一系列的预处理，才能满足我们做数据分析的需求。接下来，我们就为大家讲解和梳理这方面的知识。</p><h3 id="数据重塑" tabindex="-1"><a class="header-anchor" href="#数据重塑"><span>数据重塑</span></a></h3><p>有的时候，我们做数据分析需要的原始数据可能并不是来自一个地方，就像上一章的例子中，我们从关系型数据库中读取了三张表，得到了三个<code>DataFrame</code>对象，但实际工作可能需要我们把他们的数据整合到一起。例如：<code>emp_df</code>和<code>emp2_df</code>其实都是员工的数据，而且数据结构完全一致，我们可以使用<code>pandas</code>提供的<code>concat</code>函数实现两个或多个<code>DataFrame</code>的数据拼接，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">all_emp_df = pd.concat([emp_df, emp2_df])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        ename    job        mgr      sal     comm    dno</span>
<span class="line">eno</span>
<span class="line">1359    胡一刀    销售员	   3344.0	1800	200.0	30</span>
<span class="line">2056    乔峰	    分析师	    7800.0	 5000	 1500.0	 20</span>
<span class="line">3088    李莫愁	   设计师	   2056.0	3500	800.0	20</span>
<span class="line">3211    张无忌	   程序员	   2056.0	3200	NaN     20</span>
<span class="line">3233    丘处机	   程序员	   2056.0	3400	NaN	    20</span>
<span class="line">3244    欧阳锋	   程序员	   3088.0	3200	NaN     20</span>
<span class="line">3251    张翠山	   程序员	   2056.0	4000	NaN	    20</span>
<span class="line">3344    黄蓉	    销售主管   7800.0	3000	800.0	30</span>
<span class="line">3577    杨过	    会计	     5566.0	  2200	  NaN	  10</span>
<span class="line">3588    朱九真	   会计	    5566.0	 2500	 NaN	 10</span>
<span class="line">4466    苗人凤	   销售员	   3344.0	2500	NaN	    30</span>
<span class="line">5234    郭靖	    出纳	     5566.0	  2000	  NaN	  10</span>
<span class="line">5566    宋远桥	   会计师	   7800.0	4000	1000.0	10</span>
<span class="line">7800    张三丰	   总裁	    NaN      9000	 1200.0	 20</span>
<span class="line">9500	张三丰	   总裁	    NaN	     50000	 8000.0	 20</span>
<span class="line">9600	王大锤    程序员	   9800.0	8000	600.0	20</span>
<span class="line">9700	张三丰	   总裁	    NaN	     60000	 6000.0	 20</span>
<span class="line">9800	骆昊	    架构师	    7800.0	 30000	 5000.0	 20</span>
<span class="line">9900	陈小刀	   分析师	   9800.0	10000	1200.0	20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码将两个代表员工数据的<code>DataFrame</code>拼接到了一起，接下来我们使用<code>merge</code>函数将员工表和部门表的数据合并到一张表中，代码如下所示。</p><p>先使用<code>reset_index</code>方法重新设置<code>all_emp_df</code>的索引，这样<code>eno</code> 不再是索引而是一个普通列，<code>reset_index</code>方法的<code>inplace</code>参数设置为<code>True</code>表示，重置索引的操作直接在<code>all_emp_df</code>上执行，而不是返回修改后的新对象。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">all_emp_df.reset_index(inplace=True)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过<code>merge</code>函数合并数据，当然，也可以调用<code>DataFrame</code>对象的<code>merge</code>方法来达到同样的效果。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.merge(all_emp_df, dept_df, how=&#39;inner&#39;, on=&#39;dno&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    eno	    ename	job	     mgr	 sal	 comm	 dno	dname	 dloc</span>
<span class="line">0	1359	胡一刀	 销售员	3344.0	1800	200.0	30	   销售部	 重庆</span>
<span class="line">1	3344	黄蓉	  销售主管	7800.0	3000	800.0	30	   销售部	 重庆</span>
<span class="line">2	4466	苗人凤	 销售员	3344.0	2500	NaN	    30	   销售部	 重庆</span>
<span class="line">3	2056	乔峰	  分析师	 7800.0	 5000	 1500.0	 20	    研发部	  成都</span>
<span class="line">4	3088	李莫愁	 设计师	2056.0	3500	800.0	20	   研发部	 成都</span>
<span class="line">5	3211	张无忌  程序员	2056.0	3200	NaN	    20	   研发部	 成都</span>
<span class="line">6	3233	丘处机	 程序员	2056.0	3400	NaN	    20	   研发部	 成都</span>
<span class="line">7	3244	欧阳锋	 程序员	3088.0	3200	NaN	    20	   研发部	 成都</span>
<span class="line">8	3251	张翠山	 程序员	2056.0	4000	NaN	    20	   研发部	 成都</span>
<span class="line">9	7800	张三丰	 总裁	     NaN	 9000	 1200.0	 20	    研发部	  成都</span>
<span class="line">10	9500	张三丰	 总裁	     NaN	 50000	 8000.0	 20	    研发部	  成都</span>
<span class="line">11	9600	王大锤	 程序员	9800.0	8000	600.0	20	   研发部	 成都</span>
<span class="line">12	9700	张三丰	 总裁	     NaN	 60000	 6000.0	 20	    研发部	  成都</span>
<span class="line">13	9800	骆昊	  架构师	 7800.0	 30000	 5000.0	 20	    研发部	  成都</span>
<span class="line">14	9900	陈小刀	 分析师	9800.0	10000	1200.0	20	   研发部	 成都</span>
<span class="line">15	3577	杨过	  会计	  5566.0  2200	  NaN	  10	会计部	  北京</span>
<span class="line">16	3588	朱九真	 会计	     5566.0	 2500	 NaN	 10	   会计部	 北京</span>
<span class="line">17	5234	郭靖	  出纳	  5566.0  2000	  NaN	  10	会计部	  北京</span>
<span class="line">18	5566	宋远桥	 会计师	7800.0	4000	1000.0	10	  会计部	北京</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>merge</code>函数的一个参数代表合并的左表、第二个参数代表合并的右表，有SQL编程经验的同学对这两个词是不是感觉到非常亲切。正如大家猜想的那样，<code>DataFrame</code>对象的合并跟数据库中的表连接非常类似，所以上面代码中的<code>how</code>代表了合并两张表的方式，有<code>left</code>、<code>right</code>、<code>inner</code>、<code>outer</code>四个选项；而<code>on</code>则代表了基于哪个列实现表的合并，相当于 SQL 表连接中的连表条件，如果左右两表对应的列列名不同，可以用<code>left_on</code>和<code>right_on</code>参数取代<code>on</code>参数分别进行指定。</p><p>如果对上面的代码稍作修改，将<code>how</code>参数修改为<code>&#39;right&#39;</code>，大家可以思考一下代码执行的结果。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.merge(all_emp_df, dept_df, how=&#39;right&#39;, on=&#39;dno&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行结果比之前的输出多出了如下所示的一行，这是因为<code>how=&#39;right&#39;</code>代表右外连接，也就意味着右表<code>dept_df</code>中的数据会被完整的查出来，但是在<code>all_emp_df</code>中又没有编号为<code>40</code> 部门的员工，所以对应的位置都被填入了空值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">19	NaN    NaN    NaN    NaN    NaN     NaN    40    运维部    深圳</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="数据清洗" tabindex="-1"><a class="header-anchor" href="#数据清洗"><span>数据清洗</span></a></h3><p>通常，我们从 Excel、CSV 或数据库中获取到的数据并不是非常完美的，里面可能因为系统或人为的原因混入了重复值或异常值，也可能在某些字段上存在缺失值；再者，<code>DataFrame</code>中的数据也可能存在格式不统一、量纲不统一等各种问题。因此，在开始数据分析之前，对数据进行清洗就显得特别重要。</p><h4 id="缺失值" tabindex="-1"><a class="header-anchor" href="#缺失值"><span>缺失值</span></a></h4><p>可以使用<code>DataFrame</code>对象的<code>isnull</code>或<code>isna</code>方法来找出数据表中的缺失值，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.isnull()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.isna()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        ename   job	    mgr     sal     comm    dno</span>
<span class="line">eno						</span>
<span class="line">1359	False	False	False	False	False	False</span>
<span class="line">2056	False	False	False	False	False	False</span>
<span class="line">3088	False	False	False	False	False	False</span>
<span class="line">3211	False	False	False	False	True	False</span>
<span class="line">3233	False	False	False	False	True	False</span>
<span class="line">3244	False	False	False	False	True	False</span>
<span class="line">3251	False	False	False	False	True	False</span>
<span class="line">3344	False	False	False	False	False	False</span>
<span class="line">3577	False	False	False	False	True	False</span>
<span class="line">3588	False	False	False	False	True	False</span>
<span class="line">4466	False	False	False	False	True	False</span>
<span class="line">5234	False	False	False	False	True	False</span>
<span class="line">5566	False	False	False	False	False	False</span>
<span class="line">7800	False	False	True	False	False	False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对应的，<code>notnull</code>和<code>notna</code>方法可以将非空的值标记为<code>True</code>。如果想删除这些缺失值，可以使用<code>DataFrame</code>对象的<code>dropna</code>方法，该方法的<code>axis</code>参数可以指定沿着0轴还是1轴删除，也就是说当遇到空值时，是删除整行还是删除整列，默认是沿0轴进行删除的，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.dropna()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        ename   job      mgr	 sal    comm     dno</span>
<span class="line">eno						</span>
<span class="line">1359	胡一刀  销售员	3344.0	1800   200.0	30</span>
<span class="line">2056	乔峰    架构师	 7800.0	 5000	1500.0	 20</span>
<span class="line">3088	李莫愁  设计师	2056.0	3500   800.0	20</span>
<span class="line">3344	黄蓉    销售主管	7800.0	3000   800.0	30</span>
<span class="line">5566	宋远桥  会计师	7800.0	4000   1000.0	10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要沿着1轴进行删除，可以使用下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.dropna(axis=1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        ename    job      sal    dno</span>
<span class="line">eno				</span>
<span class="line">1359	胡一刀   销售员    1800	30</span>
<span class="line">2056	乔峰     架构师	  5000	 20</span>
<span class="line">3088	李莫愁   设计师    3500	20</span>
<span class="line">3211	张无忌   程序员    3200	20</span>
<span class="line">3233	丘处机   程序员    3400	20</span>
<span class="line">3244	欧阳锋   程序员    3200	20</span>
<span class="line">3251	张翠山   程序员    4000	20</span>
<span class="line">3344	黄蓉     销售主管  3000	30</span>
<span class="line">3577	杨过     会计	   2200	  10</span>
<span class="line">3588	朱九真   会计	  2500	 10</span>
<span class="line">4466	苗人凤   销售员	 2500   30</span>
<span class="line">5234	郭靖     出纳      2000   10</span>
<span class="line">5566	宋远桥   会计师    4000   10</span>
<span class="line">7800	张三丰   总裁      9000   20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：<code>DataFrame</code>对象的很多方法都有一个名为<code>inplace</code>的参数，该参数的默认值为<code>False</code>，表示我们的操作不会修改原来的<code>DataFrame</code>对象，而是将处理后的结果通过一个新的<code>DataFrame</code>对象返回。如果将该参数的值设置为<code>True</code>，那么我们的操作就会在原来的<code>DataFrame</code>上面直接修改，方法的返回值为<code>None</code>。简单的说，上面的操作并没有修改<code>emp_df</code>，而是返回了一个新的<code>DataFrame</code>对象。</p></blockquote><p>在某些特定的场景下，我们可以对空值进行填充，对应的方法是<code>fillna</code>，填充空值时可以使用指定的值（通过<code>value</code>参数进行指定），也可以用表格中前一个单元格（通过设置参数<code>method=ffill</code>）或后一个单元格（通过设置参数<code>method=bfill</code>）的值进行填充，当代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.fillna(value=0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：填充的值如何选择也是一个值得探讨的话题，实际工作中，可能会使用某种统计量（如：均值、众数等）进行填充，或者使用某种插值法（如：随机插值法、拉格朗日插值法等）进行填充，甚至有可能通过回归模型、贝叶斯模型等对缺失数据进行填充。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        ename    job        mgr      sal     comm    dno</span>
<span class="line">eno</span>
<span class="line">1359	胡一刀    销售员	   3344.0	1800	200.0	30</span>
<span class="line">2056	乔峰	    分析师	    7800.0	 5000	 1500.0	 20</span>
<span class="line">3088	李莫愁	   设计师	   2056.0	3500	800.0	20</span>
<span class="line">3211	张无忌	   程序员	   2056.0	3200	0.0     20</span>
<span class="line">3233	丘处机	   程序员	   2056.0	3400	0.0	    20</span>
<span class="line">3244	欧阳锋	   程序员	   3088.0	3200	0.0     20</span>
<span class="line">3251	张翠山	   程序员	   2056.0	4000	0.0	    20</span>
<span class="line">3344	黄蓉	    销售主管   7800.0	3000	800.0	30</span>
<span class="line">3577	杨过	    会计	     5566.0	  2200	  0.0	  10</span>
<span class="line">3588	朱九真	   会计	    5566.0	 2500	 0.0	 10</span>
<span class="line">4466	苗人凤	   销售员	   3344.0	2500	0.0	    30</span>
<span class="line">5234	郭靖	    出纳	     5566.0	  2000	  0.0	  10</span>
<span class="line">5566	宋远桥	   会计师	   7800.0	4000	1000.0	10</span>
<span class="line">7800	张三丰	   总裁	    0.0      9000	 1200.0	 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重复值" tabindex="-1"><a class="header-anchor" href="#重复值"><span>重复值</span></a></h4><p>接下来，我们先给之前的部门表添加两行数据，让部门表中名为“研发部”和“销售部”的部门各有两个。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">dept_df.loc[50] = {&#39;dname&#39;: &#39;研发部&#39;, &#39;dloc&#39;: &#39;上海&#39;}</span>
<span class="line">dept_df.loc[60] = {&#39;dname&#39;: &#39;销售部&#39;, &#39;dloc&#39;: &#39;长沙&#39;}</span>
<span class="line">dept_df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    dname  dloc</span>
<span class="line">dno		</span>
<span class="line">10	会计部	北京</span>
<span class="line">20	研发部	成都</span>
<span class="line">30	销售部	重庆</span>
<span class="line">40	运维部	天津</span>
<span class="line">50	研发部	上海</span>
<span class="line">60	销售部	长沙</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们的数据表中有重复数据了，我们可以通过<code>DataFrame</code>对象的<code>duplicated</code>方法判断是否存在重复值，该方法在不指定参数时默认判断行索引是否重复，我们也可以指定根据部门名称<code>dname</code>判断部门是否重复，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">dept_df.duplicated(&#39;dname&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">dno</span>
<span class="line">10    False</span>
<span class="line">20    False</span>
<span class="line">30    False</span>
<span class="line">40    False</span>
<span class="line">50     True</span>
<span class="line">60     True</span>
<span class="line">dtype: bool</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可以看到，<code>50</code>和<code>60</code>两个部门从部门名称上来看是重复的，如果要删除重复值，可以使用<code>drop_duplicates</code>方法，该方法的<code>keep</code>参数可以控制在遇到重复值时，保留第一项还是保留最后一项，或者多个重复项一个都不用保留，全部删除掉。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">dept_df.drop_duplicates(&#39;dname&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">	dname	dloc</span>
<span class="line">dno		</span>
<span class="line">10	会计部	北京</span>
<span class="line">20	研发部	成都</span>
<span class="line">30	销售部	重庆</span>
<span class="line">40	运维部	天津</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>keep</code>参数的值修改为<code>last</code>。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">dept_df.drop_duplicates(&#39;dname&#39;, keep=&#39;last&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">	dname	dloc</span>
<span class="line">dno		</span>
<span class="line">10	会计部	北京</span>
<span class="line">40	运维部	天津</span>
<span class="line">50	研发部	上海</span>
<span class="line">60	销售部	长沙</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用同样的方式，我们也可以清除<code>all_emp_df</code>中的重复数据，例如我们认定“ename”和“job”两个字段完全相同的就是重复数据，我们可以用下面的代码去除重复数据。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">all_emp_df<span class="token punctuation">.</span>drop_duplicates<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ename&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;job&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inplace<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的<code>drop_duplicates</code>方法添加了参数<code>inplace=True</code>，该方法不会返回新的<code>DataFrame</code>对象，而是在原来的<code>DataFrame</code>对象上直接删除，大家可以查看<code>all_emp_df</code>看看是不是已经移除了重复的员工数据。</p></blockquote><h4 id="异常值" tabindex="-1"><a class="header-anchor" href="#异常值"><span>异常值</span></a></h4><p>异常值在统计学上的全称是疑似异常值，也称作离群点（outlier），异常值的分析也称作离群点分析。异常值是指样本中出现的“极端值”，数据值看起来异常大或异常小，其分布明显偏离其余的观测值。实际工作中，有些异常值可能是由系统或人为原因造成的，但有些异常值却不是，它们能够重复且稳定的出现，属于正常的极端值，例如很多游戏产品中头部玩家的数据往往都是离群的极端值。所以，我们既不能忽视异常值的存在，也不能简单地把异常值从数据分析中剔除。重视异常值的出现，分析其产生的原因，常常成为发现问题进而改进决策的契机。</p><p>异常值的检测有Z-score 方法、IQR 方法、DBScan 聚类、孤立森林等，这里我们对前两种方法做一个简单的介绍。</p><img src="http://localhost/mypic/20211004192858.png" style="zoom:50%;"><p>如果数据服从正态分布，依据3σ法则，异常值被定义与平均值的偏差超过三倍标准差的值。在正态分布下，距离平均值3σ之外的值出现的概率为$ P(|x-\\mu|&gt;3\\sigma)&lt;0.003 $，属于小概率事件。如果数据不服从正态分布，那么可以用远离均值的多少倍的标准差来描述，这里的倍数就是Z-score。Z-score以标准差为单位去度量某一原始分数偏离平均值的距离，公式如下所示。 $$ z = \\frac {X - \\mu} {\\sigma} \\ |z| &gt; 3 $$ Z-score需要根据经验和实际情况来决定，通常把远离标准差<code>3</code>倍距离以上的数据点视为离群点，下面的代给出了如何通过Z-score方法检测异常值。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def detect_outliers_zscore(data, threshold=3):</span>
<span class="line">    avg_value = np.mean(data)</span>
<span class="line">    std_value = np.std(data)</span>
<span class="line">    z_score = np.abs((data - avg_value) / std_value)</span>
<span class="line">    return data[z_score &gt; threshold]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IQR 方法中的IQR（Inter-Quartile Range）代表四分位距离，即上四分位数（Q3）和下四分位数（Q1）的差值。通常情况下，可以认为小于 $ Q1 - 1.5 \\times IQR $ 或大于 $ Q3 + 1.5 \\times IQR $ 的就是异常值，而这种检测异常值的方法也是箱线图（后面会讲到）默认使用的方法。下面的代码给出了如何通过 IQR 方法检测异常值。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def detect_outliers_iqr(data, whis=1.5):</span>
<span class="line">    q1, q3 = np.quantile(data, [0.25, 0.75])</span>
<span class="line">    iqr = q3 - q1</span>
<span class="line">    lower, upper = q1 - whis * iqr, q3 + whis * iqr</span>
<span class="line">    return data[(data &lt; lower) | (data &gt; upper)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要删除异常值，可以使用<code>DataFrame</code>对象的<code>drop</code>方法，该方法可以根据行索引或列索引删除指定的行或列。例如我们认为月薪低于<code>2000</code>或高于<code>8000</code>的是员工表中的异常值，可以用下面的代码删除对应的记录。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">emp_df.drop(emp_df[(emp_df.sal &gt; 8000) | (emp_df.sal &lt; 2000)].index)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果要替换掉异常值，可以通过给单元格赋值的方式来实现，也可以使用<code>replace</code>方法将指定的值替换掉。例如我们要将月薪为<code>1800</code>和<code>9000</code>的替换为月薪的平均值，补贴为<code>800</code>的替换为<code>1000</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">avg_sal = np.mean(emp_df.sal).astype(int)</span>
<span class="line">emp_df.replace({&#39;sal&#39;: [1800, 9000], &#39;comm&#39;: 800}, {&#39;sal&#39;: avg_sal, &#39;comm&#39;: 1000})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="预处理" tabindex="-1"><a class="header-anchor" href="#预处理"><span>预处理</span></a></h4><p>对数据进行预处理也是一个很大的话题，它包含了对数据的拆解、变换、归约、离散化等操作。我们先来看看数据的拆解。如果数据表中的数据是一个时间日期，我们通常都需要从年、季度、月、日、星期、小时、分钟等维度对其进行拆解，如果时间日期是用字符串表示的，可以先通过<code>pandas</code>的<code>to_datetime</code>函数将其处理成时间日期。</p><p>在下面的例子中，我们先读取 Excel 文件，获取到一组销售数据，其中第一列就是销售日期，我们将其拆解为“月份”、“季度”和“星期”，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sales_df = pd.read_excel(</span>
<span class="line">    &#39;data/2020年销售数据.xlsx&#39;,</span>
<span class="line">    usecols=[&#39;销售日期&#39;, &#39;销售区域&#39;, &#39;销售渠道&#39;, &#39;品牌&#39;, &#39;销售额&#39;]</span>
<span class="line">)</span>
<span class="line">sales_df.info()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面代码中使用了相对路径来获取 Excel 文件，也就是说 Excel 文件在当前工作路径下名为<code>data</code>的文件夹中。如果需要上面例子中的 Excel 文件，可以通过下面的百度云盘地址进行获取。链接：<a href="https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g</a>，提取码：e7b4。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;class &#39;pandas.core.frame.DataFrame&#39;&gt;</span>
<span class="line">RangeIndex: 1945 entries, 0 to 1944</span>
<span class="line">Data columns (total 5 columns):</span>
<span class="line"> #   Column  Non-Null Count  Dtype         </span>
<span class="line">---  ------  --------------  -----         </span>
<span class="line"> 0   销售日期    1945 non-null   datetime64[ns]</span>
<span class="line"> 1   销售区域    1945 non-null   object        </span>
<span class="line"> 2   销售渠道    1945 non-null   object        </span>
<span class="line"> 3   品牌        1945 non-null   object        </span>
<span class="line"> 4   销售额      1945 non-null   int64         </span>
<span class="line">dtypes: datetime64[ns](1), int64(1), object(3)</span>
<span class="line">memory usage: 76.1+ KB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">sales_df[&#39;月份&#39;] = sales_df[&#39;销售日期&#39;].dt.month</span>
<span class="line">sales_df[&#39;季度&#39;] = sales_df[&#39;销售日期&#39;].dt.quarter</span>
<span class="line">sales_df[&#39;星期&#39;] = sales_df[&#39;销售日期&#39;].dt.weekday</span>
<span class="line">sales_df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">	    销售日期	 销售区域	销售渠道	品牌	  销售额	月份	季度	星期</span>
<span class="line">0	    2020-01-01	上海	     拼多多	 八匹马   8217	    1	 1	   2</span>
<span class="line">1	    2020-01-01	上海	     抖音	      八匹马	6351	 1	  1	    2</span>
<span class="line">2	    2020-01-01	上海	     天猫	      八匹马	14365	 1	  1	    2</span>
<span class="line">3	    2020-01-01	上海	     天猫       八匹马	2366	 1	  1     2</span>
<span class="line">4	    2020-01-01	上海	     天猫 	  皮皮虾	15189	 1	  1     2</span>
<span class="line">...     ...         ...        ...       ...      ...     ...  ...   ...</span>
<span class="line">1940    2020-12-30	北京	     京东	      花花姑娘 6994     12	 4	   2</span>
<span class="line">1941    2020-12-30	福建	     实体	      八匹马	7663	 12	  4	    2</span>
<span class="line">1942    2020-12-31	福建	     实体	      花花姑娘 14795    12	 4	   3</span>
<span class="line">1943    2020-12-31	福建	     抖音	      八匹马	3481	 12	  4	    3</span>
<span class="line">1944    2020-12-31	福建	     天猫	      八匹马	2673	 12	  4	    3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，通过日期时间类型的<code>Series</code>对象的<code>dt</code> 属性，获得一个访问日期时间的对象，通过该对象的<code>year</code>、<code>month</code>、<code>quarter</code>、<code>hour</code>等属性，就可以获取到年、月、季度、小时等时间信息，获取到的仍然是一个<code>Series</code>对象，它包含了一组时间信息，所以我们通常也将这个<code>dt</code>属性称为“日期时间向量”。</p><p>我们再来说一说字符串类型的数据的处理，我们先从指定的 Excel 文件中读取某招聘网站的招聘数据。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">jobs_df = pd.read_csv(</span>
<span class="line">    &#39;data/某招聘网站招聘数据.csv&#39;,</span>
<span class="line">    usecols=[&#39;city&#39;, &#39;companyFullName&#39;, &#39;positionName&#39;, &#39;salary&#39;]</span>
<span class="line">)</span>
<span class="line">jobs_df.info()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面代码中使用了相对路径来获取 CSV 文件，也就是说 CSV 文件在当前工作路径下名为<code>data</code>的文件夹中。如果需要上面例子中的 CSV 文件，可以通过下面的百度云盘地址进行获取。链接：<a href="https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g</a>，提取码：e7b4。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;class &#39;pandas.core.frame.DataFrame&#39;&gt;</span>
<span class="line">RangeIndex: 3140 entries, 0 to 3139</span>
<span class="line">Data columns (total 4 columns):</span>
<span class="line"> #   Column           Non-Null Count  Dtype </span>
<span class="line">---  ------           --------------  ----- </span>
<span class="line"> 0   city             3140 non-null   object</span>
<span class="line"> 1   companyFullName  3140 non-null   object</span>
<span class="line"> 2   positionName     3140 non-null   object</span>
<span class="line"> 3   salary           3140 non-null   object</span>
<span class="line">dtypes: object(4)</span>
<span class="line">memory usage: 98.2+ KB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看前<code>5</code>条数据。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">jobs_df.head()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    city    companyFullName              positionName    salary</span>
<span class="line">0   北京	  达疆网络科技（上海）有限公司    数据分析岗       15k-30k</span>
<span class="line">1   北京	  北京音娱时光科技有限公司        数据分析        10k-18k</span>
<span class="line">2   北京	  北京千喜鹤餐饮管理有限公司	     数据分析        20k-30k</span>
<span class="line">3   北京	  吉林省海生电子商务有限公司	     数据分析        33k-50k</span>
<span class="line">4   北京	  韦博网讯科技（北京）有限公司	数据分析        10k-15k</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的数据表一共有<code>3140</code>条数据，但并非所有的职位都是“数据分析”的岗位，如果要筛选出数据分析的岗位，可以通过检查<code>positionName</code>字段是否包含“数据分析”这个关键词，这里需要模糊匹配，应该如何实现呢？我们可以先获取<code>positionName</code>列，因为这个<code>Series</code>对象的<code>dtype</code>是字符串，所以可以通过<code>str</code>属性获取对应的字符串向量，然后就可以利用我们熟悉的字符串的方法来对其进行操作，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">jobs_df = jobs_df[jobs_df.positionName.str.contains(&#39;数据分析&#39;)]</span>
<span class="line">jobs_df.shape</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">(1515, 4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看出，筛选后的数据还有<code>1515</code>条。接下来，我们还需要对<code>salary</code>字段进行处理，如果我们希望统计所有岗位的平均工资或每个城市的平均工资，首先需要将用范围表示的工资处理成其中间值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">jobs_df.salary.str.extract(r&#39;(\\d+)[kK]?-(\\d+)[kK]?&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码通过正则表达式捕获组从字符串中抽取出两组数字，分别对应工资的下限和上限，对正则表达式不熟悉的读者，可以阅读我的知乎专栏“从零开始学Python”中的<a href="https://zhuanlan.zhihu.com/p/158929767" target="_blank" rel="noopener noreferrer">《正则表达式的应用》</a>一文。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">        0     1</span>
<span class="line">0	    15    30</span>
<span class="line">1	    10	  18</span>
<span class="line">2       20    30</span>
<span class="line">3       33    50</span>
<span class="line">4       10    15</span>
<span class="line">...     ...   ...</span>
<span class="line">3065    8     10</span>
<span class="line">3069    6     10</span>
<span class="line">3070    2     4</span>
<span class="line">3071    6     12</span>
<span class="line">3088    8     12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家的是，抽取出来的两列数据都是字符串类型的值，我们需要将其转换成<code>int</code>类型，才能计算平均值，对应的方法是<code>DataFrame</code>对象的<code>applymap</code>方法，该方法的参数是一个函数，而该函数会作用于<code>DataFrame</code>中的每个元素。完成这一步之后，我们就可以使用<code>apply</code>方法将上面的<code>DataFrame</code>处理成中间值，<code>apply</code>方法的参数也是一个函数，可以通过指定<code>axis</code>参数使其作用于<code>DataFrame</code> 对象的行或列，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">temp_df = jobs_df.salary.str.extract(r&#39;(\\d+)[kK]?-(\\d+)[kK]?&#39;).applymap(int)</span>
<span class="line">temp_df.apply(np.mean, axis=1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0       22.5</span>
<span class="line">1       14.0</span>
<span class="line">2       25.0</span>
<span class="line">3       41.5</span>
<span class="line">4       12.5</span>
<span class="line">        ... </span>
<span class="line">3065    9.0</span>
<span class="line">3069    8.0</span>
<span class="line">3070    3.0</span>
<span class="line">3071    9.0</span>
<span class="line">3088    10.0</span>
<span class="line">Length: 1515, dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们可以用上面的结果替换掉原来的<code>salary</code>列或者增加一个新的列来表示职位对应的工资，完整的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">temp_df = jobs_df.salary.str.extract(r&#39;(\\d+)[kK]?-(\\d+)[kK]?&#39;).applymap(int)</span>
<span class="line">jobs_df[&#39;salary&#39;] = temp_df.apply(np.mean, axis=1)</span>
<span class="line">jobs_df.head()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    city    companyFullName              positionName    salary</span>
<span class="line">0   北京	  达疆网络科技（上海）有限公司    数据分析岗       22.5</span>
<span class="line">1   北京	  北京音娱时光科技有限公司        数据分析        14.0</span>
<span class="line">2   北京	  北京千喜鹤餐饮管理有限公司	     数据分析        25.0</span>
<span class="line">3   北京	  吉林省海生电子商务有限公司	     数据分析        41.5</span>
<span class="line">4   北京	  韦博网讯科技（北京）有限公司	数据分析        12.5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>applymap</code>和<code>apply</code>两个方法在数据预处理的时候经常用到，<code>Series</code>对象也有<code>apply</code>方法，也是用于数据的预处理，但是<code>DataFrame</code>对象还有一个名为<code>transform</code> 的方法，也是通过传入的函数对数据进行变换，类似<code>Series</code>对象的<code>map</code>方法。需要强调的是，<code>apply</code>方法具有归约效果的，简单的说就是能将较多的数据处理成较少的数据或一条数据；而<code>transform</code>方法没有归约效果，只能对数据进行变换，原来有多少条数据，处理后还是有多少条数据。</p><p>如果要对数据进行深度的分析和挖掘，字符串、日期时间这样的非数值类型都需要处理成数值，因为非数值类型没有办法计算相关性，也没有办法进行$\\chi^2$检验等操作。对于字符串类型，通常可以其分为以下三类，再进行对应的处理。</p><ol><li>有序变量（Ordinal Variable）：字符串表示的数据有顺序关系，那么可以对字符串进行序号化处理。</li><li>分类变量（Categorical Variable）/ 名义变量（Nominal Variable）：字符串表示的数据没有大小关系和等级之分，那么就可以使用独热编码的方式处理成哑变量（虚拟变量）矩阵。</li><li>定距变量（Scale Variable）：字符串本质上对应到一个有大小高低之分的数据，而且可以进行加减运算，那么只需要将字符串处理成对应的数值即可。</li></ol><p>对于第1类和第3类，我们可以用上面提到的<code>apply</code>或<code>transform</code>方法来处理，也可以利用<code>scikit-learn</code>中的<code>OrdinalEncoder</code>处理第1类字符串，这个我们在后续的课程中会讲到。对于第2类字符串，可以使用<code>pandas</code>的<code>get_dummies()</code>函数来生成哑变量（虚拟变量）矩阵，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">persons_df = pd.DataFrame(</span>
<span class="line">    data={</span>
<span class="line">        &#39;姓名&#39;: [&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;],</span>
<span class="line">        &#39;职业&#39;: [&#39;医生&#39;, &#39;医生&#39;, &#39;程序员&#39;, &#39;画家&#39;, &#39;教师&#39;],</span>
<span class="line">        &#39;学历&#39;: [&#39;研究生&#39;, &#39;大专&#39;, &#39;研究生&#39;, &#39;高中&#39;, &#39;本科&#39;]</span>
<span class="line">    }</span>
<span class="line">)</span>
<span class="line">persons_df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">	姓名	职业	学历</span>
<span class="line">0	关羽	医生	研究生</span>
<span class="line">1	张飞	医生	大专</span>
<span class="line">2	赵云	程序员	研究生</span>
<span class="line">3	马超	画家	高中</span>
<span class="line">4	黄忠	教师	本科</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将职业处理成哑变量矩阵。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">pd.get_dummies(persons_df[&#39;职业&#39;])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">    医生 教师  画家  程序员</span>
<span class="line">0	1    0    0    0</span>
<span class="line">1	1    0    0    0</span>
<span class="line">2	0    0    0    1</span>
<span class="line">3	0    0    1    0</span>
<span class="line">4	0    1    0    0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将学历处理成大小不同的值。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def handle_education(x):</span>
<span class="line">    edu_dict = {&#39;高中&#39;: 1, &#39;大专&#39;: 3, &#39;本科&#39;: 5, &#39;研究生&#39;: 10}</span>
<span class="line">    return edu_dict.get(x, 0)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">persons_df[&#39;学历&#39;].apply(handle_education)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    10</span>
<span class="line">1     3</span>
<span class="line">2    10</span>
<span class="line">3     1</span>
<span class="line">4     5</span>
<span class="line">Name: 学历, dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来说说数据离散化。离散化也叫分箱，如果变量的取值是连续值，那么它的取值有无数种可能，在进行数据分组的时候就会非常的不方便，这个时候将连续变量离散化就显得非常重要。之所以把离散化叫做分箱，是因为我们可以预先设置一些箱子，每个箱子代表了数据取值的范围，这样就可以将连续的值分配到不同的箱子中，从而实现离散化。下面的例子读取了2018年北京积分落户数据，我们可以根据落户积分对数据进行分组，具体的做法如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">luohu_df = pd.read_csv(&#39;data/2018年北京积分落户数据.csv&#39;, index_col=&#39;id&#39;)</span>
<span class="line">luohu_df.score.describe()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">count    6019.000000</span>
<span class="line">mean       95.654552</span>
<span class="line">std         4.354445</span>
<span class="line">min        90.750000</span>
<span class="line">25%        92.330000</span>
<span class="line">50%        94.460000</span>
<span class="line">75%        97.750000</span>
<span class="line">max       122.590000</span>
<span class="line">Name: score, dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，落户积分的最大值是<code>122.59</code>，最小值是<code>90.75</code>，那么我们可以构造一个从<code>90</code>分到<code>125</code>分，每<code>5</code>分一组的<code>7</code>个箱子，<code>pandas</code>的<code>cut</code>函数可以帮助我们首先数据分箱，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">bins = np.arange(90, 126, 5)</span>
<span class="line">pd.cut(luohu_df.score, bins, right=False)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>cut</code>函数的<code>right</code>参数默认值为<code>True</code>，表示箱子左开右闭；修改为<code>False</code>可以让箱子的右边界为开区间，左边界为闭区间，大家看看下面的输出就明白了。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">id</span>
<span class="line">1       [120, 125)</span>
<span class="line">2       [120, 125)</span>
<span class="line">3       [115, 120)</span>
<span class="line">4       [115, 120)</span>
<span class="line">5       [115, 120)</span>
<span class="line">           ...    </span>
<span class="line">6015      [90, 95)</span>
<span class="line">6016      [90, 95)</span>
<span class="line">6017      [90, 95)</span>
<span class="line">6018      [90, 95)</span>
<span class="line">6019      [90, 95)</span>
<span class="line">Name: score, Length: 6019, dtype: category</span>
<span class="line">Categories (7, interval[int64, left]): [[90, 95) &lt; [95, 100) &lt; [100, 105) &lt; [105, 110) &lt; [110, 115) &lt; [115, 120) &lt; [120, 125)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以根据分箱的结果对数据进行分组，然后使用聚合函数对每个组进行统计，这是数据分析中经常用到的操作，下一个章节会为大家介绍。除此之外，<code>pandas</code>还提供了一个名为<code>qcut</code>的函数，可以指定分位数对数据进行分箱，有兴趣的读者可以自行研究。</p>`,136),t=[i];function d(c,p){return n(),s("div",null,t)}const o=e(l,[["render",d],["__file","74.深入浅出pandas-3.html.vue"]]),v=JSON.parse('{"path":"/python/Python-100-Days/Day66-80/74.%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BApandas-3.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"深入浅出pandas-3","slug":"深入浅出pandas-3","link":"#深入浅出pandas-3","children":[{"level":3,"title":"数据重塑","slug":"数据重塑","link":"#数据重塑","children":[]},{"level":3,"title":"数据清洗","slug":"数据清洗","link":"#数据清洗","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day66-80/74.深入浅出pandas-3.md"}');export{o as comp,v as data};
