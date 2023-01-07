import{_ as n,c as s,o as a,a as t}from"./app.95c78e2d.js";const m='{"title":"Websocket\u5C01\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":3,"title":"\u666E\u901A\u8FDE\u63A5","slug":"\u666E\u901A\u8FDE\u63A5"},{"level":3,"title":"\u6388\u6743\u8FDE\u63A5","slug":"\u6388\u6743\u8FDE\u63A5"},{"level":2,"title":"\u76F8\u5173\u7C7B","slug":"\u76F8\u5173\u7C7B"}],"relativePath":"doc/server/common/Websocket\u5C01\u88C5.md"}',p={},o=t(`<h1 id="websocket\u5C01\u88C5" tabindex="-1">Websocket\u5C01\u88C5 <a class="header-anchor" href="#websocket\u5C01\u88C5" aria-hidden="true">#</a></h1><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u63D0\u4F9B\u539F\u751F<code>Websocket</code> \u548C <code>SpringWebsocker</code>\u7684\u8FDE\u63A5\u7BA1\u7406\u5668\uFF0C\u652F\u6301\u4E00\u4E2A\u7528\u6237\u540C\u65F6\u53EF\u4EE5\u8FDB\u884C\u591A\u4E2A\u8BF7\u6C42\u8FDE\u63A5</li><li>\u53EF\u4EE5\u914D\u7F6E\u4F7FWebsocket\u53EA\u6709\u767B\u5F55\u72B6\u6001\u4E0B\u624D\u53EF\u4EE5\u8FDE\u63A5</li><li>\u63D0\u4F9B\u591A\u79CD\u5230\u524D\u53F0\u7684\u901A\u77E5\u65B9\u5F0F\uFF0C\u5982\u901A\u77E5\u6846\u6D88\u606F\uFF0C\u4E8B\u4EF6\u901A\u77E5\u7B49</li><li>\u63D0\u4F9B\u7528\u6237\u5168\u5C40\u7EA7\u522B\u7684<code>Websocket</code> \u670D\u52A1\uFF0C\u65B9\u4FBFws\u6D88\u606F\u63A8\u9001</li><li>\u524D\u7AEF\u5C01\u88C5\u7528\u6237\u5168\u5C40\u6D88\u606F\u901A\u77E5\u7684<code>Websocket</code>\u548C \u5BF9\u5E94\u7684\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u901A\u8FC7\u76D1\u542C\u6307\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5C06\u524D\u53F0\u6D88\u606F\u63A8\u9001\u5230\u4E0D\u540C\u7684\u9875\u9762\u4E2D</li></ul><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5BF9\u5E94\u524D\u7AEF\u4F7F\u7528\u65B9\u6CD5\u89C1 <a href="/doc/front/vue2/Websocket\u4F7F\u7528\u8BF4\u660E.html">Websocket\u4F7F\u7528\u8BF4\u660E(Vue2)</a>\uFF0C<a href="/doc/front/vue2/Websocket\u4F7F\u7528\u8BF4\u660E.html">Websocket\u4F7F\u7528\u8BF4\u660E(Vue3)</a>\u3002</p><p>\u5728\u4F7F\u7528\u524D\uFF0C\u9700\u8981\u767B\u5F55Web\u7BA1\u7406\u540E\u53F0\uFF0C\u5728<code>\u7CFB\u7EDF\u914D\u7F6E</code>\u4E2D<code>\u7CFB\u7EDF\u53C2\u6570</code>\u91CC\u914D\u7F6E <code>websocket\u670D\u52A1\u5668\u5730\u5740</code>\u3002</p></div><h3 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h3><p>\u7CFB\u7EDF\u4E2D\u4F7F\u7528<code>Websocket</code>\u63A8\u9001\u6D88\u606F\u7684\u573A\u666F\u4E3B\u8981\u6709\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F\u5728\u7528\u6237\u767B\u5F55\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u63A8\u9001\uFF0C\u4E00\u79CD\u662F\u5728\u7528\u6237\u672A\u767B\u5F55\u7684\u60C5\u51B5\u4E0B\u63A8\u9001\u3002</p><p>\u5728\u7528\u6237\u672A\u767B\u5F55\u60C5\u51B5\u4E0B\u4F7F\u7528\u65F6\uFF0C \u4E00\u822C\u9700\u8981\u5F00\u53D1\u8005\u5728\u524D\u540E\u7AEF\u7EA6\u5B9A\u4E00\u79CD\u901A\u4FE1<code>sessionId</code>\u7684\u751F\u6210\u65B9\u5F0F\uFF0C\u6765\u5B9E\u73B0\u53CC\u65B9\u7684\u901A\u4FE1\u3002 \u800C\u5728\u7528\u6237\u767B\u5F55\u60C5\u51B5\u4E0B\u8FDB\u884C\u901A\u4FE1\u65F6\uFF0C\u4E00\u822C\u662F\u4F7F\u7528\u7528\u6237\u7684<code>token</code>\u4F5C\u4E3A<code>sessionId</code>\uFF0C \u5728\u6709\u4E9B\u5B89\u5168\u6027\u8981\u6C42\u6BD4\u8F83\u9AD8\u7684\u573A\u5408\uFF0C\u9700\u8981\u6821\u9A8C\u7528\u6237\u7684\u5408\u6CD5\u6027\uFF0C\u901A\u8FC7Spring Websocket\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C \u4F7F\u7528Spring\u62E6\u622A\u673A\u5236\uFF0C\u5BF9\u8FDE\u63A5\u8FDB\u884C\u6821\u9A8C\u7528\u6237\u7684\u5408\u6CD5\u6027\u3002</p><h3 id="\u666E\u901A\u8FDE\u63A5" tabindex="-1">\u666E\u901A\u8FDE\u63A5 <a class="header-anchor" href="#\u666E\u901A\u8FDE\u63A5" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7<code>javaEE</code>\u65B9\u5F0F\u6216<code>Spring Websocket</code>\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A\u65B9\u6CD5\u7C7B\uFF0C\u7136\u540E\u5728\u9009\u62E9\u5BF9\u5E94<code>SpringWebSocketSessionManager</code>\u6216<code>WebSocketSessionManager</code>\u4E00\u4E2A\u4F5C\u4E3A\u4F1A\u8BDD\u7BA1\u7406\u5668\uFF0C \u8FD9\u4E24\u4E2A\u4F1A\u8BDD\u7BA1\u7406\u5668\u63D0\u4F9B\u4E86\u65B0\u5EFA\u3001\u5220\u9664\u4F1A\u8BDD\u7684\u7BA1\u7406\uFF0C\u4EE5\u53CA<code>\u4F1A\u8BDDid</code>\u4E0E<code>\u7528\u6237\u6807\u8BC6id</code>\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\u3002</p><p>\u6F14\u793A\u7C7B\uFF0C\u89C1\u7CFB\u7EDF\u4E2D<code>WebSocketDemo</code>\u3002\u901A\u8FC7<code>WsRes</code>\u5DE5\u5177\u7C7B,\u53EF\u4EE5\u4FBF\u6377\u7684\u521B\u5EFA<code>WsResult</code>websocket\u54CD\u5E94\u6D88\u606F\u7C7B</p><div class="language-java"><pre><code><span class="token comment">/**
 * websocket demo
 *
 * @author xxm
 * @date 2022/3/27
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ServerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/test/ws/{userId}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">WebSocketSessionManager</span> wsManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocketSessionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u8BB0\u5F55\u5F53\u524D\u5728\u7EBF\u8FDE\u63A5\u6570 */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">AtomicInteger</span> onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u8FDE\u63A5\u5EFA\u7ACB\u6210\u529F\u8C03\u7528\u7684\u65B9\u6CD5
     */</span>
    <span class="token annotation punctuation">@OnOpen</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        wsManager<span class="token punctuation">.</span><span class="token function">addSession</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span> session<span class="token punctuation">)</span><span class="token punctuation">;</span>
        onlineCount<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u7EBF\u6570\u52A01</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u6709\u65B0\u8FDE\u63A5\u52A0\u5165\uFF1A{}\uFF0C\u5F53\u524D\u5728\u7EBF\u4EBA\u6570\u4E3A\uFF1A{}&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">,</span> onlineCount<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u8FDE\u63A5\u5173\u95ED\u8C03\u7528\u7684\u65B9\u6CD5
     */</span>
    <span class="token annotation punctuation">@OnClose</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        onlineCount<span class="token punctuation">.</span><span class="token function">decrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u7EBF\u6570\u51CF1</span>
        <span class="token class-name">String</span> userId <span class="token operator">=</span> wsManager<span class="token punctuation">.</span><span class="token function">getIdBySession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
        wsManager<span class="token punctuation">.</span><span class="token function">removeSession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u6709\u4E00\u8FDE\u63A5\u5173\u95ED\uFF1A{}\uFF0C\u5F53\u524D\u5728\u7EBF\u4EBA\u6570\u4E3A\uFF1A{}&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">,</span> onlineCount<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u6536\u5230\u5BA2\u6237\u7AEF\u6D88\u606F\u540E\u8C03\u7528\u7684\u65B9\u6CD5
     * @param message \u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@OnMessage</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Long</span> userId <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>wsManager<span class="token punctuation">.</span><span class="token function">getIdBySession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF[{}]\u7684\u6D88\u606F:{}&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;\u54CD\u5E94: &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@OnError</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;{} \u53D1\u751F\u9519\u8BEF&quot;</span><span class="token punctuation">,</span> session<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        error<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u670D\u52A1\u7AEF\u53D1\u9001\u6D88\u606F\u7ED9\u5BA2\u6237\u7AEF(\u5355\u53D1)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Session</span><span class="token punctuation">&gt;</span></span> sessions <span class="token operator">=</span> wsManager<span class="token punctuation">.</span><span class="token function">getSessionsById</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Session</span> session <span class="token operator">:</span> sessions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                session<span class="token punctuation">.</span><span class="token function">getBasicRemote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u7AEF\u53D1\u9001\u6D88\u606F\u7ED9\u5BA2\u6237\u7AEF\u5931\u8D25\uFF1A&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u670D\u52A1\u7AEF\u53D1\u9001\u6D88\u606F\u7ED9\u5BA2\u6237\u7AEF(\u5168\u53D1)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Session</span><span class="token punctuation">&gt;</span></span> sessions <span class="token operator">=</span> wsManager<span class="token punctuation">.</span><span class="token function">getSessions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Session</span> session <span class="token operator">:</span> sessions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                session<span class="token punctuation">.</span><span class="token function">getBasicRemote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u7AEF\u53D1\u9001\u6D88\u606F\u7ED9\u5BA2\u6237\u7AEF\u5931\u8D25\uFF1A&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6388\u6743\u8FDE\u63A5" tabindex="-1">\u6388\u6743\u8FDE\u63A5 <a class="header-anchor" href="#\u6388\u6743\u8FDE\u63A5" aria-hidden="true">#</a></h3><p>\u901A\u5E38\u5F02\u6B65\u4E8B\u4EF6\u6267\u884C\u5B8C\u6210\uFF0C\u6216\u8005\u63A5\u6536\u5230\u4E86\u65B0\u6D88\u606F\uFF0C\u4F1A\u4E3B\u52A8\u901A\u77E5\u5230\u5BF9\u5E94\u7684\u7528\u6237\uFF0C\u5BF9\u4E8E\u8FD9\u4E2A\u573A\u666F\uFF0C\u524D\u63D0\u8981\u6C42\u5C31\u662F\u9700\u8981\u7528\u6237\u8FDB\u884C\u767B\u5F55\uFF0C\u56E0\u4E3A<code>websocket</code>\u9ED8\u8BA4\u662F\u6CA1\u6709\u63D0\u4F9B\u767B\u5F55\u9274\u6743\u4E00\u7CFB\u5217\u7684\u80FD\u529B\uFF0C \u6240\u4EE5\u53EA\u80FD\u6211\u4EEC\u81EA\u5DF1\u8FDB\u884C\u4E86\u5B9E\u73B0\u3002\u76EE\u524D\u662F\u63D0\u4F9B\u4E86<code>UserWsNoticeService</code>\u670D\u52A1\uFF0C\u901A\u8FC7\u8C03\u7528\u5B83\u6765\u5BF9\u7528\u6237\u8FDB\u884C\u6D88\u606F\u7684\u63A8\u9001\uFF0C\u5728\u7528\u6237\u767B\u9646\u540E\u4F1A\u81EA\u52A8\u8FDE\u63A5\u5B83\uFF0C\u9000\u51FA\u540E\u540E\u7AEF\u4E5F\u4F1A\u65AD\u6389\u6B64\u7528\u6237\u6240\u6709\u7684\u8FDE\u63A5\u3002</p><p>\u4F7F\u7528\u793A\u4F8B \u6CE8\u5165<code>UserWsNoticeService</code>\u670D\u52A1\uFF0C\u8C03\u7528\u5BF9\u5E94\u65B9\u6CD5\u8FDB\u884C\u6D88\u606F\u7684\u63A8\u9001\uFF0C\u901A\u8FC7<code>WsRes</code>\u5DE5\u5177\u7C7B,\u53EF\u4EE5\u4FBF\u6377\u7684\u521B\u5EFA<code>WsResult</code>websocket\u54CD\u5E94\u6D88\u606F\u7C7B</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u5168\u5C40ws\u6D88\u606F\u901A\u77E5\u6D4B\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/userNotice&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">userNotice</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u63A8\u9001\u6D88\u606F\u901A\u77E5\u6846</span>
    <span class="token class-name">WsResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token class-name">WsRes</span><span class="token punctuation">.</span><span class="token function">notificationError</span><span class="token punctuation">(</span><span class="token string">&quot;\u8B66\u544A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userWsNoticeService<span class="token punctuation">.</span><span class="token function">sendMessageByUser</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u63A8\u9001\u6D88\u606F\u4E8B\u4EF6(\u901A\u5E38\u7531\u6307\u5B9A\u9875\u9762\u8FDB\u884C\u76D1\u542C)</span>
    result <span class="token operator">=</span> <span class="token class-name">WsRes</span><span class="token punctuation">.</span><span class="token function">eventNotice</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userWsNoticeService<span class="token punctuation">.</span><span class="token function">sendMessageByUser</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u76F8\u5173\u7C7B" tabindex="-1">\u76F8\u5173\u7C7B <a class="header-anchor" href="#\u76F8\u5173\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>SpringWebSocketSessionManager</code> websocket\u4F1A\u8BDD\u7BA1\u7406\u5668 (Spring\u5C01\u88C5\u7684socket)</li><li><code>WebSocketSessionManager</code> websocket\u4F1A\u8BDD\u7BA1\u7406\u5668 (java\u539F\u751Fsocket)</li><li><code>UserNoticeWebSocketHandler</code> \u5168\u5C40\u7528\u6237WS\u901A\u77E5\u5B9E\u73B0\u7C7B</li><li><code>UserNoticeWebSocketInterceptor</code> \u5168\u5C40\u7528\u6237WS\u901A\u77E5\u62E6\u622A\u9274\u6743</li><li><code>WsResult</code> websocket\u54CD\u5E94\u6D88\u606F\u7C7B</li><li><code>WsRes</code> websocket \u54CD\u5E94\u5DE5\u5177\u7C7B\uFF0C\u7528\u6765\u5FEB\u901F\u751F\u6210<code>WsResult</code>\u5BF9\u8C61</li><li><code>UserWsNoticeService</code> \u7528\u6237websocket\u65B9\u5F0F\u53D1\u9001\u901A\u77E5\u6D88\u606F\u670D\u52A1\u7C7B\uFF0C\u5C01\u88C5\u4E86\u5C06\u6D88\u606F\u63A8\u9001\u7ED9\u6307\u5B9A\u7528\u6237\u3001\u7528\u6237\u7EC4\u3001\u5168\u4F53\u53D1\u9001\u65B9\u6CD5</li></ul>`,18),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
