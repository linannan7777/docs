import{_ as s,c as n,o as e,e as a}from"./app-B7BTqdne.js";const l={},i=a(`<h2 id="第48课-python程序接入mysql数据库" tabindex="-1"><a class="header-anchor" href="#第48课-python程序接入mysql数据库"><span>第48课：Python程序接入MySQL数据库</span></a></h2><p>在 Python3 中，我们可以使用<code>mysqlclient</code>或者<code>pymysql</code>三方库来接入 MySQL 数据库并实现数据持久化操作。二者的用法完全相同，只是导入的模块名不一样。我们推荐大家使用纯 Python 的三方库<code>pymysql</code>，因为它更容易安装成功。下面我们仍然以之前创建的名为<code>hrs</code>的数据库为例，为大家演示如何通过 Python 程序操作 MySQL 数据库实现数据持久化操作。</p><h3 id="接入mysql" tabindex="-1"><a class="header-anchor" href="#接入mysql"><span>接入MySQL</span></a></h3><p>首先，我们可以在命令行或者 PyCharm 的终端中通过下面的命令安装<code>pymysql</code>，如果需要接入 MySQL 8，还需要安装一个名为<code>cryptography</code>的三方库来支持 MySQL 8 的密码认证方式。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">pip install pymysql cryptography</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用<code>pymysql</code>操作 MySQL 的步骤如下所示：</p><ol><li>创建连接。MySQL 服务器启动后，提供了基于 TCP （传输控制协议）的网络服务。我们可以通过<code>pymysql</code>模块的<code>connect</code>函数连接 MySQL 服务器。在调用<code>connect</code>函数时，需要指定主机（<code>host</code>）、端口（<code>port</code>）、用户名（<code>user</code>）、口令（<code>password</code>）、数据库（<code>database</code>）、字符集（<code>charset</code>）等参数，该函数会返回一个<code>Connection</code>对象。</li><li>获取游标。连接 MySQL 服务器成功后，接下来要做的就是向数据库服务器发送 SQL 语句，MySQL 会执行接收到的 SQL 并将执行结果通过网络返回。要实现这项操作，需要先通过连接对象的<code>cursor</code>方法获取游标（<code>Cursor</code>）对象。</li><li>发出 SQL。通过游标对象的<code>execute</code>方法，我们可以向数据库发出 SQL 语句。</li><li>如果执行<code>insert</code>、<code>delete</code>或<code>update</code>操作，需要根据实际情况提交或回滚事务。因为创建连接时，默认开启了事务环境，在操作完成后，需要使用连接对象的<code>commit</code>或<code>rollback</code>方法，实现事务的提交或回滚，<code>rollback</code>方法通常会放在异常捕获代码块<code>except</code>中。如果执行<code>select</code>操作，需要通过游标对象抓取查询的结果，对应的方法有三个，分别是：<code>fetchone</code>、<code>fetchmany</code>和<code>fetchall</code>。其中<code>fetchone</code>方法会抓取到一条记录，并以元组或字典的方式返回；<code>fetchmany</code>和<code>fetchall</code>方法会抓取到多条记录，以嵌套元组或列表装字典的方式返回。</li><li>关闭连接。在完成持久化操作后，请不要忘记关闭连接，释放外部资源。我们通常会在<code>finally</code>代码块中使用连接对象的<code>close</code>方法来关闭连接。</li></ol><h3 id="代码实操" tabindex="-1"><a class="header-anchor" href="#代码实操"><span>代码实操</span></a></h3><p>下面，我们通过代码实操的方式为大家演示上面说的五个步骤。</p><h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据"><span>插入数据</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">no = int(input(&#39;部门编号: &#39;))</span>
<span class="line">name = input(&#39;部门名称: &#39;)</span>
<span class="line">location = input(&#39;部门所在地: &#39;)</span>
<span class="line"></span>
<span class="line"># 1. 创建连接（Connection）</span>
<span class="line">conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)</span>
<span class="line">try:</span>
<span class="line">    # 2. 获取游标对象（Cursor）</span>
<span class="line">    with conn.cursor() as cursor:</span>
<span class="line">        # 3. 通过游标对象向数据库服务器发出SQL语句</span>
<span class="line">        affected_rows = cursor.execute(</span>
<span class="line">            &#39;insert into \`tb_dept\` values (%s, %s, %s)&#39;,</span>
<span class="line">            (no, name, location)</span>
<span class="line">        )</span>
<span class="line">        if affected_rows == 1:</span>
<span class="line">            print(&#39;新增部门成功!!!&#39;)</span>
<span class="line">    # 4. 提交事务（transaction）</span>
<span class="line">    conn.commit()</span>
<span class="line">except pymysql.MySQLError as err:</span>
<span class="line">    # 4. 回滚事务</span>
<span class="line">    conn.rollback()</span>
<span class="line">    print(type(err), err)</span>
<span class="line">finally:</span>
<span class="line">    # 5. 关闭连接释放资源</span>
<span class="line">    conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的<code>127.0.0.1</code>称为回环地址，它代表的是本机。下面的<code>guest</code>是我提前创建好的用户，该用户拥有对<code>hrs</code>数据库的<code>insert</code>、<code>delete</code>、<code>update</code>和<code>select</code>权限。我们不建议大家在项目中直接使用<code>root</code>超级管理员账号访问数据库，这样做实在是太危险了。我们可以使用下面的命令创建名为<code>guest</code>的用户并为其授权。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">create user &#39;guest&#39;@&#39;%&#39; identified by &#39;Guest.618&#39;;</span>
<span class="line">grant insert, delete, update, select on \`hrs\`.* to &#39;guest&#39;@&#39;%&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果要插入大量数据，建议使用游标对象的<code>executemany</code>方法做批处理（一个<code>insert</code>操作后面跟上多组数据），大家可以尝试向一张表插入10000条记录，然后看看不使用批处理一条条的插入和使用批处理有什么差别。游标对象的<code>executemany</code>方法第一个参数仍然是 SQL 语句，第二个参数可以是包含多组数据的列表或元组。</p><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据"><span>删除数据</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">no = int(input(&#39;部门编号: &#39;))</span>
<span class="line"></span>
<span class="line"># 1. 创建连接（Connection）</span>
<span class="line">conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;,</span>
<span class="line">                       autocommit=True)</span>
<span class="line">try:</span>
<span class="line">    # 2. 获取游标对象（Cursor）</span>
<span class="line">    with conn.cursor() as cursor:</span>
<span class="line">        # 3. 通过游标对象向数据库服务器发出SQL语句</span>
<span class="line">        affected_rows = cursor.execute(</span>
<span class="line">            &#39;delete from \`tb_dept\` where \`dno\`=%s&#39;,</span>
<span class="line">            (no, )</span>
<span class="line">        )</span>
<span class="line">        if affected_rows == 1:</span>
<span class="line">            print(&#39;删除部门成功!!!&#39;)</span>
<span class="line">finally:</span>
<span class="line">    # 5. 关闭连接释放资源</span>
<span class="line">    conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果不希望每次 SQL 操作之后手动提交或回滚事务，可以<code>connect</code>函数中加一个名为<code>autocommit</code>的参数并将它的值设置为<code>True</code>，表示每次执行 SQL 成功后自动提交。但是我们建议大家手动提交或回滚，这样可以根据实际业务需要来构造事务环境。如果不愿意捕获异常并进行处理，可以在<code>try</code>代码块后直接跟<code>finally</code>块，省略<code>except</code>意味着发生异常时，代码会直接崩溃并将异常栈显示在终端中。</p></blockquote><h4 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据"><span>更新数据</span></a></h4><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">no = int(input(&#39;部门编号: &#39;))</span>
<span class="line">name = input(&#39;部门名称: &#39;)</span>
<span class="line">location = input(&#39;部门所在地: &#39;)</span>
<span class="line"></span>
<span class="line"># 1. 创建连接（Connection）</span>
<span class="line">conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)</span>
<span class="line">try:</span>
<span class="line">    # 2. 获取游标对象（Cursor）</span>
<span class="line">    with conn.cursor() as cursor:</span>
<span class="line">        # 3. 通过游标对象向数据库服务器发出SQL语句</span>
<span class="line">        affected_rows = cursor.execute(</span>
<span class="line">            &#39;update \`tb_dept\` set \`dname\`=%s, \`dloc\`=%s where \`dno\`=%s&#39;,</span>
<span class="line">            (name, location, no)</span>
<span class="line">        )</span>
<span class="line">        if affected_rows == 1:</span>
<span class="line">            print(&#39;更新部门信息成功!!!&#39;)</span>
<span class="line">    # 4. 提交事务</span>
<span class="line">    conn.commit()</span>
<span class="line">except pymysql.MySQLError as err:</span>
<span class="line">    # 4. 回滚事务</span>
<span class="line">    conn.rollback()</span>
<span class="line">    print(type(err), err)</span>
<span class="line">finally:</span>
<span class="line">    # 5. 关闭连接释放资源</span>
<span class="line">    conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据"><span>查询数据</span></a></h4><ol><li>查询部门表的数据。</li></ol><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line"># 1. 创建连接（Connection）</span>
<span class="line">conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)</span>
<span class="line">try:</span>
<span class="line">    # 2. 获取游标对象（Cursor）</span>
<span class="line">    with conn.cursor() as cursor:</span>
<span class="line">        # 3. 通过游标对象向数据库服务器发出SQL语句</span>
<span class="line">        cursor.execute(&#39;select \`dno\`, \`dname\`, \`dloc\` from \`tb_dept\`&#39;)</span>
<span class="line">        # 4. 通过游标对象抓取数据</span>
<span class="line">        row = cursor.fetchone()</span>
<span class="line">        while row:</span>
<span class="line">            print(row)</span>
<span class="line">            row = cursor.fetchone()</span>
<span class="line">except pymysql.MySQLError as err:</span>
<span class="line">    print(type(err), err)</span>
<span class="line">finally:</span>
<span class="line">    # 5. 关闭连接释放资源</span>
<span class="line">    conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中，我们通过构造一个<code>while</code>循环实现了逐行抓取查询结果的操作。这种方式特别适合查询结果有非常多行的场景。因为如果使用<code>fetchall</code>一次性将所有记录抓取到一个嵌套元组中，会造成非常大的内存开销，这在很多场景下并不是一个好主意。如果不愿意使用<code>while</code>循环，还可以考虑使用<code>iter</code>函数构造一个迭代器来逐行抓取数据，有兴趣的读者可以自行研究。</p></blockquote><ol start="2"><li>分页查询员工表的数据。</li></ol><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import pymysql</span>
<span class="line"></span>
<span class="line">page = int(input(&#39;页码: &#39;))</span>
<span class="line">size = int(input(&#39;大小: &#39;))</span>
<span class="line"></span>
<span class="line"># 1. 创建连接（Connection）</span>
<span class="line">con = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                      user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                      database=&#39;hrs&#39;, charset=&#39;utf8&#39;)</span>
<span class="line">try:</span>
<span class="line">    # 2. 获取游标对象（Cursor）</span>
<span class="line">    with con.cursor(pymysql.cursors.DictCursor) as cursor:</span>
<span class="line">        # 3. 通过游标对象向数据库服务器发出SQL语句</span>
<span class="line">        cursor.execute(</span>
<span class="line">            &#39;select \`eno\`, \`ename\`, \`job\`, \`sal\` from \`tb_emp\` order by \`sal\` desc limit %s,%s&#39;,</span>
<span class="line">            ((page - 1) * size, size)</span>
<span class="line">        )</span>
<span class="line">        # 4. 通过游标对象抓取数据</span>
<span class="line">        for emp_dict in cursor.fetchall():</span>
<span class="line">            print(emp_dict)</span>
<span class="line">finally:</span>
<span class="line">    # 5. 关闭连接释放资源</span>
<span class="line">    con.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例讲解" tabindex="-1"><a class="header-anchor" href="#案例讲解"><span>案例讲解</span></a></h3><p>下面我们为大家讲解一个将数据库表数据导出到 Excel 文件的例子，我们需要先安装<code>openpyxl</code>三方库，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code><span class="line">pip install openpyxl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，我们通过下面的代码实现了将数据库<code>hrs</code>中所有员工的编号、姓名、职位、月薪、补贴和部门名称导出到一个 Excel 文件中。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">import openpyxl</span>
<span class="line">import pymysql</span>
<span class="line"></span>
<span class="line"># 创建工作簿对象</span>
<span class="line">workbook = openpyxl.Workbook()</span>
<span class="line"># 获得默认的工作表</span>
<span class="line">sheet = workbook.active</span>
<span class="line"># 修改工作表的标题</span>
<span class="line">sheet.title = &#39;员工基本信息&#39;</span>
<span class="line"># 给工作表添加表头</span>
<span class="line">sheet.append((&#39;工号&#39;, &#39;姓名&#39;, &#39;职位&#39;, &#39;月薪&#39;, &#39;补贴&#39;, &#39;部门&#39;))</span>
<span class="line"># 创建连接（Connection）</span>
<span class="line">conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,</span>
<span class="line">                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,</span>
<span class="line">                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)</span>
<span class="line">try:</span>
<span class="line">    # 获取游标对象（Cursor）</span>
<span class="line">    with conn.cursor() as cursor:</span>
<span class="line">        # 通过游标对象执行SQL语句</span>
<span class="line">        cursor.execute(</span>
<span class="line">            &#39;select \`eno\`, \`ename\`, \`job\`, \`sal\`, coalesce(\`comm\`, 0), \`dname\` &#39;</span>
<span class="line">            &#39;from \`tb_emp\` natural join \`tb_dept\`&#39;</span>
<span class="line">        )</span>
<span class="line">        # 通过游标抓取数据</span>
<span class="line">        row = cursor.fetchone()</span>
<span class="line">        while row:</span>
<span class="line">            # 将数据逐行写入工作表中</span>
<span class="line">            sheet.append(row)</span>
<span class="line">            row = cursor.fetchone()</span>
<span class="line">    # 保存工作簿</span>
<span class="line">    workbook.save(&#39;hrs.xlsx&#39;)</span>
<span class="line">except pymysql.MySQLError as err:</span>
<span class="line">    print(err)</span>
<span class="line">finally:</span>
<span class="line">    # 关闭连接释放资源</span>
<span class="line">    conn.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以参考上面的例子，试一试把 Excel 文件的数据导入到指定数据库的指定表中，看看是否可以成功。</p>`,30),c=[i];function d(r,p){return e(),n("div",null,c)}const t=s(l,[["render",d],["__file","第48课.Python程序接入MySQL数据库.html.vue"]]),v=JSON.parse('{"path":"/python/Python-Core-50-Courses/%E7%AC%AC48%E8%AF%BE.Python%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%85%A5MySQL%E6%95%B0%E6%8D%AE%E5%BA%93.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第48课：Python程序接入MySQL数据库","slug":"第48课-python程序接入mysql数据库","link":"#第48课-python程序接入mysql数据库","children":[{"level":3,"title":"接入MySQL","slug":"接入mysql","link":"#接入mysql","children":[]},{"level":3,"title":"代码实操","slug":"代码实操","link":"#代码实操","children":[]},{"level":3,"title":"案例讲解","slug":"案例讲解","link":"#案例讲解","children":[]}]}],"git":{"updatedTime":1720435246000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-Core-50-Courses/第48课.Python程序接入MySQL数据库.md"}');export{t as comp,v as data};
