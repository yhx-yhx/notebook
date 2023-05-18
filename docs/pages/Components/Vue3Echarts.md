## VueEcharts组件

### 属性

| props            | decsription               | type            | default |
| ---------------- | ------------------------- | --------------- | ------- |
| height           | 最外层高度                | string\|Number  | 100%    |
| width            | 最外层宽度                | String \|Number | 100%    |
| options          | 等同于 echarts 的options  | Object          | {}      |
| id               | 当前 echarts div 的id     | String          | ''      |
| headerbackground | 组件上方的自定义title样式 | String          | ‘’      |
| headerTitle      | 取自options.name          | String          |         |

### 代码实现（待重构）

```vue
<script setup >
import { nextTick, onMounted, ref, watch, watchEffect, computed } from "vue"
import { isNumber, hasString, isDefined } from '../utils/types.js'
import { markRaw } from 'vue'
import * as echarts from 'echarts';
const props = defineProps({
    height: {
        type: [String|Number],
        default: '100%'
    },
    width: {
        type: [String|Number],
        default: '100%'
    },
    options: {
        type: Object,
        default: {}
    },
    id: {
        type: String,
        default: ''
    },
    headerbackground: {
        type: String,
        default: 'bg5'
    }
})
const headerStyle = computed(() => {
    let styles = []
    if (hasString(props.headerbackground)) {
        styles.push(`--bg-header: var(--bg-${props.headerbackground});`)
    }
    return styles.join(' ')
})
const echartsDom = ref(null)
const chartInit = ref(null)

onMounted(() => {
    nextTick(() => {
        echartsDom.value = document.getElementById(props.id)
        chartInit.value = markRaw(echarts.init(echartsDom.value));
        window.addEventListener("resize", function () {
            chartInit.value.resize();
        });
    })
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
        <div class="title" :style="headerStyle" v-if="isDefined(props.options.name)">
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
        // --bg-bg4: url(/static/image/aDashboard/bg4.png);
        // --bg-bg5: url(/static/image/aDashboard/bg5.png);
        box-sizing: border-box;
        padding: 1% 0;
        width: 70%;
        text-align: center;
        font-size: 18.792px;
        font-family: "Microsoft YaHei";
        color: var(--hc-target-area-title-color);
        background-image: var(--bg-header);
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
            background-color: var(--hc-target-area-title-color);
            filter: brightness(120%);
            box-shadow: 0 0 4px var(--hc-target-area-title-color);
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

