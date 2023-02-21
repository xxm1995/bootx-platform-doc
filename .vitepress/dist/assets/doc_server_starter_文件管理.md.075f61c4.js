import{_ as a,c as n,o as e,a as s}from"./app.670118ea.js";const m='{"title":"\u6587\u4EF6\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u672C\u5730\u5B58\u50A8","slug":"\u672C\u5730\u5B58\u50A8"},{"level":3,"title":"Mongo\u5B58\u50A8","slug":"mongo\u5B58\u50A8"},{"level":3,"title":"minio\u5B58\u50A8","slug":"minio\u5B58\u50A8"},{"level":3,"title":"\u963F\u91CC\u4E91oss\u5B58\u50A8","slug":"\u963F\u91CC\u4E91oss\u5B58\u50A8"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"doc/server/starter/\u6587\u4EF6\u7BA1\u7406.md"}',t={},o=s(`<h1 id="\u6587\u4EF6\u7BA1\u7406" tabindex="-1">\u6587\u4EF6\u7BA1\u7406 <a class="header-anchor" href="#\u6587\u4EF6\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>[x] \u670D\u52A1\u5668\u672C\u5730\u6587\u4EF6\u5B58\u50A8</li><li>[x] MongoDB\u5B58\u50A8</li><li>[x] Minio</li><li>[ ] \u963F\u91CC\u4E91OSS</li><li>[ ] \u817E\u8BAFCOS</li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u89C1 <code>FileUploadService</code>\u3001<code>UploadService</code></p></blockquote><h3 id="\u672C\u5730\u5B58\u50A8" tabindex="-1">\u672C\u5730\u5B58\u50A8 <a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a></h3><p>\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u5E94\u7528\u6240\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u9700\u8981\u914D\u7F6E\u5B58\u50A8\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A<code>/data/file/</code></p><h3 id="mongo\u5B58\u50A8" tabindex="-1">Mongo\u5B58\u50A8 <a class="header-anchor" href="#mongo\u5B58\u50A8" aria-hidden="true">#</a></h3><p>\u5C06\u4E0A\u4F20\u7684\u6587\u4EF6\u5B58\u50A8\u5230<code>MongoDB</code>\u4E2D\uFF0C\u57FA\u4E8E<code>GridFsTemplate</code>\u8FDB\u884C\u5F00\u53D1\uFF0C\u9700\u8981\u914D\u7F6E<code>bucket</code>\u5B58\u50A8\u6876\u53C2\u6570</p><h3 id="minio\u5B58\u50A8" tabindex="-1">minio\u5B58\u50A8 <a class="header-anchor" href="#minio\u5B58\u50A8" aria-hidden="true">#</a></h3><p>\u5C06\u6587\u4EF6\u4E0A\u4F20\u5E76\u5B58\u50A8\u5230<code>Minio</code>\u4E2D\uFF0C\u9700\u8981\u914D\u7F6E<code>bucket</code>\u5B58\u50A8\u6876\u53C2\u6570</p><h3 id="\u963F\u91CC\u4E91oss\u5B58\u50A8" tabindex="-1">\u963F\u91CC\u4E91oss\u5B58\u50A8 <a class="header-anchor" href="#\u963F\u91CC\u4E91oss\u5B58\u50A8" aria-hidden="true">#</a></h3><blockquote><p>\u5F85\u8865\u5145</p></blockquote><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-yaml"><pre><code><span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
<span class="token key atrule">bootx.file-upload</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6587\u4EF6\u670D\u52A1\u5668\u5730\u5740</span>
  <span class="token key atrule">server-url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">9999</span>
  <span class="token comment"># \u6587\u4EF6\u5B58\u50A8\u65B9\u5F0F</span>
  <span class="token key atrule">upload-type</span><span class="token punctuation">:</span> LOCAL
  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5B58\u50A8\u6876</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> fs
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token comment"># \u672C\u5730\u5B58\u50A8\u8DEF\u5F84</span>
    <span class="token key atrule">local-path</span><span class="token punctuation">:</span> /data/file
  <span class="token key atrule">minio</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5730\u5740</span>
    <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">9000</span>
    <span class="token comment"># \u8D26\u53F7</span>
    <span class="token key atrule">access-key</span><span class="token punctuation">:</span> root
    <span class="token comment"># \u5BC6\u7801</span>
    <span class="token key atrule">access-secret</span><span class="token punctuation">:</span> password
    <span class="token comment"># \u5B58\u50A8\u6876 \u9700\u8981\u81F3\u5C11\u4E09\u4F4D</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> bootx
</code></pre></div>`,15),c=[o];function l(p,i,r,d,u,k){return e(),n("div",null,c)}var _=a(t,[["render",l]]);export{m as __pageData,_ as default};
