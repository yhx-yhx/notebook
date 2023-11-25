<template>
    <div>
        <video ref="videoRef" controls width="300">
            <!-- <source src="./video.mp4" type="video/mp4"> -->
        </video>
        <button @click="toggleFullscreen">Toggle Fullscreen Video</button>
    </div>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core';
import { ref } from "vue"
const videoRef = ref(null);
const { toggle, isFullscreen, element } = useFullscreen(videoRef);

function toggleFullscreen() {
    toggle();
}


</script>