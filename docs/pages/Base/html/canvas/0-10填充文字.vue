<template>
    <canvas id="textfill" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';
function createFillText() {
    let canvas = document.getElementById('textfill').getContext('2d');
    canvas.fillStyle = 'red'
    canvas.font = '23px CascadiaMono';
    //设置基线
    canvas.textBaseline = 'top';
    //设置文字位置
    canvas.textAlign = 'left';

    //fillText填充文本 参数一：text文本，参数2：（x,y）(相对于画布)，参数3：Maxheight文字最大高度
    canvas.fillText('今天星期五，明天星期六,再有一天我就要放假了', 1, 100)
    canvas.strokeRect(0, 0, 500, 500);
}
onMounted(createFillText)
</script>