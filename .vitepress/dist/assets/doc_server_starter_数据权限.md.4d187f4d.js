import{_ as n,c as a,o as s,a as t}from"./app.206820c1.js";const g='{"title":"\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E"},{"level":3,"title":"\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6","slug":"\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6"},{"level":3,"title":"\u654F\u611F\u6570\u636E\u8131\u654F","slug":"\u654F\u611F\u6570\u636E\u8131\u654F"},{"level":3,"title":"\u6570\u636E\u8303\u56F4\u6743\u9650","slug":"\u6570\u636E\u8303\u56F4\u6743\u9650"}],"relativePath":"doc/server/starter/\u6570\u636E\u6743\u9650.md"}',p={},o=t(`<h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u6570\u636E\u5B57\u6BB5\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6\uFF0C\u5728\u6570\u636E\u5E93\u4E2D\u5B58\u50A8AES\u52A0\u5BC6\u540E\u7684\u5185\u5BB9\uFF0C\u9884\u9632\u4FE1\u606F\u88AB\u8131\u88E4\u540E\u5BFC\u81F4\u4FE1\u606F\u6CC4\u9732</li><li>\u8FD4\u56DE\u6570\u636E\u4FE1\u606F\u654F\u611F\u4FE1\u606F\u8131\u654F\uFF0C\u540E\u7AEF\u4FE1\u606F\u8FD4\u56DE\u7ED9\u524D\u7AEF\u65F6\uFF0C\u5BF9\u4E00\u4E9B\u654F\u611F\u4FE1\u606F\u8FDB\u884C\u8131\u654F\uFF0C\u5982\u5BC6\u7801\u3001\u79D8\u94A5\u7B49\uFF0C\u9632\u6B62\u4FDD\u5BC6\u4FE1\u606F\u88AB\u6D41\u51FA\uFF0C\u53EF\u4EE5\u7ED3\u5408\u6570\u636E\u5B57\u6BB5\u52A0\u5BC6\u4E00\u8D77\u4F7F\u7528</li><li>\u6570\u636E\u8303\u56F4\u6743\u9650\u63A7\u5236\uFF0C\u901A\u8FC7\u5728\u7EBF\u914D\u7F6E\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7684\u7528\u6237\u53EF\u4EE5\u67E5\u8BE2\u5230\u4E0D\u540C\u8303\u56F4\u7684\u6570\u636E\uFF0C\u66F4\u597D\u7684\u5B9E\u73B0\u6570\u636E\u5206\u7EA7\u7BA1\u7406</li><li>\u67E5\u8BE2\u5B57\u6BB5\u6743\u9650\u63A7\u5236\uFF0C\u901A\u8FC7\u5728\u7EBF\u914D\u7F6E\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7684\u7528\u6237\u67E5\u8BE2\u5230\u4E0D\u540C\u7684\u6570\u636E\u5B57\u6BB5\uFF0C\u66F4\u597D\u7684\u5B9E\u73B0\u6570\u636E\u5206\u7EA7\u7BA1\u7406</li></ul><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><h3 id="\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6" tabindex="-1">\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6 <a class="header-anchor" href="#\u5B57\u6BB5\u52A0\u5BC6\u89E3\u5BC6" aria-hidden="true">#</a></h3><p><strong>\u5B9E\u4F53\u7C7B\u914D\u7F6E</strong> \u5728\u6570\u636E\u5E93\u8868\u5BF9\u5E94\u7684\u7C7B\u9700\u8981\u52A0\u5BC6\u7684\u5B57\u6BB5\uFF0C\u52A0\u4E0A<code>EncryptionField</code>\u6CE8\u89E3\uFF0C\u8BE5\u5B57\u6BB5\u5728\u8FDB\u884C\u4FDD\u5B58\u6216\u66F4\u65B0\u65F6\u81EA\u52A8\u5BF9\u8BE5\u5B57\u6BB5\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5728\u8BFB\u53D6\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u89E3\u5BC6</p><blockquote><p>\u53EA\u6709\u901A\u8FC7\u901A\u8FC7MyBatis-Plus\u5BF9\u6574\u4E2A\u5BF9\u8C61\u8FDB\u884C\u4FDD\u5B58\u6216\u66F4\u65B0\u65F6\u624D\u751F\u6548\uFF0C\u901A\u8FC7Wrapper\u8FDB\u884C\u5C40\u90E8\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u5B57\u6BB5\u52A0\u5BC6\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u8FDB\u884C\u52A0\u5BC6\u3002 \u89E3\u5BC6\u65F6\u6620\u5C04\u5BF9\u8C61\u7C7B\u9700\u8981\u662F\u5B57\u6BB5\u52A0<code>EncryptionField</code>\u7684\u7C7B\uFF0C\u5426\u5219\u65E0\u6CD5\u8BC6\u522B\u5230\u54EA\u4E2A\u5B57\u6BB5\u662F\u8981\u8FDB\u884C\u89E3\u5BC6\u7684\u3002 \u76EE\u524D\u652F\u6301String\u7C7B\u578B\u7684\u5B57\u6BB5\u8FDB\u884C\u52A0\u89E3\u5BC6</p></blockquote><div class="language-java"><pre><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;pc_alipay_config&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AlipayConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">/** \u79C1\u94A5 \u5B57\u6BB5\u8FDB\u884C\u52A0\u5BC6\u4FDD\u5B58 */</span>
    <span class="token annotation punctuation">@EncryptionField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> privateKey<span class="token punctuation">;</span>

    <span class="token comment">/** \u5E94\u7528\u516C\u94A5\u8BC1\u4E66 */</span>
    <span class="token annotation punctuation">@BigField</span>
    <span class="token annotation punctuation">@EncryptionField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> appCert<span class="token punctuation">;</span>

    <span class="token comment">/** \u652F\u4ED8\u5B9D\u516C\u94A5\u8BC1\u4E66 */</span>
    <span class="token annotation punctuation">@BigField</span>
    <span class="token annotation punctuation">@EncryptionField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> alipayCert<span class="token punctuation">;</span>

    <span class="token comment">/** \u652F\u4ED8\u5B9DCA\u6839\u8BC1\u4E66 */</span>
    <span class="token annotation punctuation">@BigField</span>
    <span class="token annotation punctuation">@EncryptionField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> alipayRootCert<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u624B\u52A8\u52A0\u89E3\u5BC6</strong></p><div class="language-java"><pre><code><span class="token comment">/**
 * \u52A0\u5BC6
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">encryptValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fieldValue <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// fieldDecryptKey AES\u79D8\u94A5, </span>
        <span class="token class-name">AES</span> aes <span class="token operator">=</span> <span class="token class-name">SecureUtil</span><span class="token punctuation">.</span><span class="token function">aes</span><span class="token punctuation">(</span>fieldDecryptKey<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> aes<span class="token punctuation">.</span><span class="token function">encryptBase64</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fieldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u89E3\u5BC6
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">decryptValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fieldValue <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">AES</span> aes <span class="token operator">=</span> <span class="token class-name">SecureUtil</span><span class="token punctuation">.</span><span class="token function">aes</span><span class="token punctuation">(</span>fieldDecryptKey<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>aes<span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>fieldValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fieldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u76F8\u5173\u914D\u7F6E</strong></p><div class="language-yaml"><pre><code><span class="token key atrule">bootx</span><span class="token punctuation">:</span>
  <span class="token key atrule">starter</span><span class="token punctuation">:</span>
    <span class="token key atrule">data-perm</span><span class="token punctuation">:</span>
      <span class="token comment"># \u5B57\u6BB5\u52A0\u5BC6AES\u79D8\u94A5</span>
      <span class="token key atrule">field-decrypt-key</span><span class="token punctuation">:</span> \u79D8\u94A5
</code></pre></div><h3 id="\u654F\u611F\u6570\u636E\u8131\u654F" tabindex="-1">\u654F\u611F\u6570\u636E\u8131\u654F <a class="header-anchor" href="#\u654F\u611F\u6570\u636E\u8131\u654F" aria-hidden="true">#</a></h3><pre><code>\u5728\u8981\u8FD4\u56DE\u7ED9\u524D\u7AEF\u5BF9\u8C61\u7C7B\u4E2D\u7684\u5B57\u6BB5\u4E0A\uFF0C\u6DFB\u52A0\u4E0A\`SensitiveInfo\`\u4E3B\u952E\uFF0C\u5728\u6570\u636E\u8FD4\u56DE\u524D\u7AEF\u65F6\uFF0C\u5B57\u6BB5\u6839\u636E\u8BBE\u5B9A\u7684\u89C4\u5219\uFF0C\u5BF9\u5B57\u6BB5\u503C\u8FDB\u884C\u8131\u654F
</code></pre><blockquote><p>\u8FD4\u56DE\u503C\u5E8F\u5217\u5316\u65B9\u5F0F\u8981\u4E3AJackson\uFF0C\u5426\u5219\u4F1A\u4E0D\u751F\u6548\u3002\u76EE\u524D\u652F\u6301String\u7C7B\u578B\u7684\u5B57\u6BB5\u8FDB\u884C\u8131\u654F</p></blockquote><h4 id="\u5B9E\u4F53\u7C7B\u914D\u7F6E" tabindex="-1">\u5B9E\u4F53\u7C7B\u914D\u7F6E <a class="header-anchor" href="#\u5B9E\u4F53\u7C7B\u914D\u7F6E" aria-hidden="true">#</a></h4><div class="language-java"><pre><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u4FE1\u606F&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfoDto</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@SensitiveInfo</span><span class="token punctuation">(</span><span class="token class-name">SensitiveType</span><span class="token punctuation">.</span><span class="token constant">PASSWORD</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u624B\u673A\u53F7&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@SensitiveInfo</span><span class="token punctuation">(</span><span class="token class-name">SensitiveType</span><span class="token punctuation">.</span><span class="token constant">MOBILE_PHONE</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u90AE\u7BB1&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@SensitiveInfo</span><span class="token punctuation">(</span><span class="token class-name">SensitiveType</span><span class="token punctuation">.</span><span class="token constant">EMAIL</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6CE8\u89E3encryptionfield\u914D\u7F6E" tabindex="-1">\u6CE8\u89E3<code>EncryptionField</code>\u914D\u7F6E <a class="header-anchor" href="#\u6CE8\u89E3encryptionfield\u914D\u7F6E" aria-hidden="true">#</a></h4><ul><li><code>value</code> \u654F\u611F\u4FE1\u606F\u7C7B\u578B\uFF0C\u53C2\u6570\u4E3A<code>SensitiveType</code>\u654F\u611F\u4FE1\u606F\u8131\u654F\u7C7B\u578B\u679A\u4E3E\uFF0C\u5177\u4F53\u7C7B\u578B\u5982\u4E0B <ul><li><code>CHINESE_NAME</code> \u4E2D\u6587\u540D\uFF0C\u53EA\u663E\u793A\u7B2C\u4E00\u4E2A\u6C49\u5B57\uFF0C\u5176\u4ED6\u9690\u85CF\u4E3A2\u4E2A\u661F\u53F7\uFF0C\u6BD4\u5982\uFF1A\u674E**</li><li><code>USER_ID</code> \u7528\u6237ID\uFF0CuserId \u7EDF\u4E00\u66FF\u6362\u4E3A 0L\uFF0C</li><li><code>PASSWORD</code> \u5BC6\u7801\uFF0C\u5BC6\u7801\u7684\u5168\u90E8\u5B57\u7B26\u90FD\u7528*\u4EE3\u66FF\uFF0C\u6BD4\u5982\uFF1A<code>******</code></li><li><code>ID_CARD</code> \u8EAB\u4EFD\u8BC1\u53F7\uFF0C\u53EA\u663E\u793A\u524D\u516D\u4F4D\u548C\u540E\u4E24\u4F4D\uFF0C\u5982<code>370112**********1X</code></li><li><code>FIXED_PHONE</code> \u5EA7\u673A\u53F7\uFF0C\u663E\u793A\u524D\u56DB\u4F4D\uFF0C\u540E\u4E24\u4F4D</li><li><code>MOBILE_PHONE</code> \u624B\u673A\u53F7\uFF0C\u524D\u4E09\u4F4D\uFF0C\u540E4\u4F4D\uFF0C\u5176\u4ED6\u9690\u85CF\uFF0C<code>\u6BD4\u5982135****2210</code></li><li><code>IP</code> IP\u5730\u5740\uFF0C\u53EA\u663E\u793A\u524D\u4E24\u6BB5ip\uFF0C<code>\u5982192.168.*.*</code></li><li><code>ADDRESS</code> \u5730\u5740\uFF0C\u53EA\u663E\u793A\u5230\u5730\u533A(\u524D6\u4F4D)\uFF0C\u4E0D\u663E\u793A\u8BE6\u7EC6\u5730\u5740\uFF0C\u6BD4\u5982\uFF1A<code>\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A****</code></li><li><code>EMAIL</code> \u7535\u5B50\u90AE\u4EF6\u5730\u5740\uFF0C\u90AE\u7BB1\u524D\u7F00\u4EC5\u663E\u793A\u7B2C\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u524D\u7F00\u5176\u4ED6\u9690\u85CF\uFF0C\u7528\u661F\u53F7\u4EE3\u66FF\uFF0C@\u53CA\u540E\u9762\u7684\u5730\u5740\u663E\u793A\uFF0C\u6BD4\u5982\uFF1A<code>d**@foxmail.com</code></li><li><code>BANK_CARD</code> \u4E2D\u56FD\u5927\u9646\u8F66\u724C\uFF0C\u8F66\u724C\u4E2D\u95F4\u7528*\u4EE3\u66FF\uFF0C\u5982<code>\u9C81A8***0</code></li><li><code>BANK_CARD</code> \u94F6\u884C\u5361\uFF0C\u5361\u53F7\u8131\u654F : <code>1101 **** **** **** 3256</code></li><li><code>CNAPS_CODE</code> \u516C\u53F8\u5F00\u6237\u94F6\u884C\u8054\u53F7\uFF0C\u4E2D\u95F4\u7528*\u53F7\u4EE3\u66FF</li><li><code>OTHER</code> \u5176\u4ED6\uFF0C\u901A\u8FC7<code>front</code>\u548C<code>end</code>\u5C5E\u6027\u6765\u51B3\u5B9A\u4FDD\u7559\u524D\u9762\u6216\u540E\u9762\u51E0\u4E2A\u5B57\u7B26\u6B63\u5E38\u663E\u793A</li></ul></li><li><code>front</code> \u4FDD\u7559\uFF1A\u524D\u9762\u7684front\u4F4D\u6570\uFF1B\u4ECE1\u5F00\u59CB\uFF0C\u654F\u611F\u7C7B\u578B\u4E3A\u5176\u4ED6\u65F6\u53EF\u7528</li><li><code>end</code> \u4FDD\u7559\uFF1A\u540E\u9762\u7684end\u4F4D\u6570\uFF1B\u4ECE1\u5F00\u59CB\uFF0C\u654F\u611F\u7C7B\u578B\u4E3A\u5176\u4ED6\u65F6\u53EF\u7528</li></ul><h4 id="\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09" tabindex="-1">\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09 <a class="header-anchor" href="#\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09" aria-hidden="true">#</a></h4><pre><code>\u5F53\u88AB\u8131\u654F\u7684\u5B57\u6BB5\u6570\u636E\u8FD4\u56DE\u524D\u7AEF\u540E\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u70B9\u51FB\u4FDD\u5B58\u4F1A\u5C06\u8131\u654F\u540E\u7684\u6570\u636E\u539F\u6837\u56DE\u4F20\u56DE\u540E\u53F0\uFF0C\u5BFC\u81F4\u52A0\u5BC6\u5B57\u6BB5\u88AB\u66F4\u65B0\uFF0C\u4EA7\u751F\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u9488\u5BF9\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u63D0\u4F9B\u4E00\u79CD\u89E3\u51B3\u601D\u8DEF\uFF0C\u4EE3\u7801\u5982\u4E0B
</code></pre><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-modal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E3B\u952E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showable<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7F16\u53F7<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input-password</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.password<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E3A\u7A7A\u4E0D\u4FEE\u6539\u5BC6\u7801<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showable<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
import { FormMixin } from &#39;@/mixins/FormMixin&#39;
    
export default {
  name: &#39;MailConfigEdit&#39;,
  mixins: [FormMixin],
  data () {
    return {
      // \u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u7684\u539F\u59CB\u6570\u636E\u4FE1\u606F
      rawForm: {},
      form: {
        code: &#39;&#39;,
        username: &#39;&#39;
      },
    }
  },
  computed: {
    diff () {
      return {
        // \u76D1\u89C6\u52A0\u5BC6\u5B57\u6BB5\u662F\u5426\u53D1\u751F\u4E86\u53D8\u52A8
        password: this.diffForm(this.form.password, this.rawForm.password)
      }
    }
  },
  methods: {
    // \u53EF\u4EE5\u89C6\u4E3A\u8981\u8FDB\u884C\u7F16\u8F91\u65F6\uFF0C\u5411\u540E\u7AEF\u6570\u636E\u83B7\u53D6\u6570\u636E
    edit (id, type) {
        get(id).then(res =&gt; {
          this.form = res.data
          // \u4FDD\u5B58\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u539F\u59CB\u4FE1\u606F
          this.rawForm = { ...res.data }
          this.confirmLoading = false
        })
    },
    handleOk () {
      this.$refs.form.validate(async valid =&gt; {
        if (valid) {
          // \u8FDB\u884C\u66F4\u65B0\u65F6\uFF0C\u4F7F\u7528\u76D1\u89C6\u7684\u52A0\u5BC6\u6570\u636E\u6765\u66FF\u6362\u8868\u5355\u4E2D\u7684\u6570\u636E\uFF0C\uFF08\u6570\u636E\u4E3Anull\u65F6\uFF0C\u540E\u7AEF\u4E0D\u8FDB\u884C\u4FEE\u6539\uFF09
          await update({
            ...this.form,
            ...this.diff
          })
        } else {
          return false
        }
      })
    },
    // \u5224\u65AD\u8131\u654F\u53C2\u6570\u662F\u5426\u88AB\u4FEE\u6539\u7684\u53C2\u6570, \u672A\u4FEE\u6539\u5219\u8FD4\u56DE\u7A7A\u503C \uFF08FormMixin\u4E2D\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF09
    diffForm (o1, o2) {
      return o1 === o2 ? null : o1
    }
  }
}
</code></pre></div><h3 id="\u6570\u636E\u8303\u56F4\u6743\u9650" tabindex="-1">\u6570\u636E\u8303\u56F4\u6743\u9650 <a class="header-anchor" href="#\u6570\u636E\u8303\u56F4\u6743\u9650" aria-hidden="true">#</a></h3><h4 id="\u6570\u636E\u8303\u56F4\u6743\u9650\u7C7B\u578B" tabindex="-1">\u6570\u636E\u8303\u56F4\u6743\u9650\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u8303\u56F4\u6743\u9650\u7C7B\u578B" aria-hidden="true">#</a></h4><ul><li>SELF \u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u7684\u6570\u636E</li><li>USER_SCOPE \u53EF\u4EE5\u67E5\u770B\u6307\u5B9A\u7528\u6237\u7684\u6570\u636E</li><li>DEPT_SCOPE \u53EF\u4EE5\u67E5\u770B\u6307\u5B9A\u90E8\u95E8\u7684\u6570\u636E</li><li>DEPT_AND_USER_SCOPE \u53EF\u4EE5\u67E5\u770B\u6307\u5B9A\u90E8\u95E8\u548C\u6307\u5B9A\u7528\u6237\u7684\u6570\u636E</li><li>ALL_SCOPE \u53EF\u4EE5\u67E5\u8BE2\u5168\u90E8\u6570\u636E</li><li>BELONG_DEPT \u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u90E8\u95E8\u4EBA\u5458\u7684\u6570\u636E</li><li>BELONG_DEPT_AND_SUB \u53EF\u4EE5\u67E5\u770B\u81EA\u5DF1\u90E8\u95E8\u53CA\u4E0B\u7EA7\u90E8\u95E8\u7684\u6570\u636E</li></ul><blockquote><p>\u4E00\u4E2A\u7528\u6237\u53EA\u80FD\u5206\u914D\u4E00\u79CD\u6570\u636E\u6743\u9650\uFF0C\u4E0D\u652F\u6301\u62E5\u6709\u591A\u79CD\uFF0C\u5982\u679C\u7528\u6237\u672A\u88AB\u5206\u914D\u6570\u636E\u6743\u9650\uFF0C\u9ED8\u8BA4\u662FSELF \u7EA7\u522B\uFF0C\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u7684\u6570\u636E\u3002</p></blockquote><h4 id="\u4F7F\u7528\u8BF4\u660E-1" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E-1" aria-hidden="true">#</a></h4><p>\u5728\u8981\u8FDB\u884C\u7528\u6237\u6570\u636E\u8303\u56F4\u6743\u9650\u63A7\u5236\u7684\u65B9\u6CD5\u4E0A\u6DFB\u52A0 <code>Permission</code> \u6CE8\u89E3\uFF0C\u8BE5\u65B9\u6CD5\u4EE5\u53CA\u76F4\u63A5\u548C\u7B80\u4ECB\u8C03\u7528\u7684\u65B9\u6CD5\u90FD\u5C06\u8FDB\u884C\u6570\u636E\u8303\u56F4\u6743\u9650\u62E6\u622A\uFF0C\u5982\u679C\u88AB\u5D4C\u5957\u7684\u67D0\u4E9B\u65B9\u6CD5\u4E0D\u9700\u8981\u8FDB\u884C\u6743\u9650\u63A7\u5236\uFF0C\u53EF\u4EE5\u6DFB\u52A0 <code>NestedPermission</code> \u6CE8\u89E3\u5230\u65B9\u6CD5\u6216\u7C7B\u4E0A\u4E0A\u6765\u6392\u9664\u6743\u9650\u63A7\u5236\u3002</p><blockquote><p>\u53EF\u4EE5\u6DFB\u52A0\u5230\u7C7B\u6216\u8005\u65B9\u6CD5\u4E0A\uFF0C\u6DFB\u52A0\u5230\u7C7B\u65F6\u5BF9\u5F53\u524D\u7C7B\u6240\u6709\u65B9\u6CD5\u751F\u6548\uFF0C\u5982\u679C\u7C7B\u548C\u65B9\u6CD5\u4E2D\u90FD\u8FDB\u884C\u4E86\u6DFB\u52A0\uFF0C\u4EE5\u65B9\u6CD5\u4E0A\u7684\u4E3A\u51C6</p></blockquote>`,28),e=[o];function c(l,u,i,k,r,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
