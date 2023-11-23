<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core'
import { ElButton, ElCard } from "element-plus"
const { isSupported, open, sRGBHex } = useEyeDropper()
</script>

<template>
    <el-card>
        <template v-if="isSupported">
            <div>是否支持: {{ isSupported ? 'YES' : "NO" }}</div>
            <div>sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span></div>
            <el-button :disabled="!isSupported" @click="() => open()" style="margin: 10px 0;">
                点击获取你需要的颜色
            </el-button>
        </template>
        <div v-else>
            <span>Not Supported by Your Browser</span>
        </div>
    </el-card>
</template>