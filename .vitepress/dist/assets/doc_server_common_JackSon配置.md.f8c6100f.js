import{_ as n,c as s,o as a,a as t}from"./app.3a7dbe10.js";const g='{"title":"\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E"}],"relativePath":"doc/server/common/JackSon\u914D\u7F6E.md"}',o={},p=t(`<h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u63D0\u4F9B<code>JacksonUtil</code>\u5DE5\u5177\u7C7B\uFF0C\u7528\u4E8E\u9700\u8981\u8FDB\u884C<code>Jackson</code>\u89E3\u6790\u7684\u573A\u5408\uFF0C\u652F\u6301\u6CDB\u578B\u5BF9\u8C61\u7684\u53CD\u5E8F\u5217</li><li>\u63D0\u4F9B <code>java8</code> \u65F6\u95F4\u5E8F\u5217\u5316\u7C7B\uFF0C\u5728<code>Jackson</code>\u5E8F\u5217\u5316\u65F6\u5BF9<code>JDK8</code>\u65B0\u589E\u7684\u65F6\u95F4\u7C7B\u8FDB\u884C\u652F\u6301</li><li>\u63D0\u4F9B<code>Long</code> \u7C7B\u578B\u5E8F\u5217\u5316\u4E3A<code>String</code>\u7C7B\u578B\u7684\u5E8F\u5217\u5316\u7C7B\uFF0C\u5904\u7406\u524D\u7AEF\u957F\u6574\u5F62\u7CBE\u5EA6\u4E22\u5931\u95EE\u9898</li><li>\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u7684<code>ObjectMapper</code>\u5E8F\u5217\u5316\u914D\u7F6E\uFF0C\u652F\u6301<code>jdk8</code>\uFF0C<code>LongToString</code>\u7B49\u914D\u7F6E</li><li>\u63D0\u4F9B <code>typeObjectMapper</code> \u5E8F\u5217\u5316\u914D\u7F6E\uFF0C\u8BB0\u5F55\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u7C7B\u578B\u4FE1\u606F</li><li>\u63D0\u4F9B<code>Jackson2ObjectMapper</code>\u76F8\u5173\u914D\u7F6E\uFF08<code>Spring MVC</code>\u8FDB\u884C\u53C2\u6570\u548C\u7ED3\u679C\u8F6C\u6362\uFF09\uFF0C\u652F\u6301<code>jdk8</code>\uFF0C<code>LongToString</code>\u7B49\u914D\u7F6E</li></ul><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u7CFB\u7EDF\u4E2D<code>ObjectMapper</code>\u5E8F\u5217\u5316\u914D\u7F6E\u4E3B\u8981\u5206\u4E3A\u4E24\u7C7B\uFF0C\u540C\u65F6<code>yml</code>\u4E2D\u5BF9<code>JackSon</code>\u8FDB\u884C\u7684\u914D\u7F6E\u4F1A\u5931\u6548\uFF0C\u9700\u8981\u8FDB\u884C\u6CE8\u610F</p></div><table><thead><tr><th>Bean\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>objectMapper</td><td>\u9ED8\u8BA4jsckson\u5E8F\u5217\u5316\u914D\u7F6E</td></tr><tr><td>typeObjectMapper</td><td>\u5E26\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u7C7B\u578B\u4FE1\u606F\u914D\u7F6E\uFF0C\u4E3B\u8981\u7528\u5728Redis\u3001\u7F13\u5B58\u573A\u5408</td></tr></tbody></table><p>\u9ED8\u8BA4\u7684\u662F\u4E0D\u8BB0\u5F55\u5BF9\u8C61\u7C7B\u578B\u7684\u4FE1\u606F</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;machine&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;0&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rule&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token string">&quot;12.000&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;machine&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
            <span class="token number">35</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;count&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rule&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token string">&quot;35.000&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u53E6\u4E00\u79CD\u4F1A\u8BB0\u5F55\u88AB\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C\u8FD9\u79CD\u5E8F\u5217\u5316\u540E\u7684json\u5728\u53CD\u5E8F\u5217\u5316\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u53CD\u5E8F\u5217\u56DE\u539F\u59CB\u7684\u5BF9\u8C61\uFF0C<code>redis</code>\u3001<code>\u7F13\u5B58\u6A21\u5757</code>\u9ED8\u8BA4\u7684\u5E8F\u5217\u5316\u65B9\u5F0F\u5C31\u662F\u57FA\u4E8E\u8FD9\u79CD\u8FDB\u884C\u5FAE\u8C03\uFF0C\u6837\u4F8B\u5982\u4E0B</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token string">&quot;cn.dev33.satoken.session.SaSession&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AccessToken:login:session:1477997391729631232&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1641217240683&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dataMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;java.util.concurrent.ConcurrentHashMap&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;cn.bootx.common.core.entity.UserDetail&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1477997391729631232&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u7528\u6237002&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test002&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;admin&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tokenSignList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;java.util.Vector&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
          <span class="token string">&quot;cn.dev33.satoken.session.TokenSign&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d8cb26ce-53ef-46ce-85f2-b80be6e1fcc9&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;device&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pc&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;216000000&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,9),e=[p];function c(u,r,l,k,i,d){return a(),s("div",null,e)}var y=n(o,[["render",c]]);export{g as __pageData,y as default};
