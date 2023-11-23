<script setup lang="ts">
import { useScreenSafeArea } from '@vueuse/core'

const {
    top,
    right,
    bottom,
    left,
} = useScreenSafeArea()
</script>

<template>
    <a href="https://vueuse.org/core/useScreenSafeArea/">文档地址</a>
    <br />
    <div class="inline-grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
            <span opacity="50">
                top:
            </span>
            <span>{{ top }}</span>
        </div>
        <div>
            <span opacity="50">
                right:
            </span>
            <span>{{ right }}</span>
        </div>
        <div>
            <span opacity="50">
                bottom:
            </span>
            <span>{{ bottom }}</span>
        </div>
        <div> <span opacity="50">
                left:
            </span>
            <span>{{ left }}</span>
        </div>
    </div>
</template>