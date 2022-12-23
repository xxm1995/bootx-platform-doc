import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.c921523c.js";const g='{"title":"TdEngine","description":"","frontmatter":{},"headers":[{"level":2,"title":"TdEngine","slug":"tdengine"}],"relativePath":"doc/overview/config/\u76F8\u5173docker-compose.md","lastUpdated":1671720200244}',e={},p=t(`__VP_STATIC_START__<h2 id="tdengine"><a class="header-anchor" href="#tdengine" aria-hidden="true">#</a> TdEngine</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">TDengine</span><span class="token punctuation">:</span> 
    <span class="token key atrule">image</span><span class="token punctuation">:</span> tdengine/tdengine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tdengine
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> tdengine
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6030<span class="token punctuation">:</span><span class="token number">6030</span>
      <span class="token punctuation">-</span> 6035<span class="token punctuation">:</span><span class="token number">6035</span>
      <span class="token punctuation">-</span> 6041<span class="token punctuation">:</span><span class="token number">6041</span>
      <span class="token punctuation">-</span> 6030<span class="token punctuation">-</span>6040<span class="token punctuation">:</span>6030<span class="token punctuation">-</span>6040/udp
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/volume/tdengine/lib<span class="token punctuation">:</span>/var/lib/taos<span class="token punctuation">:</span>Z
      <span class="token punctuation">-</span> /data/volume/tdengine/log<span class="token punctuation">:</span>/var/log/taos<span class="token punctuation">:</span>Z
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div>__VP_STATIC_END__`,2),o=[p];function c(u,l,i,k,r,d){return s(),a("div",null,o)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};
