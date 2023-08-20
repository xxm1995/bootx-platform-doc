import{_ as n,c as a,o as s,a as t}from"./app.9c6e725a.js";const d='{"title":"\u65E5\u5FD7\u6536\u96C6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u7ECD","slug":"\u7B80\u7ECD"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"ELK","slug":"elk"},{"level":2,"title":"plumelog(lite\u5D4C\u5165\u5F0F\u6A21\u5F0F)","slug":"plumelog-lite\u5D4C\u5165\u5F0F\u6A21\u5F0F"},{"level":2,"title":"plumelog(lite\u6A21\u5F0F)","slug":"plumelog-lite\u6A21\u5F0F"},{"level":2,"title":"\u5916\u7F6E\u5316logback-spring.xml","slug":"\u5916\u7F6E\u5316logback-spring-xml"}],"relativePath":"platform/overview/config/\u65E5\u5FD7\u6536\u96C6.md"}',p={},o=t(`<h1 id="\u65E5\u5FD7\u6536\u96C6" tabindex="-1">\u65E5\u5FD7\u6536\u96C6 <a class="header-anchor" href="#\u65E5\u5FD7\u6536\u96C6" aria-hidden="true">#</a></h1><h2 id="\u7B80\u7ECD" tabindex="-1">\u7B80\u7ECD <a class="header-anchor" href="#\u7B80\u7ECD" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u4E2D\u652F\u6301\u4EE5\u4E0B\u65E5\u5FD7\u6536\u96C6\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u8FDB\u884C\u589E\u5220\uFF0C\u66F4\u591A\u529F\u80FD\u89C1<a href="/platform/server/common/\u65E5\u5FD7\u6269\u5C55.html">\u65E5\u5FD7\u6269\u5C55</a>\u6A21\u5757\uFF0C\u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B\u51E0\u5757\uFF1A</p><ul><li>\u63A7\u5236\u53F0\u8F93\u51FA</li><li>log\u65E5\u5FD7\u6587\u4EF6</li><li>ELK\u6536\u96C6</li><li>plumelog</li><li>plumelog(\u5D4C\u5165\u5F0FLite\u6A21\u5F0F)</li></ul><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u8FC7<code>bootx-start</code>\u6A21\u5757\u4E0B<code>logback-spring.xml</code>\u6587\u4EF6\u8FDB\u884C\u9879\u76EE\u65E5\u5FD7\u8F93\u51FA\u7684\u914D\u7F6E\uFF0C\u9879\u76EE\u4E2D\u4EE5\u53CA\u9884\u5148\u5B9A\u4E49\u4E86\u4E0B\u5217\u51E0\u79CD\u5E38\u7528\u7684\u65E5\u5FD7\u6536\u96C6\u7C7B\u578B\uFF0C\u5B58\u50A8\u5728<code>common-log</code>\u6A21\u5757\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u8981\u8FDB\u884C\u4FEE\u6539 \u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\u8FDB\u884C\u4F7F\u7528</p></blockquote><ul><li>logback-sensitive \u654F\u611F\u6570\u636E\u8131\u654F\uFF0C\u914D\u7F6E\u6240\u5728\u4F4D\u7F6E<code>cn/bootx/common/log/logback-sensitive.xml</code></li><li>logback-console \u63A7\u5236\u53F0\u6253\u5370\u8F93\u51FA\u914D\u7F6E\uFF0C\u914D\u7F6E\u6240\u5728\u4F4D\u7F6E<code>cn/bootx/common/log/logback-console.xml</code></li><li>logback-log-file \u4F20\u7EDF\u65E5\u5FD7\u6587\u4EF6\u683C\u5F0F\uFF0C\u914D\u7F6E\u6240\u5728\u4F4D\u7F6E<code>cn/bootx/common/log/logback-log-file.xml</code></li><li>logback-elk elk\u914D\u5957\u65E5\u5FD7\u6536\u96C6\uFF0C\u8F93\u51FAjson\uFF0C\u901A\u8FC7<code>filebeat</code> \u5199\u5165ES\uFF0C\u901A\u8FC7kibana\u8FDB\u884C\u7BA1\u7406\uFF0C\u914D\u7F6E\u6240\u5728\u4F4D\u7F6E<code>cn/bootx/common/log/logback-elk.xml</code></li><li>logback-plumelog \u914D\u5957<code>PlumeLog\u5D4C\u5165\u5F0FLite\u6A21\u5F0F</code> \u65E5\u5FD7\u6536\u96C6\uFF0C<code>PlumeLog</code> \u662F\u4E2A\u8F7B\u91CF\u7EA7\u7684\u65E5\u5FD7\u6536\u96C6\u548C\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u914D\u7F6E\u6240\u5728\u4F4D\u7F6E<code>cn/bootx/common/log/logback-plumelog.xml</code></li></ul><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org/springframework/boot/logging/logback/defaults.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--\u9879\u76EE\u540D\u79F0--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appname<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bootx-platform<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--\u65E5\u5FD7\u4F4D\u7F6E--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logdir<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logs<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- \u5BFC\u5165 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn/bootx/common/log/logback-sensitive.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn/bootx/common/log/logback-console.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn/bootx/common/log/logback-log-file.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn/bootx/common/log/logback-elk.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn/bootx/common/log/logback-plumelog.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- \u5F00\u53D1\u8F93\u51FA\u7EA7\u522B --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INFO<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileInfoLog<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>elk<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plumelog<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="elk" tabindex="-1">ELK <a class="header-anchor" href="#elk" aria-hidden="true">#</a></h2><p>\u5728\u9879\u76EE\u4E2D<code>_config/elk</code>\u76EE\u5F55\u91CC\u6709\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5305\u62EC<code>ElasticSearch</code>\u548C<code>Kibana</code>\u7684 <code>docker-compose.yml</code>\u6587\u4EF6\uFF0C\u4EE5\u53CA<code>filebeat</code>\u6536\u96C6\u65E5\u5FD7\u76F8\u5173\u7684\u914D\u7F6E <code>filebeat</code>\u542F\u52A8\u811A\u672C</p><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u65E5\u5FD7\u6536\u96C6</span>
  <span class="token key atrule">filebeat</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/beats/filebeat<span class="token punctuation">:</span>7.13.2
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6302\u8F7D\u65E5\u5FD7\u76EE\u5F55\uFF08\u9700\u8981\u80FD\u8BFB\u53D6\u5230\u7CFB\u7EDF\u751F\u6210\u7684\u65E5\u5FD7\uFF09\u5230\u5BB9\u5668\u4E2D</span>
      <span class="token punctuation">-</span> /data/logs<span class="token punctuation">:</span>/data/logs
    <span class="token comment"># \u542F\u52A8\u547D\u4EE4</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> filebeat /usr/share/filebeat/filebeat.yml
</code></pre></div><p>filebeat\u8F93\u51FA\u5230ES\u914D\u7F6E</p><div class="language-yaml"><pre><code><span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /data/logs/bootx<span class="token punctuation">-</span>platform/<span class="token important">*.json</span>
<span class="token comment"># \u8F93\u51FA\u5230es</span>
<span class="token key atrule">output.elasticsearch</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">9200</span>
  <span class="token comment"># \u7D22\u5F15\u540D</span>
  <span class="token key atrule">index</span><span class="token punctuation">:</span> <span class="token string">&quot;bootx-platform-logs&quot;</span>
<span class="token comment"># \u8BBE\u7F6E</span>
<span class="token key atrule">setup</span><span class="token punctuation">:</span>
<span class="token comment"># \u81EA\u5B9A\u4E49\u7D22\u5F15\u7684\u8BDD\u5FC5\u987B\u8BBE\u7F6E</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;filebeat&quot;</span>
    <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&quot;filebeat-*&quot;</span>
  <span class="token key atrule">ilm.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># \u5904\u7406\u914D\u7F6E</span>
<span class="token key atrule">processors</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">decode_json_fields</span><span class="token punctuation">:</span>
      <span class="token key atrule">fields</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span> <span class="token comment">#\u8981\u8FDB\u884C\u89E3\u6790\u7684\u5B57\u6BB5</span>
      <span class="token key atrule">target</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment">#json\u5185\u5BB9\u89E3\u6790\u5230\u6307\u5B9A\u7684\u5B57\u6BB5\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF08\u201C\u201D\uFF09\uFF0C\u5219\u89E3\u6790\u5230\u9876\u7EA7\u7ED3\u6784\u4E0B</span>
  <span class="token punctuation">-</span> <span class="token key atrule">drop_fields</span><span class="token punctuation">:</span>
      <span class="token key atrule">fields</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ecs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;agent&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;@metadata&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">]</span> <span class="token comment">#\u5220\u9664\u65E0\u7528\u7684\u5B57\u6BB5</span>
</code></pre></div><p>ES\u65E5\u5FD7\u7D22\u5F15\u683C\u5F0F</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;@timestamp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;log_time&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;severity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;service&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;trace&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stack_trace&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;thread_name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="plumelog-lite\u5D4C\u5165\u5F0F\u6A21\u5F0F" tabindex="-1">plumelog(lite\u5D4C\u5165\u5F0F\u6A21\u5F0F) <a class="header-anchor" href="#plumelog-lite\u5D4C\u5165\u5F0F\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u9879\u76EE\u5DF2\u7ECF\u8FDB\u884C\u4E86\u96C6\u6210\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u5F00\u542F\u914D\u7F6E\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\u65E5\u5FD7\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u666E\u901A\u7684\u5E94\u7528\u573A\u5408\uFF0C\u53EF\u4EE5\u67E5\u770B<code>plumelog</code>\u7684 <a href="https://gitee.com/plumeorg/plumelog/blob/master/FASTSTART.md" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a> \u8BF4\u660E\u4E86\u89E3\u66F4\u8BE6\u7EC6\u7684\u4F7F\u7528\u8BF4\u660E</p></div><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>included</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plumelog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.plumelog.lite.logback.appender.LiteAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u5E94\u7528\u540D\u79F0 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appName</span><span class="token punctuation">&gt;</span></span>\${appname}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appName</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u65E5\u5FD7\u5B58\u50A8\u4F4D\u7F6E --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logPath</span><span class="token punctuation">&gt;</span></span>\${logdir}/plumelog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logPath</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u65E5\u5FD7\u4FDD\u7559\u5929\u6570 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keepDay</span><span class="token punctuation">&gt;</span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keepDay</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>included</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="plumelog-lite\u6A21\u5F0F" tabindex="-1">plumelog(lite\u6A21\u5F0F) <a class="header-anchor" href="#plumelog-lite\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u63A8\u8350\u666E\u901A\u7684\u9879\u76EE\u4F7F\u7528\u5355\u72EC\u90E8\u7F72lite\u6A21\u5F0F\u7684PlumeLog\uFF0C\u4E0E\u5E94\u7528\u5206\u79BB\u5F00\u6765\uFF0C\u66F4\u65B9\u4FBF\u8FDB\u884C\u7EF4\u62A4\uFF0CLite\u6A21\u5F0F\u6027\u80FD\u4E5F\u8DB3\u591F\u666E\u901A\u7684\u9879\u76EE\u4F7F\u7528</p></div><p>\u914D\u7F6E\u7B80\u5355\u8BF4\u660E</p><div class="language-shell"><pre><code><span class="token comment">#\u503C\u4E3A4\u79CD redis,kafka,rest,restServer,lite</span>
<span class="token comment">#lite \u7B80\u6613\u6A21\u5F0F\u542F\u52A8\u4E0D\u9700\u8981\u914D\u7F6Eredis\uFF0Ces\u7B49</span>
<span class="token assign-left variable">plumelog.model</span><span class="token operator">=</span>redis
<span class="token comment">#lite\u6A21\u5F0F\u4E0B\u65E5\u5FD7\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token assign-left variable">plumelog.lite.log.path</span><span class="token operator">=</span>/lucene
</code></pre></div><p><strong>logback-spring.xml\u914D\u7F6E</strong></p><div class="language-xml"><pre><code><span class="token comment">&lt;!-- plumelog \u65B9\u5F0F\u65E5\u5FD7\u6536\u96C6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plumelog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.plumelog.logback.appender.LiteAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appName</span><span class="token punctuation">&gt;</span></span>\${appname}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appName</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plumelogHost</span><span class="token punctuation">&gt;</span></span>127.0.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plumelogHost</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5916\u7F6E\u5316logback-spring-xml" tabindex="-1">\u5916\u7F6E\u5316logback-spring.xml <a class="header-anchor" href="#\u5916\u7F6E\u5316logback-spring-xml" aria-hidden="true">#</a></h2><p>Spring Boot\u9879\u76EE\u4EE5Jar\u65B9\u5F0F\u542F\u52A8\u65F6\u9ED8\u8BA4\u4F1A\u8BFB\u53D6Jar\u91CC\u7684logback-spring.xml\u914D\u7F6E\u6587\u4EF6\uFF0C\u54EA\u6015\u6211\u4EEC\u5728Jar\u7684\u5916\u90E8\u63D0\u4F9B\u4E86\u522B\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u8BFB\u53D6\uFF0C \u6240\u4EE5\u9700\u8981\u6211\u4EEC\u5728\u542F\u52A8Jar\u7684\u65F6\u5019\uFF0C\u5728\u542F\u52A8\u53C2\u6570\u4E2D\u663E\u5F0F\u6307\u5B9A\uFF0C</p>`,26),e=[o];function l(c,u,k,i,r,g){return s(),a("div",null,e)}var q=n(p,[["render",l]]);export{d as __pageData,q as default};
