import{_ as n,c as a,o as s,a as t}from"./app.9c6e725a.js";const m='{"title":"\u529F\u80FD\u88C1\u526A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53BB\u9664RabbitMQ\u4F9D\u8D56","slug":"\u53BB\u9664rabbitmq\u4F9D\u8D56"},{"level":2,"title":"\u53BB\u9664MongoDB\u4F9D\u8D56","slug":"\u53BB\u9664mongodb\u4F9D\u8D56"},{"level":2,"title":"\u53BB\u9664Plumelog\u65E5\u5FD7\u6536\u96C6","slug":"\u53BB\u9664plumelog\u65E5\u5FD7\u6536\u96C6"},{"level":2,"title":"\u53BB\u9664\u5176\u4ED6\u529F\u80FD","slug":"\u53BB\u9664\u5176\u4ED6\u529F\u80FD"}],"relativePath":"platform/overview/config/\u529F\u80FD\u88C1\u526A.md"}',o={},e=t(`<h1 id="\u529F\u80FD\u88C1\u526A" tabindex="-1">\u529F\u80FD\u88C1\u526A <a class="header-anchor" href="#\u529F\u80FD\u88C1\u526A" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>\u5BF9\u4E8E\u4E0D\u540C\u7C7B\u578B\u7684\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u8981\u9700\u8981\u7684\u529F\u80FD\u4E5F\u4E0D\u5C3D\u76F8\u540C\uFF0C\u6B64\u65F6\u5BF9\u4E8E\u7528\u4E0D\u5230\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u5C31\u53EF\u80FD\u9700\u8981\u53BB\u9664\uFF0C\u4E0B\u9762\u5C31\u4F1A\u8BF4\u660E\u4E00\u4E9B\u975E\u5FC5\u987B\u7684\u529F\u80FD\u548C\u6A21\u5757\u5982\u4F55\u8FDB\u884C\u53BB\u9664\u3002</li><li>\u4E0D\u540C\u6A21\u5757\u4E4B\u95F4\u975E\u5FC5\u8981\u4E0D\u4F1A\u6709\u4F9D\u8D56\uFF0C\u901A\u5E38\u5C06<code>bootx-start</code>\u7684<code>pom.xml</code>\u4E2D\u7684<code>bootx-demo</code>\u6A21\u5757\u5220\u9664\u540E\uFF0C\u542F\u52A8\u65F6\u5C31\u9ED8\u8BA4\u4E0D\u4F9D\u8D56\u4EFB\u4F55\u4E1A\u52A1\u6A21\u5757\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u9009\u62E9\u8981\u5F15\u5165\u54EA\u4E9B\u6A21\u5757\u529F\u80FD\u3002</li></ul></div><h2 id="\u53BB\u9664rabbitmq\u4F9D\u8D56" tabindex="-1">\u53BB\u9664RabbitMQ\u4F9D\u8D56 <a class="header-anchor" href="#\u53BB\u9664rabbitmq\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5728\u4F7F\u7528\u652F\u4ED8\u670D\u52A1<code>service-payment</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u63A8\u8350\u53BB\u9664<code>RabbitMQ</code>\u7684\u4F9D\u8D56\uFF0C\u5982\u679C\u53BB\u9664\u7684\u8BDD\uFF0C\u9700\u8981\u5C06\u5BF9\u5E94\u7684\u6D88\u606F\u901A\u77E5\u529F\u80FD\u91CD\u65B0\u5B9E\u73B0\u4E00\u4EFD\u3002</p></div><ol><li>\u5728<code>service-payment</code>\u6A21\u5757\u548C<code>bootx-demo</code>\u6A21\u5757\u4E0B\u7684<code>pom.xml</code>\u6587\u4EF6\u4E2D\uFF0C\u5220\u6389<code>common-rabbitmq</code>\u7684\u4F9D\u8D56\uFF0C<div class="language-xml"><pre><code><span class="token comment">&lt;!-- rabbitmq\u6D88\u606F\u961F\u5217 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.bootx.platform<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>common-rabbitmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${bootx-platform.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li>\u5220\u6389<code>service-payment</code>\u4E2D\u7528\u5230\u6D88\u606F\u901A\u77E5\u7684\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F\u4EE5\u4E0B\u8FD9\u4E9B\u7C7B\uFF1A <ul><li><code>cn.bootx.payment.configuration.PaymentRabbitMqConfiguration</code> \u652F\u4ED8\u76F8\u5173\u6D88\u606F\u961F\u5217\u914D\u7F6E</li><li><code>cn.bootx.payment.mq.PaymentEventSender</code> \u652F\u4ED8\u4E2D\u5FC3\u6D88\u606F\u53D1\u9001\u5668</li><li><code>cn.bootx.payment.mq.PaymentMessageListener</code>\uFF0C\u6D88\u606F\u63A5\u6536</li></ul></li><li>\u5220\u6389<code>bootx-demo</code>\u4E2D\u7528\u5230\u6D88\u606F\u901A\u77E5\u7684\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F<code>cn.bootx.demo.core.mq.rabbit</code>\u5305\u4E0B\u7684\u7684\u7C7B\u3002</li><li>\u5728<code>bootx-start</code>\u6A21\u5757\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u5220\u6389\u5BF9\u5E94\u7684\u914D\u7F6E\u9879\uFF0C\u7136\u540E\u53EF\u4EE5\u5220\u6389<code>common-rabbitmq</code>\u6A21\u5757\uFF0C\u81F3\u6B64\u9879\u76EE\u4E2D\u7684<code>RabbitMQ</code>\u4F9D\u8D56\u5C31\u5DF2\u7ECF\u5168\u90E8\u53BB\u9664</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E0D\u53BB\u9664\u9879\u76EE\u4E2DRabbitMQ\u4F9D\u8D56\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u9879<code>bootx.common.rabbit.enable</code>\u8BBE\u4E3A<code>false</code>\uFF0C\u540C\u65F6\u914D\u5408<code>@ConditionalOnRabbit</code>\u6CE8\u89E3\u5728\u6D88\u606F\u5BF9\u8C61\u58F0\u660E\u914D\u7F6E\u7C7B\u7684\u4E0A\u9762\uFF0C \u8BA9\u5B83\u4E0D\u6CE8\u518C\u5230Spring\u5BB9\u5668\u4E2D\uFF0C\u8FD9\u6837\u4E0D\u914D\u7F6E<code>RabbitMQ</code>\u8FDE\u63A5\u5730\u5740\u4E5F\u4E0D\u4F1A\u4E00\u76F4\u62A5\u9519\uFF0C\u53EA\u4F1A\u5728\u542F\u52A8\u7684\u65F6\u5019\u629B\u51FA\u4E00\u6B21\u8FDE\u63A5\u5931\u8D25\u9519\u8BEF\uFF0C\u5176\u4ED6\u65F6\u5019\u5C31\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF0C\u5C31\u4E0D\u9700\u8981\u5BF9\u4EE3\u7801\u8FDB\u884C\u6539\u52A8\u3002</p></div><p>\u6CE8\u89E3\u8BF4\u660E</p><div class="language-java"><pre><code><span class="token comment">/**
 * \u5224\u65AD\u7CFB\u7EDF\u662F\u5426\u5728\u542F\u7528\u4E86Rabbit, \u672A\u542F\u7528\u7684\u60C5\u51B5\u4E0B\u4E0D\u5C06Bean\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D
 *
 * \u4F7F\u7528\u573A\u666F: \u5728\u4E0D\u4F7F\u7528Rabbit\u4E2D\u95F4\u4EF6\u7684\u573A\u5408\u91CC, \u4F46\u672A\u53BB\u9664Rabbit\u76F8\u5173\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B, \u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u4E2D\u5173\u95EDRabbit\u9009\u9879, \u6765\u5B9E\u73B0\u7CFB\u7EDF\u7684\u6B63\u5E38\u4F7F\u7528,
 * \u4E0D\u8FD9\u6837\u5904\u7406\u4F1A\u5BFC\u81F4RabbitMQ\u8FDB\u884C\u65E0\u9650\u5C1D\u8BD5\u91CD\u8FDE\u670D\u52A1\u5668
 * \u9700\u8981\u5728\u4F7F\u7528 @RabbitListener \u6807\u6CE8\u65B9\u6CD5\u7684\u7C7B\u4E0A\u52A0\u4E0A\u8FD9\u4E2A\u6CE8\u89E3, \u8BA9\u8FD9\u4E2A\u5BF9\u8C61\u4E0D\u6CE8\u518C\u5230\u7CFB\u7EDF\u4E2D
 * @author xxm
 * @date 2022/12/12
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">OnRabbitEnable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnRabbit</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u89E3\u4F7F\u7528</p><div class="language-java"><pre><code><span class="token comment">/**
 * \u901A\u5E38\u653E\u5728\u6709 @RabbitListener \u6807\u6CE8\u5904\u7406\u65B9\u6CD5\u7684\u7C7B\u4E0A\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u89E6\u53D1\u65E0\u9650\u62A5\u9519\u4E86
 * @author xxm
 * @date 2022/5/30
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConditionalOnRabbit</span>
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
</code></pre></div><h2 id="\u53BB\u9664mongodb\u4F9D\u8D56" tabindex="-1">\u53BB\u9664MongoDB\u4F9D\u8D56 <a class="header-anchor" href="#\u53BB\u9664mongodb\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u76EE\u524D<code>MongoDB</code>\u7528\u4E8E\u4E86\u65E5\u5FD7\u548C\u6587\u4EF6\u5B58\u50A8\uFF0C\u4EE5\u53CA\u4F5C\u4E3A\u4E00\u79CD<code>\u5E8F\u5217\u751F\u6210\u5668</code>\u7684\u5B9E\u73B0\u65B9\u5F0F\u6240\u4F9D\u8D56\uFF0C\u5728\u53BB\u6389<code>MongoDB</code>\u7684\u4F9D\u8D56\u540E\uFF0C\u9700\u8981\u5C06\u8FD9\u51E0\u79CD\u914D\u7F6E\u8BBE\u7F6E\u4E3A\u975EMongoDB\u7684\u65B9\u5F0F\u3002 \u5728\u4E0D\u53BB\u9664<code>MongoDB</code>\u4F9D\u8D56\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u914D\u7F6E\u8FDE\u63A5\u5730\u5740\u4E5F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF0C\u53EA\u4F1A\u5728\u542F\u52A8\u540E\u62A5\u4E00\u6B21\u8FDE\u63A5\u8D85\u65F6\u7684\u9519\u8BEF</p></div><h2 id="\u53BB\u9664plumelog\u65E5\u5FD7\u6536\u96C6" tabindex="-1">\u53BB\u9664Plumelog\u65E5\u5FD7\u6536\u96C6 <a class="header-anchor" href="#\u53BB\u9664plumelog\u65E5\u5FD7\u6536\u96C6" aria-hidden="true">#</a></h2><ol><li>\u5728\u9879\u76EE<code>common-log</code>\u6A21\u5757\u4E2D<code>pom.xml</code>\u6587\u4EF6\u4E2D\u53BB\u9664<code>plumelog-lite-spring-boot-starter</code>\u4F9D\u8D56</li><li>\u5728\u9879\u76EE\`\`\u4E0B\u7684<code>logback-spring.xml</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u5220\u6389<code>&lt;include resource=&quot;cn/bootx/common/log/logback-plumelog.xml&quot;/&gt;</code>\u548C<code> &lt;appender-ref ref=&quot;plumelog&quot;/&gt;</code>\u4E24\u884C</li></ol><blockquote><p>\u60F3\u8981\u5F7B\u5E95\u53BB\u9664\u53EF\u4EE5\u5168\u5C40\u641C\u7D22\u4E00\u4E0B<code>plumelog</code>\u5173\u952E\u5B57\uFF0C\u628A\u5BF9\u5E94\u7684\u4EE3\u7801\u548C\u914D\u7F6E\u5220\u9664\u5373\u53EF</p></blockquote><h2 id="\u53BB\u9664\u5176\u4ED6\u529F\u80FD" tabindex="-1">\u53BB\u9664\u5176\u4ED6\u529F\u80FD <a class="header-anchor" href="#\u53BB\u9664\u5176\u4ED6\u529F\u80FD" aria-hidden="true">#</a></h2><p>\u5220\u9664\u5BF9\u5E94\u6A21\u5757\u548C\u5BF9\u5E94\u7684\u8868\u6587\u4EF6\uFF0C\u7136\u540E\u5C06\u7528\u5230\u8BE5\u6A21\u5757\u7684\u4EE3\u7801\u8FDB\u884C\u4FEE\u6B63\u5373\u53EF\u3002</p>`,17),c=[e];function p(l,i,u,d,r,k){return s(),a("div",null,c)}var g=n(o,[["render",p]]);export{m as __pageData,g as default};
