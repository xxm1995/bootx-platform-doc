import{_ as a,c as t,o as n,a as s}from"./app.9c6e725a.js";const _='{"title":"\u7528\u6237\u9009\u62E9\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u53C2\u6570\u548C\u8BF4\u660E","slug":"\u53C2\u6570\u548C\u8BF4\u660E"},{"level":2,"title":"\u56DE\u8C03\u65B9\u6CD5","slug":"\u56DE\u8C03\u65B9\u6CD5"}],"relativePath":"platform/front/vue3/\u7528\u6237\u9009\u62E9\u7EC4\u4EF6.md"}',e={},p=s(`<h1 id="\u7528\u6237\u9009\u62E9\u7EC4\u4EF6" tabindex="-1">\u7528\u6237\u9009\u62E9\u7EC4\u4EF6 <a class="header-anchor" href="#\u7528\u6237\u9009\u62E9\u7EC4\u4EF6" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u4E8E\u5F39\u7A97\u9009\u62E9\u7528\u6237\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u914D\u7F6E\u7528\u6237\u662F\u5355\u9009\u8FD8\u662F\u591A\u9009\uFF0C\u9ED8\u8BA4\u67E5\u8BE2<code>/user/admin/page</code>\u63A5\u53E3\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u81EA\u5B9A\u4E49</p></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-user-select-modal</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userSelectModal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">selectUser</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> userInfo</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">import</span> BUserSelectModal <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Bootx/UserSelectModal&#39;</span>

</code></pre></div><h2 id="\u53C2\u6570\u548C\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u548C\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u548C\u8BF4\u660E" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u529F\u80FD</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>\u540D\u79F0</td><td>\u5426</td><td>\u9009\u62E9\u7528\u6237</td></tr><tr><td>multiple</td><td>boolean</td><td>\u662F\u5426\u5141\u8BB8\u591A\u9009</td><td>\u5426</td><td></td></tr><tr><td>width</td><td>number</td><td>\u5BBD\u5EA6</td><td>\u5426</td><td>string</td></tr><tr><td>dataSource</td><td>Function</td><td>\u6570\u636E\u6E90\u51FD\u6570</td><td>\u5426</td><td><code>/user/admin/page</code>\u7528\u6237\u4FE1\u606F\u67E5\u8BE2\u63A5\u53E3</td></tr><tr><td>@ok</td><td>Function</td><td>\u70B9\u51FB\u786E\u8BA4\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u5426</td><td>\u65E0</td></tr></tbody></table><h2 id="\u56DE\u8C03\u65B9\u6CD5" tabindex="-1">\u56DE\u8C03\u65B9\u6CD5 <a class="header-anchor" href="#\u56DE\u8C03\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token comment">/**
 * \u56DE\u8C03\u65B9\u6CD5
 * @param userId \u7528\u6237id\uFF0C\u591A\u9009\u72B6\u6001\u4E0B\u8FD4\u56DE\u7528\u6237ID\u5217\u8868\uFF0C\u5355\u9009\u60C5\u51B5\u4E0B\u8FD4\u56DE\u5355\u4E2A\u7528\u6237ID
 * @param userInfo \u7528\u6237\u4FE1\u606F\uFF0C\u591A\u9009\u72B6\u6001\u4E0B\u7528\u6237\u4FE1\u606F\u5217\u8868\uFF0C\u5355\u9009\u60C5\u51B5\u4E0B\u8FD4\u56DE\u5355\u4E2A\u7528\u6237\u4FE1\u606F\u5BF9\u8C61
 */</span>
<span class="token keyword">function</span> <span class="token function">selectUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> userInfo<span class="token operator">:</span> UserInfo <span class="token operator">|</span> UserInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>`,9),o=[p];function c(l,d,u,r,i,k){return n(),t("div",null,o)}var g=a(e,[["render",c]]);export{_ as __pageData,g as default};
