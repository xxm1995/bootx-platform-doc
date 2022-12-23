import{_ as s,f as n,e as a,N as p}from"./plugin-vue_export-helper.c921523c.js";const m='{"title":"\u8D85\u7EA7\u67E5\u8BE2\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u540E\u7AEF","slug":"\u540E\u7AEF"},{"level":3,"title":"\u524D\u7AEF","slug":"\u524D\u7AEF"}],"relativePath":"doc/server/common/\u8D85\u7EA7\u67E5\u8BE2\u5668.md","lastUpdated":1671722245851}',t={},e=p(`__VP_STATIC_START__<h1 id="\u8D85\u7EA7\u67E5\u8BE2\u5668"><a class="header-anchor" href="#\u8D85\u7EA7\u67E5\u8BE2\u5668" aria-hidden="true">#</a> \u8D85\u7EA7\u67E5\u8BE2\u5668</h1><h2 id="\u529F\u80FD"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><ul><li>\u901A\u8FC7\u914D\u7F6Ejson\u81EA\u52A8\u751F\u6210\u8D85\u7EA7\u67E5\u8BE2\u5668</li><li>\u652F\u6301\u591A\u7EA7\u5D4C\u5957\u67E5\u8BE2\u3001\u7EC4\u5408\u67E5\u8BE2\uFF0C</li><li>\u652F\u6301\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5E03\u5C14\u3001\u65E5\u671F\u3001\u65F6\u95F4\u3001\u65E5\u671F\u65F6\u95F4\u3001\u4E0B\u62C9\u5217\u8868\u7B49\u65B9\u5F0F\u7684\u5B57\u6BB5\u7C7B\u578B</li><li>\u652F\u6301\u5927\u4E8E\u3001\u5C0F\u4E8E\u3001\u4E0D\u7B49\u4E8E\u3001\u6A21\u7CCA\u6279\u91CF\u3001\u662F\u5426\u4E3A\u7A7A</li></ul><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u540E\u7AEF"><a class="header-anchor" href="#\u540E\u7AEF" aria-hidden="true">#</a> \u540E\u7AEF</h3><p>\u5728\u8981\u8FDB\u884C\u67E5\u8BE2\u7684\u5730\u65B9\uFF0C\u4F7F\u7528<code>QueryParams</code>\u5BF9\u8C61\u63A5\u6536\u524D\u53F0\u4F20\u6765\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u8C03\u7528<code>QueryGenerator#generator</code>\u6839\u636E\u53C2\u6570\u751F\u6210MyBatis Plus\u9700\u8981\u7684<code>QueryWrapper</code>\uFF0C\u7136\u540E\u653E\u5165\u67E5\u8BE2\u8BED\u53E5\u8FDB\u884C\u67E5\u8BE2</p><div class="language-java"><pre><code><span class="token comment">/**
 * \u8D85\u7EA7\u67E5\u8BE2
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> <span class="token function">supperPage</span><span class="token punctuation">(</span><span class="token class-name">PageParam</span> pageParam<span class="token punctuation">,</span> <span class="token class-name">QueryParams</span> queryParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> generator <span class="token operator">=</span> <span class="token class-name">QueryGenerator</span><span class="token punctuation">.</span><span class="token function">generator</span><span class="token punctuation">(</span>queryParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> mpPage <span class="token operator">=</span> <span class="token class-name">MpUtil</span><span class="token punctuation">.</span><span class="token function">getMpPage</span><span class="token punctuation">(</span>pageParam<span class="token punctuation">,</span> <span class="token class-name">Client</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>mpPage<span class="token punctuation">,</span>generator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u524D\u7AEF"><a class="header-anchor" href="#\u524D\u7AEF" aria-hidden="true">#</a> \u524D\u7AEF</h3><p><img src="https://cdn.nlark.com/yuque/0/2021/png/1098426/1640266837123-e6de1253-aead-419e-8935-f75593320b1f.png#clientId=uec14ad4f-24a1-4&amp;from=paste&amp;height=646&amp;id=u954e02c5&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=861&amp;originWidth=1325&amp;originalType=binary&amp;ratio=1&amp;size=76220&amp;status=done&amp;style=none&amp;taskId=u0343fdd1-5b8d-49c4-9274-d2760e3a097&amp;width=994" alt="image.png"><strong>\u8D85\u7EA7\u67E5\u8BE2\u5668\u4F7F\u7528\u6548\u679C</strong></p><p>\u5728\u8981\u8FDB\u884C\u67E5\u8BE2\u7684\u9875\u9762\u5F15\u5165\u8D85\u7EA7\u67E5\u8BE2\u5668\u7EC4\u4EF6\uFF0C\u5E76\u653E\u5728\u5408\u9002\u7684\u4F4D\u7F6E\u4E0A \u5BFC\u5165\u8BED\u53E5\uFF1A<code>import BSuperQuery from &#39;@/components/Bootx/SuperQuery/BSuperQuery&#39;</code></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-super-query</span>
  <span class="token attr-name">:queryState</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>superQueryFlag<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryFields<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>880<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">button-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8D85\u7EA7\u67E5\u8BE2<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">model-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8D85\u7EA7\u67E5\u8BE2\u5668<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@query</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>superQuery<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@rest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>restQuery<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5404\u9879\u53C2\u6570\uFF1A</p><ul><li><code>queryState</code>\uFF1A\u67E5\u8BE2\u72B6\u6001\uFF0C\u5F53\u524D\u662F\u5426\u5728\u8FDB\u884C\u67E5\u8BE2</li><li><code>fields</code>\uFF1A\u67E5\u8BE2\u914D\u7F6E\u53C2\u6570</li><li><code>width</code>\uFF1A\u5BBD\u5EA6</li><li><code>button-title</code>\uFF1A\u6309\u94AE\u6807\u9898</li><li><code>model-title</code>\uFF1A\u5F39\u6846\u6807\u9898</li><li><code>query</code>\uFF1A\u70B9\u51FB\u67E5\u8BE2\u65F6\u7684\u56DE\u8C03</li><li><code>rest</code>\uFF1A\u7535\u5668\u53D6\u6D88\u67E5\u8BE2\u65F6\u7684\u56DE\u8C03</li></ul><p>** **<code>**fields**</code><strong>\u67E5\u8BE2\u914D\u7F6E\u53C2\u6570</strong> \u793A\u4F8B</p><div class="language-javascript"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;num&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6570\u5B57&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">NUMBER</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5B57\u7B26&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">STRING</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;bool&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5E03\u5C14&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">BOOLEAN</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DATE</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65F6\u95F4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">TIME</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;date_time&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F\u65F6\u95F4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DATE_TIME</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5217\u8868&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">LIST</span><span class="token punctuation">,</span>
   <span class="token literal-property property">list</span><span class="token operator">:</span>
   <span class="token punctuation">[</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D4B\u8BD51&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;cs1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D4B\u8BD52&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;cs2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6D4B\u8BD53&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;cs3&#39;</span> <span class="token punctuation">}</span>
   <span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>field</code>\uFF1A\u67E5\u8BE2\u5B57\u6BB5\u540D\uFF0C\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u5B57\u6BB5\u540D\u79F0\uFF0C\u63D0\u4EA4\u65F6\u4F1A\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u4F20\u9001\u5230\u540E\u53F0</li><li><code>name</code>\uFF1A\u663E\u793A\u540D\u79F0\uFF0C\u67E5\u8BE2\u5668\u67E5\u8BE2\u9875\u9762\u663E\u793A\u7684\u67E5\u8BE2\u5B57\u6BB5\u540D\u79F0\uFF0C\u4E0D\u4F1A\u88AB\u63D0\u4EA4</li><li><code>type</code>\uFF1A\u6570\u636E\u7C7B\u578B\uFF0C\u6839\u636E\u4F20\u5165\u4E0D\u540C\u7684\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u7EC4\u4EF6\u8FDB\u884C\u67E5\u8BE2</li><li><code>underLine</code>\uFF1A\u53C2\u6570\u540D\u79F0\u662F\u5426\u9700\u8981\u8F6C\u6362\u6210\u4E0B\u5212\u7EBF\u547D\u540D\uFF0C\u9ED8\u8BA4\u8F6C\u6362</li><li><code>list</code>\uFF1Atype\u6570\u636E\u7C7B\u578B\u4E3Alist\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u4F20\u5165 <ul><li><code>name</code>\uFF1A\u663E\u793A\u540D\u79F0</li><li><code>value</code>\uFF1A\u67E5\u8BE2\u7684\u503C\uFF0C\u7B49\u540C<code>field</code></li></ul></li></ul><p><strong>\u6570\u636E\u7C7B\u578B\uFF08type\uFF09</strong> \u53EF\u4EE5\u5F15\u5165<code>import BSuperQuery from &#39;@/components/Bootx/SuperQuery/superQueryCode&#39;</code>\u4E2D\u7684\u7C7B\u578B\u5E38\u91CF\u503C\u8FDB\u884C\u914D\u7F6E\uFF0C\u6240\u652F\u6301\u7684\u7C7B\u578B\u5982\u4E0B</p><div class="language-javascript"><pre><code><span class="token comment">// \u6570\u5B57</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NUMBER</span> <span class="token operator">=</span> <span class="token string">&#39;number&#39;</span>
<span class="token comment">// \u5B57\u7B26\u4E32</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">STRING</span> <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span>
<span class="token comment">// \u5E03\u5C14</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">BOOLEAN</span> <span class="token operator">=</span> <span class="token string">&#39;boolean&#39;</span>
<span class="token comment">// \u65E5\u671F</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DATE</span> <span class="token operator">=</span> <span class="token string">&#39;date&#39;</span>
<span class="token comment">// \u65F6\u95F4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TIME</span> <span class="token operator">=</span> <span class="token string">&#39;time&#39;</span>
<span class="token comment">// \u65E5\u671F\u65F6\u95F4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DATE_TIME</span> <span class="token operator">=</span> <span class="token string">&#39;date_time&#39;</span>
<span class="token comment">// \u5217\u8868</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LIST</span> <span class="token operator">=</span> <span class="token string">&#39;list&#39;</span>
</code></pre></div>__VP_STATIC_END__`,18),o=[e];function c(l,r,u,i,k,d){return a(),n("div",null,o)}var g=s(t,[["render",c]]);export{m as __pageData,g as default};
