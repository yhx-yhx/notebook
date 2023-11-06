<template>
    <div>
        <vue-pdf-embed :source="source1"  :rotation="data.rotation" >
            <template #after-page="page">
                {{page}}
            </template>
             <template #before-page="page">
                    {{page}}
                </template>
        </vue-pdf-embed>

        <!-- <h1>Base64</h1> -->
        <!-- <vue-pdf-embed :source="source2" /> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

const source1 =  '/static/git.pdf';
const data = ref({
    page:10,//仅显示某一页
    rotation:0,
    scale:0.75,
    textLayer:true,//是否启用文本图层
    // width:
    // height:

})
// public function
// download()params 文件名称
// print() 打印 分辨率 文件名 所有页面标志
// render() 手动渲染文档
</script>