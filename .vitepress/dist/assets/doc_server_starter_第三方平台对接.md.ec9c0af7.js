import{_ as e,c as a,o,a as c}from"./app.206820c1.js";const v='{"title":"\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FAE\u4FE1\uFF08\u516C\u4F17\u5E73\u53F0\uFF09","slug":"\u5FAE\u4FE1\uFF08\u516C\u4F17\u5E73\u53F0\uFF09"},{"level":3,"title":"\u6D88\u606F\u6A21\u677F","slug":"\u6D88\u606F\u6A21\u677F"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u83DC\u5355","slug":"\u81EA\u5B9A\u4E49\u83DC\u5355"},{"level":3,"title":"\u7D20\u6750\u7BA1\u7406","slug":"\u7D20\u6750\u7BA1\u7406"},{"level":3,"title":"\u540E\u53F0\u63A5\u5165","slug":"\u540E\u53F0\u63A5\u5165"},{"level":3,"title":"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55","slug":"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55"},{"level":3,"title":"\u6D88\u606F\u4E8B\u4EF6\u5904\u7406","slug":"\u6D88\u606F\u4E8B\u4EF6\u5904\u7406"},{"level":2,"title":"\u4F01\u4E1A\u5FAE\u4FE1","slug":"\u4F01\u4E1A\u5FAE\u4FE1"},{"level":2,"title":"\u9489\u9489","slug":"\u9489\u9489"},{"level":3,"title":"DingAccessService","slug":"dingaccessservice"},{"level":3,"title":"DingMediaService","slug":"dingmediaservice"},{"level":3,"title":"\u6D88\u606F\u901A\u77E5","slug":"\u6D88\u606F\u901A\u77E5"}],"relativePath":"doc/server/starter/\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5.md"}',d={},t=c('<h1 id="\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5" tabindex="-1">\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728\u7CFB\u7EDF\u4E2D\u5206\u522B\u5BF9\u5E94\u7684\u662F<code>common-starter-dingtalk</code>\uFF08\u9489\u9489\u5BF9\u63A5\uFF09\u3001<code>common-starter-wechat</code>\uFF08\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u548C\u5F00\u653E\u5E73\u53F0\uFF09\u548C<code>common-starter-wecom</code>\uFF08\u4F01\u4E1A\u5FAE\u4FE1\uFF09\u4E09\u4E2A\u6A21\u5757</p></div><h2 id="\u5FAE\u4FE1\uFF08\u516C\u4F17\u5E73\u53F0\uFF09" tabindex="-1">\u5FAE\u4FE1\uFF08\u516C\u4F17\u5E73\u53F0\uFF09 <a class="header-anchor" href="#\u5FAE\u4FE1\uFF08\u516C\u4F17\u5E73\u53F0\uFF09" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528<code>WxJava</code>\u5DE5\u5177\u5305\u8FDB\u884C\u5F00\u53D1\uFF0C<code>WxJava</code>\u9879\u76EE\u5730\u5740\uFF1A<a href="https://github.com/Wechat-Group/WxJava" target="_blank" rel="noopener noreferrer">GITHUB</a>\u3001<a href="https://gitee.com/binary/weixin-java-tools" target="_blank" rel="noopener noreferrer">GITEE</a></p></blockquote><h3 id="\u6D88\u606F\u6A21\u677F" tabindex="-1">\u6D88\u606F\u6A21\u677F <a class="header-anchor" href="#\u6D88\u606F\u6A21\u677F" aria-hidden="true">#</a></h3><blockquote><p>\u540C\u6B65\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u5BF9\u5E94\u7684\u6A21\u677F\u6D88\u606F\u6A21\u677F\uFF0C\u8FDB\u884C\u67E5\u770B\u548C\u7BA1\u7406\uFF0C\u89C1<code>WeChatTemplateController</code>\u7C7B</p></blockquote><h3 id="\u81EA\u5B9A\u4E49\u83DC\u5355" tabindex="-1">\u81EA\u5B9A\u4E49\u83DC\u5355 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u83DC\u5355" aria-hidden="true">#</a></h3><blockquote><p>\u7BA1\u7406\u5FAE\u4FE1\u7684\u81EA\u5B9A\u4E49\u83DC\u5355\uFF0C\u53EF\u4EE5\u5BFC\u5165\u5FAE\u4FE1\u5E73\u53F0\u73B0\u6709\u83DC\u5355\u5230\u7CFB\u7EDF\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u83DC\u5355\u6A21\u677F\uFF0C\u652F\u6301\u914D\u7F6E\u83DC\u5355\u7684\u5404\u9879\u5C5E\u6027\u540E\u4FDD\u5B58\u4E3A\u8349\u7A3F\u6216\u53D1\u5E03\u3002\u89C1<code>WeChatMenuService</code>\u7C7B</p></blockquote><h3 id="\u7D20\u6750\u7BA1\u7406" tabindex="-1">\u7D20\u6750\u7BA1\u7406 <a class="header-anchor" href="#\u7D20\u6750\u7BA1\u7406" aria-hidden="true">#</a></h3><p>\u7BA1\u7406<code>\u8BED\u97F3</code>\u3001<code>\u89C6\u9891</code>\u3001<code>\u56FE\u7247</code>\u4E09\u7C7B\u8D44\u6E90\uFF0C\u89C1<code>WeChatMediaService</code>\u7C7B</p><h3 id="\u540E\u53F0\u63A5\u5165" tabindex="-1">\u540E\u53F0\u63A5\u5165 <a class="header-anchor" href="#\u540E\u53F0\u63A5\u5165" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u7BA1\u7406\u7CFB\u7EDF\u4E2D\uFF0C\u5C06\u7528\u6237\u6D88\u606F\u8BBE\u7F6E\u4E3A\u53D1\u9001\u5230\u6211\u4EEC\u6307\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u9879\u76EE\u4E2D\u63A5\u6536\u5FAE\u4FE1\u6D88\u606F\u7684\u63A5\u53E3\u5730\u5740\u662F\uFF1A<code>\u9879\u76EEip:\u7AEF\u53E3/wechat/portal</code>\u3002\u53EF\u4EE5\u67E5\u770B\u7CFB\u7EDF\u4E2D\u5BF9\u5E94\u7684\u4E0B\u5217\u7C7B\uFF1A</p><blockquote><p><code>WeChatPortalService</code> \u5FAE\u4FE1\u95E8\u6237\u5904\u7406 <code>WeChatMessageRouterConfiguration</code> \u5FAE\u4FE1\u4FE1\u606F\u8DEF\u7531\u914D\u7F6E\uFF0C\u5BF9\u4E0D\u540C\u7684\u6D88\u606F\u7C7B\u578B\u8FDB\u884C\u4E86\u7ED1\u5B9A\u5904\u7406\u670D\u52A1 <code>WxMpMessageHandler</code>\u7684\u4E00\u4F17\u5B9E\u73B0\u7C7B \u5982<code>WeChatMsgHandler</code>\u6587\u672C\u6D88\u606F\u5904\u7406\u3001<code>WeChatQrScanHandler</code>\u5FAE\u4FE1\u626B\u7801\u4E8B\u4EF6\u5904\u7406\u7B49 <code>WeChatMpMessageHandler</code> <code>WxMpMessageHandler</code>\u7684\u5B50\u63A5\u53E3\uFF0C\u7528\u6765\u652F\u6301\u81EA\u52A8\u5173\u8054\u4E0D\u540C\u7684\u6D88\u606F\u7C7B\u578B\u5904\u7406</p></blockquote><h3 id="\u5FAE\u4FE1\u626B\u7801\u767B\u5F55" tabindex="-1">\u5FAE\u4FE1\u626B\u7801\u767B\u5F55 <a class="header-anchor" href="#\u5FAE\u4FE1\u626B\u7801\u767B\u5F55" aria-hidden="true">#</a></h3><blockquote><p>\u9700\u8981\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8BBE\u7F6E\u4E3A\u5C06\u7528\u6237\u6D88\u606F\u8BBE\u7F6E\u4E3A\u53D1\u9001\u5230\u6211\u4EEC\u6307\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\u3002</p></blockquote><p>\u652F\u6301\u5FAE\u4FE1\u626B\u7801\u8FDB\u884C\u767B\u5F55\uFF0C\u901A\u8FC7<code>WeChatQrLoginController</code>\u8FDB\u884C\u63A5\u6536\uFF0C\u7ED3\u5408<code>WeChatQrScanHandler</code>\u626B\u7801\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u6765\u5B9E\u73B0\u7CFB\u7EDF\u7684\u767B\u5F55\uFF0C\u6574\u4F53\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u524D\u7AEF\u901A\u8FC7<code>/token/wechat/qr/applyQrCode</code>\u63A5\u53E3\u6765\u83B7\u53D6\u7528\u4E8E\u767B\u5F55\u7528QR\u7801\uFF0C\u5728\u9875\u9762\u4E0A\u8FDB\u884C\u5C55\u793A\u4F9B\u7528\u6237\u8FDB\u884C\u626B\u7801</li><li>\u540C\u65F6\u5F00\u542F\u8F6E\u8BAD\u4EFB\u52A1\uFF0C\u901A\u8FC7QR\u7801\u7684Key\u503C\uFF0C\u6765\u5224\u65AD\u662F\u5426\u626B\u7801\u6210\u529F\uFF0C\u4E5F\u53EF\u4EE5\u5EFA\u7ACB\u4E00\u4E2A<code>Websocket</code>\u8FDE\u63A5\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u4E3B\u52A8\u63A8\u9001\u626B\u7801\u4E8B\u4EF6\u7684\u72B6\u6001</li><li>\u7528\u6237\u626B\u7801\u540E\uFF0C\u5FAE\u4FE1\u516C\u5171\u5E73\u53F0\u4F1A\u63A8\u9001\u7ED9\u540E\u53F0\u670D\u52A1\u7AEF\u4E00\u6761\u6D88\u606F\uFF0C\u7CFB\u7EDF\u901A\u8FC7<code>WeChatQrScanHandler</code>\u5904\u7406\u5668\u63A5\u6536\u540E\uFF0C\u4F1A\u5C06\u8981\u8FDB\u884C\u767B\u5F55\u7528\u6237<code>OpenId</code>\u5199\u5165\u5230\u7F13\u5B58\u4E2D</li><li>\u524D\u7AEF\u83B7\u53D6\u5230\u767B\u9646\u6210\u529F\u7684\u72B6\u6001\u540E\uFF0C\u5C06QR\u7801\u4F5C\u4E3A<code>authCode</code>\u53C2\u6570\u5E76\u8C03\u7528\u767B\u5F55\u63A5\u53E3\u8FDB\u884C\u767B\u5F55</li><li>\u7CFB\u7EDF\u4F1A\u5206\u914D\u5230<code>WeChatLoginHandler</code>\u5FAE\u4FE1\u767B\u5F55\u5904\u7406\u5668\u8FDB\u884C\u5904\u7406\uFF0C\u901A\u8FC7\u63A5\u6536\u5230\u7684QR\u7801\uFF0C\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u5173\u8054\u7684\u5FAE\u4FE1<code>OpenId</code>\uFF0C\u7136\u540E\u901A\u8FC7<code>OpenId</code>\u83B7\u53D6\u5173\u8054\u7528\u6237\u751F\u6210Token\u8FD4\u56DE\u7ED9\u524D\u7AEF\uFF0C\u767B\u5F55\u5B8C\u6210</li></ol><h3 id="\u6D88\u606F\u4E8B\u4EF6\u5904\u7406" tabindex="-1">\u6D88\u606F\u4E8B\u4EF6\u5904\u7406 <a class="header-anchor" href="#\u6D88\u606F\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a></h3><blockquote><p>\u9700\u8981\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8BBE\u7F6E\u4E3A\u5C06\u7528\u6237\u6D88\u606F\u8BBE\u7F6E\u4E3A\u53D1\u9001\u5230\u6211\u4EEC\u6307\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\u3002</p></blockquote><p>\u5728\u5FAE\u4FE1\u7528\u6237\u548C\u516C\u4F17\u53F7\u4EA7\u751F\u4EA4\u4E92\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7528\u6237\u7684\u67D0\u4E9B\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5FAE\u4FE1\u670D\u52A1\u5668\u901A\u8FC7\u4E8B\u4EF6\u63A8\u9001\u7684\u5F62\u5F0F\u901A\u77E5\u5230\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u8005\u4E2D\u5FC3\u5904\u8BBE\u7F6E\u7684\u670D\u52A1\u5668\u5730\u5740\uFF0C\u4ECE\u800C\u5F00\u53D1\u8005\u53EF\u4EE5\u83B7\u53D6\u5230\u8BE5\u4FE1\u606F\u5E76\u8FDB\u8FDB\u884C\u5904\u7406\u3002 \u901A\u8FC7\u5B9E\u73B0<code>WeChatMpMessageHandler</code>\u63A5\u53E3\u5E76\u6CE8\u5165\u5230<code>Bean\u5BB9\u5668\u4E2D</code>\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8DDF\u76F8\u5173\u7C7B\u578B\u7684\u6D88\u606F\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u76F8\u5173\u7684\u7C7B\u89C1\u4E0A\u65B9<a href="#%E5%90%8E%E5%8F%B0%E6%8E%A5%E5%85%A5">\u540E\u53F0\u63A5\u5165</a></p><h2 id="\u4F01\u4E1A\u5FAE\u4FE1" tabindex="-1">\u4F01\u4E1A\u5FAE\u4FE1 <a class="header-anchor" href="#\u4F01\u4E1A\u5FAE\u4FE1" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E3B\u8981\u662F\u4F7F\u7528<code>WxJava</code>\u5DE5\u5177\u5305\u5BF9\u63A5\u4F01\u4E1A\u5FAE\u4FE1\u7684\u6D88\u606F\u53D1\u9001\u80FD\u529B\uFF0C\u5206\u4E3A\u673A\u5668\u4EBA\u901A\u77E5\u548C\u5DE5\u4F5C\u901A\u77E5\uFF0C\u89C1<a href="./../service/\u901A\u77E5\u670D\u52A1.html">\u901A\u77E5\u670D\u52A1</a></p></div><h2 id="\u9489\u9489" tabindex="-1">\u9489\u9489 <a class="header-anchor" href="#\u9489\u9489" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E3B\u8981\u662F\u5BF9\u9489\u9489\u8BBF\u95EE\u51ED\u8BC1\u548C\u6D88\u606F\u53D1\u9001\u80FD\u529B\u8FDB\u884C\u4E86\u5BF9\u63A5\uFF0C\u5BF9\u63A5\u65B9\u5F0F\u4E3A\u76F4\u63A5\u8C03\u7528\u9489\u9489\u5F00\u653E\u5E73\u53F0\u5B98\u65B9\u7684<code>Rest</code>\u63A5\u53E3\uFF0C\u9489\u9489\u5F00\u653E\u5E73\u53F0\uFF1A<a href="https://open.dingtalk.com/document/" target="_blank" rel="noopener noreferrer">\u6587\u6863\u5730\u5740</a></p></div><h3 id="dingaccessservice" tabindex="-1">DingAccessService <a class="header-anchor" href="#dingaccessservice" aria-hidden="true">#</a></h3><blockquote><p>\u9489\u9489\u8BBF\u95EE\u51ED\u8BC1\u670D\u52A1\uFF0C\u7528\u6765\u83B7\u53D6\u4F01\u4E1A\u5185\u90E8\u5E94\u7528\u7684<code>access_token</code>\uFF0C\u8C03\u7528\u9489\u9489\u5404\u79CD\u80FD\u529B\u4E4B\u524D\uFF0C\u90FD\u9700\u8981\u5148\u83B7\u53D6\u5230<code>access_token</code>\u3002</p></blockquote><h3 id="dingmediaservice" tabindex="-1">DingMediaService <a class="header-anchor" href="#dingmediaservice" aria-hidden="true">#</a></h3><blockquote><p>\u9489\u9489\u5A92\u4F53\u6587\u4EF6\u7BA1\u7406\uFF0C\u4E3B\u8981\u7528\u6765\u53D1\u9001\u5E26\u6709\u5A92\u4F53\u6216\u6587\u4EF6\u7684\u6D88\u606F\u65F6\uFF0C\u4E0A\u4F20\u5BF9\u5E94\u7684\u6587\u4EF6\u83B7\u53D6\u5B83\u7684\u5A92\u4F53ID\uFF08\u53D1\u9001\u5A92\u4F53\u6D88\u606F\u53C2\u6570\u9700\u8981\u4F20\u5A92\u4F53ID\uFF09\uFF0C\u6CE8\u610F\uFF1A\u53D1\u73B0\u9489\u9489\u5A92\u4F53id\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21, \u548C\u6587\u6863\u63CF\u8FF0\u4E0D\u4E00\u81F4\uFF0C\u4E0D\u786E\u5B9A\u73B0\u5728\u6709\u6CA1\u6709\u4FEE\u590D\u3002</p></blockquote><h3 id="\u6D88\u606F\u901A\u77E5" tabindex="-1">\u6D88\u606F\u901A\u77E5 <a class="header-anchor" href="#\u6D88\u606F\u901A\u77E5" aria-hidden="true">#</a></h3><blockquote><p>\u5206\u4E3A\u673A\u5668\u4EBA\u901A\u77E5\u548C\u5DE5\u4F5C\u901A\u77E5\uFF0C\u89C1<a href="./../service/\u901A\u77E5\u670D\u52A1.html">\u901A\u77E5\u670D\u52A1</a></p></blockquote>',30),r=[t];function i(l,s,h,n,p,u){return o(),a("div",null,r)}var g=e(d,[["render",i]]);export{v as __pageData,g as default};
