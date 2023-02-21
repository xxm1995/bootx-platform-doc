import{_ as n,c as a,o as e,a as s}from"./app.670118ea.js";const g='{"title":"\u9274\u6743\u6846\u67B6\u5C01\u88C5\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":2,"title":"TokenService\u767B\u5F55\u670D\u52A1","slug":"tokenservice\u767B\u5F55\u670D\u52A1"},{"level":2,"title":"\u6838\u5FC3\u63A5\u53E3\u8BF4\u660E","slug":"\u6838\u5FC3\u63A5\u53E3\u8BF4\u660E"},{"level":3,"title":"AbstractAuthentication","slug":"abstractauthentication"},{"level":3,"title":"GetAuthClientService","slug":"getauthclientservice"},{"level":3,"title":"GetAuthLoginTypeService","slug":"getauthlogintypeservice"},{"level":3,"title":"OpenIdAuthentication","slug":"openidauthentication"},{"level":3,"title":"RouterCheck","slug":"routercheck"},{"level":3,"title":"UsernamePasswordAuthentication","slug":"usernamepasswordauthentication"},{"level":2,"title":"\u6CE8\u89E3\u548C\u5DE5\u5177\u7C7B","slug":"\u6CE8\u89E3\u548C\u5DE5\u5177\u7C7B"},{"level":3,"title":"@IgnoreAuth","slug":"ignoreauth"},{"level":3,"title":"@PermCode","slug":"permcode"},{"level":3,"title":"PasswordEncoder","slug":"passwordencoder"},{"level":3,"title":"SecurityUtil","slug":"securityutil"},{"level":2,"title":"\u7B2C\u4E09\u65B9\u767B\u5F55","slug":"\u7B2C\u4E09\u65B9\u767B\u5F55"},{"level":2,"title":"\u914D\u7F6E\u8BF4\u660E","slug":"\u914D\u7F6E\u8BF4\u660E"},{"level":2,"title":"\u6269\u5C55\u6216\u4FEE\u6539\u767B\u5F55\u65B9\u5F0F","slug":"\u6269\u5C55\u6216\u4FEE\u6539\u767B\u5F55\u65B9\u5F0F"},{"level":3,"title":"\u9ED8\u8BA4\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u5B9E\u73B0","slug":"\u9ED8\u8BA4\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u5B9E\u73B0"},{"level":3,"title":"\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u73B0","slug":"\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u73B0"},{"level":3,"title":"\u5176\u4ED6\u767B\u5F55\u5B9E\u73B0","slug":"\u5176\u4ED6\u767B\u5F55\u5B9E\u73B0"},{"level":3,"title":"\u8C03\u7528\u767B\u5F55","slug":"\u8C03\u7528\u767B\u5F55"},{"level":2,"title":"\u63A5\u53E3\u8BF7\u6C42\u6743\u9650\u63A7\u5236","slug":"\u63A5\u53E3\u8BF7\u6C42\u6743\u9650\u63A7\u5236"},{"level":3,"title":"\u4E0D\u9700\u8981\u767B\u5F55\u53EF\u8BBF\u95EE","slug":"\u4E0D\u9700\u8981\u767B\u5F55\u53EF\u8BBF\u95EE"},{"level":3,"title":"\u767B\u9646\u540E\u53EF\u8BBF\u95EE","slug":"\u767B\u9646\u540E\u53EF\u8BBF\u95EE"},{"level":3,"title":"\u6743\u9650\u63A7\u5236","slug":"\u6743\u9650\u63A7\u5236"},{"level":3,"title":"\u6743\u9650\u7801\u63A7\u5236\u6837\u4F8B","slug":"\u6743\u9650\u7801\u63A7\u5236\u6837\u4F8B"}],"relativePath":"doc/server/starter/\u767B\u5F55\u9274\u6743.md"}',t={},o=s(`<h1 id="\u9274\u6743\u6846\u67B6\u5C01\u88C5\u6A21\u5757" tabindex="-1">\u9274\u6743\u6846\u67B6\u5C01\u88C5\u6A21\u5757 <a class="header-anchor" href="#\u9274\u6743\u6846\u67B6\u5C01\u88C5\u6A21\u5757" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u4ECB\u7ECD</p><p>\u57FA\u4E8E<code>Sa-Token</code>\u548C<code>justAuth</code>\u8FDB\u884C\u5C01\u88C5\uFF0C\u672A\u9009\u62E9Spring Security\u539F\u56E0\u662F\u590D\u6742\u5EA6\u8F83\u9AD8\uFF0C\u4E14\u540C\u65F6\u5BF9\u5728\u524D\u540E\u7AEF\u5206\u79BB\u73AF\u5883\u4E0B\u652F\u6301\u4E00\u822C\u3002\u672A\u9009\u62E9<code>Shiro</code>\u662F\u56E0\u4E3A<code>Sa-Token</code>\u5DF2\u7ECF\u8DB3\u591F\u6210\u719F\uFF0C API\u5BF9\u4E2D\u5C0F\u9879\u76EE\u6765\u8BF4\u66F4\u52A0\u76F4\u89C2\u548C\u7B80\u5355\u6613\u7528\u3002\u6CE8\u610F\uFF1A\u7BA1\u7406\u5458\u7528\u6237\u62E5\u6709\u6700\u9AD8\u7684\u6743\u9650\uFF0C\u4E0D\u53D7\u6743\u9650\u63A7\u5236\uFF0C\u9ED8\u8BA4\u62E5\u6709\u6240\u6709\u6570\u636E\u548C\u63A5\u53E3\u7684\u6743\u9650\u3002</p><p>Sa-Token\u5B98\u7F51\uFF1A<a href="https://sa-token.cc/" target="_blank" rel="noopener noreferrer">https://sa-token.cc/</a></p><p>justAuth\u5B98\u7F51\uFF1A<a href="https://justauth.wiki/" target="_blank" rel="noopener noreferrer">https://justauth.wiki/</a></p></div><h2 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u63D0\u4F9B\u8D26\u53F7\u5BC6\u7801\u767B\u9646\u529F\u80FD</li><li>\u63D0\u4F9B\u7B2C\u4E09\u65B9\u767B\u5F55\u6269\u5C55</li><li>\u652F\u6301\u914D\u7F6E\u591A\u7AEF\u767B\u5F55</li><li>\u652F\u6301\u5FFD\u7565\u9274\u6743\u6CE8\u89E3<code>@IgnoreAuth</code>\u7684\u529F\u80FD\u652F\u6301</li><li>\u652F\u6301\u901A\u8FC7\u6743\u9650\u7801\u6765\u63A7\u5236\u63A5\u53E3\u662F\u5426\u53EF\u4EE5\u8BF7\u6C42</li><li>\u652F\u6301\u901A\u8FC7\u914D\u7F6E\u8BF7\u6C42\u8D44\u6E90\u4E0E\u89D2\u8272\u5173\u7CFB\u6765\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u8BF7\u6C42</li><li>\u63D0\u4F9B<code>PasswordEncoder</code>\u5BC6\u7801\u5DE5\u5177\u7C7B\u548C<code>SecurityUtil</code>\u5B89\u5168\u5DE5\u5177\u7C7B</li></ul><h2 id="tokenservice\u767B\u5F55\u670D\u52A1" tabindex="-1">TokenService\u767B\u5F55\u670D\u52A1 <a class="header-anchor" href="#tokenservice\u767B\u5F55\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u8BA4\u8BC1\u76F8\u5173\u670D\u52A1\u7684\u5C01\u88C5\u7C7B\uFF0C\u7528\u4E8E\u5904\u7406\u63A5\u6536\u5230\u7684\u7528\u6237\u767B\u5F55\u8BF7\u6C42\uFF0C\u5E76\u6839\u636E\u4F20\u8F93\u8FC7\u6765\u7684\u6570\u636E\u9009\u62E9\u5BF9\u5E94\u7684\u5904\u7406\u65B9\u5F0F\u3002\u5176\u4E2D<code>client</code>\u548C<code>loginType</code>\u53C2\u6570\u5FC5\u987B\u4F20\u8F93\uFF1A</p><h2 id="\u6838\u5FC3\u63A5\u53E3\u8BF4\u660E" tabindex="-1">\u6838\u5FC3\u63A5\u53E3\u8BF4\u660E <a class="header-anchor" href="#\u6838\u5FC3\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a></h2><h3 id="abstractauthentication" tabindex="-1">AbstractAuthentication <a class="header-anchor" href="#abstractauthentication" aria-hidden="true">#</a></h3><p>\u62BD\u8C61\u8BA4\u8BC1\u5668\uFF0C\u662F\u5404\u7C7B\u8BA4\u8BC1\u5668\u7684\u6839\u63A5\u53E3\uFF0C<code>UsernamePasswordAuthentication</code>\u548C<code>OpenIdAuthentication</code>\u90FD\u662F\u5B83\u7684\u5B50\u63A5\u53E3\uFF0C \u5982\u679C\u8981\u6269\u5C55\u65B0\u7684\u767B\u5F55\u65B9\u5F0F\uFF0C\u901A\u5E38\u662F\u5B9E\u73B0\u5B83\u6216\u8005\u4ED6\u7684\u5B50\u63A5\u53E3\u548C\u7EE7\u627F\u5B83\u7684\u5B9E\u73B0\u7C7B\u3002\u4F8B\u5982\u77ED\u4FE1\u767B\u5F55<code>PhoneLoginHandler</code>\u5C31\u662F\u5B9E\u73B0\u7684\u8FD9\u4E2A\u63A5\u53E3\u3002</p><h3 id="getauthclientservice" tabindex="-1">GetAuthClientService <a class="header-anchor" href="#getauthclientservice" aria-hidden="true">#</a></h3><p>\u7528\u6765\u83B7\u53D6\u8BA4\u8BC1\u7EC8\u7AEF\u7684\u63A5\u53E3\u58F0\u660E\uFF0C\u5728\u767B\u5F55\u5904\u7406\u65F6\uFF0C\u9700\u8981\u77E5\u9053\u5F53\u524D\u662F\u54EA\u7C7B\u7EC8\u7AEF\u8FDB\u884C\u7684\u767B\u5F55\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u63A5\u53E3\u5FC5\u987B\u8981\u88AB\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6CE8\u518C\u5230<code>Bean</code>\u5BB9\u5668\u4E2D\uFF0C\u5426\u5219\u65E0\u6CD5\u8FDB\u884C\u767B\u5F55\u6D41\u7A0B\uFF0C \u9879\u76EE\u4E5F\u65E0\u6CD5\u542F\u52A8\u3002\u76EE\u524D<code>IAM</code>\u6A21\u5757\u5DF2\u505A\u5B9E\u73B0\u3002</p><h3 id="getauthlogintypeservice" tabindex="-1">GetAuthLoginTypeService <a class="header-anchor" href="#getauthlogintypeservice" aria-hidden="true">#</a></h3><p>\u7528\u6765\u83B7\u53D6\u8BA4\u8BC1\u767B\u5F55\u65B9\u5F0F\u5BF9\u8C61\u7684\u58F0\u660E\uFF0C\u5728\u767B\u5F55\u5904\u7406\u65F6\uFF0C\u9700\u8981\u77E5\u9053\u5F53\u524D\u662F\u54EA\u79CD\u767B\u5F55\u65B9\u5F0F\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u63A5\u53E3\u5FC5\u987B\u8981\u88AB\u5B9E\u73B0\uFF0C\u5E76\u4E14\u6CE8\u518C\u5230<code>Bean</code>\u5BB9\u5668\u4E2D\uFF0C\u5426\u5219\u65E0\u6CD5\u8FDB\u884C\u767B\u5F55\u6D41\u7A0B\uFF0C \u9879\u76EE\u4E5F\u65E0\u6CD5\u542F\u52A8\u3002\u76EE\u524D<code>IAM</code>\u6A21\u5757\u5DF2\u505A\u5B9E\u73B0\u3002</p><h3 id="openidauthentication" tabindex="-1">OpenIdAuthentication <a class="header-anchor" href="#openidauthentication" aria-hidden="true">#</a></h3><p><code>AbstractAuthentication</code>\u63A5\u53E3\u7684\u4E00\u4E2A\u5B9E\u73B0\uFF0C\u4E3B\u8981\u7528\u5728\u5C01\u88C5\u7B2C\u4E09\u65B9\u767B\u5F55\u7684\u573A\u666F\uFF0C\u4F8B\u5982\u4F01\u4E1A\u5FAE\u4FE1\u3001\u9489\u9489\u3001QQ\u7B49\u65B9\u5F0F\u3002\u914D\u5408<code>ThirdLoginService</code>\u670D\u52A1\u7C7B\u53EF\u4EE5\u5FEB\u901F\u63A5\u5165\u65B0\u7684\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0C \u53EF\u4EE5\u53C2\u7167\u7CFB\u7EDF\u4E2D\u5DF2\u5B8C\u6210\u7684<code>DingTalkLoginHandler</code>\u3001<code>WeChatLoginHandler</code>\u3001<code>WeComLoginHandler</code>\u7B49\u5904\u7406\u7C7B\u3002</p><h3 id="routercheck" tabindex="-1">RouterCheck <a class="header-anchor" href="#routercheck" aria-hidden="true">#</a></h3><p>\u8DEF\u7531\u62E6\u622A\u68C0\u67E5\uFF0C\u63A5\u6536\u5230\u7528\u6237\u8BBF\u95EE\u7684\u8BF7\u6C42\u540E\uFF0C\u4F9D\u6B21\u901A\u8FC7\u5404\u5B9E\u73B0\u7C7B\u7684<code>check</code>\u65B9\u6CD5\u5224\u5B9A\u8FD4\u56DE\u7684<code>true</code>\u6216<code>false</code>\uFF0C\u6765\u63A7\u5236\u662F\u5426\u653E\u884C\u8BF7\u6C42\uFF0C\u76EE\u524D\u5DF2\u7ECF\u6709\u4E0B\u5217\u5B9E\u73B0\uFF1A</p><ul><li><code>IgnoreAdminUserRouterCheck</code> \u8D85\u7EA7\u7BA1\u7406\u5458\u8DF3\u8FC7\u5404\u79CD\u9650\u5236</li><li><code>IgnoreAnnotationRouterCheck</code> \u6CE8\u89E3\u65B9\u5F0F\u8FC7\u6EE4\u5224\u5B9A</li><li><code>IgnorePathRouterCheck</code> \u8DF3\u8FC7\u4E0D\u542F\u7528\u6743\u9650\u63A7\u5236\u7684\u8DEF\u5F84</li><li><code>UserPathRouterCheck</code> \u7528\u6237\u662F\u5426\u62E5\u6709\u8DEF\u5F84\u8BBF\u95EE\u65B9\u5F0F\u68C0\u67E5</li><li><code>PermCodeRouterCheck</code> \u6743\u9650\u7801\u65B9\u5F0F\u8BF7\u6C42\u8DEF\u5F84\u62E6\u622A</li></ul><h3 id="usernamepasswordauthentication" tabindex="-1">UsernamePasswordAuthentication <a class="header-anchor" href="#usernamepasswordauthentication" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5B9E\u73B0\u8BE5\u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u8BA4\u8BC1\u9274\u6743\u4E2D\u6700\u7ECF\u5178\u7684\u7528\u6237\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\uFF0C\u76EE\u524D\u7CFB\u7EDF\u4E2D<code>PasswordLoginHandler</code>\u7C7B\u5B9E\u73B0\u4E86\u8BE5\u63A5\u53E3\u3002</p><h2 id="\u6CE8\u89E3\u548C\u5DE5\u5177\u7C7B" tabindex="-1">\u6CE8\u89E3\u548C\u5DE5\u5177\u7C7B <a class="header-anchor" href="#\u6CE8\u89E3\u548C\u5DE5\u5177\u7C7B" aria-hidden="true">#</a></h2><h3 id="ignoreauth" tabindex="-1">@IgnoreAuth <a class="header-anchor" href="#ignoreauth" aria-hidden="true">#</a></h3><p>\u5FFD\u7565\u9274\u6743\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u52A0\u5728<code>Controller</code>\u7684\u65B9\u6CD5\u6216\u7C7B\u4E0A\uFF0C\u8BBF\u95EE\u65F6\u4E0D\u5728\u8FDB\u884C\u9274\u6743\uFF0C\u52A0\u5728\u975E<code>Controller</code>\u7684\u5730\u65B9\u65E0\u6548\uFF0C\u5728<code>Controller</code>\u7C7B\u548C\u65B9\u6CD5\u540C\u65F6\u6DFB\u52A0\u6B21\u6CE8\u89E3\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u4E0A\u7684\u6CE8\u89E3\u4E3A\u51C6\uFF0C\u6CE8\u89E3\u914D\u7F6E\u5982\u4E0B\uFF1A</p><ul><li><code>ignore</code> \u662F\u5426\u5FFD\u7565\u8BF7\u6C42\u9274\u6743\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code>\uFF0C\u672A\u767B\u5F55\u4E5F\u53EF\u4EE5\u8BBF\u95EE</li><li><code>login</code> \u53EA\u8981\u767B\u5F55\u5C31\u5FFD\u7565\u6743\u9650\u6821\u9A8C, \u5728<code>ignore</code>\u4E3A<code>false</code>\u65F6\u751F\u6548\uFF0C\u9ED8\u8BA4\u4E3A<code>false</code></li></ul><h3 id="permcode" tabindex="-1">@PermCode <a class="header-anchor" href="#permcode" aria-hidden="true">#</a></h3><p>\u6743\u9650\u7801\u6CE8\u89E3\uFF0C\u7528\u5728\u9274\u6743\u65F6\uFF0C\u4E3B\u8981\u7528\u6765\u63A7\u5236</p><h3 id="passwordencoder" tabindex="-1">PasswordEncoder <a class="header-anchor" href="#passwordencoder" aria-hidden="true">#</a></h3><p>\u5BC6\u7801\u7F16\u7801\u5DE5\u5177\u7C7B\uFF0C\u5BF9\u539F\u59CB\u5BC6\u7801\u8FDB\u884C\u6458\u8981\u52A0\u5BC6\uFF0C\u901A\u5E38\u7528\u5728\u6CE8\u518C\u3001\u4FEE\u6539\u5BC6\u7801\u3001\u91CD\u7F6E\u5BC6\u7801\u7B49\u573A\u5408\u3002</p><h3 id="securityutil" tabindex="-1">SecurityUtil <a class="header-anchor" href="#securityutil" aria-hidden="true">#</a></h3><p>\u5B89\u5168\u5DE5\u5177\u7C7B\uFF0C\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u7528\u6765\u83B7\u53D6\u5F53\u524D\u767B\u5F55\u7528\u6237\u7684\u4FE1\u606F\u3002</p><h2 id="\u7B2C\u4E09\u65B9\u767B\u5F55" tabindex="-1">\u7B2C\u4E09\u65B9\u767B\u5F55 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u767B\u5F55" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E3B\u8981\u57FA\u4E8E<code>OpenIdAuthentication</code>\u63A5\u53E3\u8FDB\u884C\u5B9E\u73B0\uFF0C\u7136\u540E\u901A\u8FC7<code>ThirdLoginController</code>\u6765\u5904\u7406\u751F\u6210\u6388\u6743\u9875\u4E0E\u63A5\u6536\u4E09\u65B9\u767B\u5F55\u7684\u56DE\u8C03\u6D88\u606F\u3002 \u76EE\u524D\u5DF2\u7ECF\u5BF9\u63A5\u4E86<code>\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0</code>\u3001<code>\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0</code>\u3001<code>\u9489\u9489</code>\u3001<code>\u4F01\u4E1A\u5FAE\u4FE1</code>\u56DB\u79CD\uFF0C\u5176\u4E2D\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8DDF\u5176\u4ED6\u7684\u4E0D\u592A\u4E00\u81F4\uFF0C \u9700\u8981\u67E5\u770B<a href="./\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5.html">\u7B2C\u4E09\u65B9\u5E73\u53F0\u5BF9\u63A5</a>\u4E2D\u7684\u8BF4\u660E\u3002</p><p>\u8BA4\u8BC1\u7684\u8FC7\u7A0B\u57FA\u672C\u4E0A\u90FD\u662F<code>OAuth</code>\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u9605\u8BFBjustAuth\u5B98\u7F51\u7684\u6587\u6863\u8FDB\u884C\u4E86\u89E3\uFF0C\u5730\u5740\uFF1A<a href="https://justauth.wiki/guide/quickstart/oauth/" target="_blank" rel="noopener noreferrer">OAuth\u6D41\u7A0B</a></p></div><h2 id="\u914D\u7F6E\u8BF4\u660E" tabindex="-1">\u914D\u7F6E\u8BF4\u660E <a class="header-anchor" href="#\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token key atrule">bootx.starter.auth</span><span class="token punctuation">:</span>
  <span class="token comment"># \u76D0\u503C</span>
  <span class="token key atrule">salt</span><span class="token punctuation">:</span> yanzhi 
  <span class="token comment"># \u9ED8\u8BA4\u5BC6\u7801</span>
  <span class="token key atrule">defaultPassword</span><span class="token punctuation">:</span> <span class="token number">123456</span>
  <span class="token comment"># \u5F00\u542F\u8D85\u7EA7\u7BA1\u7406\u5458\uFF0C\u5F00\u542F\u540E\u53EF\u4EE5\u767B\u5F55\u8D85\u7EA7\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u8D85\u7EA7\u7BA1\u7406\u5458\u6709\u7CFB\u7EDF\u4E2D\u6700\u9AD8\u7684\u6743\u9650\u3002\u63A8\u8350\u751F\u4EA7\u6A21\u5F0F\u5173\u95ED\u6B64\u9009\u9879</span>
  <span class="token key atrule">enableAdmin</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u4E0D\u8FDB\u884C\u9274\u6743\u7684\u8DEF\u5F84</span>
  <span class="token key atrule">ignoreUrls</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;/actuator/**&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;/v2/api-docs&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;/doc.html&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;/webjars/**&#39;</span>
  <span class="token comment"># \u7B2C\u4E09\u65B9\u767B\u5F55</span>
  <span class="token key atrule">third-login</span><span class="token punctuation">:</span>
    <span class="token key atrule">ding-talk</span><span class="token punctuation">:</span>
      <span class="token comment"># \u767B\u5F55\u6210\u529F\u540E\u7684\u56DE\u8C03\u5730\u5740</span>
      <span class="token key atrule">redirect-uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>9999/auth/third/callback/dingTalk
      <span class="token comment"># \u5BA2\u6237\u7AEFSecret\uFF1A\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appSecret</span>
      <span class="token key atrule">client-secret</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
      <span class="token comment"># \u5BA2\u6237\u7AEFid\uFF1A\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appKey</span>
      <span class="token key atrule">client-id</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
    <span class="token key atrule">we-com</span><span class="token punctuation">:</span>
      <span class="token key atrule">redirect-uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>9999/auth/third/callback/weCom
      <span class="token key atrule">client-secret</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
      <span class="token key atrule">client-id</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
      <span class="token comment"># \u4F01\u4E1A\u5FAE\u4FE1\uFF0C\u6388\u6743\u65B9\u7684\u7F51\u9875\u5E94\u7528ID </span>
      <span class="token key atrule">agent-id</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
    <span class="token comment"># \u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0</span>
    <span class="token key atrule">we-chat-open</span><span class="token punctuation">:</span>
      <span class="token key atrule">redirect-uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>9999/auth/third/callback/weChat
      <span class="token key atrule">client-id</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
      <span class="token key atrule">client-secret</span><span class="token punctuation">:</span> <span class="token punctuation">?</span><span class="token punctuation">?</span>
</code></pre></div><h2 id="\u6269\u5C55\u6216\u4FEE\u6539\u767B\u5F55\u65B9\u5F0F" tabindex="-1">\u6269\u5C55\u6216\u4FEE\u6539\u767B\u5F55\u65B9\u5F0F <a class="header-anchor" href="#\u6269\u5C55\u6216\u4FEE\u6539\u767B\u5F55\u65B9\u5F0F" aria-hidden="true">#</a></h2><h3 id="\u9ED8\u8BA4\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u5B9E\u73B0" tabindex="-1">\u9ED8\u8BA4\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u5B9E\u73B0 <a class="header-anchor" href="#\u9ED8\u8BA4\u7684\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5B9E\u73B0 <code>UsernamePasswordAuthentication</code> \u63A5\u53E3\u5E76\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D\u5373\u53EF\uFF0C\u89C1IAM\u6A21\u5757\u4E2D\u7684<code>PasswordLoginHandler</code>\u5B9E\u73B0\uFF0C \u662F\u5426\u9A8C\u8BC1\u7801\u4EE5\u53CA\u9A8C\u8BC1\u7801\u6709\u6548\u65F6\u95F4\u5177\u4F53\u5728\u5B9E\u73B0\u7C7B\u81EA\u5DF1\u8FDB\u884C\u624B\u52A8\u5B9E\u73B0\u3002</p><h3 id="\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u73B0" tabindex="-1">\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u73B0 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5B9E\u73B0 <code>OpenIdAuthentication</code> \u63A5\u53E3\u5E76\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D\u5373\u53EF\uFF0C\u89C1IAM\u6A21\u5757\u4E2D\u7684<code>PhoneLoginHandler</code>\u548C<code>WeChatLoginHandler</code>\u7B49\u5B9E\u73B0</p><h3 id="\u5176\u4ED6\u767B\u5F55\u5B9E\u73B0" tabindex="-1">\u5176\u4ED6\u767B\u5F55\u5B9E\u73B0 <a class="header-anchor" href="#\u5176\u4ED6\u767B\u5F55\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5B9E\u73B0\u9274\u6743\u62BD\u8C61\u63A5\u53E3<code>AbstractAuthentication</code>\u8FDB\u884C\u7F16\u5199</p><h3 id="\u8C03\u7528\u767B\u5F55" tabindex="-1">\u8C03\u7528\u767B\u5F55 <a class="header-anchor" href="#\u8C03\u7528\u767B\u5F55" aria-hidden="true">#</a></h3><p><code>TokenEndpoint</code> \u63A5\u6536\u767B\u5F55\u76F8\u5173\u8BF7\u6C42\uFF0C\u901A\u8FC7\u5206\u53D1\u5230\u5177\u4F53\u767B\u5F55\u5B9E\u73B0\u7C7B\u8FDB\u884C\u767B\u5F55\uFF0C\u767B\u5F55\u6210\u529F\u540E\u4FDD\u5B58<code>Token</code>\u5230<code>Redis</code>\u4E2D</p><h2 id="\u63A5\u53E3\u8BF7\u6C42\u6743\u9650\u63A7\u5236" tabindex="-1">\u63A5\u53E3\u8BF7\u6C42\u6743\u9650\u63A7\u5236 <a class="header-anchor" href="#\u63A5\u53E3\u8BF7\u6C42\u6743\u9650\u63A7\u5236" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u76EE\u524D\u5BF9\u8BF7\u6C42\u63A5\u53E3\u8FDB\u884C\u63A7\u5236\u7684\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A\u7B2C\u4E00\u79CD\u662F\u65E0\u9700\u767B\u5F55\u5C31\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u7B2C\u4E8C\u79CD\u662F\u767B\u9646\u540E\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u7B2C\u4E09\u79CD\u662F\u7528\u6237\u5FC5\u987B\u6709\u76F8\u5BF9\u5E94\u7684\u6743\u9650\u624D\u53EF\u4EE5\u8BBF\u95EE\u3002\u8BF7\u6C42\u540E\u53F0\u63A5\u53E3\u65F6\uFF0C \u591A\u79CD\u914D\u7F6E\u4E2D\u4EFB\u4E00\u65B9\u5F0F\u8BA4\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u8BF7\u6C42\u3002</p></div><h3 id="\u4E0D\u9700\u8981\u767B\u5F55\u53EF\u8BBF\u95EE" tabindex="-1">\u4E0D\u9700\u8981\u767B\u5F55\u53EF\u8BBF\u95EE <a class="header-anchor" href="#\u4E0D\u9700\u8981\u767B\u5F55\u53EF\u8BBF\u95EE" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5728\u8BF7\u6C42\u63A5\u53E3\u65B9\u6CD5\u4E0A\u6807\u6CE8<code>@IgnoreAuth</code>\u6CE8\u89E3\u5E76\u8BBE\u7F6E<code>ignore</code>\u4E3A<code>true</code>\uFF0C\u6216\u7740\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684<code>bootx.starter.auth.ignoreUrls</code>\u9879\u8FDB\u884C\u914D\u7F6E\u76F8\u5173\u8DEF\u5F84</p><h3 id="\u767B\u9646\u540E\u53EF\u8BBF\u95EE" tabindex="-1">\u767B\u9646\u540E\u53EF\u8BBF\u95EE <a class="header-anchor" href="#\u767B\u9646\u540E\u53EF\u8BBF\u95EE" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u5728\u8BF7\u6C42\u63A5\u53E3\u65B9\u6CD5\u4E0A\u6807\u6CE8<code>@IgnoreAuth</code>\u6CE8\u89E3\u5E76\u8BBE\u7F6E<code>login</code>\u4E3A<code>true</code>\uFF0C\u4E14<code>ignore</code>\u4E3A<code>false</code>\u3002</p><h3 id="\u6743\u9650\u63A7\u5236" tabindex="-1">\u6743\u9650\u63A7\u5236 <a class="header-anchor" href="#\u6743\u9650\u63A7\u5236" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1A\u901A\u8FC7Web\u7BA1\u7406\u7AEF\u914D\u7F6E\u89D2\u8272\u4E0E\u63A5\u53E3\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u6216\u662F\u901A\u8FC7\u5728\u8BF7\u6C42\u65B9\u6CD5\u4E0A\u6807\u6CE8<code>@PermCode</code>\u6CE8\u89E3\uFF0C\u7CFB\u7EDF\u4F1A\u6839\u636E\u5F53\u524D\u7528\u6237\u62E5\u6709\u89D2\u8272\u6240\u5BF9\u5E94\u7684\u6743\u9650\u7801\u8FDB\u884C\u5339\u914D\uFF0C \u5982\u679C\u914D\u7F6E\u6709\u591A\u4E2A\u6743\u9650\u7801\uFF0C\u4EFB\u4E00\u5339\u914D\u901A\u8FC7\u5373\u53EF\u8BBF\u95EE\u3002</p><h3 id="\u6743\u9650\u7801\u63A7\u5236\u6837\u4F8B" tabindex="-1">\u6743\u9650\u7801\u63A7\u5236\u6837\u4F8B <a class="header-anchor" href="#\u6743\u9650\u7801\u63A7\u5236\u6837\u4F8B" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token annotation punctuation">@Tag</span><span class="token punctuation">(</span>name <span class="token operator">=</span><span class="token string">&quot;\u89D2\u8272\u83DC\u5355\u6743\u9650\u5173\u7CFB&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/role/menu&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleMenuController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RolePermService</span> rolePermService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PermCode</span><span class="token punctuation">(</span><span class="token string">&quot;Admin&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;\u6839\u636E\u89D2\u8272id\u83B7\u53D6\u5173\u8054\u6743\u9650id\u96C6\u5408(\u5305\u542B\u8D44\u6E90\u548C\u83DC\u5355)&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/findPermissionIdsByRole&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPermissionIdsByRole</span><span class="token punctuation">(</span><span class="token class-name">Long</span> roleId<span class="token punctuation">,</span><span class="token class-name">String</span> clientCode<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Res</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>rolePermService<span class="token punctuation">.</span><span class="token function">findPermissionIdsByRole</span><span class="token punctuation">(</span>roleId<span class="token punctuation">,</span>clientCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,53),c=[o];function p(i,l,r,d,u,h){return e(),a("div",null,c)}var m=n(t,[["render",p]]);export{g as __pageData,m as default};
