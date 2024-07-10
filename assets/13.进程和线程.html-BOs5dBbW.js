import{_ as n,c as s,o as a,e}from"./app-B7BTqdne.js";const i="/docs/assets/macos-monitor-8DaKH2HS.png",l={},d=e('<h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程"><span>进程和线程</span></a></h2><p>今天我们使用的计算机早已进入多CPU或多核时代，而我们使用的操作系统都是支持“多任务”的操作系统，这使得我们可以同时运行多个程序，也可以将一个程序分解为若干个相对独立的子任务，让多个子任务并发的执行，从而缩短程序的执行时间，同时也让用户获得更好的体验。因此在当下不管是用什么编程语言进行开发，实现让程序同时执行多个任务也就是常说的“并发编程”，应该是程序员必备技能之一。为此，我们需要先讨论两个概念，一个叫进程，一个叫线程。</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>进程就是操作系统中执行的一个程序，操作系统以进程为单位分配存储空间，每个进程都有自己的地址空间、数据栈以及其他用于跟踪进程执行的辅助数据，操作系统管理所有进程的执行，为它们合理的分配资源。进程可以通过fork或spawn的方式来创建新的进程来执行其他的任务，不过新的进程也有自己独立的内存空间，因此必须通过进程间通信机制（IPC，Inter-Process Communication）来实现数据共享，具体的方式包括管道、信号、套接字、共享内存区等。</p><p>一个进程还可以拥有多个并发的执行线索，简单的说就是拥有多个可以获得CPU调度的执行单元，这就是所谓的线程。由于线程在同一个进程下，它们可以共享相同的上下文，因此相对于进程而言，线程间的信息共享和通信更加容易。当然在单核CPU系统中，真正的并发是不可能的，因为在某个时刻能够获得CPU的只有唯一的一个线程，多个线程共享了CPU的执行时间。使用多线程实现并发编程为程序带来的好处是不言而喻的，最主要的体现在提升程序的性能和改善用户体验，今天我们使用的软件几乎都用到了多线程技术，这一点可以利用系统自带的进程监控工具（如macOS中的“活动监视器”、Windows中的“任务管理器”）来证实，如下图所示。</p><p><img src="'+i+`" alt=""></p><p>当然多线程也并不是没有坏处，站在其他进程的角度，多线程的程序对其他程序并不友好，因为它占用了更多的CPU执行时间，导致其他程序无法获得足够的CPU执行时间；另一方面，站在开发者的角度，编写和调试多线程的程序都对开发者有较高的要求，对于初学者来说更加困难。</p><p>Python既支持多进程又支持多线程，因此使用Python实现并发编程主要有3种方式：多进程、多线程、多进程+多线程。</p><h3 id="python中的多进程" tabindex="-1"><a class="header-anchor" href="#python中的多进程"><span>Python中的多进程</span></a></h3><p>Unix和Linux操作系统上提供了<code>fork()</code>系统调用来创建进程，调用<code>fork()</code>函数的是父进程，创建出的是子进程，子进程是父进程的一个拷贝，但是子进程拥有自己的PID。<code>fork()</code>函数非常特殊它会返回两次，父进程中可以通过<code>fork()</code>函数的返回值得到子进程的PID，而子进程中的返回值永远都是0。Python的os模块提供了<code>fork()</code>函数。由于Windows系统没有<code>fork()</code>调用，因此要实现跨平台的多进程编程，可以使用multiprocessing模块的<code>Process</code>类来创建子进程，而且该模块还提供了更高级的封装，例如批量启动进程的进程池（<code>Pool</code>）、用于进程间通信的队列（<code>Queue</code>）和管道（<code>Pipe</code>）等。</p><p>下面用一个下载文件的例子来说明使用多进程和不使用多进程到底有什么差别，先看看下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from random import randint</span>
<span class="line">from time import time, sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download_task(filename):</span>
<span class="line">    print(&#39;开始下载%s...&#39; % filename)</span>
<span class="line">    time_to_download = randint(5, 10)</span>
<span class="line">    sleep(time_to_download)</span>
<span class="line">    print(&#39;%s下载完成! 耗费了%d秒&#39; % (filename, time_to_download))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    start = time()</span>
<span class="line">    download_task(&#39;Python从入门到住院.pdf&#39;)</span>
<span class="line">    download_task(&#39;Peking Hot.avi&#39;)</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;总共耗费了%.2f秒.&#39; % (end - start))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是运行程序得到的一次运行结果。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">开始下载Python从入门到住院.pdf...</span>
<span class="line">Python从入门到住院.pdf下载完成! 耗费了6秒</span>
<span class="line">开始下载Peking Hot.avi...</span>
<span class="line">Peking Hot.avi下载完成! 耗费了7秒</span>
<span class="line">总共耗费了13.01秒.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的例子可以看出，如果程序中的代码只能按顺序一点点的往下执行，那么即使执行两个毫不相关的下载任务，也需要先等待一个文件下载完成后才能开始下一个下载任务，很显然这并不合理也没有效率。接下来我们使用多进程的方式将两个下载任务放到不同的进程中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from multiprocessing import Process</span>
<span class="line">from os import getpid</span>
<span class="line">from random import randint</span>
<span class="line">from time import time, sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download_task(filename):</span>
<span class="line">    print(&#39;启动下载进程，进程号[%d].&#39; % getpid())</span>
<span class="line">    print(&#39;开始下载%s...&#39; % filename)</span>
<span class="line">    time_to_download = randint(5, 10)</span>
<span class="line">    sleep(time_to_download)</span>
<span class="line">    print(&#39;%s下载完成! 耗费了%d秒&#39; % (filename, time_to_download))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    start = time()</span>
<span class="line">    p1 = Process(target=download_task, args=(&#39;Python从入门到住院.pdf&#39;, ))</span>
<span class="line">    p1.start()</span>
<span class="line">    p2 = Process(target=download_task, args=(&#39;Peking Hot.avi&#39;, ))</span>
<span class="line">    p2.start()</span>
<span class="line">    p1.join()</span>
<span class="line">    p2.join()</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;总共耗费了%.2f秒.&#39; % (end - start))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们通过<code>Process</code>类创建了进程对象，通过<code>target</code>参数我们传入一个函数来表示进程启动后要执行的代码，后面的<code>args</code>是一个元组，它代表了传递给函数的参数。<code>Process</code>对象的<code>start</code>方法用来启动进程，而<code>join</code>方法表示等待进程执行结束。运行上面的代码可以明显发现两个下载任务“同时”启动了，而且程序的执行时间将大大缩短，不再是两个任务的时间总和。下面是程序的一次执行结果。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">启动下载进程，进程号[1530].</span>
<span class="line">开始下载Python从入门到住院.pdf...</span>
<span class="line">启动下载进程，进程号[1531].</span>
<span class="line">开始下载Peking Hot.avi...</span>
<span class="line">Peking Hot.avi下载完成! 耗费了7秒</span>
<span class="line">Python从入门到住院.pdf下载完成! 耗费了10秒</span>
<span class="line">总共耗费了10.01秒.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以使用subprocess模块中的类和函数来创建和启动子进程，然后通过管道来和子进程通信，这些内容我们不在此进行讲解，有兴趣的读者可以自己了解这些知识。接下来我们将重点放在如何实现两个进程间的通信。我们启动两个进程，一个输出Ping，一个输出Pong，两个进程输出的Ping和Pong加起来一共10个。听起来很简单吧，但是如果这样写可是错的哦。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from multiprocessing import Process</span>
<span class="line">from time import sleep</span>
<span class="line"></span>
<span class="line">counter = 0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def sub_task(string):</span>
<span class="line">    global counter</span>
<span class="line">    while counter &lt; 10:</span>
<span class="line">        print(string, end=&#39;&#39;, flush=True)</span>
<span class="line">        counter += 1</span>
<span class="line">        sleep(0.01)</span>
<span class="line"></span>
<span class="line">        </span>
<span class="line">def main():</span>
<span class="line">    Process(target=sub_task, args=(&#39;Ping&#39;, )).start()</span>
<span class="line">    Process(target=sub_task, args=(&#39;Pong&#39;, )).start()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来没毛病，但是最后的结果是Ping和Pong各输出了10个，Why？当我们在程序中创建进程的时候，子进程复制了父进程及其所有的数据结构，每个子进程有自己独立的内存空间，这也就意味着两个子进程中各有一个<code>counter</code>变量，所以结果也就可想而知了。要解决这个问题比较简单的办法是使用multiprocessing模块中的<code>Queue</code>类，它是可以被多个进程共享的队列，底层是通过管道和<a href="">信号量（semaphore）</a>机制来实现的，有兴趣的读者可以自己尝试一下。</p><h3 id="python中的多线程" tabindex="-1"><a class="header-anchor" href="#python中的多线程"><span>Python中的多线程</span></a></h3><p>在Python早期的版本中就引入了thread模块（现在名为_thread）来实现多线程编程，然而该模块过于底层，而且很多功能都没有提供，因此目前的多线程开发我们推荐使用threading模块，该模块对多线程编程提供了更好的面向对象的封装。我们把刚才下载文件的例子用多线程的方式来实现一遍。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from random import randint</span>
<span class="line">from threading import Thread</span>
<span class="line">from time import time, sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download(filename):</span>
<span class="line">    print(&#39;开始下载%s...&#39; % filename)</span>
<span class="line">    time_to_download = randint(5, 10)</span>
<span class="line">    sleep(time_to_download)</span>
<span class="line">    print(&#39;%s下载完成! 耗费了%d秒&#39; % (filename, time_to_download))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    start = time()</span>
<span class="line">    t1 = Thread(target=download, args=(&#39;Python从入门到住院.pdf&#39;,))</span>
<span class="line">    t1.start()</span>
<span class="line">    t2 = Thread(target=download, args=(&#39;Peking Hot.avi&#39;,))</span>
<span class="line">    t2.start()</span>
<span class="line">    t1.join()</span>
<span class="line">    t2.join()</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;总共耗费了%.3f秒&#39; % (end - start))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以直接使用threading模块的<code>Thread</code>类来创建线程，但是我们之前讲过一个非常重要的概念叫“继承”，我们可以从已有的类创建新类，因此也可以通过继承<code>Thread</code>类的方式来创建自定义的线程类，然后再创建线程对象并启动线程。代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from random import randint</span>
<span class="line">from threading import Thread</span>
<span class="line">from time import time, sleep</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class DownloadTask(Thread):</span>
<span class="line"></span>
<span class="line">    def __init__(self, filename):</span>
<span class="line">        super().__init__()</span>
<span class="line">        self._filename = filename</span>
<span class="line"></span>
<span class="line">    def run(self):</span>
<span class="line">        print(&#39;开始下载%s...&#39; % self._filename)</span>
<span class="line">        time_to_download = randint(5, 10)</span>
<span class="line">        sleep(time_to_download)</span>
<span class="line">        print(&#39;%s下载完成! 耗费了%d秒&#39; % (self._filename, time_to_download))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    start = time()</span>
<span class="line">    t1 = DownloadTask(&#39;Python从入门到住院.pdf&#39;)</span>
<span class="line">    t1.start()</span>
<span class="line">    t2 = DownloadTask(&#39;Peking Hot.avi&#39;)</span>
<span class="line">    t2.start()</span>
<span class="line">    t1.join()</span>
<span class="line">    t2.join()</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;总共耗费了%.2f秒.&#39; % (end - start))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为多个线程可以共享进程的内存空间，因此要实现多个线程间的通信相对简单，大家能想到的最直接的办法就是设置一个全局变量，多个线程共享这个全局变量即可。但是当多个线程共享同一个变量（我们通常称之为“资源”）的时候，很有可能产生不可控的结果从而导致程序失效甚至崩溃。如果一个资源被多个线程竞争使用，那么我们通常称之为“临界资源”，对“临界资源”的访问需要加上保护，否则资源会处于“混乱”的状态。下面的例子演示了100个线程向同一个银行账户转账（转入1元钱）的场景，在这个例子中，银行账户就是一个临界资源，在没有保护的情况下我们很有可能会得到错误的结果。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import sleep</span>
<span class="line">from threading import Thread</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Account(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self._balance = 0</span>
<span class="line"></span>
<span class="line">    def deposit(self, money):</span>
<span class="line">        # 计算存款后的余额</span>
<span class="line">        new_balance = self._balance + money</span>
<span class="line">        # 模拟受理存款业务需要0.01秒的时间</span>
<span class="line">        sleep(0.01)</span>
<span class="line">        # 修改账户余额</span>
<span class="line">        self._balance = new_balance</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def balance(self):</span>
<span class="line">        return self._balance</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class AddMoneyThread(Thread):</span>
<span class="line"></span>
<span class="line">    def __init__(self, account, money):</span>
<span class="line">        super().__init__()</span>
<span class="line">        self._account = account</span>
<span class="line">        self._money = money</span>
<span class="line"></span>
<span class="line">    def run(self):</span>
<span class="line">        self._account.deposit(self._money)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    account = Account()</span>
<span class="line">    threads = []</span>
<span class="line">    # 创建100个存款的线程向同一个账户中存钱</span>
<span class="line">    for _ in range(100):</span>
<span class="line">        t = AddMoneyThread(account, 1)</span>
<span class="line">        threads.append(t)</span>
<span class="line">        t.start()</span>
<span class="line">    # 等所有存款的线程都执行完毕</span>
<span class="line">    for t in threads:</span>
<span class="line">        t.join()</span>
<span class="line">    print(&#39;账户余额为: ￥%d元&#39; % account.balance)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的程序，结果让人大跌眼镜，100个线程分别向账户中转入1元钱，结果居然远远小于100元。之所以出现这种情况是因为我们没有对银行账户这个“临界资源”加以保护，多个线程同时向账户中存钱时，会一起执行到<code>new_balance = self._balance + money</code>这行代码，多个线程得到的账户余额都是初始状态下的<code>0</code>，所以都是<code>0</code>上面做了+1的操作，因此得到了错误的结果。在这种情况下，“锁”就可以派上用场了。我们可以通过“锁”来保护“临界资源”，只有获得“锁”的线程才能访问“临界资源”，而其他没有得到“锁”的线程只能被阻塞起来，直到获得“锁”的线程释放了“锁”，其他线程才有机会获得“锁”，进而访问被保护的“临界资源”。下面的代码演示了如何使用“锁”来保护对银行账户的操作，从而获得正确的结果。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import sleep</span>
<span class="line">from threading import Thread, Lock</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class Account(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self):</span>
<span class="line">        self._balance = 0</span>
<span class="line">        self._lock = Lock()</span>
<span class="line"></span>
<span class="line">    def deposit(self, money):</span>
<span class="line">        # 先获取锁才能执行后续的代码</span>
<span class="line">        self._lock.acquire()</span>
<span class="line">        try:</span>
<span class="line">            new_balance = self._balance + money</span>
<span class="line">            sleep(0.01)</span>
<span class="line">            self._balance = new_balance</span>
<span class="line">        finally:</span>
<span class="line">            # 在finally中执行释放锁的操作保证正常异常锁都能释放</span>
<span class="line">            self._lock.release()</span>
<span class="line"></span>
<span class="line">    @property</span>
<span class="line">    def balance(self):</span>
<span class="line">        return self._balance</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class AddMoneyThread(Thread):</span>
<span class="line"></span>
<span class="line">    def __init__(self, account, money):</span>
<span class="line">        super().__init__()</span>
<span class="line">        self._account = account</span>
<span class="line">        self._money = money</span>
<span class="line"></span>
<span class="line">    def run(self):</span>
<span class="line">        self._account.deposit(self._money)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    account = Account()</span>
<span class="line">    threads = []</span>
<span class="line">    for _ in range(100):</span>
<span class="line">        t = AddMoneyThread(account, 1)</span>
<span class="line">        threads.append(t)</span>
<span class="line">        t.start()</span>
<span class="line">    for t in threads:</span>
<span class="line">        t.join()</span>
<span class="line">    print(&#39;账户余额为: ￥%d元&#39; % account.balance)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较遗憾的一件事情是Python的多线程并不能发挥CPU的多核特性，这一点只要启动几个执行死循环的线程就可以得到证实了。之所以如此，是因为Python的解释器有一个“全局解释器锁”（GIL）的东西，任何线程执行前必须先获得GIL锁，然后每执行100条字节码，解释器就自动释放GIL锁，让别的线程有机会执行，这是一个历史遗留问题，但是即便如此，就如我们之前举的例子，使用多线程在提升执行效率和改善用户体验方面仍然是有积极意义的。</p><h3 id="多进程还是多线程" tabindex="-1"><a class="header-anchor" href="#多进程还是多线程"><span>多进程还是多线程</span></a></h3><p>无论是多进程还是多线程，只要数量一多，效率肯定上不去，为什么呢？我们打个比方，假设你不幸正在准备中考，每天晚上需要做语文、数学、英语、物理、化学这5科的作业，每项作业耗时1小时。如果你先花1小时做语文作业，做完了，再花1小时做数学作业，这样，依次全部做完，一共花5小时，这种方式称为单任务模型。如果你打算切换到多任务模型，可以先做1分钟语文，再切换到数学作业，做1分钟，再切换到英语，以此类推，只要切换速度足够快，这种方式就和单核CPU执行多任务是一样的了，以旁观者的角度来看，你就正在同时写5科作业。</p><p>但是，切换作业是有代价的，比如从语文切到数学，要先收拾桌子上的语文书本、钢笔（这叫保存现场），然后，打开数学课本、找出圆规直尺（这叫准备新环境），才能开始做数学作业。操作系统在切换进程或者线程时也是一样的，它需要先保存当前执行的现场环境（CPU寄存器状态、内存页等），然后，把新任务的执行环境准备好（恢复上次的寄存器状态，切换内存页等），才能开始执行。这个切换过程虽然很快，但是也需要耗费时间。如果有几千个任务同时进行，操作系统可能就主要忙着切换任务，根本没有多少时间去执行任务了，这种情况最常见的就是硬盘狂响，点窗口无反应，系统处于假死状态。所以，多任务一旦多到一个限度，反而会使得系统性能急剧下降，最终导致所有任务都做不好。</p><p>是否采用多任务的第二个考虑是任务的类型，可以把任务分为计算密集型和I/O密集型。计算密集型任务的特点是要进行大量的计算，消耗CPU资源，比如对视频进行编码解码或者格式转换等等，这种任务全靠CPU的运算能力，虽然也可以用多任务完成，但是任务越多，花在任务切换的时间就越多，CPU执行任务的效率就越低。计算密集型任务由于主要消耗CPU资源，这类任务用Python这样的脚本语言去执行效率通常很低，最能胜任这类任务的是C语言，我们之前提到过Python中有嵌入C/C++代码的机制。</p><p>除了计算密集型任务，其他的涉及到网络、存储介质I/O的任务都可以视为I/O密集型任务，这类任务的特点是CPU消耗很少，任务的大部分时间都在等待I/O操作完成（因为I/O的速度远远低于CPU和内存的速度）。对于I/O密集型任务，如果启动多任务，就可以减少I/O等待时间从而让CPU高效率的运转。有一大类的任务都属于I/O密集型任务，这其中包括了我们很快会涉及到的网络应用和Web应用。</p><blockquote><p><strong>说明：</strong> 上面的内容和例子来自于<a href="https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000" target="_blank" rel="noopener noreferrer">廖雪峰官方网站的《Python教程》</a>，因为对作者文中的某些观点持有不同的看法，对原文的文字描述做了适当的调整。</p></blockquote><h3 id="单线程-异步i-o" tabindex="-1"><a class="header-anchor" href="#单线程-异步i-o"><span>单线程+异步I/O</span></a></h3><p>现代操作系统对I/O操作的改进中最为重要的就是支持异步I/O。如果充分利用操作系统提供的异步I/O支持，就可以用单进程单线程模型来执行多任务，这种全新的模型称为事件驱动模型。Nginx就是支持异步I/O的Web服务器，它在单核CPU上采用单进程模型就可以高效地支持多任务。在多核CPU上，可以运行多个进程（数量与CPU核心数相同），充分利用多核CPU。用Node.js开发的服务器端程序也使用了这种工作模式，这也是当下并发编程的一种流行方案。</p><p>在Python语言中，单线程+异步I/O的编程模型称为协程，有了协程的支持，就可以基于事件驱动编写高效的多任务程序。协程最大的优势就是极高的执行效率，因为子程序切换不是线程切换，而是由程序自身控制，因此，没有线程切换的开销。协程的第二个优势就是不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不用加锁，只需要判断状态就好了，所以执行效率比多线程高很多。如果想要充分利用CPU的多核特性，最简单的方法是多进程+协程，既充分利用多核，又充分发挥协程的高效率，可获得极高的性能。关于这方面的内容，在后续的课程中会进行讲解。</p><h3 id="应用案例" tabindex="-1"><a class="header-anchor" href="#应用案例"><span>应用案例</span></a></h3><h4 id="例子1-将耗时间的任务放到线程中以获得更好的用户体验。" tabindex="-1"><a class="header-anchor" href="#例子1-将耗时间的任务放到线程中以获得更好的用户体验。"><span>例子1：将耗时间的任务放到线程中以获得更好的用户体验。</span></a></h4><p>如下所示的界面中，有“下载”和“关于”两个按钮，用休眠的方式模拟点击“下载”按钮会联网下载文件需要耗费10秒的时间，如果不使用“多线程”，我们会发现，当点击“下载”按钮后整个程序的其他部分都被这个耗时间的任务阻塞而无法执行了，这显然是非常糟糕的用户体验，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import time</span>
<span class="line">import tkinter</span>
<span class="line">import tkinter.messagebox</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download():</span>
<span class="line">    # 模拟下载任务需要花费10秒钟时间</span>
<span class="line">    time.sleep(10)</span>
<span class="line">    tkinter.messagebox.showinfo(&#39;提示&#39;, &#39;下载完成!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def show_about():</span>
<span class="line">    tkinter.messagebox.showinfo(&#39;关于&#39;, &#39;作者: 骆昊(v1.0)&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    top = tkinter.Tk()</span>
<span class="line">    top.title(&#39;单线程&#39;)</span>
<span class="line">    top.geometry(&#39;200x150&#39;)</span>
<span class="line">    top.wm_attributes(&#39;-topmost&#39;, True)</span>
<span class="line"></span>
<span class="line">    panel = tkinter.Frame(top)</span>
<span class="line">    button1 = tkinter.Button(panel, text=&#39;下载&#39;, command=download)</span>
<span class="line">    button1.pack(side=&#39;left&#39;)</span>
<span class="line">    button2 = tkinter.Button(panel, text=&#39;关于&#39;, command=show_about)</span>
<span class="line">    button2.pack(side=&#39;right&#39;)</span>
<span class="line">    panel.pack(side=&#39;bottom&#39;)</span>
<span class="line"></span>
<span class="line">    tkinter.mainloop()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用多线程将耗时间的任务放到一个独立的线程中执行，这样就不会因为执行耗时间的任务而阻塞了主线程，修改后的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import time</span>
<span class="line">import tkinter</span>
<span class="line">import tkinter.messagebox</span>
<span class="line">from threading import Thread</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line"></span>
<span class="line">    class DownloadTaskHandler(Thread):</span>
<span class="line"></span>
<span class="line">        def run(self):</span>
<span class="line">            time.sleep(10)</span>
<span class="line">            tkinter.messagebox.showinfo(&#39;提示&#39;, &#39;下载完成!&#39;)</span>
<span class="line">            # 启用下载按钮</span>
<span class="line">            button1.config(state=tkinter.NORMAL)</span>
<span class="line"></span>
<span class="line">    def download():</span>
<span class="line">        # 禁用下载按钮</span>
<span class="line">        button1.config(state=tkinter.DISABLED)</span>
<span class="line">        # 通过daemon参数将线程设置为守护线程(主程序退出就不再保留执行)</span>
<span class="line">        # 在线程中处理耗时间的下载任务</span>
<span class="line">        DownloadTaskHandler(daemon=True).start()</span>
<span class="line"></span>
<span class="line">    def show_about():</span>
<span class="line">        tkinter.messagebox.showinfo(&#39;关于&#39;, &#39;作者: 骆昊(v1.0)&#39;)</span>
<span class="line"></span>
<span class="line">    top = tkinter.Tk()</span>
<span class="line">    top.title(&#39;单线程&#39;)</span>
<span class="line">    top.geometry(&#39;200x150&#39;)</span>
<span class="line">    top.wm_attributes(&#39;-topmost&#39;, 1)</span>
<span class="line"></span>
<span class="line">    panel = tkinter.Frame(top)</span>
<span class="line">    button1 = tkinter.Button(panel, text=&#39;下载&#39;, command=download)</span>
<span class="line">    button1.pack(side=&#39;left&#39;)</span>
<span class="line">    button2 = tkinter.Button(panel, text=&#39;关于&#39;, command=show_about)</span>
<span class="line">    button2.pack(side=&#39;right&#39;)</span>
<span class="line">    panel.pack(side=&#39;bottom&#39;)</span>
<span class="line"></span>
<span class="line">    tkinter.mainloop()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-使用多进程对复杂任务进行-分而治之-。" tabindex="-1"><a class="header-anchor" href="#例子2-使用多进程对复杂任务进行-分而治之-。"><span>例子2：使用多进程对复杂任务进行“分而治之”。</span></a></h4><p>我们来完成1~100000000求和的计算密集型任务，这个问题本身非常简单，有点循环的知识就能解决，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from time import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    total = 0</span>
<span class="line">    number_list = [x for x in range(1, 100000001)]</span>
<span class="line">    start = time()</span>
<span class="line">    for number in number_list:</span>
<span class="line">        total += number</span>
<span class="line">    print(total)</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;Execution time: %.3fs&#39; % (end - start))</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我故意先去创建了一个列表容器然后填入了100000000个数，这一步其实是比较耗时间的，所以为了公平起见，当我们将这个任务分解到8个进程中去执行的时候，我们暂时也不考虑列表切片操作花费的时间，只是把做运算和合并运算结果的时间统计出来，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from multiprocessing import Process, Queue</span>
<span class="line">from random import randint</span>
<span class="line">from time import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def task_handler(curr_list, result_queue):</span>
<span class="line">    total = 0</span>
<span class="line">    for number in curr_list:</span>
<span class="line">        total += number</span>
<span class="line">    result_queue.put(total)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    processes = []</span>
<span class="line">    number_list = [x for x in range(1, 100000001)]</span>
<span class="line">    result_queue = Queue()</span>
<span class="line">    index = 0</span>
<span class="line">    # 启动8个进程将数据切片后进行运算</span>
<span class="line">    for _ in range(8):</span>
<span class="line">        p = Process(target=task_handler,</span>
<span class="line">                    args=(number_list[index:index + 12500000], result_queue))</span>
<span class="line">        index += 12500000</span>
<span class="line">        processes.append(p)</span>
<span class="line">        p.start()</span>
<span class="line">    # 开始记录所有进程执行完成花费的时间</span>
<span class="line">    start = time()</span>
<span class="line">    for p in processes:</span>
<span class="line">        p.join()</span>
<span class="line">    # 合并执行结果</span>
<span class="line">    total = 0</span>
<span class="line">    while not result_queue.empty():</span>
<span class="line">        total += result_queue.get()</span>
<span class="line">    print(total)</span>
<span class="line">    end = time()</span>
<span class="line">    print(&#39;Execution time: &#39;, (end - start), &#39;s&#39;, sep=&#39;&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较两段代码的执行结果（在我目前使用的MacBook上，上面的代码需要大概6秒左右的时间，而下面的代码只需要不到1秒的时间，再强调一次我们只是比较了运算的时间，不考虑列表创建及切片操作花费的时间），使用多进程后由于获得了更多的CPU执行时间以及更好的利用了CPU的多核特性，明显的减少了程序的执行时间，而且计算量越大效果越明显。当然，如果愿意还可以将多个进程部署在不同的计算机上，做成分布式进程，具体的做法就是通过<code>multiprocessing.managers</code>模块中提供的管理器将<code>Queue</code>对象通过网络共享出来（注册到网络上让其他计算机可以访问），这部分内容也留到爬虫的专题再进行讲解。</p>`,52),p=[d];function c(r,v){return a(),s("div",null,p)}const m=n(l,[["render",c],["__file","13.进程和线程.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day01-15/13.%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"进程和线程","slug":"进程和线程","link":"#进程和线程","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"Python中的多进程","slug":"python中的多进程","link":"#python中的多进程","children":[]},{"level":3,"title":"Python中的多线程","slug":"python中的多线程","link":"#python中的多线程","children":[]},{"level":3,"title":"多进程还是多线程","slug":"多进程还是多线程","link":"#多进程还是多线程","children":[]},{"level":3,"title":"单线程+异步I/O","slug":"单线程-异步i-o","link":"#单线程-异步i-o","children":[]},{"level":3,"title":"应用案例","slug":"应用案例","link":"#应用案例","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day01-15/13.进程和线程.md"}');export{m as comp,u as data};
