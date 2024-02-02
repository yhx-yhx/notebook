<template>
    <canvas id="imgScale" width="500" height="500"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';
function createFillText() {
    let el = document.getElementById('imgScale');
    let canvas = el.getContext('2d');
    let img = new Image();
    img.src = '/images/avatar/logo.png';
    // el.heigth = 400;
    img.onload = () => {
        canvas.drawImage(img, 0, 0, img.naturalWidth * scale(img, el), img.naturalHeight * scale(img, el));
    }

    function scale(img, el) {
        // console.log('canvas-width', el.width);
        // console.log('canvas-heigth', el.height);
        // console.log('imgw', img.naturalWidth);
        // console.log(el.width / img.naturalWidth);
        // console.log(el.heigth / img.naturalHeight);
        return Math.min((el.width / img.naturalWidth), (el.height / img.naturalHeight))
    }
}
onMounted(createFillText)
</script>