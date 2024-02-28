<template>
    <canvas id="randomdot" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';
function createFillText() {
    console.time();
    let el = document.querySelector('#randomdot')
    let canvas = el.getContext('2d');
    canvas.fillStyle = 'red';
    canvas.fillRect(0, 0, el.width, el.height)
    for (let j = 0; j < 1000; j++) {
        let w = Math.floor(el.width * Math.random())
        let h = Math.floor(el.height * Math.random())
        canvas.fillStyle = '#fff';
        canvas.rect(w, h, 5, 5)
        canvas.fill();
    }
    console.timeEnd();
}
onMounted(createFillText)
</script>