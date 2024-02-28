<template>
    <canvas id="RegionalTransparency" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';
function createRegionalTransparency() {
    //创建画布
    let canvas = document.querySelector('#RegionalTransparency').getContext('2d');
    //设置填充颜色
    canvas.fillStyle = 'red';
    //设置填充区域
    canvas.fillRect(0, 0, 500, 500);
    //清楚区域(x0,y0,x,y)初始值 宽高
    canvas.clearRect(200, 200, 100, 100);
}
onMounted(createRegionalTransparency)
</script>