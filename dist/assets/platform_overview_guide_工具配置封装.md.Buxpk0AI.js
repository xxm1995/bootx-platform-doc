import{_ as e,c as a,o,a8 as c}from"./chunks/framework.riYNsadV.js";const _=JSON.parse('{"title":"工具配置封装","description":"","frontmatter":{},"headers":[],"relativePath":"platform/overview/guide/工具配置封装.md","filePath":"platform/overview/guide/工具配置封装.md","lastUpdated":1707490731000}'),d={name:"platform/overview/guide/工具配置封装.md"},i=c('<h1 id="工具配置封装" tabindex="-1">工具配置封装 <a class="header-anchor" href="#工具配置封装">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>对一些中间件，进行与系统整合的配置，使之更适合所针对业务场景。同时对一些常用功能，主要是一些并不需要进行可视化界面配置的功能进行封装. 最后就是对一些中间件进行的增强或裁剪，都归到了工具配置封装下，相较于<a href="./通用功能组件.html">通用功能组件</a>，这块的功能会更专注于某几个点，职责更单一</p></div><h2 id="缓存配置" tabindex="-1">缓存配置 <a class="header-anchor" href="#缓存配置">¶</a></h2><p>针对Spring Cache的Redis实现进行了增强配置，新增了以下特性：</p><ul><li>扩展RedisCache缓存管理器，存储null值时不报错</li><li>扩展支持无侵入的缓存过期时间配置，通过yaml中可以进行配置</li><li>针对缓存的Java泛型对象常遇到的无法反序列化，尤其以<code>List</code>、抽象类或接口类型的字段尤为常见，更改序列化时保存管理类型信息，保证反序列化时的正常</li></ul><h2 id="异常处理器" tabindex="-1">异常处理器 <a class="header-anchor" href="#异常处理器">¶</a></h2><p>对项目异常进行统一处理，返回统一<code>ErrorResult</code>格式的json返回给前端，<code>ErrorResult</code>包含对应错误链路追踪ID，通过<code>traceId</code>可以定位整个错误链路， 同时也可以通过配置，来决定返回的异常是否包含详细的报错信息，如SQL执行失败的报错，默认为关闭状态，可以在开发环境中打开这个选项，方便开发测试，在生产环境下关闭， 预防泄露敏感信息。</p><h2 id="请求头获取工具" tabindex="-1">请求头获取工具 <a class="header-anchor" href="#请求头获取工具">¶</a></h2><p>获取请求头中的数据，通过创建一个web过滤器，每次请求到来时，获取请求头的所有请求头数据存储到TTL容器（<code>TransmittableThreadLocal</code>）里， 实现在异步方法中也可以正常获取参数， 并在请求结束后自动清除数据。</p><h2 id="幂等控制组件" tabindex="-1">幂等控制组件 <a class="header-anchor" href="#幂等控制组件">¶</a></h2><p>只对部分不可以请求的接口，会在网络不好、用户误操作的情况下发起重复的请求，会造成数据的错误，所以必须阻止这种现象的发生。所以引入幂等控制组件来解决这个问题， 通过在要进行幂等控制的方法上添加<code>@Idempotent</code>注解，就可以自动实现幂等控制。</p><h2 id="分布式锁" tabindex="-1">分布式锁 <a class="header-anchor" href="#分布式锁">¶</a></h2><p>使用<code>lock4j</code>作为分布式锁组件，原有基于<code>hzero</code>的分布式锁组件不再使用，虽然原有锁组件功能更强大，支持可重入锁、公平锁、联锁、红锁、读锁、写锁等多种类型的锁， 但使用后发现目前的项目状态并不需要这么多功能，只需要一个简单的排它锁就已经足够，同时因为原有的锁组件是基于<code>Redisson</code>开发，造成项目中有两套Redis连接，通过替换为<code>lock4j</code>， 去除了<code>Redisson</code>的强制依赖，降低了系统的复杂度。</p><h2 id="json序列化配置" tabindex="-1">Json序列化配置 <a class="header-anchor" href="#json序列化配置">¶</a></h2><p>对项目中使用的<code>Jackson</code>组件以及被用到的场景进行配置，例如Spring MVC进行参数和结果转换场景，根据项目的需求进行配置，同时提供出一些开箱即用的工具类和Spring Bean。主要功能如下：</p><ul><li>提供JacksonUtil工具类，用于需要进行Jackson解析的场合</li><li>提供 java8 时间序列化类，在Jackson序列化时对JDK8新增的时间类进行支持</li><li>提供Long 类型序列化为String类型的序列化类，处理前端长整形精度丢失问题</li><li>提供一个默认的ObjectMapper序列化配置Bean，支持jdk8，LongToString等配置</li><li>提供 typeObjectMapper 序列化配置Bean，记录序列化对象的类型信息，主要用于需要记录类型的持久化场合</li><li>提供Jackson2ObjectMapper相关配置（Spring MVC进行参数和结果转换），支持jdk8，LongToString等配置</li></ul><h2 id="日志配置" tabindex="-1">日志配置 <a class="header-anchor" href="#日志配置">¶</a></h2><p>覆盖重写SLF4J的MDC，引入<code>TTL</code>，使其支持简单轻量的同步异步链路追踪功能，提供默认的<code>logback.xml</code>配置文档，可以快速引入默认的控制台输出、ELK日志、收集的配置， 同时支持日志中的敏感数据脱敏的功能，同时对<code>嵌入式PlumeLog</code>自带的删除机制进行重写，解决自带删除机制无效的问题。</p><h2 id="mybatis-plus扩展" tabindex="-1">Mybatis Plus扩展 <a class="header-anchor" href="#mybatis-plus扩展">¶</a></h2><p>持久层框架作为系统运行中最核心的模块之一，它的稳定性和易用性直接能决定了整个项目上限。所以，为了使MP（Mybatis Plus）与项目能结合的更加顺畅， 对一些自带的功能进行了修改和扩展，同时也对项目中如何使用MP做了定义和配置，主要包括下列几个方面：</p><ul><li>提供<code>MpBaseEntity</code>、<code>MpIdEntity</code>等一系列基础对象，作为通用数据库实体类的公共父类</li><li>提供<code>BaseManager</code>，作为 ServiceImpl 的增强替代，修改和扩展了一些公共方法，对<code>Optional</code>类型支持也更好一些</li><li>结合<code>BigField</code>注解，配合<code>MpUtil</code>工具类可以便捷的进行大字段排除</li><li>提供<code>MpUtil</code>工具类，包含分页对象转换、读取方法</li><li>修改了MP插件加载机制，使之可以配置不同插件拥有不同的加载顺序</li><li>一些MP的默认配置，如逻辑删除、乐观锁、主键生成策略等</li></ul><h2 id="rabbitmq消息队列" tabindex="-1">RabbitMQ消息队列 <a class="header-anchor" href="#rabbitmq消息队列">¶</a></h2><p>对RabbitMQ的序列化方式进行了配置。支持配置保存实体类原始类型的序列化方式，默认关闭</p><h2 id="redis客户端封装和配置" tabindex="-1">Redis客户端封装和配置 <a class="header-anchor" href="#redis客户端封装和配置">¶</a></h2><p>封装StringRedisTemplate提供API简单的RedisClient操作工具类，封装消息Key过期事件通知机制，可以在不引入支持延时队列的消息中间件的情况下，基本满足在不严谨场合下的延时队列需求， 使用会记录类型信息的序列化方式，实现在反序列化时直接能反序列化回原始的对象类型。封装消息队列功能，支持在不引入其他消息中间件的情况下支持简单的队列功能，不过还是更推荐是用专门的消息中间件。</p><h2 id="发号器-序列号生成器" tabindex="-1">发号器（序列号生成器） <a class="header-anchor" href="#发号器-序列号生成器">¶</a></h2><p>通过生成一个单调递增的队列，可以通过redis、jdbc、Mongo生成一个区间，每次获取号码时本地进行生成，区间号码用完后生成并跳到新的区间。重启项目，也会跳到下个区间，预防重复。 不适用分布式环境，因为多机器同时运行时，是程序本地进行发号，分布式不出问题的话，需要号段设得跟步长一样，然后加分布式锁。</p><h2 id="spring相关配置" tabindex="-1">Spring相关配置 <a class="header-anchor" href="#spring相关配置">¶</a></h2><p>启用hutool的SpringUtil工具类，直接可以使用，配置线程池，并用TTL进行包装，用于异步线程中获取环境数据，如请求头信息，提供CorsFilter过滤器处理跨域请求，自动处理跨域问题。</p><h2 id="超级查询器" tabindex="-1">超级查询器 <a class="header-anchor" href="#超级查询器">¶</a></h2><p>支持根据前端传入的查询参数，动态的生成<code>Mybatis Plus</code>对应的查询<code>QueryWrapper</code>，而不再需要重复手动编写这些高度相似的代码。主要分为两类， 一种是常规的查询构造器，用于常规的普通查询，适合于大多数场合，同时对代码的改动影响较小。另一种是支持各种组合、嵌套查询的查询构造器，用于需要复杂查询的场合， 通常配合前端超级查询器组件一块使用。</p><h2 id="swagger3配置-springdoc" tabindex="-1">swagger3配置（SpringDoc） <a class="header-anchor" href="#swagger3配置-springdoc">¶</a></h2><p>所使用的的是Swagger3(SpringDoc)，不支持Swagger2相关的注解，因为Swagger2(SpringFox)已经在17年停止维护了，最新的Spirng Boot版本与Swagger2已经有不兼容的问题， 所以为了后期更少出现问题，直接使用Swagger3进行封装，，通过Spring的动态注册Bean和数据绑定功能，在容器Bean初始化之前把<code>GroupedOpenApi</code>（相当于Swagger2的<code>Docket</code>）注入到Spring容器中。</p><h2 id="websocket封装" tabindex="-1">websocket封装 <a class="header-anchor" href="#websocket封装">¶</a></h2><p>针对与网页前端进行<code>Websocket</code>通信，对原生<code>Websocket</code>和 <code>SpringWebsocker</code>进行封装出连接管理器，同时也对数据格式进行标准化，方便管理会话与用户之间的关系， 可以更方便与前端进行通讯，Vue2与Vue3对应的管理端实现也做了对应适配和实现，只需要分别引入<code>WebsocketMixin</code>或<code>UserGlobalWebSocker</code>就能在此基础上简单的编写交互代码。 针对安全考虑。可以配置成只有登录状态下才可以连接<code>Websocket</code>，提供用户全局级别的Websocket 服务，方便ws消息推送。</p><h2 id="数据字段翻译" tabindex="-1">数据字段翻译 <a class="header-anchor" href="#数据字段翻译">¶</a></h2><blockquote><p>未完成.....</p></blockquote>',37),r=[i];function s(t,l,n,h,p,b){return o(),a("div",null,r)}const u=e(d,[["render",s]]);export{_ as __pageData,u as default};
