import{_ as a,c as e,o as s,a as t}from"./app.9c6e725a.js";const f='{"title":"\u8DEF\u7531\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540E\u7AEF\u914D\u7F6E","slug":"\u540E\u7AEF\u914D\u7F6E"},{"level":2,"title":"\u524D\u7AEF\u914D\u7F6E","slug":"\u524D\u7AEF\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u53C2\u6570","slug":"\u914D\u7F6E\u53C2\u6570"},{"level":2,"title":"\u7279\u6B8A\u7C7B\u578B\u8DEF\u7531","slug":"\u7279\u6B8A\u7C7B\u578B\u8DEF\u7531"},{"level":3,"title":"\u6253\u5F00\u5916\u90E8\u94FE\u63A5","slug":"\u6253\u5F00\u5916\u90E8\u94FE\u63A5"},{"level":3,"title":"\u5185\u90E8\u6253\u5F00\u5916\u90E8\u9875\u9762(Iframe)","slug":"\u5185\u90E8\u6253\u5F00\u5916\u90E8\u9875\u9762-iframe"},{"level":3,"title":"\u5916\u90E8\u6253\u5F00\u5185\u90E8\u9875\u9762","slug":"\u5916\u90E8\u6253\u5F00\u5185\u90E8\u9875\u9762"}],"relativePath":"platform/front/vue3/\u8DEF\u7531\u914D\u7F6E.md"}',n={},o=t(`<h1 id="\u8DEF\u7531\u914D\u7F6E" tabindex="-1">\u8DEF\u7531\u914D\u7F6E <a class="header-anchor" href="#\u8DEF\u7531\u914D\u7F6E" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5F53\u524D\u7CFB\u7EDF\u8DEF\u7531\u914D\u7F6E\u5206\u4E3A\u4E24\u79CD\uFF0C\u5206\u522B\u662F\u540E\u7AEF\u914D\u7F6E\u548C\u524D\u7AEF\u914D\u7F6E\uFF0C\u540E\u7AEF\u901A\u8FC7\u83DC\u5355\u7BA1\u7406\u8FDB\u884C\u914D\u7F6E\uFF0C\u524D\u7AEF\u5728<code>src/router/routes/index.ts</code>\u6587\u4EF6\u5939\u4E0B\u8FDB\u884C\u914D\u7F6E\uFF0C \u524D\u7AEF\u914D\u7F6E\u7684\u8DEF\u7531\u901A\u5E38\u7528\u4E8E\u672A\u767B\u5F55\u53EF\u8BBF\u95EE\u7684\u60C5\u51B5\uFF0C\u540E\u7AEF\u914D\u7F6E\u83DC\u5355\u7684\u9700\u8981\u767B\u5F55\u540E\u624D\u80FD\u83B7\u53D6\uFF0C\u6240\u4EE5\u53EA\u80FD\u7528\u6237\u7528\u6237\u5DF2\u767B\u5F55\u7684\u60C5\u51B5\u3002</p></div><h2 id="\u540E\u7AEF\u914D\u7F6E" tabindex="-1">\u540E\u7AEF\u914D\u7F6E <a class="header-anchor" href="#\u540E\u7AEF\u914D\u7F6E" aria-hidden="true">#</a></h2><h2 id="\u524D\u7AEF\u914D\u7F6E" tabindex="-1">\u524D\u7AEF\u914D\u7F6E <a class="header-anchor" href="#\u524D\u7AEF\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u8DEF\u7531\u914D\u7F6E\u7684\u7C7B\u578B\u662F<code>AppRouteRecordRaw</code>\uFF0C\u5728<code>src/router/routes/index.ts</code>\u6587\u4EF6\u4E2D\uFF0C\u6784\u9020\u5E76\u66B4\u9732\u51FA<code>basicRoutes</code>\u5BF9\u8C61\uFF0C\u6765\u63D0\u4F9B\u7ED9\u8DEF\u7531\u83DC\u5355\u6784\u9020\u5DE5\u5177\u7C7B\u4F7F\u7528\uFF0C \u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u751F\u6210\u3002</p><div class="language-javascript"><pre><code><span class="token comment">// \u65E0\u9700\u9274\u6743\u7684\u57FA\u672C\u8DEF\u7531</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> basicRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>LoginRoute<span class="token punctuation">,</span> RootRoute<span class="token punctuation">,</span> <span class="token operator">...</span>mainOutRoutes<span class="token punctuation">,</span> <span class="token constant">REDIRECT_ROUTE</span><span class="token punctuation">,</span> <span class="token constant">PAGE_NOT_FOUND_ROUTE</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1">\u914D\u7F6E\u53C2\u6570 <a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a></h3><h2 id="\u7279\u6B8A\u7C7B\u578B\u8DEF\u7531" tabindex="-1">\u7279\u6B8A\u7C7B\u578B\u8DEF\u7531 <a class="header-anchor" href="#\u7279\u6B8A\u7C7B\u578B\u8DEF\u7531" aria-hidden="true">#</a></h2><h3 id="\u6253\u5F00\u5916\u90E8\u94FE\u63A5" tabindex="-1">\u6253\u5F00\u5916\u90E8\u94FE\u63A5 <a class="header-anchor" href="#\u6253\u5F00\u5916\u90E8\u94FE\u63A5" aria-hidden="true">#</a></h3><h3 id="\u5185\u90E8\u6253\u5F00\u5916\u90E8\u9875\u9762-iframe" tabindex="-1">\u5185\u90E8\u6253\u5F00\u5916\u90E8\u9875\u9762(Iframe) <a class="header-anchor" href="#\u5185\u90E8\u6253\u5F00\u5916\u90E8\u9875\u9762-iframe" aria-hidden="true">#</a></h3><h3 id="\u5916\u90E8\u6253\u5F00\u5185\u90E8\u9875\u9762" tabindex="-1">\u5916\u90E8\u6253\u5F00\u5185\u90E8\u9875\u9762 <a class="header-anchor" href="#\u5916\u90E8\u6253\u5F00\u5185\u90E8\u9875\u9762" aria-hidden="true">#</a></h3>`,11),r=[o];function c(i,d,l,p,h,u){return s(),e("div",null,r)}var k=a(n,[["render",c]]);export{f as __pageData,k as default};
