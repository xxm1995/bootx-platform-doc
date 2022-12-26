import{_ as n,c as s,o as a,a as t}from"./app.032258ae.js";const y='{"title":"\u8BF4\u660E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"doc/server/common/RabbitMQ\u914D\u7F6E.md"}',p={},o=t(`<h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>RabbitMQ\u7684\u5E8F\u5217\u5316\u65B9\u5F0F\u8FDB\u884C\u4E86\u914D\u7F6E\uFF0C\u4F7F\u7528\u7684\u9879\u76EE\u901A\u7528\u9ED8\u8BA4\u5E8F\u5217\u5316\u65B9\u5F0F</li><li>\u63D0\u4F9B <code>RabbitTemplate</code> \u5BF9\u8C61</li><li>\u901A\u8FC7\u5BF9\u961F\u5217\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u5B9E\u73B0\u6D88\u606F\u63A5\u6536\u7684\u5206\u53D1</li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentEventCode</span> <span class="token punctuation">{</span>

    <span class="token comment">/** \u652F\u4ED8\u4E2D\u5FC3\u4EA4\u6362\u673A */</span>
    <span class="token class-name">String</span> <span class="token constant">EXCHANGE_PAYMENT</span> <span class="token operator">=</span> <span class="token string">&quot;service.payment&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u652F\u4ED8\u5B8C\u6210 */</span>
    <span class="token class-name">String</span> <span class="token constant">PAY_COMPLETE</span> <span class="token operator">=</span> <span class="token string">&quot;pay.complete&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u53D1\u9001</strong></p><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
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

</code></pre></div><p><strong>\u63A5\u6536</strong></p><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
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
</code></pre></div><p><strong>\u914D\u7F6E</strong></p><div class="language-java"><pre><code><span class="token comment">/**
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
</code></pre></div>`,10),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{y as __pageData,_ as default};
