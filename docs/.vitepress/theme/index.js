// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './base.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import TimeFipping from "./components/TimeFipping.vue"

export default {
  // ...Theme,
  extends: Theme,
  Layout() {
    return h(Theme.Layout, null, {});
  },
  // https://vitepress.dev/guide/extending-default-theme#layout-slots
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
