import{_ as n,c as a,o as s,a as t}from"./app.9c6e725a.js";const b='{"title":"RabbitMQ\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u58F0\u660E\u961F\u5217","slug":"\u58F0\u660E\u961F\u5217"},{"level":3,"title":"\u53D1\u9001\u6D88\u606F","slug":"\u53D1\u9001\u6D88\u606F"},{"level":3,"title":"\u63A5\u6536\u6D88\u606F","slug":"\u63A5\u6536\u6D88\u606F"},{"level":2,"title":"@ConditionalOnRabbit\u4F7F\u7528\u8BF4\u660E","slug":"conditionalonrabbit\u4F7F\u7528\u8BF4\u660E"}],"relativePath":"platform/server/common/RabbitMQ\u914D\u7F6E.md"}',p={},o=t(`<h1 id="rabbitmq\u914D\u7F6E" tabindex="-1">RabbitMQ\u914D\u7F6E <a class="header-anchor" href="#rabbitmq\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>RabbitMQ\u7684\u5E8F\u5217\u5316\u65B9\u5F0F\u8FDB\u884C\u4E86\u914D\u7F6E\uFF0C\u4F7F\u7528\u7684\u9879\u76EE\u901A\u7528\u9ED8\u8BA4\u5E8F\u5217\u5316\u65B9\u5F0F\uFF08\u4E0D\u4FDD\u7559\u6570\u636E\u7C7B\u578B\uFF0C\u5C31\u662F\u5E38\u89C4\u7684\u90A3\u79CDjson\uFF09</li><li>\u63D0\u4F9B <code>RabbitTemplate</code> \u5BF9\u8C61\u7684\u914D\u7F6E</li><li>\u901A\u8FC7\u5BF9\u961F\u5217\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u5B9E\u73B0\u6D88\u606F\u63A5\u6536\u7684\u5206\u53D1</li><li>\u63D0\u4F9B<code>ConditionalOnRabbit</code>\uFF0C\u7528\u6765\u63A7\u5236\u5728\u6CA1\u542F\u7528Rabbit\u60C5\u51B5\u4E0B. \u4E0D\u5C06 @RabbitListener \u4FEE\u9970\u7684\u76D1\u542C\u5668\u6CE8\u518C\u5230Spring\u5BB9\u5668\u4E2D</li></ul><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token comment"># \u662F\u5426\u542F\u7528Rabbit, \u9700\u914D\u5408 ConditionalOnRabbit \u6CE8\u89E3\u4F7F\u7528</span>
<span class="token key atrule">bootx.common.rabbit</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre></div><h2 id="\u58F0\u660E\u961F\u5217" tabindex="-1">\u58F0\u660E\u961F\u5217 <a class="header-anchor" href="#\u58F0\u660E\u961F\u5217" aria-hidden="true">#</a></h2><p>\u5E38\u91CF\u5B9A\u4E49\uFF1A</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentEventCode</span> <span class="token punctuation">{</span>

    <span class="token comment">/** \u652F\u4ED8\u4E2D\u5FC3\u4EA4\u6362\u673A */</span>
    <span class="token class-name">String</span> <span class="token constant">EXCHANGE_PAYMENT</span> <span class="token operator">=</span> <span class="token string">&quot;service.payment&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u652F\u4ED8\u5B8C\u6210 */</span>
    <span class="token class-name">String</span> <span class="token constant">PAY_COMPLETE</span> <span class="token operator">=</span> <span class="token string">&quot;pay.complete&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u961F\u5217\u7ED1\u5B9A</p><div class="language-java"><pre><code><span class="token comment">/**
* \u6D88\u606F\u961F\u5217\u914D\u7F6E
* @author xxm
* @date 2021/6/25
*/</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentRabbitMqConfiguration</span> <span class="token punctuation">{</span>
    
    <span class="token comment">/** \u652F\u4ED8\u5B8C\u6210\u961F\u5217 */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">payCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">PAY_COMPLETE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/** \u4EA4\u6362\u673A */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DirectExchange</span> <span class="token function">paymentExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DirectExchange</span><span class="token punctuation">(</span><span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">EXCHANGE_PAYMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/** \u7ED1\u5B9A\u652F\u4ED8\u5B8C\u6210 */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">bindPayCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// </span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">payCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">paymentExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">PAY_COMPLETE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u53D1\u9001\u6D88\u606F" tabindex="-1">\u53D1\u9001\u6D88\u606F <a class="header-anchor" href="#\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentEventSender</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>
    <span class="token comment">/**
    * \u652F\u4ED8\u5B8C\u6210 \u4E8B\u4EF6\u53D1\u5E03
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendPaymentCompleted</span><span class="token punctuation">(</span><span class="token class-name">PayResult</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>
            <span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">EXCHANGE_PAYMENT</span><span class="token punctuation">,</span>
            <span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">PAY_COMPLETE</span><span class="token punctuation">,</span>
            event
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u63A5\u6536\u6D88\u606F" tabindex="-1">\u63A5\u6536\u6D88\u606F <a class="header-anchor" href="#\u63A5\u6536\u6D88\u606F" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentMessageListener</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * \u652F\u4ED8\u6210\u529F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token class-name">PaymentEventCode</span><span class="token punctuation">.</span><span class="token constant">PAY_COMPLETE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payCancel</span><span class="token punctuation">(</span><span class="token class-name">PayResult</span> payResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u652F\u4ED8\u5B8C\u6210\u4E8B\u4EF6:{}&quot;</span><span class="token punctuation">,</span>payResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="conditionalonrabbit\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><code>@ConditionalOnRabbit</code>\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#conditionalonrabbit\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5728\u4E0D\u4F7F\u7528Rabbit\u4E2D\u95F4\u4EF6\u4F46\u672A\u53BB\u9664Rabbit\u4F9D\u8D56\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u4E2D\u5173\u95EDRabbit\u9009\u9879\uFF0C\u540C\u65F6\u5C06\u8FD9\u4E2A\u6CE8\u89E3\u5230\u6709<code>@RabbitListener</code>\u6807\u5FD7\u7684\u7C7B\u4E0A\uFF0C\u8BA9\u8FD9\u4E2A\u5BF9\u8C61\u4E0D\u6CE8\u518C\u5230Spring\u5BB9\u5668\u4E2D, \u4ECE\u800C\u907F\u514D<code>RabbitMQ</code>\u8FDB\u884C\u65E0\u9650\u5C1D\u8BD5\u91CD\u8FDE\u670D\u52A1\u5668\uFF0C\u5BFC\u81F4\u9879\u76EE\u4E00\u76F4\u629B\u51FA\u5F02\u5E38\uFF0C\u5F71\u54CD\u5F00\u53D1\u548C\u4F7F\u7528\u3002</p></div><p>\u4F7F\u7528\u5B9E\u4F8B</p><div class="language-java"><pre><code><span class="token comment">/**
 * @author xxm
 * @date 2022/5/30
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@ConditionalOnRabbit</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoRabbitMqMessageListener</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * \u6D4B\u8BD5MQ\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;demo.testMq&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payCancel</span><span class="token punctuation">(</span><span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hello<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5MQ\u6D88\u606F :{}&quot;</span><span class="token punctuation">,</span> hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,18),e=[o];function c(l,i,u,k,r,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{b as __pageData,h as default};
