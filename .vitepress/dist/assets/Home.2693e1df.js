import{c as n,_ as m,d as k,u as t,e as s,f as o,k as _,g as r,t as u,p as g,F,z as T,J as I,A as v,H as p}from"./plugin-vue_export-helper.c921523c.js";import{u as B,a as L,N as H}from"./app.cd61de95.js";function x(){const i=B();return n(()=>i.value.frontmatter)}const C={key:0,class:"home-hero"},N={key:0,class:"figure"},D=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"description"},S=k({__name:"HomeHero",setup(i){const a=L(),e=x(),l=n(()=>e.value.heroImage||h.value||c.value||$.value),h=n(()=>e.value.heroText!==null),y=n(()=>e.value.heroText||a.value.title),c=n(()=>e.value.tagline!==null),f=n(()=>e.value.tagline||a.value.description),$=n(()=>e.value.actionLink&&e.value.actionText),A=n(()=>e.value.altActionLink&&e.value.altActionText);return(d,ee)=>t(l)?(s(),o("header",C,[d.$frontmatter.heroImage?(s(),o("figure",N,[_("img",{class:"image",src:d.$withBase(d.$frontmatter.heroImage),alt:d.$frontmatter.heroAlt},null,8,D)])):r("v-if",!0),t(h)?(s(),o("h1",b,u(t(y)),1)):r("v-if",!0),t(c)?(s(),o("p",w,u(t(f)),1)):r("v-if",!0),t($)?(s(),g(H,{key:3,item:{link:t(e).actionLink,text:t(e).actionText},class:"action"},null,8,["item"])):r("v-if",!0),t(A)?(s(),g(H,{key:4,item:{link:t(e).altActionLink,text:t(e).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var V=m(S,[["__scopeId","data-v-4d71546a"]]);const z={key:0,class:"home-features"},E={class:"wrapper"},J={class:"container"},P={class:"features"},R={key:0,class:"title"},j={key:1,class:"details"},q=k({__name:"HomeFeatures",setup(i){const a=x(),e=n(()=>a.value.features&&a.value.features.length>0),l=n(()=>a.value.features?a.value.features:[]);return(h,y)=>t(e)?(s(),o("div",z,[_("div",E,[_("div",J,[_("div",P,[(s(!0),o(F,null,T(t(l),(c,f)=>(s(),o("section",{key:f,class:"feature"},[c.title?(s(),o("h2",R,u(c.title),1)):r("v-if",!0),c.details?(s(),o("p",j,u(c.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var G=m(q,[["__scopeId","data-v-51467b1a"]]);const K={},M={key:0,class:"footer"},O={class:"container"},Q={class:"text"};function U(i,a){return i.$frontmatter.footer?(s(),o("footer",M,[_("div",O,[_("p",Q,u(i.$frontmatter.footer),1)])])):r("v-if",!0)}var W=m(K,[["render",U],["__scopeId","data-v-26801c16"]]);const X={class:"home","aria-labelledby":"main-title"},Y={class:"home-content"},Z=k({__name:"Home",setup(i){return(a,e)=>{const l=I("Content");return s(),o("main",X,[v(V),p(a.$slots,"hero",{},void 0,!0),v(G),_("div",Y,[v(l)]),p(a.$slots,"features",{},void 0,!0),v(W),p(a.$slots,"footer",{},void 0,!0)])}}});var ae=m(Z,[["__scopeId","data-v-9d516c10"]]);export{ae as default};