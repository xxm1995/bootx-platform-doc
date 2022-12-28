import{_ as n,c as a,o as s,a as t}from"./app.206820c1.js";const g='{"title":"\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09","description":"","frontmatter":{},"headers":[],"relativePath":"doc/front/vue2/\u6570\u636E\u8131\u654F.md"}',p={},o=t(`<blockquote><p>\u540E\u7AEF\u76F8\u5173\u4F7F\u7528\u89C1 \u6570\u636E\u6743\u9650\u6A21\u5757 \u6587\u6863\u8BF4\u660E</p></blockquote><h4 id="\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09" tabindex="-1">\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09 <a class="header-anchor" href="#\u524D\u7AEF\u7F16\u8F91\u4FEE\u6539\uFF08vue2\uFF09" aria-hidden="true">#</a></h4><pre><code>\u5F53\u88AB\u8131\u654F\u7684\u5B57\u6BB5\u6570\u636E\u8FD4\u56DE\u524D\u7AEF\u540E\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u70B9\u51FB\u4FDD\u5B58\u4F1A\u5C06\u8131\u654F\u540E\u7684\u6570\u636E\u539F\u6837\u56DE\u4F20\u56DE\u540E\u53F0\uFF0C\u5BFC\u81F4\u52A0\u5BC6\u5B57\u6BB5\u88AB\u66F4\u65B0\uFF0C\u4EA7\u751F\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u9488\u5BF9\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u63D0\u4F9B\u4E00\u79CD\u89E3\u51B3\u601D\u8DEF\uFF0C\u4EE3\u7801\u5982\u4E0B
</code></pre><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-modal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E3B\u952E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showable<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7F16\u53F7<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input-password</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.password<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E3A\u7A7A\u4E0D\u4FEE\u6539\u5BC6\u7801<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showable<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
import { FormMixin } from &#39;@/mixins/FormMixin&#39;
    
export default {
  name: &#39;MailConfigEdit&#39;,
  mixins: [FormMixin],
  data () {
    return {
      // \u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u7684\u539F\u59CB\u6570\u636E\u4FE1\u606F
      rawForm: {},
      form: {
        code: &#39;&#39;,
        username: &#39;&#39;
      },
    }
  },
  computed: {
    diff () {
      return {
        // \u76D1\u89C6\u52A0\u5BC6\u5B57\u6BB5\u662F\u5426\u53D1\u751F\u4E86\u53D8\u52A8
        password: this.diffForm(this.form.password, this.rawForm.password)
      }
    }
  },
  methods: {
    // \u53EF\u4EE5\u89C6\u4E3A\u8981\u8FDB\u884C\u7F16\u8F91\u65F6\uFF0C\u5411\u540E\u7AEF\u6570\u636E\u83B7\u53D6\u6570\u636E
    edit (id, type) {
        get(id).then(res =&gt; {
          this.form = res.data
          // \u4FDD\u5B58\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u539F\u59CB\u4FE1\u606F
          this.rawForm = { ...res.data }
          this.confirmLoading = false
        })
    },
    handleOk () {
      this.$refs.form.validate(async valid =&gt; {
        if (valid) {
          // \u8FDB\u884C\u66F4\u65B0\u65F6\uFF0C\u4F7F\u7528\u76D1\u89C6\u7684\u52A0\u5BC6\u6570\u636E\u6765\u66FF\u6362\u8868\u5355\u4E2D\u7684\u6570\u636E\uFF0C\uFF08\u6570\u636E\u4E3Anull\u65F6\uFF0C\u540E\u7AEF\u4E0D\u8FDB\u884C\u4FEE\u6539\uFF09
          await update({
            ...this.form,
            ...this.diff
          })
        } else {
          return false
        }
      })
    },
    // \u5224\u65AD\u8131\u654F\u53C2\u6570\u662F\u5426\u88AB\u4FEE\u6539\u7684\u53C2\u6570, \u672A\u4FEE\u6539\u5219\u8FD4\u56DE\u7A7A\u503C \uFF08FormMixin\u4E2D\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF09
    diffForm (o1, o2) {
      return o1 === o2 ? null : o1
    }
  }
}
</code></pre></div>`,4),e=[o];function c(u,l,i,r,k,d){return s(),a("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
