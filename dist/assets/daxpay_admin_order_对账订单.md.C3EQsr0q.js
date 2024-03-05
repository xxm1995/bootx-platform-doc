import{_ as t,c as d,o as a,V as r}from"./chunks/framework.OTU5OxHT.js";const x=JSON.parse('{"title":"对账订单","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/admin/order/对账订单.md","filePath":"daxpay/admin/order/对账订单.md","lastUpdated":1708941558000}'),e={name:"daxpay/admin/order/对账订单.md"},h=r('<h1 id="对账订单" tabindex="-1">对账订单 <a class="header-anchor" href="#对账订单">¶</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p></div><h2 id="操作介绍" tabindex="-1">操作介绍 <a class="header-anchor" href="#操作介绍">¶</a></h2><table><thead><tr><th>功能</th><th>介绍</th></tr></thead><tbody><tr><td>下载</td><td>从三方平台下载对账单，然后解析和转换后保存到数据库中</td></tr><tr><td>比对</td><td>根据保存的对账单进行比对，计算出差异，<strong>开发中...</strong></td></tr></tbody></table><h2 id="对账订单-1" tabindex="-1">对账订单 <a class="header-anchor" href="#对账订单-1">¶</a></h2><blockquote><p>目前对账订单需要手动创建，后期会支持自动创建和处理功能</p></blockquote><table><thead><tr><th>参数</th><th>功能</th></tr></thead><tbody><tr><td>对账日期</td><td>对哪天进行对账</td></tr><tr><td>批次号</td><td>如果一天发起了多次对账，将会通过批次号进行区分，<strong>目前生成有问题，下个版本修复</strong></td></tr><tr><td>支付通道</td><td>异步支付通道，见<a href="/daxpay/guides/other/常量和状态表.html#支付通道-paychannelenum">支付通道</a></td></tr><tr><td>对账单下载</td><td>对账单是否进行了下载</td></tr><tr><td>对账单比对</td><td>对账单是否进行了比对</td></tr><tr><td>错误信息</td><td>处理失败时的错误提示信息</td></tr></tbody></table><h2 id="对账差异单列表" tabindex="-1">对账差异单列表 <a class="header-anchor" href="#对账差异单列表">¶</a></h2><blockquote><p>通过下载三方支付网关中的对账单，解析后转换成统一的格式存储到数据库中，<strong>注意：原始的对账单也会保存到数据库中，但目前未进行使用</strong></p></blockquote><table><thead><tr><th>参数</th><th>功能</th></tr></thead><tbody><tr><td>商品名称</td><td>交易的名称</td></tr><tr><td>交易金额</td><td>交易的金额</td></tr><tr><td>支付订单ID</td><td>关联本地的支付订单ID</td></tr><tr><td>退款订单ID</td><td>关联本地的退款订单ID</td></tr><tr><td>网关订单号</td><td>三方支付网关订单号</td></tr><tr><td>交易类型</td><td>支付或退款</td></tr><tr><td>创建时间</td><td>保存时的时间</td></tr></tbody></table><h2 id="对账差异单列表-1" tabindex="-1">对账差异单列表 <a class="header-anchor" href="#对账差异单列表-1">¶</a></h2><blockquote><p>对账单下载完成后，可以手动启动比对，来找出本地和三方支付网关中的差异，分为三种情况：本地订单不存在、网关订单不存在、订单信息不一致</p></blockquote><table><thead><tr><th>参数</th><th>功能</th></tr></thead><tbody><tr><td>对账单ID</td><td></td></tr><tr><td>对账单明细ID</td><td></td></tr><tr><td>本地订单ID</td><td></td></tr><tr><td>订单标题</td><td></td></tr><tr><td>对账订单类型</td><td></td></tr><tr><td>差异类型</td><td></td></tr><tr><td>差异内容</td><td></td></tr><tr><td>网关订单号</td><td></td></tr><tr><td>交易金额</td><td></td></tr><tr><td>订单时间</td><td></td></tr></tbody></table><h2 id="操作界面" tabindex="-1">操作界面 <a class="header-anchor" href="#操作界面">¶</a></h2><h3 id="对账订单列表" tabindex="-1">对账订单列表 <a class="header-anchor" href="#对账订单列表">¶</a></h3><p><img src="https://jsd.cdn.zzko.cn/gh/xxm1995/picx-images-hosting@master/daxpay/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240215020825.5d8lhxxcpq40.webp" alt="微信截图_20240215020825" loading="lazy"></p><h3 id="对账订单明细列表" tabindex="-1">对账订单明细列表 <a class="header-anchor" href="#对账订单明细列表">¶</a></h3><p><img src="https://jsd.cdn.zzko.cn/gh/xxm1995/picx-images-hosting@master/daxpay/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240215020903.120rjd0gi6dc.webp" alt="微信截图_20240215020903" loading="lazy"></p><h3 id="对账差异单列表-2" tabindex="-1">对账差异单列表 <a class="header-anchor" href="#对账差异单列表-2">¶</a></h3><p><img src="https://jsd.cdn.zzko.cn/gh/xxm1995/picx-images-hosting@master/daxpay/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240305222120.pf2yh7z8l.webp" alt="微信截图_20240305222120" loading="lazy"></p>',20),o=[h];function s(c,n,i,l,p,_){return a(),d("div",null,o)}const m=t(e,[["render",s]]);export{x as __pageData,m as default};
