import{_ as n,c as s,o as a,d as i}from"./app-CfKFMHBg.js";const e="/docs/assets/droste-CUmMcSWj.png",l="/docs/assets/maze-pgHObDGs.png",d="/docs/assets/knight_tour--9YOEDOC.gif",p="/docs/assets/eight_queen-D-uc1z7v.png",c={},r=i('<h2 id="算法入门系列2-在水一方" tabindex="-1"><a class="header-anchor" href="#算法入门系列2-在水一方"><span>算法入门系列2 - 在水一方</span></a></h2><p>在第一次的公开课中，我们讲到了穷举法。穷举法也被称为暴力搜索法，今天我们要讲的回溯法就是暴力搜索法的一种。接下来我们讲到的很多算法跟“递归”这个概念有或多或少的关系，所以我们先说说“递归”。</p><h3 id="现实中的递归" tabindex="-1"><a class="header-anchor" href="#现实中的递归"><span>现实中的递归</span></a></h3><p>从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是什么呢？……</p><p>野比大雄在房间里，用时光电视看着未来的情况。电视画面中，野比大雄在房间里，用时光电视看着未来的情况。电视画面中，野比大雄在房间里，用时光电视看着未来的情况……</p><p>阶乘的递归定义：$$0! = 1$$，$$n!=n*(n-1)!$$ ，使用被定义对象的自身来为其下定义称为递归定义。</p><p><a href="https://zh.wikipedia.org/wiki/%E5%BE%B7%E7%BD%97%E6%96%AF%E7%89%B9%E6%95%88%E5%BA%94" target="_blank" rel="noopener noreferrer">德罗斯特效应</a>是递归的一种视觉形式。图中女性手持的物体中有一幅她本人手持同一物体的小图片，进而小图片中还有更小的一幅她手持同一物体的图片……</p><p><img src="'+e+`" alt=""></p><h3 id="递归的应用" tabindex="-1"><a class="header-anchor" href="#递归的应用"><span>递归的应用</span></a></h3><p>在程序中，一个函数如果直接或者间接的调用了自身，我们就称之为递归函数。</p><p>写递归函数有两个要点：</p><ol><li>收敛条件 - 什么时候结束递归。</li><li>递归公式 - 每一项与前一项（前<em>N</em>项）的关系。</li></ol><p>例子1：求阶乘。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def fac(num):</span>
<span class="line">    if num == 0:</span>
<span class="line">        return 1</span>
<span class="line">    return num * fac(num - 1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python对递归的深度加以了限制（默认1000层函数调用），如果想突破这个限制，可以使用下面的方法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import sys</span>
<span class="line"></span>
<span class="line">sys.setrecursionlimit(10000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2：爬楼梯 - 楼梯有<em>n</em>个台阶，一步可以走1阶、2阶或3阶，走完<em>n</em>个台阶共有多少种不同的走法。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def climb(num):</span>
<span class="line">    if num == 0:</span>
<span class="line">        return 1</span>
<span class="line">    elif num &lt; 0:</span>
<span class="line">        return 0</span>
<span class="line">    return climb(num - 1) + climb(num - 2) + climb(num - 3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：上面的递归函数性能会非常的差，因为时间复杂度是几何级数级的。</p><p>优化后的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from functools import lru_cache</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@lru_cache()</span>
<span class="line">def climb(num):</span>
<span class="line">    if num == 0:</span>
<span class="line">        return 1</span>
<span class="line">    elif num &lt; 0:</span>
<span class="line">        return 0</span>
<span class="line">    return climb(num - 1) + climb(num - 2) + climb(num - 3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用的递归的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">def climb(num):</span>
<span class="line">    a, b, c = 1, 2, 4</span>
<span class="line">    for _ in range(num - 1):</span>
<span class="line">        a, b, c = b, c, a + b + c</span>
<span class="line">    return a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重点</strong>：有更好的办法的时候，请不要考虑递归。</p><h3 id="回溯法" tabindex="-1"><a class="header-anchor" href="#回溯法"><span>回溯法</span></a></h3><p><strong>回溯法</strong>是<a href="https://zh.wikipedia.org/wiki/%E6%9A%B4%E5%8A%9B%E6%90%9C%E5%B0%8B%E6%B3%95" target="_blank" rel="noopener noreferrer">暴力搜索法</a>中的一种。对于某些计算问题而言，回溯法是一种可以找出所有（或一部分）解的一般性算法，尤其适用于约束满足问题（在解决约束满足问题时，我们逐步构造更多的候选解，并且在确定某一部分候选解不可能补全成正确解之后放弃继续搜索这个部分候选解本身及其可以拓展出的子候选解，转而测试其他的部分候选解）。</p><h3 id="经典案例" tabindex="-1"><a class="header-anchor" href="#经典案例"><span>经典案例</span></a></h3><p>例子1：<strong>迷宫寻路</strong>。</p><p><img src="`+l+`" alt=""></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">迷宫寻路</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import random</span>
<span class="line">import sys</span>
<span class="line"></span>
<span class="line">WALL = -1</span>
<span class="line">ROAD = 0</span>
<span class="line"></span>
<span class="line">ROWS = 10</span>
<span class="line">COLS = 10</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def find_way(maze, i=0, j=0, step=1):</span>
<span class="line">    &quot;&quot;&quot;走迷宫&quot;&quot;&quot;</span>
<span class="line">    if 0 &lt;= i &lt; ROWS and 0 &lt;= j &lt; COLS and maze[i][j] == 0:</span>
<span class="line">        maze[i][j] = step</span>
<span class="line">        if i == ROWS - 1 and j == COLS - 1:</span>
<span class="line">            print(&#39;=&#39; * 20)</span>
<span class="line">            display(maze)</span>
<span class="line">            sys.exit(0)</span>
<span class="line">        find_way(maze, i + 1, j, step + 1)</span>
<span class="line">        find_way(maze, i, j + 1, step + 1)</span>
<span class="line">        find_way(maze, i - 1, j, step + 1)</span>
<span class="line">        find_way(maze, i, j - 1, step + 1)</span>
<span class="line">        maze[i][j] = ROAD</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def reset(maze):</span>
<span class="line">    &quot;&quot;&quot;重置迷宫&quot;&quot;&quot;</span>
<span class="line">    for i in range(ROWS):</span>
<span class="line">        for j in range(COLS):</span>
<span class="line">            num = random.randint(1, 10)</span>
<span class="line">            maze[i][j] = WALL if num &gt; 7 else ROAD</span>
<span class="line">    maze[0][0] = maze[ROWS - 1][COLS - 1] = ROAD</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def display(maze):</span>
<span class="line">    &quot;&quot;&quot;显示迷宫&quot;&quot;&quot;</span>
<span class="line">    for row in maze:</span>
<span class="line">        for col in row:</span>
<span class="line">            if col == -1:</span>
<span class="line">                print(&#39;■&#39;, end=&#39; &#39;)</span>
<span class="line">            elif col == 0:</span>
<span class="line">                print(&#39;□&#39;, end=&#39; &#39;)</span>
<span class="line">            else:</span>
<span class="line">                print(f&#39;{col}&#39;.ljust(2), end=&#39;&#39;)</span>
<span class="line">        print()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    maze = [[0] * COLS for _ in range(ROWS)]</span>
<span class="line">    reset(maze)</span>
<span class="line">    display(maze)</span>
<span class="line">    find_way(maze)</span>
<span class="line">    print(&#39;没有出路!!!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**说明：**上面的代码用随机放置围墙的方式来生成迷宫，更好的生成迷宫的方式请参考<a href="https://indienova.com/indie-game-development/generate-tile-based-maze-with-backtracking/" target="_blank" rel="noopener noreferrer">《简单的使用回溯法生成 Tile Based 迷宫》</a>一文。</p><p>例子2：<strong>骑士巡逻</strong> - 国际象棋中的骑士（马），按照骑士的移动规则走遍整个棋盘的每一个方格，而且每个方格只能够经过一次。</p><p><img src="`+d+`" alt=""></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">骑士巡逻</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">import sys</span>
<span class="line"></span>
<span class="line">SIZE = 8</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def display(board):</span>
<span class="line">    &quot;&quot;&quot;显示棋盘&quot;&quot;&quot;</span>
<span class="line">    for row in board:</span>
<span class="line">        for col in row:</span>
<span class="line">            print(f&#39;{col}&#39;.rjust(2, &#39;0&#39;), end=&#39; &#39;)</span>
<span class="line">        print()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def patrol(board, i=0, j=0, step=1):</span>
<span class="line">    &quot;&quot;&quot;巡逻&quot;&quot;&quot;</span>
<span class="line">    if 0 &lt;= i &lt; SIZE and 0 &lt;= j &lt; SIZE and board[i][j] == 0:</span>
<span class="line">        board[i][j] = step</span>
<span class="line">        if step == SIZE * SIZE:</span>
<span class="line">            display(board)</span>
<span class="line">            sys.exit(0)</span>
<span class="line">        patrol(board, i + 1, j + 2, step + 1)</span>
<span class="line">        patrol(board, i + 2, j + 1, step + 1)</span>
<span class="line">        patrol(board, i + 2, j - 1, step + 1)</span>
<span class="line">        patrol(board, i + 1, j - 2, step + 1)</span>
<span class="line">        patrol(board, i - 1, j - 2, step + 1)</span>
<span class="line">        patrol(board, i - 2, j - 1, step + 1)</span>
<span class="line">        patrol(board, i - 2, j + 1, step + 1)</span>
<span class="line">        patrol(board, i - 1, j + 2, step + 1)</span>
<span class="line">        board[i][j] = 0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def main():</span>
<span class="line">    &quot;&quot;&quot;主函数&quot;&quot;&quot;</span>
<span class="line">    board = [[0] * SIZE for _ in range(SIZE)]</span>
<span class="line">    patrol(board)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子3：<strong>八皇后</strong> - 如何能够在8×8的国际象棋棋盘上放置八个皇后，使得任何一个皇后都无法直接吃掉其他的皇后？为了达到此目的，任两个皇后都不能处于同一条横行、纵行或斜线上。</p><p><img src="`+p+'" alt=""></p><p><strong>说明</strong>：这个问题太经典了，网上有大把的答案，留给大家自己搞定。</p>',37),t=[r];function v(u,m){return a(),s("div",null,t)}const b=n(c,[["render",v],["__file","算法入门系列2 - 在水一方.html.vue"]]),h=JSON.parse('{"path":"/python/Python-100-Days/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%96%87%E6%A1%A3/%E7%AC%AC06%E6%AC%A1%E5%85%AC%E5%BC%80%E8%AF%BE-%E7%AE%97%E6%B3%95%E5%85%A5%E9%97%A8%E7%B3%BB%E5%88%972-%E5%9C%A8%E6%B0%B4%E4%B8%80%E6%96%B9/%E7%AE%97%E6%B3%95%E5%85%A5%E9%97%A8%E7%B3%BB%E5%88%972%20-%20%E5%9C%A8%E6%B0%B4%E4%B8%80%E6%96%B9.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"算法入门系列2 - 在水一方","slug":"算法入门系列2-在水一方","link":"#算法入门系列2-在水一方","children":[{"level":3,"title":"现实中的递归","slug":"现实中的递归","link":"#现实中的递归","children":[]},{"level":3,"title":"递归的应用","slug":"递归的应用","link":"#递归的应用","children":[]},{"level":3,"title":"回溯法","slug":"回溯法","link":"#回溯法","children":[]},{"level":3,"title":"经典案例","slug":"经典案例","link":"#经典案例","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/公开课/文档/第06次公开课-算法入门系列2-在水一方/算法入门系列2 - 在水一方.md"}');export{b as comp,h as data};
