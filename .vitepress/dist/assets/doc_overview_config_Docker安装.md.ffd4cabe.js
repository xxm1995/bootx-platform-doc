import{_ as n,f as a,e as s,N as e}from"./plugin-vue_export-helper.c921523c.js";const m='{"title":"\u4F7F\u7528 Docker \u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F7F\u7528 Docker \u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5","slug":"\u4F7F\u7528-docker-\u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5"},{"level":3,"title":"\u5B89\u88C5 Docker Engine-Community","slug":"\u5B89\u88C5-docker-engine-community"},{"level":3,"title":"\u4EE3\u7801\u63D0\u793A","slug":"\u4EE3\u7801\u63D0\u793A"},{"level":3,"title":"docker\u955C\u50CF\u52A0\u901F","slug":"docker\u955C\u50CF\u52A0\u901F"},{"level":3,"title":"Rancher\u793E\u533A\u63D0\u4F9B","slug":"rancher\u793E\u533A\u63D0\u4F9B"},{"level":3,"title":"\u5B89\u88C5docker-compose","slug":"\u5B89\u88C5docker-compose"},{"level":3,"title":"\u9053\u5BA2\u4E91\u793E\u533A\u5FEB\u901F\u5B89\u88C5\u811A\u672C","slug":"\u9053\u5BA2\u4E91\u793E\u533A\u5FEB\u901F\u5B89\u88C5\u811A\u672C"},{"level":3,"title":"\u5220\u9664none\u955C\u50CF","slug":"\u5220\u9664none\u955C\u50CF"}],"relativePath":"doc/overview/config/Docker\u5B89\u88C5.md","lastUpdated":1671720040906}',o={},t=e(`<blockquote><p>\u63A8\u8350\u4F7F\u7528\u9053\u5BA2\u4E91\u63D0\u4F9B\u7684\u5B89\u88C5\u811A\u672C\uFF1A <a href="https://get.daocloud.io/" target="_blank" rel="noopener noreferrer">https://get.daocloud.io/</a></p></blockquote><h3 id="\u4F7F\u7528-docker-\u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5"><a class="header-anchor" href="#\u4F7F\u7528-docker-\u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528 Docker \u4ED3\u5E93\u8FDB\u884C\u5B89\u88C5</h3><p>\u5728\u65B0\u4E3B\u673A\u4E0A\u9996\u6B21\u5B89\u88C5 Docker Engine-Community \u4E4B\u524D\uFF0C\u9700\u8981\u8BBE\u7F6E Docker \u4ED3\u5E93\u3002\u4E4B\u540E\uFF0C\u60A8\u53EF\u4EE5\u4ECE\u4ED3\u5E93\u5B89\u88C5\u548C\u66F4\u65B0 Docker\u3002 <strong>\u8BBE\u7F6E\u4ED3\u5E93</strong> \u5B89\u88C5\u6240\u9700\u7684\u8F6F\u4EF6\u5305\u3002yum-utils \u63D0\u4F9B\u4E86 yum-config-manager \uFF0C\u5E76\u4E14 device mapper \u5B58\u50A8\u9A71\u52A8\u7A0B\u5E8F\u9700\u8981 device-mapper-persistent-data \u548C lvm2\u3002</p><div class="language-bash"><pre><code> <span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
  device-mapper-persistent-data <span class="token punctuation">\\</span>
  lvm2
</code></pre></div><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u8BBE\u7F6E\u7A33\u5B9A\u7684\u4ED3\u5E93\u3002</p><div class="language-bash"><pre><code> <span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre></div><h3 id="\u5B89\u88C5-docker-engine-community"><a class="header-anchor" href="#\u5B89\u88C5-docker-engine-community" aria-hidden="true">#</a> \u5B89\u88C5 Docker Engine-Community</h3><p>\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 Docker Engine-Community \u548C containerd\uFF0C\u6216\u8005\u8F6C\u5230\u4E0B\u4E00\u6B65\u5B89\u88C5\u7279\u5B9A\u7248\u672C\uFF1A</p><div class="language-bash"><pre><code> <span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
 <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre></div><h3 id="\u4EE3\u7801\u63D0\u793A"><a class="header-anchor" href="#\u4EE3\u7801\u63D0\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u63D0\u793A</h3><div class="language-bash"><pre><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bash-completion

<span class="token builtin class-name">source</span> /usr/share/bash-completion/completions/docker
<span class="token builtin class-name">source</span> /usr/share/bash-completion/bash_completion
</code></pre></div><h3 id="docker\u955C\u50CF\u52A0\u901F"><a class="header-anchor" href="#docker\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> docker\u955C\u50CF\u52A0\u901F</h3><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://5qe8w1eb.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre></div><h3 id="rancher\u793E\u533A\u63D0\u4F9B"><a class="header-anchor" href="#rancher\u793E\u533A\u63D0\u4F9B" aria-hidden="true">#</a> Rancher\u793E\u533A\u63D0\u4F9B</h3><div class="language-bash"><pre><code><span class="token function">curl</span> https://releases.rancher.com/install-docker/20.10.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre></div><h3 id="\u5B89\u88C5docker-compose"><a class="header-anchor" href="#\u5B89\u88C5docker-compose" aria-hidden="true">#</a> \u5B89\u88C5docker-compose</h3><div class="language-bash"><pre><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre></div><h3 id="\u9053\u5BA2\u4E91\u793E\u533A\u5FEB\u901F\u5B89\u88C5\u811A\u672C"><a class="header-anchor" href="#\u9053\u5BA2\u4E91\u793E\u533A\u5FEB\u901F\u5B89\u88C5\u811A\u672C" aria-hidden="true">#</a> \u9053\u5BA2\u4E91\u793E\u533A\u5FEB\u901F\u5B89\u88C5\u811A\u672C</h3><p><a href="https://get.daocloud.io/" target="_blank" rel="noopener noreferrer">https://get.daocloud.io/</a></p><h3 id="\u5220\u9664none\u955C\u50CF"><a class="header-anchor" href="#\u5220\u9664none\u955C\u50CF" aria-hidden="true">#</a> \u5220\u9664none\u955C\u50CF</h3><div class="language-bash"><pre><code><span class="token comment"># \u5220\u9664none\u955C\u50CF</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;none&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>

<span class="token comment"># \u76F4\u63A5\u5220\u9664\u5E26none\u7684\u955C\u50CF\uFF0C\u62A5\u9519\u4E86\u3002\u63D0\u793A\u5148\u505C\u6B62\u5BB9\u5668\u3002</span>
<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Exited&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1 }&#39;</span><span class="token variable">)</span></span>  //\u505C\u6B62\u5BB9\u5668

<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Exited&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1 }&#39;</span><span class="token variable">)</span></span>  //\u5220\u9664\u5BB9\u5668

<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;none&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>  //\u5220\u9664\u955C\u50CF
</code></pre></div>`,21),c=[t];function p(r,l,i,k,d,u){return s(),a("div",null,c)}var f=n(o,[["render",p]]);export{m as __pageData,f as default};
