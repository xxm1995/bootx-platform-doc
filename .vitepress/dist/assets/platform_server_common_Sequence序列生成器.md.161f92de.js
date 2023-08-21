import{_ as n,c as s,o as a,a as e}from"./app.e9c6ffe7.js";const m='{"title":"sequence\u5E8F\u5217\u751F\u6210\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u53C2\u6570\u8BF4\u660E","slug":"\u53C2\u6570\u8BF4\u660E"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668","slug":"\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668"},{"level":3,"title":"\u6CE8\u518C\u5230Spring\u5BB9\u5668\u4E2D","slug":"\u6CE8\u518C\u5230spring\u5BB9\u5668\u4E2D"},{"level":3,"title":"\u521B\u5EFA\u5BF9\u8C61\u76F4\u63A5\u4F7F\u7528","slug":"\u521B\u5EFA\u5BF9\u8C61\u76F4\u63A5\u4F7F\u7528"},{"level":2,"title":"\u5173\u952E\u7C7B","slug":"\u5173\u952E\u7C7B"}],"relativePath":"platform/server/common/Sequence\u5E8F\u5217\u751F\u6210\u5668.md"}',t={},o=e(`<h1 id="sequence\u5E8F\u5217\u751F\u6210\u5668" tabindex="-1">sequence\u5E8F\u5217\u751F\u6210\u5668 <a class="header-anchor" href="#sequence\u5E8F\u5217\u751F\u6210\u5668" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6CE8\u610F\uFF1A\u4E0D\u9002\u7528\u5206\u5E03\u5F0F\u73AF\u5883\uFF0C\u56E0\u4E3A\u7A0B\u5E8F\u662F\u672C\u5730\u8FDB\u884C\u53D1\u53F7\uFF0C\u591A\u673A\u5668\u8FD0\u884C\u65F6\u4F1A\u5BFC\u81F4\u91CD\u590D\u3002\u5206\u5E03\u5F0F\u4E0D\u51FA\u95EE\u9898\u7684\u8BDD\uFF0C\u9700\u8981\u53F7\u6BB5\u7684<code>\u533A\u95F4\u6B65\u957F</code>\u8BBE\u5F97\u8DDF<code>\u6B65\u957F</code>\u4E00\u6837\uFF0C\u7136\u540E\u52A0\u5206\u5E03\u5F0F\u9501\uFF0C\u4FDD\u8BC1\u6CA1\u4E8B\u751F\u6210\u5E8F\u5217\u53F7\u90FD\u662F\u901A\u8FC7\u6570\u636E\u4E2D\u95F4\u4EF6\u4EA7\u751F\u7684\u3002</p><blockquote><p>\u63A8\u8350\u5728\u6709\u4E25\u683C\u8981\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06<code>\u6B65\u957F</code>\u4E0E<code>\u533A\u95F4\u6B65\u957F</code>\u8BBE\u7F6E\u4E3A\u4E00\u81F4\u7684\u957F\u5EA6\uFF0C\u4FDD\u8BC1\u53EF\u9760\u7684\u751F\u6210\u3002</p></blockquote></div><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u751F\u6210\u4E00\u4E2A\u5355\u8C03\u9012\u589E\u7684\u961F\u5217\uFF0C\u901A\u8FC7\u751F\u6210\u4E00\u4E2A\u533A\u95F4\uFF0C\u6BCF\u6B21\u83B7\u53D6\u53F7\u7801\u65F6\u672C\u5730\u8FDB\u884C\u751F\u6210\uFF0C\u533A\u95F4\u53F7\u7801\u7528\u5B8C\u540E\u751F\u6210\u5E76\u8DF3\u5230\u65B0\u7684\u533A\u95F4\u3002\u91CD\u542F\u9879\u76EE\uFF0C\u4E5F\u4F1A\u8DF3\u5230\u4E0B\u4E2A\u533A\u95F4\uFF0C\u9884\u9632\u51FA\u73B0\u91CD\u590D\u7684\u53F7\u7801\u3002\u652F\u6301\u4E09\u79CD\u6570\u636E\u4E2D\u95F4\u4EF6\uFF1A</p><ul><li><code>redis</code></li><li><code>jdbc</code></li><li><code>Mongo</code></li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h3><ul><li><code>storeType</code>\uFF1A\u961F\u5217\u533A\u95F4\u7C7B\u578B\uFF0C<code>redis</code>\u3001<code>jdbc</code>\u3001<code>Mongo</code>\u4E09\u79CD</li><li><code>keyPrefix</code>\uFF1A\u4F7F\u7528<code>redis</code>\u7C7B\u578B\u60C5\u51B5\u4E0Bredis\u5B58\u50A8\u7684Key\u524D\u7F00</li><li><code>step</code>\uFF1A\u6B65\u957F\uFF0C\u6BCF\u6267\u884C\u4E00\u6B21<code>next()</code>\u961F\u5217\u9012\u589E\u591A\u5C11</li><li><code>rangeStep</code>\uFF1A\u533A\u95F4\u6B65\u957F\uFF0C\u533A\u95F4\u7684\u5927\u5C0F\u662F\u591A\u5C11\uFF0C\u5728\u533A\u95F4\u5185\u8FDB\u884C\u9012\u589E\u65F6\uFF0C\u662F\u7A0B\u5E8F\u672C\u5730\u5904\u7406\u7684\uFF0C\u5982\u679C\u91CD\u542F\uFF0C\u4E0B\u6B21\u6267\u884C<code>next()</code>\u65F6\u4F1A\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u533A\u95F4</li><li><code>rangeStart</code>\uFF1A\u533A\u95F4\u5F00\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E00\u6B21\u6267\u884C<code>next()</code>\u65F6\u662F\u4ECE\u591A\u5C11\u5F00\uFF0C\u9ED8\u8BA4\u4E3A0\u3002</li></ul><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-yaml"><pre><code><span class="token key atrule">bootx.common.sequence</span><span class="token punctuation">:</span>
  <span class="token comment"># \u961F\u5217\u533A\u95F4\u7C7B\u578B</span>
  <span class="token key atrule">store_type</span><span class="token punctuation">:</span> redis 
  <span class="token comment"># \u4F7F\u7528redis\u5B58\u50A8\u60C5\u51B5\u4E0BredisKey\u524D\u7F00</span>
  <span class="token key atrule">key_prefix</span><span class="token punctuation">:</span> <span class="token string">&#39;Sequence:&#39;</span>
  <span class="token comment"># \u9ED8\u8BA4\u6B65\u957F</span>
  <span class="token key atrule">step</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token comment"># \u9ED8\u8BA4\u533A\u95F4\u6B65\u957F</span>
  <span class="token key atrule">range_step</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token comment"># \u9ED8\u8BA4\u533A\u95F4\u8D77\u59CB\u4F4D\u7F6E</span>
  <span class="token key atrule">range_start</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre></div><ol start="2"><li>\u4F7F\u7528</li></ol><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Sequence</span> sequence<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u53D1\u53F7\u5668&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/sequence&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">sequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u901A\u8FC7\u4F20\u5165\u4E1A\u52A1\u952E\u83B7\u53D6long \u7C7B\u578B\u7684\u53F7\u7801,</span>
        <span class="token keyword">long</span> l <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;cs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u83B7\u53D6string</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">nextValue</span><span class="token punctuation">(</span><span class="token string">&quot;cs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668" tabindex="-1">\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u5408\u4E2D\uFF0C\u533A\u95F4\u8D77\u59CB\u4F4D\u7F6E\u3001\u6B65\u957F\u53EF\u80FD\u4F1A\u4E0D\u5C3D\u76F8\u540C\uFF0C\u6240\u4EE5\u652F\u6301\u5F00\u53D1\u8005\u6839\u636E\u4E0D\u540C\u7684\u9700\u8981\uFF0C\u521B\u5EFA\u51FA\u81EA\u5B9A\u4E49\u5E8F\u5217\u751F\u6210\u5668\uFF0C\u63D0\u4F9B<code>SequenceUtil</code>\u5DE5\u5177\u7C7B\u7528\u6765\u5FEB\u901F\u521B\u5EFA\u961F\u5217\u5BF9\u8C61</p></blockquote><h3 id="\u6CE8\u518C\u5230spring\u5BB9\u5668\u4E2D" tabindex="-1">\u6CE8\u518C\u5230<code>Spring</code>\u5BB9\u5668\u4E2D <a class="header-anchor" href="#\u6CE8\u518C\u5230spring\u5BB9\u5668\u4E2D" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Sequence</span> <span class="token function">mySeq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E86\u4E00\u4E2A\u6B65\u957F\u4E3A1, \u533A\u95F4\u6B65\u957F\u4E3A 100, \u533A\u95F4\u8D77\u59CB\u4F4D\u7F6E\u4E3A0\u7684\u961F\u5217</span>
    <span class="token keyword">return</span> <span class="token class-name">SequenceUtil</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u521B\u5EFA\u5BF9\u8C61\u76F4\u63A5\u4F7F\u7528" tabindex="-1">\u521B\u5EFA\u5BF9\u8C61\u76F4\u63A5\u4F7F\u7528 <a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61\u76F4\u63A5\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Sequence</span> sequence <span class="token operator">=</span> <span class="token class-name">SequenceUtil</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// TestSeq \u662F\u961F\u5217\u540D</span>
    sequence<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;TestSeq&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5173\u952E\u7C7B" tabindex="-1">\u5173\u952E\u7C7B <a class="header-anchor" href="#\u5173\u952E\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>Sequence</code> \u5E8F\u5217\u53F7\u751F\u6210\u5668\u63A5\u53E3\uFF0C\u7528\u6765\u751F\u6210\u4E0B\u4E00\u4E2A\u5E8F\u5217\u53F7</li><li><code>DefaultRangeSequence</code> \u5E8F\u5217\u53F7\u533A\u95F4\u751F\u6210\u5668\u63A5\u53E3\u9ED8\u8BA4\u5B9E\u73B0</li><li><code>SeqRangeManager</code> \u533A\u95F4\u7BA1\u7406\u5668\u63A5\u53E3\uFF0C\u9700\u8981\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u6765\u63A7\u5236\u533A\u95F4\u7684\u4EA7\u751F\u548C\u79FB\u52A8</li><li><code>RedisSeqRangeManager</code> <code>redis</code>\u533A\u95F4\u7BA1\u7406\u5668\u5B9E\u73B0</li><li><code>JdbcSeqRangeManager</code> <code>jdbc</code>\u6570\u636E\u5E93\u65B9\u5F0F\u533A\u95F4\u7BA1\u7406\u5668\u5B9E\u73B0</li><li><code>MongoSeqRangeManager</code> <code>mongo</code>\u6570\u636E\u5E93\u65B9\u5F0F</li><li><code>SeqRange</code> \u5E8F\u5217\u53F7\u533A\u95F4\u5BF9\u8C61\u7C7B</li></ul>`,20),c=[o];function p(l,u,i,d,r,k){return a(),s("div",null,c)}var g=n(t,[["render",p]]);export{m as __pageData,g as default};
