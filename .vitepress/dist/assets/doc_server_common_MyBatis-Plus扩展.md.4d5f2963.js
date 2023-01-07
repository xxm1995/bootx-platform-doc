import{_ as n,c as s,o as a,a as t}from"./app.95c78e2d.js";const g='{"title":"\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u6CE8\u518C\u63D2\u4EF6","slug":"\u6CE8\u518C\u63D2\u4EF6"},{"level":2,"title":"\u666E\u901ACURD\u914D\u7F6E","slug":"\u666E\u901Acurd\u914D\u7F6E"},{"level":2,"title":"\u5927\u5B57\u6BB5\u6392\u9664","slug":"\u5927\u5B57\u6BB5\u6392\u9664"},{"level":2,"title":"BaseManager \u81EA\u5B9A\u4E49CRUD \u63A5\u53E3","slug":"basemanager-\u81EA\u5B9A\u4E49crud-\u63A5\u53E3"},{"level":3,"title":"Save","slug":"save"},{"level":3,"title":"Update","slug":"update"},{"level":3,"title":"Delete","slug":"delete"},{"level":3,"title":"Find","slug":"find"},{"level":3,"title":"Page","slug":"page"},{"level":3,"title":"Count","slug":"count"},{"level":3,"title":"Existed","slug":"existed"},{"level":3,"title":"Chain","slug":"chain"},{"level":2,"title":"MpUtil \u5DE5\u5177\u7C7B","slug":"mputil-\u5DE5\u5177\u7C7B"},{"level":2,"title":"\u6269\u5C55\u7C7B\u578B\u5904\u7406\u5668","slug":"\u6269\u5C55\u7C7B\u578B\u5904\u7406\u5668"}],"relativePath":"doc/server/common/MyBatis-Plus\u6269\u5C55.md"}',p={},e=t(`<p>_# MyBatis-Plus \u6269\u5C55</p><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u63D0\u4F9B<code>MpBaseEntity</code>\u548C<code>MpIdEntity</code>\u5BF9\u8C61\uFF0C\u4F5C\u4E3A\u901A\u7528\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u7684\u516C\u5171\u7236\u7C7B</li><li>\u63D0\u4F9B<code>BaseManager</code>\uFF0C\u4F5C\u4E3A <code>ServiceImpl</code> \u7684\u589E\u5F3A\u66FF\u4EE3</li><li>\u63D0\u4F9B<code>MpUtils</code>\u5DE5\u5177\u7C7B\uFF0C\u5305\u542B\u83B7\u53D6\u5206\u9875\u65B9\u6CD5\u548C\u5206\u9875\u5BF9\u8C61\u8F6C\u6362\u65B9\u6CD5</li><li>\u914D\u7F6E\u5FC5\u5907\u7684\u63D2\u4EF6\uFF0C\u89C1<code>MpConfiguration</code></li><li>\u7ED3\u5408 <code>BigField</code>\u6CE8\u89E3\uFF0C\u63D0\u4F9B\u5927\u5B57\u6BB5\u4FBF\u6377\u65B9\u5F0F\u6392\u9664</li><li>\u914D\u7F6E\u9ED8\u8BA4ID\u751F\u6210\u7B56\u7565\u4E3A\u96EA\u82B1ID\u65B9\u5F0F</li><li>\u4F18\u5316MP\u63D2\u4EF6\u52A0\u8F7D\u673A\u5236</li></ul><h2 id="\u6CE8\u518C\u63D2\u4EF6" tabindex="-1">\u6CE8\u518C\u63D2\u4EF6 <a class="header-anchor" href="#\u6CE8\u518C\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u7528<code>MpInterceptor</code>\u5BF9\u8C61\u5C06\u7F16\u5199\u7684Mp\u63D2\u4EF6\u8FDB\u884C\u5305\u88C5\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E0D\u540C\u63D2\u4EF6\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u7136\u540E\u6CE8\u518C\u5230Spring Bean\u5BB9\u5668\u4E2D\u5373\u53EF\uFF0C\u53C2\u7167\u5982\u4E0B\u6570\u636E\u6743\u9650\u7684\u63D2\u4EF6\u6CE8\u518C\u4EE3\u7801</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatePermConfiguration</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * \u6570\u636E\u8303\u56F4\u6743\u9650\u63D2\u4EF6
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;bootx.starter.data-perm&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;enableDataPerm&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">MpInterceptor</span> <span class="token function">dataPermInterceptorMp</span><span class="token punctuation">(</span><span class="token class-name">DataScopeInterceptor</span> dataScopeInterceptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MpInterceptor</span><span class="token punctuation">(</span>dataScopeInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/**
     * \u67E5\u8BE2\u5B57\u6BB5\u6743\u9650\u63D2\u4EF6
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;bootx.starter.data-perm&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;enableSelectFieldPerm&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">MpInterceptor</span> <span class="token function">selectFieldPermInterceptorMp</span><span class="token punctuation">(</span><span class="token class-name">SelectFieldPermInterceptor</span> bootxDataPermissionHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MpInterceptor</span><span class="token punctuation">(</span>bootxDataPermissionHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u666E\u901Acurd\u914D\u7F6E" tabindex="-1">\u666E\u901ACURD\u914D\u7F6E <a class="header-anchor" href="#\u666E\u901Acurd\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA\u6570\u636E\u5E93\u7C7B\uFF0C\u7EE7\u627F<code>MpBaseEntity</code>\u516C\u5171\u7236\u7C7B<div class="language-java"><pre><code><span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;iam_client&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token keyword">extends</span> <span class="token class-name">MpBaseEntity</span> <span class="token keyword">implements</span> <span class="token class-name">EntityBaseFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClientDto</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
     <span class="token comment">/** \u7F16\u7801 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token comment">/** \u540D\u79F0 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u521B\u5EFAMapper\u548CManager\u5BF9\u8C61\uFF0C<code>BaseManager</code>\u662F\u66FF\u4EE3<code>ServiceImpl</code>\u7684\u5B9E\u73B0\uFF0C\u5F15\u5165Manage\u5BF9\u8C61\u5728\u662F\u4E3A\u4E86\u4E0D\u5728Service\u4E2D\u76F4\u63A5\u8FDB\u884C\u6570\u636E\u5E93\u76F8\u5173\u64CD\u4F5C\uFF0C\u628A\u6570\u636E\u5E93\u64CD\u4F5C\u4E0B\u6C89\u5230Manager\u5C42(\u901A\u5E38\u653E\u5728dao\u5C42\u4E2D\uFF0C\u4E0D\u5355\u72EC\u5B9E\u73B0)<div class="language-java"><pre><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ClientMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java"><pre><code><span class="token annotation punctuation">@Repository</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClientManager</span> <span class="token keyword">extends</span> <span class="token class-name">BaseManager</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClientMapper</span><span class="token punctuation">,</span> <span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><blockquote><p>\u5728\u4E00\u6B21\u6027\u9879\u76EE\u4E2D\uFF0C\u4E3A\u4E86\u5F00\u53D1\u7B80\u4FBF\uFF0C\u53EF\u4EE5\u76F4\u63A5Service\u76F4\u63A5\u7EE7\u627F<code>BaseManager</code>\uFF0C\u6216\u8005\u76F4\u63A5\u7EE7\u627F<code>ServiceImpl</code>\u90FD\u53EF\u4EE5\uFF0C\u4E0D\u7528\u592A\u606A\u5B88\u5F00\u53D1\u89C4\u8303\u3002</p></blockquote><h2 id="\u5927\u5B57\u6BB5\u6392\u9664" tabindex="-1">\u5927\u5B57\u6BB5\u6392\u9664 <a class="header-anchor" href="#\u5927\u5B57\u6BB5\u6392\u9664" aria-hidden="true">#</a></h2><blockquote><p>\u4E00\u822C\u5728\u5206\u9875\u6216\u8005\u5217\u8868\u67E5\u8BE2\u65F6\uFF0C\u662F\u4E0D\u9700\u8981\u67E5\u8BE2\u51FA\u8BB0\u5F55\u7684\u5927\u5B57\u6BB5\uFF0C\u4E3A\u6B64\u63D0\u4F9B\u4FBF\u6377\u5DE5\u5177\u7C7B\uFF0C\u63D0\u4F9B\u5927\u5B57\u6BB5\u6CE8\u89E3<code>BigField</code> \u548C\u5BF9\u5E94\u5904\u7406\u65B9\u6CD5\uFF0C\u7528\u4E8E\u6279\u91CF\u67E5\u8BE2\u65F6\u6392\u9664\u5927\u5B57\u6BB5\u3002</p></blockquote><ol><li>\u5728\u6570\u636E\u5E93\u7C7B\u4E2D\u7684\u5927\u5B57\u6BB5\u52A0\u4E0A<code>BigField</code>\u6CE8\u89E3<div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token keyword">extends</span> <span class="token class-name">MpBaseEntity</span> <span class="token keyword">implements</span> <span class="token class-name">EntityBaseFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClientDto</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u7F16\u7801 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token comment">/** \u540D\u79F0 */</span>
    <span class="token annotation punctuation">@BigField</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u6F14\u793A<code>MpBigFieldHandler</code>\u5FEB\u6377\u5DE5\u5177\u7C7B\u7684\u4F7F\u7528\u8BF4\u660E\uFF0C\u9700\u8981\u914D\u5408<code>Query.select</code>\u65B9\u6CD5\u8FDB\u884C\u4F7F\u7528\uFF0C\u5B57\u6BB5\u5B58\u5728\u957F\u6587\u672C\u6CE8\u89E3\u5219\u5728\u67E5\u8BE2\u65F6\u88AB\u6392\u9664<div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AlipayConfig</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">lambdaQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// MpBigFieldHandler::excludeBigField \u8FC7\u6EE4\u5927\u5B57\u6BB5</span>
            <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">AlipayConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">MpBigFieldHandler</span><span class="token operator">::</span><span class="token function">excludeBigField</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="basemanager-\u81EA\u5B9A\u4E49crud-\u63A5\u53E3" tabindex="-1">BaseManager \u81EA\u5B9A\u4E49CRUD \u63A5\u53E3 <a class="header-anchor" href="#basemanager-\u81EA\u5B9A\u4E49crud-\u63A5\u53E3" aria-hidden="true">#</a></h2><h3 id="save" tabindex="-1">Save <a class="header-anchor" href="#save" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u63D2\u5165\u4E00\u6761\u8BB0\u5F55</span>
<span class="token class-name">T</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u63D2\u5165\uFF08\u6279\u91CF\uFF09</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">saveAll</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u63D2\u5165\uFF08\u6279\u91CF\uFF09</span>
<span class="token keyword">boolean</span> <span class="token function">saveBatch</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> entityList<span class="token punctuation">,</span> <span class="token keyword">int</span> batchSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B58\u5728\u66F4\u65B0\u8BB0\u5F55\uFF0C\u5426\u63D2\u5165\u4E00\u6761\u8BB0\u5F55</span>
<span class="token class-name">T</span> <span class="token function">saveOrUpdate</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span>
</code></pre></div><h3 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u6839\u636E ID \u9009\u62E9\u4FEE\u6539</span>
<span class="token class-name">T</span> <span class="token function">updateById</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u8FDB\u884C\u66F4\u65B0</span>
<span class="token class-name">T</span> <span class="token function">updateByField</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">,</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636EID \u6279\u91CF\u66F4\u65B0</span>
<span class="token keyword">boolean</span> <span class="token function">updateAllById</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> entityList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636EID \u6279\u91CF\u66F4\u65B0</span>
<span class="token keyword">boolean</span> <span class="token function">updateBatchById</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> entityList<span class="token punctuation">,</span> <span class="token keyword">int</span> batchSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u6839\u636E\u4E3B\u952E\u8FDB\u884C\u5220\u9664</span>
<span class="token keyword">boolean</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u4E3B\u952E\u96C6\u5408\u8FDB\u884C\u5220\u9664</span>
<span class="token keyword">boolean</span> <span class="token function">deleteByIds</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u503C\u8FDB\u884C\u5220\u9664</span>
<span class="token keyword">boolean</span> <span class="token function">deleteByField</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span>
</code></pre></div><h3 id="find" tabindex="-1">Find <a class="header-anchor" href="#find" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u6839\u636E\u4E3B\u952E\u67E5\u8BE2</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u67E5\u8BE2\u5168\u90E8</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636Eid\u96C6\u5408\u8FDB\u884C\u67E5\u8BE2</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAllByIds</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u5B57\u6BB5\u67E5\u8BE2\u5217\u8868</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAllByField</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u5B57\u6BB5\u96C6\u5408\u67E5\u8BE2\u5217\u8868</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAllByFields</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> fieldValues<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="page" tabindex="-1">Page <a class="header-anchor" href="#page" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u65E0\u6761\u4EF6\u5206\u9875\u67E5\u8BE2</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">E</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token class-name">E</span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6761\u4EF6\u5206\u9875\u67E5\u8BE2</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">E</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token class-name">E</span> page<span class="token punctuation">,</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="count" tabindex="-1">Count <a class="header-anchor" href="#count" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\u5B58\u5728\u7684\u6570\u636E\u6570\u91CF</span>
<span class="token class-name">Integer</span> <span class="token function">countByField</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="existed" tabindex="-1">Existed <a class="header-anchor" href="#existed" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">// \u5224\u65AD\u6307\u5B9Aid\u5BF9\u8C61\u662F\u5426\u5B58\u5728</span>
<span class="token keyword">boolean</span> <span class="token function">existedById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\u662F\u5426\u5B58\u5728\u6570\u636E</span>
<span class="token keyword">boolean</span> <span class="token function">existedByField</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\u662F\u5426\u5B58\u5728\u6570\u636E \u4E0D\u5305\u62EC\u4F20\u5165\u6307\u5B9AID\u7684\u5BF9\u8C61</span>
<span class="token keyword">boolean</span> <span class="token function">existedByField</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> fieldValue<span class="token punctuation">,</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="chain" tabindex="-1">Chain <a class="header-anchor" href="#chain" aria-hidden="true">#</a></h3><p>\u540CMybatis-Plus\u7684<code>ServiceImpl</code></p><h2 id="mputil-\u5DE5\u5177\u7C7B" tabindex="-1">MpUtil \u5DE5\u5177\u7C7B <a class="header-anchor" href="#mputil-\u5DE5\u5177\u7C7B" aria-hidden="true">#</a></h2><div class="language-java"><pre><code><span class="token comment">// mp page\u8F6C\u6362\u4E3A PageResult \u540C\u65F6\u8FDB\u884Cdto\u8F6C\u6362</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">PageResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">convert2PageResult</span><span class="token punctuation">(</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">EntityBaseFunction</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// page\u8F6C\u6362\u4E3A PageResult</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">PageResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">page2PageResult</span><span class="token punctuation">(</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u53D6\u5206\u9875\u5BF9\u8C61 MyBatis-Plus</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getMpPage</span><span class="token punctuation">(</span><span class="token class-name">PageParam</span> page<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u53D6\u884C\u540D\u79F0</span>
<span class="token class-name">String</span> <span class="token function">getColumnName</span><span class="token punctuation">(</span><span class="token class-name">SFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> function<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6279\u91CF\u6267\u884C\u8BED\u53E5, \u901A\u5E38\u7528\u4E8Efor\u5FAA\u73AF\u65B9\u5F0F\u7684\u6279\u91CF\u63D2\u5165</span>
<span class="token function">executeBatch</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> saveList<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">,</span><span class="token keyword">int</span> batchSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u521D\u59CB\u5316\u6570\u636E\u5E93Entity, \u901A\u5E38\u914D\u5408 executeBatch \u4F7F\u7528</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">MpIdEntity</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">initEntityList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">MpIdEntity</span><span class="token punctuation">&gt;</span></span> entityList<span class="token punctuation">,</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span>
<span class="token comment">// \u5B57\u6BB5\u662F\u5426\u5B58\u5728\u957F\u6587\u672C\u6CE8\u89E3</span>
<span class="token keyword">boolean</span> <span class="token function">excludeBigField</span><span class="token punctuation">(</span><span class="token class-name">TableFieldInfo</span> tableFieldInfo<span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u4E00\u6761\u6570\u636E, \u6709\u591A\u6761\u53D6\u7B2C\u4E00\u6761</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token class-name">LambdaQueryChainWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> lambdaQuery<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6269\u5C55\u7C7B\u578B\u5904\u7406\u5668" tabindex="-1">\u6269\u5C55\u7C7B\u578B\u5904\u7406\u5668 <a class="header-anchor" href="#\u6269\u5C55\u7C7B\u578B\u5904\u7406\u5668" aria-hidden="true">#</a></h2><p><code>JacksonRawTypeHandler</code> \u901A\u8FC7<code>Jackson</code>\u5B9E\u73B0 JSON \u5B57\u6BB5\u7C7B\u578B\u5904\u7406\u5668\uFF0C\u76F8\u8F83\u4E8E\u5B98\u65B9<code>JacksonTypeHandler</code>\u4F1A\u8BB0\u5F55\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B, \u901A\u5E38\u7528\u4E8E\u88AB\u5BB9\u5668(List\u3001Set\u3001Map)\u5305\u88C5\u7684\u5C5E\u6027\u4E0A\uFF0C\u5C06\u6CDB\u578B\u7C7B\u578B\u8FDB\u884C\u8BB0\u5F55</p><div class="language-java"><pre><code>   <span class="token comment">/** \u5206\u914D\u7684\u539F\u59CB\u6570\u636E */</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>typeHandler <span class="token operator">=</span> <span class="token class-name">JacksonRawTypeHandler</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> assignRaw<span class="token punctuation">;</span>
\`\`\`_
</code></pre></div>`,34),c=[e];function o(l,u,i,k,r,d){return a(),s("div",null,c)}var h=n(p,[["render",o]]);export{g as __pageData,h as default};
