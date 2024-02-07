import{_ as s,c as a,o as n,V as i}from"./chunks/framework.OTU5OxHT.js";const g=JSON.parse('{"title":"签名规则","description":"","frontmatter":{},"headers":[],"relativePath":"daxpay/gateway/overview/签名规则.md","filePath":"daxpay/gateway/overview/签名规则.md","lastUpdated":1707230612000}'),p={name:"daxpay/gateway/overview/签名规则.md"},l=i(`<h1 id="签名规则" tabindex="-1">签名规则 <a class="header-anchor" href="#签名规则">¶</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明">¶</a></h2><p>将发送或者接收到的所有数据假定位为集合M，将集合内非空的参数值按照参数名<code>ASCII码</code>从小到大排序，使用URL请求键值对参数方式进行拼接成字符串，类似<code>key1=value1&amp;key2=value2</code>这样的格式。需要注意如下原则：</p><ul><li>参数名ASCII码从小到大排序（字典序）</li><li>如果参数值为空不进行签名</li><li>参数名不区分大小写</li><li>进行验签时，<code>sign</code>字段不参与签名，将生成的签名与该<code>sign</code>值作校验</li></ul><p>将上面生成的参数后追加上 <code>sign=秘钥</code>（追加后格式为 <code>key1=value1&amp;key2=value2&amp;key=秘钥</code>），然后将该字符串转换为大写，然后进行数据摘要算法计算出 <code>sign</code>值，并将<code>sign</code>值添加到请求中进行发送。</p><blockquote><p>数据摘要支持<code>MD5</code>和<code>HmacSHA256</code>两种，使用<code>HmacSHA256</code>时，key值为秘钥</p></blockquote><h2 id="java样例" tabindex="-1">Java样例 <a class="header-anchor" href="#java样例">¶</a></h2><div class="language-jave vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jave</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>package cn.bootx.platform.daxpay.sdk.util;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import cn.bootx.platform.daxpay.sdk.code.PayChannelEnum;</span></span>
<span class="line"><span>import cn.bootx.platform.daxpay.sdk.code.PayWayEnum;</span></span>
<span class="line"><span>import cn.bootx.platform.daxpay.sdk.param.pay.PayChannelParam;</span></span>
<span class="line"><span>import cn.bootx.platform.daxpay.sdk.param.pay.PayParam;</span></span>
<span class="line"><span>import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span>import org.junit.Test;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 参数签名测试类</span></span>
<span class="line"><span> * @author xxm</span></span>
<span class="line"><span> * @since 2024/2/7</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class PayParamSignTest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 签名测试</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    public void sign(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        PayParam param = new PayParam();</span></span>
<span class="line"><span>        param.setClientIp(&quot;127.0.0.1&quot;);</span></span>
<span class="line"><span>        param.setNotNotify(true);</span></span>
<span class="line"><span>        param.setNotReturn(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        param.setBusinessNo(&quot;P0001&quot;);</span></span>
<span class="line"><span>        param.setTitle(&quot;测试接口支付&quot;);</span></span>
<span class="line"><span>        PayChannelParam payChannelParam = new PayChannelParam();</span></span>
<span class="line"><span>        payChannelParam.setChannel(PayChannelEnum.WECHAT.getCode());</span></span>
<span class="line"><span>        payChannelParam.setWay(PayWayEnum.QRCODE.getCode());</span></span>
<span class="line"><span>        payChannelParam.setAmount(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        List&lt;PayChannelParam&gt; payChannels = Collections.singletonList(payChannelParam);</span></span>
<span class="line"><span>        param.setPayChannels(payChannels);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Map&lt;String, String&gt; map = PaySignUtil.toMap(param);</span></span>
<span class="line"><span>        log.info(&quot;转换为有序MAP后的内容: {}&quot;,map);</span></span>
<span class="line"><span>        String data = PaySignUtil.createLinkString(map);</span></span>
<span class="line"><span>        log.info(&quot;将MAP拼接字符串: {}&quot;,data);</span></span>
<span class="line"><span>        String sign = &quot;123456&quot;;</span></span>
<span class="line"><span>        data += &quot;&amp;sign=&quot;+sign;</span></span>
<span class="line"><span>        data = data.toUpperCase();</span></span>
<span class="line"><span>        log.info(&quot;添加秘钥并转换为大写的字符串: {}&quot;,data);</span></span>
<span class="line"><span>        log.info(&quot;MD5: {}&quot;,PaySignUtil.md5(data));</span></span>
<span class="line"><span>        log.info(&quot;HmacSHA256: {}&quot;,PaySignUtil.hmacSha256(data,sign));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>输出:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">转换为有序MAP后的内容:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {businessNo=P0001, clientIp=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1, notNotify=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, notReturn=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, payChannels=[{&quot;amount&quot;:&quot;1&quot;,&quot;channel&quot;:&quot;wechat_pay&quot;,&quot;way&quot;:&quot;qrcode&quot;}], title=测试接口支付, version=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">将MAP拼接字符串:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> businessNo=P0001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;clientIp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;notNotify</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;notReturn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;payChannels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[{&quot;amount&quot;:&quot;1&quot;,&quot;channel&quot;:&quot;wechat_pay&quot;,&quot;way&quot;:&quot;qrcode&quot;}]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">测试接口支付</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">添加秘钥并转换为大写的字符串:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BUSINESSNO=P0001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;CLIENTIP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;NOTNOTIFY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TRUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;NOTRETURN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TRUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;PAYCHANNELS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[{&quot;AMOUNT&quot;:&quot;1&quot;,&quot;CHANNEL&quot;:&quot;WECHAT_PAY&quot;,&quot;WAY&quot;:&quot;QRCODE&quot;}]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;TITLE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">测试接口支付</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;SIGN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MD5:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 74</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">b0b5b9c86ecf7910f0692fe70c3434</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HmacSHA256:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffbcafb707e589377dbe06eb516ccac99947a326cab1a2426a37c18dfa641e15</span></span></code></pre></div>`,10),t=[l];function e(h,k,o,c,r,d){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{g as __pageData,u as default};
