import{ax as p,Y as s,ay as u,az as c,aA as l,aB as d,aC as f,aD as m,aE as A,aF as _,aG as h,aH as y,Q as g,d as v,u as P,j as C,A as w,aI as b,aJ as D,aK as E}from"./chunks/framework.b5ba70e4.js";import{t as r}from"./chunks/theme.7e1d126c.js";import"./chunks/index.4ed993c7.js";const R={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:t,siteData:a}){}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=i(R),T=v({name:"VitePressApp",setup(){const{site:e}=P();return C(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),D(),E(),o.setup&&o.setup(),()=>p(o.Layout)}});async function x(){const e=L(),t=F();t.provide(c,e);const a=l(e.route);return t.provide(d,a),t.component("Content",f),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:A}),{app:t,router:e,data:a}}function F(){return _(T)}function L(){let e=s,t;return h(a=>{let n=y(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(n),[])):null},o.NotFound)}s&&x().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{x as createApp};