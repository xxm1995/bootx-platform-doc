import{_ as a,c as e,o as i,a8 as l}from"./chunks/framework.riYNsadV.js";const r="/assets/3.Na704d2m.png",h="/assets/4.CDvGpcBD.png",b=JSON.parse('{"title":"安全体系设计","description":"","frontmatter":{},"headers":[],"relativePath":"platform/safety/体系设计.md","filePath":"platform/safety/体系设计.md","lastUpdated":1692782764000}'),t={name:"platform/safety/体系设计.md"},s=l('<h1 id="安全体系设计" tabindex="-1">安全体系设计 <a class="header-anchor" href="#安全体系设计">¶</a></h1><h2 id="安全策略" tabindex="-1">安全策略 <a class="header-anchor" href="#安全策略">¶</a></h2><h3 id="密码安全策略" tabindex="-1">密码安全策略 <a class="header-anchor" href="#密码安全策略">¶</a></h3><p>⽬前没有⼀个标准的密码策略，但是根据<a href="http://www.owasp.org/" target="_blank" rel="noreferrer">OWASP</a>推荐的⼀些最佳实践，我们可以对密码策略稍作总结。</p><p>密码安全策略主要解决系统登录密码相关的问题，项⽬可以使用密码安全策略的功能，灵活快速的配置，通过以上的各种配置，可以解决⼤部分对密码要求的场景， 项⽬可以基于实际情况进⾏配置处理。系统对密码的基本要求，主要包含以下⼏个方面：</p><ul><li>默认密码的处理策略：是使用随机密码还是使用固定的密码；</li><li>密码更新策略：密码的更新频率与密码到期提示；</li><li>密码格式策略：密码的长度、密码的字符使用限制等配置，可根据系统所需⾃⾏定义；</li><li>密码操作策略：是否能使用近期使用过的密码、是否能与登录名相同、更改密码是是否需要验证码 验证等策略。</li></ul><p>密码长度方面：</p><ul><li>普通应用要求长度为6位以上；</li><li>重要应用要求长度为8位以上。</li></ul><p>密码复杂度方面：</p><ul><li>密码区分⼤⼩写字⺟；</li><li>密码为⼤写字⺟、⼩写字⺟、数字、特殊符号中两种以上的组合；</li><li>不要有连续性的字符，比如1234abcd，这种字符顺着⼈的思路，所以很容易猜解；</li><li>尽量避免出现重复字符，比如1111。 :::</li></ul><p>除了OWASP推荐的策略外，还需要注意，不要使用用户的公开数据，或者是与个⼈隐私相关的数据作为密码。比如不要使用QQ号、身份证号码、昵称、电话号码、⽣⽇、英⽂名、公司名等作为密码， 这些资料往往可以从互联⽹上获得，并不是那么保密。</p><h3 id="登录安全策略" tabindex="-1">登录安全策略 <a class="header-anchor" href="#登录安全策略">¶</a></h3><p>登录安全策略主要解决用户登录相关的问题，可以决定系统在用户登录时的各个场景下所做出的反应， 可以更灵活的保障系统与用户交互时的安全，主要包含以下⼏个方面:</p><ul><li>登录次数限制与措施：系统会限制用户登录错误次数，并在登录密码错误时加⼊验证码限制，在登 录错误次数达到最⼤限制时进⾏账号锁定；</li><li>多因素校验：系统在用户登录后，可通过⼿机号/邮箱进⼀步对用户进⾏验证，使用多因素对⽅式来 保障系统安全；</li><li>访问令牌限制：系统在用户登录成功后会发放⼀个访问令牌，在这⾥可以对访问令牌的有效时间进 ⾏限制，保障不存在永久性的令牌；</li><li>其他：强制修改处理密码可以保证用户进⼊系统后改变初始密码，防⽌在固定密码的情况下被别有 用⼼的操作者使用默认密码试探访问系统；还有多端登录控制、修改密码后重新登录等控制，保证 系统登录的安全性。</li></ul><p>登录安全策略可对系统登录相关的功能进⾏控制与指导，例如，控制用户登录时密码最⼤的错误次数， 当超过该次数时，则会将用户账号进⾏冻结，防⽌⾮法用户暴⼒破解系统用户密码; ⼜例如，控制用户账户只能在单处登录，当在多处登录时，提示账号登录异常：</p><h3 id="黑白名单" tabindex="-1">黑白名单 <a class="header-anchor" href="#黑白名单">¶</a></h3><p>可以配置租户级的⿊⽩名单，限制访问系统的能⼒。⿊⽩名单使用流程图： <img src="'+r+'" alt="img.png" loading="lazy"></p><h3 id="密码防重放" tabindex="-1">密码防重放 <a class="header-anchor" href="#密码防重放">¶</a></h3><p>在密码加密传输的场景下，防⽌相同的加密密码重复认证。 <img src="'+h+'" alt="img.png" loading="lazy"></p><h3 id="密码加密传输" tabindex="-1">密码加密传输 <a class="header-anchor" href="#密码加密传输">¶</a></h3><h3 id="账号加密传输" tabindex="-1">账号加密传输 <a class="header-anchor" href="#账号加密传输">¶</a></h3><h3 id="在线用户" tabindex="-1">在线用户 <a class="header-anchor" href="#在线用户">¶</a></h3><h3 id="用户登录日志" tabindex="-1">用户登录⽇志 <a class="header-anchor" href="#用户登录日志">¶</a></h3><h3 id="用户操作日志" tabindex="-1">用户操作日志 <a class="header-anchor" href="#用户操作日志">¶</a></h3>',24),d=[s];function n(c,o,p,_,f,m){return i(),e("div",null,d)}const g=a(t,[["render",n]]);export{b as __pageData,g as default};
