<script setup >
import { computed, ref, watchEffect, onMounted, watchPostEffect } from "vue"
// import { v4 } from 'uuid'
// import PDFObject from "pdfobject"
// import JsonViewer from 'vue-json-viewer'
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

const jsonData = {
    total: 25,
    limit: 10,
    skip: 0,
    links: {
        previous: undefined,
        next: function () { },
    },
    data: [
        {
            id: '5968fcad629fa84ab65a5247',
            firstname: 'Ada',
            lastname: 'Lovelace',
            awards: null,
            known: [
                'mathematics',
                'computing'
            ],
            position: {
                lat: 44.563836,
                lng: 6.495139
            },
            description: `Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,
            chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer,
            the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,
            and published the first algorithm intended to be carried out by such a machine.
            As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.`,
            bornAt: '1815-12-10T00:00:00.000Z',
            diedAt: '1852-11-27T00:00:00.000Z'
        }, {
            id: '5968fcad629fa84ab65a5246',
            firstname: 'Grace',
            lastname: 'Hopper',
            awards: [
                'Defense Distinguished Service Medal',
                'Legion of Merit',
                'Meritorious Service Medal',
                'American Campaign Medal',
                'World War II Victory Medal',
                'National Defense Service Medal',
                'Armed Forces Reserve Medal',
                'Naval Reserve Medal',
                'Presidential Medal of Freedom'
            ],
            known: null,
            position: {
                lat: 43.614624,
                lng: 3.879995
            },
            description: `Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992)
            was an American computer scientist and United States Navy rear admiral.
            One of the first programmers of the Harvard Mark I computer,
            she was a pioneer of computer programming who invented one of the first compiler related tools.
            She popularized the idea of machine-independent programming languages, which led to the development of COBOL,
            an early high-level programming language still in use today.`,
            bornAt: '1815-12-10T00:00:00.000Z',
            diedAt: '1852-11-27T00:00:00.000Z'
        }
    ]
}

// onMounted(() => {
//     let previews_view = document.querySelector('.previews_view')
//     console.dir(previews_view);
// })

watchPostEffect(() => {
    if (props.mime === 'application/pdf' || props.mime === 'text/plain' || props.mime === 'application/json') {
        let previews_view = document.querySelector('.previews_view')
        console.dir(previews_view);
    }
})


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
            <template
                v-if="props.mime === 'application/pdf' || props.mime === 'application/json' || props.mime.includes('text')">
                <object class="pd-5  previews_view" :data="props.src" :type="props.mime" style="color: aqua;"></object>
            </template>
            <template v-else-if="props.mime.includes('mp4')">
                <video controls :src="urlOrigin + props.src" type="video/mp4" class="pd-5  previews_view_video"></video>
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
        color: #fff;
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

    pre {
        color: #fff !important;
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
    // background-color: #011522;
    border-radius: 8px;
    z-index: 1;
}

// .tools {
//     display: flex;
//     align-items: center;
//     padding: 9px;
//     border-bottom:1px solid #666;
// }

// .circle {
//     padding: 0 4px;
// }

// .box {
//     display: inline-block;
//     align-items: center;
//     width: 10px;
//     height: 10px;
//     padding: 1px;
//     border-radius: 50%;
// }

// .red {
//     background-color: #ff605c;
// }

// .yellow {
//     background-color: #ffbd44;
// }

// .green {
//     background-color: #00ca4e;
// }
</style>