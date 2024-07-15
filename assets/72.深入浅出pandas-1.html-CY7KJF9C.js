import{_ as e,c as s,o as n,d as a}from"./app-BFPhRmaa.js";const i="/docs/assets/ser_bar_graph-D-InNGEP.png",l="/docs/assets/ser_pie_graph-9rTSqrBg.png",d={},t=a(`<h2 id="深入浅出pandas-1" tabindex="-1"><a class="header-anchor" href="#深入浅出pandas-1"><span>深入浅出pandas-1</span></a></h2><p>Pandas 是 Wes McKinney 在2008年开发的一个强大的<strong>分析结构化数据</strong>的工具集。Pandas 以 NumPy 为基础（实现数据存储和运算），提供了专门用于数据分析的类型、方法和函数，对数据分析和数据挖掘提供了很好的支持；同时 pandas 还可以跟数据可视化工具 matplotlib 很好的整合在一起，非常轻松愉快的实现数据可视化呈现。</p><p>Pandas 核心的数据类型是<code>Series</code>（数据系列）、<code>DataFrame</code>（数据窗/数据框），分别用于处理一维和二维的数据，除此之外，还有一个名为<code>Index</code>的类型及其子类型，它们为<code>Series</code>和<code>DataFrame</code>提供了索引功能。日常工作中<code>DataFrame</code>使用得最为广泛，因为二维的数据结构刚好可以对应有行有列的表格。<code>Series</code>和<code>DataFrame</code>都提供了大量的处理数据的方法，数据分析师以此为基础，可以实现对数据的筛选、合并、拼接、清洗、预处理、聚合、透视和可视化等各种操作。</p><h3 id="创建series对象" tabindex="-1"><a class="header-anchor" href="#创建series对象"><span>创建Series对象</span></a></h3><p>Pandas 库中的<code>Series</code>对象可以用来表示一维数据结构，但是多了索引和一些额外的功能。<code>Series</code>类型的内部结构包含了两个数组，其中一个用来保存数据，另一个用来保存数据的索引。我们可以通过列表或数组创建<code>Series</code>对象，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import numpy as np</span>
<span class="line">import pandas as pd</span>
<span class="line"></span>
<span class="line">ser1 = pd.Series(data=[120, 380, 250, 360], index=[&#39;一季度&#39;, &#39;二季度&#39;, &#39;三季度&#39;, &#39;四季度&#39;])</span>
<span class="line">ser1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>Series</code>构造器中的<code>data</code>参数表示数据，<code>index</code>参数表示数据的索引，相当于数据对应的标签。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    120</span>
<span class="line">二季度    380</span>
<span class="line">三季度    250</span>
<span class="line">四季度    360</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过字典创建Series对象。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2 = pd.Series({&#39;一季度&#39;: 320, &#39;二季度&#39;: 180, &#39;三季度&#39;: 300, &#39;四季度&#39;: 405})</span>
<span class="line">ser2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过字典创建<code>Series</code>对象时，字典的键就是数据的标签（索引），键对应的值就是数据。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    320</span>
<span class="line">二季度    180</span>
<span class="line">三季度    300</span>
<span class="line">四季度    405</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="series对象的运算" tabindex="-1"><a class="header-anchor" href="#series对象的运算"><span>Series对象的运算</span></a></h3><h4 id="标量运算" tabindex="-1"><a class="header-anchor" href="#标量运算"><span>标量运算</span></a></h4><p>我们尝试给刚才的<code>ser1</code>每个季度加上<code>10</code>，代码如下所示。</p><p>代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">ser1 <span class="token operator">+=</span> <span class="token number">10</span></span>
<span class="line">ser1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    130</span>
<span class="line">二季度    390</span>
<span class="line">三季度    260</span>
<span class="line">四季度    370</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="矢量运算" tabindex="-1"><a class="header-anchor" href="#矢量运算"><span>矢量运算</span></a></h4><p>我们尝试把<code>ser1</code>和<code>ser2</code>对应季度的数据加起来，代码如下所示。</p><p>代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">ser1 <span class="token operator">+</span> ser2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    450</span>
<span class="line">二季度    570</span>
<span class="line">三季度    560</span>
<span class="line">四季度    775</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="索引运算" tabindex="-1"><a class="header-anchor" href="#索引运算"><span>索引运算</span></a></h4><h5 id="普通索引" tabindex="-1"><a class="header-anchor" href="#普通索引"><span>普通索引</span></a></h5><p>跟数组一样，<code>Series</code>对象也可以进行索引和切片操作，不同的是<code>Series</code>对象因为内部维护了一个保存索引的数组，所以除了可以使用整数索引检索数据外，还可以通过自己设置的索引（标签）获取对应的数据。</p><p>使用整数索引。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser1[2]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">260</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用自定义索引。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser1[&#39;三季度&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">260</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser1[&#39;一季度&#39;] = 380</span>
<span class="line">ser1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    380</span>
<span class="line">二季度    390</span>
<span class="line">三季度    260</span>
<span class="line">四季度    370</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="切片索引" tabindex="-1"><a class="header-anchor" href="#切片索引"><span>切片索引</span></a></h5><p><code>Series</code>对象的切片操作跟列表、数组类似，通过给出起始和结束索引，从原来的<code>Series</code>对象中取出或修改部分数据，这里也可以使用整数索引和自定义的索引，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[1:3]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">二季度    180</span>
<span class="line">三季度    300</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[&#39;二季度&#39;:&#39;四季度&#39;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">二季度    180</span>
<span class="line">三季度    300</span>
<span class="line">四季度    405</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：在使用自定义索引进行切片时，结束索引对应的元素也是可以取到的。</p></blockquote><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[1:3] = 400, 500</span>
<span class="line">ser2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    320</span>
<span class="line">二季度    400</span>
<span class="line">三季度    500</span>
<span class="line">四季度    405</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="花式索引" tabindex="-1"><a class="header-anchor" href="#花式索引"><span>花式索引</span></a></h5><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[[&#39;二季度&#39;, &#39;四季度&#39;]]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">二季度    400</span>
<span class="line">四季度    405</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[[&#39;二季度&#39;, &#39;四季度&#39;]] = 600, 520</span>
<span class="line">ser2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">一季度    320</span>
<span class="line">二季度    600</span>
<span class="line">三季度    500</span>
<span class="line">四季度    520</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="布尔索引" tabindex="-1"><a class="header-anchor" href="#布尔索引"><span>布尔索引</span></a></h5><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2[ser2 &gt;= 500]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">二季度    600</span>
<span class="line">三季度    500</span>
<span class="line">四季度    520</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="series对象的属性和方法" tabindex="-1"><a class="header-anchor" href="#series对象的属性和方法"><span>Series对象的属性和方法</span></a></h3><p><code>Series</code>对象的属性和方法非常多，我们就捡着重要的跟大家讲吧。先看看下面的表格，它展示了<code>Series</code>对象常用的属性。</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>dtype</code> / <code>dtypes</code></td><td>返回<code>Series</code>对象的数据类型</td></tr><tr><td><code>hasnans</code></td><td>判断<code>Series</code>对象中有没有空值</td></tr><tr><td><code>at</code> / <code>iat</code></td><td>通过索引访问<code>Series</code>对象中的单个值</td></tr><tr><td><code>loc</code> / <code>iloc</code></td><td>通过索引访问<code>Series</code>对象中的单个值或一组值</td></tr><tr><td><code>index</code></td><td>返回<code>Series</code>对象的索引（<code>Index</code>对象）</td></tr><tr><td><code>is_monotonic</code></td><td>判断<code>Series</code>对象中的数据是否单调</td></tr><tr><td><code>is_monotonic_increasing</code></td><td>判断<code>Series</code>对象中的数据是否单调递增</td></tr><tr><td><code>is_monotonic_decreasing</code></td><td>判断<code>Series</code>对象中的数据是否单调递减</td></tr><tr><td><code>is_unique</code></td><td>判断<code>Series</code>对象中的数据是否独一无二</td></tr><tr><td><code>size</code></td><td>返回<code>Series</code>对象中元素的个数</td></tr><tr><td><code>values</code></td><td>以<code>ndarray</code>的方式返回<code>Series</code>对象中的值（<code>ndarray</code>对象）</td></tr></tbody></table><p>我们可以通过下面的代码来了解<code>Series</code>对象的属性。</p><p>代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>                    <span class="token comment"># 数据类型</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>hasnans<span class="token punctuation">)</span>                  <span class="token comment"># 有没有空值</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>index<span class="token punctuation">)</span>                    <span class="token comment"># 索引</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>values<span class="token punctuation">)</span>                   <span class="token comment"># 值</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>is_monotonic_increasing<span class="token punctuation">)</span>  <span class="token comment"># 是否单调递增</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ser2<span class="token punctuation">.</span>is_unique<span class="token punctuation">)</span>                <span class="token comment"># 是否每个值都独一无二</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">int64</span>
<span class="line">False</span>
<span class="line">Index([&#39;一季度&#39;, &#39;二季度&#39;, &#39;三季度&#39;, &#39;四季度&#39;], dtype=&#39;object&#39;)</span>
<span class="line">[320 600 500 520]</span>
<span class="line">False</span>
<span class="line">True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Series</code>对象的方法很多，下面我们通过一些代码片段为大家介绍常用的方法。</p><h4 id="统计相关" tabindex="-1"><a class="header-anchor" href="#统计相关"><span>统计相关</span></a></h4><p><code>Series</code>对象支持各种获取描述性统计信息的方法。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">print(ser2.count())   # 计数</span>
<span class="line">print(ser2.sum())     # 求和</span>
<span class="line">print(ser2.mean())    # 求平均</span>
<span class="line">print(ser2.median())  # 找中位数</span>
<span class="line">print(ser2.max())     # 找最大</span>
<span class="line">print(ser2.min())     # 找最小</span>
<span class="line">print(ser2.std())     # 求标准差</span>
<span class="line">print(ser2.var())     # 求方差</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">4</span>
<span class="line">1940</span>
<span class="line">485.0</span>
<span class="line">510.0</span>
<span class="line">600</span>
<span class="line">320</span>
<span class="line">118.18065267490557</span>
<span class="line">13966.666666666666</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Series</code>对象还有一个名为<code>describe()</code>的方法，可以获得上述所有的描述性统计信息，如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser2.describe()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">count      4.000000</span>
<span class="line">mean     485.000000</span>
<span class="line">std      118.180653</span>
<span class="line">min      320.000000</span>
<span class="line">25%      455.000000</span>
<span class="line">50%      510.000000</span>
<span class="line">75%      540.000000</span>
<span class="line">max      600.000000</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：因为<code>describe()</code>返回的也是一个<code>Series</code>对象，所以也可以用<code>ser2.describe()[&#39;mean&#39;]</code>来获取平均值，用<code>ser2.describe()[[&#39;max&#39;, &#39;min&#39;]]</code>来获取最大值和最小值。</p></blockquote><p>如果<code>Series</code>对象有重复的值，我们可以使用<code>unique()</code>方法获得由独一无二的值构成的数组；可以使用<code>nunique()</code>方法统计不重复值的数量；如果想要统计每个值重复的次数，可以使用<code>value_counts()</code>方法，这个方法会返回一个<code>Series</code>对象，它的索引就是原来的<code>Series</code>对象中的值，而每个值出现的次数就是返回的<code>Series</code>对象中的数据，在默认情况下会按照出现次数做降序排列，如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser3 = pd.Series(data=[&#39;apple&#39;, &#39;banana&#39;, &#39;apple&#39;, &#39;pitaya&#39;, &#39;apple&#39;, &#39;pitaya&#39;, &#39;durian&#39;])</span>
<span class="line">ser3.value_counts()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">apple     3</span>
<span class="line">pitaya    2</span>
<span class="line">durian    1</span>
<span class="line">banana    1</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser3.nunique()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对于<code>ser3</code>，我们还可以用<code>mode()</code>方法来找出数据的众数，由于众数可能不唯一，所以<code>mode()</code>方法的返回值仍然是一个<code>Series</code>对象。</p><p>代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line">ser3<span class="token punctuation">.</span>mode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    apple</span>
<span class="line">dtype: object</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="处理数据" tabindex="-1"><a class="header-anchor" href="#处理数据"><span>处理数据</span></a></h4><p><code>Series</code>对象的<code>isna()</code>和<code>isnull()</code>方法可以用于空值的判断，<code>notna()</code>和<code>notnull()</code>方法可以用于非空值的判断，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser4 = pd.Series(data=[10, 20, np.nan, 30, np.nan])</span>
<span class="line">ser4.isna()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>np.nan</code>是一个IEEE 754标准的浮点小数，专门用来表示“不是一个数”，在上面的代码中我们用它来代表空值；当然，也可以用 Python 中的<code>None</code>来表示空值，在 pandas 中<code>None</code>也会被处理为<code>np.nan</code>。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    False</span>
<span class="line">1    False</span>
<span class="line">2     True</span>
<span class="line">3    False</span>
<span class="line">4     True</span>
<span class="line">dtype: bool</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser4.notna()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0     True</span>
<span class="line">1     True</span>
<span class="line">2    False</span>
<span class="line">3     True</span>
<span class="line">4    False</span>
<span class="line">dtype: bool</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Series</code>对象的<code>dropna()</code>和<code>fillna()</code>方法分别用来删除空值和填充空值，具体的用法如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser4.dropna()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    10.0</span>
<span class="line">1    20.0</span>
<span class="line">3    30.0</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser4.fillna(value=40)  # 将空值填充为40</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    10.0</span>
<span class="line">1    20.0</span>
<span class="line">2    40.0</span>
<span class="line">3    30.0</span>
<span class="line">4    40.0</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser4.fillna(method=&#39;ffill&#39;)  # 用空值前面的非空值填充</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    10.0</span>
<span class="line">1    20.0</span>
<span class="line">2    20.0</span>
<span class="line">3    30.0</span>
<span class="line">4    30.0</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家注意的是，<code>dropna()</code>和<code>fillna()</code>方法都有一个名为<code>inplace</code>的参数，它的默认值是<code>False</code>，表示删除空值或填充空值不会修改原来的<code>Series</code>对象，而是返回一个新的<code>Series</code>对象。如果将<code>inplace</code>参数的值修改为<code>True</code>，那么删除或填充空值会就地操作，直接修改原来的<code>Series</code>对象，此时方法的返回值是<code>None</code>。后面我们会接触到的很多方法，包括<code>DataFrame</code>对象的很多方法都会有这个参数，它们的意义跟这里是一样的。</p><p><code>Series</code>对象的<code>mask()</code>和<code>where()</code>方法可以将满足或不满足条件的值进行替换，如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser5 = pd.Series(range(5))</span>
<span class="line">ser5.where(ser5 &gt; 0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    NaN</span>
<span class="line">1    1.0</span>
<span class="line">2    2.0</span>
<span class="line">3    3.0</span>
<span class="line">4    4.0</span>
<span class="line">dtype: float64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser5.where(ser5 &gt; 1, 10)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    10</span>
<span class="line">1    10</span>
<span class="line">2     2</span>
<span class="line">3     3</span>
<span class="line">4     4</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser5.mask(ser5 &gt; 1, 10)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0     0</span>
<span class="line">1     1</span>
<span class="line">2    10</span>
<span class="line">3    10</span>
<span class="line">4    10</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Series</code>对象的<code>duplicated()</code>方法可以帮助我们找出重复的数据，而<code>drop_duplicates()</code>方法可以帮我们删除重复数据。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser3.duplicated()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    False</span>
<span class="line">1    False</span>
<span class="line">2     True</span>
<span class="line">3    False</span>
<span class="line">4     True</span>
<span class="line">5     True</span>
<span class="line">6    False</span>
<span class="line">dtype: bool</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser3.drop_duplicates()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0     apple</span>
<span class="line">1    banana</span>
<span class="line">3    pitaya</span>
<span class="line">6    durian</span>
<span class="line">dtype: object</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Series</code>对象的<code>apply()</code>和<code>map()</code>方法非常重要，它们可以通过字典或者指定的函数来处理数据，把数据映射或转换成我们想要的样子。这两个方法在数据准备阶段非常重要，我们先来试一试这个名为<code>map</code>的方法。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser6 = pd.Series([&#39;cat&#39;, &#39;dog&#39;, np.nan, &#39;rabbit&#39;])</span>
<span class="line">ser6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0       cat</span>
<span class="line">1       dog</span>
<span class="line">2       NaN</span>
<span class="line">3    rabbit</span>
<span class="line">dtype: object</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser6.map({&#39;cat&#39;: &#39;kitten&#39;, &#39;dog&#39;: &#39;puppy&#39;})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过字典给出的映射规则对数据进行处理。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0    kitten</span>
<span class="line">1     puppy</span>
<span class="line">2       NaN</span>
<span class="line">3       NaN</span>
<span class="line">dtype: object</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser6.map(&#39;I am a {}&#39;.format, na_action=&#39;ignore&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：将指定字符串的<code>format</code>方法作用到数据系列的数据上，忽略掉所有的空值。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">0       I am a cat</span>
<span class="line">1       I am a dog</span>
<span class="line">2              NaN</span>
<span class="line">3    I am a rabbit</span>
<span class="line">dtype: object</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建一个新的<code>Series</code>对象，</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser7 = pd.Series([20, 21, 12],  index=[&#39;London&#39;, &#39;New York&#39;, &#39;Helsinki&#39;])</span>
<span class="line">ser7</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">London      20</span>
<span class="line">New York    21</span>
<span class="line">Helsinki    12</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser7.apply(np.square)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：将求平方的函数作用到数据系列的数据上，也可以将参数<code>np.square</code>替换为<code>lambda x: x ** 2</code>。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">London      400</span>
<span class="line">New York    441</span>
<span class="line">Helsinki    144</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser7.apply(lambda x, value: x - value, args=(5, ))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注意：上面<code>apply</code>方法中的<code>lambda</code>函数有两个参数，第一个参数是数据系列中的数据，而第二个参数需要我们传入，所以我们给<code>apply</code>方法增加了<code>args</code>参数，用于给<code>lambda</code>函数的第二个参数传值。</p></blockquote><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">London      15</span>
<span class="line">New York    16</span>
<span class="line">Helsinki     7</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取头部值和排序" tabindex="-1"><a class="header-anchor" href="#取头部值和排序"><span>取头部值和排序</span></a></h4><p><code>Series</code>对象的<code>sort_index()</code>和<code>sort_values()</code>方法可以用于对索引和数据的排序，排序方法有一个名为<code>ascending</code>的布尔类型参数，该参数用于控制排序的结果是升序还是降序；而名为<code>kind</code>的参数则用来控制排序使用的算法，默认使用了<code>quicksort</code>，也可以选择<code>mergesort</code>或<code>heapsort</code>；如果存在空值，那么可以用<code>na_position</code>参数空值放在最前还是最后，默认是<code>last</code>，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser8 = pd.Series(</span>
<span class="line">    data=[35, 96, 12, 57, 25, 89], </span>
<span class="line">    index=[&#39;grape&#39;, &#39;banana&#39;, &#39;pitaya&#39;, &#39;apple&#39;, &#39;peach&#39;, &#39;orange&#39;]</span>
<span class="line">)</span>
<span class="line">ser8.sort_values()  # 按值从小到大排序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">pitaya    12</span>
<span class="line">peach     25</span>
<span class="line">grape     35</span>
<span class="line">apple     57</span>
<span class="line">orange    89</span>
<span class="line">banana    96</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser8.sort_index(ascending=False)  # 按索引从大到小排序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">pitaya    12</span>
<span class="line">peach     25</span>
<span class="line">orange    89</span>
<span class="line">grape     35</span>
<span class="line">banana    96</span>
<span class="line">apple     57</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要从<code>Series</code>对象中找出元素中最大或最小的“Top-N”，我们不需要对所有的值进行排序的，可以使用<code>nlargest()</code>和<code>nsmallest()</code>方法来完成，如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser8.nlargest(3)  # 值最大的3个</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">banana    96</span>
<span class="line">orange    89</span>
<span class="line">apple     57</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">ser8.nsmallest(2)  # 值最小的2个</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">pitaya    12</span>
<span class="line">peach     25</span>
<span class="line">dtype: int64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绘制图表" tabindex="-1"><a class="header-anchor" href="#绘制图表"><span>绘制图表</span></a></h4><p><code>Series</code>对象有一个名为<code>plot</code>的方法可以用来生成图表，如果选择生成折线图、饼图、柱状图等，默认会使用<code>Series</code>对象的索引作为横坐标，使用<code>Series</code>对象的数据作为纵坐标。下面我们创建一个<code>Series</code>对象并基于它绘制柱状图，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import matplotlib.pyplot as plt</span>
<span class="line"></span>
<span class="line">ser9 = pd.Series({&#39;Q1&#39;: 400, &#39;Q2&#39;: 520, &#39;Q3&#39;: 180, &#39;Q4&#39;: 380})</span>
<span class="line"># 通过plot方法的kind指定图表类型为柱状图</span>
<span class="line">ser9.plot(kind=&#39;bar&#39;)</span>
<span class="line"># 定制纵轴的取值范围</span>
<span class="line">plt.ylim(0, 600)</span>
<span class="line"># 定制横轴刻度（旋转到0度）</span>
<span class="line">plt.xticks(rotation=0)</span>
<span class="line"># 为柱子增加数据标签</span>
<span class="line">for i in range(ser9.size):</span>
<span class="line">    plt.text(i, ser9[i] + 5, ser9[i], ha=&#39;center&#39;)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+i+`" style="zoom:35%;"><p>我们也可以将其绘制为饼图，代码如下所示。</p><p>代码：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># plot方法的kind参数指定了图表类型为饼图</span>
<span class="line"># autopct会自动计算并显示百分比</span>
<span class="line"># pctdistance用来控制百分比到圆心的距离</span>
<span class="line">ser9.plot(kind=&#39;pie&#39;, autopct=&#39;%.1f%%&#39;, pctdistance=0.65)</span>
<span class="line">plt.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><img src="`+l+'" style="zoom:35%;">',216),c=[t];function r(p,o){return n(),s("div",null,c)}const v=e(d,[["render",r],["__file","72.深入浅出pandas-1.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/Day66-80/72.%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BApandas-1.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"深入浅出pandas-1","slug":"深入浅出pandas-1","link":"#深入浅出pandas-1","children":[{"level":3,"title":"创建Series对象","slug":"创建series对象","link":"#创建series对象","children":[]},{"level":3,"title":"Series对象的运算","slug":"series对象的运算","link":"#series对象的运算","children":[]},{"level":3,"title":"Series对象的属性和方法","slug":"series对象的属性和方法","link":"#series对象的属性和方法","children":[]}]}],"git":{"updatedTime":1720597060000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-100-Days/Day66-80/72.深入浅出pandas-1.md"}');export{v as comp,m as data};
