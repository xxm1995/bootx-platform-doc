import{_ as s,o as a,c as l,X as o}from"./chunks/framework.6909765d.js";const C=JSON.parse('{"title":"自定义Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"platform/front/vue3/自定义Hooks.md","filePath":"platform/front/vue3/自定义Hooks.md"}'),n={name:"platform/front/vue3/自定义Hooks.md"},e=o(`<h1 id="自定义hooks" tabindex="-1">自定义Hooks <a class="header-anchor" href="#自定义hooks">¶</a></h1><h2 id="usedict-字典" tabindex="-1">useDict(字典) <a class="header-anchor" href="#usedict-字典">¶</a></h2><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能">¶</a></h3><ul><li>在系统打开时缓存字典数据，减少对后端的请求次数</li><li>根据字典CODE值获取字典项列表，提供同步和异步的方法</li><li>字典项翻译，将code码转换成显示的值</li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useDict</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/hooks/bootx/useDict</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> dictConvert </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useDict</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h3 id="方法介绍" tabindex="-1">方法介绍 <a class="header-anchor" href="#方法介绍">¶</a></h3><ul><li><code>dictConvert</code> 字典项转换</li><li><code>dictItems</code> 获取字典项列表</li><li><code>dictItemsNumber</code> 获取字典项列表(code值为数字)</li><li><code>dictDropDown</code> 获取字典下拉框数据列表</li><li><code>dictDropDownNumber</code> 获取字典下拉框数据列表</li></ul><h3 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构">¶</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dictCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sex</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="useformedit-表单编辑" tabindex="-1">useFormEdit(表单编辑) <a class="header-anchor" href="#useformedit-表单编辑">¶</a></h2><h3 id="功能-1" tabindex="-1">功能 <a class="header-anchor" href="#功能-1">¶</a></h3><p>对表单通用的初始化、状态值、下拉框搜索等功能进行封装</p><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useFormEdit </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/hooks/bootx/useFormEdit</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 返回数据详细介绍看下文 </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> confirmLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modalWidth </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormEdit</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h3 id="方法和返回数据介绍" tabindex="-1">方法和返回数据介绍 <a class="header-anchor" href="#方法和返回数据介绍">¶</a></h3><ul><li><code>model</code> 表单相关的所有数据，是个<code>reactive</code>对象</li><li><code>labelCol</code> 标题栅格宽度</li><li><code>wrapperCol</code> 表单项内容栅格宽度</li><li><code>title</code> 标题内容</li><li><code>modalWidth</code> 弹框宽段</li><li><code>confirmLoading</code> 是否在加载中</li><li><code>visible</code> 弹窗是否显示</li><li><code>editable</code> 是否是编辑状态</li><li><code>addable</code> 是否是新建状态</li><li><code>showable</code> 是否是查看状态</li><li><code>formEditType</code> <code>FormEditType</code>类型枚举，内容分别是上述三种状态</li><li><code>initFormEditType(editType: FormEditType)</code> 初始化表单状态方法，需传入参数<code>FormEditType</code>参数</li><li><code>handleCancel()</code> 关闭弹窗方法</li><li><code>search(input: string, option)</code> 搜索方法，供select下拉框组件进行筛选时使用(:filter-option=&quot;search&quot;)</li><li><code>diffForm(rawForm, editForm, ...keys)</code> 判断脱敏参数是否被修改的参数, 未修改返回空值 rawForm 后端获取到的原始数据, editForm 修改后的数据, keys 字段名称</li></ul><h2 id="usetablepage-表格" tabindex="-1">useTablePage(表格) <a class="header-anchor" href="#usetablepage-表格">¶</a></h2><h3 id="功能-2" tabindex="-1">功能 <a class="header-anchor" href="#功能-2">¶</a></h3><p>对表格通用的查询、分页等功能进行封装</p><h3 id="使用-2" tabindex="-1">使用 <a class="header-anchor" href="#使用-2">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTablePage </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/hooks/bootx/useTablePage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 返回数据详细介绍看下文  queryPageCallback 参数是分页查询的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> confirmLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modalWidth </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTablePage</span><span style="color:#A6ACCD;">(queryPageCallback)</span></span></code></pre></div><h3 id="方法和返回数据介绍-1" tabindex="-1">方法和返回数据介绍 <a class="header-anchor" href="#方法和返回数据介绍-1">¶</a></h3><ul><li><code>model</code> 表格相关的所有数据，是个<code>reactive</code>对象</li><li><code>loading</code> 加载状态</li><li><code>pages</code> 分页参数，包括当前页、每页数量</li><li><code>pagination</code> 服务端返回的分页结果，包含当前页、总数、表格数据等</li><li><code>batchOperateFlag</code> 批量操作标识</li><li><code>superQueryFlag</code> 超级查询条件生效状态</li><li><code>query()</code> 普通查询方法</li><li><code>resetPage()</code> 重置当前页数</li><li><code>pageQueryResHandel()</code> 分页查询返回结果处理</li><li><code>handleTableChange()</code> 表格翻页或变动</li><li><code>resetQuery()</code> 重置查询</li><li><code>resetQueryParams()</code> 重置查询参数</li><li><code>handleOk()</code> ok按钮，触发查询</li></ul><h2 id="useupload-文件上传" tabindex="-1">useUpload(文件上传) <a class="header-anchor" href="#useupload-文件上传">¶</a></h2><h3 id="功能-3" tabindex="-1">功能 <a class="header-anchor" href="#功能-3">¶</a></h3><p>对<code>Antd Vue</code>上传组件所必须的的方法进行封装</p><h3 id="使用-3" tabindex="-1">使用 <a class="header-anchor" href="#使用-3">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useUpload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/hooks/bootx/useUpload</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 参数为上传地址，服务地址在.env中配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> tokenHeader</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> uploadAction </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useUpload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/file/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="方法介绍-1" tabindex="-1">方法介绍 <a class="header-anchor" href="#方法介绍-1">¶</a></h3><ul><li><code>tokenHeader</code> 一个<code>computed</code>对象，返回值是登陆后的Token值，格式为<code>{ AccessToken: token }</code></li><li><code>uploadAction</code> 一个<code>computed</code>对象，返回值是上传文件的全路径请求地址</li></ul><h2 id="usevalidate-数据校验" tabindex="-1">useValidate(数据校验) <a class="header-anchor" href="#usevalidate-数据校验">¶</a></h2><h3 id="功能-4" tabindex="-1">功能 <a class="header-anchor" href="#功能-4">¶</a></h3><p>封装了一个通用的数据是否存在的查询方法，需要后端配合编写指定格式的接口</p><h3 id="使用-4" tabindex="-1">使用 <a class="header-anchor" href="#使用-4">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useValidate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/hooks/bootx/useValidate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> existsByServer </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useValidate</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h3 id="方法介绍-2" tabindex="-1">方法介绍 <a class="header-anchor" href="#方法介绍-2">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 服务器校验方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#676E95;font-style:italic;"> 要进行查重的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#676E95;font-style:italic;"> 主键</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">formEditType</span><span style="color:#676E95;font-style:italic;"> 方法类型，新增或更新</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">existsFun</span><span style="color:#676E95;font-style:italic;"> 查询该值的记录是否存在的请求方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">existsNotIdFun</span><span style="color:#676E95;font-style:italic;"> 查询该值id对应的数据之外否存在记录是的请求方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">errMsg</span><span style="color:#676E95;font-style:italic;"> 验证不通过的内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">existsByServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">formEditType</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">existsFun</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">existsNotIdFun</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">errMsg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">该编码已存在!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子">¶</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validateCode</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">form</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">existsByServer</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">formEditType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">existsByCode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">existsByCodeNotId</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span></code></pre></div>`,40),p=[e];function t(c,r,i,y,D,d){return a(),l("div",null,p)}const A=s(n,[["render",t]]);export{C as __pageData,A as default};
