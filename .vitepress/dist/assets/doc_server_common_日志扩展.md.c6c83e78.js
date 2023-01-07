import{_ as n,c as s,o as a,a as t}from"./app.95c78e2d.js";const m='{"title":"\u65E5\u5FD7\u6269\u5C55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u94FE\u8DEF\u8FFD\u8E2A","slug":"\u94FE\u8DEF\u8FFD\u8E2A"},{"level":2,"title":"\u6570\u636E\u8131\u654F","slug":"\u6570\u636E\u8131\u654F"}],"relativePath":"doc/server/common/\u65E5\u5FD7\u6269\u5C55.md"}',o={},p=t(`<h1 id="\u65E5\u5FD7\u6269\u5C55" tabindex="-1">\u65E5\u5FD7\u6269\u5C55 <a class="header-anchor" href="#\u65E5\u5FD7\u6269\u5C55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u63A8\u8350\u8BF7\u5148\u9605\u8BFB\u4E00\u4E0B<a href="/doc/overview/config/\u65E5\u5FD7\u6536\u96C6.html">\u65E5\u5FD7\u6536\u96C6</a>\u7684\u6587\u6863\u3002</p></div><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u8986\u76D6\u91CD\u5199<code>SLF4J</code>\u7684<code>MDC</code>\uFF0C\u5F15\u5165TTl\uFF0C\u4F7F\u5176\u652F\u6301\u7B80\u5355\u8F7B\u91CF\u7684\u94FE\u8DEF\u8FFD\u8E2A\u529F\u80FD</li><li>\u63D0\u4F9B\u9ED8\u8BA4\u7684 <code>logback.xml</code> \u914D\u7F6E\u6587\u6863\uFF0C\u63D0\u4F9B\u9ED8\u8BA4\u7684\u63A7\u5236\u53F0\u8F93\u51FA\u548CELK\u65E5\u5FD7\u6536\u96C6\u7684\u914D\u7F6E</li><li>\u652F\u6301\u654F\u611F\u6570\u636E\u8131\u654F\u529F\u80FD\uFF0C\u89C1<code>SensitiveDataLogConverter</code></li></ul><h2 id="\u94FE\u8DEF\u8FFD\u8E2A" tabindex="-1">\u94FE\u8DEF\u8FFD\u8E2A <a class="header-anchor" href="#\u94FE\u8DEF\u8FFD\u8E2A" aria-hidden="true">#</a></h2><p>\u5F53url\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\u540E\uFF0C\u4F1A\u4EE5<code>ErrorResult</code>\u683C\u5F0F\u8FDB\u884C\u8FD4\u56DE\uFF0C\u6B64\u65F6\u4F1A\u643A\u5E26\u94FE\u8DEF\u8FFD\u8E2AID <code>trackId</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8FDB\u884C\u67E5\u8BE2\u5BF9\u5E94\u7684\u65B9\u6CD5\u94FE\uFF0C\u5177\u4F53\u683C\u5F0F\u53EF\u53C2\u8003\u4E0B\u9762\u7684\u54CD\u5E94\u53C2\u6570\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u672A\u767B\u5F55&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">10004</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;traceId&quot;</span><span class="token operator">:</span><span class="token string">&quot;npcmxitj7m4e&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6570\u636E\u8131\u654F" tabindex="-1">\u6570\u636E\u8131\u654F <a class="header-anchor" href="#\u6570\u636E\u8131\u654F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u654F\u611F\u6570\u636E\u8131\u654F\u4F7F\u7528\u9700\u8981\u5728 <code>Logback</code>xml\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u5BF9\u5E94\u7684\u8F6C\u6362\u89C4\u5219\uFF0C\u5426\u5219\u8131\u654F\u5904\u7406\u4E0D\u751F\u6548\uFF0C \u53EF\u4EE5\u901A\u8FC7\u5BFC\u5165<code>&lt;include resource=&quot;cn/bootx/common/log/logback-sensitive.xml&quot;/&gt;</code>\u6765\u5F15\u5165\u8131\u654F\u7684\u65E5\u5FD7\u914D\u7F6E\u3002</p></div><div class="language-xml"><pre><code><span class="token comment">&lt;!-- \u654F\u611F\u6570\u636E\u8131\u654F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--  msg\u3001message\u662F\u8981\u8FDB\u884C\u8131\u654F\u7684\u5B57\u6BB5\uFF0C\u8FD9\u5199\u5B57\u6BB5\u7684\u6765\u6E90\u4E3A logback \u63D0\u4F9B  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>conversionRule</span> <span class="token attr-name">conversionWord</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">converterClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn.bootx.common.log.SensitiveDataLogConverter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>conversionRule</span> <span class="token attr-name">conversionWord</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">converterClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn.bootx.common.log.SensitiveDataLogConverter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xml</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BF9<code>SensitiveDataLogConverter</code>\u7C7B\u7684\u9759\u6001\u4EE3\u7801\u5757\u8FDB\u884C\u4FEE\u6539\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u8FC7\u6EE4\u89C4\u5219\uFF0C\u89C1\u4E0B\u56FE \u654F\u611F\u4FE1\u606F\u914D\u7F6E \u5757\u4EE3\u7801</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SensitiveDataLogConverter</span> <span class="token keyword">extends</span> <span class="token class-name">MessageConverter</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FC7\u6EE4\u89C4\u5219</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token constant">REPLACE_RULES</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u654F\u611F\u4FE1\u606F\u914D\u7F6E</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// ....</span>
        <span class="token constant">REPLACE_RULES</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;(\\&quot;cardSecurity[\\\\\\\\]*\\&quot;[\\\\s+]*:[\\\\s+]*[\\\\\\\\]*\\&quot;)(.*?)([\\\\\\\\]*\\&quot;)&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;$1****$3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">REPLACE_RULES</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;(\\&quot;cvv[\\\\\\\\]*\\&quot;[\\\\s+]*:[\\\\s+]*[\\\\\\\\]*\\&quot;)(.*?)([\\\\\\\\]*\\&quot;)&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;$1****$3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">REPLACE_RULES</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;(\\&quot;cardCode[\\\\\\\\]*\\&quot;[\\\\s+]*:[\\\\s+]*[\\\\\\\\]*\\&quot;)(.*?)([\\\\\\\\]*\\&quot;)&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;$1****$3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token class-name">ILoggingEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">convert</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getFormattedMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u8FC7\u6EE4\u654F\u611F\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),e=[p];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var v=n(o,[["render",c]]);export{m as __pageData,v as default};
