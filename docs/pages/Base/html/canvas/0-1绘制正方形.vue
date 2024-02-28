<template>
    <canvas id="square" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createSquare() {

    //获取canvas
    const canvas = document.getElementById('square')
    //画布对象
    const app = canvas.getContext('2d')
    //填充颜色
    app.fillStyle = 'skyblue';
    //绘制正方形
    app.fillRect(0, 0, 200, 200);
}
onMounted(createSquare)
</script>