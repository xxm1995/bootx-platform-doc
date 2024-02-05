import{_ as s,o as a,c as e,X as n}from"./chunks/framework.6909765d.js";const h=JSON.parse('{"title":"缓存模块","description":"","frontmatter":{},"headers":[],"relativePath":"platform/server/common/缓存模块.md","filePath":"platform/server/common/缓存模块.md"}'),o={name:"platform/server/common/缓存模块.md"},l=n(`<h1 id="缓存模块" tabindex="-1">缓存模块 <a class="header-anchor" href="#缓存模块">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>针对Spring Cache的Redis实现进行了增强配置和优化</p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能">¶</a></h2><ul><li>配置<code>Redis</code>缓存所需要的序列化方式和缓存管理器，可配置是否保留数据的类型，默认为<code>true</code>，保证如泛型数据的反序列化不会出问题，不保留数据类型则会节约存储空间</li><li>优化存储机制，缓存值为空时不报错，正常进行存储</li><li>扩展支持无侵入的缓存过期时间配置，通过<code>yaml</code>中可以进行配置，过期时间为秒</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置">¶</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">bootx.common.cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 序列化时是否保留数据类型数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">retain-type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 默认超时时间 (秒)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">default-ttl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 默认超时时间, kv格式, key为缓存名称, value为过期时间(秒)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">keys-ttl</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[dept:tree]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[user:tree]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6000</span></span></code></pre></div><h2 id="关键类" tabindex="-1">关键类 <a class="header-anchor" href="#关键类">¶</a></h2><ul><li><code>BootxRedisCache</code> 重写<code>RedisCache</code>实现, 缓存值为空不报错</li><li><code>BootxRedisCacheManager</code> 重写<code>Redis</code>缓存管理</li><li><code>CachingConfiguration</code> 缓存自动配置，配置了缓存管理器、Key名称生成和序列化等相关配置</li><li><code>CachingProperties</code> 缓存参数配置类，主要用于配置超时时间</li></ul>`,8),p=[l];function t(c,r,i,d,y,C){return a(),e("div",null,p)}const F=s(o,[["render",t]]);export{h as __pageData,F as default};
