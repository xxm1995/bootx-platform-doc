import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.c921523c.js";const y='{"title":"MySQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"MySQL","slug":"mysql"},{"level":2,"title":"Redis","slug":"redis"},{"level":2,"title":"MongoDB","slug":"mongodb"},{"level":2,"title":"RabbitMQ","slug":"rabbitmq"},{"level":2,"title":"ELK","slug":"elk"},{"level":2,"title":"MQTT","slug":"mqtt"},{"level":2,"title":"TdEngine","slug":"tdengine"}],"relativePath":"doc/overview/config/\u76F8\u5173docker-compose.md","lastUpdated":1671977843063}',e={},p=t(`<h2 id="mysql"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h2 id="redis"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u7F13\u5B58</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>6.2.4
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass password
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 26379<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data<span class="token punctuation">:</span>/data
</code></pre></div><h2 id="mongodb"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mongodb</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mongo
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 27017<span class="token punctuation">:</span><span class="token number">27017</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;./data/configdb:/data/configdb&quot;</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;./data/db:/data/db&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> mongod <span class="token punctuation">-</span><span class="token punctuation">-</span>auth
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MONGO_INITDB_ROOT_USERNAME=root       <span class="token comment">#\u521D\u59CB\u5316\u7BA1\u7406\u5458\u7528\u6237\u540D\u548C\u5BC6\u7801</span>
      <span class="token punctuation">-</span> MONGO_INITDB_ROOT_PASSWORD=123456
</code></pre></div><h2 id="rabbitmq"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>management
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> rabbitmq
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/rabbitmq
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=admin
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=123123
</code></pre></div><h2 id="elk"><a class="header-anchor" href="#elk" aria-hidden="true">#</a> ELK</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">es</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/elasticsearch/elasticsearch<span class="token punctuation">:</span>7.13.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node.name=es
      <span class="token punctuation">-</span> discovery.type=single<span class="token punctuation">-</span>node
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms2048m -Xmx4096m&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data01<span class="token punctuation">:</span>/usr/share/elasticsearch/data
      <span class="token punctuation">-</span> /home/ubuntu/docker/elasticsearch/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elastic

  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>7.13.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kibana
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ELASTICSEARCH_HOSTS=http<span class="token punctuation">:</span>//es<span class="token punctuation">:</span><span class="token number">9200</span>
      <span class="token comment"># \u9700\u8981\u5C06Kibana\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5C0F\u5199\u8F6C\u6362\u6210\u5927\u5199\uFF0C\u7136\u540E\u8FD9\u4E2A\u624D\u80FD\u7528\u4E8E\u53D8\u91CF\uFF0C\u624D\u80FD\u88AB\u8BBE\u7F6E\u5230</span>
      <span class="token punctuation">-</span> I18N_LOCALE=zh<span class="token punctuation">-</span>CN
      <span class="token punctuation">-</span> xpack.monitoring.ui.container.elasticsearch.enabled=false
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5601:5601&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elastic

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">data01</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">elastic</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre></div><h2 id="mqtt"><a class="header-anchor" href="#mqtt" aria-hidden="true">#</a> MQTT</h2><h2 id="tdengine"><a class="header-anchor" href="#tdengine" aria-hidden="true">#</a> TdEngine</h2><div class="language-yaml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">TDengine</span><span class="token punctuation">:</span> 
    <span class="token key atrule">image</span><span class="token punctuation">:</span> tdengine/tdengine
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> tdengine
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> tdengine
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6030<span class="token punctuation">:</span><span class="token number">6030</span>
      <span class="token punctuation">-</span> 6035<span class="token punctuation">:</span><span class="token number">6035</span>
      <span class="token punctuation">-</span> 6041<span class="token punctuation">:</span><span class="token number">6041</span>
      <span class="token punctuation">-</span> 6030<span class="token punctuation">-</span>6040<span class="token punctuation">:</span>6030<span class="token punctuation">-</span>6040/udp
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/volume/tdengine/lib<span class="token punctuation">:</span>/var/lib/taos<span class="token punctuation">:</span>Z
      <span class="token punctuation">-</span> /data/volume/tdengine/log<span class="token punctuation">:</span>/var/log/taos<span class="token punctuation">:</span>Z
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div>`,12),o=[p];function c(l,u,k,i,r,d){return s(),a("div",null,o)}var g=n(e,[["render",c]]);export{y as __pageData,g as default};
