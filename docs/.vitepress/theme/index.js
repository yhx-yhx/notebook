// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './base.css'
import 'element-plus/dist/index.css'
import TimeFipping from "./components/TimeFipping.vue"

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // 'doc-top': () => h(my),
      // 'doc-bottom': () => h(my),
      // 'doc-footer-before': () => h(my),
      // 'doc-before': () => h(my),
      // 'doc-after': () => h(my),
      // 'sidebar-nav-before': () => h(TimeFipping),
      // 'sidebar-nav-after': () => h(my),
      // 'aside-top': () => h(my),
      // 'aside-bottom': () => h(my),
      // 'aside-outline-before': () => h(my),
      // 'aside-outline-after': () => h(my),
      // 'aside-ads-before': () => h(my),
      // 'aside-ads-after': () => h(my),
      // 'home-hero-before': () => h(my),
      // 'home-hero-info': () => h(my),
      // 'home-hero-image': () => h(my),
      // 'home-hero-after': () => h(my),
      // 'home-features-before': () => h(my),
      // 'home-features-after': () => h(my),

      // page

      // 'page-top': () => h(my),
      // 'page-bottom': () => h(my),

      //404
      // 'not-found': () => h(Error404),


      // 'layout-top': () => h(my),
      // 'layout-bottom': () => h(my),
      // 'nav-bar-title-before': () => h(my),
      // 'nav-bar-title-after': () => h(my),
      // 'nav-bar-content-before': () => h(my),
      // 'nav-bar-content-after': () => h(my),
      // 'nav-screen-content-before': () => h(my),
      // 'nav-screen-content-after': () => h(my),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
