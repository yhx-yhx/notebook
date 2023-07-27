
<script setup>
import 'element-plus/dist/index.css'
import { ElButton, ElSelect, ElForm, ElFormItem, ElInput, ElOption, ElRow, ElCol,ElCard } from 'element-plus'
import { reactive } from 'vue';
import { videoPlay } from "vue3-video-play";
import 'vue3-video-play/dist/style.css' // 引入css
const options = reactive({
    width: '100%', //播放器高度
    height: '100%', //播放器高度
    color: "#409eff", //主题色
    title: "", //视频名称
    webFullScreen: false,//网页全屏
    speed: true,//是否支持快进快退
    currentTime: 0,//跳转到固定播放时间(s)
    muted: false,//静音
    autoPlay: false, //自动播放
    loop: false,//循环播放
    mirror: false,//镜像画面
    control: true, //是否显示控制器
    ligthOff: false,//关灯模式
    volume: 0.3,//默认音量0-1
    src: 'https://vip.lz-cdn5.com/20220401/3315_dbd60bc0/index.m3u8', //视频源
    poster: '', //封面
    type: 'm3u8',
    speedRate: [1.0, 1.25, 1.5, 2.0], // 可选的播放速度
    controlBtns: [
        "audioTrack",//音轨切换按钮
        "quality",//视频质量切换按钮
        "speedRate",//速率切换按钮
        "volume",//音量
        "setting",//设置
        "pip",//画中画按钮
        "pageFullScreen",//网页全屏按钮
        "fullScreen",//全屏按钮
    ], //显示所有按钮,

})

// 配置选项
const Form = reactive({
    type: null,
})
const dicts = reactive({
    type: [{ value: 'video/mp4', label: 'mp4' }, {
        value: 'm3u8', label: 'm3u8'
    }]
})



const onPlay = (ev) => {
    console.log('播放')
}
const onPause = (ev) => {
    console.log(ev, '暂停')
}

const onTimeupdate = (ev) => {
    console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
    console.log(ev, '可以播放')
}
</script>

<template>
    <ElCard>
        <el-form label-width="100px">
            <el-row>
                <el-col :span="11" :offset="0">
                    <el-form-item label="视频源src">
                        <el-input v-model="options.src" placeholder="请输入视频源（src）" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="0">
                    <el-form-item label="视频格式">
                        <el-select v-model="options.type" value-key="" placeholder="" clearable>
                            <el-option v-for="item in dicts.type" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <!-- <el-col :span="10" :offset="1">
                    
                </el-col> -->

            </el-row>
        </el-form>





        <videoPlay ref="aplayVideo" v-bind="options" @play="onPlay" />
    </ElCard>
</template>

