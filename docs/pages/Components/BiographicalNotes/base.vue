<script setup>
import { handleError, ref } from 'vue';
import { ElButton, ElCard, ElInput, ElImage, ElMessage } from 'element-plus';

const password = ref(null)
const isPassword = ref(false)


// 存储用户输入的密码
function setPassword() {
    window.localStorage.setItem('password', password.value)
    console.log('密码已设置');
}

// 提交验证
function submit() {
    // 提交表单
    if (password.value != '1024') {
        isPassword.value = false
        ElMessage.error('密码错误')
    } else {
        isPassword.value = true
        setPassword()
        ElMessage.success('密码正确')
    }
}

// 监听密码输入框的值变化
function handleChange() {
    if (isPassword.value) {
        isPassword.value = false
    }
}
</script>

<template>
    <div class="empty-container">
        <div v-if="isPassword">
            <!-- 保密内容 -->
            <slot></slot>
        </div>
        <div v-else>
            <el-card type="always" style="margin:10px 0 ;">
                <div style="display: flex;padding: 10px 0;">
                    <h3 style="margin: auto;">扫描关注获取密码</h3>
                </div>
                <div style="display: flex;padding: 10px 0;">
                    <p style="margin: auto;">请输入密码以继续</p>
                </div>
                <div style="display: flex;padding: 10px 0;">
                    <el-image style="width: 300px;height: 300px;text-align: center;margin: auto;"
                        src="/notebook/images/二维码.jpg"></el-image>
                </div>
                <div style="text-align: center;padding: 10px 0;">
                    <el-input style="display: inline;padding-right: 10px;" type="text" v-model="password"
                        @change="handleChange" @keydown.enter="submit"></el-input>
                    <el-button style="display: inline-block;" @click="submit">提交</el-button>

                </div>
            </el-card>
        </div>
    </div>


</template>

<style lang="scss" scoped></style>
