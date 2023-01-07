import{_ as a,c as n,o as s,a as t}from"./app.95c78e2d.js";const m='{"title":"\u9879\u76EE\u542F\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540E\u7AEF\u542F\u52A8","slug":"\u540E\u7AEF\u542F\u52A8"},{"level":3,"title":"\u73AF\u5883\u51C6\u5907(\u6700\u4F4E\u4F9D\u8D56)","slug":"\u73AF\u5883\u51C6\u5907-\u6700\u4F4E\u4F9D\u8D56"},{"level":3,"title":"\u542F\u52A8\u8FC7\u7A0B","slug":"\u542F\u52A8\u8FC7\u7A0B"},{"level":2,"title":"\u524D\u7AEF\u542F\u52A8\uFF08Vue2\uFF09","slug":"\u524D\u7AEF\u542F\u52A8\uFF08vue2\uFF09"},{"level":3,"title":"\u73AF\u5883\u51C6\u5907","slug":"\u73AF\u5883\u51C6\u5907"},{"level":3,"title":"\u542F\u52A8\u8FC7\u7A0B","slug":"\u542F\u52A8\u8FC7\u7A0B-1"},{"level":2,"title":"\u524D\u7AEF\u542F\u52A8\uFF08Vue3\uFF09","slug":"\u524D\u7AEF\u542F\u52A8\uFF08vue3\uFF09"},{"level":3,"title":"\u73AF\u5883\u51C6\u5907","slug":"\u73AF\u5883\u51C6\u5907-1"},{"level":3,"title":"\u542F\u52A8\u8FC7\u7A0B","slug":"\u542F\u52A8\u8FC7\u7A0B-2"}],"relativePath":"doc/overview/config/\u9879\u76EE\u542F\u52A8.md"}',e={},o=t(`<h1 id="\u9879\u76EE\u542F\u52A8" tabindex="-1">\u9879\u76EE\u542F\u52A8 <a class="header-anchor" href="#\u9879\u76EE\u542F\u52A8" aria-hidden="true">#</a></h1><h2 id="\u540E\u7AEF\u542F\u52A8" tabindex="-1">\u540E\u7AEF\u542F\u52A8 <a class="header-anchor" href="#\u540E\u7AEF\u542F\u52A8" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u8FD0\u884C\u65F6\u4F1A\u6709<code>RabbitMQ</code>\u548C<code>MongoDB</code>\u76F8\u5173\u7684\u62A5\u9519\uFF0C\u8005\u662F\u56E0\u4E3A\u6211\u4EEC\u4EE5\u6700\u7B80\u65B9\u5F0F\u8FD0\u884C\u7684\u7CFB\u7EDF\uFF0C\u6CA1\u6709\u914D\u7F6E\u5B83\u4EEC\u7684\u8FDE\u63A5\u5730\u5740\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u9879\u76EE\u7684\u6B63\u5E38\u4F7F\u7528\uFF0C\u540E\u9762\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u7684\u60C5\u51B5\uFF0C \u8865\u4E0A\u8FD9\u4E9B\u914D\u7F6E\uFF0C\u6216\u628A\u8FD9\u4E9B\u7528\u4E0D\u5230\u7684\u529F\u80FD\u505A\u5220\u51CF\u3002</p></div><h3 id="\u73AF\u5883\u51C6\u5907-\u6700\u4F4E\u4F9D\u8D56" tabindex="-1">\u73AF\u5883\u51C6\u5907(\u6700\u4F4E\u4F9D\u8D56) <a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907-\u6700\u4F4E\u4F9D\u8D56" aria-hidden="true">#</a></h3><table><thead><tr><th>\u73AF\u5883</th><th>\u7248\u672C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>JDK</td><td>8/11</td><td>\u57FA\u4E8E8\u7F16\u5199\uFF0C11\u8FD0\u884C\u6B63\u5E38</td></tr><tr><td>MySQL</td><td>5.7.8 +</td><td>\u672A\u5BF9MySQL8\u8FDB\u884C\u6D4B\u8BD5</td></tr><tr><td>Redis</td><td>3.0+/5.0+</td><td>3.x\u7248\u672C\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u4F9D\u8D56\u9AD8\u7EA7\u7279\u6027\u7684\u529F\u80FD\u65E0\u6CD5\u4F7F\u7528</td></tr></tbody></table><h3 id="\u542F\u52A8\u8FC7\u7A0B" tabindex="-1">\u542F\u52A8\u8FC7\u7A0B <a class="header-anchor" href="#\u542F\u52A8\u8FC7\u7A0B" aria-hidden="true">#</a></h3><ol><li><code>git clone https://gitee.com/bootx/bootx-platform.git</code> \u514B\u9686\u540E\u7AEF\u4EE3\u7801\u5230\u672C\u5730\uFF0C\u7136\u540E\u4F7F\u7528<code>IDEA</code>\u6253\u5F00\uFF0C\u7B49\u5F85\u4E0B\u8F7D\u60F3\u5FF5\u4E2D<code>Maven</code>\u7684\u4F9D\u8D56</li><li>\u5728\u63D0\u524D\u51C6\u5907\u7684<code>MySQL</code>\u670D\u52A1\u4E0A\u521B\u5EFA\u7A0D\u540E\u5C06\u8981\u4F7F\u7528\u7684\u7A7A\u767D\u5E93\uFF0C\u9879\u76EE\u9ED8\u8BA4\u914D\u7F6E\u7684\u5E93\u540D\u79F0\u4E3A<code>bootx-platform</code></li><li>\u6253\u5F00\u521A\u4E0B\u8F7D\u9879\u76EE\u91CC<code>bootx-start</code>\u6A21\u5757\u4E0B\u7684<code>application-dev.yml</code>\u6587\u4EF6\uFF0C\u5C06\u91CC\u9762\u7684<code>MySQL</code>\u548C<code>Redis</code>\u66FF\u6362\u6210\u6211\u4EEC\u9884\u5148\u51C6\u5907\u597D\u7684\u8FDE\u63A5\u5730\u5740</li><li>\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u6709\u4E0B\u5217\u4E24\u79CD\u65B9\u5F0F\u8FDB\u884C\u521D\u59CB\u5316\uFF1A <ol><li>\u624B\u52A8\u5BFC\u5165\u6570\u636E\u5E93\u811A\u672C\uFF0C\u9879\u76EE<code>_config/sql</code> \u6587\u4EF6\u5939\u627E\u5230\u6570\u636E\u5E93sql\u6587\u4EF6<code>bootx-platform.sql</code>\uFF0C\u7136\u540E\u6267\u884C\u5BFC\u5165\u5230\u521A\u624D\u51C6\u5907\u7684\u6570\u636E\u5E93\u4E2D\uFF0C \u540C\u65F6\u5C06<code>application-dev.yml</code>\u914D\u7F6E\u6587\u4EF6\u6587\u4EF6\u4E2D\u7684<code>spring.flyway.enabled</code>\u7684\u914D\u7F6E\u8BBE\u7F6E\u4E3A<code>false</code></li><li>\u65E0\u9700\u624B\u52A8\u5BFC\u5165\u6570\u636E\u5E93\u811A\u672C\uFF0C\u9879\u76EE\u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u53EA\u9700\u8981\u68C0\u67E5<code>spring.flyway.enabled</code>\u9009\u9879\u662F\u5426\u4E3A<code>true</code></li></ol></li><li>\u8FD0\u884C\u9879\u76EE\u91CC<code>bootx-start</code>\u6A21\u5757\u4E0B<code>cn.bootx.start.BootxApplication</code>\u542F\u52A8\u7C7B\uFF0C\u542F\u52A8\u7CFB\u7EDF\uFF0C\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u663E\u793A\u4E0B\u9762\u7684\u754C\u9762\uFF0C\u8BF4\u660E\u542F\u52A8\u6210\u529F</li></ol><div class="language-log"><pre><code>   <span class="token date number">2022-12-25</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">07</span><span class="token operator">:</span><span class="token number">40596</span><span class="token operator">|</span> <span class="token level info keyword">INFO</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> main <span class="token operator">-</span> cn<span class="token punctuation">.</span>bootx<span class="token punctuation">.</span>start<span class="token punctuation">.</span>BootxApplication<span class="token operator">|</span> 
   <span class="token separator comment">----------------------------------------------------------</span>
       \u5E94\u7528 <span class="token string">&#39;bootx-platform&#39;</span> \u8FD0\u884C\u6210\u529F<span class="token operator">!</span> 
       Swagger\u6587\u6863<span class="token operator">:</span> 		<span class="token url">http://ip:9999/doc.html</span>
       PlumeLog\u65E5\u5FD7\u7BA1\u7406<span class="token operator">:</span> 		<span class="token url">http://ip/plumelog/#/</span> 
   <span class="token separator comment">----------------------------------------------------------</span>
</code></pre></div><blockquote><p>\u8FD0\u884C\u65F6\u63A7\u5236\u53F0\u4F1A\u6709\u81F3\u5C11\u4E24\u6B21\u5F02\u5E38\u629B\u51FA\uFF0C\u5206\u522B\u662F<code>RabbitMQ</code>\u548C<code>MongoDB</code>\u76F8\u5173\u7684\u62A5\u9519\uFF0C\u4F46\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u7684\u8FD0\u884C</p></blockquote><div class="language-log"><pre><code><span class="token date number">2022-12-25</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">07</span><span class="token operator">:</span><span class="token number">23255</span><span class="token operator">|</span> <span class="token level info keyword">INFO</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> cluster<span class="token operator">-</span>ClusterId<span class="token operator">{</span>value<span class="token operator">=</span><span class="token string">&#39;63a84b09e012927f87783735&#39;</span><span class="token punctuation">,</span> description<span class="token operator">=</span><span class="token string">&#39;null&#39;</span><span class="token operator">}</span><span class="token operator">-</span><span class="token ip-address constant">127.0.0.1</span><span class="token operator">:</span><span class="token number">27017</span> <span class="token operator">-</span> org<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>driver<span class="token punctuation">.</span>cluster<span class="token operator">|</span> Exception in monitor thread while connecting to server <span class="token ip-address constant">127.0.0.1</span><span class="token operator">:</span><span class="token number">27017</span>
<span class="token exception javastacktrace language-javastacktrace">com<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>MongoSocketOpenException<span class="token punctuation">:</span> Exception opening socket
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Caused by<span class="token punctuation">:</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ConnectException<span class="token punctuation">:</span> Connection refused<span class="token punctuation">:</span> connect
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
	
<span class="token date number">2022-12-25</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">07</span><span class="token operator">:</span><span class="token number">43890</span><span class="token operator">|</span> <span class="token level warning important">WARN</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> RMI TCP Connection<span class="token operator">(</span><span class="token number">3</span><span class="token operator">)</span><span class="token operator">-</span><span class="token ip-address constant">192.168.196.167</span> <span class="token operator">-</span> o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>b<span class="token punctuation">.</span>a<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>RabbitHealthIndicator<span class="token operator">|</span> Rabbit health check failed
<span class="token exception javastacktrace language-javastacktrace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>AmqpConnectException<span class="token punctuation">:</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ConnectException<span class="token punctuation">:</span> Connection refused<span class="token punctuation">:</span> connect
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Caused by<span class="token punctuation">:</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ConnectException<span class="token punctuation">:</span> Connection refused<span class="token punctuation">:</span> connect
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
</code></pre></div><h2 id="\u524D\u7AEF\u542F\u52A8\uFF08vue2\uFF09" tabindex="-1">\u524D\u7AEF\u542F\u52A8\uFF08Vue2\uFF09 <a class="header-anchor" href="#\u524D\u7AEF\u542F\u52A8\uFF08vue2\uFF09" aria-hidden="true">#</a></h2><h3 id="\u73AF\u5883\u51C6\u5907" tabindex="-1">\u73AF\u5883\u51C6\u5907 <a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a></h3><blockquote><p>\u5982\u679C\u673A\u5668\u4E0A\u5C1A\u672A\u5B89\u88C5\u524D\u7AEF\u5F00\u53D1\u73AF\u5883\uFF0C\u9700\u8981\u63D0\u524D\u8FDB\u884C\u5B89\u88C5\u3002</p></blockquote><table><thead><tr><th>\u73AF\u5883</th><th>\u7248\u672C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Node</td><td>12+</td><td>\u63A8\u8350\u4F7F\u752814\u621616\uFF0C\u5176\u4ED6\u7248\u672C\u5B89\u88C5\u4F9D\u8D56\u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF</td></tr><tr><td>yarn</td><td>v1.22</td><td>\u5305\u7BA1\u7406\u5DE5\u5177</td></tr></tbody></table><h3 id="\u542F\u52A8\u8FC7\u7A0B-1" tabindex="-1">\u542F\u52A8\u8FC7\u7A0B <a class="header-anchor" href="#\u542F\u52A8\u8FC7\u7A0B-1" aria-hidden="true">#</a></h3><ol><li><code>git clone https://gitee.com/bootx/bootx-platform-ui.git</code> \u514B\u9686\u540E\u7AEF\u4EE3\u7801\u5230\u672C\u5730\uFF0C\u7136\u540E\u4F7F\u7528<code>Webstorm</code>\u6216\u8005<code>Vs Code</code>\u6253\u5F00</li><li>\u6267\u884C<code>yarn install</code>\u547D\u4EE4\u5B89\u88C5\u4F9D\u8D56</li><li>\u6253\u5F00<code>.env.development</code>\u6587\u4EF6\uFF0C\u4FEE\u6539\u8FD0\u884C\u65F6\u8BF7\u6C42\u7684\u5730\u5740\u4E3A\u5B9E\u9645\u8FD0\u884C\u540E\u7AEF\u7684\u5730\u5740<div class="language-properties"><pre><code><span class="token key attr-name">NODE_ENV</span><span class="token punctuation">=</span><span class="token value attr-value">development</span>
<span class="token key attr-name">VUE_APP_PREVIEW</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">VUE_APP_USER_ACCOUNT</span><span class="token punctuation">=</span><span class="token value attr-value">xxm</span>
<span class="token comment"># \u8FD0\u884C\u65F6\u8BF7\u6C42\u7684\u5730\u5740</span>
<span class="token key attr-name">VUE_APP_API_BASE_URL</span><span class="token punctuation">=</span><span class="token value attr-value">http://127.0.0.1:9999</span>
</code></pre></div></li><li>\u6267\u884C<code>yarn run serve</code>\u547D\u4EE4\u542F\u52A8\u9879\u76EE\uFF0C\u9ED8\u8BA4\u7684\u7AEF\u53E3\u4E3A<code>8000</code>\uFF0C\u542F\u52A8\u6210\u529F\u540E\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u51FA\u8BBF\u95EE\u7684\u5730\u5740</li><li>\u70B9\u51FB\u8BBF\u95EE\u5730\u5740\u6253\u5F00\u9875\u9762\uFF0C\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\u4E3A <code>xxm/123456</code></li></ol><h2 id="\u524D\u7AEF\u542F\u52A8\uFF08vue3\uFF09" tabindex="-1">\u524D\u7AEF\u542F\u52A8\uFF08Vue3\uFF09 <a class="header-anchor" href="#\u524D\u7AEF\u542F\u52A8\uFF08vue3\uFF09" aria-hidden="true">#</a></h2><h3 id="\u73AF\u5883\u51C6\u5907-1" tabindex="-1">\u73AF\u5883\u51C6\u5907 <a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u73AF\u5883</th><th>\u7248\u672C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Node</td><td>14.18+</td><td>\u63A8\u8350\u4F7F\u752816\u6216\u800518</td></tr><tr><td>yarn</td><td>v1.22</td><td>\u5305\u7BA1\u7406\u5DE5\u5177</td></tr></tbody></table><h3 id="\u542F\u52A8\u8FC7\u7A0B-2" tabindex="-1">\u542F\u52A8\u8FC7\u7A0B <a class="header-anchor" href="#\u542F\u52A8\u8FC7\u7A0B-2" aria-hidden="true">#</a></h3><ol><li><code>git clone https://gitee.com/bootx/bootx-platform-vue3.git</code> \u514B\u9686\u540E\u7AEF\u4EE3\u7801\u5230\u672C\u5730\uFF0C\u7136\u540E\u4F7F\u7528<code>Webstorm</code>\u6216\u8005<code>Vs Code</code>\u6253\u5F00</li><li>\u6267\u884C<code>yarn install</code>\u547D\u4EE4\u5B89\u88C5\u4F9D\u8D56</li><li>\u6253\u5F00<code>.env.development</code>\u6587\u4EF6\uFF0C\u4FEE\u6539\u8FD0\u884C\u65F6\u8BF7\u6C42\u7684\u5730\u5740\u4E3A\u5B9E\u9645\u8FD0\u884C\u540E\u7AEF\u7684\u5730\u5740\uFF08<code>VITE_PROXY</code>\u914D\u7F6E\u9879\u4E2D<code>/api</code>\u5BF9\u5E94\u7684\u540E\u7AEF\u5730\u5740\uFF09<div class="language-properties"><pre><code><span class="token comment"># \u662F\u5426\u6253\u5F00mock</span>
<span class="token key attr-name">VITE_USE_MOCK</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># \u53D1\u5E03\u8DEF\u5F84</span>
<span class="token key attr-name">VITE_PUBLIC_PATH</span><span class="token punctuation">=</span><span class="token value attr-value">/</span>
<span class="token comment"># \u8DE8\u57DF\u4EE3\u7406\uFF0C\u60A8\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A ,\u8BF7\u6CE8\u610F\uFF0C\u6CA1\u6709\u6362\u884C\u7B26</span>
<span class="token key attr-name">VITE_PROXY</span><span class="token punctuation">=</span><span class="token value attr-value">[[&quot;/api&quot;,&quot;http://localhost:9999&quot;],[&quot;/upload&quot;,&quot;http://localhost:9999/file/upload&quot;]]</span>
<span class="token comment"># \u63A7\u5236\u53F0\u4E0D\u8F93\u51FAconsole</span>
<span class="token key attr-name">VITE_DROP_CONSOLE</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u63A5\u53E3\u5730\u5740</span>
<span class="token key attr-name">VITE_GLOB_API_URL</span><span class="token punctuation">=</span><span class="token value attr-value">/api</span>
<span class="token comment"># \u6587\u4EF6\u4E0A\u4F20\u5730\u5740</span>
<span class="token key attr-name">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">=</span><span class="token value attr-value">/upload</span>
<span class="token comment"># \u63A5\u53E3\u524D\u7F00</span>
<span class="token key attr-name">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">=</span>
</code></pre></div></li><li>\u6267\u884C<code>yarn run dev</code>\u547D\u4EE4\u542F\u52A8\u9879\u76EE\uFF0C\u9ED8\u8BA4\u7684\u7AEF\u53E3\u4E3A<code>3100</code>\uFF0C\u542F\u52A8\u6210\u529F\u540E\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u51FA\u8BBF\u95EE\u7684\u5730\u5740</li><li>\u70B9\u51FB\u8BBF\u95EE\u5730\u5740\u6253\u5F00\u9875\u9762\uFF0C\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\u4E3A xxm/123456</li></ol><blockquote><p>\u53D7\u9650\u4E8E<code>vben admin</code>\u811A\u624B\u67B6\uFF0C\u9996\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u6BD4\u8F83\u7F13\u6162\uFF0C\u5927\u7EA6\u9700\u898135-100\u79D2\uFF0C\u5E76\u4E0D\u662F\u7CFB\u7EDF\u5361\u6B7B\u4E86</p></blockquote>`,22),p=[o];function c(l,r,d,i,u,k){return s(),n("div",null,p)}var b=a(e,[["render",c]]);export{m as __pageData,b as default};
