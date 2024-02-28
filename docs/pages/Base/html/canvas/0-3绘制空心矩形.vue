<template>
    <canvas id="EmptyRectangle" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createSquare() {

    let canvas = document.getElementById('EmptyRectangle');
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.strokeStyle = 'red';
    //设置边框宽度
    app.lineWidth = 50;
    //设置边角类型可以设置：bevel斜角，round圆角，miter尖角
    // app.lineJoin = 'bevel';
    // app.lineJoin = 'round';
    // app.lineJoin = 'miter';
    //默认尖角  在不设置lineJoin值时
    //参数x,y,w,h
    app.strokeRect(50, 50, 400, 400);
}
onMounted(createSquare)
</script>