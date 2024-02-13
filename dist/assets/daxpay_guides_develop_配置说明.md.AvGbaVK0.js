import{_ as s,c as a,o as i,V as n}from"./chunks/framework.OTU5OxHT.js";const g=JSON.parse('{"title":"配置说明","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/guides/develop/配置说明.md","filePath":"daxpay/guides/develop/配置说明.md","lastUpdated":null}'),p={name:"daxpay/guides/develop/配置说明.md"},l=n(`<h1 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>一些参数和配置需要通过后台管理端进行配置，对应的说明请查阅 <code>使用说明</code>下的文档内容</p></div><h2 id="后端配置" tabindex="-1">后端配置 <a class="header-anchor" href="#后端配置">¶</a></h2><blockquote><p>后端是基于<code>bootx-platform</code>脚手架进行构建的，各类通用的配置项可以查阅对应的文档。而且配置文件中针对各项配置都有注释，所以这里只针对部分配置进行说明。</p></blockquote><h3 id="支付平台配置" tabindex="-1">支付平台配置 <a class="header-anchor" href="#支付平台配置">¶</a></h3><table><thead><tr><th>配置想</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>server-url</td><td>服务地址</td><td>当前支付网关后端服务用于访问的地址，暂时无实际作用</td></tr><tr><td>front-h5-url</td><td>H5前端地址</td><td>移动端前端访问地址，像支付完成页面的跳转就需要用到这个地址进行拼接</td></tr><tr><td>front-web-url</td><td>PC前端地址</td><td>PC前端的访问地址，暂时无实际作用</td></tr></tbody></table><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 支付系统配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dax-pay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 服务地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  server-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://pay1.bootx.cn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前端h5地址，最后不需要 / 结尾，系统拼接的路径已经有 / 前缀了</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  front-h5-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://pay1.bootx.cn/h5/#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 前端web地址，最后不需要 / 结尾，系统拼接的路径已经有 / 前缀了</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  front-web-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://pay1.bootx.cn/#</span></span></code></pre></div><h3 id="演示模块配置" tabindex="-1">演示模块配置 <a class="header-anchor" href="#演示模块配置">¶</a></h3><h2 id="pc前端配置" tabindex="-1">PC前端配置 <a class="header-anchor" href="#pc前端配置">¶</a></h2><blockquote><p>打开<code>.env.*</code>相关的文件，可以对一些配置项进行修改，下面介绍一些常用的配置项目，前端基于<code>Vben-Admin</code>搭建，不确定的参数可以去<code>Vben-Admin</code>官网文档进行查阅</p></blockquote><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># port</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_DEV_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=6000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开发环境请求地址 path</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_DEV_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:9999&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_PRO_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接口超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_GLOB_API_TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=30000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 跨域代理，您可以配置多个 ,请注意，没有换行符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_PROXY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=[[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:9000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录终端名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_CLIENT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DaxPay&#39;</span></span></code></pre></div><h2 id="移动端配置" tabindex="-1">移动端配置 <a class="header-anchor" href="#移动端配置">¶</a></h2><blockquote><p>分别提供了前端嵌入到后端中和独立部署两种模式，区别是网站的根目录和接口的前缀配置不同，下面的配置是独立部署模式的配置示例：</p></blockquote><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 网站根目录 和 接口 (api) 前缀 这个是嵌入式模式, 分别是放到后端中的那个路径下以及访问接口的前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#VITE_PUBLIC_PATH = /h5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#VITE_GLOB_API_URL_PREFIX = /</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 网站根目录(与PC部署在一起, 所以根目录要为实际所在的路径) 和 API接口 (server) 前缀 这个是独立部署模式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_PUBLIC_PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/h5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_GLOB_API_URL_PREFIX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否删除console</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_DROP_CONSOLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_GLOB_API_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = /</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 图片上传地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_GLOB_UPLOAD_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 图片前缀地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_GLOB_IMG_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否启用gzip压缩或brotli压缩</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可选: gzip | brotli | none</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你需要多种形式，你可以用&#39;,&#39;来分隔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_BUILD_COMPRESS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用压缩时是否删除原始文件，默认为false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span></code></pre></div><h2 id="pc端配置" tabindex="-1">PC端配置 <a class="header-anchor" href="#pc端配置">¶</a></h2><blockquote><p>PC端可以不进行额外的配置，但部署时为了</p></blockquote>`,16),t=[l];function h(e,k,d,r,c,E){return i(),a("div",null,t)}const y=s(p,[["render",h]]);export{g as __pageData,y as default};
