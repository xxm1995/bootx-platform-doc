import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.c921523c.js";const m='{"title":"TableMixin","description":"","frontmatter":{},"headers":[{"level":2,"title":"TableMixin","slug":"tablemixin"},{"level":2,"title":"FormMixin","slug":"formmixin"},{"level":2,"title":"\u5B57\u5178\u7FFB\u8BD1\u65B9\u6CD5\u4F7F\u7528","slug":"\u5B57\u5178\u7FFB\u8BD1\u65B9\u6CD5\u4F7F\u7528"},{"level":3,"title":"\u5B57\u5178\u9879\u683C\u5F0F","slug":"\u5B57\u5178\u9879\u683C\u5F0F"},{"level":3,"title":"\u83B7\u53D6\u5B57\u5178\u9879\u5217\u8868","slug":"\u83B7\u53D6\u5B57\u5178\u9879\u5217\u8868"},{"level":3,"title":"\u5B57\u5178\u9879\u7FFB\u8BD1","slug":"\u5B57\u5178\u9879\u7FFB\u8BD1"}],"relativePath":"doc/front/vue2/\u901A\u7528Mixin.md","lastUpdated":1671722341731}',e={},p=t(`<h2 id="tablemixin"><a class="header-anchor" href="#tablemixin" aria-hidden="true">#</a> TableMixin</h2><p>\u4E3B\u8981\u7528\u5728\u5C55\u793A\u5217\u8868\u7684\u573A\u5408\uFF0C\u9884\u7F6E\u4E86\u5982\u4E0B\u529F\u80FD\uFF1A</p><ul><li>\u9ED8\u8BA4\u5F15\u5165\u4E86\u5B57\u5178\u7FFB\u8BD1\u5DE5\u5177\u7C7B</li><li>\u9ED8\u8BA4\u5F15\u5165\u4E86\u8D85\u7EA7\u67E5\u8BE2\u5668\u548C\u666E\u901A\u67E5\u8BE2\u5668\u7EC4\u4EF6</li><li>\u5728data()\u4E2D\u5F15\u5165\u4E86\u5E38\u7528\u7684\u53D8\u91CF</li><li>\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u5E38\u7528\u65B9\u6CD5\u7B49 <ul><li>\u91CD\u7F6E\u5F53\u524D\u9875\u6570</li><li>\u8868\u683C\u7FFB\u9875</li><li>\u5206\u9875\u67E5\u8BE2\u8FD4\u56DE\u7ED3\u679C\u5904\u7406</li><li>\u91CD\u7F6E\u67E5\u8BE2</li><li>\u5B57\u5178\u7FFB\u8BD1\u76F8\u5173\u65B9\u6CD5</li></ul></li></ul><p>\u5F15\u5165\u65B9\u6CD5 <code>import { TableMixin } from &#39;@/mixins/TableMixin&#39;</code></p><h2 id="formmixin"><a class="header-anchor" href="#formmixin" aria-hidden="true">#</a> FormMixin</h2><p>\u4E3B\u8981\u7528\u5728\u586B\u5199\u8868\u5355\u7684\u573A\u5408</p><ul><li>\u9ED8\u8BA4\u5F15\u5165\u4E86\u5B57\u5178\u7FFB\u8BD1\u5DE5\u5177\u7C7B</li><li>\u5728data()\u4E2D\u5F15\u5165\u4E86\u5E38\u7528\u7684\u53D8\u91CF</li><li>\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u5E38\u7528\u65B9\u6CD5\u7B49 <ul><li>\u521D\u59CB\u5316</li><li>\u5224\u65AD\u8131\u654F\u53C2\u6570\u662F\u5426\u88AB\u4FEE\u6539\u7684\u65B9\u6CD5</li><li>\u5B57\u5178\u7FFB\u8BD1\u76F8\u5173\u65B9\u6CD5</li></ul></li></ul><p>\u5F15\u5165\u65B9\u6CD5 <code>import { TableMixin } from &#39;@/mixins/FormMixin&#39;</code></p><h2 id="\u5B57\u5178\u7FFB\u8BD1\u65B9\u6CD5\u4F7F\u7528"><a class="header-anchor" href="#\u5B57\u5178\u7FFB\u8BD1\u65B9\u6CD5\u4F7F\u7528" aria-hidden="true">#</a> \u5B57\u5178\u7FFB\u8BD1\u65B9\u6CD5\u4F7F\u7528</h2><h3 id="\u5B57\u5178\u9879\u683C\u5F0F"><a class="header-anchor" href="#\u5B57\u5178\u9879\u683C\u5F0F" aria-hidden="true">#</a> \u5B57\u5178\u9879\u683C\u5F0F</h3><div class="language-json"><pre><code><span class="token punctuation">{</span>
  name<span class="token operator">:</span>&#39;&#39;<span class="token punctuation">,</span>
  code<span class="token operator">:</span>&#39;&#39;
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u83B7\u53D6\u5B57\u5178\u9879\u5217\u8868"><a class="header-anchor" href="#\u83B7\u53D6\u5B57\u5178\u9879\u5217\u8868" aria-hidden="true">#</a> \u83B7\u53D6\u5B57\u5178\u9879\u5217\u8868</h3><div class="language-javascript"><pre><code><span class="token comment">// \u5F02\u6B65\u65B9\u5F0F (code\u503C\u4E3A\u6570\u5B57)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDictItemsByNumberAsync</span><span class="token punctuation">(</span><span class="token string">&#39;Political&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>politicalList <span class="token operator">=</span> res
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u540C\u6B65\u65B9\u5F0F (code\u503C\u4E3A\u6570\u5B57)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>politicalList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDictItemsByNumber</span><span class="token punctuation">(</span><span class="token string">&#39;Political&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u5B57\u5178\u4E0B\u62C9\u6846\u6570\u636E\u5217\u8868 label/value</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDictDropDownAsync</span><span class="token punctuation">(</span><span class="token string">&#39;Political&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>politicalList <span class="token operator">=</span> res
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5B57\u5178\u9879\u7FFB\u8BD1"><a class="header-anchor" href="#\u5B57\u5178\u9879\u7FFB\u8BD1" aria-hidden="true">#</a> \u5B57\u5178\u9879\u7FFB\u8BD1</h3><div class="language-javascript"><pre><code><span class="token comment">// \u7FFB\u8BD1\u5B57\u5178\u9879</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dictConvert</span><span class="token punctuation">(</span><span class="token string">&#39;Political&#39;</span><span class="token punctuation">,</span>form<span class="token punctuation">.</span>political<span class="token punctuation">)</span>
</code></pre></div>`,15),o=[p];function i(l,c,r,u,k,d){return s(),a("div",null,o)}var _=n(e,[["render",i]]);export{m as __pageData,_ as default};
