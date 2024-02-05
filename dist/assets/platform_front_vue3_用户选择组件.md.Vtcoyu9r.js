import{_ as s,c as i,o as a,V as t}from"./chunks/framework.TiLr8DIm.js";const g=JSON.parse('{"title":"用户选择组件","description":"","frontmatter":{},"headers":[],"relativePath":"platform/front/vue3/用户选择组件.md","filePath":"platform/front/vue3/用户选择组件.md","lastUpdated":1691047307000}'),h={name:"platform/front/vue3/用户选择组件.md"},n=t(`<h1 id="用户选择组件" tabindex="-1">用户选择组件 <a class="header-anchor" href="#用户选择组件">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>用于弹窗选择用户的场景，可以配置用户是单选还是多选，默认查询<code>/user/admin/page</code>接口的用户信息，可以根据需要进行自定义</p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用">¶</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">b-user-select-modal</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userSelectModal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">selectUser</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selectUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BUserSelectModal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/@/components/Bootx/UserSelectModal&#39;</span></span></code></pre></div><h2 id="参数和说明" tabindex="-1">参数和说明 <a class="header-anchor" href="#参数和说明">¶</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>功能</th><th>是否必填</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>名称</td><td>否</td><td>选择用户</td></tr><tr><td>multiple</td><td>boolean</td><td>是否允许多选</td><td>否</td><td></td></tr><tr><td>width</td><td>number</td><td>宽度</td><td>否</td><td>string</td></tr><tr><td>dataSource</td><td>Function</td><td>数据源函数</td><td>否</td><td><code>/user/admin/page</code>用户信息查询接口</td></tr><tr><td>@ok</td><td>Function</td><td>点击确认的回调函数</td><td>否</td><td>无</td></tr></tbody></table><h2 id="回调方法" tabindex="-1">回调方法 <a class="header-anchor" href="#回调方法">¶</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 回调方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userId</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 用户id，多选状态下返回用户ID列表，单选情况下返回单个用户ID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userInfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 用户信息，多选状态下用户信息列表，单选情况下返回单个用户信息对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selectUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]){}</span></span></code></pre></div>`,9),e=[n];function l(p,k,d,r,E,o){return a(),i("div",null,e)}const y=s(h,[["render",l]]);export{g as __pageData,y as default};
