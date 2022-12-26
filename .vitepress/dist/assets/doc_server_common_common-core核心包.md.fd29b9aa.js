import{_ as e,c as a,o as n,a as o}from"./app.baff2d89.js";const m='{"title":"common-core\u6838\u5FC3\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u89E3","slug":"\u6CE8\u89E3"},{"level":2,"title":"\u5E38\u91CF\u679A\u4E3E\u7C7B","slug":"\u5E38\u91CF\u679A\u4E3E\u7C7B"},{"level":2,"title":"\u57FA\u7840\u7C7B","slug":"\u57FA\u7840\u7C7B"},{"level":2,"title":"\u57FA\u7840\u63A5\u53E3","slug":"\u57FA\u7840\u63A5\u53E3"},{"level":2,"title":"\u516C\u5171\u5F02\u5E38","slug":"\u516C\u5171\u5F02\u5E38"},{"level":2,"title":"\u57FA\u7840\u5DE5\u5177\u7C7B","slug":"\u57FA\u7840\u5DE5\u5177\u7C7B"},{"level":2,"title":"\u679A\u4E3E\u548C\u5176\u4ED6","slug":"\u679A\u4E3E\u548C\u5176\u4ED6"},{"level":2,"title":"TreeBuildUtil\u4F7F\u7528\u8BF4\u660E","slug":"treebuildutil\u4F7F\u7528\u8BF4\u660E"},{"level":3,"title":"\u5BF9\u8C61\u7ED3\u6784\u8981\u6C42","slug":"\u5BF9\u8C61\u7ED3\u6784\u8981\u6C42"},{"level":3,"title":"\u53C2\u6570\u8BF4\u660E","slug":"\u53C2\u6570\u8BF4\u660E"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u4E3B\u8981\u4F9D\u8D56","slug":"\u4E3B\u8981\u4F9D\u8D56"}],"relativePath":"doc/server/common/common-core\u6838\u5FC3\u5305.md"}',s={},c=o(`<h1 id="common-core\u6838\u5FC3\u5305" tabindex="-1">common-core\u6838\u5FC3\u5305 <a class="header-anchor" href="#common-core\u6838\u5FC3\u5305" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5305\u542B\u9879\u76EE\u6267\u884C\u65F6\u5FC5\u987B\u7684\u4E00\u7CFB\u5217\u6CE8\u89E3\u3001\u679A\u4E3E\u3001\u57FA\u7840\u7C7B\u3001\u57FA\u7840\u63A5\u53E3\u3001\u57FA\u7840\u5F02\u5E38\u7B49\u76F8\u5173\u5BF9\u8C61\u5B9A\u4E49\uFF0C\u662F\u7CFB\u7EDF\u5F00\u53D1\u548C\u8FD0\u884C\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u4E2A\u6A21\u5757\u3002</p></div><h2 id="\u6CE8\u89E3" tabindex="-1">\u6CE8\u89E3 <a class="header-anchor" href="#\u6CE8\u89E3" aria-hidden="true">#</a></h2><ul><li><code>BigField</code> \u6570\u636E\u5E93\u5927\u5B57\u6BB5\u6807\u8BC6\u6CE8\u89E3\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./MyBatis-Plus\u6269\u5C55.html">MyBatis-Plus\u6269\u5C55\u6A21\u5757</a></li><li><code>CountTime</code> \u83B7\u53D6\u65B9\u6CD5\u6267\u884C\u7684\u65F6\u95F4</li><li><code>Dict</code> \u5B57\u5178\u7FFB\u8BD1\u6CE8\u89E3</li><li><code>DictTranslation</code> \u5B57\u5178\u7FFB\u8BD1\u6807\u8BC6\u6CE8\u89E3</li><li><code>EncryptionField</code> \u6570\u636E\u5E93\u52A0\u5BC6\u5B57\u6BB5\u6CE8\u89E3\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/\u6570\u636E\u6743\u9650.html">\u6570\u636E\u6743\u9650\u6A21\u5757</a></li><li><code>Idempotent</code> \u5E42\u7B49\u6027\u62E6\u622A\u6CE8\u89E3\uFF0C\u7528\u4E8E\u62E6\u622A\u524D\u7AEF\u91CD\u590D\u63D0\u4EA4\u7684\u8BF7\u6C42\uFF0C\u8BE6\u7EC6\u89C1<a href="./\u5E42\u7B49\u5904\u7406\u5668.html">\u5E42\u7B49\u5904\u7406\u5668\u6A21\u5757</a></li><li><code>IgnoreAuth</code> \u5FFD\u7565\u9274\u6743\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u52A0\u5728<code>Controller</code>\u7684\u65B9\u6CD5\u6216\u7C7B\u4E0A\uFF0C\u8BBF\u95EE\u65F6\u4E0D\u5728\u8FDB\u884C\u9274\u6743\uFF0C\u52A0\u5728\u975E<code>Controller</code>\u7684\u5730\u65B9\u65E0\u6548\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/\u767B\u5F55\u9274\u6743.html">\u767B\u5F55\u9274\u6743\u6A21\u5757</a></li><li><code>JobLog</code> \u5B9A\u65F6\u4EFB\u52A1\u65E5\u5FD7\u8BB0\u5F55\u6CE8\u89E3\uFF0C\u63A7\u5236\u662F\u8BE5\u5B9A\u65F6\u65B9\u6CD5\u662F\u5426\u9700\u8981\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/Quartz\u5B9A\u65F6\u4EFB\u52A1.html">Quartz\u5B9A\u65F6\u4EFB\u52A1\u6A21\u5757</a></li><li><code>NestedPermission</code> \u5D4C\u5957\u6743\u9650\u63A7\u5236\u6CE8\u89E3\uFF0C\u9700\u8981\u914D\u5408Permission\u6CE8\u89E3\u4E00\u8D77\u4F7F\u7528\uFF0C\u4E3B\u8981\u7528\u6765\u89E3\u51B3\u5728<code>@Permission</code>\u58F0\u660E\u7684\u65B9\u6CD5\u8C03\u7528\u5176\u4ED6\u5B50\u65B9\u6CD5\u65F6\uFF0C \u5FFD\u7565\u5B50\u65B9\u6CD5\u6267\u884C\u65F6\u7684\u6570\u636E\u6743\u9650\u62E6\u622A\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/\u6570\u636E\u6743\u9650.html">\u6570\u636E\u6743\u9650\u6A21\u5757</a></li><li><code>Permission</code> \u6743\u9650\u63A7\u5236\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5230\u65B9\u6CD5\u548C\u7C7B\u4E0A\uFF0C\u6DFB\u52A0\u540E\u6240\u6267\u884C\u7684SQL\u4F1A\u8FDB\u884C\u6570\u636E\u6743\u9650\u76F8\u5173\u7684\u63A7\u5236\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/\u6570\u636E\u6743\u9650.html">\u6570\u636E\u6743\u9650\u6A21\u5757</a></li><li><code>OperateLog</code> \u64CD\u4F5C\u65E5\u5FD7\u8BB0\u5F55\u6CE8\u89E3\uFF0C<code>AOP</code>\u5904\u7406\u7C7B\u81EA\u52A8\u62E6\u622A\uFF0C\u8BB0\u5F55\u5BF9\u5E94\u7684\u64CD\u4F5C\u884C\u4E3A\uFF0C\u53EF\u4EE5\u8FDB\u884C\u91CD\u590D\u7684\u6807\u6CE8\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./../starter/\u5BA1\u8BA1\u65E5\u5FD7.html">\u5BA1\u8BA1\u65E5\u5FD7\u6A21\u5757</a></li><li><code>QueryParam</code> \u67E5\u8BE2\u53C2\u6570\u6784\u9020\u6CE8\u89E3\uFF0C\u901A\u8FC7\u6807\u6CE8\u5728\u5B9E\u4F53\u7C7B\uFF0C\u53EF\u4EE5\u8BA9\u5B9E\u4F53\u7C7B\u8F6C\u6362\u6210<code>MyBatis-Plus</code>\u7684<code>QueryWrapper</code>\u67E5\u8BE2\u6784\u9020\u5668\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u89C1<a href="./\u8D85\u7EA7\u67E5\u8BE2\u5668.html">\u8D85\u7EA7\u67E5\u8BE2\u5668\u6A21\u5757</a></li></ul><h2 id="\u5E38\u91CF\u679A\u4E3E\u7C7B" tabindex="-1">\u5E38\u91CF\u679A\u4E3E\u7C7B <a class="header-anchor" href="#\u5E38\u91CF\u679A\u4E3E\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>CommonCode</code> \u516C\u5171\u5E38\u91CF\uFF0C\u5305\u62EC\u516C\u5171\u5B57\u6BB5\u540D\u79F0\u3001\u5220\u9664\u6807\u8BB0\u5B57\u6BB5\u540D\u4E00\u7C7B\u7684\u5E38\u91CF</li><li><code>CommonErrorCode</code> \u516C\u7528\u9519\u8BEF\u7801\u5E38\u91CF</li><li><code>ServletCode</code> Servlet\u5E38\u91CF</li><li><code>WebHeaderConst</code> web\u8BF7\u6C42\u5934\u5E38\u91CF</li></ul><h2 id="\u57FA\u7840\u7C7B" tabindex="-1">\u57FA\u7840\u7C7B <a class="header-anchor" href="#\u57FA\u7840\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>UserDetail</code> \u7528\u6237\u7C7B\uFF0C\u53EA\u5305\u542Bid\u3001name\uFF0Cusername\u4E09\u4E2A\u6838\u5FC3\u5C5E\u6027\uFF0C\u662F<code>SecurityUtil</code>\u5DE5\u5177\u7C7B\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u5982\u9700\u8981\u83B7\u53D6\u66F4\u8BE6\u7EC6\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u9700\u8981\u81EA\u884C\u67E5\u8BE2</li><li><code>BaseDto</code> \u57FA\u7840Dto\u7C7B\uFF0C\u5305\u542B\u4E3B\u952E\uFF0C\u521B\u5EFA\u65F6\u95F4\uFF0C\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u7248\u672C\u53F7\u56DB\u4E2A\u5C5E\u6027</li><li><code>KeyValue</code> key/value\u952E\u503C\u5BF9\u8C61</li><li><code>LabelValue</code> \u901A\u5E38\u7528\u4E8E\u8FD4\u56DE\u7ED9\u524D\u53F0\u7528\u6765\u5C55\u793A\u4E0B\u62C9\u5217\u8868\u7684\u6570\u636E\u7ED3\u6784</li><li><code>PageParam</code> \u5206\u9875\u67E5\u8BE2\u53C2\u6570</li><li><code>OrderParam</code> \u6392\u5E8F\u53C2\u6570</li><li><code>ErrorResult</code> \u9519\u8BEF\u54CD\u5E94\u7C7B\uFF0C\u4E1A\u52A1\u51FA\u73B0\u5F02\u5E38\u540E\u8FD4\u56DE\u7684\u54CD\u5E94\u7C7B\uFF0C\u643A\u5E26\u94FE\u8DEF\u8FFD\u8E2AID <code>trackId</code>\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8FFD\u8E2A\u6574\u4E2A\u9519\u8BEF\u7684\u8BF7\u6C42\u94FE\u8DEF\uFF0C\u8BE6\u89C1<a href="./\u65E5\u5FD7\u6269\u5C55.html#\u94FE\u8DEF\u8FFD\u8E2A">\u65E5\u5FD7\u6269\u5C55\u6A21\u5757</a></li><li><code>ResResult</code> \u6B63\u5E38\u54CD\u5E94\u7C7B</li><li><code>PageResult</code> \u5206\u9875\u54CD\u5E94\u7C7B</li><li><code>Res</code> \u8FD4\u56DE\u5DE5\u5177\u7C7B\uFF0C\u53EF\u4EE5\u5FEB\u6377\u6784\u9020\u5404\u79CD\u6B63\u5E38\u54CD\u5E94\u7C7B</li></ul><h2 id="\u57FA\u7840\u63A5\u53E3" tabindex="-1">\u57FA\u7840\u63A5\u53E3 <a class="header-anchor" href="#\u57FA\u7840\u63A5\u53E3" aria-hidden="true">#</a></h2><ul><li><code>EntityBaseFunction</code> \u6570\u636E\u5E93entity\u57FA\u7840\u58F0\u660E\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u8BE5\u63A5\u53E3\u5C06\u4F1A\u62E5\u6709\u4E00\u4E2A\u8F6C\u6362\u6210Dto\u7684\u65B9\u6CD5</li><li><code>ParamService</code> \u53C2\u6570\u83B7\u53D6\u670D\u52A1(\u5FC5\u987B\u8981\u6709\u5B9E\u73B0\u7C7B\uFF0C\u5E76\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D)\uFF0C\u89C1<a href="/doc/server/service/\u57FA\u7840\u670D\u52A1.html">\u57FA\u7840\u670D\u52A1\u6A21\u5757</a></li><li><code>SystemKeyValueService</code> key/value\u952E\u503C\u5BF9\u8C61\u8BFB\u5199\u63A5\u53E3\u670D\u52A1(\u5FC5\u987B\u8981\u6709\u5B9E\u73B0\u7C7B\uFF0C\u5E76\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D)\uFF0C\u89C1<a href="/doc/server/service/\u57FA\u7840\u670D\u52A1.html">\u57FA\u7840\u670D\u52A1\u6A21\u5757</a></li><li><code>UserDetailService</code> \u7528\u6237\u4FE1\u606F\u63A5\u53E3\u670D\u52A1(\u5FC5\u987B\u8981\u6709\u5B9E\u73B0\u7C7B\uFF0C\u5E76\u6CE8\u5165\u5230Spring\u5BB9\u5668\u4E2D)\uFF0C\u7528\u6765\u8FDB\u884C\u4E00\u4E9B\u7528\u6237\u4FE1\u606F\u7684\u516C\u5171\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4E3B\u8981\u7528\u5728\u4E0D\u80FD\u4F9D\u8D56<code>\u8EAB\u4EFD\u8BC6\u522B\u4E0E\u8BBF\u95EE\u7BA1\u7406\uFF08IAM\uFF09</code>\u7684\u6A21\u5757</li></ul><h2 id="\u516C\u5171\u5F02\u5E38" tabindex="-1">\u516C\u5171\u5F02\u5E38 <a class="header-anchor" href="#\u516C\u5171\u5F02\u5E38" aria-hidden="true">#</a></h2><ul><li><code>BizException</code> \u4E1A\u52A1\u5F02\u5E38\u57FA\u7C7B\uFF0C\u5E38\u89C1\u7684\u4E1A\u52A1\u5F02\u5E38\u53EF\u4EE5\u7EE7\u627F\u5B83</li><li><code>DataNotExistException</code> \u6570\u636E\u4E0D\u5B58\u5728\u5F02\u5E38</li><li><code>ErrorCodeRuntimeException</code> \u9519\u8BEF\u7801\u5F02\u5E38\u57FA\u7C7B</li><li><code>FatalException</code> \u81F4\u547D\u5F02\u5E38\u57FA\u7C7B\uFF0C\u51FA\u73B0\u6B64\u5F02\u5E38\u610F\u5473\u7740\u7A0B\u5E8F\u9047\u5230\u4E86\u81F4\u547D\u9519\u8BEF\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\uFF0C\u4E1A\u52A1\u6D41\u7A0B\u88AB\u4E2D\u65AD</li><li><code>OptimisticLockException</code> \u4E50\u89C2\u9501\u5F02\u5E38</li><li><code>RepetitiveOperationException</code> \u91CD\u590D\u64CD\u4F5C\u5F02\u5E38\uFF0C\u5E38\u89C1\u4E8E\u5E42\u7B49\u63A7\u5236</li><li><code>SystemException</code> \u7CFB\u7EDF\u7C7B\u5F02\u5E38\u57FA\u7C7B\uFF0C\u51FA\u73B0\u6B64\u5F02\u5E38\u8BF4\u660E\u7CFB\u7EDF\u9047\u5230\u4E86\u95EE\u9898</li><li><code>BizException</code> \u4E1A\u52A1\u5F02\u5E38\u57FA\u7C7B\uFF0C\u51FA\u73B0\u6B64\u5F02\u5E38\u8BF4\u660E\u4E1A\u52A1\u51FA\u73B0\u5F02\u5E38\uFF0C\u4F46\u4E0D\u662F\u81F4\u547D\u5F02\u5E38\uFF0C\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u8FDB\u884C\u8FD0\u884C</li><li><code>UnSupportOperateException</code> \u4E0D\u652F\u6301\u7684\u64CD\u4F5C\u5F02\u5E38</li><li><code>UnSupportReadException</code> \u4E0D\u652F\u6301\u7684\u8BFB\u53D6\u64CD\u4F5C</li><li><code>ValidationFailedException</code> \u53C2\u6570\u9A8C\u8BC1\u5931\u8D25\u5F02\u5E38\uFF0C\u4F5C\u4E3A\u7684<code>BizException</code>\u5F02\u5E38\u7684\u5B50\u7C7B</li></ul><h2 id="\u57FA\u7840\u5DE5\u5177\u7C7B" tabindex="-1">\u57FA\u7840\u5DE5\u5177\u7C7B <a class="header-anchor" href="#\u57FA\u7840\u5DE5\u5177\u7C7B" aria-hidden="true">#</a></h2><ul><li><code>BigDecimalUtil</code> \u5927\u6570\u5DE5\u5177\u7C7B\uFF0C\u5904\u7406<code>BigDecimal</code>\u7C7B\u578B\u7684\u7B80\u5355\u52A0\u51CF\u4E58\u9664\u7B49\u64CD\u4F5C</li><li><code>CertUtil</code> \u8BC1\u4E66\u5DE5\u5177\u7C7B</li><li><code>CollUtil</code> \u96C6\u5408\u5DE5\u5177\u7C7B\uFF0C\u6269\u5C55\u81EA<code>hutool</code>\u7684\u5DE5\u5177\u7C7B</li><li><code>FileUtil</code> \u6587\u4EF6\u64CD\u4F5C\u5DE5\u5177\u7C7B\uFF0C\u6269\u5C55\u81EA<code>hutool</code>\u7684\u5DE5\u5177\u7C7B</li><li><code>LocalDateTimeUtil</code> <code>JDK8</code>\u65F6\u95F4\u5DE5\u5177\u7C7B\uFF0C\u6269\u5C55\u81EA<code>hutool</code>\u7684\u5DE5\u5177\u7C7B</li><li><code>RegexUtil</code> \u6B63\u5219\u9A8C\u8BC1\u5DE5\u5177\u7C7B\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u7684\u6821\u9A8C\u65B9\u6CD5\uFF0C\u4F8B\u5982\u6821\u9A8C\u90AE\u7BB1\u53F7\u3001\u624B\u673A\u53F7\u7B49</li><li><code>ResultConvertUtil</code> \u7ED3\u679C\u8F6C\u6362\u5DE5\u5177\u7C7B\u5DE5\u5177\u7C7B\uFF0C\u4E3B\u8981\u7528\u4E8E<code>Dto</code>\u4E0E<code>Entity</code>\u4E4B\u95F4\u7684\u8F6C\u6362</li><li><code>StreamUtil</code> \u6D41\u5DE5\u5177\u7C7B\uFF0C\u5305\u542B\u590D\u5236\u6D41\u5230\u5B57\u7B26\u4E32\u65B9\u6CD5</li><li><code>TreeBuildUtil</code> \u6784\u5EFA\u6570\u636E\u6811\u5DE5\u5177\u7C7B\uFF0C\u89C1<a href="#TreeBuildUtil%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E">TreeBuildUtil\u4F7F\u7528\u8BF4\u660E</a></li><li><code>ValidationUtil</code> \u5C5E\u6027\u6821\u9A8C\u5DE5\u5177\u7C7B</li></ul><h2 id="\u679A\u4E3E\u548C\u5176\u4ED6" tabindex="-1">\u679A\u4E3E\u548C\u5176\u4ED6 <a class="header-anchor" href="#\u679A\u4E3E\u548C\u5176\u4ED6" aria-hidden="true">#</a></h2><ul><li><code>ValidationGroup</code> \u6821\u9A8C\u5206\u7EC4\u6807\u8BB0\uFF0C\u63D0\u4F9B\u4E86\u589E\u52A0\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u67E5\u8BE2\u56DB\u79CD\u5E38\u89C1\u573A\u5408\u7684\u5206\u7EC4\u7C7B\u6807\u8BC6</li></ul><h2 id="treebuildutil\u4F7F\u7528\u8BF4\u660E" tabindex="-1">TreeBuildUtil\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#treebuildutil\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><blockquote><p>\u529F\u80FD\u662F\u5C06\u4E00\u4E2A<code>List</code>\u5217\u8868\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8F6C\u6362\u6210\u6811\u72B6\u5217\u8868\u7684\u7ED3\u679C</p></blockquote><h3 id="\u5BF9\u8C61\u7ED3\u6784\u8981\u6C42" tabindex="-1">\u5BF9\u8C61\u7ED3\u6784\u8981\u6C42 <a class="header-anchor" href="#\u5BF9\u8C61\u7ED3\u6784\u8981\u6C42" aria-hidden="true">#</a></h3><p>\u9700\u8981\u6709\u4E3B\u952E\uFF08id\uFF09\u3001\u5173\u8054\u7236\u7C7B\u7684\u4E3B\u952E\uFF08pid\uFF09\u3001\u5305\u542B\u53F6\u5B50\u8282\u70B9\u7684\u5217\u8868\uFF08Children\uFF09\uFF0C\u8FD9\u4E09\u4E2A\u5B57\u6BB5\u662F\u5FC5\u987B\u5B58\u5728\u7684\uFF0C\u4E3E\u4E2A\u6817\u5B50\uFF1A</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegionDto</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u4E3B\u952E\u7F16\u7801&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
     <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u4E0A\u7EA7\u884C\u653F\u533A\u57DFid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> pid<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Schema</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;\u4E0B\u4E00\u7EA7\u884C\u653F\u533A\u57DF&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RegionDto</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h3><ul><li><code>list</code> \u8981\u8FDB\u884C\u8F6C\u6362\u7684\u5217\u8868</li><li><code>pid</code> \u4E00\u7EA7\u8282\u70B9\u7684\u7236\u7EA7id\uFF0C\u901A\u5E38\u4E3Anull</li><li><code>getId</code> \u83B7\u53D6\u4E3B\u952E\u7684\u65B9\u6CD5\u65B9\u6CD5\u5F15\u7528</li><li><code>getPid</code> \u83B7\u53D6\u5173\u8054\u7236\u7EA7\u8282\u70B9\u4E3B\u952E\u7684\u65B9\u6CD5\u5F15\u7528</li><li><code>setChildren</code> \u8BBE\u7F6E\u5B50\u8282\u70B9\u5217\u8868\u7684\u65B9\u6CD5\u5F15\u7528</li><li><code>comparator</code> \u8282\u70B9\u987A\u5E8F\u7684\u6392\u5E8F\u89C4\u5219</li></ul><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token comment">/**
 * \u9012\u5F52\u5EFA\u6811
 *
 * @param permissions \u67E5\u8BE2\u51FA\u7684\u83DC\u5355\u6570\u636E
 * @return \u9012\u5F52\u540E\u7684\u6811\u5217\u8868
 */</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PermMenuDto</span><span class="token punctuation">&gt;</span></span> <span class="token function">recursiveBuildTree</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PermMenuDto</span><span class="token punctuation">&gt;</span></span> permissions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TreeBuildUtil</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>permissions<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token class-name">BaseDto</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span><span class="token class-name">PermMenuDto</span><span class="token operator">::</span><span class="token function">getParentId</span><span class="token punctuation">,</span><span class="token class-name">PermMenuDto</span><span class="token operator">::</span><span class="token function">setChildren</span><span class="token punctuation">,</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingDouble</span><span class="token punctuation">(</span><span class="token class-name">PermMenuDto</span><span class="token operator">::</span><span class="token function">getSortNo</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E3B\u8981\u4F9D\u8D56" tabindex="-1">\u4E3B\u8981\u4F9D\u8D56 <a class="header-anchor" href="#\u4E3B\u8981\u4F9D\u8D56" aria-hidden="true">#</a></h2><ul><li><code>lombok</code></li><li><code>commons-lang3</code></li><li><code>jackson-databind</code> <code>jackson</code>\u6570\u636E\u7ED1\u5B9A</li><li><code>commons-collections4</code></li><li><code>commons-text</code></li><li><code>commons-codec</code></li><li><code>commons-io</code></li><li><code>guava</code> Google \u51FA\u7684 Guava \u662FJava \u6838\u5FC3\u589E\u5F3A\u7684\u5E93,\u5E94\u7528\u975E\u5E38\u5E7F\u6CDB\u3002</li><li><code>hutool</code> \u56FD\u4EA7\u5DE5\u5177\u7C7B</li><li><code>hibernate-validator</code> \u5C5E\u6027\u6821\u9A8C</li><li><code>javax.servlet-api</code></li><li><code>swagger-annotations</code> <code>swagger3</code> \u6CE8\u89E3\u4F9D\u8D56</li><li><code>springdoc-openapi-common</code> <code>swagger3</code> \u7684\u5B9E\u73B0<code>springdoc</code>\u6846\u67B6\uFF0C\u5F15\u5165\u8FD9\u4E2A\u5305\u662F\u4E3A\u4E86\u5F15\u5165\u76F8\u5173\u4F9D\u8D56</li><li><code>slf4j-api</code> \u65E5\u5FD7</li></ul>`,27),t=[c];function l(i,d,p,r,u,h){return n(),a("div",null,t)}var g=e(s,[["render",l]]);export{m as __pageData,g as default};
