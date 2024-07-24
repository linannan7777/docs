import{_ as e,c as n,o as s,b as a}from"./app-CgltcQVY.js";const i={},l=a(`<h2 id="第27课-用python操作pdf文件" tabindex="-1"><a class="header-anchor" href="#第27课-用python操作pdf文件"><span>第27课：用Python操作PDF文件</span></a></h2><p>PDF是Portable Document Format的缩写，这类文件通常使用<code>.pdf</code>作为其扩展名。在日常开发工作中，最容易遇到的就是从PDF中读取文本内容以及用已有的内容生成PDF文档这两个任务。</p><h3 id="从pdf中提取文本" tabindex="-1"><a class="header-anchor" href="#从pdf中提取文本"><span>从PDF中提取文本</span></a></h3><p>在Python中，可以使用名为<code>PyPDF2</code>的三方库来读取PDF文件，可以使用下面的命令来安装它。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install PyPDF2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>PyPDF2</code>没有办法从PDF文档中提取图像、图表或其他媒体，但它可以提取文本，并将其返回为Python字符串。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import PyPDF2</span>
<span class="line"></span>
<span class="line">reader = PyPDF2.PdfReader(&#39;test.pdf&#39;)</span>
<span class="line">for page in reader.pages:</span>
<span class="line">    print(page.extract_text())</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：上面代码中使用的PDF文件“test.pdf”以及下面的代码中需要用到的PDF文件，也可以通过下面的百度云盘地址进行获取。链接:https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g 提取码:e7b4。</p></blockquote><p>当然，<code>PyPDF2</code>并不是什么样的PDF文档都能提取出文字来，这个问题就我所知并没有什么特别好的解决方法，尤其是在提取中文的时候。网上也有很多讲解从PDF中提取文字的文章，推荐大家自行阅读<a href="https://cloud.tencent.com/developer/article/1395339" target="_blank" rel="noopener noreferrer">《三大神器助力Python提取pdf文档信息》</a>一文进行了解。</p><p>要从PDF文件中提取文本也可以直接使用三方的命令行工具，具体的做法如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install pdfminer.six</span>
<span class="line">pdf2text.py test.pdf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="旋转和叠加页面" tabindex="-1"><a class="header-anchor" href="#旋转和叠加页面"><span>旋转和叠加页面</span></a></h3><p>上面的代码中通过创建<code>PdfFileReader</code>对象的方式来读取PDF文档，该对象的<code>getPage</code>方法可以获得PDF文档的指定页并得到一个<code>PageObject</code>对象，通过<code>PageObject</code>对象的<code>rotateClockwise</code>和<code>rotateCounterClockwise</code>方法可以实现页面的顺时针和逆时针方向旋转，通过<code>PageObject</code>对象的<code>addBlankPage</code>方法可以添加一个新的空白页，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">reader = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)</span>
<span class="line">writer = PyPDF2.PdfWriter()</span>
<span class="line"></span>
<span class="line">for no, page in enumerate(reader.pages):</span>
<span class="line">    if no % 2 == 0:</span>
<span class="line">        new_page = page.rotate(-90)</span>
<span class="line">    else:</span>
<span class="line">        new_page = page.rotate(90)</span>
<span class="line">    writer.add_page(new_page)</span>
<span class="line"></span>
<span class="line">with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:</span>
<span class="line">    writer.write(file_obj)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密pdf文件" tabindex="-1"><a class="header-anchor" href="#加密pdf文件"><span>加密PDF文件</span></a></h3><p>使用<code>PyPDF2</code>中的<code>PdfFileWrite</code>对象可以为PDF文档加密，如果需要给一系列的PDF文档设置统一的访问口令，使用Python程序来处理就会非常的方便。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import PyPDF2</span>
<span class="line"></span>
<span class="line">reader = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)</span>
<span class="line">writer = PyPDF2.PdfWriter()</span>
<span class="line"></span>
<span class="line">for page in reader.pages:</span>
<span class="line">    writer.add_page(page)</span>
<span class="line">    </span>
<span class="line">writer.encrypt(&#39;foobared&#39;)</span>
<span class="line"></span>
<span class="line">with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:</span>
<span class="line">    writer.write(file_obj)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量添加水印" tabindex="-1"><a class="header-anchor" href="#批量添加水印"><span>批量添加水印</span></a></h3><p>上面提到的<code>PageObject</code>对象还有一个名为<code>mergePage</code>的方法，可以两个PDF页面进行叠加，通过这个操作，我们很容易实现给PDF文件添加水印的功能。例如要给上面的“XGBoost.pdf”文件添加一个水印，我们可以先准备好一个提供水印页面的PDF文件，然后将包含水印的<code>PageObject</code>读取出来，然后再循环遍历“XGBoost.pdf”文件的每个页，获取到<code>PageObject</code>对象，然后通过<code>mergePage</code>方法实现水印页和原始页的合并，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">reader1 = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)</span>
<span class="line">reader2 = PyPDF2.PdfReader(&#39;watermark.pdf&#39;)</span>
<span class="line">writer = PyPDF2.PdfWriter()</span>
<span class="line">watermark_page = reader2.pages[0]</span>
<span class="line"></span>
<span class="line">for page in reader1.pages:</span>
<span class="line">    page.merge_page(watermark_page)</span>
<span class="line">    writer.add_page(page)</span>
<span class="line"></span>
<span class="line">with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:</span>
<span class="line">    writer.write(file_obj)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果愿意，还可以让奇数页和偶数页使用不同的水印，大家可以自己思考下应该怎么做。</p><h3 id="创建pdf文件" tabindex="-1"><a class="header-anchor" href="#创建pdf文件"><span>创建PDF文件</span></a></h3><p>创建PDF文档需要三方库<code>reportlab</code>的支持，安装的方法如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install reportlab</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面通过一个例子为大家展示<code>reportlab</code>的用法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from reportlab.lib.pagesizes import A4</span>
<span class="line">from reportlab.pdfbase import pdfmetrics</span>
<span class="line">from reportlab.pdfbase.ttfonts import TTFont</span>
<span class="line">from reportlab.pdfgen import canvas</span>
<span class="line"></span>
<span class="line">pdf_canvas = canvas.Canvas(&#39;resources/demo.pdf&#39;, pagesize=A4)</span>
<span class="line">width, height = A4</span>
<span class="line"></span>
<span class="line"># 绘图</span>
<span class="line">image = canvas.ImageReader(&#39;resources/guido.jpg&#39;)</span>
<span class="line">pdf_canvas.drawImage(image, 20, height - 395, 250, 375)</span>
<span class="line"></span>
<span class="line"># 显示当前页</span>
<span class="line">pdf_canvas.showPage()</span>
<span class="line"></span>
<span class="line"># 注册字体文件</span>
<span class="line">pdfmetrics.registerFont(TTFont(&#39;Font1&#39;, &#39;resources/fonts/Vera.ttf&#39;))</span>
<span class="line">pdfmetrics.registerFont(TTFont(&#39;Font2&#39;, &#39;resources/fonts/青呱石头体.ttf&#39;))</span>
<span class="line"></span>
<span class="line"># 写字</span>
<span class="line">pdf_canvas.setFont(&#39;Font2&#39;, 40)</span>
<span class="line">pdf_canvas.setFillColorRGB(0.9, 0.5, 0.3, 1)</span>
<span class="line">pdf_canvas.drawString(width // 2 - 120, height // 2, &#39;你好，世界！&#39;)</span>
<span class="line">pdf_canvas.setFont(&#39;Font1&#39;, 40)</span>
<span class="line">pdf_canvas.setFillColorRGB(0, 1, 0, 0.5)</span>
<span class="line">pdf_canvas.rotate(18)</span>
<span class="line">pdf_canvas.drawString(250, 250, &#39;hello, world!&#39;)</span>
<span class="line"></span>
<span class="line"># 保存</span>
<span class="line">pdf_canvas.save()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码如果不太理解也没有关系，等真正需要用Python创建PDF文档的时候，再好好研读一下<code>reportlab</code>的<a href="https://www.reportlab.com/docs/reportlab-userguide.pdf" target="_blank" rel="noopener noreferrer">官方文档</a>就可以了。</p><blockquote><p><strong>提示</strong>：上面代码中用到的图片和字体，也可以通过下面的百度云盘链接获取。链接:https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g 提取码:e7b4。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>在学习完上面的内容之后，相信大家已经知道像合并多个PDF文件这样的工作应该如何用Python代码来处理了，赶紧自己动手试一试吧。</p>`,30),d=[l];function r(p,c){return s(),n("div",null,d)}const o=e(i,[["render",r],["__file","第27课：用Python操作PDF文件.html.vue"]]),v=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC27%E8%AF%BE%EF%BC%9A%E7%94%A8Python%E6%93%8D%E4%BD%9CPDF%E6%96%87%E4%BB%B6.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"第27课：用Python操作PDF文件","slug":"第27课-用python操作pdf文件","link":"#第27课-用python操作pdf文件","children":[{"level":3,"title":"从PDF中提取文本","slug":"从pdf中提取文本","link":"#从pdf中提取文本","children":[]},{"level":3,"title":"旋转和叠加页面","slug":"旋转和叠加页面","link":"#旋转和叠加页面","children":[]},{"level":3,"title":"加密PDF文件","slug":"加密pdf文件","link":"#加密pdf文件","children":[]},{"level":3,"title":"批量添加水印","slug":"批量添加水印","link":"#批量添加水印","children":[]},{"level":3,"title":"创建PDF文件","slug":"创建pdf文件","link":"#创建pdf文件","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720435246000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-Core-50-Courses/第27课：用Python操作PDF文件.md"}');export{o as comp,v as data};
