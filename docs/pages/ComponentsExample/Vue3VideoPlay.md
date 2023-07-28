# Vue3VideoPlay Demo

<br/>

## 测试用例

<script setup>
import Vue3VideoPlay from "../../pages/Components/Vue3VideoPlay.vue"

</script>

<client-only>
<Vue3VideoPlay/>
</client-only>

::: warning 视频格式支持
 目前仅支持（hls，mp4，flv）
:::

<br/>

:::  details 具体实现代码
```vue

<script setup>
import 'element-plus/dist/index.css'
import { ElButton, ElSelect, ElForm, ElFormItem, ElInput, ElOption, ElRow, ElCol, ElCard } from 'element-plus'
import { onMounted, reactive, ref, watch } from 'vue';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css'
import "xgplayer"
import HlsPlayer from "xgplayer-hls"
import FlvPlayer from 'xgplayer-flv';
import Mp4Player from 'xgplayer-mp4';

// 配置选项
const Form = reactive({
    type: null,
})
const dicts = reactive({
    url: [
        { value: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4', label: 'mp4测试用例' },
        { value: 'https://vip.lz-cdn5.com/20220401/3315_dbd60bc0/index.m3u8', label: 'm3u8测试用例' },
        { value: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv', label: 'flv测试用例' }
    ]
})

// xgplayer


const options = reactive({
    "id": "mse",
    "url": "https://vip.lz-cdn5.com/20220401/3315_dbd60bc0/index.m3u8",
    // 尺寸
    "height": "300",
    "width": "400",
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
    "defaultPlaybackRate": 1.5,
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
    },
    // 预览本地视频
    // preview: {
    //     uploadEl: uploadDom
    // }
    progressDot: [
        {
            time: 10, //展示标记的时间
            text: '标记文字', //鼠标hover在标记时展示的文字
            duration: 8, //标记段长度（以时长计算）
            style: { //标记样式
                background: 'blue'
            }
        }, {
            time: 22,
            text: '标记文字'
        }, {
            time: 56,
            duration: 8,
        }, {
            time: 76,
        }
    ],
})
let player = ref()
onMounted(() => {
    options.plugins.push(HlsPlayer)
    player.value = new Player(options)
})
const change = () => {
    player.value.destroy()
    if (options.url) {
        let type = options.url.split('.').at(-1)
                
        console.log(type);
        switch (type) {
            case 'm3u8':
                options.plugins = [HlsPlayer]
                break;
            case 'flv':
                options.plugins = [FlvPlayer]
                break
            case 'mp4':
                options.plugins = [Mp4Player]
                break
            default:
                options.plugins = []
        }
        player.value = new Player(options)
    }

}
</script>

<template>
    <ElCard>
        <el-form label-width="100px">
            <el-row>
                <el-col :span="11" :offset="0">
                        <el-form-item label="视频源src">
                            <el-select v-model="options.url" placeholder="请输入视频源（src）" @change="change" clearable>
                                <el-option v-for="item in dicts.url" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                <el-col :span="11" :offset="0">
                        <el-form-item label="视频源src">
                            <el-input v-model="options.url" placeholder="请输入视频源（src）" @change="change" clearable></el-input>
                        </el-form-item>
                    </el-col>
            </el-row>
        </el-form>
        <div id="mse"></div>
    </ElCard>
</template>

<style lang="scss" scoped></style>


```
:::
<br/>

