import{aq as p,W as o,aE as u,aF as c,aG as l,aH as d,aI as f,aJ as m,aK as h,aL as _,aM as A,aN as y,Z as g,h as v,z as P,o as w,f as C,aO as b,aP as E,aQ as R}from"./chunks/framework.497d1fdf.js";import{t as r}from"./chunks/theme.77b82de2.js";import"./chunks/index.4ed993c7.js";const D={extends:r,Layout(){return p(r.Layout,null,{})},enhanceApp({app:e,router:t,siteData:a}){}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),L=v({name:"VitePressApp",setup(){const{site:e}=P();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),E(),R(),s.setup&&s.setup(),()=>p(s.Layout)}});async function T(){const e=F(),t=x();t.provide(c,e);const a=l(e.route);return t.provide(d,a),t.component("Content",f),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function x(){return _(L)}function F(){let e=o,t;return A(a=>{let n=y(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{T as createApp};