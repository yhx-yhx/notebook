<template>
    <canvas id="jianbian" width="500" height="100"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';
function createFillText() {
    let canvas = document.getElementById('jianbian').getContext('2d');
    let gradient = canvas.createLinearGradient(0, 0, 500, 100);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'pink');
    canvas.strokeStyle = gradient;
    canvas.font = '40px CascadiaMono';
    canvas.textAlign = 'left';
    canvas.textBaseline = 'top';
    canvas.strokeText('这是一个canvas渐变效果', 50, 20);
}
onMounted(createFillText)
</script>