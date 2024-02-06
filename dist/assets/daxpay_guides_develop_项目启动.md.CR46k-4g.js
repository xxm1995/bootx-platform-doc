import{_ as s,c as a,o as t,V as i}from"./chunks/framework.cllxpRy7.js";const g=JSON.parse('{"title":"项目启动","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/guides/develop/项目启动.md","filePath":"daxpay/guides/develop/项目启动.md","lastUpdated":null}'),e={name:"daxpay/guides/develop/项目启动.md"},d=i(`<h1 id="项目启动" tabindex="-1">项目启动 <a class="header-anchor" href="#项目启动">¶</a></h1><h2 id="开发工具参考" tabindex="-1">开发工具参考 <a class="header-anchor" href="#开发工具参考">¶</a></h2><h3 id="后端环境" tabindex="-1">后端环境 <a class="header-anchor" href="#后端环境">¶</a></h3><table><thead><tr><th>名称</th><th>介绍</th><th>参考版本</th></tr></thead><tbody><tr><td>JDK</td><td>Java运行环境</td><td>1.8/11，推荐使用1.8</td></tr><tr><td>Maven</td><td>项目构建工具</td><td>推荐版本3.6.x及以上</td></tr><tr><td>IDE</td><td>集成开发工具</td><td>IntelliJ IDEA</td></tr><tr><td>MySQL</td><td>数据库</td><td>5.7.X和8.X，推荐使用5.7系列版本，8.X需要设置为大小写不敏感</td></tr><tr><td>Redis</td><td>缓存中间件</td><td>推荐使用5.0及以上版本</td></tr></tbody></table><h3 id="前端环境" tabindex="-1">前端环境 <a class="header-anchor" href="#前端环境">¶</a></h3><table><thead><tr><th>环境</th><th>版本</th><th>备注</th></tr></thead><tbody><tr><td>Node</td><td>16+</td><td>推荐18+，16可能会出现部分依赖组件不支持的情况</td></tr><tr><td>pnpm</td><td>7.27+</td><td>包管理工具</td></tr></tbody></table><h2 id="基础环境搭建" tabindex="-1">基础环境搭建 <a class="header-anchor" href="#基础环境搭建">¶</a></h2><h3 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库">¶</a></h3><blockquote><p>启动或者找一台可以使用的MySQL实例，同时在后端项目中<code>_config/sql</code>目录下找到<code>dax-pay.sql</code>数据库脚本文件。</p></blockquote><ul><li><p>在数据库中新建一个<code>dax-pay</code>的<code>schema</code>空间，编码集选择<code>utf8mb4</code>。</p></li><li><p>将<code>dax-pay.sql</code>数据库脚本文件导入进去。</p></li></ul><h3 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis">¶</a></h3><blockquote><p>启动一个Redis实例，记录可进行连接的各项信息，以备后续使用。</p></blockquote><p><strong>不需要进行额外操作</strong></p><h2 id="项目下载" tabindex="-1">项目下载 <a class="header-anchor" href="#项目下载">¶</a></h2><blockquote><p>后端下载</p></blockquote><p>后端项目地址: <a href="https://gitee.com/bootx/dax-pay" target="_blank" rel="noreferrer">https://gitee.com/bootx/dax-pay</a> ，</p><p>执行命令：<code>git clone https://gitee.com/bootx/dax-pay-ui</code></p><blockquote><p>前端下载</p></blockquote><p>后端项目地址: <a href="https://gitee.com/bootx/dax-pay-ui" target="_blank" rel="noreferrer">https://gitee.com/bootx/dax-pay-ui</a> ，</p><p>执行命令：<code>git clone https://gitee.com/bootx/dax-pay-ui.git</code></p><h2 id="项目启动-后端" tabindex="-1">项目启动（后端） <a class="header-anchor" href="#项目启动-后端">¶</a></h2><ol><li>将项目导入到<code>IDEA</code>中，等待依赖下载完毕</li><li>找到<code>daxpay-single</code>下的<code>daxpay-single-start</code>模块，打开配置文件，将其中的<code>数据库连接地址</code>和<code>Redis缓存连接地址</code>更换为真实的地址。</li><li>打开本模块的<code>DaxpaySingleStart</code>类文件并运行，启动项目，当控制台打印下列内容说明启动成功。</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	应用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dax-pay-single&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 运行成功! </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Swagger文档:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 		http://192.168.1.12:9000/doc.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">----------------------------------------------------------</span></span></code></pre></div><h2 id="项目启动-前端" tabindex="-1">项目启动（前端） <a class="header-anchor" href="#项目启动-前端">¶</a></h2><p>使用<code>Vs Code</code>或<code>Webstorm</code>打开项目，然后执行以下命令启动项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装项目依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run dev</span></span></code></pre></div><p>当控制台出现下列内容时说明启动成功：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  VITE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v4.5.1  ready in </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8797</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ms</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ➜</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Local:   https://localhost:3100/                                                                         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:56:35</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ➜</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Network: https://192.168.1.12:3100/                                                                      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:56:35</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ➜</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Network: https://192.168.196.167:3100/                                                                   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:56:35</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ➜</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  press h to show help                                                                                     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:56:35</span></span></code></pre></div><p>启动成功后，点击访问即可，默认的账号密码为：<code>bootx</code>/<code>123456</code></p>`,29),h=[d];function l(n,p,o,r,c,k){return t(),a("div",null,h)}const y=s(e,[["render",l]]);export{g as __pageData,y as default};
