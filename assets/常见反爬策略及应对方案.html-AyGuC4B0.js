import{_ as s,c as n,o as e,d as i}from"./app-CzcyFXHz.js";const l={},a=i(`<h2 id="常见反爬策略及应对方案" tabindex="-1"><a class="header-anchor" href="#常见反爬策略及应对方案"><span>常见反爬策略及应对方案</span></a></h2><ol><li><p>构造合理的HTTP请求头。</p><ul><li><p>Accept</p></li><li><p>User-Agent</p></li><li><p>Referer</p></li><li><p>Accept-Encoding</p></li><li><p>Accept-Language</p></li></ul></li><li><p>检查网站生成的Cookie。</p><ul><li>有用的插件：<a href="http://www.editthiscookie.com/" target="_blank" rel="noopener noreferrer">EditThisCookie</a></li><li>如何处理脚本动态生成的Cookie</li></ul></li><li><p>抓取动态内容。</p><ul><li>Selenium + WebDriver</li><li>Chrome / Firefox - Driver</li></ul></li><li><p>限制爬取的速度。</p></li><li><p>处理表单中的隐藏域。</p><ul><li>在读取到隐藏域之前不要提交表单</li><li>用RoboBrowser这样的工具辅助提交表单</li></ul></li><li><p>处理表单中的验证码。</p><ul><li><p>OCR（Tesseract） - 商业项目一般不考虑</p></li><li><p>专业识别平台 - 超级鹰 / 云打码</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre class="language-Python"><code><span class="line">from hashlib import md5</span>
<span class="line"></span>
<span class="line">class ChaoClient(object):</span>
<span class="line"></span>
<span class="line">    def __init__(self, username, password, soft_id):</span>
<span class="line">        self.username = username</span>
<span class="line">        password =  password.encode(&#39;utf-8&#39;)</span>
<span class="line">        self.password = md5(password).hexdigest()</span>
<span class="line">        self.soft_id = soft_id</span>
<span class="line">        self.base_params = {</span>
<span class="line">            &#39;user&#39;: self.username,</span>
<span class="line">            &#39;pass2&#39;: self.password,</span>
<span class="line">            &#39;softid&#39;: self.soft_id,</span>
<span class="line">        }</span>
<span class="line">        self.headers = {</span>
<span class="line">            &#39;Connection&#39;: &#39;Keep-Alive&#39;,</span>
<span class="line">            &#39;User-Agent&#39;: &#39;Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)&#39;,</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    def post_pic(self, im, codetype):</span>
<span class="line">        params = {</span>
<span class="line">            &#39;codetype&#39;: codetype,</span>
<span class="line">        }</span>
<span class="line">        params.update(self.base_params)</span>
<span class="line">        files = {&#39;userfile&#39;: (&#39;captcha.jpg&#39;, im)}</span>
<span class="line">        r = requests.post(&#39;http://upload.chaojiying.net/Upload/Processing.php&#39;, data=params, files=files, headers=self.headers)</span>
<span class="line">        return r.json()</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    client = ChaoClient(&#39;用户名&#39;, &#39;密码&#39;, &#39;软件ID&#39;)</span>
<span class="line">    with open(&#39;captcha.jpg&#39;, &#39;rb&#39;) as file:                                                </span>
<span class="line">        print(client.post_pic(file, 1902))                                          </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>绕开“陷阱”。</p><ul><li>网页上有诱使爬虫爬取的爬取的隐藏链接（陷阱或蜜罐）</li><li>通过Selenium+WebDriver+Chrome判断链接是否可见或在可视区域</li></ul></li><li><p>隐藏身份。</p><ul><li><p>代理服务 - 快代理 / 讯代理 / 芝麻代理 / 蘑菇代理 / 云代理</p><p><a href="https://cuiqingcai.com/5094.html" target="_blank" rel="noopener noreferrer">《爬虫代理哪家强？十大付费代理详细对比评测出炉！》</a></p></li><li><p>洋葱路由 - 国内需要翻墙才能使用</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code><span class="line">yum -y install tor</span>
<span class="line">useradd admin -d /home/admin</span>
<span class="line">passwd admin</span>
<span class="line">chown -R admin:admin /home/admin</span>
<span class="line">chown -R admin:admin /var/run/tor</span>
<span class="line">tor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol>`,2),p=[a];function d(r,c){return e(),n("div",null,p)}const o=s(l,[["render",d],["__file","常见反爬策略及应对方案.html.vue"]]),m=JSON.parse('{"path":"/python/Python-100-Days/%E7%95%AA%E5%A4%96%E7%AF%87/%E5%B8%B8%E8%A7%81%E5%8F%8D%E7%88%AC%E7%AD%96%E7%95%A5%E5%8F%8A%E5%BA%94%E5%AF%B9%E6%96%B9%E6%A1%88.html","title":"","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"常见反爬策略及应对方案","slug":"常见反爬策略及应对方案","link":"#常见反爬策略及应对方案","children":[]}],"git":{"updatedTime":1720596338000,"contributors":[{"name":"linannan","email":"linannan@prosnav.com","commits":1}]},"filePathRelative":"python/Python-100-Days/番外篇/常见反爬策略及应对方案.md"}');export{o as comp,m as data};
