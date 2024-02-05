<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFullscreen } from './fullscreen.js'

const el = ref(null)
const elCom = computed(() => el)
const { isFullscreen, enter, exit, toggle } = useFullscreen(elCom)
</script>

<template>
    <div class="text-center">
        <video ref="el" src="https://vjs.zencdn.net/v/oceans.mp4" width="600" controls />
        <button @click="toggle">
            Go Fullscreen
        </button>
    </div>
</template>
<style lang="scss" scoped>
.text-center {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;

    video,
    button {
        margin: auto;
    }

    button {
        width: 120px;
        height: 34px;
        background-color: rgba(3, 51, 35, .99);
        border-radius: .55em;
        text-align: center;
        color: aliceblue;
    }
}
</style>