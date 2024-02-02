<template>
    <canvas id="gradient" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

// 渐变效果局部填充
function createGradient() {
    //获取元素
    let canvas = document.getElementById('gradient');
    //创建画布
    let app = canvas.getContext('2d');
    //创建渐变效果（x0,y0,x1,y1）
    let gradient = app.createLinearGradient(0, 0, 500, 500);
    //开始绘制参数1为位置，2渐变颜色
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(0.5, 'green')
    gradient.addColorStop(1, 'blue')
    //渐变填充
    app.strokeStyle = gradient;
    //边框宽度
    app.lineWidth = 50;
    //绘制图形
    app.strokeRect(100, 100, 300, 300);
    // let canvas = document.querySelector('#canvas');
    // let app = canvas.getContext('2d');
    // let gradient = app.createLinearGradient(0, 0, 500, 500);
    // gradient.addColorStop(0, ' #6666ff');
    // gradient.addColorStop(0.5, " #ffb366");
    // gradient.addColorStop(1, " #4d4dff");

    // app.strokeStyle = gradient;
    // app.lineWidth = 50;
    // app.strokeRect(100, 100, 300, 300)
}
onMounted(createGradient)
</script>