<script setup >
import { onMounted, onBeforeUnmount } from "vue"
import { ElButton } from "element-plus";
import watermark from './watermarker.js';

onMounted(() => {
  watermark.set('姓名：张亮:联系方式：11011011011',{fontFamily:"Helvetica"});
});

onBeforeUnmount(() => {
  // 取消水印
  watermark.out();
});

</script>

<template>
    <div class="water_marker_wrap">
    </div>
</template>

<style scoped lang="scss">
.water_marker_wrap {
    margin: auto;
    height: calc(100vh - 84px);
    overflow: hidden;
    // background-color: rgb(36, 60, 81);
    box-shadow: var(--el-box-shadow-light);
    text-align: center;
    filter:blur();
}
#canvas {
    background-color: #00000033;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
