import{_ as s,o as a,c as n,X as l}from"./chunks/framework.6909765d.js";const C=JSON.parse('{"title":"数据权限配置","description":"","frontmatter":{},"headers":[],"relativePath":"platform/server/starter/数据权限.md","filePath":"platform/server/starter/数据权限.md"}'),p={name:"platform/server/starter/数据权限.md"},o=l(`<h1 id="数据权限配置" tabindex="-1">数据权限配置 <a class="header-anchor" href="#数据权限配置">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更详细的内容可以查看 <a href="/platform/server/service/iam/权限体系.html">身份识别与访问管理</a> 下的具体模块，有更详细的说明。</p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能">¶</a></h2><ul><li>数据字段字段加密解密，在数据库中存储AES加密后的内容，预防信息被脱裤后导致信息泄露</li><li>返回数据信息敏感信息脱敏，后端信息返回给前端时，对一些敏感信息进行脱敏，如密码、秘钥等，防止保密信息被流出，可以结合数据字段加密一起使用</li><li>数据范围权限控制，通过在线配置，实现不同的用户可以查询到不同范围的数据，更好的实现数据分级管理</li><li>查询字段权限控制，通过对字段配置权限码，可以实现不同的用户查询到不同的数据字段，更好的实现数据分级管理</li></ul><h2 id="字段加密解密" tabindex="-1">字段加密解密 <a class="header-anchor" href="#字段加密解密">¶</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>只有通过通过MyBatis-Plus对整个对象进行保存或更新时才生效，通过Wrapper进行局部更新时会导致字段加密失败，需要手动进行加密。 解密时映射对象类需要是字段加<code>EncryptionField</code>的类，否则无法识别到哪个字段是要进行解密的。 目前支持String类型的字段进行加解密</p></div><h3 id="注解配置" tabindex="-1">注解配置 <a class="header-anchor" href="#注解配置">¶</a></h3><p>在数据库表对应的类需要加密的字段，加上<code>EncryptionField</code>注解，该字段在进行保存或更新时自动对该字段进行加密，在读取的时候，进行解密</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Accessors</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">chain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">TableName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pc_alipay_config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AlipayConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** 私钥 字段进行加密保存 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EncryptionField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> privateKey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** 应用公钥证书 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">BigField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EncryptionField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> appCert</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** 支付宝公钥证书 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">BigField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EncryptionField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> alipayCert</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** 支付宝CA根证书 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">BigField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EncryptionField</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> alipayRootCert</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="手动加解密" tabindex="-1">手动加解密 <a class="header-anchor" href="#手动加解密">¶</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 加密</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">encryptValue</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> fieldValue</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fieldValue </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// fieldDecryptKey AES秘钥, </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AES</span><span style="color:#A6ACCD;"> aes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SecureUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">aes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fieldDecryptKey</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBytes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">StandardCharsets</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UTF_8</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> aes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encryptBase64</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> fieldValue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> fieldValue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 解密</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">decryptValue</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> fieldValue</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fieldValue </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">AES</span><span style="color:#A6ACCD;"> aes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SecureUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">aes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fieldDecryptKey</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBytes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">StandardCharsets</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UTF_8</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">aes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decrypt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Base64</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">fieldValue</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;">StandardCharsets</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UTF_8</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> fieldValue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>相关配置</strong></p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">bootx.starter.data-perm</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 字段加密AES秘钥，需要符合AES格式</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">field-decrypt-key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">秘钥</span></span></code></pre></div><h2 id="敏感数据脱敏" tabindex="-1">敏感数据脱敏 <a class="header-anchor" href="#敏感数据脱敏">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对应前端使用方法见 <a href="/platform/front/vue3/自定义Hooks.html#useformedit表单编辑">数据脱敏(Vue3)</a></p><p>返回值序列化方式要为Jackson，否则会不生效。目前支持String类型的字段进行脱敏 在要返回给前端对象类中的字段上，添加上<code>SensitiveInfo</code>注解，在数据返回前端时，字段根据设定的规则，对字段值进行脱敏</p></div><h3 id="encryptionfield参数" tabindex="-1"><code>EncryptionField</code>参数 <a class="header-anchor" href="#encryptionfield参数">¶</a></h3><ul><li><code>value</code> 敏感信息类型，参数为<code>SensitiveType</code>敏感信息脱敏类型枚举，具体类型如下 <ul><li><code>CHINESE_NAME</code> 中文名，只显示第一个汉字，其他隐藏为2个星号，比如：李**</li><li><code>USER_ID</code> 用户ID，userId 统一替换为 0L，</li><li><code>PASSWORD</code> 密码，密码的全部字符都用*代替，比如：<code>******</code></li><li><code>ID_CARD</code> 身份证号，只显示前六位和后两位，如<code>370112**********1X</code></li><li><code>FIXED_PHONE</code> 座机号，显示前四位，后两位</li><li><code>MOBILE_PHONE</code> 手机号，前三位，后4位，其他隐藏，<code>比如135****2210</code></li><li><code>IP</code> IP地址，只显示前两段ip，<code>如192.168.*.*</code></li><li><code>ADDRESS</code> 地址，只显示到地区(前6位)，不显示详细地址，比如：<code>北京市海淀区****</code></li><li><code>EMAIL</code> 电子邮件地址，邮箱前缀仅显示第一个字母，前缀其他隐藏，用星号代替，@及后面的地址显示，比如：<code>d**@foxmail.com</code></li><li><code>BANK_CARD</code> 中国大陆车牌，车牌中间用*代替，如<code>鲁A8***0</code></li><li><code>BANK_CARD</code> 银行卡，卡号脱敏 : <code>1101 **** **** **** 3256</code></li><li><code>CNAPS_CODE</code> 公司开户银行联号，中间用*号代替</li><li><code>OTHER</code> 其他，通过<code>front</code>和<code>end</code>属性来决定保留前面或后面几个字符正常显示</li></ul></li><li><code>front</code> 保留：前面的front位数；从1开始，敏感类型为其他时可用</li><li><code>end</code> 保留：后面的end位数；从1开始，敏感类型为其他时可用</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例">¶</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Accessors</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">chain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Schema</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">用户信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserInfoDto</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Serializable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Schema</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">名称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Schema</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">密码</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">SensitiveInfo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SensitiveType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PASSWORD</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> password</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Schema</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">手机号</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">SensitiveInfo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SensitiveType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MOBILE_PHONE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> phone</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Schema</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">邮箱</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">SensitiveInfo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SensitiveType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">EMAIL</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> email</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="数据范围权限" tabindex="-1">数据范围权限 <a class="header-anchor" href="#数据范围权限">¶</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>一个用户只能分配一种数据权限，不支持拥有多种，如果用户未被分配数据权限，默认是<code>SELF</code>级别，只能查看自己的数据。在查询、更新、删除操作的时候可以应用数据范围权限， 如果是多表联查时，会以主表为准。如果未被MybatisPlus管理的表(有对应的数据实体类，并被MybatisPlus扫描到)和表中无权限字段或，会自动停用数据权限，防止出现SQL报错。</p></div><h3 id="类型说明" tabindex="-1">类型说明 <a class="header-anchor" href="#类型说明">¶</a></h3><ul><li><code>SELF</code> 只能查看自己的数据</li><li><code>USER_SCOPE</code> 可以查看指定用户的数据</li><li><code>DEPT_SCOPE</code> 可以查看指定部门的数据</li><li><code>DEPT_AND_USER_SCOPE</code> 可以查看指定部门和指定用户的数据</li><li><code>ALL_SCOPE</code> 可以查询全部数据</li><li><code>BELONG_DEPT</code> 只能查看自己部门人员的数据</li><li><code>BELONG_DEPT_AND_SUB</code> 可以查看自己部门及下级部门的数据</li></ul><h3 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明">¶</a></h3><p>在要进行用户数据范围权限控制的方法上添加 <code>Permission</code> 注解，该方法以及调用的子方法都将进行数据范围权限拦截，如果被嵌套的某些子方法不需要进行权限控制， 可以添加 <code>NestedPermission</code> 注解到方法或类上上来排除权限控制。</p><blockquote><p>可以添加到类或者方法上，添加到类时对当前类所有方法生效，如果类和方法中都进行了添加，以方法上的为准。 放到<strong>数据实体类</strong>上时，如果<code>dataScope</code>或<code>selectField</code>值为<code>false</code>，将会在任何权限查询的时候停用权限控制，如果设置为<code>true</code>值无任何效果</p></blockquote><p><strong>@Permission</strong></p><table><thead><tr><th>参数</th><th>功能</th><th>备注</th></tr></thead><tbody><tr><td>dataScope</td><td>数据范围权限</td><td>默认为<code>true</code></td></tr><tr><td>selectField</td><td>查询字段权限</td><td>默认为<code>true</code></td></tr></tbody></table><p><strong>@NestedPermission</strong></p><blockquote><p>只会在<code>@Permission</code>嵌套的方法内生效，该方法需要被Spring代理到，否则不生效</p></blockquote><table><thead><tr><th>参数</th><th>功能</th><th>备注</th></tr></thead><tbody><tr><td>dataScope</td><td>数据范围权限</td><td>默认为<code>false</code></td></tr><tr><td>selectField</td><td>查询字段权限</td><td>默认为<code>false</code></td></tr></tbody></table><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1">¶</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 数据权限演示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#F78C6C;font-style:italic;">@author</span><span style="color:#676E95;font-style:italic;"> xxm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * @date 2022/2/21</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Slf4j</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Service</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Permission</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DataPermDemoService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DataPermDemoManager</span><span style="color:#A6ACCD;"> dataPermDemoManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Permission</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PageResult</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">DataPermDemo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">page</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">PageParam</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">pageParam</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> MpUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">convert2PageResult</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">page</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pageParam</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 获取 单条</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DataPermDemo</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findById</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">orElseThrow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataNotExistException</span><span style="color:#89DDFF;font-style:italic;">::new</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 更新</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">DataPermDemo</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">param</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">DataPermDemo</span><span style="color:#A6ACCD;"> dataPermDemo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getId</span><span style="color:#89DDFF;">()).</span><span style="color:#82AAFF;">orElseThrow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataNotExistException</span><span style="color:#89DDFF;font-style:italic;">::new</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        BeanUtil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copyProperties</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dataPermDemo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CopyOptions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">ignoreNullValue</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">updateById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dataPermDemo</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 删除</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">orElseThrow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DataNotExistException</span><span style="color:#89DDFF;font-style:italic;">::new</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        dataPermDemoManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteById</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="查询字段权限" tabindex="-1">查询字段权限 <a class="header-anchor" href="#查询字段权限">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通过结合<code>@PermCode</code>注解实现，将<code>@PermCode</code>注解加到数据库实体类或对应的字段上，在进行SQL查询时，会自动将没有权限的字段去掉，只查询拥有权限的字段。 启用和嵌套子方法使用方式同<code>数据范围权限</code>类似，需要在标注<code>@Permission</code>注解方法或子方法中才会生效。</p></div><h3 id="使用说明-1" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明-1">¶</a></h3><p><code>@PermCode</code>注解可以放在数据实体类类上或字段上，放在字段上时，会对该字段启用查询字段权限，权限码可以配置多个，用户拥有任意一个就可， 放在类上时相当于所有字段都标注了该权限码。类和字段上同时都标注了该注解，相当于该字段拥有这两个注解的权限码合集。</p><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2">¶</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DataPermDemo</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MpBaseEntity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PermCode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PermCode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> creatorName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PermCode</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> remark</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,39),e=[o];function t(c,r,D,y,i,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
