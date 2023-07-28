<script setup >
import { ref, watchPostEffect } from "vue"
import { v4 } from 'uuid'
import PDFObject from "pdfobject"
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
        type: String,
        required: true
    },
    mime: {
        type: String,
        default: 'pdf'
    },
    name: {
        type: String,
        default: 'name'
    }
})
const uuid = ref(v4())
const pdfViewDom = ref()
watchPostEffect(() => {
    if (PDFObject.supportsPDFs) {
        if (pdfViewDom.value) {
            PDFObject.embed(props.src, '#' + 'pdf' + uuid.value)
        }
    }
})

// const urlString = import.meta.url
// const url = new URL(urlString)
// const urlOrigin = url.origin

</script>

<template>
    <div class="previews_ctn" :style="{ width: props.width }">
        <template v-if="props.mime.includes('pdf')">
            <div :id="'pdf' + uuid" ref="pdfViewDom" class="previews_view"></div>
        </template>
        <!-- <template v-else-if="props.mime.includes('mp4')">
            <video controls :src="urlOrigin + props.src" type="video/mp4" class="previews_view_video"></video>
        </template> -->
        <template v-else>
            <img class="previews_img" :src="$props.src" alt="">
        </template>
        <div class="name">{{ $props.name }} </div>

    </div>
</template>

<style scoped lang="scss">
.previews_ctn {
    display: flex;
    flex-direction: column;

    .previews_view {
        height: calc(var(--hc-dialog-height) - 30px);
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
</style>