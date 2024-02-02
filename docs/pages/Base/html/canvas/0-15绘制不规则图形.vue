<template>
    <canvas id="irregularGraphics" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

function createSquare() {
    let el = document.querySelector('#irregularGraphics');
    let canvas = el.getContext('2d');
    canvas.fillStyle = '#000000';
    canvas.fillRect(0, 0, el.width, el.height)
    for (let j = 0; j < 15; j++) {
        canvas.beginPath();
        let arrcolor = ['yellow', ' #0047b3', ' #ff0000', 'red', 'pink', 'skyblue']
        canvas.fillStyle = arrcolor[Math.floor(Math.random() * 5)]
        let x = Math.floor(Math.random() * el.width);
        let y = Math.floor(Math.random() * el.height);
        let r = Math.floor(Math.random() * (90 - 20)) + 20;//
        canvas.arc(x, y, r, 0, 2 * Math.PI);
        canvas.closePath()
        canvas.fill()
    }
}
onMounted(createSquare)
</script>                         