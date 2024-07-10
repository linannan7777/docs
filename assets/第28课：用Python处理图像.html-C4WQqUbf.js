import{_ as n,c as e,o as s,e as a}from"./app-B7BTqdne.js";const i="/docs/assets/20210803202628-DqdAxLhD.png",l="/docs/assets/20210803202701-DevgAzmh.png",t="/docs/assets/20210803202722-BMOsQcX2.png",d="/docs/assets/20210803202749-z_OdJoW3.png",r="/docs/assets/20210803202829-LWMM8pCE.png",c="/docs/assets/20210803202932-BH2c6qr8.png",p="/docs/assets/20210803202953-34TkQQf2.png",o="/docs/assets/20210803203016-Bl7WBxvs.png",m={},v=a(`<h2 id="第28课-用python处理图像" tabindex="-1"><a class="header-anchor" href="#第28课-用python处理图像"><span>第28课：用Python处理图像</span></a></h2><h3 id="入门知识" tabindex="-1"><a class="header-anchor" href="#入门知识"><span>入门知识</span></a></h3><ol><li><p>颜色。如果你有使用颜料画画的经历，那么一定知道混合红、黄、蓝三种颜料可以得到其他的颜色，事实上这三种颜色就是美术中的三原色，它们是不能再分解的基本颜色。在计算机中，我们可以将红、绿、蓝三种色光以不同的比例叠加来组合成其他的颜色，因此这三种颜色就是色光三原色。在计算机系统中，我们通常会将一个颜色表示为一个RGB值或RGBA值（其中的A表示Alpha通道，它决定了透过这个图像的像素，也就是透明度）。</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th></tr></thead><tbody><tr><td style="text-align:center;">White（白）</td><td style="text-align:center;">(255, 255, 255)</td><td style="text-align:center;">Red（红）</td><td style="text-align:center;">(255, 0, 0)</td></tr><tr><td style="text-align:center;">Green（绿）</td><td style="text-align:center;">(0, 255, 0)</td><td style="text-align:center;">Blue（蓝）</td><td style="text-align:center;">(0, 0, 255)</td></tr><tr><td style="text-align:center;">Gray（灰）</td><td style="text-align:center;">(128, 128, 128)</td><td style="text-align:center;">Yellow（黄）</td><td style="text-align:center;">(255, 255, 0)</td></tr><tr><td style="text-align:center;">Black（黑）</td><td style="text-align:center;">(0, 0, 0)</td><td style="text-align:center;">Purple（紫）</td><td style="text-align:center;">(128, 0, 128)</td></tr></tbody></table></li><li><p>像素。对于一个由数字序列表示的图像来说，最小的单位就是图像上单一颜色的小方格，这些小方块都有一个明确的位置和被分配的色彩数值，而这些一小方格的颜色和位置决定了该图像最终呈现出来的样子，它们是不可分割的单位，我们通常称之为像素（pixel）。每一个图像都包含了一定量的像素，这些像素决定图像在屏幕上所呈现的大小，大家如果爱好拍照或者自拍，对像素这个词就不会陌生。</p></li></ol><h3 id="用pillow处理图像" tabindex="-1"><a class="header-anchor" href="#用pillow处理图像"><span>用Pillow处理图像</span></a></h3><p>Pillow是由从著名的Python图像处理库PIL发展出来的一个分支，通过Pillow可以实现图像压缩和图像处理等各种操作。可以使用下面的命令来安装Pillow。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install pillow</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Pillow中最为重要的是<code>Image</code>类，可以通过<code>Image</code>模块的<code>open</code>函数来读取图像并获得<code>Image</code>类型的对象。</p><ol><li><p>读取和显示图像</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from PIL import Image</span>
<span class="line"></span>
<span class="line"># 读取图像获得Image对象</span>
<span class="line">image = Image.open(&#39;guido.jpg&#39;)</span>
<span class="line"># 通过Image对象的format属性获得图像的格式</span>
<span class="line">print(image.format) # JPEG</span>
<span class="line"># 通过Image对象的size属性获得图像的尺寸</span>
<span class="line">print(image.size)   # (500, 750)</span>
<span class="line"># 通过Image对象的mode属性获取图像的模式</span>
<span class="line">print(image.mode)   # RGB</span>
<span class="line"># 通过Image对象的show方法显示图像</span>
<span class="line">image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+i+`" width="80%"></li><li><p>剪裁图像</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 通过Image对象的crop方法指定剪裁区域剪裁图像</span>
<span class="line">image.crop((80, 20, 310, 360)).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+`" width="80%"></li><li><p>生成缩略图</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 通过Image对象的thumbnail方法生成指定尺寸的缩略图</span>
<span class="line">image.thumbnail((128, 128))</span>
<span class="line">image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+t+`" width="100%"></li><li><p>缩放和黏贴图像</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line"># 读取骆昊的照片获得Image对象</span>
<span class="line">luohao_image = Image.open(&#39;luohao.png&#39;)</span>
<span class="line"># 读取吉多的照片获得Image对象</span>
<span class="line">guido_image = Image.open(&#39;guido.jpg&#39;)</span>
<span class="line"># 从吉多的照片上剪裁出吉多的头</span>
<span class="line">guido_head = guido_image.crop((80, 20, 310, 360))</span>
<span class="line">width, height = guido_head.size</span>
<span class="line"># 使用Image对象的resize方法修改图像的尺寸</span>
<span class="line"># 使用Image对象的paste方法将吉多的头粘贴到骆昊的照片上</span>
<span class="line">luohao_image.paste(guido_head.resize((int(width / 1.5), int(height / 1.5))), (172, 40))</span>
<span class="line">luohao_image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+d+`" width="80%"></li><li><p>旋转和翻转</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">image = Image.open(&#39;guido.jpg&#39;)</span>
<span class="line"># 使用Image对象的rotate方法实现图像的旋转</span>
<span class="line">image.rotate(45).show()</span>
<span class="line"># 使用Image对象的transpose方法实现图像翻转</span>
<span class="line"># Image.FLIP_LEFT_RIGHT - 水平翻转</span>
<span class="line"># Image.FLIP_TOP_BOTTOM - 垂直翻转</span>
<span class="line">image.transpose(Image.FLIP_TOP_BOTTOM).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+`" width="80%"></li><li><p>操作像素</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">for x in range(80, 310):</span>
<span class="line">    for y in range(20, 360):</span>
<span class="line">        # 通过Image对象的putpixel方法修改图像指定像素点</span>
<span class="line">        image.putpixel((x, y), (128, 128, 128))</span>
<span class="line">image.show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+`" width="80%"></li><li><p>滤镜效果</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from PIL import ImageFilter</span>
<span class="line"></span>
<span class="line"># 使用Image对象的filter方法对图像进行滤镜处理</span>
<span class="line"># ImageFilter模块包含了诸多预设的滤镜也可以自定义滤镜</span>
<span class="line">image.filter(ImageFilter.CONTOUR).show()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+'" width="80%"></li></ol><h3 id="使用pillow绘图" tabindex="-1"><a class="header-anchor" href="#使用pillow绘图"><span>使用Pillow绘图</span></a></h3><p>Pillow中有一个名为<code>ImageDraw</code>的模块，该模块的<code>Draw</code>函数会返回一个<code>ImageDraw</code>对象，通过<code>ImageDraw</code>对象的<code>arc</code>、<code>line</code>、<code>rectangle</code>、<code>ellipse</code>、<code>polygon</code>等方法，可以在图像上绘制出圆弧、线条、矩形、椭圆、多边形等形状，也可以通过该对象的<code>text</code>方法在图像上添加文字。</p><img src="'+o+`" width="80%"><p>要绘制如上图所示的图像，完整的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line"></span>
<span class="line">from PIL import Image, ImageDraw, ImageFont</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def random_color():</span>
<span class="line">    &quot;&quot;&quot;生成随机颜色&quot;&quot;&quot;</span>
<span class="line">    red = random.randint(0, 255)</span>
<span class="line">    green = random.randint(0, 255)</span>
<span class="line">    blue = random.randint(0, 255)</span>
<span class="line">    return red, green, blue</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">width, height = 800, 600</span>
<span class="line"># 创建一个800*600的图像，背景色为白色</span>
<span class="line">image = Image.new(mode=&#39;RGB&#39;, size=(width, height), color=(255, 255, 255))</span>
<span class="line"># 创建一个ImageDraw对象</span>
<span class="line">drawer = ImageDraw.Draw(image)</span>
<span class="line"># 通过指定字体和大小获得ImageFont对象</span>
<span class="line">font = ImageFont.truetype(&#39;Kongxin.ttf&#39;, 32)</span>
<span class="line"># 通过ImageDraw对象的text方法绘制文字</span>
<span class="line">drawer.text((300, 50), &#39;Hello, world!&#39;, fill=(255, 0, 0), font=font)</span>
<span class="line"># 通过ImageDraw对象的line方法绘制两条对角直线</span>
<span class="line">drawer.line((0, 0, width, height), fill=(0, 0, 255), width=2)</span>
<span class="line">drawer.line((width, 0, 0, height), fill=(0, 0, 255), width=2)</span>
<span class="line">xy = width // 2 - 60, height // 2 - 60, width // 2 + 60, height // 2 + 60</span>
<span class="line"># 通过ImageDraw对象的rectangle方法绘制矩形</span>
<span class="line">drawer.rectangle(xy, outline=(255, 0, 0), width=2)</span>
<span class="line"># 通过ImageDraw对象的ellipse方法绘制椭圆</span>
<span class="line">for i in range(4):</span>
<span class="line">    left, top, right, bottom = 150 + i * 120, 220, 310 + i * 120, 380</span>
<span class="line">    drawer.ellipse((left, top, right, bottom), outline=random_color(), width=8)</span>
<span class="line"># 显示图像</span>
<span class="line">image.show()</span>
<span class="line"># 保存图像</span>
<span class="line">image.save(&#39;result.png&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面代码中使用的字体文件需要根据自己准备，可以选择自己喜欢的字体文件并放置在代码目录下。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结"><span>简单的总结</span></a></h3><p>使用Python语言做开发，除了可以用Pillow来处理图像外，还可以使用更为强大的OpenCV库来完成图形图像的处理，OpenCV（<strong>Open</strong> Source <strong>C</strong>omputer <strong>V</strong>ision Library）是一个跨平台的计算机视觉库，可以用来开发实时图像处理、计算机视觉和模式识别程序。在我们的日常工作中，有很多繁琐乏味的任务其实都可以通过Python程序来处理，编程的目的就是让计算机帮助我们解决问题，减少重复乏味的劳动。通过本章节的学习，相信大家已经感受到了使用Python程序绘图P图的乐趣，其实Python能做的事情还远不止这些，继续你的学习吧。</p>`,16),g=[v];function h(u,b){return s(),e("div",null,g)}const w=n(m,[["render",h],["__file","第28课：用Python处理图像.html.vue"]]),P=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC28%E8%AF%BE%EF%BC%9A%E7%94%A8Python%E5%A4%84%E7%90%86%E5%9B%BE%E5%83%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第28课：用Python处理图像","slug":"第28课-用python处理图像","link":"#第28课-用python处理图像","children":[{"level":3,"title":"入门知识","slug":"入门知识","link":"#入门知识","children":[]},{"level":3,"title":"用Pillow处理图像","slug":"用pillow处理图像","link":"#用pillow处理图像","children":[]},{"level":3,"title":"使用Pillow绘图","slug":"使用pillow绘图","link":"#使用pillow绘图","children":[]},{"level":3,"title":"简单的总结","slug":"简单的总结","link":"#简单的总结","children":[]}]}],"git":{"updatedTime":1720516588000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":2}]},"filePathRelative":"python/Python-Core-50-Courses/第28课：用Python处理图像.md"}');export{w as comp,P as data};
