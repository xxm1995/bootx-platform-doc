import{_ as n,c as a,o as s,a as t}from"./app.206820c1.js";const _='{"title":"\u529F\u80FD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"doc/server/starter/Quartz\u5B9A\u65F6\u4EFB\u52A1.md"}',e={},p=t(`<h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u5C01\u88C5Quartz\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u901A\u8FC7web\u754C\u9762\u6765\u63A7\u5236\u6267\u884C</li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u81EA\u5B9A\u4E49<code>Job</code>\u4EFB\u52A1\u7C7B\uFF0C\u7136\u540E\u5728Web\u7BA1\u7406\u9875\u9762\u4E0A\u6DFB\u52A0\u8BE5\u4EFB\u52A1\u5E76\u542F\u52A8\u3002</p><blockquote><p><code>Job</code>\u4EFB\u52A1\u7C7B\u53EF\u4EE5\u6B63\u5E38\u6CE8\u5165Spring Bean\u5BF9\u8C61\uFF0CQuartz\u5177\u4F53\u4F7F\u7528\u67E5\u770B\u5B98\u65B9\u6559\u7A0B</p></blockquote><div class="language-java"><pre><code><span class="token comment">/**
 * \u6D4B\u8BD5\u5B9A\u65F6\u4EFB\u52A1
 * @author xxm
 * @date 2021/11/8 
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@DisallowConcurrentExecution</span>
<span class="token annotation punctuation">@PersistJobDataAfterExecution</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTask</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u82E5\u53C2\u6570\u53D8\u91CF\u540D\u4FEE\u6539 QuartzJobScheduler \u4E2D\u4E5F\u9700\u5BF9\u5E94\u4FEE\u6539
     * \u9700\u8981\u7ED9\u4E00\u4E2Aset\u65B9\u6CD5, \u8BA9\u7CFB\u7EDF\u8BBE\u7F6E\u503C
     */</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> parameter<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u4EFB\u52A1start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadUtil</span><span class="token punctuation">.</span><span class="token function">safeSleep</span><span class="token punctuation">(</span><span class="token number">5000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u4EFB\u52A1end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u53C2\u6570: {}&quot;</span><span class="token punctuation">,</span>parameter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-yaml"><pre><code><span class="token key atrule">quartz</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6301\u4E45\u5316\u65B9\u5F0F</span>
  <span class="token key atrule">job-store-type</span><span class="token punctuation">:</span> jdbc
  <span class="token comment">#\u5B9A\u65F6\u4EFB\u52A1\u542F\u52A8\u5F00\u5173\uFF0Ctrue-\u5F00  false-\u5173</span>
  <span class="token key atrule">auto-startup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment">#\u542F\u52A8\u65F6\u66F4\u65B0\u5DF1\u5B58\u5728\u7684Job</span>
  <span class="token key atrule">overwrite-existing-jobs</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">properties</span><span class="token punctuation">:</span>
    <span class="token key atrule">org</span><span class="token punctuation">:</span>
      <span class="token key atrule">quartz</span><span class="token punctuation">:</span>
      	<span class="token comment"># \u6267\u884C\u5668</span>
        <span class="token key atrule">scheduler</span><span class="token punctuation">:</span>
          <span class="token comment"># \u6267\u884C\u5668\u540D\u79F0</span>
          <span class="token key atrule">instanceName</span><span class="token punctuation">:</span> quartzScheduler
          <span class="token comment"># id\u914D\u7F6E</span>
          <span class="token key atrule">instanceId</span><span class="token punctuation">:</span> AUTO
        <span class="token comment"># \u7EBF\u7A0B\u6C60</span>
        <span class="token key atrule">threadPool</span><span class="token punctuation">:</span>
          <span class="token key atrule">threadCount</span><span class="token punctuation">:</span> <span class="token number">10</span>
          <span class="token key atrule">threadPriority</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">threadsInheritContextClassLoaderOfInitializingThread</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div>`,8),o=[p];function c(l,u,i,r,k,d){return s(),a("div",null,o)}var h=n(e,[["render",c]]);export{_ as __pageData,h as default};
