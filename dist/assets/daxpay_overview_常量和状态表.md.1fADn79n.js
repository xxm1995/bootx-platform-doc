import{_ as t,c as d,o as e,V as r}from"./chunks/framework.TiLr8DIm.js";const p=JSON.parse('{"title":"常量和状态表","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/overview/常量和状态表.md","filePath":"daxpay/overview/常量和状态表.md","lastUpdated":1707145471000}'),a={name:"daxpay/overview/常量和状态表.md"},h=r('<h1 id="常量和状态表" tabindex="-1">常量和状态表 <a class="header-anchor" href="#常量和状态表">¶</a></h1><h2 id="支付通道" tabindex="-1">支付通道() <a class="header-anchor" href="#支付通道">¶</a></h2><table><thead><tr><th>编码</th><th>类型</th></tr></thead><tbody><tr><td>ali_pay</td><td>支付宝</td></tr><tr><td>wechat_pay</td><td>微信支付</td></tr><tr><td>union_pay</td><td>云闪付</td></tr><tr><td>cash_pay</td><td>现金支付</td></tr><tr><td>wallet_pay</td><td>钱包支付</td></tr><tr><td>voucher_pay</td><td>储值卡支付</td></tr></tbody></table><h2 id="支付方式" tabindex="-1">支付方式() <a class="header-anchor" href="#支付方式">¶</a></h2><table><thead><tr><th style="text-align:left;">编码</th><th>类型</th></tr></thead><tbody><tr><td style="text-align:left;">normal</td><td>常规支付</td></tr><tr><td style="text-align:left;">wap</td><td>wap支付</td></tr><tr><td style="text-align:left;">app</td><td>应用支付</td></tr><tr><td style="text-align:left;">web</td><td>web支付</td></tr><tr><td style="text-align:left;">qr_code</td><td>扫码支付</td></tr><tr><td style="text-align:left;">bar_code</td><td>付款码</td></tr><tr><td style="text-align:left;">jsapi</td><td>公众号/小程序支付 - 微信</td></tr></tbody></table><h2 id="支付状态" tabindex="-1">支付状态() <a class="header-anchor" href="#支付状态">¶</a></h2><table><thead><tr><th>编码</th><th>类型</th></tr></thead><tbody><tr><td>unknown</td><td>未知状态，几乎不会出现</td></tr><tr><td>progress</td><td>支付中</td></tr><tr><td>success</td><td>成功</td></tr><tr><td>fail</td><td>失败</td></tr><tr><td>cancel</td><td>支付取消(超时/手动取消/订单已经关闭/撤销支付单)</td></tr><tr><td>refunding</td><td>退款中(部分退款)</td></tr><tr><td>refunded</td><td>已全部退款</td></tr></tbody></table><h2 id="网关同步状态" tabindex="-1">网关同步状态() <a class="header-anchor" href="#网关同步状态">¶</a></h2><table><thead><tr><th>编码</th><th>类型</th></tr></thead><tbody><tr><td>fail</td><td>查询失败</td></tr><tr><td>pay_success</td><td>支付成功</td></tr><tr><td>pay_wait</td><td>等待付款中</td></tr><tr><td>closed</td><td>已关闭</td></tr><tr><td>refund</td><td>已退款</td></tr><tr><td>not_found</td><td>未查询到订单, 部分通道部分未支付也是这个状态, 如支付宝, 需要特殊处理</td></tr><tr><td>timeout</td><td>超时未关闭</td></tr></tbody></table><h2 id="退款状态" tabindex="-1">退款状态() <a class="header-anchor" href="#退款状态">¶</a></h2><table><thead><tr><th>编码</th><th>类型</th></tr></thead><tbody><tr><td>progress</td><td>退款中</td></tr><tr><td>success</td><td>退款成功</td></tr><tr><td>fail</td><td>退款失败</td></tr><tr><td>close</td><td>退款关闭</td></tr></tbody></table><h2 id="关闭订单状态" tabindex="-1">关闭订单状态() <a class="header-anchor" href="#关闭订单状态">¶</a></h2><table><thead><tr><th>编码</th><th>类型</th></tr></thead><tbody><tr><td>progress</td><td>关闭中</td></tr><tr><td>success</td><td>关闭成功</td></tr><tr><td>fail</td><td>关闭失败</td></tr></tbody></table>',13),s=[h];function l(o,n,c,i,_,b){return e(),d("div",null,s)}const y=t(a,[["render",l]]);export{p as __pageData,y as default};
