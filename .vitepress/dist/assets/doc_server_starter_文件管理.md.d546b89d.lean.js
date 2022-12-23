import{_ as a,f as n,e as s,N as e}from"./plugin-vue_export-helper.c921523c.js";const h='{"title":"\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"doc/server/starter/\u6587\u4EF6\u7BA1\u7406.md","lastUpdated":1671721717487}',t={},l=e(`__VP_STATIC_START__<h2 id="\u529F\u80FD"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><ul><li>[x] \u670D\u52A1\u5668\u672C\u5730\u6587\u4EF6\u5B58\u50A8</li><li>[x] MongoDB\u5B58\u50A8</li><li>[ ] Minio</li><li>[ ] \u963F\u91CC\u4E91OSS</li><li>[ ] \u817E\u8BAFCOS</li></ul><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u89C1 <code>FileUploadService</code> \u5BF9\u8C61</p><h2 id="\u914D\u7F6E\u6587\u4EF6"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml"><pre><code><span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
<span class="token key atrule">bootx</span><span class="token punctuation">:</span>
    <span class="token key atrule">file-upload</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6587\u4EF6\u5B58\u50A8\u65B9\u5F0F</span>
      <span class="token key atrule">upload-type</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5B58\u50A8\u6876</span>
        <span class="token key atrule">bucket</span><span class="token punctuation">:</span> fs
      <span class="token key atrule">local</span><span class="token punctuation">:</span>
        <span class="token comment"># \u672C\u5730\u5B58\u50A8\u8DEF\u5F84</span>
        <span class="token key atrule">local-path</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6587\u4EF6\u670D\u52A1\u5668\u5730\u5740</span>
      <span class="token key atrule">server-url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">8080</span>

</code></pre></div>__VP_STATIC_END__`,6),p=[l];function o(c,r,i,u,k,d){return s(),n("div",null,p)}var m=a(t,[["render",o]]);export{h as __pageData,m as default};
