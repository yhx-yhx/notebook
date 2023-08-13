import { defineConfig } from 'vitepress'
// import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // vite: {
  //   plugins: [SearchPlugin({
  //     previewLength: 80, // 这个选项决定了搜索结果预览的长度，单位是字符数
  //     buttonLabel: "搜索", // 这个选项可以用来改变搜索按钮的标签
  //     placeholder: "搜索文档", // 这个选项可以用来设置搜索输入框的占位符
  //     allow: [], // 这是一个数组，你可以在这个数组中指定哪些页面可以被搜索
  //     ignore: [] // 这也是一个数组，你可以在这个数组中指定哪些页面不被搜索
  //   })]
  // },
  lang: 'zh-CN',
  title: "Yhx Code",
  description: "A Random And Illogical Site",
  titleTemplate: 'Jottings', // 网站标题后缀- “VitePress | Blog”
  base: '/notebook/', //base url
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // 阿里播放器
    ['link', { rel: 'stylesheet', href: 'https://g.alicdn.com/de/prismplayer/2.13.2/skins/default/aliplayer-min.css' }],
    // 和风天气 
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css' }],
    ['script', { src: '//unpkg.com/@element-plus/icons-vue' }]
    // ['script', { type: 'text/javascript', src: 'https://g.alicdn.com/de/prismplayer/2.13.2/aliplayer-h5-min.js' }]
    // ['script', { type: 'text/javascript', src: 'https://api.map.baidu.com/api?v=2.0&ak=92SYeuzlwp9T8tRNYbHAnvub792IOZcx' }],
    // ['script', { type: 'text/javascript', src: 'https://api.map.baidu.com/getscript?v=2.0&amp;ak=92SYeuzlwp9T8tRNYbHAnvub792IOZcx&amp;services=&amp;t=20230614151255' }]
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
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // lastUpdated: true,
    // lastUpdatedText: '上次更新', // 上次更新时间显示文本
    outlineTitle: '快速导航', // 大纲的标题
    docFooter: { // 文档底部文本
      prev: '上一节',
      next: '下一节'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础', items: [
          { text: 'JavaScript', link: '/pages/Base/javascript' },
          { text: 'CSS', link: '/pages/Base/css' },
          { text: 'Html', link: '/pages/Base/html' },
          { text: 'axios', link: '/pages/Base/axios/index' },
          { text: 'scss', link: '/pages/Base/scss' },
          { text: 'Vue', link: '/pages/Base/vue' },
          { text: 'VueRouter', link: '/pages/Base/vuerouter' },
          { text: 'vite', link: '/pages/Base/vite' },
          { text: 'TypeScript', link: '/pages/Base/typescript' },
          { text: 'git', link: '/pages/Base/git' },
        ]
      },
      { text: '组件', link: '/pages/ComponentsExample/xgVideoPlay' },
      { text: 'Notes', link: '/pages/Notes/2023/title' },
      { text: '方案', link: ' /pages/Other/Plan/hooks' },
      { text: '配置', link: '/pages/Config/nvm' },
      { text: 'Live', link: '/pages/Other/Live/noisy' },
      { text: 'Link', link: '/pages/Other/Link/Docs/index' }
    ],

    sidebar: {
      '/pages/Base/axios': [
        { text: '基础', link: '/pages/Base/axios/index' },
        { text: '状态码', link: '/pages/Base/axios/状态码' },
      ],
      '/pages/Base/vite': [
        { text: '基础', link: '/pages/Base/vite/index' },
        { text: '部署静态站点', link: '/pages/Base/vite/部署静态站点' },
        { text: '环境变量', link: '/pages/Base/vite/环境变量' },
      ],
      '/pages/ComponentsExample/': [
        {
          text: '组件',
          items: [
            { text: '西瓜视频播放器', link: '/pages/ComponentsExample/xgVideoPlay' },
            { text: '阿里云视频播放器', link: '/pages/ComponentsExample/alyVideoPlay' },
            { text: 'Vue3Echarts', link: '/pages/ComponentsExample/Vue3Echarts' },
            { text: 'Vue3Perview', link: '/pages/ComponentsExample/Vue3Perview' },
            { text: 'weather', link: '/pages/ComponentsExample/weather' },
            { text: 'VideoCamera', link: '/pages/ComponentsExample/VideoCamera' },
          ]
        }
      ],
      "/pages/Notes": [
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
        }
      ],
      "/pages/Other/Plan": [{
        text: 'Plan',
        items: [
          { text: 'hooks', link: '/pages/Other/Plan/hooks' },
          { text: '大屏可视化响应式', link: '/pages/Other/Plan/screen' },
          { text: 'router 处理方案', link: '/pages/Other/Plan/router' },
          { text: 'axios封装', link: '/pages/Other/Plan/axios_request' },
          { text: 'pdf预览', link: '/pages/Other/Plan/pdf' },
          { text: 'xlsx', link: '/pages/Other/Plan/xlsx' },
          { text: 'download', link: '/pages/Other/Plan/download' },
          { text: 'xgplayer', link: '/pages/Other/Plan/xgplayer' },
        ]
      },
      ],
      "pages/Config/": [
        {
          text: 'Config',
          items: [
            { text: 'nvm', link: '/pages/Config/nvm' }
          ]
        },
      ],
      "/pages/Other/Live": [
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
      "/pages/Other/Link": [
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
      ]

    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { //这里是个大坑，zh是不生效的，改为root即可
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
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