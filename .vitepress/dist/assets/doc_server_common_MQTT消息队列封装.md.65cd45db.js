import{_ as n,c as s,o as a,a as t}from"./app.bfd24a72.js";const g='{"title":"MQTT\u6D88\u606F\u961F\u5217\u5C01\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"MQTT\u670D\u52A1\u914D\u7F6E","slug":"mqtt\u670D\u52A1\u914D\u7F6E"},{"level":2,"title":"MQTT\u6D88\u606F\u53D1\u9001","slug":"mqtt\u6D88\u606F\u53D1\u9001"},{"level":2,"title":"MQTT\u6D88\u606F\u63A5\u6536","slug":"mqtt\u6D88\u606F\u63A5\u6536"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"doc/server/common/MQTT\u6D88\u606F\u961F\u5217\u5C01\u88C5.md"}',p={},e=t(`<h1 id="mqtt\u6D88\u606F\u961F\u5217\u5C01\u88C5" tabindex="-1">MQTT\u6D88\u606F\u961F\u5217\u5C01\u88C5 <a class="header-anchor" href="#mqtt\u6D88\u606F\u961F\u5217\u5C01\u88C5" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>\u76EE\u524D\u4E3B\u9898\u8BA2\u9605\u6709\u53D1\u751F\u5F02\u5E38\u540E\u65E0\u6CD5\u81EA\u52A8\u91CD\u8FDE\u7684\u95EE\u9898\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u9879\u76EE\u4E2D\u5DF2\u53BB\u9664\u9ED8\u8BA4\u4F9D\u8D56\u3002</p></div><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u5728\u5BF9\u63A5\u7269\u8054\u7F51\u8BBE\u5907\u65F6\uFF0CMQTT\u662F\u4E00\u4E2A\u975E\u5E38\u5E38\u89C1\u534F\u8BAE\uFF0C\u5BF9\u6B64\uFF0C\u5BF9MQTT\u64CD\u4F5C\u505A\u4E00\u4E0B\u7B80\u5355\u7684\u5C01\u88C5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u65F6\u4F7F\u7528</p><ul><li>\u63D0\u4F9B\u9ED8\u8BA4\u7684 <code>MqttClient</code> \u7EC8\u7AEF\uFF0C\u65B9\u4FBF\u53D1\u9001\u6D88\u606F</li><li>\u63D0\u4F9B\u5BF9MQTT\u6D88\u606F\u901A\u77E5\u4FBF\u6377\u914D\u7F6E\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u914D\u7F6E\u4F7F\u7528</li></ul><h2 id="mqtt\u670D\u52A1\u914D\u7F6E" tabindex="-1">MQTT\u670D\u52A1\u914D\u7F6E <a class="header-anchor" href="#mqtt\u670D\u52A1\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
<span class="token key atrule">bootx</span><span class="token punctuation">:</span>
  <span class="token key atrule">common</span><span class="token punctuation">:</span> 
    <span class="token key atrule">mqtt</span><span class="token punctuation">:</span>
      <span class="token comment"># \u7EC8\u7AEFid</span>
      <span class="token key atrule">client-id</span><span class="token punctuation">:</span> <span class="token string">&quot;bootx&quot;</span>
      <span class="token comment"># QTT\u670D\u52A1\u5730\u5740</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">1883</span>
      <span class="token comment"># \u7528\u6237\u540D</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token number">123</span>
      <span class="token comment"># \u5BC6\u7801</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123</span>
      <span class="token comment"># \u81EA\u52A8\u8FFD\u52A0\u7EC8\u7AEFid\u540E\u7F00\uFF08\u4E00\u4E2AMQTT\u670D\u52A1\u4E2D\u7EC8\u7AEFid\u4E0D\u80FD\u91CD\u590D\uFF09</span>
      <span class="token key atrule">auto-client-id-suffix</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># \u8FDE\u63A5\u8D85\u65F6</span>
      <span class="token key atrule">connection-timeout</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token comment"># \u6E05\u7406\u4F1A\u8BDD</span>
      <span class="token key atrule">clean-session</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># \u81EA\u52A8\u91CD\u8FDE</span>
      <span class="token key atrule">automatic-reconnect</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># \u4FDD\u6D3B\u95F4\u9694</span>
      <span class="token key atrule">keep-alive-interval</span><span class="token punctuation">:</span> <span class="token number">60</span>
</code></pre></div><h2 id="mqtt\u6D88\u606F\u53D1\u9001" tabindex="-1">MQTT\u6D88\u606F\u53D1\u9001 <a class="header-anchor" href="#mqtt\u6D88\u606F\u53D1\u9001" aria-hidden="true">#</a></h2><p>\u5411\u7C7B\u4E2D\u6CE8\u5165<code>MqttClient</code> \u540E\uFF0C\u76F4\u63A5\u5C31\u53EF\u4EE5\u4F7F\u7528\u53D1\u9001\u6D88\u606F\uFF0C</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;mqtt\u6D4B\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/demo/mqtt&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMqttController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MqttClient</span> client<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u53D1\u9001&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/send&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ok <span class="token operator">=</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MqttMessage</span><span class="token punctuation">(</span><span class="token class-name">JacksonUtil</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>ok<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mqtt\u6D88\u606F\u63A5\u6536" tabindex="-1">MQTT\u6D88\u606F\u63A5\u6536 <a class="header-anchor" href="#mqtt\u6D88\u606F\u63A5\u6536" aria-hidden="true">#</a></h2><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u5B9E\u73B0<code>IMqttMessageListener</code>\u63A5\u53E3\u7684\u7C7B\uFF0C\u7136\u540E\u901A\u8FC7<code>MqttClient</code> \u8FDB\u884C\u5BF9MQTT\u6D88\u606F\u76D1\u542C\u5668\u8FDB\u884C\u7ED1\u5B9A</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IotMessageListener</span> <span class="token keyword">implements</span> <span class="token class-name">IMqttMessageListener</span> <span class="token punctuation">{</span>
     <span class="token comment">/**
     * \u5904\u7406\u6D88\u606F (\u6CE8\u610F, \u4E0D\u80FD\u629B\u51FA\u9519\u8BEF, \u5426\u5219\u5C31\u63A5\u4E0D\u5230\u6D88\u606F\u4E86)
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">messageArrived</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token class-name">MqttMessage</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getPayload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u7ED1\u5B9A\u76D1\u542C\u5668</strong></p><div class="language-java"><pre><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MessageListenerConfiguration</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">MqttClient</span> mqttClient<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">IotMessageListener</span> iotMessageListener<span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u6DFB\u52A0\u76D1\u542C\u5668
     */</span>
    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            mqttClient<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;gathering&quot;</span><span class="token punctuation">,</span> iotMessageListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MqttException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;MQTT\u6DFB\u52A0\u76D1\u542C\u5668\u5931\u8D25&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li>\u5B9E\u73B0 <code>IMqttMessageListener</code> \u63A5\u53E3\u91CD\u5199<code>messageArrived</code>\u65F6\uFF0C\u5728\u65B9\u6CD5\u4E2D\u4E0D\u53EF\u4EE5\u629B\u51FA\u5F02\u5E38\uFF0C\u5426\u5219\u4F1A\u65AD\u5F00\u8FDE\u63A5\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u7EE7\u7EED\u6536\u5230\u65B0\u7684\u6D88\u606F</li></ul>`,17),o=[e];function c(l,u,i,k,r,d){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
