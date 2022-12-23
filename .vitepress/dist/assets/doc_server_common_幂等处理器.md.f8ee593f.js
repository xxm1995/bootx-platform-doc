import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.c921523c.js";const _='{"title":"\u5E42\u7B49\u5904\u7406\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E42\u7B49\u5904\u7406\u5668","slug":"\u5E42\u7B49\u5904\u7406\u5668"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"doc/server/common/\u5E42\u7B49\u5904\u7406\u5668.md","lastUpdated":1671722138118}',e={},o=t('<h2 id="\u5E42\u7B49\u5904\u7406\u5668"><a class="header-anchor" href="#\u5E42\u7B49\u5904\u7406\u5668" aria-hidden="true">#</a> \u5E42\u7B49\u5904\u7406\u5668</h2><h3 id="\u8BF4\u660E"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><pre><code>\u5728\u8981\u8FDB\u884C\u5E42\u7B49\u63A7\u5236\u7684\u65B9\u6CD5\u4E0A\u6DFB\u52A0 `@Idempotent` \u6CE8\u89E3\uFF0C\u5F53\u8BE5\u65B9\u6CD5\u65B9\u6CD5\u4E0A\u91CD\u590D\u63D0\u4EA4\u65F6\u8FDB\u884C\u62E6\u622A\u3002\u539F\u7406\u662F\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A`AOP`\u5207\u9762\uFF0C\u5728\u5207\u9762\u4E2D\u62E6\u622A\u6DFB\u52A0 `@Idempotent` \u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u83B7\u53D6\u5F53\u524D\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\u4E2D\u7684 `IdempotentToken` \u6570\u636E\uFF0C\u901A\u8FC7`redis`\u7684`setIfAbsent`\u547D\u4EE4\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5B58\u7684\u7684\u8BDD\u629B\u51FA\u5F02\u5E38\n\u5B9E\u73B0\u5E42\u7B49\u63A7\u5236\u9700\u8981\u524D\u7AEF\u8FDB\u884C\u914D\u7F6E\uFF0C\u524D\u7AEF\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5728\u8BF7\u6C42\u5934\u6216\u8005`QueryString`\u91CC\u653E\u5165 `IdempotentToken`(\u5E42\u7B49\u4EE4\u724C) \u6570\u636E\u3002\u901A\u5E38\u5728\u662F\u5728\u524D\u7AEF\u9875\u9762\u751F\u547D\u5468\u671F\u4E2D\u521B\u5EFA\u9875\u9762\u65F6\u751F\u6210\u4E00\u4E2A`Token`\uFF0C\u653E\u5165\u5230\u8FD9\u4E2A\u9875\u9762\u6240\u53D1\u51FA\u8BF7\u6C42\u7684**\u8BF7\u6C42\u5934**\u4E2D\u6216\u8005**\u8BF7\u6C42\u53C2\u6570**\u4E0A\uFF0C\u91CD\u590D\u53D1\u9001\u8BF7\u6C42\u65F6\u4F1A\u88AB\u540E\u7AEF\u62E6\u622A\u8BE5\u8BF7\u6C42\uFF0C\u5E76\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A\u3002\u63A8\u8350\u5728`Controller`\u4E2D\u7684\u65B9\u6CD5\u4E0A\u4F7F\u7528\u3002\n</code></pre><h3 id="\u53C2\u6570"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p><code>Idempotent</code>:</p><ul><li><code>enable</code>\u662F\u5426\u5F00\u542F\u5E42\u7B49\u63A7\u5236</li><li><code>timeout</code>\u8D85\u65F6\u65F6\u95F4(\u6BEB\u79D2)</li><li><code>name</code>\u540D\u79F0\uFF0C\u7528\u6765\u533A\u5206\u540C\u4E00\u4E2A\u524D\u7AEF\u9875\u9762\u53D1\u51FA\u7684\u4E0D\u540C\u8BF7\u6C42\u65B9\u6CD5(\u540C\u4E00\u9875\u9762\u53D1\u9001\u7684\u8BF7\u6C42\u5E26\u7684Token\u53EF\u80FD\u4F1A\u662F\u91CD\u590D\u7684)</li></ul><h3 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>\n<span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5\u63A7\u5236\u5668&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@RestController</span>\n<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@RequiredArgsConstructor</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// \u6DFB\u52A0\u5E42\u7B49\u62E6\u622A\u6CE8\u89E3</span>\n    <span class="token annotation punctuation">@Idempotent</span>\n    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">)</span>\n    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8),p=[o];function c(l,u,i,r,k,d){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{_ as __pageData,m as default};
