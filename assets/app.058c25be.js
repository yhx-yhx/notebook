import{aw as p,Y as s,ax as u,ay as c,az as l,aA as f,aB as d,aC as m,aD as A,aE as h,aF as y,aG as g,Q as P,d as v,u as w,j as C,A as D,aH as E,aI as R,aJ as _}from"./chunks/framework.918d6b86.js";import{t as r}from"./chunks/theme.3a3deffb.js";const b={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(b),L=v({name:"VitePressApp",setup(){const{site:e}=w();return C(()=>{D(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),E(),R(),_(),o.setup&&o.setup(),()=>p(o.Layout)}});async function T(){const e=x(),a=j();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function j(){return h(L)}function x(){let e=s,a;return y(t=>{let n=g(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(n),[])):null},o.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{T as createApp};
