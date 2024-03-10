<script setup>
import { ref, reactive, watchPostEffect } from 'vue';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css'
import "xgplayer"


const options = reactive({
    "id": "mse",
    "url": "",
    // 尺寸
    "height": "100",
    "width": "100",
    // 流式布局
    "fluid": true,
    // 自适应视频内容宽高
    "fitVideoSize": 'auto',
    // 音量
    "volume": 0.6,
    // 自动播放
    "autoplay": false,
    // 循环播放
    "loop": false,
    // 初始化显示视频首帧
    "videoInit": true,
    // 封面图
    "poster": "",
    // 倍速播放
    "playbackRate": [0.5, 0.75, 1, 1.5, 2],
    // 默认播放速度
    "defaultPlaybackRate": 1,
    // 记忆播放
    // 离开时存下 上次播放时间
    //  lastPlayTime: 20, //视频起播时间（单位：秒）
    // lastPlayTimeHideDelay: 5, //提示文字展示时长（单位：秒）
    // 视频旋转
    "rotate": {
        "clockwise": true,
        "innerRotate": true
    },

    "playsinline": true,

    "plugins": [],
    "playsinline": true,
    "whitelist": [
        ""
    ],
    "keyShortcut": "on",
    "closeVideoClick": true,
    "closeVideoDblclick": true,
    "closeVideoTouch": true,
    "playbackRate": [
        null
    ],
    "pip": true,
    "download": true,
    "thumbnail": {
        "pic_num": 44,
        "width": 160,
        "height": 90,
        "col": 10,
        "row": 10,
        "urls": [
            ""
        ]
    }
})
const props = defineProps({
    url: String
})

let player = ref()

watchPostEffect(() => {
    if (props.url) {
        options.url = props.url
        player.value = new Player(options)
    }
})

</script>
<template>
    <div id="mse"></div>
</template>

<style lang="scss" scoped>
#mse {
    border: 2px solid #ccc;
    border-radius: 10px;
}
</style>
