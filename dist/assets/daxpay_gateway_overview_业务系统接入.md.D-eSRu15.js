import{_ as a,c as e,o as t,a8 as o}from"./chunks/framework.riYNsadV.js";const m=JSON.parse('{"title":"业务系统接入","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/gateway/overview/业务系统接入.md","filePath":"daxpay/gateway/overview/业务系统接入.md","lastUpdated":1708405903000}'),i={name:"daxpay/gateway/overview/业务系统接入.md"},_=o('<h1 id="业务系统接入" tabindex="-1">业务系统接入 <a class="header-anchor" href="#业务系统接入">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务系统想接入支付网关的话，不需要集成到业务系统里，只需要单独部署一份支付系统，然后业务系统通过接口调用即可拥有对应的支付能力， 不会对原业务系统的架构产生影响。如果是Java项目，可以使用<a href="./../overview/SDK使用说明.html">支付网关SDK</a>简化接入流程， 其他语言可以参照接口文档中的说明使用HTTP接口方式接入。</p></div><h2 id="接入流程概括" tabindex="-1">接入流程概括 <a class="header-anchor" href="#接入流程概括">¶</a></h2><ol><li>部署并启动支付网关系统</li><li>登录支付网关后台管理端，配置支付通道、接口配置、签名方式、密钥等参数</li><li>在业务系统中配置支付网关的调用地址，启用签名验证的话，需要将密钥配置到业务系统中</li><li>业务系统使用支付网关提供的接口进行调用支付的能力</li></ol>',4),s=[_];function r(c,l,d,n,p,h){return t(),e("div",null,s)}const f=a(i,[["render",r]]);export{m as __pageData,f as default};
