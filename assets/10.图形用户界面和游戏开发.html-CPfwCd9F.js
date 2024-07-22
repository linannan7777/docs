import{_ as n,c as s,o as a,d as e}from"./app-CfKFMHBg.js";const i={},l=e(`<h2 id="图形用户界面和游戏开发" tabindex="-1"><a class="header-anchor" href="#图形用户界面和游戏开发"><span>图形用户界面和游戏开发</span></a></h2><h3 id="基于tkinter模块的gui" tabindex="-1"><a class="header-anchor" href="#基于tkinter模块的gui"><span>基于tkinter模块的GUI</span></a></h3><p>GUI是图形用户界面的缩写，图形化的用户界面对使用过计算机的人来说应该都不陌生，在此也无需进行赘述。Python默认的GUI开发模块是tkinter（在Python 3以前的版本中名为Tkinter），从这个名字就可以看出它是基于Tk的，Tk是一个工具包，最初是为Tcl设计的，后来被移植到很多其他的脚本语言中，它提供了跨平台的GUI控件。当然Tk并不是最新和最好的选择，也没有功能特别强大的GUI控件，事实上，开发GUI应用并不是Python最擅长的工作，如果真的需要使用Python开发GUI应用，wxPython、PyQt、PyGTK等模块都是不错的选择。</p><p>基本上使用tkinter来开发GUI应用需要以下5个步骤：</p><ol><li>导入tkinter模块中我们需要的东西。</li><li>创建一个顶层窗口对象并用它来承载整个GUI应用。</li><li>在顶层窗口对象上添加GUI组件。</li><li>通过代码将这些GUI组件的功能组织起来。</li><li>进入主事件循环(main loop)。</li></ol><p>下面的代码演示了如何使用tkinter做一个简单的GUI应用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import tkinter</span>
<span class="line">import tkinter.messagebox</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    flag = True</span>
<span class="line"></span>
<span class="line">    # 修改标签上的文字</span>
<span class="line">    def change_label_text():</span>
<span class="line">        nonlocal flag</span>
<span class="line">        flag = not flag</span>
<span class="line">        color, msg = (&#39;red&#39;, &#39;Hello, world!&#39;)\\</span>
<span class="line">            if flag else (&#39;blue&#39;, &#39;Goodbye, world!&#39;)</span>
<span class="line">        label.config(text=msg, fg=color)</span>
<span class="line"></span>
<span class="line">    # 确认退出</span>
<span class="line">    def confirm_to_quit():</span>
<span class="line">        if tkinter.messagebox.askokcancel(&#39;温馨提示&#39;, &#39;确定要退出吗?&#39;):</span>
<span class="line">            top.quit()</span>
<span class="line"></span>
<span class="line">    # 创建顶层窗口</span>
<span class="line">    top = tkinter.Tk()</span>
<span class="line">    # 设置窗口大小</span>
<span class="line">    top.geometry(&#39;240x160&#39;)</span>
<span class="line">    # 设置窗口标题</span>
<span class="line">    top.title(&#39;小游戏&#39;)</span>
<span class="line">    # 创建标签对象并添加到顶层窗口</span>
<span class="line">    label = tkinter.Label(top, text=&#39;Hello, world!&#39;, font=&#39;Arial -32&#39;, fg=&#39;red&#39;)</span>
<span class="line">    label.pack(expand=1)</span>
<span class="line">    # 创建一个装按钮的容器</span>
<span class="line">    panel = tkinter.Frame(top)</span>
<span class="line">    # 创建按钮对象 指定添加到哪个容器中 通过command参数绑定事件回调函数</span>
<span class="line">    button1 = tkinter.Button(panel, text=&#39;修改&#39;, command=change_label_text)</span>
<span class="line">    button1.pack(side=&#39;left&#39;)</span>
<span class="line">    button2 = tkinter.Button(panel, text=&#39;退出&#39;, command=confirm_to_quit)</span>
<span class="line">    button2.pack(side=&#39;right&#39;)</span>
<span class="line">    panel.pack(side=&#39;bottom&#39;)</span>
<span class="line">    # 开启主事件循环</span>
<span class="line">    tkinter.mainloop()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，GUI应用通常是事件驱动式的，之所以要进入主事件循环就是要监听鼠标、键盘等各种事件的发生并执行对应的代码对事件进行处理，因为事件会持续的发生，所以需要这样的一个循环一直运行着等待下一个事件的发生。另一方面，Tk为控件的摆放提供了三种布局管理器，通过布局管理器可以对控件进行定位，这三种布局管理器分别是：Placer（开发者提供控件的大小和摆放位置）、Packer（自动将控件填充到合适的位置）和Grid（基于网格坐标来摆放控件），此处不进行赘述。</p><h3 id="使用pygame进行游戏开发" tabindex="-1"><a class="header-anchor" href="#使用pygame进行游戏开发"><span>使用Pygame进行游戏开发</span></a></h3><p>Pygame是一个开源的Python模块，专门用于多媒体应用（如电子游戏）的开发，其中包含对图像、声音、视频、事件、碰撞等的支持。Pygame建立在<a href="https://zh.wikipedia.org/wiki/SDL" target="_blank" rel="noopener noreferrer">SDL</a>的基础上，SDL是一套跨平台的多媒体开发库，用C语言实现，被广泛的应用于游戏、模拟器、播放器等的开发。而Pygame让游戏开发者不再被底层语言束缚，可以更多的关注游戏的功能和逻辑。</p><p>下面我们来完成一个简单的小游戏，游戏的名字叫“大球吃小球”，当然完成这个游戏并不是重点，学会使用Pygame也不是重点，最重要的我们要在这个过程中体会如何使用前面讲解的面向对象程序设计，学会用这种编程思想去解决现实中的问题。</p><h4 id="制作游戏窗口" tabindex="-1"><a class="header-anchor" href="#制作游戏窗口"><span>制作游戏窗口</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pygame</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 初始化导入的pygame中的模块</span>
<span class="line">    pygame.init()</span>
<span class="line">    # 初始化用于显示的窗口并设置窗口尺寸</span>
<span class="line">    screen = pygame.display.set_mode((800, 600))</span>
<span class="line">    # 设置当前窗口的标题</span>
<span class="line">    pygame.display.set_caption(&#39;大球吃小球&#39;)</span>
<span class="line">    running = True</span>
<span class="line">    # 开启一个事件循环处理发生的事件</span>
<span class="line">    while running:</span>
<span class="line">        # 从消息队列中获取事件并对事件进行处理</span>
<span class="line">        for event in pygame.event.get():</span>
<span class="line">            if event.type == pygame.QUIT:</span>
<span class="line">                running = False</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在窗口中绘图" tabindex="-1"><a class="header-anchor" href="#在窗口中绘图"><span>在窗口中绘图</span></a></h4><p>可以通过pygame中draw模块的函数在窗口上绘图，可以绘制的图形包括：线条、矩形、多边形、圆、椭圆、圆弧等。需要说明的是，屏幕坐标系是将屏幕左上角设置为坐标原点<code>(0, 0)</code>，向右是x轴的正向，向下是y轴的正向，在表示位置或者设置尺寸的时候，我们默认的单位都是<a href="https://zh.wikipedia.org/wiki/%E5%83%8F%E7%B4%A0" target="_blank" rel="noopener noreferrer">像素</a>。所谓像素就是屏幕上的一个点，你可以用浏览图片的软件试着将一张图片放大若干倍，就可以看到这些点。pygame中表示颜色用的是色光<a href="https://zh.wikipedia.org/wiki/%E5%8E%9F%E8%89%B2" target="_blank" rel="noopener noreferrer">三原色</a>表示法，即通过一个元组或列表来指定颜色的RGB值，每个值都在0~255之间，因为是每种原色都用一个8位（bit）的值来表示，三种颜色相当于一共由24位构成，这也就是常说的“24位颜色表示法”。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pygame</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 初始化导入的pygame中的模块</span>
<span class="line">    pygame.init()</span>
<span class="line">    # 初始化用于显示的窗口并设置窗口尺寸</span>
<span class="line">    screen = pygame.display.set_mode((800, 600))</span>
<span class="line">    # 设置当前窗口的标题</span>
<span class="line">    pygame.display.set_caption(&#39;大球吃小球&#39;)</span>
<span class="line">    # 设置窗口的背景色(颜色是由红绿蓝三原色构成的元组)</span>
<span class="line">    screen.fill((242, 242, 242))</span>
<span class="line">    # 绘制一个圆(参数分别是: 屏幕, 颜色, 圆心位置, 半径, 0表示填充圆)</span>
<span class="line">    pygame.draw.circle(screen, (255, 0, 0,), (100, 100), 30, 0)</span>
<span class="line">    # 刷新当前窗口(渲染窗口将绘制的图像呈现出来)</span>
<span class="line">    pygame.display.flip()</span>
<span class="line">    running = True</span>
<span class="line">    # 开启一个事件循环处理发生的事件</span>
<span class="line">    while running:</span>
<span class="line">        # 从消息队列中获取事件并对事件进行处理</span>
<span class="line">        for event in pygame.event.get():</span>
<span class="line">            if event.type == pygame.QUIT:</span>
<span class="line">                running = False</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="加载图像" tabindex="-1"><a class="header-anchor" href="#加载图像"><span>加载图像</span></a></h4><p>如果需要直接加载图像到窗口上，可以使用pygame中image模块的函数来加载图像，再通过之前获得的窗口对象的<code>blit</code>方法渲染图像，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pygame</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 初始化导入的pygame中的模块</span>
<span class="line">    pygame.init()</span>
<span class="line">    # 初始化用于显示的窗口并设置窗口尺寸</span>
<span class="line">    screen = pygame.display.set_mode((800, 600))</span>
<span class="line">    # 设置当前窗口的标题</span>
<span class="line">    pygame.display.set_caption(&#39;大球吃小球&#39;)</span>
<span class="line">    # 设置窗口的背景色(颜色是由红绿蓝三原色构成的元组)</span>
<span class="line">    screen.fill((255, 255, 255))</span>
<span class="line">    # 通过指定的文件名加载图像</span>
<span class="line">    ball_image = pygame.image.load(&#39;./res/ball.png&#39;)</span>
<span class="line">    # 在窗口上渲染图像</span>
<span class="line">    screen.blit(ball_image, (50, 50))</span>
<span class="line">    # 刷新当前窗口(渲染窗口将绘制的图像呈现出来)</span>
<span class="line">    pygame.display.flip()</span>
<span class="line">    running = True</span>
<span class="line">    # 开启一个事件循环处理发生的事件</span>
<span class="line">    while running:</span>
<span class="line">        # 从消息队列中获取事件并对事件进行处理</span>
<span class="line">        for event in pygame.event.get():</span>
<span class="line">            if event.type == pygame.QUIT:</span>
<span class="line">                running = False</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现动画效果" tabindex="-1"><a class="header-anchor" href="#实现动画效果"><span>实现动画效果</span></a></h4><p>说到<a href="https://zh.wikipedia.org/wiki/%E5%8A%A8%E7%94%BB" target="_blank" rel="noopener noreferrer">动画</a>这个词大家都不会陌生，事实上要实现动画效果，本身的原理也非常简单，就是将不连续的图片连续的播放，只要每秒钟达到了一定的帧数，那么就可以做出比较流畅的动画效果。如果要让上面代码中的小球动起来，可以将小球的位置用变量来表示，并在循环中修改小球的位置再刷新整个窗口即可。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pygame</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 初始化导入的pygame中的模块</span>
<span class="line">    pygame.init()</span>
<span class="line">    # 初始化用于显示的窗口并设置窗口尺寸</span>
<span class="line">    screen = pygame.display.set_mode((800, 600))</span>
<span class="line">    # 设置当前窗口的标题</span>
<span class="line">    pygame.display.set_caption(&#39;大球吃小球&#39;)</span>
<span class="line">    # 定义变量来表示小球在屏幕上的位置</span>
<span class="line">    x, y = 50, 50</span>
<span class="line">    running = True</span>
<span class="line">    # 开启一个事件循环处理发生的事件</span>
<span class="line">    while running:</span>
<span class="line">        # 从消息队列中获取事件并对事件进行处理</span>
<span class="line">        for event in pygame.event.get():</span>
<span class="line">            if event.type == pygame.QUIT:</span>
<span class="line">                running = False</span>
<span class="line">        screen.fill((255, 255, 255))</span>
<span class="line">        pygame.draw.circle(screen, (255, 0, 0,), (x, y), 30, 0)</span>
<span class="line">        pygame.display.flip()</span>
<span class="line">        # 每隔50毫秒就改变小球的位置再刷新窗口</span>
<span class="line">        pygame.time.delay(50)</span>
<span class="line">        x, y = x + 5, y + 5</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="碰撞检测" tabindex="-1"><a class="header-anchor" href="#碰撞检测"><span>碰撞检测</span></a></h4><p>通常一个游戏中会有很多对象出现，而这些对象之间的“碰撞”在所难免，比如炮弹击中了飞机、箱子撞到了地面等。碰撞检测在绝大多数的游戏中都是一个必须得处理的至关重要的问题，pygame的sprite（动画精灵）模块就提供了对碰撞检测的支持，这里我们暂时不介绍sprite模块提供的功能，因为要检测两个小球有没有碰撞其实非常简单，只需要检查球心的距离有没有小于两个球的半径之和。为了制造出更多的小球，我们可以通过对鼠标事件的处理，在点击鼠标的位置创建颜色、大小和移动速度都随机的小球，当然要做到这一点，我们可以把之前学习到的面向对象的知识应用起来。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from enum import Enum, unique</span>
<span class="line">from math import sqrt</span>
<span class="line">from random import randint</span>
<span class="line"></span>
<span class="line">import pygame</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@unique</span>
<span class="line">class Color(Enum):</span>
<span class="line">    &quot;&quot;&quot;颜色&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    RED = (255, 0, 0)</span>
<span class="line">    GREEN = (0, 255, 0)</span>
<span class="line">    BLUE = (0, 0, 255)</span>
<span class="line">    BLACK = (0, 0, 0)</span>
<span class="line">    WHITE = (255, 255, 255)</span>
<span class="line">    GRAY = (242, 242, 242)</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def random_color():</span>
<span class="line">        &quot;&quot;&quot;获得随机颜色&quot;&quot;&quot;</span>
<span class="line">        r = randint(0, 255)</span>
<span class="line">        g = randint(0, 255)</span>
<span class="line">        b = randint(0, 255)</span>
<span class="line">        return (r, g, b)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Ball(object):</span>
<span class="line">    &quot;&quot;&quot;球&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, x, y, radius, sx, sy, color=Color.RED):</span>
<span class="line">        &quot;&quot;&quot;初始化方法&quot;&quot;&quot;</span>
<span class="line">        self.x = x</span>
<span class="line">        self.y = y</span>
<span class="line">        self.radius = radius</span>
<span class="line">        self.sx = sx</span>
<span class="line">        self.sy = sy</span>
<span class="line">        self.color = color</span>
<span class="line">        self.alive = True</span>
<span class="line"></span>
<span class="line">    def move(self, screen):</span>
<span class="line">        &quot;&quot;&quot;移动&quot;&quot;&quot;</span>
<span class="line">        self.x += self.sx</span>
<span class="line">        self.y += self.sy</span>
<span class="line">        if self.x - self.radius &lt;= 0 or \\</span>
<span class="line">                self.x + self.radius &gt;= screen.get_width():</span>
<span class="line">            self.sx = -self.sx</span>
<span class="line">        if self.y - self.radius &lt;= 0 or \\</span>
<span class="line">                self.y + self.radius &gt;= screen.get_height():</span>
<span class="line">            self.sy = -self.sy</span>
<span class="line"></span>
<span class="line">    def eat(self, other):</span>
<span class="line">        &quot;&quot;&quot;吃其他球&quot;&quot;&quot;</span>
<span class="line">        if self.alive and other.alive and self != other:</span>
<span class="line">            dx, dy = self.x - other.x, self.y - other.y</span>
<span class="line">            distance = sqrt(dx ** 2 + dy ** 2)</span>
<span class="line">            if distance &lt; self.radius + other.radius \\</span>
<span class="line">                    and self.radius &gt; other.radius:</span>
<span class="line">                other.alive = False</span>
<span class="line">                self.radius = self.radius + int(other.radius * 0.146)</span>
<span class="line"></span>
<span class="line">    def draw(self, screen):</span>
<span class="line">        &quot;&quot;&quot;在窗口上绘制球&quot;&quot;&quot;</span>
<span class="line">        pygame.draw.circle(screen, self.color,</span>
<span class="line">                           (self.x, self.y), self.radius, 0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理"><span>事件处理</span></a></h4><p>可以在事件循环中对鼠标事件进行处理，通过事件对象的<code>type</code>属性可以判定事件类型，再通过<code>pos</code>属性就可以获得鼠标点击的位置。如果要处理键盘事件也是在这个地方，做法与处理鼠标事件类似。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    # 定义用来装所有球的容器</span>
<span class="line">    balls = []</span>
<span class="line">    # 初始化导入的pygame中的模块</span>
<span class="line">    pygame.init()</span>
<span class="line">    # 初始化用于显示的窗口并设置窗口尺寸</span>
<span class="line">    screen = pygame.display.set_mode((800, 600))</span>
<span class="line">    # 设置当前窗口的标题</span>
<span class="line">    pygame.display.set_caption(&#39;大球吃小球&#39;)</span>
<span class="line">    running = True</span>
<span class="line">    # 开启一个事件循环处理发生的事件</span>
<span class="line">    while running:</span>
<span class="line">        # 从消息队列中获取事件并对事件进行处理</span>
<span class="line">        for event in pygame.event.get():</span>
<span class="line">            if event.type == pygame.QUIT:</span>
<span class="line">                running = False</span>
<span class="line">            # 处理鼠标事件的代码</span>
<span class="line">            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:</span>
<span class="line">                # 获得点击鼠标的位置</span>
<span class="line">                x, y = event.pos</span>
<span class="line">                radius = randint(10, 100)</span>
<span class="line">                sx, sy = randint(-10, 10), randint(-10, 10)</span>
<span class="line">                color = Color.random_color()</span>
<span class="line">                # 在点击鼠标的位置创建一个球(大小、速度和颜色随机)</span>
<span class="line">                ball = Ball(x, y, radius, sx, sy, color)</span>
<span class="line">                # 将球添加到列表容器中</span>
<span class="line">                balls.append(ball)</span>
<span class="line">        screen.fill((255, 255, 255))</span>
<span class="line">        # 取出容器中的球 如果没被吃掉就绘制 被吃掉了就移除</span>
<span class="line">        for ball in balls:</span>
<span class="line">            if ball.alive:</span>
<span class="line">                ball.draw(screen)</span>
<span class="line">            else:</span>
<span class="line">                balls.remove(ball)</span>
<span class="line">        pygame.display.flip()</span>
<span class="line">        # 每隔50毫秒就改变球的位置再刷新窗口</span>
<span class="line">        pygame.time.delay(50)</span>
<span class="line">        for ball in balls:</span>
<span class="line">            ball.move(screen)</span>
<span class="line">            # 检查球有没有吃到其他的球</span>
<span class="line">            for other in balls:</span>
<span class="line">                ball.eat(other)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的两段代码合在一起，我们就完成了“大球吃小球”的游戏（如下图所示），准确的说它算不上一个游戏，但是做一个小游戏的基本知识我们已经通过这个例子告诉大家了，有了这些知识已经可以开始你的小游戏开发之旅了。其实上面的代码中还有很多值得改进的地方，比如刷新窗口以及让球移动起来的代码并不应该放在事件循环中，等学习了多线程的知识后，用一个后台线程来处理这些事可能是更好的选择。如果希望获得更好的用户体验，我们还可以在游戏中加入背景音乐以及在球与球发生碰撞时播放音效，利用pygame的mixer和music模块，我们可以很容易的做到这一点，大家可以自行了解这方面的知识。事实上，想了解更多的关于pygame的知识，最好的教程是<a href="https://www.pygame.org/news" target="_blank" rel="noopener noreferrer">pygame的官方网站</a>，如果英语没毛病就可以赶紧去看看啦。 如果想开发<a href="https://zh.wikipedia.org/wiki/3D%E6%B8%B8%E6%88%8F" target="_blank" rel="noopener noreferrer">3D游戏</a>，pygame就显得力不从心了，对3D游戏开发如果有兴趣的读者不妨看看<a href="https://www.panda3d.org/" target="_blank" rel="noopener noreferrer">Panda3D</a>。</p>`,29),d=[l];function p(c,r){return a(),s("div",null,d)}const m=n(i,[["render",p],["__file","10.图形用户界面和游戏开发.html.vue"]]),t=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/10.%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2%E5%92%8C%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"图形用户界面和游戏开发","slug":"图形用户界面和游戏开发","link":"#图形用户界面和游戏开发","children":[{"level":3,"title":"基于tkinter模块的GUI","slug":"基于tkinter模块的gui","link":"#基于tkinter模块的gui","children":[]},{"level":3,"title":"使用Pygame进行游戏开发","slug":"使用pygame进行游戏开发","link":"#使用pygame进行游戏开发","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/10.图形用户界面和游戏开发.md"}');export{m as comp,t as data};
