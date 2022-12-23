import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.c921523c.js";const g='{"title":"Swagger \u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"Swagger \u6A21\u5757","slug":"swagger-\u6A21\u5757"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"doc/server/common/Swagger\u6A21\u5757.md","lastUpdated":1671722254425}',p={},o=t(`<h2 id="swagger-\u6A21\u5757"><a class="header-anchor" href="#swagger-\u6A21\u5757" aria-hidden="true">#</a> Swagger \u6A21\u5757</h2><h3 id="\u8BF4\u660E"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><pre><code>\u5BF9Swagger3\u8FDB\u884C\u5C01\u88C5\uFF0C\u65B9\u4FBF\u914D\u7F6E\uFF0C\u901A\u8FC7Spring\u7684\u52A8\u6001\u6CE8\u518CBean\u548C\u6570\u636E\u7ED1\u5B9A\u529F\u80FD\uFF0C\u5728\u5BB9\u5668Bean\u521D\u59CB\u5316\u4E4B\u524D\u628A\`GroupedOpenApi\`\uFF08\u76F8\u5F53\u4E8ESwagger2\u7684\`Docket\`\uFF09\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D
</code></pre><blockquote><p>\u6CE8\u610F\uFF1A\u6240\u4F7F\u7528\u7684\u7684\u662FSwagger3(SpringDoc)\uFF0C\u4E0D\u652F\u6301Swagger2\u76F8\u5173\u7684\u6CE8\u89E3\uFF0C\u56E0\u4E3ASwagger2(SpringFox)\u5DF2\u7ECF\u572817\u5E74\u505C\u6B62\u7EF4\u62A4\u4E86\uFF0C\u6700\u65B0\u7684Spirng Boot\u7248\u672C\u4E0ESwagger2\u5DF2\u7ECF\u6709\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u4E3A\u4E86\u540E\u671F\u66F4\u5C11\u51FA\u73B0\u95EE\u9898\uFF0C\u76F4\u63A5\u4F7F\u7528Swagger3</p></blockquote><h3 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><h4 id="swagger3\u6CE8\u89E3\u4F7F\u7528"><a class="header-anchor" href="#swagger3\u6CE8\u89E3\u4F7F\u7528" aria-hidden="true">#</a> Swagger3\u6CE8\u89E3\u4F7F\u7528</h4><table><thead><tr><th>swagger2</th><th>Swagger3</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>@Api</td><td>@Tag(name</td><td></td></tr><tr><td>= \u201C\u63A5\u53E3\u7C7B\u63CF\u8FF0\u201D)</td><td>Controller \u7C7B\u4E0A</td><td></td></tr><tr><td>@ApiOperation</td><td>@Operation(summary</td><td></td></tr><tr><td>=\u201C\u63A5\u53E3\u65B9\u6CD5\u63CF\u8FF0\u201D)</td><td>Controller \u65B9\u6CD5\u4E0A</td><td></td></tr><tr><td>@ApiImplicitParams</td><td>@Parameters</td><td>Controller\u65B9\u6CD5\u4E0A</td></tr><tr><td>@ApiImplicitParam</td><td>@Parameter(description=\u201C\u53C2\u6570\u63CF\u8FF0\u201D)</td><td>Controller \u65B9\u6CD5\u4E0A</td></tr><tr><td>@ApiParam</td><td>@Parameter(description=\u201C\u53C2\u6570\u63CF\u8FF0\u201D)</td><td>Controller \u65B9\u6CD5\u53C2\u6570\u4E0A</td></tr><tr><td>@ApiIgnore</td><td>@Parameter(hidden</td><td></td></tr><tr><td>= true) \u6216 @Operation(hidden</td><td></td><td></td></tr><tr><td>= true) \u6216 @Hidden</td><td>-</td><td></td></tr><tr><td>@ApiModel</td><td>@Schema(title</td><td></td></tr><tr><td>= &quot;\u5B9E\u4F53\u7C7B\u6807\u9898&quot;)</td><td>\u5BF9\u8C61\u4E0A</td><td></td></tr><tr><td>@ApiModelProperty</td><td>@Schema(description= &quot;\u5B57\u6BB5\u63CF\u8FF0&quot;)</td><td>\u5BF9\u8C61\u5C5E\u6027\u4E0A</td></tr><tr><td>-</td><td>@ParameterObject</td><td>Controller \u65B9\u6CD5\u53C2\u6570\u4E0A\uFF0C\u4F7F\u7528@ParameterObject</td></tr><tr><td>\u6CE8\u89E3\u4FEE\u9970\u7684\u8BF7\u6C42\u53C2\u6570\u5BF9\u8C61\uFF0C\u4F1A\u5C06\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5B57\u6BB5\u6DFB\u52A0\u4E3A\u5355\u72EC\u7684\u8BF7\u6C42\u53C2\u6570</td><td></td><td></td></tr></tbody></table><h4 id="\u4F7F\u7528\u6F14\u793A"><a class="header-anchor" href="#\u4F7F\u7528\u6F14\u793A" aria-hidden="true">#</a> \u4F7F\u7528\u6F14\u793A</h4><div class="language-java"><pre><code><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span><span class="token string">&quot;\u7CFB\u7EDF\u53C2\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/system/param&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemParamController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">SystemParamService</span> systemParamService<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u6DFB\u52A0&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">SystemParameterParam</span> param<span class="token punctuation">)</span><span class="token punctuation">{</span>
        systemParamService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u5206\u9875&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/page&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PageResult</span><span class="token punctuation">&lt;</span><span class="token class-name">SystemParameterDto</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ParameterObject</span> <span class="token class-name">PageParam</span> pageParam<span class="token punctuation">,</span>
                                                          <span class="token annotation punctuation">@ParameterObject</span> <span class="token class-name">SystemParameterParam</span> param<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>systemParamService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pageParam<span class="token punctuation">,</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java"><pre><code><span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&quot;\u7CFB\u7EDF\u53C2\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemParameterDto</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDto</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u53C2\u6570\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description<span class="token operator">=</span> <span class="token string">&quot;\u53C2\u6570\u952E\u540D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> paramKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u914D\u7F6E\u6587\u4EF6"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h4><div class="language-yaml"><pre><code><span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
