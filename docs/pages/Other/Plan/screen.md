## 大屏响应式解决方案


- ### 安装依赖

<br>

  ```
  npm i postcss-pxtorem autoprefixer amfe-flexible -S
  ```

  > postcss-pxtorem：PostCSS的插件，用于将像素单元生成rem单位
  > autoprefixer：浏览器前缀处理
  > amfe-flexible：可伸缩布局方案，替代了原先lib-flexible，选用了当前众多浏览器兼容的viewport

- ### 配置vite.config.ts

<br>

  ```
  //引入依赖
  import autoprefixer from "autoprefixer"
  import postcsspxtorem from "postcss-pxtorem"
   
  //配置适配方案
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "last 10 versions", // 所有主流浏览器最近10版本用
          ],
          grid: true
        }),
        postcsspxtorem({
          rootValue: 192, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192
          propList: ["*", "!border"], // 除 border 外所有px 转 rem
          selectorBlackList: [".el-"], // 过滤掉.el-开头的class，不进行rem转换
        })
      ],
    },
  }
  ```

- ### 导入依赖

<br>

  ```
  import "amfe-flexible/index.js";
  ```

<br>

> 
>
> 
>
> `That's the end of sharing`