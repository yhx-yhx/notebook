// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './base.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
// import '@nolebase/vitepress-plugin-page-properties/client/style.css'

// import {
//   NolebaseGitChangelogPlugin,
// } from '@nolebase/vitepress-plugin-git-changelog/client'

// import {
//   NolebasePagePropertiesPlugin,
// } from '@nolebase/vitepress-plugin-page-properties/client'


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

    //   app.use(NolebaseGitChangelogPlugin, {
    //   mapContributors: [
    //     {
    //       name: 'Neko',
    //       avatar: 'https://github.com/nekomeowww.png',
    //       nameAliases: ['Neko Ayaka', 'Ayaka Neko'],
    //       emailAliases: ['neko@ayaka.moe'],
    //     },
    //     {
    //       name: 'Rizumu',
    //       avatar: 'https://github.com/LittleSound.png',
    //       nameAliases: ['Rizumu Ayaka', 'Ayaka Rizumu'],
    //       emailAliases: ['rizumu@ayaka.moe'],
    //     },
    //   ],
    //   })
    // app.use(NolebasePagePropertiesPlugin, {
    //   properties: {
    //     'en':[
    //       {
    //         key: 'tags',
    //         type: 'tags',
    //         title: '标签',
    //       },
    //       {
    //         key: 'progress',
    //         type: 'progress',
    //         title: '进度',
    //       },
    //       {
    //         key: 'createdAt',
    //         type: 'datetime',
    //         title: '创建时间',
    //         formatAsFrom: true,
    //         dateFnsLocaleName: 'zhCN',
    //       },
    //       {
    //         key: 'updatedAt',
    //         type: 'datetime',
    //         title: '更新时间',
    //         formatAsFrom: true,
    //         dateFnsLocaleName: 'zhCN',
    //       },
    //       {
    //         key: 'url1',
    //         type: 'link',
    //         title: '链接 1',
    //       },
    //       {
    //         key: 'wordsCount',
    //         type: 'dynamic',
    //         title: '字数',
    //         options: {
    //           type: 'wordsCount',
    //         },
    //       },
    //       {
    //         key: 'readingTime',
    //         type: 'dynamic',
    //         title: '阅读时间',
    //         options: {
    //           type: 'readingTime',
    //           dateFnsLocaleName: 'zhCN',
    //         },
    //       },
    //     ],
    //   }
    // })
  }
}
