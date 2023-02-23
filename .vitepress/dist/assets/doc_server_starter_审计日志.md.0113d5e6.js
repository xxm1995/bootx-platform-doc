import{_ as n,c as s,o as a,a as t}from"./app.d9d96f60.js";const g='{"title":"\u5BA1\u8BA1\u65E5\u5FD7\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E"},{"level":3,"title":"\u767B\u5F55\u65E5\u5FD7","slug":"\u767B\u5F55\u65E5\u5FD7"},{"level":3,"title":"\u64CD\u4F5C\u65E5\u5FD7","slug":"\u64CD\u4F5C\u65E5\u5FD7"},{"level":3,"title":"\u6570\u636E\u7248\u672C\u8BB0\u5F55","slug":"\u6570\u636E\u7248\u672C\u8BB0\u5F55"},{"level":2,"title":"\u53C2\u6570\u914D\u7F6E","slug":"\u53C2\u6570\u914D\u7F6E"},{"level":2,"title":"\u5173\u952E\u7C7B","slug":"\u5173\u952E\u7C7B"},{"level":2,"title":"\u6269\u5C55\u65B0\u7684\u5B58\u50A8\u65B9\u5F0F","slug":"\u6269\u5C55\u65B0\u7684\u5B58\u50A8\u65B9\u5F0F"}],"relativePath":"doc/server/starter/\u5BA1\u8BA1\u65E5\u5FD7.md"}',p={},o=t(`<h1 id="\u5BA1\u8BA1\u65E5\u5FD7\u6A21\u5757" tabindex="-1">\u5BA1\u8BA1\u65E5\u5FD7\u6A21\u5757 <a class="header-anchor" href="#\u5BA1\u8BA1\u65E5\u5FD7\u6A21\u5757" aria-hidden="true">#</a></h1><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u8BB0\u5F55\u767B\u5F55\u65E5\u5FD7</li><li>\u8BB0\u5F55\u5404\u7C7B\u64CD\u4F5C\u65E5\u5FD7</li><li>\u6570\u636E\u7248\u672C\u8BB0\u5F55\uFF0C\u5E76\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7248\u672C\u8FDB\u884C\u5BF9\u6BD4</li><li>\u652F\u6301<code>DB</code>\u548C<code>MongoDB</code>\u4E24\u79CD\u5B58\u50A8\u65B9\u5F0F</li></ul><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><h3 id="\u767B\u5F55\u65E5\u5FD7" tabindex="-1">\u767B\u5F55\u65E5\u5FD7 <a class="header-anchor" href="#\u767B\u5F55\u65E5\u5FD7" aria-hidden="true">#</a></h3><p>\u5728\u8FDB\u884C\u767B\u5F55\u64CD\u4F5C\u65F6\uFF0C\u65E0\u8BBA\u6210\u529F\u8FD8\u662F\u6210\u529F\uFF0C\u90FD\u4F1A\u8BB0\u5F55\u76F8\u5173\u7684\u767B\u5F55\u4FE1\u606F\uFF0C\u5177\u4F53\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginLogParam</span> <span class="token punctuation">{</span>

    <span class="token comment">/** \u7528\u6237\u8D26\u53F7id */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> userId<span class="token punctuation">;</span>
    <span class="token comment">/** \u7528\u6237\u540D\u79F0 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> account<span class="token punctuation">;</span>
    <span class="token comment">/** \u767B\u5F55\u6210\u529F\u72B6\u6001*/</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> login<span class="token punctuation">;</span>
    <span class="token comment">/** \u767B\u5F55\u7EC8\u7AEF */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> client<span class="token punctuation">;</span>
    <span class="token comment">/** \u767B\u5F55IP\u5730\u5740 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ip<span class="token punctuation">;</span>
    <span class="token comment">/** \u767B\u5F55\u5730\u70B9 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> loginLocation<span class="token punctuation">;</span>
    <span class="token comment">/** \u6D4F\u89C8\u5668\u7C7B\u578B */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> browser<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u7CFB\u7EDF */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> os<span class="token punctuation">;</span>
    <span class="token comment">/** \u63D0\u793A\u6D88\u606F */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
    <span class="token comment">/** \u8BBF\u95EE\u65F6\u95F4 */</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> loginTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u64CD\u4F5C\u65E5\u5FD7" tabindex="-1">\u64CD\u4F5C\u65E5\u5FD7 <a class="header-anchor" href="#\u64CD\u4F5C\u65E5\u5FD7" aria-hidden="true">#</a></h3><blockquote><p>\u901A\u8FC7\u5BF9<code>OperateLog</code>\u6CE8\u89E3\u7F16\u5199\u5BF9\u5E94\u7684\u64CD\u4F5C\u65E5\u5FD7\u5207\u9762\uFF0C\u53EF\u4EE5\u5BF9\u6DFB\u52A0<code>OperateLog</code>\u7684\u65B9\u6CD5\u8FDB\u884C\u62E6\u622A\u5E76\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u4E00\u4E2A\u65B9\u6CD5\u4E0A\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A<code>OperateLog</code>\u6CE8\u89E3\u3002</p></blockquote><p>\u4F7F\u7528\u8BF4\u660E\uFF1A</p><div class="language-java"><pre><code><span class="token annotation punctuation">@OperateLog</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&quot;\u91CD\u7F6E\u5BC6\u7801&quot;</span><span class="token punctuation">,</span>businessType<span class="token operator">=</span> <span class="token class-name">BusinessType</span><span class="token punctuation">.</span><span class="token constant">UPDATE</span><span class="token punctuation">,</span> saveParam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/restartPassword&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">restartPassword</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span><span class="token annotation punctuation">@NotBlank</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> newPassword<span class="token punctuation">)</span><span class="token punctuation">{</span>
    userAdminService<span class="token punctuation">.</span><span class="token function">restartPassword</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>newPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u89E3\u53C2\u6570\u8BF4\u660E <code>audit-log</code>\u6A21\u5757</p><ul><li><code>title</code>\uFF1A\u6A21\u5757\u540D\u79F0</li><li><code>businessType</code>\uFF1A\u4E1A\u52A1\u64CD\u4F5C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3AOTHER</li><li><code>saveParam</code>\uFF1A\u662F\u5426\u4FDD\u5B58\u53C2\u6570\u503C\uFF0C\u9ED8\u8BA4\u4E0D\u4FDD\u5B58</li><li><code>saverReturn</code>\uFF1A\u662F\u5426\u4FDD\u5B58\u8FD4\u56DE\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E0D\u4FDD\u5B58</li></ul><p>\u4E1A\u52A1\u64CD\u4F5C\u7C7B\u578B</p><div class="language-java"><pre><code><span class="token comment">/**
 * \u4E1A\u52A1\u64CD\u4F5C\u7C7B\u578B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">BusinessType</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u5176\u5B83 */</span>
    <span class="token constant">OTHER</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u65B0\u589E */</span>
    <span class="token constant">INSERT</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u4FEE\u6539 */</span>
    <span class="token constant">UPDATE</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u5220\u9664 */</span>
    <span class="token constant">DELETE</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u6388\u6743 */</span>
    <span class="token constant">GRANT</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u5BFC\u51FA */</span>
    <span class="token constant">EXPORT</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u5BFC\u5165 */</span>
    <span class="token constant">IMPORT</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u5F3A\u9000 */</span>
    <span class="token constant">FORCE</span><span class="token punctuation">,</span>
    <span class="token comment">/** \u6E05\u7A7A\u6570\u636E */</span>
    <span class="token constant">CLEAN</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4FDD\u5B58\u4FE1\u606F\u5185\u5BB9</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperateLogParam</span> <span class="token punctuation">{</span>
    <span class="token comment">/** \u64CD\u4F5C\u6A21\u5757 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u4EBA\u5458id */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> operateId<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u4EBA\u5458\u8D26\u53F7 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token comment">/** \u4E1A\u52A1\u7C7B\u578B */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> businessType<span class="token punctuation">;</span>
    <span class="token comment">/** \u8BF7\u6C42\u65B9\u6CD5 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> method<span class="token punctuation">;</span>
    <span class="token comment">/** \u8BF7\u6C42\u65B9\u5F0F */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> requestMethod<span class="token punctuation">;</span>
    <span class="token comment">/** \u8BF7\u6C42url */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateUrl<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5Cip */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateIp<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u5730\u70B9 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateLocation<span class="token punctuation">;</span>
    <span class="token comment">/** \u8BF7\u6C42\u53C2\u6570 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateParam<span class="token punctuation">;</span>
    <span class="token comment">/** \u8FD4\u56DE\u53C2\u6570 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateReturn<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u72B6\u6001\uFF080\u6B63\u5E38 1\u5F02\u5E38\uFF09 */</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> success<span class="token punctuation">;</span>
    <span class="token comment">/** \u9519\u8BEF\u6D88\u606F */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> errorMsg<span class="token punctuation">;</span>
    <span class="token comment">/** \u64CD\u4F5C\u65F6\u95F4 */</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> operateTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6570\u636E\u7248\u672C\u8BB0\u5F55" tabindex="-1">\u6570\u636E\u7248\u672C\u8BB0\u5F55 <a class="header-anchor" href="#\u6570\u636E\u7248\u672C\u8BB0\u5F55" aria-hidden="true">#</a></h3><blockquote><p>\u6DFB\u52A0\u5230\u8981\u8BB0\u5F55\u7248\u672C\u6570\u636E\u7684\u6570\u636E\u5E93\u5B9E\u4F53\u7C7B\u4E0A\uFF0C\u5728\u8FDB\u884C\u589E\u5220\u6539\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8BB0\u5F55\u5BF9\u5E94\u7684\u6570\u636E\u7248\u672C</p></blockquote><h4 id="\u6CE8\u89E3\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u6CE8\u89E3\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u6CE8\u89E3\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h4><p><code>@DataVersionLog</code></p><ul><li><code>title</code> <code>\u6570\u636E\u8BB0\u5F55\u7684\u6807\u9898</code></li></ul><p>\u4FDD\u5B58\u7684\u4FE1\u606F\u5185\u5BB9</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&quot;\u6570\u636E\u7248\u672C\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataVersionLogDto</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u4E3B\u952E&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u8868\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> tableName<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u6570\u636E\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dataName<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u6570\u636E\u4E3B\u952E&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dataId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u6570\u636E\u5185\u5BB9&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dataContent<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u6570\u636E\u7248\u672C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> version<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u521B\u5EFA\u8005ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> creator<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u521B\u5EFA\u65F6\u95F4&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> createTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u624B\u52A8\u8BB0\u5F55" tabindex="-1">\u624B\u52A8\u8BB0\u5F55 <a class="header-anchor" href="#\u624B\u52A8\u8BB0\u5F55" aria-hidden="true">#</a></h4><div class="language-java"><pre><code><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLogController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DataVersionLogService</span> dataVersionLogService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5\u6570\u636E\u7248\u672C\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/testDataVersion&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">testDataVersion</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Client</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataVersionLogService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DataVersionLogParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDataId</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>client<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDataName</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDataContent</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u6570\u914D\u7F6E" tabindex="-1">\u53C2\u6570\u914D\u7F6E <a class="header-anchor" href="#\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token key atrule">bootx</span><span class="token punctuation">:</span>
  <span class="token key atrule">starter</span><span class="token punctuation">:</span>
    <span class="token key atrule">audit-log</span><span class="token punctuation">:</span>
      <span class="token comment"># \u5B58\u50A8\u65B9\u5F0F jdbc/Mongo</span>
      <span class="token key atrule">store</span><span class="token punctuation">:</span> mongo
</code></pre></div><h2 id="\u5173\u952E\u7C7B" tabindex="-1">\u5173\u952E\u7C7B <a class="header-anchor" href="#\u5173\u952E\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>OperateLogAspectHandler</code> \u64CD\u4F5C\u65E5\u5FD7\u5207\u9762\u5904\u7406\u7C7B</li><li><code>LoginLogService</code> \u767B\u9646\u65E5\u5FD7\u5904\u7406\u63A5\u53E3</li><li><code>OperateLogService</code> \u64CD\u4F5C\u65E5\u5FD7\u5904\u7406\u63A5\u53E3</li><li><code>LoginLogParam</code> \u8981\u4FDD\u5B58\u7684\u767B\u5F55\u65E5\u5FD7\u4FE1\u606F</li><li><code>OperateLogParam</code> \u8981\u4FDD\u5B58\u7684\u64CD\u4F5C\u65E5\u5FD7\u4FE1\u606F</li></ul><h2 id="\u6269\u5C55\u65B0\u7684\u5B58\u50A8\u65B9\u5F0F" tabindex="-1">\u6269\u5C55\u65B0\u7684\u5B58\u50A8\u65B9\u5F0F <a class="header-anchor" href="#\u6269\u5C55\u65B0\u7684\u5B58\u50A8\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u7EE7\u627F<code>LoginLogService</code>/<code>OperateLogService</code> \u63A5\u53E3\uFF0C\u5B9E\u73B0\u5BF9\u5E94\u65B9\u6CD5\uFF0C\u5E76\u8BBE\u7F6E\u8BE5\u5B9E\u73B0\u7C7BBean\u7684\u751F\u6548\u65B9\u5F0F</li></ol><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>
    prefix <span class="token operator">=</span> <span class="token string">&quot;bootx.starter.audit-log&quot;</span><span class="token punctuation">,</span> 
    value <span class="token operator">=</span> <span class="token string">&quot;store&quot;</span><span class="token punctuation">,</span> 
    <span class="token comment">// \u8BBE\u7F6E\u81EA\u5DF1\u7684\u5B58\u50A8\u65B9\u5F0F\u540D\u79F0</span>
    havingValue <span class="token operator">=</span> <span class="token string">&quot;Es&quot;</span><span class="token punctuation">,</span>
    matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperateLogEsService</span> <span class="token keyword">implements</span> <span class="token class-name">Operatee</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>\u901A\u5E38\u8981\u7F16\u5199 <code>LoginLogParam</code>\u3001<code>OperateLogParam</code>\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u6301\u4E45\u5316\u7C7B\uFF0C\u540C\u65F6\u63D0\u4F9B\u6301\u4E45\u5316\u7C7B\u8F6C\u6362\u4E3A<code>LoginLogDto</code>/ <code>OperateLogDto</code>\u7684\u65B9\u5F0F\uFF0C<code>*LogServic</code>\u63A5\u53E3\u4E2D\u6709\u51E0\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u503C\u5C31\u662F\u4E0A\u9762\u4E24\u4E2ADto\u5BF9\u8C61</li><li>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u5B58\u50A8\u65B9\u5F0F</li></ol><div class="language-yaml"><pre><code><span class="token key atrule">bootx</span><span class="token punctuation">:</span>
  <span class="token key atrule">starter</span><span class="token punctuation">:</span>
    <span class="token key atrule">audit-log</span><span class="token punctuation">:</span>
      <span class="token comment"># \u586B\u5199\u81EA\u5DF1\u6269\u5C55\u7684\u5B58\u50A8\u65B9\u5F0F</span>
      <span class="token key atrule">store</span><span class="token punctuation">:</span> mongo
</code></pre></div>`,35),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{g as __pageData,v as default};
