import{_ as e,c as a,o as n,a as s}from"./app.032258ae.js";const k='{"title":"\u7F13\u5B58\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F13\u5B58\u6A21\u5757","slug":"\u7F13\u5B58\u6A21\u5757"},{"level":3,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u5BF9\u5E94\u7C7B","slug":"\u5BF9\u5E94\u7C7B"}],"relativePath":"doc/server/common/\u7F13\u5B58\u6A21\u5757.md"}',t={},o=s(`<h2 id="\u7F13\u5B58\u6A21\u5757" tabindex="-1">\u7F13\u5B58\u6A21\u5757 <a class="header-anchor" href="#\u7F13\u5B58\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h3><ul><li>\u914D\u7F6E<code>Redis</code>\u7F13\u5B58\u6240\u9700\u8981\u7684\u5E8F\u5217\u5316\u65B9\u5F0F\u548C\u7F13\u5B58\u7BA1\u7406\u5668\uFF0C\u8BE6\u60C5\u770B <code>CachingConfiguration</code></li><li>\u6269\u5C55<code>RedisCache</code>\u7F13\u5B58\u7BA1\u7406\u5668\uFF0C\u5B58\u50A8null\u503C\u65F6\u4E0D\u62A5\u9519\uFF0C\u89C1 <code>BootxRedisCache</code></li><li>\u6269\u5C55\u652F\u6301\u65E0\u4FB5\u5165\u7684\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\u914D\u7F6E\uFF0C\u901A\u8FC7<code>yaml</code>\u4E2D\u53EF\u4EE5\u8FDB\u884C\u914D\u7F6E\uFF0C\u8FC7\u671F\u65F6\u95F4\u4E3A\u79D2</li></ul><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-yaml"><pre><code><span class="token key atrule">bootx.common.cache</span><span class="token punctuation">:</span>
  <span class="token comment"># \u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4 (\u79D2)</span>
  <span class="token key atrule">default-ttl</span><span class="token punctuation">:</span> <span class="token number">60</span>
  <span class="token comment"># \u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4, kv\u683C\u5F0F, key\u4E3A\u7F13\u5B58, value\u4E3A\u8FC7\u671F\u65F6\u95F4(\u79D2)</span>
  <span class="token key atrule">keys-ttl</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;[dept:tree]&quot;</span> <span class="token punctuation">:</span> <span class="token number">5000</span>
    <span class="token key atrule">&quot;[user:tree]&quot;</span> <span class="token punctuation">:</span> <span class="token number">6000</span>
</code></pre></div><h3 id="\u5BF9\u5E94\u7C7B" tabindex="-1">\u5BF9\u5E94\u7C7B <a class="header-anchor" href="#\u5BF9\u5E94\u7C7B" aria-hidden="true">#</a></h3><ul><li><code>BootxRedisCache</code> \u91CD\u5199<code>RedisCache</code>\u5B9E\u73B0, \u7F13\u5B58\u503C\u4E3A\u7A7A\u4E0D\u62A5\u9519</li><li><code>BootxRedisCacheManager</code> \u91CD\u5199<code>Redis</code>\u7F13\u5B58\u7BA1\u7406</li><li><code>CachingConfiguration</code> \u7F13\u5B58\u81EA\u52A8\u914D\u7F6E\uFF0C\u914D\u7F6E\u4E86\u7F13\u5B58\u7BA1\u7406\u5668\u3001Key\u540D\u79F0\u751F\u6210\u548C\u5E8F\u5217\u5316\u7B49\u76F8\u5173\u914D\u7F6E</li><li><code>CachingProperties</code> \u7F13\u5B58\u53C2\u6570\u914D\u7F6E\u7C7B\uFF0C\u4E3B\u8981\u7528\u4E8E\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4</li></ul>`,7),c=[o];function l(i,d,r,p,u,h){return n(),a("div",null,c)}var m=e(t,[["render",l]]);export{k as __pageData,m as default};
