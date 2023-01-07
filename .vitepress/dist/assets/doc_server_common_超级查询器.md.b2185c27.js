import{_ as a,c as n,o as s,a as e}from"./app.95c78e2d.js";const g='{"title":"\u8D85\u7EA7\u67E5\u8BE2\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u590D\u6742\u67E5\u8BE2","slug":"\u590D\u6742\u67E5\u8BE2"},{"level":2,"title":"\u7B80\u5355\u67E5\u8BE2","slug":"\u7B80\u5355\u67E5\u8BE2"},{"level":3,"title":"@QueryParam\u6CE8\u89E3","slug":"queryparam\u6CE8\u89E3"},{"level":3,"title":"QueryGenerator\u65B9\u6CD5\u7C7B","slug":"querygenerator\u65B9\u6CD5\u7C7B"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"doc/server/common/\u8D85\u7EA7\u67E5\u8BE2\u5668.md"}',t={},p=e(`<h1 id="\u8D85\u7EA7\u67E5\u8BE2\u5668" tabindex="-1">\u8D85\u7EA7\u67E5\u8BE2\u5668 <a class="header-anchor" href="#\u8D85\u7EA7\u67E5\u8BE2\u5668" aria-hidden="true">#</a></h1><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u63D0\u4F9B\u751F\u6210\u590D\u6742\u67E5\u8BE2(\u652F\u6301\u591A\u7EA7\u5D4C\u5957)\u548C\u666E\u901A\u67E5\u8BE2(\u591A\u4E2A\u6761\u4EF6\u4E4B\u95F4AND\u65B9\u5F0F\u67E5\u8BE2)<code>Wrapper</code>\u7684\u5DE5\u5177\u7C7B\u65B9\u6CD5</li><li>\u652F\u6301\u524D\u7AEF\u901A\u8FC7\u914D\u7F6E\u4E00\u4E2A<code>json</code>\u5BF9\u8C61\uFF0C\u751F\u6210\u8D85\u7EA7\u67E5\u8BE2\u5668\u7684\u67E5\u8BE2\u6761\u4EF6\uFF0C\u540E\u7AEF\u63A5\u6536\u5230\u53C2\u6570\u540E\u81EA\u52A8\u751F\u6210<code>Wrapper</code></li><li>\u590D\u6742\u67E5\u8BE2\u652F\u6301\u591A\u7EA7\u5D4C\u5957\u67E5\u8BE2\u3001and\u548Cor\u7EC4\u5408\u7684\u67E5\u8BE2</li><li>\u590D\u6742\u67E5\u8BE2\u652F\u6301\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5E03\u5C14\u3001\u65E5\u671F\u3001\u65F6\u95F4\u3001\u65E5\u671F\u65F6\u95F4\u3001\u5217\u8868\u7B49\u65B9\u5F0F\u7684\u67E5\u8BE2\u5B57\u6BB5\u7C7B\u578B</li><li>\u590D\u6742\u67E5\u8BE2\u652F\u6301\u5927\u4E8E\u3001\u5C0F\u4E8E\u3001\u4E0D\u7B49\u4E8E\u3001\u6A21\u7CCA\u6279\u91CF\u3001\u662F\u5426\u4E3A\u7A7A\u3001\u4E0D\u4E3A\u7A7A\u7B49\u6761\u4EF6\u5339\u914D\u65B9\u5F0F</li><li>\u666E\u901A\u67E5\u8BE2\u652F\u6301\u540E\u7AEF\u901A\u8FC7\u5BF9\u8C61\u65B9\u5F0F\u63A5\u6536\u67E5\u8BE2\u6761\u4EF6\uFF0C\u7136\u540E\u6839\u636E\u914D\u7F6E\u7684\u7684\u6CE8\u89E3\u8FDB\u884C<code>Wrapper</code>\u7684\u751F\u6210</li></ul><h2 id="\u590D\u6742\u67E5\u8BE2" tabindex="-1">\u590D\u6742\u67E5\u8BE2 <a class="header-anchor" href="#\u590D\u6742\u67E5\u8BE2" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5BF9\u5E94\u524D\u7AEF\u4F7F\u7528\u65B9\u6CD5\u89C1 <a href="/doc/front/vue2/\u67E5\u8BE2\u5668\u7EC4\u4EF6\u4F7F\u7528.html">\u67E5\u8BE2\u5668\u7EC4\u4EF6\u4F7F\u7528(Vue2)</a>\u3001 <a href="/doc/front/vue2/\u67E5\u8BE2\u5668\u7EC4\u4EF6\u4F7F\u7528.html">\u67E5\u8BE2\u5668\u7EC4\u4EF6\u4F7F\u7528(Vue3)</a></p></div><p>\u5728\u8981\u8FDB\u884C\u67E5\u8BE2\u7684\u5730\u65B9\uFF0C\u4F7F\u7528<code>QueryParams</code>\u5BF9\u8C61\u63A5\u6536\u524D\u53F0\u4F20\u6765\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u8C03\u7528<code>QueryGenerator#generator((QueryParams)</code>\u6839\u636E\u53C2\u6570\u751F\u6210MyBatis Plus\u9700\u8981\u7684<code>QueryWrapper</code>\uFF0C \u53EF\u4EE5\u7EE7\u7EED\u8FFD\u52A0\u9700\u8981\u7684\u67E5\u8BE2\u6761\u4EF6\uFF0C\u7136\u540E\u653E\u5165\u67E5\u8BE2\u8BED\u53E5\u8FDB\u884C\u67E5\u8BE2\u3002</p><div class="language-java"><pre><code><span class="token comment">/**
 * \u8D85\u7EA7\u67E5\u8BE2
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> <span class="token function">supperPage</span><span class="token punctuation">(</span><span class="token class-name">PageParam</span> pageParam<span class="token punctuation">,</span> <span class="token class-name">QueryParams</span> queryParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> wrapper <span class="token operator">=</span> <span class="token class-name">QueryGenerator</span><span class="token punctuation">.</span><span class="token function">generator</span><span class="token punctuation">(</span>queryParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> mpPage <span class="token operator">=</span> <span class="token class-name">MpUtil</span><span class="token punctuation">.</span><span class="token function">getMpPage</span><span class="token punctuation">(</span>pageParam<span class="token punctuation">,</span> <span class="token class-name">Client</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>mpPage<span class="token punctuation">,</span>wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7B80\u5355\u67E5\u8BE2" tabindex="-1">\u7B80\u5355\u67E5\u8BE2 <a class="header-anchor" href="#\u7B80\u5355\u67E5\u8BE2" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u524D\u7AEF\u4E0D\u9700\u8981\u505A\u989D\u5916\u5904\u7406\uFF0C\u7EE7\u7EED\u4EE5\u539F\u6709\u7684\u65B9\u5F0F\u8FDB\u884C\u4F20\u53C2\u5373\u53EF\uFF0C\u540E\u7AEF\u4F1A\u4F9D\u636E\u5BF9\u5B9E\u4F53\u7C7B\u6216\u53C2\u6570\u7C7B\u4E0A\u9762\u7684\u6CE8\u89E3\uFF0C\u5BF9\u63A5\u6536\u5230\u7684\u53C2\u6570\u8FDB\u884C\u8F6C\u6362</p></div><h3 id="queryparam\u6CE8\u89E3" tabindex="-1">@QueryParam\u6CE8\u89E3 <a class="header-anchor" href="#queryparam\u6CE8\u89E3" aria-hidden="true">#</a></h3><blockquote><p>\u8FD9\u4E2A\u6CE8\u89E3\u53EF\u4EE5\u6807\u6CE8\u5728\u67E5\u8BE2\u53C2\u6570\u7C7B\u6216\u8005\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u4E0A\uFF0C\u6807\u6CE8\u7684\u751F\u6548\u4F18\u5148\u7EA7\u4E3A <code>QueryParams</code> \u67E5\u8BE2\u53C2\u6570\u5B57\u6BB5 &gt; <code>Entity</code> \u6570\u636E\u5E93\u5B9E\u4F53\u5B57\u6BB5 &gt; <code>QueryParams</code> \u67E5\u8BE2\u7C7B &gt; <code>Entity</code> \u6570\u636E\u5E93\u5B9E\u4F53\u7C7B</p></blockquote><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>type</code> \u67E5\u8BE2\u5339\u914D\u6761\u4EF6\u7684\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A<code>EQ</code>\u7B49\u4E8E\uFF0C\u7C7B\u578B\u8BF4\u660E\u89C1<code>CompareTypeEnum</code></li><li><code>ignore</code> \u662F\u5426\u5FFD\u7565\u8BE5\u5B57\u6BB5\uFF0C\u5FFD\u7565\u8BE5\u5B57\u6BB5\u540E\u5C06\u4E0D\u518D\u53C2\u6570\u67E5\u8BE2\u6761\u4EF6\u7684\u751F\u6210\uFF0C\u901A\u5E38\u7528\u5728\u7C7B\u4E0A\u5DF2\u6709\u6807\u6CE8\uFF0C\u4F46\u4E2A\u522B\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u6392\u9664\u7684\u60C5\u51B5\u4E0B</li><li><code>namingCase</code> \u540D\u79F0\u8F6C\u6362\u7C7B\u578B, \u9ED8\u8BA4\u4E3A<code>UNDER_LINE</code>\u4E0B\u5212\u7EBF\u65B9\u5F0F\u8F6C\u6362\uFF0C\u5728\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u4E0A\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>LAMBDA</code>\u65B9\u5F0F\uFF0C\u5B83\u5C06\u4F1A\u8BFB\u53D6Mybatis Plus\u4E2D\u6B64\u5B57\u6BB5\u914D\u7F6E\u7684\u6570\u636E\u5E93\u540D\u79F0\uFF0C\u7C7B\u578B\u8BF4\u660E\u89C1 <code>NamingCaseEnum</code></li><li><code>fieldName</code> \u81EA\u5B9A\u4E49\u67E5\u8BE2\u5B57\u6BB5\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u5B57\u6BB5\u540D\u79F0. \u53EA\u53EF\u4EE5\u5728\u5B57\u6BB5\u4E0A\u6807\u6CE8\u65F6\u4F7F\u7528\uFF0C\u6807\u6CE8\u5728\u7C7B\u4E0A\u4E0D\u751F\u6548\uFF0C\u914D\u7F6E\u540E\uFF0C<code>namingCase</code>\u914D\u7F6E\u5C06\u4F1A\u65E0\u6548</li></ul><p>CompareTypeEnum\uFF08\u67E5\u8BE2\u5339\u914D\u7C7B\u578B\uFF09\uFF1A</p><ul><li><code>GT</code> \u5927\u4E8E</li><li><code>GE</code> \u5927\u4E8E\u7B49\u4E8E</li><li><code>LT</code> \u5C0F\u4E8E</li><li><code>LE</code> \u5C0F\u4E8E\u7B49\u4E8E</li><li><code>EQ</code> \u7B49\u4E8E</li><li><code>LIKE</code> \u6A21\u7CCA\u5339\u914D</li><li><code>LIKE_LEFT</code> \u5DE6\u6A21\u7CCA</li><li><code>LIKE_RIGHT</code> \u53F3\u6A21\u7CCA</li><li><code>IS_NULL</code> \u662F\u5426\u4E3A\u7A7A, \u53EA\u4F5C\u7528\u5728\u5E03\u5C14\u7C7B\u578B\u5B57\u6BB5\u4E0A, true \u4EE3\u8868 is null, false \u4EE3\u8868 not is null</li></ul><p>NamingCaseEnum\uFF08\u540D\u79F0\u8F6C\u6362\u7C7B\u578B\uFF09\uFF1A</p><ul><li><code>LAMBDA</code> \u83B7\u53D6\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u914D\u7F6E\u7684\u6570\u636E\u5E93\u5B57\u6BB5\u540D\u79F0\uFF0C\u53EA\u53EF\u4EE5\u7528\u5728\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u5B57\u6BB5\u4E0A</li><li><code>UNDER_LINE</code> \u8F6C\u6362\u4E3A\u4E0B\u5212\u7EBF\u683C\u5F0F</li><li><code>NONE</code> \u4E0D\u8FDB\u884C\u5904\u7406</li></ul><h3 id="querygenerator\u65B9\u6CD5\u7C7B" tabindex="-1">QueryGenerator\u65B9\u6CD5\u7C7B <a class="header-anchor" href="#querygenerator\u65B9\u6CD5\u7C7B" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryGenerator</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">/**
     * \u6839\u636E\u67E5\u8BE2\u5BF9\u8C61\u6570\u636E\u548C\u8BE5\u7C7B\u4E0A\u6807\u6CE8\u7684\u6CE8\u89E3\u8FDB\u884C\u751F\u6210, \u751F\u6210\u7684\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u4E4B\u95F4\u7528And\u8FDE\u63A5
     * @param queryParams \u53C2\u6570\u5BF9\u8C61
     * @param &lt;T&gt; \u6CDB\u578B
     * @return \u67E5\u8BE2\u5668
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token class-name">Object</span> queryParams<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u6839\u636E\u67E5\u8BE2\u5BF9\u8C61\u6570\u636E\uFF0C\u4EE5\u53CA\u53C2\u6570\u5BF9\u8C61\u7C7B\u548C\u6570\u636E\u5E93Entity\u7C7B\u4E0A\u6807\u6CE8\u7684\u6CE8\u89E3\u8FDB\u884C\u751F\u6210, \u751F\u6210\u7684\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u4E4B\u95F4\u7528And\u8FDE\u63A5
     * @param queryParams \u53C2\u6570\u5BF9\u8C61
     * @param clazz \u6570\u636E\u5E93Entity\u7C7B
     * @param &lt;T&gt; \u6CDB\u578B
     * @return \u67E5\u8BE2\u5668
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token class-name">Object</span> queryParams<span class="token punctuation">,</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-java"><pre><code>\u5F85\u8865\u5145
</code></pre></div>`,21),c=[p];function o(l,r,i,u,d,k){return s(),n("div",null,c)}var h=a(t,[["render",o]]);export{g as __pageData,h as default};
