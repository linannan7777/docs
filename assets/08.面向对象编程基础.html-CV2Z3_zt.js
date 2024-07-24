import{_ as n,c as s,o as a,b as e}from"./app-CgltcQVY.js";const i="/docs/assets/oop-zhihu-EWnpqYiz.png",l="/docs/assets/20210731182741-DJ_oyZqt.png",d={},p=e('<h2 id="面向对象编程基础" tabindex="-1"><a class="header-anchor" href="#面向对象编程基础"><span>面向对象编程基础</span></a></h2><p>活在当下的程序员应该都听过&quot;面向对象编程&quot;一词，也经常有人问能不能用一句话解释下什么是&quot;面向对象编程&quot;，我们先来看看比较正式的说法。</p><p>&quot;把一组数据结构和处理它们的方法组成对象（object），把相同行为的对象归纳为类（class），通过类的封装（encapsulation）隐藏内部细节，通过继承（inheritance）实现类的特化（specialization）和泛化（generalization），通过多态（polymorphism）实现基于对象类型的动态分派。&quot;</p><p>这样一说是不是更不明白了。所以我们还是看看更通俗易懂的说法，下面这段内容来自于<a href="https://www.zhihu.com/" target="_blank" rel="noopener noreferrer">知乎</a>。</p><p><img src="'+i+'" alt=""></p><blockquote><p><strong>说明：</strong> 以上的内容来自于网络，不代表作者本人的观点和看法，与作者本人立场无关，相关责任不由作者承担。</p></blockquote><p>之前我们说过&quot;<strong>程序是指令的集合</strong>&quot;，我们在程序中书写的语句在执行时会变成一条或多条指令然后由CPU去执行。当然为了简化程序的设计，我们引入了函数的概念，把相对独立且经常重复使用的代码放置到函数中，在需要使用这些功能的时候只要调用函数即可；如果一个函数的功能过于复杂和臃肿，我们又可以进一步将函数继续切分为子函数来降低系统的复杂性。但是说了这么多，不知道大家是否发现，所谓编程就是程序员按照计算机的工作方式控制计算机完成各种任务。但是，计算机的工作方式与正常人类的思维模式是不同的，如果编程就必须得抛弃人类正常的思维方式去迎合计算机，编程的乐趣就少了很多，&quot;每个人都应该学习编程&quot;这样的豪言壮语就只能说说而已。当然，这些还不是最重要的，最重要的是当我们需要开发一个复杂的系统时，代码的复杂性会让开发和维护工作都变得举步维艰，所以在上世纪60年代末期，&quot;<a href="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%8D%B1%E6%9C%BA" target="_blank" rel="noopener noreferrer">软件危机</a>&quot;、&quot;<a href="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B" target="_blank" rel="noopener noreferrer">软件工程</a>&quot;等一系列的概念开始在行业中出现。</p><p>当然，程序员圈子内的人都知道，现实中并没有解决上面所说的这些问题的&quot;<a href="https://zh.wikipedia.org/wiki/%E6%B2%A1%E6%9C%89%E9%93%B6%E5%BC%B9" target="_blank" rel="noopener noreferrer">银弹</a>&quot;，真正让软件开发者看到希望的是上世纪70年代诞生的<a href="https://zh.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>编程语言中引入的面向对象的编程思想（面向对象编程的雏形可以追溯到更早期的<a href="https://zh.wikipedia.org/wiki/Simula" target="_blank" rel="noopener noreferrer">Simula</a>语言）。按照这种编程理念，程序中的数据和操作数据的函数是一个逻辑上的整体，我们称之为“对象”，而我们解决问题的方式就是创建出需要的对象并向对象发出各种各样的消息，多个对象的协同工作最终可以让我们构造出复杂的系统来解决现实中的问题。</p><blockquote><p><strong>说明：</strong> 当然面向对象也不是解决软件开发中所有问题的最后的“银弹”，所以今天的高级程序设计语言几乎都提供了对多种编程范式的支持，Python也不例外。</p></blockquote><h3 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象"><span>类和对象</span></a></h3><p>简单的说，类是对象的蓝图和模板，而对象是类的实例。这个解释虽然有点像用概念在解释概念，但是从这句话我们至少可以看出，类是抽象的概念，而对象是具体的东西。在面向对象编程的世界中，一切皆为对象，对象都有属性和行为，每个对象都是独一无二的，而且对象一定属于某个类（型）。当我们把一大堆拥有共同特征的对象的静态特征（属性）和动态特征（行为）都抽取出来后，就可以定义出一个叫做“类”的东西。</p><p><img src="'+l+`" alt=""></p><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类"><span>定义类</span></a></h3><p>在Python中可以使用<code>class</code>关键字定义类，然后在类中通过之前学习过的函数来定义方法，这样就可以将对象的动态特征描述出来，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Student(object):</span>
<span class="line"></span>
<span class="line">    # __init__是一个特殊方法用于在创建对象时进行初始化操作</span>
<span class="line">    # 通过这个方法我们可以为学生对象绑定name和age两个属性</span>
<span class="line">    def __init__(self, name, age):</span>
<span class="line">        self.name = name</span>
<span class="line">        self.age = age</span>
<span class="line"></span>
<span class="line">    def study(self, course_name):</span>
<span class="line">        print(&#39;%s正在学习%s.&#39; % (self.name, course_name))</span>
<span class="line"></span>
<span class="line">    # PEP 8要求标识符的名字用全小写多个单词用下划线连接</span>
<span class="line">    # 但是部分程序员和公司更倾向于使用驼峰命名法(驼峰标识)</span>
<span class="line">    def watch_movie(self):</span>
<span class="line">        if self.age &lt; 18:</span>
<span class="line">            print(&#39;%s只能观看《熊出没》.&#39; % self.name)</span>
<span class="line">        else:</span>
<span class="line">            print(&#39;%s正在观看岛国爱情大电影.&#39; % self.name)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 写在类中的函数，我们通常称之为（对象的）方法，这些方法就是对象可以接收的消息。</p></blockquote><h3 id="创建和使用对象" tabindex="-1"><a class="header-anchor" href="#创建和使用对象"><span>创建和使用对象</span></a></h3><p>当我们定义好一个类之后，可以通过下面的方式来创建对象并给对象发消息。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    # 创建学生对象并指定姓名和年龄</span>
<span class="line">    stu1 = Student(&#39;骆昊&#39;, 38)</span>
<span class="line">    # 给对象发study消息</span>
<span class="line">    stu1.study(&#39;Python程序设计&#39;)</span>
<span class="line">    # 给对象发watch_av消息</span>
<span class="line">    stu1.watch_movie()</span>
<span class="line">    stu2 = Student(&#39;王大锤&#39;, 15)</span>
<span class="line">    stu2.study(&#39;思想品德&#39;)</span>
<span class="line">    stu2.watch_movie()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问可见性问题" tabindex="-1"><a class="header-anchor" href="#访问可见性问题"><span>访问可见性问题</span></a></h3><p>对于上面的代码，有C++、Java、C#等编程经验的程序员可能会问，我们给<code>Student</code>对象绑定的<code>name</code>和<code>age</code>属性到底具有怎样的访问权限（也称为可见性）。因为在很多面向对象编程语言中，我们通常会将对象的属性设置为私有的（private）或受保护的（protected），简单的说就是不允许外界访问，而对象的方法通常都是公开的（public），因为公开的方法就是对象能够接受的消息。在Python中，属性和方法的访问权限只有两种，也就是公开的和私有的，如果希望属性是私有的，在给属性命名时可以用两个下划线作为开头，下面的代码可以验证这一点。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Test:</span>
<span class="line"></span>
<span class="line">    def __init__(self, foo):</span>
<span class="line">        self.__foo = foo</span>
<span class="line"></span>
<span class="line">    def __bar(self):</span>
<span class="line">        print(self.__foo)</span>
<span class="line">        print(&#39;__bar&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    test = Test(&#39;hello&#39;)</span>
<span class="line">    # AttributeError: &#39;Test&#39; object has no attribute &#39;__bar&#39;</span>
<span class="line">    test.__bar()</span>
<span class="line">    # AttributeError: &#39;Test&#39; object has no attribute &#39;__foo&#39;</span>
<span class="line">    print(test.__foo)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &quot;__main__&quot;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，Python并没有从语法上严格保证私有属性或方法的私密性，它只是给私有的属性和方法换了一个名字来妨碍对它们的访问，事实上如果你知道更换名字的规则仍然可以访问到它们，下面的代码就可以验证这一点。之所以这样设定，可以用这样一句名言加以解释，就是&quot;<strong>We are all consenting adults here</strong>&quot;。因为绝大多数程序员都认为开放比封闭要好，而且程序员要自己为自己的行为负责。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Test:</span>
<span class="line"></span>
<span class="line">    def __init__(self, foo):</span>
<span class="line">        self.__foo = foo</span>
<span class="line"></span>
<span class="line">    def __bar(self):</span>
<span class="line">        print(self.__foo)</span>
<span class="line">        print(&#39;__bar&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    test = Test(&#39;hello&#39;)</span>
<span class="line">    test._Test__bar()</span>
<span class="line">    print(test._Test__foo)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &quot;__main__&quot;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际开发中，我们并不建议将属性设置为私有的，因为这会导致子类无法访问（后面会讲到）。所以大多数Python程序员会遵循一种命名惯例就是让属性名以单下划线开头来表示属性是受保护的，本类之外的代码在访问这样的属性时应该要保持慎重。这种做法并不是语法上的规则，单下划线开头的属性和方法外界仍然是可以访问的，所以更多的时候它是一种暗示或隐喻，关于这一点可以看看我的<a href="http://blog.csdn.net/jackfrued/article/details/79521404" target="_blank" rel="noopener noreferrer">《Python - 那些年我们踩过的那些坑》</a>文章中的讲解。</p><h3 id="面向对象的支柱" tabindex="-1"><a class="header-anchor" href="#面向对象的支柱"><span>面向对象的支柱</span></a></h3><p>面向对象有三大支柱：封装、继承和多态。后面两个概念在下一个章节中进行详细的说明，这里我们先说一下什么是封装。我自己对封装的理解是&quot;隐藏一切可以隐藏的实现细节，只向外界暴露（提供）简单的编程接口&quot;。我们在类中定义的方法其实就是把数据和对数据的操作封装起来了，在我们创建了对象之后，只需要给对象发送一个消息（调用方法）就可以执行方法中的代码，也就是说我们只需要知道方法的名字和传入的参数（方法的外部视图），而不需要知道方法内部的实现细节（方法的内部视图）。</p><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3><h4 id="练习1-定义一个类描述数字时钟。" tabindex="-1"><a class="header-anchor" href="#练习1-定义一个类描述数字时钟。"><span>练习1：定义一个类描述数字时钟。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Clock(object):</span>
<span class="line">    &quot;&quot;&quot;数字时钟&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, hour=0, minute=0, second=0):</span>
<span class="line">        &quot;&quot;&quot;初始化方法</span>
<span class="line"></span>
<span class="line">        :param hour: 时</span>
<span class="line">        :param minute: 分</span>
<span class="line">        :param second: 秒</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self._hour = hour</span>
<span class="line">        self._minute = minute</span>
<span class="line">        self._second = second</span>
<span class="line"></span>
<span class="line">    def run(self):</span>
<span class="line">        &quot;&quot;&quot;走字&quot;&quot;&quot;</span>
<span class="line">        self._second += 1</span>
<span class="line">        if self._second == 60:</span>
<span class="line">            self._second = 0</span>
<span class="line">            self._minute += 1</span>
<span class="line">            if self._minute == 60:</span>
<span class="line">                self._minute = 0</span>
<span class="line">                self._hour += 1</span>
<span class="line">                if self._hour == 24:</span>
<span class="line">                    self._hour = 0</span>
<span class="line"></span>
<span class="line">    def show(self):</span>
<span class="line">        &quot;&quot;&quot;显示时间&quot;&quot;&quot;</span>
<span class="line">        return &#39;%02d:%02d:%02d&#39; % \\</span>
<span class="line">               (self._hour, self._minute, self._second)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    clock = Clock(23, 59, 58)</span>
<span class="line">    while True:</span>
<span class="line">        print(clock.show())</span>
<span class="line">        sleep(1)</span>
<span class="line">        clock.run()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习2-定义一个类描述平面上的点并提供移动点和计算到另一个点距离的方法。" tabindex="-1"><a class="header-anchor" href="#练习2-定义一个类描述平面上的点并提供移动点和计算到另一个点距离的方法。"><span>练习2：定义一个类描述平面上的点并提供移动点和计算到另一个点距离的方法。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from math import sqrt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Point(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self, x=0, y=0):</span>
<span class="line">        &quot;&quot;&quot;初始化方法</span>
<span class="line">        </span>
<span class="line">        :param x: 横坐标</span>
<span class="line">        :param y: 纵坐标</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self.x = x</span>
<span class="line">        self.y = y</span>
<span class="line"></span>
<span class="line">    def move_to(self, x, y):</span>
<span class="line">        &quot;&quot;&quot;移动到指定位置</span>
<span class="line">        </span>
<span class="line">        :param x: 新的横坐标</span>
<span class="line">        &quot;param y: 新的纵坐标</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self.x = x</span>
<span class="line">        self.y = y</span>
<span class="line"></span>
<span class="line">    def move_by(self, dx, dy):</span>
<span class="line">        &quot;&quot;&quot;移动指定的增量</span>
<span class="line">        </span>
<span class="line">        :param dx: 横坐标的增量</span>
<span class="line">        &quot;param dy: 纵坐标的增量</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self.x += dx</span>
<span class="line">        self.y += dy</span>
<span class="line"></span>
<span class="line">    def distance_to(self, other):</span>
<span class="line">        &quot;&quot;&quot;计算与另一个点的距离</span>
<span class="line">        </span>
<span class="line">        :param other: 另一个点</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        dx = self.x - other.x</span>
<span class="line">        dy = self.y - other.y</span>
<span class="line">        return sqrt(dx ** 2 + dy ** 2)</span>
<span class="line"></span>
<span class="line">    def __str__(self):</span>
<span class="line">        return &#39;(%s, %s)&#39; % (str(self.x), str(self.y))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    p1 = Point(3, 5)</span>
<span class="line">    p2 = Point()</span>
<span class="line">    print(p1)</span>
<span class="line">    print(p2)</span>
<span class="line">    p2.move_by(-1, 2)</span>
<span class="line">    print(p2)</span>
<span class="line">    print(p1.distance_to(p2))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 本章中的插图来自于Grady Booch等著作的<a href="https://item.jd.com/20476561918.html" target="_blank" rel="noopener noreferrer">《面向对象分析与设计》</a>一书，该书是讲解面向对象编程的经典著作，有兴趣的读者可以购买和阅读这本书来了解更多的面向对象的相关知识。</p></blockquote>`,35),c=[p];function r(t,v){return a(),s("div",null,c)}const o=n(d,[["render",r],["__file","08.面向对象编程基础.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/08.%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"面向对象编程基础","slug":"面向对象编程基础","link":"#面向对象编程基础","children":[{"level":3,"title":"类和对象","slug":"类和对象","link":"#类和对象","children":[]},{"level":3,"title":"定义类","slug":"定义类","link":"#定义类","children":[]},{"level":3,"title":"创建和使用对象","slug":"创建和使用对象","link":"#创建和使用对象","children":[]},{"level":3,"title":"访问可见性问题","slug":"访问可见性问题","link":"#访问可见性问题","children":[]},{"level":3,"title":"面向对象的支柱","slug":"面向对象的支柱","link":"#面向对象的支柱","children":[]},{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/08.面向对象编程基础.md"}');export{o as comp,m as data};
