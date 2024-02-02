<template>
    <canvas id="triangle" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createTriangle() {
    //获取元素
    let canvas = document.querySelector('#triangle');
    //创建画布
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.fillStyle = 'green';
    //绘制图形
    app.fillRect(0, 0, 500, 500);
    //开始划线
    app.beginPath();
    //设置线宽
    app.lineWidth = 10;
    //从这点开始
    app.moveTo(250, 0);
    //到这点
    app.lineTo(500, 250);
    //接着到这点
    app.lineTo(0, 250)
    //设置划线的颜色
    app.strokeStyle = 'red'
    //将起始点与结束点相连
    app.closePath();
    //画线
    app.stroke();
}
onMounted(createTriangle)
</script>