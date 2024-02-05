import{_ as e,c as a,o as s,V as t}from"./chunks/framework.TiLr8DIm.js";const u=JSON.parse('{"title":"键值对存储","description":"","frontmatter":{},"headers":[],"relativePath":"platform/server/service/baseapi/键值对存储.md","filePath":"platform/server/service/baseapi/键值对存储.md","lastUpdated":1692538214000}'),i={name:"platform/server/service/baseapi/键值对存储.md"},o=t('<h1 id="键值对存储" tabindex="-1">键值对存储 <a class="header-anchor" href="#键值对存储">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>键值对存储可以视为一个简单版的<code>key/value存储库</code>，通常用于存储一些程序运行时的中间变量，例如定时任务中，记录上次同步到的同步到的id是多少。</p></div><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明">¶</a></h2><p>导入并将<code>cn.bootx.platform.common.core.function.SystemKeyValueService</code>服务注入到要使用的地方，然后调用对应的方法即可进行使用。</p><p><strong>方法</strong></p><ul><li>get 获取key的值</li><li>gets 获取多个key的值</li><li>setup 设置值，如果key不存在将会创建，key存在则会更新</li><li>setupBatch 保存多个值</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TODO 待补充</span></span></code></pre></div>',7),c=[o];function r(l,p,n,d,_,h){return s(),a("div",null,c)}const v=e(i,[["render",r]]);export{u as __pageData,v as default};
