<script lang="ts" setup>
import { useMemory } from '@vueuse/core'

function size(v: number) {
    const kb = v / 1024 / 1024
    return `${kb.toFixed(2)} MB`
}
const { isSupported, memory } = useMemory()
</script>

<template>
    <div v-if="isSupported && memory" class="inline-grid grid-cols-2 gap-x-4 gap-y-2 card-page">
        <template v-if="memory">
            <div>
                <span opacity="50">
                    使用:
                </span>
                <span>{{ size(memory.usedJSHeapSize) }}</span>
            </div>
            <div>
                <span opacity="50">
                    分配:
                </span>
                <span>{{ size(memory.totalJSHeapSize) }}</span>
            </div>
            <div>
                <span opacity="50">
                    限制:
                </span>
                <span>{{ size(memory.jsHeapSizeLimit) }}</span>
            </div>
        </template>
    </div>
    <div v-else>
        Your browser does not support performance memory API
    </div>
</template>