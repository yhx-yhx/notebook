import { defineConfig } from "vitepress";
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
  lang: "zh-CN",
  title: "前端Yhx",
  description: "A Random And Illogical Site YHX yhx Yhx vue vue全家桶 css js JavaScript css3 node git vite vitepress",
  titleTemplate: "Jottings", // 网站标题后缀- “VitePress | Blog”
  base: "/notebook/", //base url
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    // 阿里播放器
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://g.alicdn.com/de/prismplayer/2.13.2/skins/default/aliplayer-min.css",
      },
    ],
    // 和风天气
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css",
      },
    ],
    ["script", { src: "//unpkg.com/@element-plus/icons-vue" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg", // 左侧导航栏图标
    // siteTitle: 'Hello World', // 左侧导航栏标题
    outline: "deep", // 在大纲中显示的标题级别
    // editLink: { // 提供编辑页面的连接
    //   pattern: 'https://github.com/yhx-yhx/notebook/tree/main/pages/:path',
    //   text: 'Edit this page on GitHub'
    // },
    aside: true,
    // editLink: true,
    cleanUrls: true, // 删除路径中的.html后缀
    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    outlineTitle: "快速导航", // 大纲的标题
    docFooter: {
      // 文档底部文本
      prev: "上一节",
      next: "下一节",
    },
    returnToTopLabel: "返回顶部",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "基础",
        items: [
          { text: "JavaScript", link: "/pages/Base/javascript/index" },
          { text: "CSS", link: "/pages/Base/Css/index" },
          { text: "Html", link: "/pages/Base/html" },
          { text: "axios", link: "/pages/Base/axios/index" },
          { text: "Vue", link: "/pages/Base/vue全家桶/vue/" },
          { text: "vite", link: "/pages/Base/vite" },
          { text: "git", link: "/pages/Base/git" },
          { text: "scss", link: "/pages/Base/scss" },
          { text: "TypeScript", link: "/pages/Base/typescript" },
          { text: "Node.js", link: "/pages/Base/NodeJs/index" },
        ],
      },
      {
        text: "组件",
        items: [
          {
            text: "西瓜视频播放器",
            link: "/pages/ComponentsExample/xgVideoPlay",
          },
          {
            text: "阿里云视频播放器",
            link: "/pages/ComponentsExample/alyVideoPlay",
          },
          {
            text: "Vue3Echarts",
            link: "/pages/ComponentsExample/Vue3Echarts",
          },
          {
            text: "pdfjs",
            link: "/pages/Components/pdfjs/index",
          },
          {
            text: "Vue3Perview",
            link: "/pages/ComponentsExample/Vue3Perview",
          },
          { text: "weather", link: "/pages/ComponentsExample/weather" },
          {
            text: "VideoCamera",
            link: "/pages/ComponentsExample/VideoCamera",
          },
          { text: "Details", link: "/pages/ComponentsExample/details" },
          { text: "Icon", link: "/pages/ComponentsExample/icon" },
          { text: "引导页", link: "/pages/Components/guide/index" },
          { text: "vue-count-to", link: "/pages/ComponentsExample/vueCountTo" },
          {
            text: "wordTemplaterDocx",
            link: "/pages/ComponentsExample/wordTemplaterDocx",
          },
          {
            text: "二维码",
            link: "/pages/ComponentsExample/二维码",
          },
          {
            text: "水印",
            link: "/pages/Components/waterMarker/index",
          },
          {
            text: "gsap应用",
            link: "/pages/Components/gsap/index",
          },
          {
            text: "tesseract.js实现读取图片文字的tool",
            link: "/pages/Components/OCRTesseract/index",
          },
          {
            text: "print-js打印功能",
            link: "/pages/Components/printjs/index",
          },
          {
            text: "vue-pdf-embed 实现的预览pdf功能",
            link: "/pages/Components/perview/pdf/index",
          },
          {
            text: "无缝滚动",
            link: "/pages/Components/ScrollView/index",
          },
          {
            text: "图片裁切",
            link: "/pages/Components/cropper/index",
          },
          {
            text: "窗格拆分器",
            link: "/pages/Components/splitpanes/index",
          },
        ],
      },
      {
        text: "面试题",
        items: [
          { text: "自检100题", link: "/pages/Interview/自检100题" },
          { text: "interview", link: "/pages/Interview/interview" },
          { text: "算法题目", link: "/pages/Interview/title/index" },
        ],
      },
      {
        text: "记录",
        items: [
          { text: "遇到的bug", link: "/pages/Notes/bug/index" },
          { text: "github问题", link: "/pages/Notes/github/index" },
          {
            text: "AL交互结果",
            link: "/pages/Notes/bug/2023/Others/Nodes/default",
          },

          // {
          //   text: "经验帖",
          //   items: [
          //     {
          //       text: "经验花裤衩Element-admin",
          //       link: "/pages/Notes/经验帖/花裤衩Element-admin",
          //     },
          //   ],
          // },
          {
            text: "hello-algo",
            link: '/pages/Notes/algorithm/hello-algo/'
          }
        ],
      },
      {
        text: "方案",
        items: [
          { text: "hooks", link: "/pages/Other/Plan/hooks" },
          { text: "大屏可视化响应式", link: "/pages/Other/Plan/screen" },
          { text: "xlsx", link: "/pages/Other/Plan/xlsx/index" },
          { text: "download", link: "/pages/Other/Plan/download" },
          { text: "导出zip", link: "/pages/Other/Plan/导出zip" },
          // { text: "国际化", link: "/pages/Other/Plan/国际化" },
        ],
      },
      {
        text: "配置",
        items: [
          { text: "nvm", link: "/pages/Config/nvm" },
          { text: "浏览器兼容配置", link: "/pages/Config/broswer" },
          { text: "nginx配置", link: "/pages/Config/nginx配置" },
        ],
      },
      {
        text: "Live",
        items: [
          { text: "noisy", link: "/pages/Other/Live/noisy" },
          { text: "trivial", link: "/pages/Other/Live/trivial" },
        ],
      },
      {
        text: "Link",
        items: [
          { text: "Docs", link: "/pages/Other/Link/Docs/index" },
          { text: "Live", link: "/pages/Other/Link/Live/index" },
          { text: "Tools", link: "/pages/Other/Link/Tools/index" },
          { text: "share", link: "/pages/Other/Link/share/index" },
        ],
      },
    ],

    sidebar: {
      // /pages/Base/ 基础
      "/pages/Base/javascript": [
        {
          text: "红宝书",
          collapsed: true,
          items: [
            { text: "基本内容", link: "/pages/Base/javascript/红宝书/index" },
            {
              text: "8对象、类与面向对象编程",
              link: "/pages/Base/javascript/红宝书/8对象、类与面向对象编程",
            },
            { text: "17事件", link: "/pages/Base/javascript/红宝书/17事件" },
            {
              text: "21错误处理与调试",
              link: "/pages/Base/javascript/红宝书/21错误处理与调试",
            },
            { text: "23JSON", link: "/pages/Base/javascript/红宝书/23JSON" },
            {
              text: "24网络请求",
              link: "/pages/Base/javascript/红宝书/24网络请求",
            },
            {
              text: "25客户端存储",
              link: "/pages/Base/javascript/红宝书/25客户端存储",
            },
          ],
        },
        {
          text: "coderwhy js 高级",
          collapsed: true,
          items: [
            {
              text: "浏览器工作原理与v8引擎",
              link: "/pages/Base/coderwhy/js/01_浏览器工作原理与v8引擎",
            },
            {
              text: "函数作用域",
              link: "/pages/Base/coderwhy/js/02_函数作用域",
            },
            {
              text: "闭包的内存泄漏",
              link: "/pages/Base/coderwhy/js/03_闭包的内存泄漏",
            },
            {
              text: "闭包的回收与this指向",
              link: "/pages/Base/coderwhy/js/04_闭包的回收与this指向",
            },
            {
              text: "纯函数-科里化实现-组合函数",
              link: "/pages/Base/coderwhy/js/07_纯函数-科里化实现-组合函数",
            },
            {
              text: "with-eval-严格模式-面向对象",
              link: "/pages/Base/coderwhy/js/08_with-eval-严格模式-面向对象",
            },
            {
              text: "面向对象的原型链和继承实现",
              link: "/pages/Base/coderwhy/js/09_面向对象的原型链和继承实现",
            },
            {
              text: "ES6类的使用",
              link: "/pages/Base/coderwhy/js/11_ES6类的使用",
            },
          ],
        },
        { text: "基本内容", link: "/pages/Base/javascript/index" },
        { text: "对象", link: "/pages/Base/javascript/对象" },
        { text: "函数", link: "/pages/Base/javascript/函数" },
        { text: "数组", link: "/pages/Base/javascript/数组" },
        { text: "异步编程", link: "/pages/Base/javascript/异步编程" },
        { text: "正则表达式", link: "/pages/Base/javascript/RegExp" },
        { text: "WebSocket", link: "/pages/Base/javascript/WebSocket" },
      ],
      "/pages/Base/Css": [
        { text: "基础", link: "/pages/Base/Css/index" },
        { text: "Scss", link: "/pages/Base/Css/Scss/" },
        {
          text: "CSS 在线示例",
          items: [
            { text: "11-栅格", link: "/pages/Base/Css/hd/11-栅格" },
            { text: "14-帧动画", link: "/pages/Base/Css/hd/14-帧动画" },
            { text: "15-响应式布局", link: "/pages/Base/Css/hd/15-响应式布局" },
          ],
        },
        // 内容合并
      ],
      "/pages/Base/axios": [
        { text: "基础", link: "/pages/Base/axios/" },
        { text: "状态码", link: "/pages/Base/axios/状态码" },
      ],
      "/pages/Base/vite": [
        { text: "基础", link: "/pages/Base/vite/" },
        { text: "环境变量", link: "/pages/Base/vite/环境变量" },
      ],

      "/pages/Base/NodeJs": [
        {
          text: "基础",
          link: "/pages/Base/NodeJs/",
        },
        {
          text: "事件循环和异步IO",
          link: "/pages/Base/NodeJs/事件循环和异步IO/index",
        },
        {
          text: "Buffer和二进制",
          link: "/pages/Base/NodeJs/Buffer和二进制/index",
        },
        {
          text: "内置解析模块 events",
          link: "/pages/Base/NodeJs/内置解析模块/events/index",
        },
        {
          text: "内置解析模块 fs",
          link: "/pages/Base/NodeJs/内置解析模块/fs/index",
        },
        {
          text: "内置解析模块 path",
          link: "/pages/Base/NodeJs/内置解析模块/path/index",
        },
        { text: "Stream流", link: "/pages/Base/NodeJs/Stream流/index" },
        {
          text: "创建npm脚手架",
          link: "/pages/Base/NodeJs/createNpm/index",
        },
        {
          text: "http服务器",
          items: [
            {
              text: "http创建服务器方式",
              link: "/pages/Base/NodeJs/http服务器/http创建服务器方式",
            },
            {
              text: "请求头 header",
              link: "/pages/Base/NodeJs/http服务器/headers",
            },
            {
              text: "request对象",
              link: "/pages/Base/NodeJs/http服务器/request对象",
            },
            {
              text: "response 对象",
              link: "/pages/Base/NodeJs/http服务器/response",
            },
            {
              text: "statusCode 状态码",
              link: "/pages/Base/NodeJs/http服务器/statusCode",
            },
            {
              text: "http中发送网络请求",
              link: "/pages/Base/NodeJs/http服务器/http中发送网络请求",
            },
            {
              text: "http开发web服务器",
              link: "/pages/Base/NodeJs/http服务器/http开发web服务器",
            },
          ],
        },

        {
          text: "模块化",
          items: [
            // { text: "http创建服务器方式", link: "/pages/Base/NodeJs/http服务器/http创建服务器方式" },
          ],
        },
        {
          text: "框架",
          items: [
            { text: "express", link: "/pages/Base/NodeJs/框架/express/index" },
            { text: "koa", link: "/pages/Base/NodeJs/框架/koa/index" },
          ],
        },
      ],
      "/pages/Notes/bug": [
        {
          text: "2023",
          items: [
            { text: "2023-4", link: "/pages/Notes/bug/2023/4" },
            { text: "2023-9", link: "/pages/Notes/bug/2023/9" },
          ],
        },
      ],
      "/pages/Base/vue全家桶": [
        { text: "index", link: "/pages/Base/vue全家桶/vue/" },
        { text: "coderwhyVues", link: "/pages/Base/coderwhy/vue/" },
        {
          text: "vue-router",
          link: "/pages/Base/vue全家桶/vue-router/index",
        },
        { text: "pinia", link: "/pages/Base/vue全家桶/pinia/index" },
        { text: "vueuse", link: "/pages/Base/vue全家桶/vueuse/index" },
        { text: "安全", link: "/pages/Base/vue全家桶/vue/学习vue文档/安全" },
      ],
      "/pages/Base/coderwhy/vue": [
        { text: "index", link: "/pages/Base/vue全家桶/vue/" },
        { text: "coderwhyVues", link: "/pages/Base/coderwhy/vue/" },
        {
          text: "vue-router",
          link: "/pages/Base/vue全家桶/vue-router/index",
        },
        { text: "pinia", link: "/pages/Base/vue全家桶/pinia/index" },
        { text: "vueuse", link: "/pages/Base/vue全家桶/vueuse/index" },
        { text: "安全", link: "/pages/Base/vue全家桶/vue/学习vue文档/安全" },
      ],

      "/pages/Other/Link/Docs": [
        { text: "Docs", link: "/pages/Other/Link/Docs/index" },
        {
          text: "Echarts",
          link: "/pages/Other/Link/Docs/qianduan/Echarts/index.md",
        },
      ],
      "/pages/ComponentsExample/": [
        // {
        //   text: "组件",
        //   items: [
        //     {
        //       text: "西瓜视频播放器",
        //       link: "/pages/ComponentsExample/xgVideoPlay",
        //     },
        //     {
        //       text: "阿里云视频播放器",
        //       link: "/pages/ComponentsExample/alyVideoPlay",
        //     },
        //     {
        //       text: "Vue3Echarts",
        //       link: "/pages/ComponentsExample/Vue3Echarts",
        //     },
        //     {
        //       text: "Vue3Perview",
        //       link: "/pages/ComponentsExample/Vue3Perview",
        //     },
        //     { text: "weather", link: "/pages/ComponentsExample/weather" },
        //     {
        //       text: "VideoCamera",
        //       link: "/pages/ComponentsExample/VideoCamera",
        //     },
        //     { text: "Details", link: "/pages/ComponentsExample/details" },
        //     { text: "Icon", link: "/pages/ComponentsExample/icon" },
        //     { text: "引导页", link: "/pages/ComponentsExample/引导页" },
        //   ],
        // },
      ],
      "/pages/Other/Plan": [
        // {
        //   text: "Plan",
        //   items: [
        //     { text: "hooks", link: "/pages/Other/Plan/hooks" },
        //     { text: "大屏可视化响应式", link: "/pages/Other/Plan/screen" },
        //     { text: "router 处理方案", link: "/pages/Other/Plan/router" },
        //     { text: "pdf预览", link: "/pages/Other/Plan/pdf" },
        //     { text: "xlsx", link: "/pages/Other/Plan/xlsx" },
        //     { text: "download", link: "/pages/Other/Plan/download" },
        //     { text: "xgplayer", link: "/pages/Other/Plan/xgplayer" },
        //   ],
        // },
      ],
      "/pages/Notes/algorithm/hello-algo/": [
        { text: "首页", link: "/pages/Notes/algorithm/hello-algo/" },
        { text: "初识算法", link: "/pages/Notes/algorithm/hello-algo/1初识算法" },
        { text: "复杂度分析", link: "/pages/Notes/algorithm/hello-algo/2复杂度分析" },
        { text: "数据结构", link: "/pages/Notes/algorithm/hello-algo/3数据结构" }
      ],
      "pages/Config/": [
        // {
        //   text: "Config",
        //   items: [
        //     { text: "nvm", link: "/pages/Config/nvm" },
        //     { text: "浏览器兼容配置", link: "/pages/Config/broswer" },
        //     { text: "nginx配置", link: "/pages/Config/nginx配置" },
        //   ],
        // },
      ],
      "/pages/Other/Live": [
        {
          text: "Live",
          items: [
            { text: "noisy", link: "/pages/Other/Live/noisy" },
            { text: "trivial", link: "/pages/Other/Live/trivial" },
          ],
        },
      ],
      "/pages/Other/Link": [
        // {
        //   text: "Link",
        //   items: [
        //     { text: "Docs", link: "/pages/Other/Link/Docs/index" },
        //     { text: "Live", link: "/pages/Other/Link/Live/index" },
        //     { text: "Tools", link: "/pages/Other/Link/Tools/index" },
        //   ],
        // },
      ],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            //这里是个大坑，zh是不生效的，改为root即可
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    // carbonAds: {
    // code: 'yhx',
    // placement: 'yhx'
    // },
    socialLinks: [
      { icon: "github", link: "https://gitee.com/yhx825/superdemo" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Haixin Yang",
    },
  },
  appearance: true, // 外观切换 - 深色浅色
  markdown: {
    // markdown 解析配置
    // theme: 'material-palenight', // 主体配色
    lineNumbers: true, // 显示行号
  },
  sitemap: {
    hostname: "https://example.com",
    lastmodDateOnly: false,
  },
});
