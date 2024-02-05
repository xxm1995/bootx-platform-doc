import{_ as s,c as i,o as a,V as t}from"./chunks/framework.TiLr8DIm.js";const h="/assets/超级查询器.0duhK-k8.png",n="/assets/ordinaryQuery.EahTqygu.png",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"platform/front/vue3/查询构造器组件.md","filePath":"platform/front/vue3/查询构造器组件.md","lastUpdated":1705250100000}'),l={name:"platform/front/vue3/查询构造器组件.md"},p=t('<h2 id="超级查询器" tabindex="-1">超级查询器 <a class="header-anchor" href="#超级查询器">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>包括超级查询器和普通查询器，分别可以用在复杂查询的场景，和通用的查询地方。</p></div><h3 id="超级查询器-1" tabindex="-1">超级查询器 <a class="header-anchor" href="#超级查询器-1">¶</a></h3><h3 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果">¶</a></h3><img alt="img.png" height="400" src="'+h+`" width="600"><h3 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式">¶</a></h3><p>在要进行查询的页面引入超级查询器组件，并放在合适的位置上 导入语句：<code>import BSuperQuery from &#39;@/components/Bootx/SuperQuery/BSuperQuery&#39;</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">b-super-query</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queryState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">superQueryFlag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">queryFields</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">880</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  button-title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;超级查询&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  model-title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;超级查询器&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">superQuery</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">resetQuery</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> queryFields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;姓名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;年龄&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vip&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;是否vip&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BOOLEAN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;birthday&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;生日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;workTime&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;上班时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;registrationTime&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;注册时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATE_TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;political&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;政治面貌&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    selectList:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;党员&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;群众&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;团员&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span></code></pre></div><h3 id="组件参数" tabindex="-1">组件参数 <a class="header-anchor" href="#组件参数">¶</a></h3><blockquote><p>主要用于超级查询器组件的参数配置</p></blockquote><table><thead><tr><th>参数</th><th>类型</th><th>功能</th><th>是否必填</th><th>默认值</th></tr></thead><tbody><tr><td>queryState</td><td>boolean</td><td>查询状态</td><td>是</td><td>false</td></tr><tr><td>fields</td><td>QueryField[]</td><td>查询字段配置</td><td>是</td><td>无</td></tr><tr><td>buttonTitle</td><td>string</td><td>按钮标题</td><td>否</td><td>超级查询</td></tr><tr><td>buttonIcon</td><td>string</td><td>按钮图标</td><td>否</td><td>ant-design:search-outlined</td></tr><tr><td>queryIcon</td><td>string</td><td>按钮图标</td><td>否</td><td>ant-design:appstore</td></tr><tr><td>modelTitle</td><td>string</td><td>弹框标题</td><td>否</td><td>超级查询器</td></tr><tr><td>width</td><td>number</td><td>宽度</td><td>否</td><td>840</td></tr><tr><td>@query</td><td>Function</td><td>点击查询时的回调</td><td>否</td><td></td></tr><tr><td>@rest</td><td>Function</td><td>点击取消查询时的回调</td><td>否</td><td></td></tr></tbody></table><h3 id="queryfield参数说明" tabindex="-1">QueryField参数说明 <a class="header-anchor" href="#queryfield参数说明">¶</a></h3><blockquote><p>主要用于组件中<code>fields</code>参数的配置说明</p></blockquote><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>field</td><td>string</td><td>查询字段名</td></tr><tr><td>name</td><td>string</td><td>显示名称</td></tr><tr><td>type</td><td>见下文 Type数据类型</td><td>数据类型</td></tr><tr><td>md</td><td>number</td><td>栅格宽度</td></tr><tr><td>valueFormat</td><td>string</td><td>时间格式化, <code>type</code>数据类型为日期时间类型时可用，绑定值的格式，默认为 <code>yyyy-MM-DD HH:mm:ss</code> / <code>yyyy-MM-DD</code> / <code>HH:mm:ss</code>类型的样式</td></tr><tr><td>precision</td><td>number</td><td>小数点位数，默认为0位,<code>type</code>数据类型为<code>number</code>时可用</td></tr><tr><td>selectList</td><td>LabeledValue[]</td><td>查询列表内容, <code>type</code>数据类型为<code>list</code>的时候，通过这个字段传入列表的内容</td></tr></tbody></table><h3 id="queryparam参数说明" tabindex="-1">QueryParam参数说明 <a class="header-anchor" href="#queryparam参数说明">¶</a></h3><blockquote><p>主要用于查询回调函数中回传的参数的说明</p></blockquote><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>or</td><td>string</td><td>&#39;true&#39;或&#39;false&#39;,antd select 组件限制原因导致不能使用bool</td></tr><tr><td>paramName</td><td>string</td><td>参数名称</td></tr><tr><td>format</td><td>string</td><td>格式化 主要用于时间格式化</td></tr><tr><td>precision</td><td>number</td><td>小数精度</td></tr><tr><td>compareType</td><td>string</td><td>比较类型，见下方 <code>CompareType数据比较类型</code></td></tr><tr><td>paramType</td><td>string</td><td>参数类型</td></tr><tr><td>paramValue</td><td>string</td><td>参数值</td></tr><tr><td>nestedParams</td><td>QueryParam[]</td><td>嵌套查询</td></tr></tbody></table><h3 id="type数据类型" tabindex="-1">Type数据类型 <a class="header-anchor" href="#type数据类型">¶</a></h3><p>可以引入<code>import BSuperQuery from &#39;@/components/Bootx/SuperQuery/superQueryCode&#39;</code>中的类型常量值进行配置，所支持的类型如下</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数字</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NUMBER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;number&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> STRING</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;string&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 布尔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BOOLEAN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;boolean&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 日期</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;date&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TIME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;time&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 日期时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DATE_TIME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;date_time&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 列表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LIST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;list&#39;</span></span></code></pre></div><h3 id="comparetype数据比较类型" tabindex="-1">CompareType数据比较类型 <a class="header-anchor" href="#comparetype数据比较类型">¶</a></h3><blockquote><p>回调时回传参数中的compareType的类型</p></blockquote><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>eq</td><td>等于</td></tr><tr><td>ne</td><td>不等于</td></tr><tr><td>like</td><td>模糊匹配</td></tr><tr><td>like_left</td><td>左模糊</td></tr><tr><td>like_right</td><td>右模糊</td></tr><tr><td>not_like</td><td>模糊不等于</td></tr><tr><td>gt</td><td>大于</td></tr><tr><td>ge</td><td>大于等于</td></tr><tr><td>lt</td><td>小于</td></tr><tr><td>le</td><td>小于等于</td></tr><tr><td>is_null</td><td>是否为空</td></tr><tr><td>not_null</td><td>是否不为空</td></tr></tbody></table><h3 id="回调方法" tabindex="-1">回调方法 <a class="header-anchor" href="#回调方法">¶</a></h3><p><strong>@query查询回调</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回传传查询参数, queryParams 对应的是后端QueryParams对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">queryParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div><p><strong>@reset取消回调</strong> 回调函数没有参数，是个空参方法，用于重置查询参数</p><h2 id="普通查询器" tabindex="-1">普通查询器 <a class="header-anchor" href="#普通查询器">¶</a></h2><img alt="img.png" height="200" src="`+n+`" width="750"><h3 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明">¶</a></h3><p>导入语句：<code>import BQuery from &#39;@/components/Bootx/SuperQuery/BQuery&#39;</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">b-query</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">queryParam</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fields</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gutter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled-query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default-item-count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default-item-md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> queryParam </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 查询条件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{ field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, placeholder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请输入流程模型名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span></code></pre></div><h3 id="组件参数-1" tabindex="-1">组件参数 <a class="header-anchor" href="#组件参数-1">¶</a></h3><blockquote><p>主要用于超级查询器组件的参数配置</p></blockquote><table><thead><tr><th>参数</th><th>类型</th><th>功能</th><th>是否必填</th><th>默认值</th></tr></thead><tbody><tr><td>fields</td><td>QueryField[]</td><td>查询字段配置</td><td>是</td><td>无</td></tr><tr><td>queryParams</td><td>boolean</td><td>查询状态</td><td>是</td><td>false</td></tr><tr><td>defaultItemCount</td><td>string</td><td>按钮标题</td><td>否</td><td>超级查询</td></tr><tr><td>defaultItemMd</td><td>string</td><td>按钮图标</td><td>否</td><td>ant-design:appstore</td></tr><tr><td>disabledQuery</td><td>string</td><td>弹框标题</td><td>否</td><td>超级查询器</td></tr><tr><td>gutter</td><td>number</td><td>宽度</td><td>否</td><td>840</td></tr><tr><td>@query</td><td>Function</td><td>点击查询时的回调</td><td>否</td><td></td></tr><tr><td>@rest</td><td>Function</td><td>点击取消查询时的回调</td><td>否</td><td></td></tr></tbody></table><p>组件对应的各项参数：</p><ul><li><code>v-model</code> 查询参数对象</li><li><code>fields</code>查询字段配置列表，通过传入的数据构建成查询器，根据其中的设置将值赋到查询参数对象上</li><li><code>gutter</code> 查询条目之间间隔数</li><li><code>default-item-md</code> 每个查询项所占的栅格数，可以通过这个参数来设置，默认为6，会被字段配置中的参数覆盖</li><li><code>default-item-count</code> 默认展示出几个查询项，超过的将会被隐藏，需要点击展开来进行使用，默认展示2个</li><li><code>default-item-count</code> 是否禁用查询，禁用查询后，查询按钮变为不可用，通常配合超级查询器进行使用</li><li><code>@query</code>：点击查询时的回调</li><li><code>@rest</code>：点击取消查询时的回调</li></ul><p><code>**fields**</code><strong>查询配置参数</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;num&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;数字&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NUMBER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, precision: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;字符&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, placeholder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请输入表单名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bool&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;布尔&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BOOLEAN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, md: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;日期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;date_time&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;日期时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATE_TIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;list&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;列表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   list:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     { lable: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cs1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     { lable: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cs2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     { lable: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cs3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ] }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>参数说明：</p><ul><li><code>field</code>：查询字段名</li><li><code>name</code>：显示名称，查询器查询页面显示的查询字段名称</li><li><code>type</code>：数据类型，根据传入不同的的数据类型，会使用不同的组件</li><li><code>placeholder</code>：提示文本</li><li><code>md</code>：查询项对应占用的栅格数，会覆盖默认配置的<code>item-md</code>配置</li><li><code>precision</code> : type数据类型为number时可用，表示小数点位数，默认为0位</li><li><code>list</code>：type数据类型为list的时候，通过这个字段传入 <ul><li><code>lable</code>：显示名称</li><li><code>value</code>：查询的值，等同<code>field</code></li></ul></li></ul><p><strong>数据类型（type）</strong> 与超级查询器一致</p><p><strong>@query查询回调</strong> 回调函数没有参数，是个空参方法，用于发起查询</p><p><strong>@reset取消回调</strong> 回调函数没有参数，是个空参方法，用于重置查询参数</p>`,46),k=[p];function e(d,r,E,y,g,F){return a(),i("div",null,k)}const u=s(l,[["render",e]]);export{c as __pageData,u as default};
