<template>
    <canvas id="rectangle" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createRectangle() {

    //获取元素
    const canvas = document.getElementById('rectangle');
    //创建画布
    const app = canvas.getContext('2d');
    //设置填充颜色
    app.fillStyle = 'red';
    //绘制图形
    app.fillRect(0, 0, 400, 200);
}
onMounted(createRectangle)
</script>