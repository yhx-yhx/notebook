import{aw as p,W as o,aF as u,aG as c,aH as l,aI as d,aJ as f,aK as m,aL as h,aM as _,aN as A,aO as y,Z as g,h as v,z as P,o as w,f as C,aP as R,aQ as b,aR as D}from"./chunks/framework.5dd7d4b8.js";import{t as r}from"./chunks/theme.fdcd3dae.js";import"./chunks/index.4ed993c7.js";const E={extends:r,Layout(){return p(r.Layout,null,{})},enhanceApp({app:e,router:t,siteData:a}){}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(E),L=v({name:"VitePressApp",setup(){const{site:e}=P();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),b(),D(),s.setup&&s.setup(),()=>p(s.Layout)}});async function T(){const e=F(),t=x();t.provide(c,e);const a=l(e.route);return t.provide(d,a),t.component("Content",f),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function x(){return _(L)}function F(){let e=o,t;return A(a=>{let n=y(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{T as createApp};