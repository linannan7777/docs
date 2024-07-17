import{_ as s,c as n,o as a,d as e}from"./app-CxrMoykp.js";const l="/docs/assets/uml-components-DWN19d83.png",i="/docs/assets/uml-example-C33iYVxD.png",d={},p=e(`<h2 id="面向对象进阶" tabindex="-1"><a class="header-anchor" href="#面向对象进阶"><span>面向对象进阶</span></a></h2><p>在前面的章节我们已经了解了面向对象的入门知识，知道了如何定义类，如何创建对象以及如何给对象发消息。为了能够更好的使用面向对象编程思想进行程序开发，我们还需要对Python中的面向对象编程进行更为深入的了解。</p><h3 id="property装饰器" tabindex="-1"><a class="header-anchor" href="#property装饰器"><span>@property装饰器</span></a></h3><p>之前我们讨论过Python中属性和方法访问权限的问题，虽然我们不建议将属性设置为私有的，但是如果直接将属性暴露给外界也是有问题的，比如我们没有办法检查赋给属性的值是否有效。我们之前的建议是将属性命名以单下划线开头，通过这种方式来暗示属性是受保护的，不建议外界直接访问，那么如果想访问属性可以通过属性的getter（访问器）和setter（修改器）方法进行对应的操作。如果要做到这点，就可以考虑使用@property包装器来包装getter和setter方法，使得对属性的访问既安全又方便，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Person(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, age):</span>
<span class="line">        self._name = name</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    # 访问器 - getter方法</span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    # 访问器 - getter方法</span>
<span class="line">    @property</span>
<span class="line">    def age(self):</span>
<span class="line">        return self._age</span>
<span class="line"></span>
<span class="line">    # 修改器 - setter方法</span>
<span class="line">    @age.setter</span>
<span class="line">    def age(self, age):</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    def play(self):</span>
<span class="line">        if self._age &lt;= 16:</span>
<span class="line">            print(&#39;%s正在玩飞行棋.&#39; % self._name)</span>
<span class="line">        else:</span>
<span class="line">            print(&#39;%s正在玩斗地主.&#39; % self._name)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    person = Person(&#39;王大锤&#39;, 12)</span>
<span class="line">    person.play()</span>
<span class="line">    person.age = 22</span>
<span class="line">    person.play()</span>
<span class="line">    # person.name = &#39;白元芳&#39;  # AttributeError: can&#39;t set attribute</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slots-魔法" tabindex="-1"><a class="header-anchor" href="#slots-魔法"><span>__slots__魔法</span></a></h3><p>我们讲到这里，不知道大家是否已经意识到，Python是一门<a href="https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">动态语言</a>。通常，动态语言允许我们在程序运行时给对象绑定新的属性或方法，当然也可以对已经绑定的属性和方法进行解绑定。但是如果我们需要限定自定义类型的对象只能绑定某些属性，可以通过在类中定义__slots__变量来进行限定。需要注意的是__slots__的限定只对当前类的对象生效，对子类并不起任何作用。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Person(object):</span>
<span class="line"></span>
<span class="line">    # 限定Person对象只能绑定_name, _age和_gender属性</span>
<span class="line">    __slots__ = (&#39;_name&#39;, &#39;_age&#39;, &#39;_gender&#39;)</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, age):</span>
<span class="line">        self._name = name</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def age(self):</span>
<span class="line">        return self._age</span>
<span class="line"></span>
<span class="line">    @age.setter</span>
<span class="line">    def age(self, age):</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    def play(self):</span>
<span class="line">        if self._age &lt;= 16:</span>
<span class="line">            print(&#39;%s正在玩飞行棋.&#39; % self._name)</span>
<span class="line">        else:</span>
<span class="line">            print(&#39;%s正在玩斗地主.&#39; % self._name)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    person = Person(&#39;王大锤&#39;, 22)</span>
<span class="line">    person.play()</span>
<span class="line">    person._gender = &#39;男&#39;</span>
<span class="line">    # AttributeError: &#39;Person&#39; object has no attribute &#39;_is_gay&#39;</span>
<span class="line">    # person._is_gay = True</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法和类方法" tabindex="-1"><a class="header-anchor" href="#静态方法和类方法"><span>静态方法和类方法</span></a></h3><p>之前，我们在类中定义的方法都是对象方法，也就是说这些方法都是发送给对象的消息。实际上，我们写在类中的方法并不需要都是对象方法，例如我们定义一个“三角形”类，通过传入三条边长来构造三角形，并提供计算周长和面积的方法，但是传入的三条边长未必能构造出三角形对象，因此我们可以先写一个方法来验证三条边长是否可以构成三角形，这个方法很显然就不是对象方法，因为在调用这个方法时三角形对象尚未创建出来（因为都不知道三条边能不能构成三角形），所以这个方法是属于三角形类而并不属于三角形对象的。我们可以使用静态方法来解决这类问题，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from math import sqrt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Triangle(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self, a, b, c):</span>
<span class="line">        self._a = a</span>
<span class="line">        self._b = b</span>
<span class="line">        self._c = c</span>
<span class="line"></span>
<span class="line">    @staticmethod</span>
<span class="line">    def is_valid(a, b, c):</span>
<span class="line">        return a + b &gt; c and b + c &gt; a and a + c &gt; b</span>
<span class="line"></span>
<span class="line">    def perimeter(self):</span>
<span class="line">        return self._a + self._b + self._c</span>
<span class="line"></span>
<span class="line">    def area(self):</span>
<span class="line">        half = self.perimeter() / 2</span>
<span class="line">        return sqrt(half * (half - self._a) *</span>
<span class="line">                    (half - self._b) * (half - self._c))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    a, b, c = 3, 4, 5</span>
<span class="line">    # 静态方法和类方法都是通过给类发消息来调用的</span>
<span class="line">    if Triangle.is_valid(a, b, c):</span>
<span class="line">        t = Triangle(a, b, c)</span>
<span class="line">        print(t.perimeter())</span>
<span class="line">        # 也可以通过给类发消息来调用对象方法但是要传入接收消息的对象作为参数</span>
<span class="line">        # print(Triangle.perimeter(t))</span>
<span class="line">        print(t.area())</span>
<span class="line">        # print(Triangle.area(t))</span>
<span class="line">    else:</span>
<span class="line">        print(&#39;无法构成三角形.&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和静态方法比较类似，Python还可以在类中定义类方法，类方法的第一个参数约定名为cls，它代表的是当前类相关的信息的对象（类本身也是一个对象，有的地方也称之为类的元数据对象），通过这个参数我们可以获取和类相关的信息并且可以创建出类的对象，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import time, localtime, sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Clock(object):</span>
<span class="line">    &quot;&quot;&quot;数字时钟&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, hour=0, minute=0, second=0):</span>
<span class="line">        self._hour = hour</span>
<span class="line">        self._minute = minute</span>
<span class="line">        self._second = second</span>
<span class="line"></span>
<span class="line">    @classmethod</span>
<span class="line">    def now(cls):</span>
<span class="line">        ctime = localtime(time())</span>
<span class="line">        return cls(ctime.tm_hour, ctime.tm_min, ctime.tm_sec)</span>
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
<span class="line">    # 通过类方法创建对象并获取系统时间</span>
<span class="line">    clock = Clock.now()</span>
<span class="line">    while True:</span>
<span class="line">        print(clock.show())</span>
<span class="line">        sleep(1)</span>
<span class="line">        clock.run()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类之间的关系" tabindex="-1"><a class="header-anchor" href="#类之间的关系"><span>类之间的关系</span></a></h3><p>简单的说，类和类之间的关系有三种：is-a、has-a和use-a关系。</p><ul><li>is-a关系也叫继承或泛化，比如学生和人的关系、手机和电子产品的关系都属于继承关系。</li><li>has-a关系通常称之为关联，比如部门和员工的关系，汽车和引擎的关系都属于关联关系；关联关系如果是整体和部分的关联，那么我们称之为聚合关系；如果整体进一步负责了部分的生命周期（整体和部分是不可分割的，同时同在也同时消亡），那么这种就是最强的关联关系，我们称之为合成关系。</li><li>use-a关系通常称之为依赖，比如司机有一个驾驶的行为（方法），其中（的参数）使用到了汽车，那么司机和汽车的关系就是依赖关系。</li></ul><p>我们可以使用一种叫做<a href="https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E5%BB%BA%E6%A8%A1%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">UML</a>（统一建模语言）的东西来进行面向对象建模，其中一项重要的工作就是把类和类之间的关系用标准化的图形符号描述出来。关于UML我们在这里不做详细的介绍，有兴趣的读者可以自行阅读<a href="https://e.jd.com/30392949.html" target="_blank" rel="noopener noreferrer">《UML面向对象设计基础》</a>一书。</p><p><img src="`+l+'" alt=""></p><p><img src="'+i+`" alt=""></p><p>利用类之间的这些关系，我们可以在已有类的基础上来完成某些操作，也可以在已有类的基础上创建新的类，这些都是实现代码复用的重要手段。复用现有的代码不仅可以减少开发的工作量，也有利于代码的管理和维护，这是我们在日常工作中都会使用到的技术手段。</p><h3 id="继承和多态" tabindex="-1"><a class="header-anchor" href="#继承和多态"><span>继承和多态</span></a></h3><p>刚才我们提到了，可以在已有类的基础上创建新类，这其中的一种做法就是让一个类从另一个类那里将属性和方法直接继承下来，从而减少重复代码的编写。提供继承信息的我们称之为父类，也叫超类或基类；得到继承信息的我们称之为子类，也叫派生类或衍生类。子类除了继承父类提供的属性和方法，还可以定义自己特有的属性和方法，所以子类比父类拥有的更多的能力，在实际开发中，我们经常会用子类对象去替换掉一个父类对象，这是面向对象编程中一个常见的行为，对应的原则称之为<a href="https://zh.wikipedia.org/wiki/%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8D%A2%E5%8E%9F%E5%88%99" target="_blank" rel="noopener noreferrer">里氏替换原则</a>。下面我们先看一个继承的例子。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">class Person(object):</span>
<span class="line">    &quot;&quot;&quot;人&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, age):</span>
<span class="line">        self._name = name</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def age(self):</span>
<span class="line">        return self._age</span>
<span class="line"></span>
<span class="line">    @age.setter</span>
<span class="line">    def age(self, age):</span>
<span class="line">        self._age = age</span>
<span class="line"></span>
<span class="line">    def play(self):</span>
<span class="line">        print(&#39;%s正在愉快的玩耍.&#39; % self._name)</span>
<span class="line"></span>
<span class="line">    def watch_av(self):</span>
<span class="line">        if self._age &gt;= 18:</span>
<span class="line">            print(&#39;%s正在观看爱情动作片.&#39; % self._name)</span>
<span class="line">        else:</span>
<span class="line">            print(&#39;%s只能观看《熊出没》.&#39; % self._name)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Student(Person):</span>
<span class="line">    &quot;&quot;&quot;学生&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, age, grade):</span>
<span class="line">        super().__init__(name, age)</span>
<span class="line">        self._grade = grade</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def grade(self):</span>
<span class="line">        return self._grade</span>
<span class="line"></span>
<span class="line">    @grade.setter</span>
<span class="line">    def grade(self, grade):</span>
<span class="line">        self._grade = grade</span>
<span class="line"></span>
<span class="line">    def study(self, course):</span>
<span class="line">        print(&#39;%s的%s正在学习%s.&#39; % (self._grade, self._name, course))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Teacher(Person):</span>
<span class="line">    &quot;&quot;&quot;老师&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, age, title):</span>
<span class="line">        super().__init__(name, age)</span>
<span class="line">        self._title = title</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def title(self):</span>
<span class="line">        return self._title</span>
<span class="line"></span>
<span class="line">    @title.setter</span>
<span class="line">    def title(self, title):</span>
<span class="line">        self._title = title</span>
<span class="line"></span>
<span class="line">    def teach(self, course):</span>
<span class="line">        print(&#39;%s%s正在讲%s.&#39; % (self._name, self._title, course))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    stu = Student(&#39;王大锤&#39;, 15, &#39;初三&#39;)</span>
<span class="line">    stu.study(&#39;数学&#39;)</span>
<span class="line">    stu.watch_av()</span>
<span class="line">    t = Teacher(&#39;骆昊&#39;, 38, &#39;砖家&#39;)</span>
<span class="line">    t.teach(&#39;Python程序设计&#39;)</span>
<span class="line">    t.watch_av()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类在继承了父类的方法后，可以对父类已有的方法给出新的实现版本，这个动作称之为方法重写（override）。通过方法重写我们可以让父类的同一个行为在子类中拥有不同的实现版本，当我们调用这个经过子类重写的方法时，不同的子类对象会表现出不同的行为，这个就是多态（poly-morphism）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from abc import ABCMeta, abstractmethod</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Pet(object, metaclass=ABCMeta):</span>
<span class="line">    &quot;&quot;&quot;宠物&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, nickname):</span>
<span class="line">        self._nickname = nickname</span>
<span class="line"></span>
<span class="line">    @abstractmethod</span>
<span class="line">    def make_voice(self):</span>
<span class="line">        &quot;&quot;&quot;发出声音&quot;&quot;&quot;</span>
<span class="line">        pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Dog(Pet):</span>
<span class="line">    &quot;&quot;&quot;狗&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def make_voice(self):</span>
<span class="line">        print(&#39;%s: 汪汪汪...&#39; % self._nickname)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Cat(Pet):</span>
<span class="line">    &quot;&quot;&quot;猫&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def make_voice(self):</span>
<span class="line">        print(&#39;%s: 喵...喵...&#39; % self._nickname)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    pets = [Dog(&#39;旺财&#39;), Cat(&#39;凯蒂&#39;), Dog(&#39;大黄&#39;)]</span>
<span class="line">    for pet in pets:</span>
<span class="line">        pet.make_voice()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们将<code>Pet</code>类处理成了一个抽象类，所谓抽象类就是不能够创建对象的类，这种类的存在就是专门为了让其他类去继承它。Python从语法层面并没有像Java或C#那样提供对抽象类的支持，但是我们可以通过<code>abc</code>模块的<code>ABCMeta</code>元类和<code>abstractmethod</code>包装器来达到抽象类的效果，如果一个类中存在抽象方法那么这个类就不能够实例化（创建对象）。上面的代码中，<code>Dog</code>和<code>Cat</code>两个子类分别对<code>Pet</code>类中的<code>make_voice</code>抽象方法进行了重写并给出了不同的实现版本，当我们在<code>main</code>函数中调用该方法时，这个方法就表现出了多态行为（同样的方法做了不同的事情）。</p><h3 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例"><span>综合案例</span></a></h3><h4 id="案例1-奥特曼打小怪兽。" tabindex="-1"><a class="header-anchor" href="#案例1-奥特曼打小怪兽。"><span>案例1：奥特曼打小怪兽。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from abc import ABCMeta, abstractmethod</span>
<span class="line">from random import randint, randrange</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Fighter(object, metaclass=ABCMeta):</span>
<span class="line">    &quot;&quot;&quot;战斗者&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    # 通过__slots__魔法限定对象可以绑定的成员变量</span>
<span class="line">    __slots__ = (&#39;_name&#39;, &#39;_hp&#39;)</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, hp):</span>
<span class="line">        &quot;&quot;&quot;初始化方法</span>
<span class="line"></span>
<span class="line">        :param name: 名字</span>
<span class="line">        :param hp: 生命值</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self._name = name</span>
<span class="line">        self._hp = hp</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def hp(self):</span>
<span class="line">        return self._hp</span>
<span class="line"></span>
<span class="line">    @hp.setter</span>
<span class="line">    def hp(self, hp):</span>
<span class="line">        self._hp = hp if hp &gt;= 0 else 0</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def alive(self):</span>
<span class="line">        return self._hp &gt; 0</span>
<span class="line"></span>
<span class="line">    @abstractmethod</span>
<span class="line">    def attack(self, other):</span>
<span class="line">        &quot;&quot;&quot;攻击</span>
<span class="line"></span>
<span class="line">        :param other: 被攻击的对象</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Ultraman(Fighter):</span>
<span class="line">    &quot;&quot;&quot;奥特曼&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    __slots__ = (&#39;_name&#39;, &#39;_hp&#39;, &#39;_mp&#39;)</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, hp, mp):</span>
<span class="line">        &quot;&quot;&quot;初始化方法</span>
<span class="line"></span>
<span class="line">        :param name: 名字</span>
<span class="line">        :param hp: 生命值</span>
<span class="line">        :param mp: 魔法值</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        super().__init__(name, hp)</span>
<span class="line">        self._mp = mp</span>
<span class="line"></span>
<span class="line">    def attack(self, other):</span>
<span class="line">        other.hp -= randint(15, 25)</span>
<span class="line"></span>
<span class="line">    def huge_attack(self, other):</span>
<span class="line">        &quot;&quot;&quot;究极必杀技(打掉对方至少50点或四分之三的血)</span>
<span class="line"></span>
<span class="line">        :param other: 被攻击的对象</span>
<span class="line"></span>
<span class="line">        :return: 使用成功返回True否则返回False</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        if self._mp &gt;= 50:</span>
<span class="line">            self._mp -= 50</span>
<span class="line">            injury = other.hp * 3 // 4</span>
<span class="line">            injury = injury if injury &gt;= 50 else 50</span>
<span class="line">            other.hp -= injury</span>
<span class="line">            return True</span>
<span class="line">        else:</span>
<span class="line">            self.attack(other)</span>
<span class="line">            return False</span>
<span class="line"></span>
<span class="line">    def magic_attack(self, others):</span>
<span class="line">        &quot;&quot;&quot;魔法攻击</span>
<span class="line"></span>
<span class="line">        :param others: 被攻击的群体</span>
<span class="line"></span>
<span class="line">        :return: 使用魔法成功返回True否则返回False</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        if self._mp &gt;= 20:</span>
<span class="line">            self._mp -= 20</span>
<span class="line">            for temp in others:</span>
<span class="line">                if temp.alive:</span>
<span class="line">                    temp.hp -= randint(10, 15)</span>
<span class="line">            return True</span>
<span class="line">        else:</span>
<span class="line">            return False</span>
<span class="line"></span>
<span class="line">    def resume(self):</span>
<span class="line">        &quot;&quot;&quot;恢复魔法值&quot;&quot;&quot;</span>
<span class="line">        incr_point = randint(1, 10)</span>
<span class="line">        self._mp += incr_point</span>
<span class="line">        return incr_point</span>
<span class="line"></span>
<span class="line">    def __str__(self):</span>
<span class="line">        return &#39;~~~%s奥特曼~~~\\n&#39; % self._name + \\</span>
<span class="line">            &#39;生命值: %d\\n&#39; % self._hp + \\</span>
<span class="line">            &#39;魔法值: %d\\n&#39; % self._mp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Monster(Fighter):</span>
<span class="line">    &quot;&quot;&quot;小怪兽&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    __slots__ = (&#39;_name&#39;, &#39;_hp&#39;)</span>
<span class="line"></span>
<span class="line">    def attack(self, other):</span>
<span class="line">        other.hp -= randint(10, 20)</span>
<span class="line"></span>
<span class="line">    def __str__(self):</span>
<span class="line">        return &#39;~~~%s小怪兽~~~\\n&#39; % self._name + \\</span>
<span class="line">            &#39;生命值: %d\\n&#39; % self._hp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def is_any_alive(monsters):</span>
<span class="line">    &quot;&quot;&quot;判断有没有小怪兽是活着的&quot;&quot;&quot;</span>
<span class="line">    for monster in monsters:</span>
<span class="line">        if monster.alive &gt; 0:</span>
<span class="line">            return True</span>
<span class="line">    return False</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def select_alive_one(monsters):</span>
<span class="line">    &quot;&quot;&quot;选中一只活着的小怪兽&quot;&quot;&quot;</span>
<span class="line">    monsters_len = len(monsters)</span>
<span class="line">    while True:</span>
<span class="line">        index = randrange(monsters_len)</span>
<span class="line">        monster = monsters[index]</span>
<span class="line">        if monster.alive &gt; 0:</span>
<span class="line">            return monster</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def display_info(ultraman, monsters):</span>
<span class="line">    &quot;&quot;&quot;显示奥特曼和小怪兽的信息&quot;&quot;&quot;</span>
<span class="line">    print(ultraman)</span>
<span class="line">    for monster in monsters:</span>
<span class="line">        print(monster, end=&#39;&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    u = Ultraman(&#39;骆昊&#39;, 1000, 120)</span>
<span class="line">    m1 = Monster(&#39;狄仁杰&#39;, 250)</span>
<span class="line">    m2 = Monster(&#39;白元芳&#39;, 500)</span>
<span class="line">    m3 = Monster(&#39;王大锤&#39;, 750)</span>
<span class="line">    ms = [m1, m2, m3]</span>
<span class="line">    fight_round = 1</span>
<span class="line">    while u.alive and is_any_alive(ms):</span>
<span class="line">        print(&#39;========第%02d回合========&#39; % fight_round)</span>
<span class="line">        m = select_alive_one(ms)  # 选中一只小怪兽</span>
<span class="line">        skill = randint(1, 10)   # 通过随机数选择使用哪种技能</span>
<span class="line">        if skill &lt;= 6:  # 60%的概率使用普通攻击</span>
<span class="line">            print(&#39;%s使用普通攻击打了%s.&#39; % (u.name, m.name))</span>
<span class="line">            u.attack(m)</span>
<span class="line">            print(&#39;%s的魔法值恢复了%d点.&#39; % (u.name, u.resume()))</span>
<span class="line">        elif skill &lt;= 9:  # 30%的概率使用魔法攻击(可能因魔法值不足而失败)</span>
<span class="line">            if u.magic_attack(ms):</span>
<span class="line">                print(&#39;%s使用了魔法攻击.&#39; % u.name)</span>
<span class="line">            else:</span>
<span class="line">                print(&#39;%s使用魔法失败.&#39; % u.name)</span>
<span class="line">        else:  # 10%的概率使用究极必杀技(如果魔法值不足则使用普通攻击)</span>
<span class="line">            if u.huge_attack(m):</span>
<span class="line">                print(&#39;%s使用究极必杀技虐了%s.&#39; % (u.name, m.name))</span>
<span class="line">            else:</span>
<span class="line">                print(&#39;%s使用普通攻击打了%s.&#39; % (u.name, m.name))</span>
<span class="line">                print(&#39;%s的魔法值恢复了%d点.&#39; % (u.name, u.resume()))</span>
<span class="line">        if m.alive &gt; 0:  # 如果选中的小怪兽没有死就回击奥特曼</span>
<span class="line">            print(&#39;%s回击了%s.&#39; % (m.name, u.name))</span>
<span class="line">            m.attack(u)</span>
<span class="line">        display_info(u, ms)  # 每个回合结束后显示奥特曼和小怪兽的信息</span>
<span class="line">        fight_round += 1</span>
<span class="line">    print(&#39;\\n========战斗结束!========\\n&#39;)</span>
<span class="line">    if u.alive &gt; 0:</span>
<span class="line">        print(&#39;%s奥特曼胜利!&#39; % u.name)</span>
<span class="line">    else:</span>
<span class="line">        print(&#39;小怪兽胜利!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例2-扑克游戏。" tabindex="-1"><a class="header-anchor" href="#案例2-扑克游戏。"><span>案例2：扑克游戏。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import random</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Card(object):</span>
<span class="line">    &quot;&quot;&quot;一张牌&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, suite, face):</span>
<span class="line">        self._suite = suite</span>
<span class="line">        self._face = face</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def face(self):</span>
<span class="line">        return self._face</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def suite(self):</span>
<span class="line">        return self._suite</span>
<span class="line"></span>
<span class="line">    def __str__(self):</span>
<span class="line">        if self._face == 1:</span>
<span class="line">            face_str = &#39;A&#39;</span>
<span class="line">        elif self._face == 11:</span>
<span class="line">            face_str = &#39;J&#39;</span>
<span class="line">        elif self._face == 12:</span>
<span class="line">            face_str = &#39;Q&#39;</span>
<span class="line">        elif self._face == 13:</span>
<span class="line">            face_str = &#39;K&#39;</span>
<span class="line">        else:</span>
<span class="line">            face_str = str(self._face)</span>
<span class="line">        return &#39;%s%s&#39; % (self._suite, face_str)</span>
<span class="line">    </span>
<span class="line">    def __repr__(self):</span>
<span class="line">        return self.__str__()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Poker(object):</span>
<span class="line">    &quot;&quot;&quot;一副牌&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self._cards = [Card(suite, face) </span>
<span class="line">                       for suite in &#39;♠♥♣♦&#39;</span>
<span class="line">                       for face in range(1, 14)]</span>
<span class="line">        self._current = 0</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def cards(self):</span>
<span class="line">        return self._cards</span>
<span class="line"></span>
<span class="line">    def shuffle(self):</span>
<span class="line">        &quot;&quot;&quot;洗牌(随机乱序)&quot;&quot;&quot;</span>
<span class="line">        self._current = 0</span>
<span class="line">        random.shuffle(self._cards)</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def next(self):</span>
<span class="line">        &quot;&quot;&quot;发牌&quot;&quot;&quot;</span>
<span class="line">        card = self._cards[self._current]</span>
<span class="line">        self._current += 1</span>
<span class="line">        return card</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def has_next(self):</span>
<span class="line">        &quot;&quot;&quot;还有没有牌&quot;&quot;&quot;</span>
<span class="line">        return self._current &lt; len(self._cards)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Player(object):</span>
<span class="line">    &quot;&quot;&quot;玩家&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name):</span>
<span class="line">        self._name = name</span>
<span class="line">        self._cards_on_hand = []</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def cards_on_hand(self):</span>
<span class="line">        return self._cards_on_hand</span>
<span class="line"></span>
<span class="line">    def get(self, card):</span>
<span class="line">        &quot;&quot;&quot;摸牌&quot;&quot;&quot;</span>
<span class="line">        self._cards_on_hand.append(card)</span>
<span class="line"></span>
<span class="line">    def arrange(self, card_key):</span>
<span class="line">        &quot;&quot;&quot;玩家整理手上的牌&quot;&quot;&quot;</span>
<span class="line">        self._cards_on_hand.sort(key=card_key)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 排序规则-先根据花色再根据点数排序</span>
<span class="line">def get_key(card):</span>
<span class="line">    return (card.suite, card.face)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    p = Poker()</span>
<span class="line">    p.shuffle()</span>
<span class="line">    players = [Player(&#39;东邪&#39;), Player(&#39;西毒&#39;), Player(&#39;南帝&#39;), Player(&#39;北丐&#39;)]</span>
<span class="line">    for _ in range(13):</span>
<span class="line">        for player in players:</span>
<span class="line">            player.get(p.next)</span>
<span class="line">    for player in players:</span>
<span class="line">        print(player.name + &#39;:&#39;, end=&#39; &#39;)</span>
<span class="line">        player.arrange(get_key)</span>
<span class="line">        print(player.cards_on_hand)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 大家可以自己尝试在上面代码的基础上写一个简单的扑克游戏，例如21点(Black Jack)，游戏的规则可以自己在网上找一找。</p></blockquote><h4 id="案例3-工资结算系统。" tabindex="-1"><a class="header-anchor" href="#案例3-工资结算系统。"><span>案例3：工资结算系统。</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">某公司有三种类型的员工 分别是部门经理、程序员和销售员</span>
<span class="line">需要设计一个工资结算系统 根据提供的员工信息来计算月薪</span>
<span class="line">部门经理的月薪是每月固定15000元</span>
<span class="line">程序员的月薪按本月工作时间计算 每小时150元</span>
<span class="line">销售员的月薪是1200元的底薪加上销售额5%的提成</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">from abc import ABCMeta, abstractmethod</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Employee(object, metaclass=ABCMeta):</span>
<span class="line">    &quot;&quot;&quot;员工&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        初始化方法</span>
<span class="line"></span>
<span class="line">        :param name: 姓名</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        self._name = name</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def name(self):</span>
<span class="line">        return self._name</span>
<span class="line"></span>
<span class="line">    @abstractmethod</span>
<span class="line">    def get_salary(self):</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        获得月薪</span>
<span class="line"></span>
<span class="line">        :return: 月薪</span>
<span class="line">        &quot;&quot;&quot;</span>
<span class="line">        pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Manager(Employee):</span>
<span class="line">    &quot;&quot;&quot;部门经理&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 15000.0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Programmer(Employee):</span>
<span class="line">    &quot;&quot;&quot;程序员&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, working_hour=0):</span>
<span class="line">        super().__init__(name)</span>
<span class="line">        self._working_hour = working_hour</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def working_hour(self):</span>
<span class="line">        return self._working_hour</span>
<span class="line"></span>
<span class="line">    @working_hour.setter</span>
<span class="line">    def working_hour(self, working_hour):</span>
<span class="line">        self._working_hour = working_hour if working_hour &gt; 0 else 0</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 150.0 * self._working_hour</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Salesman(Employee):</span>
<span class="line">    &quot;&quot;&quot;销售员&quot;&quot;&quot;</span>
<span class="line"></span>
<span class="line">    def __init__(self, name, sales=0):</span>
<span class="line">        super().__init__(name)</span>
<span class="line">        self._sales = sales</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def sales(self):</span>
<span class="line">        return self._sales</span>
<span class="line"></span>
<span class="line">    @sales.setter</span>
<span class="line">    def sales(self, sales):</span>
<span class="line">        self._sales = sales if sales &gt; 0 else 0</span>
<span class="line"></span>
<span class="line">    def get_salary(self):</span>
<span class="line">        return 1200.0 + self._sales * 0.05</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    emps = [</span>
<span class="line">        Manager(&#39;刘备&#39;), Programmer(&#39;诸葛亮&#39;),</span>
<span class="line">        Manager(&#39;曹操&#39;), Salesman(&#39;荀彧&#39;),</span>
<span class="line">        Salesman(&#39;吕布&#39;), Programmer(&#39;张辽&#39;),</span>
<span class="line">        Programmer(&#39;赵云&#39;)</span>
<span class="line">    ]</span>
<span class="line">    for emp in emps:</span>
<span class="line">        if isinstance(emp, Programmer):</span>
<span class="line">            emp.working_hour = int(input(&#39;请输入%s本月工作时间: &#39; % emp.name))</span>
<span class="line">        elif isinstance(emp, Salesman):</span>
<span class="line">            emp.sales = float(input(&#39;请输入%s本月销售额: &#39; % emp.name))</span>
<span class="line">        # 同样是接收get_salary这个消息但是不同的员工表现出了不同的行为(多态)</span>
<span class="line">        print(&#39;%s本月工资为: ￥%s元&#39; %</span>
<span class="line">              (emp.name, emp.get_salary()))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),c=[p];function v(r,u){return a(),n("div",null,c)}const t=s(d,[["render",v],["__file","09.面向对象进阶.html.vue"]]),b=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/09.%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%BF%9B%E9%98%B6.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"面向对象进阶","slug":"面向对象进阶","link":"#面向对象进阶","children":[{"level":3,"title":"@property装饰器","slug":"property装饰器","link":"#property装饰器","children":[]},{"level":3,"title":"__slots__魔法","slug":"slots-魔法","link":"#slots-魔法","children":[]},{"level":3,"title":"静态方法和类方法","slug":"静态方法和类方法","link":"#静态方法和类方法","children":[]},{"level":3,"title":"类之间的关系","slug":"类之间的关系","link":"#类之间的关系","children":[]},{"level":3,"title":"继承和多态","slug":"继承和多态","link":"#继承和多态","children":[]},{"level":3,"title":"综合案例","slug":"综合案例","link":"#综合案例","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/09.面向对象进阶.md"}');export{t as comp,b as data};
