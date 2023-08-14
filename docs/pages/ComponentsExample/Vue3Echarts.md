## VueEcharts 组件

<script setup>
import {ref} from "vue"
import {ElCard} from "element-plus"
import Vue3Echarts from "../../pages/Components/Vue3Echarts.vue"
import BackTop from "../../pages/Components/common/BackTop.vue"
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
<BackTop />

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

```vue
<script setup >
import { onMounted, ref, watch, watchEffect } from "vue"
import { markRaw } from 'vue'
import * as echarts from 'echarts';
const props = defineProps({
    height: {
        type: [String, Number],
        default: '500px'
    },
    width: {
        type: [String, Number],
        default: '100%'
    },
    options: {
        type: Object,
        default: {}
    },
    id: {
        type: String,
        default: ''
    }
})
const echartsDom = ref(null)
const chartInit = ref(null)

onMounted(() => {
    echartsDom.value = document.getElementById(props.id)
    chartInit.value = markRaw(echarts.init(echartsDom.value));
    window.addEventListener("resize", function () {
        chartInit.value.resize();
    });
})
watchEffect(() => {
    if (chartInit.value) {
        chartInit.value.setOption(props.options, true)
    }
})
watch(() => props.options, () => {
    if (chartInit.value) {
        chartInit.value.setOption(props.options, true)
    }
},
    { deep: true }
)


</script>

<template>
    <div class="echart_ctn" :style="{ height: props.height, width: props.width }">
        <div class="title" :style="headerStyle" v-if="props.options.name">
            {{ props.options.name }}
        </div>
        <div :id="props.id" :ref="props.id + 'Dom'" class="echart_view"></div>
    </div>
</template>

<style scoped lang="scss">
.echart_ctn {
    display: flex;
    flex-direction: column;

    .title {
        box-sizing: border-box;
        padding: 1% 0;
        width: 70%;
        text-align: center;
        font-size: 18.792px;
        font-family: "Microsoft YaHei";
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: auto;

        &::before,
        &::after {
            content: '';
            display: inline-block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            transform: translateY(-50%);
            filter: brightness(120%);
        }

        &::before {
            margin-right: 5px;
        }

        &::after {
            margin-left: 5px;
        }
    }

    .echart_view {
        flex: 1;
    }
}
</style>
```

:::
