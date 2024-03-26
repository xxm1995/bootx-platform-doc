import{_ as i,c as l,o as e,a8 as a}from"./chunks/framework.riYNsadV.js";const f=JSON.parse('{"title":"内置功能","description":"","frontmatter":{},"headers":[],"relativePath":"platform/overview/guide/功能列表.md","filePath":"platform/overview/guide/功能列表.md","lastUpdated":1707230612000}'),o={name:"platform/overview/guide/功能列表.md"},d=a('<h1 id="内置功能" tabindex="-1">内置功能 <a class="header-anchor" href="#内置功能">¶</a></h1><h2 id="中间件配置封装" tabindex="-1">中间件配置封装 <a class="header-anchor" href="#中间件配置封装">¶</a></h2><ul><li>Spring线程池封装：用<code>TTL</code>包装线程池，支持在异步线程中进行传值</li><li>Swagger封装：基于<code>SpringDoc</code>进行封装，支持按需求将文档进行分组</li><li>Websocket封装：方便开发者能快速对接上<code>Websocket</code>功能</li><li>XXL-Job封装：相当于是<code>XXL-Job</code>的一个客户端<code>Starter</code></li><li>Jackson封装：根据项目的需求对<code>Jackson</code>进行了配置，并与系统进行了结合</li></ul><h2 id="通用功能" tabindex="-1">通用功能 <a class="header-anchor" href="#通用功能">¶</a></h2><ul><li>超级查询：支持便捷地生成<code>Mybatis Plus</code>所使用的<code>QueryWrapper</code>，支持普通的查询与复杂的嵌套查询</li><li>代码生成：前后端模板代码的生成</li><li>表单设计器：通过托拉拽生成可用的表单</li><li>多数据源：通过配置可以同时连接不同的数据库</li><li>定时任务：在线（添加、修改、删除)任务调度包含执行结果日志</li><li>中国行政区划：同步了国家统计局最新的省、市、区、街道四级单位的信息</li><li>数据翻译：支持对返回对象中的字段进行翻译，支持字典值翻译和数据表翻译</li><li>文件上传：支持服务器本地、MongoDB、Minio、OSS方式存储</li><li>幂等组件：基于<code>Redis</code>实现幂等组件，解决重复请求问题</li><li>分布式锁：基于<code>Lock4j</code>接入分布式锁功能</li><li>日志管理：分别接入<code>ELK</code>和<code>plumelog lite</code>，可满足不同的需求</li><li>IP归属地：可以根据IP获取归属地信息，包括国家、城市、ISP运营商等</li></ul><h2 id="业务功能" tabindex="-1">业务功能 <a class="header-anchor" href="#业务功能">¶</a></h2><h3 id="基础数据信息" tabindex="-1">基础数据信息 <a class="header-anchor" href="#基础数据信息">¶</a></h3><ul><li>字典管理：对系统中经常使用的一些较为固定的数据进行维护</li><li>参数管理：对系统动态配置常用参数</li><li>中国行政区划信息：内置中国五级行政区划的信息（省、市、区、街道和社区）</li></ul><h3 id="日志监控" tabindex="-1">日志监控 <a class="header-anchor" href="#日志监控">¶</a></h3><ul><li>登录日志：系统登录日志记录查询包含登录异常</li><li>操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询</li><li>数据监控：对数据发生变动的信息，进行版本记录</li><li>缓存监控：对系统配置的缓存进行查看</li><li>服务监控：监视当前系统CPU、内存、磁盘、JVM等相关信息</li></ul><h3 id="身份识别与访问管理" tabindex="-1">身份识别与访问管理 <a class="header-anchor" href="#身份识别与访问管理">¶</a></h3><ul><li>认证管理：包括终端管理、登录方式管理</li><li>用户管理：管理系统中的用户，包括基础信息和与角色、数据权限一类的关联</li><li>部门管理：配置系统组织机构</li><li>菜单管理：配置系统菜单，支持菜单的各种属性的配置</li><li>角色管理：角色的管理，以及与菜单、访问权限之间关联关系的配置</li><li>访问权限：拥有多种配置方式，如通过在线可视化界面进行精细化的权限配置、通过权限码配置、通过注解配置</li><li>数据权限：管理不同的角色分别可以看到哪些数据</li><li>开放平台对接：钉钉、微信、企业微信</li></ul><h3 id="消息通知" tabindex="-1">消息通知 <a class="header-anchor" href="#消息通知">¶</a></h3><ul><li>消息模板：可以对不同类型的消息进行抽取出公共的结构进行管理</li><li>站内信：系统公告(全体信息)和用户通知（指定用户）</li><li>邮件通知：通过邮箱方式发送通知</li><li>短信通知：通过短信方式发送通知，基于SMS4J实现</li><li>钉钉通知：普通消息、工作通知、群机器人</li><li>微信通知：与钉钉通知类似</li></ul>',14),c=[d];function r(t,h,s,n,_,u){return e(),l("div",null,c)}const S=i(o,[["render",r]]);export{f as __pageData,S as default};
