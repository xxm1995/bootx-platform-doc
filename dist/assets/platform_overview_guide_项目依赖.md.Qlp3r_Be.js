import{_ as i,c as l,o as e,V as a}from"./chunks/framework.TiLr8DIm.js";const g=JSON.parse('{"title":"项目依赖","description":"","frontmatter":{},"headers":[],"relativePath":"platform/overview/guide/项目依赖.md","filePath":"platform/overview/guide/项目依赖.md","lastUpdated":1692349911000}'),t={name:"platform/overview/guide/项目依赖.md"},r=a('<h1 id="项目依赖" tabindex="-1">项目依赖 <a class="header-anchor" href="#项目依赖">¶</a></h1><h2 id="基础环境" tabindex="-1">基础环境 <a class="header-anchor" href="#基础环境">¶</a></h2><ul><li>JDK: 1.8+</li><li>Maven: 3.5+</li><li>MySql: 5.7+</li><li>Redis: 5.x +</li><li>Node Js: 16.15+</li><li>Npm: 5.6.0+</li><li>Yarn: 1.22.1+</li></ul><h2 id="数据库-mysql" tabindex="-1">数据库(MySQL) <a class="header-anchor" href="#数据库-mysql">¶</a></h2><ul><li>默认字符集：utf8mb4</li><li>默认排序规则：utf8mb4_general_ci</li><li>大小写敏感：需要开启大小写不敏感设置</li></ul><h2 id="服务端主要依赖" tabindex="-1">服务端主要依赖 <a class="header-anchor" href="#服务端主要依赖">¶</a></h2><h3 id="已启用" tabindex="-1">已启用 <a class="header-anchor" href="#已启用">¶</a></h3><ul><li>spring-boot-starter-data-redis： Redis连接工具，主要用于鉴权认证信息存储、分布式锁、Cache缓存等</li><li>spring-boot-starter-websocket： 支持Websocket通信，用于后端主动给前端推送信息的场合，比如异步操作完成事件、站内信新消息通知等</li><li>spring-boot-starter-quartz： 定时任务</li><li>spring-boot-starter-thymeleaf： 支持后端渲染网页，现在用到的场合有开放平台登录、聚合扫码支付等</li><li>spring-boot-starter-mail： 邮件发送</li><li>spring-boot-starter-data-mongodb： MongoDB持久层框架，主要用在文件存储、日志存储等场合</li><li>spring-boot-starter-cache： 缓存框架</li><li>spring-boot-starter-amqp： RabbitMQ框架，处理异步消息通知，在支付功能中有比较多的应用</li><li>Spring Retry： Spring重试器，用在需要进行重试的方法上，例如远程信息同步、开发接口调用等</li><li>springdoc-openapi： Swagger的一个是实现，用来代替SpringFox，实现了Swagger3(openapi)规范</li><li>Knife4j：Swagger 增强 UI 实现</li><li>Mybatis-Plus： MyBatis 增强工具包</li><li>hibernate-validator： 参数校验框架</li><li>EasyCaptcha： 验证码图片生成类库，可以生成算数验证码</li><li>Velocity： 模板引擎，用于代码生成器、消息模板渲染等场合，用来把参数数据通过模板进行渲染成需要文本数据</li><li>JustAuth： 第三方授权登录的工具类库，用于微信、钉钉、企业微信登录等场合</li><li>MapStruct： 用于生成类型安全的Java Bean 转换处理器，在编译环境生成对应的类，性能相较于BeanUtil性能更高</li><li>DynamicDatasource：动态数据源，可以实现多数据源的动态切换，在多数据源切换的场合有比较好的应用</li><li>TransmittableThreadLocal(TTL)： 阿里开源的一个线程变量存储的实现，主要用在处理父子线程变量不能共用的情况</li><li>WxJava： 微信开发 Java 开发工具包，用于微信公众平台、企业微信相关场合</li><li>lock4j： 基于Spring AOP 的声明式和编程式分布式锁</li><li>flyway： 数据库版本管理工具</li><li>sa-token： 一个轻量级的国产 Java 权限认证框架</li><li>plumelog：是一个轻量的单机版管理工具，开箱即用，甚至可以直接嵌入到了系统中，而不需要额外部署单独的服务</li></ul><h3 id="未启用" tabindex="-1">未启用 <a class="header-anchor" href="#未启用">¶</a></h3><ul><li>xxl-job： 分布式任务调度平台，与quartz类似，已做初步的整合，显示引入该组件的pom坐标就可启用</li><li>redisson-spring-boot-starter： spring-boot-starter-redis之外的另一种Redis连接工具，功能相较于更为强大，但与Spring整合性稍低，所以作为备选，相关整合配置已经实现，显示引入该组件的pom坐标就可启用</li></ul><h2 id="前端主要组件-vue3" tabindex="-1">前端主要组件(Vue3) <a class="header-anchor" href="#前端主要组件-vue3">¶</a></h2><blockquote><p>基于<code>vben-admin</code>脚手架开发，使用<code>ant-design-vue</code>组件库，表格使用<code>vxe-table</code>，对应组件使用说明可以去对应官网查看</p></blockquote><ul><li>vite： 3.2.x</li><li>vue： 3.2.x</li><li>vue-json-pretty： json代码高亮显示插件</li><li>vueuse： Vue组合方法集</li><li>vxe-table： 表格组件，同时包含一些基础组件，如弹窗按钮等</li><li>ant-design-vue： antd vue 3.x</li><li>iconify： 图标组件</li><li>wangeditor： 富文本编辑器</li><li>axios： http请求组件</li><li>bpmn-js： 工作流绘制工具</li><li>cron-parser： cron表达式组件</li><li>print-js： 打印组件</li><li>echarts： 百度开源的图表组件库</li><li>qrcode： 二维码组件</li><li>less： 样式预处理器</li><li>......</li></ul><h2 id="移动端-小程序" tabindex="-1">移动端(小程序) <a class="header-anchor" href="#移动端-小程序">¶</a></h2><ul><li>Taro</li><li>NutUI</li></ul>',15),o=[r];function s(n,d,c,h,p,u){return e(),l("div",null,o)}const _=i(t,[["render",s]]);export{g as __pageData,_ as default};
