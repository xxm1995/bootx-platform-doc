import{_ as s,c as a,o as i,V as n}from"./chunks/framework.TiLr8DIm.js";const g=JSON.parse('{"title":"文件管理","description":"","frontmatter":{},"headers":[],"relativePath":"platform/server/starter/文件管理.md","filePath":"platform/server/starter/文件管理.md","lastUpdated":1692627846000}'),e={name:"platform/server/starter/文件管理.md"},l=n(`<h1 id="文件管理" tabindex="-1">文件管理 <a class="header-anchor" href="#文件管理">¶</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果在配置文件、系统参数都配置的文件服务地址，系统中的读取顺序 系统参数 &gt; 配置文件 &gt; 默认配置(<a href="http://127.0.0.1:9999" target="_blank" rel="noreferrer">http://127.0.0.1:9999</a>)</p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能">¶</a></h2><ul><li>[x] 数据库存储</li><li>[x] 服务器本地文件存储</li><li>[x] MongoDB存储</li><li>[x] Minio</li><li>[ ] 阿里云OSS</li><li>[ ] 腾讯COS</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用">¶</a></h2><blockquote><p>见 <code>FileUploadService</code>、<code>UploadService</code></p></blockquote><h3 id="数据库存储" tabindex="-1">数据库存储 <a class="header-anchor" href="#数据库存储">¶</a></h3><p>将文件上传到数据库中，适合小型应用，不需要额外部署文件存储，尤其适合使用<code>Docker</code>进行部署测试的场景。</p><h3 id="本地存储" tabindex="-1">本地存储 <a class="header-anchor" href="#本地存储">¶</a></h3><p>将文件上传到应用所在服务器上，需要配置存储路径，默认为<code>/data/file/</code>，适合传统应用部署方式。</p><h3 id="mongo存储" tabindex="-1">Mongo存储 <a class="header-anchor" href="#mongo存储">¶</a></h3><p>将上传的文件存储到<code>MongoDB</code>中，基于<code>GridFsTemplate</code>进行开发，需要配置<code>bucket</code>存储桶参数</p><h3 id="minio存储" tabindex="-1">minio存储 <a class="header-anchor" href="#minio存储">¶</a></h3><p>将文件上传并存储到<code>Minio</code>中，需要配置<code>bucket</code>存储桶参数</p><h3 id="阿里云oss存储" tabindex="-1">阿里云oss存储 <a class="header-anchor" href="#阿里云oss存储">¶</a></h3><blockquote><p>待补充</p></blockquote><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置">¶</a></h3><hr><p><strong>配置文件</strong></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bootx.file-upload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 文件服务器地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  server-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://127.0.0.1:9999</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 文件存储方式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  upload-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOCAL</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mongo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 存储桶</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 本地存储路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    local-path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/data/file</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  minio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://127.0.0.1:9000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 账号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    access-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">root</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    access-secret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">password</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 存储桶 需要至少三位</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bootx</span></span></code></pre></div>`,20),h=[l];function t(p,k,r,d,o,c){return i(),a("div",null,h)}const y=s(e,[["render",t]]);export{g as __pageData,y as default};
