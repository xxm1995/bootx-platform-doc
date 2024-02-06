import{_ as s,c as a,o as i,V as e}from"./chunks/framework.cllxpRy7.js";const _=JSON.parse('{"title":"项目前端部署","description":"","frontmatter":{},"headers":[],"relativePath":"platform/overview/config/前端部署.md","filePath":"platform/overview/config/前端部署.md","lastUpdated":null}'),n={name:"platform/overview/config/前端部署.md"},t=e(`<h1 id="项目前端部署" tabindex="-1">项目前端部署 <a class="header-anchor" href="#项目前端部署">¶</a></h1><h2 id="项目构建" tabindex="-1">项目构建 <a class="header-anchor" href="#项目构建">¶</a></h2><p>Node版本需要使用16+，包管理工具使用<code>pnpm</code>，构建完后的制品在<code>dist</code>文件夹下，</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行打包命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run build</span></span></code></pre></div><h2 id="使用nginx部署" tabindex="-1">使用Nginx部署 <a class="header-anchor" href="#使用nginx部署">¶</a></h2><h2 id="嵌入到jar中" tabindex="-1">嵌入到Jar中 <a class="header-anchor" href="#嵌入到jar中">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可以利用Java容器可以处理，嵌入到后端Jar包中，在启动后端时同时一块将前端启动</p></div><h4 id="修改路由模式" tabindex="-1">修改路由模式 <a class="header-anchor" href="#修改路由模式">¶</a></h4><p>将前端的路由模式配置为<code>hash</code>模式，不可以使用<code>history</code>模式。在前端 <code>src/router/index.ts</code>文件中进行更改</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createRouter, createWebHashHistory, createWebHistory } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-router&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 将web历史模式替换为hash模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  history: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createWebHashHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="添加带后端项目中" tabindex="-1">添加带后端项目中 <a class="header-anchor" href="#添加带后端项目中">¶</a></h3>`,11),h=[t];function p(l,r,c,d,o,k){return i(),a("div",null,h)}const y=s(n,[["render",p]]);export{_ as __pageData,y as default};
