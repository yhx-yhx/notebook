<script setup >
import { nextTick, onMounted, ref, watch, watchEffect, onBeforeUnmount } from "vue"
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
let echartsLister = null
onMounted(() => {
    nextTick(() => {
        echartsDom.value = document.getElementById(props.id)
        chartInit.value = markRaw(echarts.init(echartsDom.value));
        echartsLister = () => { chartInit.value.resize() }
        window.addEventListener("resize", echartsLister);
        chartInit.value.setOption(props.options, true)
        // console.log(chartInit.value.getDataURL());
    })
})
watch(() => props.options, () => {
    if (chartInit.value) {
        chartInit.value.setOption(props.options, true)
    }
},
    { deep: true }
)
// 销毁resize事件
onBeforeUnmount(() => {
    echartsLister && window.removeEventListener('resize', echartsLister)
})


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
            width: 8px;
            height: 8px;
            background-color: blueviolet;
            border: 1px solid #000;
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