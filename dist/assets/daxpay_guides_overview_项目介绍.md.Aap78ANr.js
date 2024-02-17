import{E as l,c as d,J as a,V as t,o}from"./chunks/framework.OTU5OxHT.js";const r=t('<h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍">¶</a></h1><h2 id="简绍" tabindex="-1">简绍 <a class="header-anchor" href="#简绍">¶</a></h2><p><code>DaxPay</code>是一套基于<code>Bootx-Platform</code>脚手架构建的一套开源支付网关系统，已经对接<code>支付宝</code>、<code>微信支付</code>相关的接口，以及扩展了<code>钱包支付</code>、<code>储值卡支付</code>、<code>现金支付</code>等新的支付方式。 提供收单、退款、聚合支付、组合支付、对账、分账等功能，通过HTTP方式进行调用，不与其他系统产生耦合关联，可以快速集成到各种系统中，提供可视化界面进行管理，便于实现统一的支付信息管理。</p><h2 id="项目地址" tabindex="-1">项目地址 <a class="header-anchor" href="#项目地址">¶</a></h2><ul><li>服务端地址： <a href="https://gitee.com/bootx/dax-pay" target="_blank" rel="noreferrer">https://gitee.com/bootx/dax-pay</a></li><li>前端地址： <a href="https://gitee.com/bootx/dax-pay-ui" target="_blank" rel="noreferrer">https://gitee.com/bootx/dax-pay-ui</a></li><li>底层脚手架地址： <a href="https://gitee.com/bootx/bootx-platform" target="_blank" rel="noreferrer">https://gitee.com/bootx/bootx-platform</a></li></ul><h2 id="特色功能" tabindex="-1">特色功能 <a class="header-anchor" href="#特色功能">¶</a></h2><ul><li>已对接<code>微信支付</code>相关的接口，目前已经支持<code>V2</code>版本的接口，后续版本将支持<code>V3</code>版本的接口</li><li>已对接<code>支付宝</code>相关的接口，目前已经支持<code>V2</code>版本的接口，后续版本将支持<code>V3</code>版本的接口</li><li>支持组合支付，满足用户系统需要多种方式同时进行支付的场景。</li><li>提供<code>HTTP</code>方式接口调用能力，和<code>Java</code>版本的<code>SDK</code>，方便业务系统进行对接</li><li>接口请求和响应数据支持启用签名机制，可根据实际需要进行开关，保证交易安全可靠</li><li>提供管理平台，方便运营人员进行管理和操作，不需要懂IT技术也可以轻松使用</li></ul><h2 id="核心功能" tabindex="-1">核心功能 <a class="header-anchor" href="#核心功能">¶</a></h2>',8),c=t('<h2 id="核心技术栈" tabindex="-1">核心技术栈 <a class="header-anchor" href="#核心技术栈">¶</a></h2><table><thead><tr><th>名称</th><th>描述</th><th>版本要求</th></tr></thead><tbody><tr><td>JDK</td><td>Java环境</td><td>1.8+，11版本可以正常使用，但17+版本暂不支持</td></tr><tr><td>Spring Boot</td><td>开发框架</td><td>2.7.x</td></tr><tr><td>Redis</td><td>分布式缓存</td><td>5.x版本及以上</td></tr><tr><td>MySQL</td><td>数据库</td><td>基于5.7.X版本开发，基本支持8.x版本</td></tr><tr><td>Vue</td><td>前端框架</td><td>3.x</td></tr><tr><td>IJpay</td><td>支付SDK开发包</td><td>项目自动管理，不需要额外处理</td></tr></tbody></table><h2 id="路线图" tabindex="-1">路线图 <a class="header-anchor" href="#路线图">¶</a></h2><h3 id="_2-0-x版本" tabindex="-1">2.0.X版本: <a class="header-anchor" href="#_2-0-x版本">¶</a></h3><ul><li>[ ] 钱包功能完善</li><li>[ ] 储值卡功能完善</li><li>[ ] 现金支付功能完善</li><li>[ ] 微信增加V3版本接口支持</li><li>[ ] 支付宝增加V3版本接口支持</li><li>[ ] 支付宝进行关闭时，支持通过撤销模式进行订单关闭</li><li>[ ] 对账功能剩余比对功能实现</li><li>[ ] 消息通知支持消息中间件模式</li><li>[ ] 支持转账操作</li><li>[ ] 增加验签调试等功能的页面</li></ul><h3 id="_2-1-x版本" tabindex="-1">2.1.X版本: <a class="header-anchor" href="#_2-1-x版本">¶</a></h3><ul><li>[ ] 增加账户金额表</li><li>[ ] 增加统计管理</li><li>[ ] 支持微信消息通知</li><li>[ ] 支持钉钉消息通知</li><li>[ ] 新增支付单预警功能, 处理支付单与网关状态不一致且无法自动修复的情况</li></ul><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license">¶</a></h2><p>Apache License Version 2.0_</p>',9),x=JSON.parse('{"title":"项目介绍","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/guides/overview/项目介绍.md","filePath":"daxpay/guides/overview/项目介绍.md","lastUpdated":1707297965000}'),h={name:"daxpay/guides/overview/项目介绍.md"},b=Object.assign(h,{setup(n){const e=[{title:"功能列表",children:[{title:"后台管理",children:[{title:"支付配置",children:[{title:"平台配置"},{title:"支付通道"},{title:"支付接口"},{title:"支付接口"},{title:"通道配置"}]},{title:"订单管理",children:[{title:"支付订单"},{title:"退款订单"},{title:"对账订单"}]},{title:"数据记录",children:[{title:"回调记录"},{title:"同步记录"},{title:"修复记录"},{title:"关闭记录"}]}]},{title:"支付网关",children:[{title:"支付通道",children:[{title:"支付宝"},{title:"微信支付"},{title:"云闪付"},{title:"钱包支付"},{title:"现金支付"},{title:"储值卡支付"}]},{title:"支付方式",children:[{title:"常规支付"},{title:"Wap支付"},{title:"Web支付"},{title:"App支付"},{title:"扫码支付"},{title:"付款码"},{title:"公众号/小程序支付"}]},{title:"接口对接",children:[{title:"支付接口",children:[{title:"支付接口"},{title:"退款接口"},{title:"支付关闭接口"},{title:"同步接口"}]},{title:"查询接口",children:[{title:"支付订单查询"},{title:"退款订单查询"}]}]}]}]}];return(s,_)=>{const i=l("MindMap");return o(),d("div",null,[r,a(i,{data:e,auto:""}),c])}}});export{x as __pageData,b as default};
