import{_ as s,c as n,o as e,b as a}from"./app-CstveDQQ.js";const i="/docs/assets/image-show-CEUEGF-q.png",l="/docs/assets/image-crop-SV-b8Wl8.png",t="/docs/assets/image-thumbnail-C9BpJuLp.png",d="/docs/assets/image-paste-Dp7rRSlY.png",c="/docs/assets/image-rotate-BQJQ_-I9.png",r="/docs/assets/image-transpose-CciZ8eva.png",p="/docs/assets/image-putpixel-CMSEob3x.png",g="/docs/assets/image-filter-BYxSRjps.png",o={},m=a(`<h2 id="图像和办公文档处理" tabindex="-1"><a class="header-anchor" href="#图像和办公文档处理"><span>图像和办公文档处理</span></a></h2><p>用程序来处理图像和办公文档经常出现在实际开发中，Python的标准库中虽然没有直接支持这些操作的模块，但我们可以通过Python生态圈中的第三方模块来完成这些操作。</p><h3 id="操作图像" tabindex="-1"><a class="header-anchor" href="#操作图像"><span>操作图像</span></a></h3><h4 id="计算机图像相关知识" tabindex="-1"><a class="header-anchor" href="#计算机图像相关知识"><span>计算机图像相关知识</span></a></h4><ol><li><p>颜色。如果你有使用颜料画画的经历，那么一定知道混合红、黄、蓝三种颜料可以得到其他的颜色，事实上这三种颜色就是被我们称为美术三原色的东西，它们是不能再分解的基本颜色。在计算机中，我们可以将红、绿、蓝三种色光以不同的比例叠加来组合成其他的颜色，因此这三种颜色就是色光三原色，所以我们通常会将一个颜色表示为一个RGB值或RGBA值（其中的A表示Alpha通道，它决定了透过这个图像的像素，也就是透明度）。</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">RGBA值</th><th style="text-align:center;">名称</th><th style="text-align:center;">RGBA值</th></tr></thead><tbody><tr><td style="text-align:center;">White</td><td style="text-align:center;">(255, 255, 255, 255)</td><td style="text-align:center;">Red</td><td style="text-align:center;">(255, 0, 0, 255)</td></tr><tr><td style="text-align:center;">Green</td><td style="text-align:center;">(0, 255, 0, 255)</td><td style="text-align:center;">Blue</td><td style="text-align:center;">(0, 0, 255, 255)</td></tr><tr><td style="text-align:center;">Gray</td><td style="text-align:center;">(128, 128, 128, 255)</td><td style="text-align:center;">Yellow</td><td style="text-align:center;">(255, 255, 0, 255)</td></tr><tr><td style="text-align:center;">Black</td><td style="text-align:center;">(0, 0, 0, 255)</td><td style="text-align:center;">Purple</td><td style="text-align:center;">(128, 0, 128, 255)</td></tr></tbody></table></li><li><p>像素。对于一个由数字序列表示的图像来说，最小的单位就是图像上单一颜色的小方格，这些小方块都有一个明确的位置和被分配的色彩数值，而这些一小方格的颜色和位置决定了该图像最终呈现出来的样子，它们是不可分割的单位，我们通常称之为像素（pixel）。每一个图像都包含了一定量的像素，这些像素决定图像在屏幕上所呈现的大小。</p></li></ol><h4 id="用pillow操作图像" tabindex="-1"><a class="header-anchor" href="#用pillow操作图像"><span>用Pillow操作图像</span></a></h4><p>Pillow是由从著名的Python图像处理库PIL发展出来的一个分支，通过Pillow可以实现图像压缩和图像处理等各种操作。可以使用下面的命令来安装Pillow。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install pillow</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Pillow中最为重要的是Image类，读取和处理图像都要通过这个类来完成。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from PIL import Image</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; image.format, image.size, image.mode</span>
<span class="line">(&#39;JPEG&#39;, (500, 750), &#39;RGB&#39;)</span>
<span class="line">&gt;&gt;&gt; image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><ol><li><p>剪裁图像</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; rect = 80, 20, 310, 360</span>
<span class="line">&gt;&gt;&gt; image.crop(rect).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p></li><li><p>生成缩略图</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; size = 128, 128</span>
<span class="line">&gt;&gt;&gt; image.thumbnail(size)</span>
<span class="line">&gt;&gt;&gt; image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p></li><li><p>缩放和黏贴图像</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; image1 = Image.open(&#39;./res/luohao.png&#39;)</span>
<span class="line">&gt;&gt;&gt; image2 = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; rect = 80, 20, 310, 360</span>
<span class="line">&gt;&gt;&gt; guido_head = image2.crop(rect)</span>
<span class="line">&gt;&gt;&gt; width, height = guido_head.size</span>
<span class="line">&gt;&gt;&gt; image1.paste(guido_head.resize((int(width / 1.5), int(height / 1.5))), (172, 40))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p></li><li><p>旋转和翻转</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.png&#39;)</span>
<span class="line">&gt;&gt;&gt; image.rotate(180).show()</span>
<span class="line">&gt;&gt;&gt; image.transpose(Image.FLIP_LEFT_RIGHT).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt=""></p><p><img src="'+r+`" alt=""></p></li><li><p>操作像素</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; for x in range(80, 310):</span>
<span class="line">...     for y in range(20, 360):</span>
<span class="line">...         image.putpixel((x, y), (128, 128, 128))</span>
<span class="line">... </span>
<span class="line">&gt;&gt;&gt; image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p></li><li><p>滤镜效果</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&gt;&gt;&gt; from PIL import Image, ImageFilter</span>
<span class="line">&gt;&gt;&gt;</span>
<span class="line">&gt;&gt;&gt; image = Image.open(&#39;./res/guido.jpg&#39;)</span>
<span class="line">&gt;&gt;&gt; image.filter(ImageFilter.CONTOUR).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p></li></ol><h3 id="处理excel电子表格" tabindex="-1"><a class="header-anchor" href="#处理excel电子表格"><span>处理Excel电子表格</span></a></h3><p>Python的openpyxl模块让我们可以在Python程序中读取和修改Excel电子表格，由于微软从Office 2007开始使用了新的文件格式，这使得Office Excel和LibreOffice Calc、OpenOffice Calc是完全兼容的，这就意味着openpyxl模块也能处理来自这些软件生成的电子表格。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import datetime</span>
<span class="line"></span>
<span class="line">from openpyxl import Workbook</span>
<span class="line"></span>
<span class="line">wb = Workbook()</span>
<span class="line">ws = wb.active</span>
<span class="line"></span>
<span class="line">ws[&#39;A1&#39;] = 42</span>
<span class="line">ws.append([1, 2, 3])</span>
<span class="line">ws[&#39;A2&#39;] = datetime.datetime.now()</span>
<span class="line"></span>
<span class="line">wb.save(&quot;sample.xlsx&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理word文档" tabindex="-1"><a class="header-anchor" href="#处理word文档"><span>处理Word文档</span></a></h3><p>利用python-docx模块，Python可以创建和修改Word文档，当然这里的Word文档不仅仅是指通过微软的Office软件创建的扩展名为docx的文档，LibreOffice Writer和OpenOffice Writer都是免费的字处理软件。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from docx import Document</span>
<span class="line">from docx.shared import Inches</span>
<span class="line"></span>
<span class="line">document = Document()</span>
<span class="line"></span>
<span class="line">document.add_heading(&#39;Document Title&#39;, 0)</span>
<span class="line"></span>
<span class="line">p = document.add_paragraph(&#39;A plain paragraph having some &#39;)</span>
<span class="line">p.add_run(&#39;bold&#39;).bold = True</span>
<span class="line">p.add_run(&#39; and some &#39;)</span>
<span class="line">p.add_run(&#39;italic.&#39;).italic = True</span>
<span class="line"></span>
<span class="line">document.add_heading(&#39;Heading, level 1&#39;, level=1)</span>
<span class="line">document.add_paragraph(&#39;Intense quote&#39;, style=&#39;Intense Quote&#39;)</span>
<span class="line"></span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;first item in unordered list&#39;, style=&#39;List Bullet&#39;</span>
<span class="line">)</span>
<span class="line">document.add_paragraph(</span>
<span class="line">    &#39;first item in ordered list&#39;, style=&#39;List Number&#39;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">document.add_picture(&#39;monty-truth.png&#39;, width=Inches(1.25))</span>
<span class="line"></span>
<span class="line">records = (</span>
<span class="line">    (3, &#39;101&#39;, &#39;Spam&#39;),</span>
<span class="line">    (7, &#39;422&#39;, &#39;Eggs&#39;),</span>
<span class="line">    (4, &#39;631&#39;, &#39;Spam, spam, eggs, and spam&#39;)</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">table = document.add_table(rows=1, cols=3)</span>
<span class="line">hdr_cells = table.rows[0].cells</span>
<span class="line">hdr_cells[0].text = &#39;Qty&#39;</span>
<span class="line">hdr_cells[1].text = &#39;Id&#39;</span>
<span class="line">hdr_cells[2].text = &#39;Desc&#39;</span>
<span class="line">for qty, id, desc in records:</span>
<span class="line">    row_cells = table.add_row().cells</span>
<span class="line">    row_cells[0].text = str(qty)</span>
<span class="line">    row_cells[1].text = id</span>
<span class="line">    row_cells[2].text = desc</span>
<span class="line"></span>
<span class="line">document.add_page_break()</span>
<span class="line"></span>
<span class="line">document.save(&#39;demo.docx&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),v=[m];function u(h,b){return e(),n("div",null,v)}const _=s(o,[["render",u],["__file","15.图像和办公文档处理.html.vue"]]),x=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/15.%E5%9B%BE%E5%83%8F%E5%92%8C%E5%8A%9E%E5%85%AC%E6%96%87%E6%A1%A3%E5%A4%84%E7%90%86.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"图像和办公文档处理","slug":"图像和办公文档处理","link":"#图像和办公文档处理","children":[{"level":3,"title":"操作图像","slug":"操作图像","link":"#操作图像","children":[]},{"level":3,"title":"处理Excel电子表格","slug":"处理excel电子表格","link":"#处理excel电子表格","children":[]},{"level":3,"title":"处理Word文档","slug":"处理word文档","link":"#处理word文档","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/15.图像和办公文档处理.md"}');export{_ as comp,x as data};
