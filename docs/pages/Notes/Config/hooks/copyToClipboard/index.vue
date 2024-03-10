<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCopyToClipboard } from './copyToClipboard.js'
import { ElInput } from 'element-plus';

const txt = ref('张三的诗')
const { isDone, copyToClipboard } = useCopyToClipboard()
</script>

<template>
    <div class="text-center">
        <el-input v-model="txt" placeholder="请输入需要复制的文字" clearable @change=""></el-input>
        <button @click="copyToClipboard(txt)">
            copyToClipboard
        </button>
    </div>
</template>
<style lang="scss" scoped>
.text-center {
    width: 100%;
    height: 200px;
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