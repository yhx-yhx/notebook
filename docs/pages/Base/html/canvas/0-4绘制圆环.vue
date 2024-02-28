<template>
    <canvas id="ring" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createRing() {

    let canvas = document.getElementById('ring');
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.strokeStyle = 'red';
    //设置边框宽度
    app.lineWidth = 40;
    //绘制圆的函数arc()圆心,(x,y),r,sAngle起始角，
    // eAngle结束角（弧度制），
    // （可选counterclockwise true顺时针）
    app.arc(200, 200, 160, 0, 2 * Math.PI);
    //画
    app.stroke();
}
onMounted(createRing)
</script>