<script setup >
import { createWorker } from 'tesseract.js';
import { ref } from "vue"
import { ElInput, ElUpload, ElIcon } from 'element-plus';
import { Plus } from "@element-plus/icons-vue"

const value = ref(null)
const extractingImagesSrc = ref(null)
const generateText = async (img) => {
    const worker = await createWorker();
    // 并不需要单独引入字体文件

    ; (async () => {
        await worker.loadLanguage('chi_sim+eng');
        await worker.initialize('chi_sim+eng');
        const { data: { text } } = await worker.recognize(img);
        value.value = text
        await worker.terminate();
    })();
}
const filetoBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {
            let reader = new FileReader(file);
            reader.addEventListener('load', (event) => {
                resolve(event.target.result)
            })
            reader.readAsDataURL(file)
        } catch (error) {
            reject(error)
        }

    })
}
const extractingState = ref(false)//导出状态
const handleChange = async (event) => {
    let file = event.raw
    generateText(file)
    extractingImagesSrc.value && (extractingImagesSrc.value = null)
    extractingImagesSrc.value = await filetoBase64(file)
}
</script>

<template>
    <div class="container">
        <div class="tesseract">
            <el-upload :auto-upload="false" action="" list-type="picture-card" :on-change="handleChange" accept="image/*">
                <el-icon>
                    <Plus />
                </el-icon>
                <template #tip>
                    <div class="el-upload__tip text-red">
                        选择文件后立即触发提取文字事件处理程序
                    </div>
                </template>
            </el-upload>
            <img :src="extractingImagesSrc" alt="需要提取文字的图片">
            <el-input type="textarea" :rows="8" v-model="value" placeholder="" :maxlength="-1" :show-word-limit="false"
                :autosize="{ minRows: 2, maxRows: 10 }">
            </el-input>
        </div>

    </div>
</template>

<style scoped lang="scss">
.tesseract {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    border-bottom-color: #918f8f;
}
</style>