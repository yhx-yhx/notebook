<template>
    <ElCard>
        <el-form label-width="100px">
            <el-row>
                <el-col :span="11" :offset="0">
                    <el-form-item label="视频源src">
                        <el-select v-model="options.source" placeholder="请输入视频源（src）" @change="change" clearable>
                            <el-option v-for="item in dicts.source" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="0">
                    <el-form-item label="视频源src">
                        <el-input v-model="options.source" placeholder="请输入视频源（src）" @change="change" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div id="AliPlayer"></div>
    </ElCard>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElButton, ElSelect, ElForm, ElFormItem, ElInput, ElOption, ElRow, ElCol, ElCard } from 'element-plus'


const script = document.createElement('script');
const link = document.createElement('link');
link.href = 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/skins/default/aliplayer-min.css'
link.setAttribute('rel', 'stylesheet')
script.src = 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.16.3/aliplayer-min.js';
script.setAttribute('type', 'text/javascript')
document.body.appendChild(script);
document.body.appendChild(link);


const options = reactive({
    "id": "AliPlayer",
    source: "//player.alicdn.com/video/aliyunmedia.mp4",
    "width": "100%",
    "height": "500px",
    "autoplay": false,
    "isLive": false,
    "rePlay": false,
    "playsinline": true,
    "preload": true,
    "controlBarVisibility": "hover",
    "useH5Prism": true
})

const dicts = reactive({
    source: [
        { value: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4', label: 'mp4测试用例' },
        { value: 'https://vip.lz-cdn5.com/20220401/3315_dbd60bc0/index.m3u8', label: 'm3u8测试用例' },
        { value: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv', label: 'flv测试用例' }
    ]
})
const player = ref(null)

script.onload = () => {
    console.log('Aliplayer', window.Aliplayer);
    player.value = new Aliplayer(options, function (player) {
        console.log(player);
    })
}


const change = () => {
    // switch (player.value.getStatus()) {
    //     case "playing":
    //     case "waiting":
    //         player.value.pause()
    //         break;

    //     default:
    //         break;
    // }
    // console.log('change')

    if (options.source) {
        player.value.off('ready', () => {
            console.log('change')
        });
        // player.value.destroy()
        // player.value.source(options.source);
        player.value = new Aliplayer(options, function (player) {
        })
    }

}
</script>

<style scoped lang="scss"></style>