import{_ as e,c as o,o as a,V as d}from"./chunks/framework.OTU5OxHT.js";const x=JSON.parse('{"title":"系统部署","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/guides/develop/系统部署.md","filePath":"daxpay/guides/develop/系统部署.md","lastUpdated":1707297965000}'),c={name:"daxpay/guides/develop/系统部署.md"},t=d('<h1 id="系统部署" tabindex="-1">系统部署 <a class="header-anchor" href="#系统部署">¶</a></h1><h2 id="精简项目" tabindex="-1">精简项目 <a class="header-anchor" href="#精简项目">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>为了演示方便，系统默认安装了演示模块，如果不需要演示模块，可以在项目中去除依赖。同时为了管理方便，SDK代码也在同一个项目中，SDK构建时使用了<code>GPG</code>插件， 可能导致打包失败，需要手动去除依赖。</p></div><h3 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端">¶</a></h3><ol><li>在项目的根目录下，打开<code>pom.xml</code>文件，找到<code>modules</code>下的<code>daxpay-single-sdk</code>，删除即可，可以同时将<code>daxpay-single-sdk</code>一块删除，这样就去除了SDK代码。</li><li>在项目<code>daxpay-single/daxpay-single-start</code>中打开该目录下的<code>pom.xml</code>文件，找到支付演示模块<code>daxpay-single-demo</code>的依赖，删除即可，也可以同时删除对应的代码，这样就去除了演示模块。</li></ol><h3 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端">¶</a></h3><ol><li>在项目中<code>src/views</code>找到<code>paydemo</code>模块删除即可。</li><li>在后台管理端找到<code>paydemo</code>相关的菜单进行删除，或者直接在数据库中进行删除也可。</li></ol><h2 id="后端构建" tabindex="-1">后端构建 <a class="header-anchor" href="#后端构建">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>由于<code>DaxPay</code>底层基于<code>Bootx-Platform</code>进行构建，所以构建方式也类似<code>Bootx-Platform</code>，具体构建方式请参考对应文档 <a href="/platform/overview/config/后端部署.html">后端部署</a>， <strong>不同点是<code>DaxPay</code>生成的可执行Jar文件在<code>daxpay-single-start</code>模块下</strong></p></div><h2 id="前端构建" tabindex="-1">前端构建 <a class="header-anchor" href="#前端构建">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>由于<code>DaxPay</code>底层基于<code>Bootx-Platform</code>进行构建，所以构建方式也类似<code>Bootx-Platform</code>，具体构建方式请参考对应文档 <a href="/platform/overview/config/前端部署.html">前端部署</a></p></div><h2 id="项目部署" tabindex="-1">项目部署 <a class="header-anchor" href="#项目部署">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>由于<code>DaxPay</code>底层基于<code>Bootx-Platform</code>进行构建，所以部署方式也类似<code>Bootx-Platform</code>，具体部署方式请参考对应文档 <a href="/platform/overview/config/后端部署.html">后端部署</a>和<a href="/platform/overview/config/前端部署.html">前端部署</a></p></div>',13),s=[t];function l(i,r,p,h,n,m){return a(),o("div",null,s)}const _=e(c,[["render",l]]);export{x as __pageData,_ as default};
