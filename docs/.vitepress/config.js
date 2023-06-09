import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "My Awesome Code",
  description: "A Random And Illogical Site",
  titleTemplate: 'Jottings', // 网站标题后缀- “VitePress | Blog”
  base: '/notebook/', //base url 
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en'
  //   },
  //   fr: {
  //     label: 'French',
  //     lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external

  //     // other locale specific properties...
  //   }
  // }, 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '../.vitepress/public/green.svg', // 左侧导航栏图标
    // siteTitle: 'Hello World', // 左侧导航栏标题 
    outline: 'deep', // 在大纲中显示的标题级别
    // editLink: { // 提供编辑页面的连接
    //   pattern: 'https://github.com/yhx-yhx/notebook/tree/main/pages/:path',
    //   text: 'Edit this page on GitHub'
    // },
    cleanUrls: 'without-subfolders', // 删除路径中的.html后缀
    lastUpdated: true,
    lastUpdatedText: '上次更新', // 上次更新时间显示文本
    outlineTitle: '快速导航', // 大纲的标题
    docFooter: { // 文档底部文本
      prev: '上一节',
      next: '下一节'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Base',
        items: [
          { text: 'JavaScript', link: '/pages/Base/javascript' },
          { text: 'CSS', link: '/pages/Base/css' },
          { text: 'Html', link: '/pages/Base/html' },
          { text: 'Vue', link: '/pages/Base/vue' },
          { text: 'VueRouter', link: '/pages/Base/vuerouter' },
          { text: 'TypeScriptT', link: '/pages/Base/typescript' },
          { text: 'git', link: '/pages/Base/git' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Vue3VideoPlay', link: '/pages/Components/Vue3VideoPlay' },
          { text: 'Vue3Echarts', link: '/pages/Components/Vue3Echarts' },
        ]
      },
      {
        text: 'Notes',
        items: [
          { text: 'min_title', link: '/pages/Notes/2023/title' },
          { text: '2023/4', link: '/pages/Notes/2023/4' },
          { text: 'learn_vue3_doc', link: '/pages/Notes/2023/learn_vue3_doc' },
          { text: 'learn_vue3_coderwhy', link: '/pages/Notes/2023/learn_vue3_coderwhy' },
          { text: 'default', link: '/pages/Notes/2023/Others/Nodes/default' },
          { text: 'third_party_warehouse', link: '/pages/Notes/2023/Others/Nodes/third_party_warehouse' },
        ]
      },
      {
        text: 'Plan',
        items: [
          { text: 'hooks', link: '/pages/Other/Plan/hooks' },
          { text: '大屏可视化响应式', link: '/pages/Other/Plan/screen' },
          { text: 'router 处理方案', link: '/pages/Other/Plan/router' },
          { text: 'axios封装', link: '/pages/Other/Plan/axios_request' },
          { text: 'hls 解决方案', link: '/pages/Other/Plan/hls' },
          { text: 'pdf预览', link: '/pages/Other/Plan/pdf' },
          { text: 'xlsx', link: '/pages/Other/Plan/xlsx' },
          { text: 'download', link: '/pages/Other/Plan/download' },
          { text: 'xgplayer', link: '/pages/Other/Plan/xgplayer' },
        ]
      },
      {
        text: 'Config',
        items: [
          { text: 'nvm', link: '/pages/Config/nvm' }
        ]
      },
      {
        text: 'Live',
        items: [
          { text: 'noisy', link: '/pages/Other/Live/noisy' },
          { text: 'trivial', link: '/pages/Other/Live/trivial' },
          // { text: 'axios封装', link: '/pages/Other/Live/axios_request' },
          // { text: 'hls 解决方案', link: '/pages/Other/Live/hls' },
        ]
      },
      {
        text: 'Link',
        items: [
          { text: 'Docs', link: '/pages/Other/Link/Docs/index' },
          { text: 'Live', link: '/pages/Other/Link/Live/index' },
          { text: 'Tools', link: '/pages/Other/Link/Tools/index' },
          // { text: 'Docs', link: '/pages/Other/Link/Docs/index' },
          { text: 'Live', link: '/pages/Other/Link/Live/index' },
          // { text: 'Tools', link: '/pages/Other/Link/Tools/index' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Vue3VideoPlay', link: '/pages/Components/Vue3VideoPlay' },
          { text: 'Vue3Echarts', link: '/pages/Components/Vue3Echarts' },
        ]
      },
      {
        text: 'Notes',
        items: [
          { text: '2023/4', link: '/pages/Notes/2023/4' },
        ]
      },
      {
        text: 'Plan',
        items: [
          { text: '大屏可视化响应式', link: '/pages/Other/Plan/screen' },
          { text: 'router 处理方案', link: '/pages/Other/Plan/router' },
          { text: 'axios封装', link: '/pages/Other/Plan/axios_request' },
          { text: 'hls 解决方案', link: '/pages/Other/Plan/hls' },
          { text: 'pdf预览', link: '/pages/Other/Plan/pdf' },
          { text: 'xlsx', link: '/pages/Other/Plan/xlsx' },
        ]
      },
      {
        text: 'Live',
        items: [
          { text: 'noisy', link: '/pages/Other/Live/noisy' },
          { text: 'trivial', link: '/pages/Other/Live/trivial' },
          // { text: 'axios封装', link: '/pages/Other/Live/axios_request' },
          // { text: 'hls 解决方案', link: '/pages/Other/Live/hls' },
        ]
      },
    ],
    search: {
      provider: 'local',
    },
    carbonAds: {
      // code: 'yhx',
      // placement: 'yhx'
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/yhx825/superdemo' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Haixin Yang'
    }
  },
  appearance: true, // 外观切换 - 深色浅色
  markdown: { // markdown 解析配置
    // theme: 'material-palenight', // 主体配色
    lineNumbers: true // 显示行号
  }
})
