# 天气组件
::: warning 浪费我一个小时 

    和风天气 API 免费版每天有1000次请求的限制，如果需要使用付费版，请自行申请。
    如果是免费订阅，将上述API Host更改为devapi.qweather.com。参考免费订阅可用的数据。
:::

[和风天气](https://dev.qweather.com/)


::: warning 图标问题
   图标问题 png 403 Forbidden 没权限 
:::
##
<script setup>
import WeatherCom from './index.vue'
</script>

<WeatherCom />



<br />


::: details 代码实现
::: code-group 代码

<<< ./weather.vue
<<< ./index.vue

:::
