<script setup >
import { computed, ref, watchEffect } from "vue"
// import { v4 } from 'uuid'
// import PDFObject from "pdfobject"
const props = defineProps({
    height: {
        type: String,
        default: '100%'
    },
    width: {
        type: String,
        default: '100%'
    },
    src: {
        type: String
    },
    mime: {
        type: String,
    },
    name: {
        type: String,
        default: 'name'
    }
})

// const uuid = ref(v4())
// const pdfViewDom = ref()
// watchPostEffect(() => {
//     if (PDFObject.supportsPDFs) {
//         if (pdfViewDom.value) {
//             PDFObject.embed(props.src, '#' + 'pdf' + uuid.value)
//         }
//     }
// })

// const urlString = import.meta.url
// const url = new URL(urlString)
// const urlOrigin = url.origin


</script>

<template>
    <div class="previews_ctn" :style="{ width: props.width, height: props.height }">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <template v-if="props.src">
            <template v-if="props.mime === 'application/pdf'">
                <object class="pd-5  previews_view" :data="props.src" :type="props.mime"></object>
                <!-- <div :id="'pdf' + uuid" ref="pdfViewDom" class="previews_view"></div> -->
            </template>
            <template v-else-if="props.mime.includes('mp4')">
                <video controls :src="urlOrigin + props.src" type="video/mp4" class="pd-5  previews_view_video"></video>
            </template>
            <!-- txt -->
            <template v-else-if="props.mime.includes('txt')">
                <div>
                    qwqw
                </div>
            </template>
            <template v-else>
                <img class="pd-5 previews_img" :src="$props.src" alt="">
            </template>
        </template>
        <template v-else>
            <div class="empty_views">暂无数据</div>
        </template>

        <!-- <div class="name">{{ type }} </div> -->

    </div>
</template>

<style scoped lang="scss">
.previews_ctn {
    display: flex;
    flex-direction: column;
    border: 1px solid #666;

    .previews_view {
        min-height: 500px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border: 1px solid #ccc;
    }

    .previews_img {
        // display: block;
        // width:100%;
        // height: calc(var(--hc-dialog-height) - 30px);
        // margin: auto;
        object-fit: contain;
        // border: 1px solid #ccc;
    }

    .name {
        margin: auto;
        margin-top: 10px;
    }

    .previews_view_video {
        object-fit: fill;
    }
}

.pd-5 {
    padding: 5px;
}
.empty_views {
    min-height: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.previews_ctn {
    margin: 0 auto;
    background-color: #011522;
    border-radius: 8px;
    z-index: 1;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;
    border-bottom:1px solid #666;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}
</style>