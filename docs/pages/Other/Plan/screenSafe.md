## 屏幕安全区域
<br>

> 屏幕安全区域（Safe Area）是 iOS 11 引入的新概念，它定义了屏幕上特定区域的用户操作优先于其他区域。
> 最初由 iOS 浏览器提供，用于允许开发人员将其内容放置在视口的安全区域中，该规范中定义的 safe-area-inset-* 值可用于确保内容即使在非矩形的视区中也可以完全显示。
>
### 解决方案
<br/>

``` html

<meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover">
<!-- 必须添加viewport-fit=cover -->
<style>

/* 添加以下样式 */
body {
  /* 11.0 < iOS <= 11.2  */
  padding-top: constant(safe-area-inset-top, 0px);
  padding-right: constant(safe-area-inset-right, 0px);
  padding-bottom: constant(safe-area-inset-bottom, 0px);
  padding-left: constant(safe-area-inset-left, 0px);
  /* iOS > 11.2 */
  padding-top: env(safe-area-inset-top, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  padding-left: env(safe-area-inset-left, 0px);
}
</style>
```