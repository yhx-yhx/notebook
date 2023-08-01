<script setup >
import { ref, onMounted } from "vue"
import { ElButton,ElText, ElMessage, ElSelect, ElOption,ElIcon } from "element-plus";
import { Camera, VideoPlay, VideoPause,Switch } from "@element-plus/icons-vue"
const isVideoing = ref(!1)
const video = ref()
const canvas = ref()
const image = ref()
const recordedBlobs = ref([])
const perviewVideo = ref()
const perviewVideoSrc = ref()
const mediaRecorder = ref()
const poster = ref('/notebook/logo.png')

onMounted(() => {
    //获取设备列表
    navigator.mediaDevices.enumerateDevices().then((devices) => {
        devices.forEach(function (device) {
            console.log(device.kind + ': ' + device.label + ' id = ' + device.deviceId)
        })
    })
})


//定义设备参数，deviceId 是通过 navigator.mediaDevices.enumerateDevices 获取到的
var constraints = {
    // audio: false,
    video: { width: 200, height: 200, deviceId: 'yhx825' },
}

//调用摄像头
const startCamera = () => {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStream) {
            video.value.srcObject = mediaStream
            video.value.onloadedmetadata = function (e) {
                video.value.play()
            }
        })
        .catch(function (err) {
            console.log(err.name + ': ' + err.message)
        })
}

// 关闭当前video
const closeVideo = () => { 
    video.value.srcObject.getTracks().forEach(track => {
        track.stop()
        console.log(poster.value);
        video.value.poster = poster.value
        })
}

const getOrCloseCamera = () => {
    if (isVideoing.value) {
        closeVideo()
        isVideoing.value = false
    } else {
        startCamera()
        isVideoing.value = true
    }
}

// 拍照 或者 截图
const getImage = () => { 
    if (!isVideoing.value) {
        return ElMessage.warning('请先打开摄像头在试试')
    }
    const context = canvas.value.getContext('2d')
    context.drawImage(video.value, 0, 0, 200, 200)
    image.value = canvas.value.toDataURL('image/png')

}

// 录屏
const recordVideo = (key) => {
    if (!isVideoing.value) {
        ElMessage.warning('请先开启摄像头')
        return
    }
    !mediaRecorder.value && (mediaRecorder.value = new MediaRecorder(video.value.srcObject))
    console.log(mediaRecorder.value.state);
    if (mediaRecorder.value.state === 'inactive') {
        console.log('开启 录制');
        mediaRecorder.value.start();
        return
    }

    // 视频录制监听事件
    mediaRecorder.value.ondataavailable = e => {
        console.log(e);
        // 录制的视频数据有效
        if (e.data && e.data.size > 0) {
            recordedBlobs.value.push(e.data);
        }
    };
    mediaRecorder.value.onstop = (key) => {
        const blob = new Blob(recordedBlobs.value, { type: 'video/mp4' })
        const videoUrl = URL.createObjectURL(blob)
        if (key === 'download') {
        const a = document.createElement('a')
        a.href = videoUrl
        a.download = '屏幕录制.mp4'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        } else {
            console.log(videoUrl);
            perviewVideoSrc.value = videoUrl
        }
        VideoStop() //停止录制
        isVideoing.value = false
    }
    //stop
    if (key === 'stop') {
        // 方式一 预览

        // 方式二 下载
        if (!mediaRecorder.value) {
            return 
        }
        mediaRecorder.value.stop();
        return 
    }
     if (mediaRecorder.value.state === 'recording') {
        console.log('暂停 录制');
        mediaRecorder.value.pause();
    } else if (mediaRecorder.value.state === 'paused') {
        console.log('继续 录制');
        mediaRecorder.value.resume();
    }
    console.log(mediaRecorder.value.state);

    // 停止后 加入下载功能 将视频转成 mp4
  
}
const VideoStop = () => {
    console.log('关闭');
    const tracks = video.value.srcObject.getTracks()
    // 关闭视频音频
    tracks.forEach(track => { 
        track.stop()
    })
}

// 镜像
const setMirror = () => {
    if (video.value.style.transform === 'scaleX(-1)') {
        video.value.style.transform = 'scaleX(1)'
    } else {
        video.value.style.transform = 'scaleX(-1)'
    }
}

// 
const shape = ref(1)

const changeShape = () => {
    if (shape.value === 0) {
        // 圆形
        video.value.style.borderRadius = '50%'
        shape.value = 1
        
    } else if (shape.value === 1) {
        shape.value = 0
        // 正方形
        video.value.style.borderRadius = '0'
    }
}

</script>

<template>
    <video class="video" src="" ref="video" :poster="poster"></video>
    <canvas ref="canvas"  height="200" width="200" style="display: none;"></canvas>
    <el-button type="primary"  @click="getOrCloseCamera"><span v-if="isVideoing">
        <el-icon><VideoPause /></el-icon>
    </span>
<span v-else>
    <el-icon><VideoPlay /></el-icon>
</span>
</el-button>
    <el-button type="primary" @click="setMirror">镜像</el-button>
    <el-button type="primary" @click="changeShape"><el-icon><Switch /></el-icon></el-button>
    <!-- <el-select v-model="shape"  placeholder="" clearable filterable @change="changeShape">
        <el-option v-for="item in shapeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select> -->
    
    <el-button type="primary" @click="getImage"><el-icon><Camera /></el-icon></el-button>
    <el-button type="primary" :disabled="isVideoing!==true" @click="recordVideo">录制状态切换</el-button>
    <el-button type="primary" :disabled="!mediaRecorder || isVideoing !== true" @click=" recordVideo('stop')">停止录制</el-button>
    <div class="perview">
        拍照
        <img class="img" v-if="image" :src="image" >
    </div>
    <div class="perview">预览录制视频
        <video class="video" v-if="perviewVideoSrc" ref="perviewVideo" :poster="poster" controls :src="perviewVideoSrc"></video>
    </div>
    
    
</template>

<style scoped lang="scss">
:deep(.el-text.el-text--primary){
    cursor: pointer;
}
    .video{
        height: 200px;
        width: 200px;
        // border: 1px solid #ccc;
        margin:auto ;
        margin-bottom: 10px;
    }
    .img {
        margin-top: 10px;
    }
    .perview {
        text-align: center;
        object-fit: contain;
        border: 1px solid #ccc;
        min-height: 200px;
        .img{
            margin: auto;
        }
    }
    .canvas{
        height: 200px;
        width: 200px;
    }
</style>