<span class="token key atrule">bootx</span><span class="token punctuation">:</span>
  <span class="token key atrule">common</span><span class="token punctuation">:</span>
    <span class="token key atrule">swagger</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">author</span><span class="token punctuation">:</span> xxm
      <span class="token key atrule">version</span><span class="token punctuation">:</span> 1.1.0<span class="token punctuation">-</span>alpha<span class="token punctuation">-</span><span class="token number">3</span>
      <span class="token key atrule">title</span><span class="token punctuation">:</span> bootx\u5F00\u53D1\u5E73\u53F0\u5355\u4F53\u7248
      <span class="token key atrule">description</span><span class="token punctuation">:</span> bootx<span class="token punctuation">-</span>platform\u5F00\u53D1\u5E73\u53F0\u5355\u4F53\u7248
      <span class="token comment"># \u591A\u6A21\u5757\u626B\u7801</span>
      <span class="token key atrule">base-packages</span><span class="token punctuation">:</span>
        <span class="token key atrule">&quot;[\u57FA\u7840API]&quot;</span><span class="token punctuation">:</span> cn.bootx.baseapi
        <span class="token key atrule">&quot;[\u8EAB\u4EFD\u8BC6\u522B\u548C\u7BA1\u7406]&quot;</span><span class="token punctuation">:</span> cn.bootx.iam
        <span class="token key atrule">&quot;[\u6D88\u606F\u670D\u52A1]&quot;</span><span class="token punctuation">:</span> cn.bootx.notice
        <span class="token key atrule">&quot;[\u5546\u54C1\u670D\u52A1]&quot;</span><span class="token punctuation">:</span> cn.bootx.goods
        <span class="token key atrule">&quot;[\u652F\u4ED8\u670D\u52A1]&quot;</span><span class="token punctuation">:</span> cn.bootx.payment
        <span class="token key atrule">&quot;[\u9500\u552E\u670D\u52A1]&quot;</span><span class="token punctuation">:</span> cn.bootx.sales
        <span class="token key atrule">&quot;[\u8BA2\u5355\u670D\u52A1]&quot;</span><span class="token punctuation">:</span> cn.bootx.order
        <span class="token key atrule">&quot;[\u6F14\u793A\u6A21\u5757]&quot;</span><span class="token punctuation">:</span> cn.bootx.demo
        <span class="token comment"># \u652F\u6301\u4E00\u4E2A\u6A21\u5757\u626B\u63CF\u591A\u4E2A\u5305</span>
        <span class="token key atrule">&quot;[\u7B2C\u4E09\u65B9\u5BF9\u63A5]&quot;</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> cn.bootx.starter.dingtalk
          <span class="token punctuation">-</span> cn.bootx.starter.wecom
          <span class="token punctuation">-</span> cn.bootx.starter.wechat
        <span class="token key atrule">&quot;[\u81EA\u5B9A\u4E49starter\u7EC4\u4EF6]&quot;</span><span class="token punctuation">:</span> cn.bootx.starter
</code></pre></div>`,12),e=[o];function c(u,l,r,i,k,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
