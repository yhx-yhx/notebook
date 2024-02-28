<template>
    <canvas id="imgfill" width="500" height="200"> </canvas>
</template>
<script setup>
import { onMounted } from 'vue';

// 渐变效果局部填充
function createImgFill() {
    //创建画布
    let canvas = document.getElementById('imgfill').getContext('2d');
    //创建图片对象
    let img = new Image();
    //引入一张本地图片
    img.src = '/images/avatar/logo.png';

    //加载图片
    img.onload = () => {
        canvas.drawImage(img, 200, 0, 200, 200);
    }
}
onMounted(createImgFill)
</script>