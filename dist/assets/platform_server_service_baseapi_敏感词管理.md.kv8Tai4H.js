import{_ as t,c as e,o as r,V as a}from"./chunks/framework.TiLr8DIm.js";const o="/assets/6.xFKoWFrh.png",d="/assets/7.dpYbHvL8.png",b=JSON.parse('{"title":"敏感词管理","description":"","frontmatter":{},"headers":[],"relativePath":"platform/server/service/baseapi/敏感词管理.md","filePath":"platform/server/service/baseapi/敏感词管理.md","lastUpdated":1692782764000}'),s={name:"platform/server/service/baseapi/敏感词管理.md"},i=a('<h1 id="敏感词管理" tabindex="-1">敏感词管理 <a class="header-anchor" href="#敏感词管理">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>基于<a href="https://gitee.com/humingzhang/wordfilter" target="_blank" rel="noreferrer">wordfilter</a>实现，使用DFA算法实现的敏感词过滤，支持Skip参数控制敏感词干扰噪音，支持白名单跳过白名单词汇， 可用于文本检测，高效过滤色情、广告、敏感、暴恐等违规内容。例如说，用户昵称、评论、私信等文本内容，都可以使用敏感词功能进行过滤。</p></div><h2 id="截图" tabindex="-1">截图 <a class="header-anchor" href="#截图">¶</a></h2><p><strong>添加或编辑</strong></p><p><img src="'+o+'" alt="img.png" loading="lazy"></p><p><strong>敏感词测试</strong></p><p><img src="'+d+'" alt="img_1.png" loading="lazy"></p><h2 id="配置介绍" tabindex="-1">配置介绍 <a class="header-anchor" href="#配置介绍">¶</a></h2><p><strong>字段属性</strong></p><table><thead><tr><th>属性或操作</th><th>备注</th></tr></thead><tbody><tr><td>敏感词</td><td>具体的内容</td></tr><tr><td>分类</td><td>用于用户配置敏感词的类型，无实际意义</td></tr><tr><td>是否启用</td><td>不启用时将不会参与敏感词过滤中的处理</td></tr><tr><td>类型</td><td>黑名单或白名单</td></tr><tr><td>类型</td><td>黑名单或白名单</td></tr></tbody></table><p><strong>刷新缓存</strong></p><p>系统启动后会自动将敏感词数据读取到系统缓存中，当我们进行增删改的时候，会自动更新缓存，同时我们也可以通过前端界面上<code>更多操作-&gt;刷新缓存</code>，触发缓存更新。 注意：目前缓存使用的是本地缓存，如果系统是多副本形式的话，可能会导致数据不一致，需要增加一个时间通知的机制，来让缓存进行刷新。</p><h3 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入">¶</a></h3><p>通过表格文件进行数据的导入，待补充</p><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明">¶</a></h2><blockquote><p>进行敏感词处理是还是继续使用<code>wordfilter</code>提供的工具类<code>WordFilter</code>，该服务类继承到系统中的路径为<code>cn.bootx.platform.baseapi.core.chinaword.wordfilter.WordFilter</code>， 并且该类已经注册到Bean容器中，通过在所需要的地方进行注入即可进行使用。</p></blockquote><h3 id="方法介绍" tabindex="-1">方法介绍 <a class="header-anchor" href="#方法介绍">¶</a></h3><ul><li>replace 替换敏感词</li><li>include 是否包含敏感词</li><li>wordCount 获取敏感词数量</li><li>wordList 获取敏感词列表</li></ul><p>注意事项可以查看<a href="https://gitee.com/humingzhang/wordfilter" target="_blank" rel="noreferrer">wordfilter</a>的文档，方法的详细使用说明，可以查看对应代码的注释，此处不在赘述。</p>',19),c=[i];function l(n,p,h,_,f,g){return r(),e("div",null,c)}const u=t(s,[["render",l]]);export{b as __pageData,u as default};
