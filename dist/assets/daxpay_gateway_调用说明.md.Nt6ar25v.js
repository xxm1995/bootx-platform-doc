import{_ as t,c as d,o as r,V as e}from"./chunks/framework.TiLr8DIm.js";const p=JSON.parse('{"title":"调用说明","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/gateway/调用说明.md","filePath":"daxpay/gateway/调用说明.md","lastUpdated":1707145471000}'),a={name:"daxpay/gateway/调用说明.md"},h=e('<h1 id="调用说明" tabindex="-1">调用说明 <a class="header-anchor" href="#调用说明">¶</a></h1><h2 id="请求规范" tabindex="-1">请求规范 <a class="header-anchor" href="#请求规范">¶</a></h2><h3 id="请求发起要求" tabindex="-1">请求发起要求 <a class="header-anchor" href="#请求发起要求">¶</a></h3><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>传输方式</td><td>采用<code>HTTP</code>/<code>HTTPS</code>传输</td></tr><tr><td>提交方式</td><td><code>POST</code></td></tr><tr><td>参数类型</td><td><code>application/json</code></td></tr><tr><td>响应类型</td><td><code>application/json</code></td></tr><tr><td>字符编码</td><td><code>UTF-8</code></td></tr><tr><td>签名算法</td><td><code>MD5</code>/<code>HMAC_SHA256</code></td></tr></tbody></table><h3 id="参数规范注意事项" tabindex="-1">参数规范注意事项 <a class="header-anchor" href="#参数规范注意事项">¶</a></h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>交易金额</td><td>单位为分，参数值不能带小数。</td></tr><tr><td>时间参数</td><td>所有涉及时间参数均使用精确到毫秒的13位数值</td></tr></tbody></table><h2 id="公共请求参数" tabindex="-1">公共请求参数 <a class="header-anchor" href="#公共请求参数">¶</a></h2><table><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>用户IP</td><td>clientIp</td><td>否</td><td>string</td><td>127.0.0.1</td><td>支持V4和V6，部分支付方式要求必填，如调用微信支付方式时，推荐传输次值</td></tr><tr><td>商户扩展参数</td><td>attach</td><td>否</td><td>string</td><td>id=123332</td><td>商户扩展参数，回调时会原样返回</td></tr><tr><td>请求时间</td><td>reqTime</td><td>是</td><td>long</td><td>123123121</td><td>使用时间戳(秒级)</td></tr><tr><td>版本号</td><td>version</td><td>是</td><td>string</td><td>1.0</td><td>默认为1.0</td></tr><tr><td>不启用同步请求</td><td>notReturn</td><td>否</td><td>bool</td><td>true</td><td>是否不进行同步通知的跳转，为<code>true</code>将不进行回调通知</td></tr><tr><td>同步请求地址</td><td>returnUrl</td><td>否</td><td>string</td><td><a href="http://abc.cn/returnCallback" target="_blank" rel="noreferrer">http://abc.cn/returnCallback</a></td><td>支付完成后，会自动跳转到设置的页面</td></tr><tr><td>不启用异步通知</td><td>notNotify</td><td>否</td><td>bool</td><td>true</td><td>是否不启用异步通知，为<code>true</code>将不会发送回调通知</td></tr><tr><td>异步通知地址</td><td>notifyUrl</td><td>否</td><td>string</td><td><a href="http://abc.cn/noticeCallback" target="_blank" rel="noreferrer">http://abc.cn/noticeCallback</a></td><td>异步通知地址，为空则读取管理端的配置，如果通知方式配置的是消息队列方式，此配置不会生效</td></tr><tr><td>签名值</td><td>sign</td><td>否</td><td>string</td><td>072695d112892e382a7093b81e6a52af</td><td>如果在后台系统重开启验签选项后必填</td></tr></tbody></table><h2 id="公共响应参数" tabindex="-1">公共响应参数 <a class="header-anchor" href="#公共响应参数">¶</a></h2><table><thead><tr><th>名称<img width="70/"></th><th>字段</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>状态码</td><td>code</td><td>int</td><td>0</td><td>默认是0，非零标表明请求失败</td></tr><tr><td>提示信息</td><td>msg</td><td>string</td><td></td><td>如果code不为0，则显示具体错误原因，例如：签名失败、参数格式校验错误</td></tr><tr><td>业务响应参数数据</td><td>data</td><td>json</td><td></td><td>json格式数据，不同的接口返回结构不同</td></tr><tr><td>签名信息</td><td>sign</td><td>string</td><td></td><td>对data内的数据进行签名，如data为空则不返回，需要在通道应用中开启返回数据签名选项, <strong>目前尚不支持</strong></td></tr><tr><td>追踪ID</td><td>traceId</td><td>string</td><td>236d3gf3765yi32</td><td>返回本次请求的链路ID, 方便进行错误的排查</td></tr></tbody></table>',10),o=[h];function c(n,i,s,l,b,_){return r(),d("div",null,o)}const f=t(a,[["render",c]]);export{p as __pageData,f as default};
