## VueEcharts 组件

<script setup>
import {ref} from "vue"
import {ElCard} from "element-plus"
import Vue3Echarts from "./index.vue"
// import BackTop from "../../pages/Components/common/BackTop.vue"
const options = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})

</script>

<el-card>
<Vue3Echarts id="echart_1029" :options="options" />
</el-card>
<!-- <BackTop /> -->

### 属性

| props            | decsription                 | type            | default |
| ---------------- | --------------------------- | --------------- | ------- |
| height           | 最外层高度                  | string\|Number  | 100%    |
| width            | 最外层宽度                  | String \|Number | 100%    |
| options          | 等同于 echarts 的 options   | Object          | {}      |
| id               | 当前 echarts div 的 id      | String          | ''      |
| headerbackground | 组件上方的自定义 title 样式 | String          | ‘’      |
| headerTitle      | 取自 options.name           | String          |         |

<br/>

::: details 具体实现代码

<<< ./index.vue
:::
