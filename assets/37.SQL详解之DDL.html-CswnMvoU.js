import{_ as n,c as s,o as e,b as a}from"./app-CstveDQQ.js";const i={},l=a(`<h2 id="sql详解之ddl" tabindex="-1"><a class="header-anchor" href="#sql详解之ddl"><span>SQL详解之DDL</span></a></h2><p>我们通常可以将 SQL 分为四类，分别是 DDL（数据定义语言）、DML（数据操作语言）、 DCL（数据控制语言）和 TCL（事务控制语言）。DDL 主要用于创建、删除、修改数据库中的对象，比如创建、删除和修改二维表，核心的关键字包括<code>create</code>、<code>drop</code>和<code>alter</code>；DML 主要负责数据的插入、删除、更新和查询，关键词包括<code>insert</code>、<code>delete</code>、<code>update</code>和<code>select</code>；DCL 用于授予和召回权限，核心关键词是<code>grant</code>和<code>revoke</code>；TCL 通常用于事务控制。</p><blockquote><p><strong>说明</strong>：SQL 是不区分大小写的语言，有人会建议将关键字大写，其他部分小写。为了书写和识别方便，下面的 SQL 我都是使用小写字母进行书写的。 如果公司的 SQL 编程规范有强制规定，那么就按照公司的要求来，个人的喜好不应该凌驾于公司的编程规范之上，这一点对职业人来说应该是常识。</p></blockquote><h3 id="建库建表" tabindex="-1"><a class="header-anchor" href="#建库建表"><span>建库建表</span></a></h3><p>下面我们来实现一个非常简单的学校选课系统的数据库。我们将数据库命名为<code>school</code>，四个关键的实体分别是学院、老师、学生和课程，其中，学生跟学院是从属关系，这个关系从数量上来讲是多对一关系，因为一个学院可以有多名学生，而一个学生通常只属于一个学院；同理，老师跟学院的从属关系也是多对一关系。一名老师可以讲授多门课程，一门课程如果只有一个授课老师的话，那么课程跟老师也是多对一关系；如果允许多个老师合作讲授一门课程，那么课程和老师就是多对多关系。简单起见，我们将课程和老师设计为多对一关系。学生和课程是典型的多对多关系，因为一个学生可以选择多门课程，一门课程也可以被多个学生选择，而关系型数据库需要借助中间表才能维持维持两个实体的多对多关系。最终，我们的学校选课系统一共有五张表，分别是学院表（<code>tb_college</code>）、学生表（<code>tb_student</code>）、教师表（<code>tb_teacher</code>）、课程表（<code>tb_course</code>）和选课记录表（<code>tb_record</code>），其中选课记录表就是维持学生跟课程多对多关系的中间表。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">-- 如果存在名为school的数据库就删除它</span>
<span class="line">drop database if exists \`school\`;</span>
<span class="line"></span>
<span class="line">-- 创建名为school的数据库并设置默认的字符集和排序方式</span>
<span class="line">create database \`school\` default character set utf8mb4 collate utf8mb4_general_ci;</span>
<span class="line"></span>
<span class="line">-- 切换到school数据库上下文环境</span>
<span class="line">use \`school\`;</span>
<span class="line"></span>
<span class="line">-- 创建学院表</span>
<span class="line">create table \`tb_college\`</span>
<span class="line">(</span>
<span class="line">\`col_id\` int unsigned auto_increment comment &#39;编号&#39;,</span>
<span class="line">\`col_name\` varchar(50) not null comment &#39;名称&#39;,</span>
<span class="line">\`col_intro\` varchar(500) default &#39;&#39; comment &#39;介绍&#39;,</span>
<span class="line">primary key (\`col_id\`)</span>
<span class="line">) engine=innodb auto_increment=1 comment &#39;学院表&#39;;</span>
<span class="line"></span>
<span class="line">-- 创建学生表</span>
<span class="line">create table \`tb_student\`</span>
<span class="line">(</span>
<span class="line">\`stu_id\` int unsigned not null comment &#39;学号&#39;,</span>
<span class="line">\`stu_name\` varchar(20) not null comment &#39;姓名&#39;,</span>
<span class="line">\`stu_sex\` boolean default 1 not null comment &#39;性别&#39;,</span>
<span class="line">\`stu_birth\` date not null comment &#39;出生日期&#39;,</span>
<span class="line">\`stu_addr\` varchar(255) default &#39;&#39; comment &#39;籍贯&#39;,</span>
<span class="line">\`col_id\` int unsigned not null comment &#39;所属学院&#39;,</span>
<span class="line">primary key (\`stu_id\`),</span>
<span class="line">constraint \`fk_student_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`)</span>
<span class="line">) engine=innodb comment &#39;学生表&#39;;</span>
<span class="line"></span>
<span class="line">-- 创建教师表</span>
<span class="line">create table \`tb_teacher\`</span>
<span class="line">(</span>
<span class="line">\`tea_id\` int unsigned not null comment &#39;工号&#39;,</span>
<span class="line">\`tea_name\` varchar(20) not null comment &#39;姓名&#39;,</span>
<span class="line">\`tea_title\` varchar(10) default &#39;助教&#39; comment &#39;职称&#39;,</span>
<span class="line">\`col_id\` int unsigned not null comment &#39;所属学院&#39;,</span>
<span class="line">primary key (\`tea_id\`),</span>
<span class="line">constraint \`fk_teacher_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`)</span>
<span class="line">) engine=innodb comment &#39;老师表&#39;;</span>
<span class="line"></span>
<span class="line">-- 创建课程表</span>
<span class="line">create table \`tb_course\`</span>
<span class="line">(</span>
<span class="line">\`cou_id\` int unsigned not null comment &#39;编号&#39;,</span>
<span class="line">\`cou_name\` varchar(50) not null comment &#39;名称&#39;,</span>
<span class="line">\`cou_credit\` int not null comment &#39;学分&#39;,</span>
<span class="line">\`tea_id\` int unsigned not null comment &#39;授课老师&#39;,</span>
<span class="line">primary key (\`cou_id\`),</span>
<span class="line">constraint \`fk_course_tea_id\` foreign key (\`tea_id\`) references \`tb_teacher\` (\`tea_id\`)</span>
<span class="line">) engine=innodb comment &#39;课程表&#39;;</span>
<span class="line"></span>
<span class="line">-- 创建选课记录表</span>
<span class="line">create table \`tb_record\`</span>
<span class="line">(</span>
<span class="line">\`rec_id\` bigint unsigned auto_increment comment &#39;选课记录号&#39;,</span>
<span class="line">\`stu_id\` int unsigned not null comment &#39;学号&#39;,</span>
<span class="line">\`cou_id\` int unsigned not null comment &#39;课程编号&#39;,</span>
<span class="line">\`sel_date\` date not null comment &#39;选课日期&#39;,</span>
<span class="line">\`score\` decimal(4,1) comment &#39;考试成绩&#39;,</span>
<span class="line">primary key (\`rec_id\`),</span>
<span class="line">constraint \`fk_record_stu_id\` foreign key (\`stu_id\`) references \`tb_student\` (\`stu_id\`),</span>
<span class="line">constraint \`fk_record_cou_id\` foreign key (\`cou_id\`) references \`tb_course\` (\`cou_id\`),</span>
<span class="line">constraint \`uk_record_stu_cou\` unique (\`stu_id\`, \`cou_id\`)</span>
<span class="line">) engine=innodb comment &#39;选课记录表&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的DDL有几个地方需要强调一下：</p><ul><li><p>首先，上面 SQL 中的数据库名、表名、字段名都被反引号（\`）包裹起来，反引号并不是必须的，但是却可以解决表名、字段名等跟 SQL 关键字（SQL 中有特殊含义的单词）冲突的问题。</p></li><li><p>创建数据库时，我们通过<code>default character set utf8mb4</code>指定了数据库默认使用的字符集为<code>utf8mb4</code>（最大<code>4</code>字节的<code>utf-8</code>编码），我们推荐使用该字符集，它也是 MySQL 8.x 默认使用的字符集，因为它能够支持国际化编码，还可以存储 Emoji 字符。可以通过下面的命令查看 MySQL 支持的字符集以及默认的排序规则。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">show character set;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">+----------+---------------------------------+---------------------+--------+</span>
<span class="line">| Charset  | Description                     | Default collation   | Maxlen |</span>
<span class="line">+----------+---------------------------------+---------------------+--------+</span>
<span class="line">| big5     | Big5 Traditional Chinese        | big5_chinese_ci     |      2 |</span>
<span class="line">| dec8     | DEC West European               | dec8_swedish_ci     |      1 |</span>
<span class="line">| cp850    | DOS West European               | cp850_general_ci    |      1 |</span>
<span class="line">| hp8      | HP West European                | hp8_english_ci      |      1 |</span>
<span class="line">| koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    |      1 |</span>
<span class="line">| latin1   | cp1252 West European            | latin1_swedish_ci   |      1 |</span>
<span class="line">| latin2   | ISO 8859-2 Central European     | latin2_general_ci   |      1 |</span>
<span class="line">| swe7     | 7bit Swedish                    | swe7_swedish_ci     |      1 |</span>
<span class="line">| ascii    | US ASCII                        | ascii_general_ci    |      1 |</span>
<span class="line">| ujis     | EUC-JP Japanese                 | ujis_japanese_ci    |      3 |</span>
<span class="line">| sjis     | Shift-JIS Japanese              | sjis_japanese_ci    |      2 |</span>
<span class="line">| hebrew   | ISO 8859-8 Hebrew               | hebrew_general_ci   |      1 |</span>
<span class="line">| tis620   | TIS620 Thai                     | tis620_thai_ci      |      1 |</span>
<span class="line">| euckr    | EUC-KR Korean                   | euckr_korean_ci     |      2 |</span>
<span class="line">| koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    |      1 |</span>
<span class="line">| gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   |      2 |</span>
<span class="line">| greek    | ISO 8859-7 Greek                | greek_general_ci    |      1 |</span>
<span class="line">| cp1250   | Windows Central European        | cp1250_general_ci   |      1 |</span>
<span class="line">| gbk      | GBK Simplified Chinese          | gbk_chinese_ci      |      2 |</span>
<span class="line">| latin5   | ISO 8859-9 Turkish              | latin5_turkish_ci   |      1 |</span>
<span class="line">| armscii8 | ARMSCII-8 Armenian              | armscii8_general_ci |      1 |</span>
<span class="line">| utf8     | UTF-8 Unicode                   | utf8_general_ci     |      3 |</span>
<span class="line">| ucs2     | UCS-2 Unicode                   | ucs2_general_ci     |      2 |</span>
<span class="line">| cp866    | DOS Russian                     | cp866_general_ci    |      1 |</span>
<span class="line">| keybcs2  | DOS Kamenicky Czech-Slovak      | keybcs2_general_ci  |      1 |</span>
<span class="line">| macce    | Mac Central European            | macce_general_ci    |      1 |</span>
<span class="line">| macroman | Mac West European               | macroman_general_ci |      1 |</span>
<span class="line">| cp852    | DOS Central European            | cp852_general_ci    |      1 |</span>
<span class="line">| latin7   | ISO 8859-13 Baltic              | latin7_general_ci   |      1 |</span>
<span class="line">| utf8mb4  | UTF-8 Unicode                   | utf8mb4_general_ci  |      4 |</span>
<span class="line">| cp1251   | Windows Cyrillic                | cp1251_general_ci   |      1 |</span>
<span class="line">| utf16    | UTF-16 Unicode                  | utf16_general_ci    |      4 |</span>
<span class="line">| utf16le  | UTF-16LE Unicode                | utf16le_general_ci  |      4 |</span>
<span class="line">| cp1256   | Windows Arabic                  | cp1256_general_ci   |      1 |</span>
<span class="line">| cp1257   | Windows Baltic                  | cp1257_general_ci   |      1 |</span>
<span class="line">| utf32    | UTF-32 Unicode                  | utf32_general_ci    |      4 |</span>
<span class="line">| binary   | Binary pseudo charset           | binary              |      1 |</span>
<span class="line">| geostd8  | GEOSTD8 Georgian                | geostd8_general_ci  |      1 |</span>
<span class="line">| cp932    | SJIS for Windows Japanese       | cp932_japanese_ci   |      2 |</span>
<span class="line">| eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci |      3 |</span>
<span class="line">| gb18030  | China National Standard GB18030 | gb18030_chinese_ci  |      4 |</span>
<span class="line">+----------+---------------------------------+---------------------+--------+</span>
<span class="line">41 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要设置 MySQL 服务启动时默认使用的字符集，可以修改MySQL的配置并添加以下内容。</p><div class="language-INI line-numbers-mode" data-highlighter="prismjs" data-ext="INI" data-title="INI"><pre class="language-INI"><code><span class="line">[mysqld]</span>
<span class="line">character-set-server=utf8</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：如果不清楚如何修改 MySQL 的配置文件就先不要管它。</p></blockquote></li><li><p>创建和删除数据库时，关键字<code>database</code>也可以替换为<code>schema</code>，二者作用相同。</p></li><li><p>建表语句中的<code>not null</code>是非空约束，它限定了字段不能为空；<code>default</code>用于为字段指定默认值，我们称之为默认值约束；<code>primary key</code>是主键约束，它设定了能够唯一确定一条记录的列，也确保了每条记录都是独一无二的，因为主键不允许重复；<code>foreign key</code>是外键约束，它维持了两张表的参照完整性，举个例子，由于学生表中为 col_id 字段添加了外键约束，限定其必须引用（<code>references</code>）学院表中的 col_id，因此学生表中的学院编号必须来自于学院表中的学院编号，不能够随意为该字段赋值。如果需要给主键约束、外键约束等起名字，可以使用<code>constriant</code>关键字并在后面跟上约束的名字。</p></li><li><p>建表语句中的<code>comment</code> 关键字用来给列和表添加注释，增强代码的可读性和可维护性。</p></li><li><p>在创建表的时候，可以自行选择底层的存储引擎。MySQL 支持多种存储引擎，可以通过<code>show engines</code>命令进行查看。MySQL 5.5 以后的版本默认使用的存储引擎是 InnoDB，它是我们推荐大家使用的存储引擎（因为更适合当下互联网应用对高并发、性能以及事务支持等方面的需求），为了 SQL 语句的向下兼容性，我们可以在建表语句结束处右圆括号的后面通过<code>engine=innodb</code>来指定使用 InnoDB 存储引擎。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">show engines\\G</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的 \\G 是为了换一种输出方式，在命令行客户端中，如果表的字段很多一行显示不完，就会导致输出的内容看起来非常不舒服，使用 \\G 可以将记录的每个列以独占整行的的方式输出，这种输出方式在命令行客户端中看起来会舒服很多。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">*************************** 1. row ***************************</span>
<span class="line">      Engine: InnoDB</span>
<span class="line">     Support: DEFAULT</span>
<span class="line">     Comment: Supports transactions, row-level locking, and foreign keys</span>
<span class="line">Transactions: YES</span>
<span class="line">          XA: YES</span>
<span class="line">  Savepoints: YES</span>
<span class="line">*************************** 2. row ***************************</span>
<span class="line">      Engine: MRG_MYISAM</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: Collection of identical MyISAM tables</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 3. row ***************************</span>
<span class="line">      Engine: MEMORY</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: Hash based, stored in memory, useful for temporary tables</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 4. row ***************************</span>
<span class="line">      Engine: BLACKHOLE</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: /dev/null storage engine (anything you write to it disappears)</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 5. row ***************************</span>
<span class="line">      Engine: MyISAM</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: MyISAM storage engine</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 6. row ***************************</span>
<span class="line">      Engine: CSV</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: CSV storage engine</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 7. row ***************************</span>
<span class="line">      Engine: ARCHIVE</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: Archive storage engine</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 8. row ***************************</span>
<span class="line">      Engine: PERFORMANCE_SCHEMA</span>
<span class="line">     Support: YES</span>
<span class="line">     Comment: Performance Schema</span>
<span class="line">Transactions: NO</span>
<span class="line">          XA: NO</span>
<span class="line">  Savepoints: NO</span>
<span class="line">*************************** 9. row ***************************</span>
<span class="line">      Engine: FEDERATED</span>
<span class="line">     Support: NO</span>
<span class="line">     Comment: Federated MySQL storage engine</span>
<span class="line">Transactions: NULL</span>
<span class="line">          XA: NULL</span>
<span class="line">  Savepoints: NULL</span>
<span class="line">9 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的表格对MySQL几种常用的数据引擎进行了简单的对比。</p><table><thead><tr><th>特性</th><th>InnoDB</th><th>MRG_MYISAM</th><th>MEMORY</th><th>MyISAM</th></tr></thead><tbody><tr><td>存储限制</td><td>有</td><td>没有</td><td>有</td><td>有</td></tr><tr><td>事务</td><td>支持</td><td></td><td></td><td></td></tr><tr><td>锁机制</td><td>行锁</td><td>表锁</td><td>表锁</td><td>表锁</td></tr><tr><td>B树索引</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>哈希索引</td><td></td><td></td><td>支持</td><td></td></tr><tr><td>全文检索</td><td>支持（5.6+）</td><td></td><td></td><td>支持</td></tr><tr><td>集群索引</td><td>支持</td><td></td><td></td><td></td></tr><tr><td>数据缓存</td><td>支持</td><td></td><td>支持</td><td></td></tr><tr><td>索引缓存</td><td>支持</td><td>支持</td><td>支持</td><td>支持</td></tr><tr><td>数据可压缩</td><td></td><td></td><td></td><td>支持</td></tr><tr><td>内存使用</td><td>高</td><td>低</td><td>中</td><td>低</td></tr><tr><td>存储空间使用</td><td>高</td><td>低</td><td></td><td>低</td></tr><tr><td>批量插入性能</td><td>低</td><td>高</td><td>高</td><td>高</td></tr><tr><td>是否支持外键</td><td>支持</td><td></td><td></td><td></td></tr></tbody></table><p>通过上面的比较我们可以了解到，InnoDB 是唯一能够支持外键、事务以及行锁的存储引擎，所以我们之前说它更适合互联网应用，而且在较新版本的 MySQL 中，它也是默认使用的存储引擎。</p></li><li><p>在定义表结构为每个字段选择数据类型时，如果不清楚哪个数据类型更合适，可以通过 MySQL 的帮助系统来了解每种数据类型的特性、数据的长度和精度等相关信息。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">? data types</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在 MySQLWorkbench 中，不能使用<code>?</code>获取帮助，要使用对应的命令<code>help</code>。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">You asked for help about help category: &quot;Data Types&quot;</span>
<span class="line">For more information, type &#39;help &lt;item&gt;&#39;, where &lt;item&gt; is one of the following</span>
<span class="line">topics:</span>
<span class="line">   AUTO_INCREMENT</span>
<span class="line">   BIGINT</span>
<span class="line">   BINARY</span>
<span class="line">   BIT</span>
<span class="line">   BLOB</span>
<span class="line">   BLOB DATA TYPE</span>
<span class="line">   BOOLEAN</span>
<span class="line">   CHAR</span>
<span class="line">   CHAR BYTE</span>
<span class="line">   DATE</span>
<span class="line">   DATETIME</span>
<span class="line">   DEC</span>
<span class="line">   DECIMAL</span>
<span class="line">   DOUBLE</span>
<span class="line">   DOUBLE PRECISION</span>
<span class="line">   ENUM</span>
<span class="line">   FLOAT</span>
<span class="line">   INT</span>
<span class="line">   INTEGER</span>
<span class="line">   LONGBLOB</span>
<span class="line">   LONGTEXT</span>
<span class="line">   MEDIUMBLOB</span>
<span class="line">   MEDIUMINT</span>
<span class="line">   MEDIUMTEXT</span>
<span class="line">   SET DATA TYPE</span>
<span class="line">   SMALLINT</span>
<span class="line">   TEXT</span>
<span class="line">   TIME</span>
<span class="line">   TIMESTAMP</span>
<span class="line">   TINYBLOB</span>
<span class="line">   TINYINT</span>
<span class="line">   TINYTEXT</span>
<span class="line">   VARBINARY</span>
<span class="line">   VARCHAR</span>
<span class="line">   YEAR DATA TYPE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取 varchar 类型的帮助：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">? varchar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Name: &#39;VARCHAR&#39;</span>
<span class="line">Description:</span>
<span class="line">[NATIONAL] VARCHAR(M) [CHARACTER SET charset_name] [COLLATE</span>
<span class="line">collation_name]</span>
<span class="line"></span>
<span class="line">A variable-length string. M represents the maximum column length in</span>
<span class="line">characters. The range of M is 0 to 65,535. The effective maximum length</span>
<span class="line">of a VARCHAR is subject to the maximum row size (65,535 bytes, which is</span>
<span class="line">shared among all columns) and the character set used. For example, utf8</span>
<span class="line">characters can require up to three bytes per character, so a VARCHAR</span>
<span class="line">column that uses the utf8 character set can be declared to be a maximum</span>
<span class="line">of 21,844 characters. See</span>
<span class="line">http://dev.mysql.com/doc/refman/5.7/en/column-count-limit.html.</span>
<span class="line"></span>
<span class="line">MySQL stores VARCHAR values as a 1-byte or 2-byte length prefix plus</span>
<span class="line">data. The length prefix indicates the number of bytes in the value. A</span>
<span class="line">VARCHAR column uses one length byte if values require no more than 255</span>
<span class="line">bytes, two length bytes if values may require more than 255 bytes.</span>
<span class="line"></span>
<span class="line">*Note*:</span>
<span class="line"></span>
<span class="line">MySQL follows the standard SQL specification, and does not remove</span>
<span class="line">trailing spaces from VARCHAR values.</span>
<span class="line"></span>
<span class="line">VARCHAR is shorthand for CHARACTER VARYING. NATIONAL VARCHAR is the</span>
<span class="line">standard SQL way to define that a VARCHAR column should use some</span>
<span class="line">predefined character set. MySQL uses utf8 as this predefined character</span>
<span class="line">set. http://dev.mysql.com/doc/refman/5.7/en/charset-national.html.</span>
<span class="line">NVARCHAR is shorthand for NATIONAL VARCHAR.</span>
<span class="line"></span>
<span class="line">URL: http://dev.mysql.com/doc/refman/5.7/en/string-type-overview.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在数据类型的选择上，保存字符串数据通常都使用 VARCHAR 和 CHAR 两种类型，前者通常称为变长字符串，而后者通常称为定长字符串；对于 InnoDB 存储引擎，行存储格式没有区分固定长度和可变长度列，因此 VARCHAR 类型和 CHAR 类型没有本质区别，后者不一定比前者性能更好。如果要保存的很大字符串，可以使用 TEXT 类型；如果要保存很大的字节串，可以使用 BLOB（二进制大对象）类型。在 MySQL 中，TEXT 和 BLOB又分别包括 TEXT、MEDIUMTEXT、LONGTEXT 和 BLOB、MEDIUMBLOB、LONGBLOB 三种不同的类型，它们主要的区别在于存储数据的最大大小不同。保存浮点数可以用 FLOAT 或 DOUBLE 类型，FLOAT 已经不推荐使用了，而且在 MySQL 后续的版本中可能会被移除掉。而保存定点数应该使用 DECIMAL 类型，它可以指定小数点前后有效数字的位数。如果要保存时间日期，DATETIME 类型优于 TIMESTAMP 类型，因为前者能表示的时间日期范围更大，后者底层其实就是一个整数，记录了指定的日期时间和 1970-01-01 00:00:00 相差多少个毫秒，该类型在 2038-01-19 03:14:07 之后就会溢出。</p><p>对于自增字段 AUTO_INCREMENT，如果使用 MySQL 5.x 版本要注意自增字段的回溯问题，当然这个问题在 MySQL 8.x 中已经得到了很好的解决，当然，MySQL 8.x 还有很多其他的好处，不管是功能还是性能上都有很多的优化和调整，因此强烈推荐大家使用 MySQL 8.x 版本。对于高并发访问数据库的场景，AUTO_INCREMENT 不仅存在性能上的问题，还可能在多机结构上产生重复的 ID 值，在这种场景下，使用分布式 ID 生成算法（SnowFlake、TinyID等）才是最好的选择，有兴趣的读者可以自行研究。</p></li></ul><h3 id="删除表和修改表" tabindex="-1"><a class="header-anchor" href="#删除表和修改表"><span>删除表和修改表</span></a></h3><p>下面以学生表为例，为大家说明如何删除表和修改表。删除表可以使用<code>drop table</code>，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">drop table \`tb_student\`;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">drop table if exists \`tb_student\`;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，如果学生表已经录入了数据而且该数据被其他表引用了，那么就不能删除学生表，否则上面的操作会报错。在下一课中，我们会讲解如何向表中插入数据，到时候大家可以试一试，能否顺利删除学生表。</p><p>如果要修改学生表，可以使用<code>alter table</code>，具体可以分为以下几种情况：</p><p>修改表，添加一个新列，例如给学生表添加一个联系电话的列。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` add column \`stu_tel\` varchar(20) not null comment &#39;联系电话&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：如果新增列的时候指定了非空约束（<code>not null</code>），那么学生表不能够有数据，否则原来的数据增加了 stu_tel 列之后是没有数据的，这就违反了非空约束的要求；当然，我们在添加列的时候也可以使用默认值约束来解决这个问题。</p></blockquote><p>修改表，删除指定的列，例如将上面添加的联系电话列删除掉。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` drop column \`stu_tel\`;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改表，修改列的数据类型，例如将学生表的 stu_sex 修改为字符。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` modify column \`stu_sex\` char(1) not null default &#39;M&#39; comment &#39;性别&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改表，修改列的命名，例如将学生表的 stu_sex 修改为 stu_gender。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` change column \`stu_sex\` \`stu_gender\` boolean default 1 comment &#39;性别&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改表，删除约束条件，例如删除学生表的 col_id 列的外键约束。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` drop foreign key \`fk_student_col_id\`;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改表，添加约束条件，例如给学生表的 col_id 列加上外键约束。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` add foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` add constraint \`fk_student_col_id\` foreign key (\`col_id\`) references \`tb_college\` (\`col_id\`);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在添加外键约束时，还可以通过<code>on update</code>和<code>on delete</code>来指定在被引用的表发生删除和更新操作时，应该进行何种处理，二者的默认值都是<code>restrict</code>，表示如果存在外键约束，则不允许更新和删除被引用的数据。除了<code>restrict</code>之外，这里可能的取值还有<code>cascade</code>（级联操作）和<code>set null</code>（设置为空），有兴趣的读者可以自行研究。</p></blockquote><p>修改表的名字，例如将学生表的名字修改为 tb_stu_info。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table \`tb_student\` rename to \`tb_stu_info\`;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：一般情况下，请不要轻易修改数据库或表的名字。</p></blockquote>`,34),d=[l];function c(t,r){return e(),s("div",null,d)}const v=n(i,[["render",c],["__file","37.SQL详解之DDL.html.vue"]]),u=JSON.parse('{"path":"/python/Python-100-Days/Day36-45/37.SQL%E8%AF%A6%E8%A7%A3%E4%B9%8BDDL.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"SQL详解之DDL","slug":"sql详解之ddl","link":"#sql详解之ddl","children":[{"level":3,"title":"建库建表","slug":"建库建表","link":"#建库建表","children":[]},{"level":3,"title":"删除表和修改表","slug":"删除表和修改表","link":"#删除表和修改表","children":[]}]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/Day36-45/37.SQL详解之DDL.md"}');export{v as comp,u as data};
