import{_ as n,c as s,o as e,d as a}from"./app-CxrMoykp.js";const i="/docs/assets/20210803201644-MDm5j0cY.png",l={},d=a('<h2 id="文件和异常" tabindex="-1"><a class="header-anchor" href="#文件和异常"><span>文件和异常</span></a></h2><p>实际开发中常常会遇到对数据进行<a href="https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96" target="_blank" rel="noopener noreferrer">持久化</a>操作的场景，而实现数据持久化最直接简单的方式就是将数据保存到文件中。说到“文件”这个词，可能需要先科普一下关于<a href="https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F" target="_blank" rel="noopener noreferrer">文件系统</a>的知识，但是这里我们并不浪费笔墨介绍这个概念，请大家自行通过维基百科进行了解。</p><p>在Python中实现文件的读写操作其实非常简单，通过Python内置的<code>open</code>函数，我们可以指定文件名、操作模式、编码信息等来获得操作文件的对象，接下来就可以对文件进行读写操作了。这里所说的操作模式是指要打开什么样的文件（字符文件还是二进制文件）以及做什么样的操作（读、写还是追加），具体的如下表所示。</p><table><thead><tr><th>操作模式</th><th>具体含义</th></tr></thead><tbody><tr><td><code>&#39;r&#39;</code></td><td>读取 （默认）</td></tr><tr><td><code>&#39;w&#39;</code></td><td>写入（会先截断之前的内容）</td></tr><tr><td><code>&#39;x&#39;</code></td><td>写入，如果文件已经存在会产生异常</td></tr><tr><td><code>&#39;a&#39;</code></td><td>追加，将内容写入到已有文件的末尾</td></tr><tr><td><code>&#39;b&#39;</code></td><td>二进制模式</td></tr><tr><td><code>&#39;t&#39;</code></td><td>文本模式（默认）</td></tr><tr><td><code>&#39;+&#39;</code></td><td>更新（既可以读又可以写）</td></tr></tbody></table><p>下面这张图来自于<a href="http://www.runoob.com" target="_blank" rel="noopener noreferrer">菜鸟教程</a>网站，它展示了如果根据应用程序的需要来设置操作模式。</p><p><img src="'+i+`" alt=""></p><h3 id="读写文本文件" tabindex="-1"><a class="header-anchor" href="#读写文本文件"><span>读写文本文件</span></a></h3><p>读取文本文件时，需要在使用<code>open</code>函数时指定好带路径的文件名（可以使用相对路径或绝对路径）并将文件模式设置为<code>&#39;r&#39;</code>（如果不指定，默认值也是<code>&#39;r&#39;</code>），然后通过<code>encoding</code>参数指定编码（如果不指定，默认值是None，那么在读取文件时使用的是操作系统默认的编码），如果不能保证保存文件时使用的编码方式与encoding参数指定的编码方式是一致的，那么就可能因无法解码字符而导致读取失败。下面的例子演示了如何读取一个纯文本文件。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    f = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)</span>
<span class="line">    print(f.read())</span>
<span class="line">    f.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意上面的代码，如果<code>open</code>函数指定的文件并不存在或者无法打开，那么将引发异常状况导致程序崩溃。为了让代码有一定的健壮性和容错性，我们可以使用Python的异常机制对可能在运行时发生状况的代码进行适当的处理，如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    f = None</span>
<span class="line">    try:</span>
<span class="line">        f = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)</span>
<span class="line">        print(f.read())</span>
<span class="line">    except FileNotFoundError:</span>
<span class="line">        print(&#39;无法打开指定的文件!&#39;)</span>
<span class="line">    except LookupError:</span>
<span class="line">        print(&#39;指定了未知的编码!&#39;)</span>
<span class="line">    except UnicodeDecodeError:</span>
<span class="line">        print(&#39;读取文件时解码错误!&#39;)</span>
<span class="line">    finally:</span>
<span class="line">        if f:</span>
<span class="line">            f.close()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python中，我们可以将那些在运行时可能会出现状况的代码放在<code>try</code>代码块中，在<code>try</code>代码块的后面可以跟上一个或多个<code>except</code>来捕获可能出现的异常状况。例如在上面读取文件的过程中，文件找不到会引发<code>FileNotFoundError</code>，指定了未知的编码会引发<code>LookupError</code>，而如果读取文件时无法按指定方式解码会引发<code>UnicodeDecodeError</code>，我们在<code>try</code>后面跟上了三个<code>except</code>分别处理这三种不同的异常状况。最后我们使用<code>finally</code>代码块来关闭打开的文件，释放掉程序中获取的外部资源，由于<code>finally</code>块的代码不论程序正常还是异常都会执行到（甚至是调用了<code>sys</code>模块的<code>exit</code>函数退出Python环境，<code>finally</code>块都会被执行，因为<code>exit</code>函数实质上是引发了<code>SystemExit</code>异常），因此我们通常把<code>finally</code>块称为“总是执行代码块”，它最适合用来做释放外部资源的操作。如果不愿意在<code>finally</code>代码块中关闭文件对象释放资源，也可以使用上下文语法，通过<code>with</code>关键字指定文件对象的上下文环境并在离开上下文环境时自动释放文件资源，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    try:</span>
<span class="line">        with open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;) as f:</span>
<span class="line">            print(f.read())</span>
<span class="line">    except FileNotFoundError:</span>
<span class="line">        print(&#39;无法打开指定的文件!&#39;)</span>
<span class="line">    except LookupError:</span>
<span class="line">        print(&#39;指定了未知的编码!&#39;)</span>
<span class="line">    except UnicodeDecodeError:</span>
<span class="line">        print(&#39;读取文件时解码错误!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用文件对象的<code>read</code>方法读取文件之外，还可以使用<code>for-in</code>循环逐行读取或者用<code>readlines</code>方法将文件按行读取到一个列表容器中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    # 一次性读取整个文件内容</span>
<span class="line">    with open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;) as f:</span>
<span class="line">        print(f.read())</span>
<span class="line"></span>
<span class="line">    # 通过for-in循环逐行读取</span>
<span class="line">    with open(&#39;致橡树.txt&#39;, mode=&#39;r&#39;) as f:</span>
<span class="line">        for line in f:</span>
<span class="line">            print(line, end=&#39;&#39;)</span>
<span class="line">            time.sleep(0.5)</span>
<span class="line">    print()</span>
<span class="line"></span>
<span class="line">    # 读取文件按行读取到列表中</span>
<span class="line">    with open(&#39;致橡树.txt&#39;) as f:</span>
<span class="line">        lines = f.readlines()</span>
<span class="line">    print(lines)</span>
<span class="line">    </span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要将文本信息写入文件文件也非常简单，在使用<code>open</code>函数时指定好文件名并将文件模式设置为<code>&#39;w&#39;</code>即可。注意如果需要对文件内容进行追加式写入，应该将模式设置为<code>&#39;a&#39;</code>。如果要写入的文件不存在会自动创建文件而不是引发异常。下面的例子演示了如何将1-9999之间的素数分别写入三个文件中（1-99之间的素数保存在a.txt中，100-999之间的素数保存在b.txt中，1000-9999之间的素数保存在c.txt中）。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from math import sqrt</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def is_prime(n):</span>
<span class="line">    &quot;&quot;&quot;判断素数的函数&quot;&quot;&quot;</span>
<span class="line">    assert n &gt; 0</span>
<span class="line">    for factor in range(2, int(sqrt(n)) + 1):</span>
<span class="line">        if n % factor == 0:</span>
<span class="line">            return False</span>
<span class="line">    return True if n != 1 else False</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    filenames = (&#39;a.txt&#39;, &#39;b.txt&#39;, &#39;c.txt&#39;)</span>
<span class="line">    fs_list = []</span>
<span class="line">    try:</span>
<span class="line">        for filename in filenames:</span>
<span class="line">            fs_list.append(open(filename, &#39;w&#39;, encoding=&#39;utf-8&#39;))</span>
<span class="line">        for number in range(1, 10000):</span>
<span class="line">            if is_prime(number):</span>
<span class="line">                if number &lt; 100:</span>
<span class="line">                    fs_list[0].write(str(number) + &#39;\\n&#39;)</span>
<span class="line">                elif number &lt; 1000:</span>
<span class="line">                    fs_list[1].write(str(number) + &#39;\\n&#39;)</span>
<span class="line">                else:</span>
<span class="line">                    fs_list[2].write(str(number) + &#39;\\n&#39;)</span>
<span class="line">    except IOError as ex:</span>
<span class="line">        print(ex)</span>
<span class="line">        print(&#39;写文件时发生错误!&#39;)</span>
<span class="line">    finally:</span>
<span class="line">        for fs in fs_list:</span>
<span class="line">            fs.close()</span>
<span class="line">    print(&#39;操作完成!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写二进制文件" tabindex="-1"><a class="header-anchor" href="#读写二进制文件"><span>读写二进制文件</span></a></h3><p>知道了如何读写文本文件要读写二进制文件也就很简单了，下面的代码实现了复制图片文件的功能。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def main():</span>
<span class="line">    try:</span>
<span class="line">        with open(&#39;guido.jpg&#39;, &#39;rb&#39;) as fs1:</span>
<span class="line">            data = fs1.read()</span>
<span class="line">            print(type(data))  # &lt;class &#39;bytes&#39;&gt;</span>
<span class="line">        with open(&#39;吉多.jpg&#39;, &#39;wb&#39;) as fs2:</span>
<span class="line">            fs2.write(data)</span>
<span class="line">    except FileNotFoundError as e:</span>
<span class="line">        print(&#39;指定的文件无法打开.&#39;)</span>
<span class="line">    except IOError as e:</span>
<span class="line">        print(&#39;读写文件时出现错误.&#39;)</span>
<span class="line">    print(&#39;程序执行结束.&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写json文件" tabindex="-1"><a class="header-anchor" href="#读写json文件"><span>读写JSON文件</span></a></h3><p>通过上面的讲解，我们已经知道如何将文本数据和二进制数据保存到文件中，那么这里还有一个问题，如果希望把一个列表或者一个字典中的数据保存到文件中又该怎么做呢？答案是将数据以JSON格式进行保存。JSON是“JavaScript Object Notation”的缩写，它本来是JavaScript语言中创建对象的一种字面量语法，现在已经被广泛的应用于跨平台跨语言的数据交换，原因很简单，因为JSON也是纯文本，任何系统任何编程语言处理纯文本都是没有问题的。目前JSON基本上已经取代了XML作为异构系统间交换数据的事实标准。关于JSON的知识，更多的可以参考<a href="http://json.org" target="_blank" rel="noopener noreferrer">JSON的官方网站</a>，从这个网站也可以了解到每种语言处理JSON数据格式可以使用的工具或三方库，下面是一个JSON的简单例子。</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{</span>
<span class="line">    &quot;name&quot;: &quot;骆昊&quot;,</span>
<span class="line">    &quot;age&quot;: 38,</span>
<span class="line">    &quot;qq&quot;: 957658,</span>
<span class="line">    &quot;friends&quot;: [&quot;王大锤&quot;, &quot;白元芳&quot;],</span>
<span class="line">    &quot;cars&quot;: [</span>
<span class="line">        {&quot;brand&quot;: &quot;BYD&quot;, &quot;max_speed&quot;: 180},</span>
<span class="line">        {&quot;brand&quot;: &quot;Audi&quot;, &quot;max_speed&quot;: 280},</span>
<span class="line">        {&quot;brand&quot;: &quot;Benz&quot;, &quot;max_speed&quot;: 320}</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能大家已经注意到了，上面的JSON跟Python中的字典其实是一样一样的，事实上JSON的数据类型和Python的数据类型是很容易找到对应关系的，如下面两张表所示。</p><table><thead><tr><th>JSON</th><th>Python</th></tr></thead><tbody><tr><td>object</td><td>dict</td></tr><tr><td>array</td><td>list</td></tr><tr><td>string</td><td>str</td></tr><tr><td>number (int / real)</td><td>int / float</td></tr><tr><td>true / false</td><td>True / False</td></tr><tr><td>null</td><td>None</td></tr></tbody></table><table><thead><tr><th>Python</th><th>JSON</th></tr></thead><tbody><tr><td>dict</td><td>object</td></tr><tr><td>list, tuple</td><td>array</td></tr><tr><td>str</td><td>string</td></tr><tr><td>int, float, int- &amp; float-derived Enums</td><td>number</td></tr><tr><td>True / False</td><td>true / false</td></tr><tr><td>None</td><td>null</td></tr></tbody></table><p>我们使用Python中的json模块就可以将字典或列表以JSON格式保存到文件中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import json</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    mydict = {</span>
<span class="line">        &#39;name&#39;: &#39;骆昊&#39;,</span>
<span class="line">        &#39;age&#39;: 38,</span>
<span class="line">        &#39;qq&#39;: 957658,</span>
<span class="line">        &#39;friends&#39;: [&#39;王大锤&#39;, &#39;白元芳&#39;],</span>
<span class="line">        &#39;cars&#39;: [</span>
<span class="line">            {&#39;brand&#39;: &#39;BYD&#39;, &#39;max_speed&#39;: 180},</span>
<span class="line">            {&#39;brand&#39;: &#39;Audi&#39;, &#39;max_speed&#39;: 280},</span>
<span class="line">            {&#39;brand&#39;: &#39;Benz&#39;, &#39;max_speed&#39;: 320}</span>
<span class="line">        ]</span>
<span class="line">    }</span>
<span class="line">    try:</span>
<span class="line">        with open(&#39;data.json&#39;, &#39;w&#39;, encoding=&#39;utf-8&#39;) as fs:</span>
<span class="line">            json.dump(mydict, fs)</span>
<span class="line">    except IOError as e:</span>
<span class="line">        print(e)</span>
<span class="line">    print(&#39;保存数据完成!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>json模块主要有四个比较重要的函数，分别是：</p><ul><li><code>dump</code> - 将Python对象按照JSON格式序列化到文件中</li><li><code>dumps</code> - 将Python对象处理成JSON格式的字符串</li><li><code>load</code> - 将文件中的JSON数据反序列化成对象</li><li><code>loads</code> - 将字符串的内容反序列化成Python对象</li></ul><p>这里出现了两个概念，一个叫序列化，一个叫反序列化。自由的百科全书<a href="https://zh.wikipedia.org/" target="_blank" rel="noopener noreferrer">维基百科</a>上对这两个概念是这样解释的：“序列化（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换为可以存储或传输的形式，这样在需要的时候能够恢复到原先的状态，而且通过序列化的数据重新获取字节时，可以利用这些字节来产生原始对象的副本（拷贝）。与这个过程相反的动作，即从一系列字节中提取数据结构的操作，就是反序列化（deserialization）”。</p><p>目前绝大多数网络数据服务（或称之为网络API）都是基于<a href="https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">HTTP协议</a>提供JSON格式的数据，关于HTTP协议的相关知识，可以看看阮一峰老师的<a href="http://www.ruanyifeng.com/blog/2016/08/http.html" target="_blank" rel="noopener noreferrer">《HTTP协议入门》</a>，如果想了解国内的网络数据服务，可以看看<a href="https://www.juhe.cn/" target="_blank" rel="noopener noreferrer">聚合数据</a>和<a href="http://www.avatardata.cn/" target="_blank" rel="noopener noreferrer">阿凡达数据</a>等网站，国外的可以看看<a href="http://apis.io/" target="_blank" rel="noopener noreferrer">{API}Search</a>网站。下面的例子演示了如何使用<a href="http://docs.python-requests.org/zh_CN/latest/" target="_blank" rel="noopener noreferrer">requests</a>模块（封装得足够好的第三方网络访问模块）访问网络API获取国内新闻，如何通过json模块解析JSON数据并显示新闻标题，这个例子使用了<a href="https://www.tianapi.com/" target="_blank" rel="noopener noreferrer">天行数据</a>提供的国内新闻数据接口，其中的APIKey需要自己到该网站申请。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import requests</span>
<span class="line">import json</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    resp = requests.get(&#39;http://api.tianapi.com/guonei/?key=APIKey&amp;num=10&#39;)</span>
<span class="line">    data_model = json.loads(resp.text)</span>
<span class="line">    for news in data_model[&#39;newslist&#39;]:</span>
<span class="line">        print(news[&#39;title&#39;])</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python中要实现序列化和反序列化除了使用json模块之外，还可以使用pickle和shelve模块，但是这两个模块是使用特有的序列化协议来序列化数据，因此序列化后的数据只能被Python识别。关于这两个模块的相关知识可以自己看看网络上的资料。另外，如果要了解更多的关于Python异常机制的知识，可以看看segmentfault上面的文章<a href="https://segmentfault.com/a/1190000007736783" target="_blank" rel="noopener noreferrer">《总结：Python中的异常处理》</a>，这篇文章不仅介绍了Python中异常机制的使用，还总结了一系列的最佳实践，很值得一读。</p>`,34),t=[d];function r(c,p){return e(),s("div",null,t)}const v=n(l,[["render",r],["__file","11.文件和异常.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/11.%E6%96%87%E4%BB%B6%E5%92%8C%E5%BC%82%E5%B8%B8.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"文件和异常","slug":"文件和异常","link":"#文件和异常","children":[{"level":3,"title":"读写文本文件","slug":"读写文本文件","link":"#读写文本文件","children":[]},{"level":3,"title":"读写二进制文件","slug":"读写二进制文件","link":"#读写二进制文件","children":[]},{"level":3,"title":"读写JSON文件","slug":"读写json文件","link":"#读写json文件","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/11.文件和异常.md"}');export{v as comp,u as data};
