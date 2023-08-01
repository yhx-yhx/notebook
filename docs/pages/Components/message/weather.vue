<script setup>
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { ref, defineProps, computed, watchEffect } from 'vue';
const props = defineProps({
    icon: { type: String, default: '304' },
    temp: String,
    time: String,
    position: Array,
    text: String,
    // county: String,
    // icon: String,
    // iconColor: String,
    // iconSize: String,
    // iconPosition: String,
})


const iconClass = computed(() => {
    return `qi-${props.icon}-fill`
})
// const iconSrc = computed(() => `https://a.hecdn.net/img/common/icon/202106d/${props.icon}.png`)

const cityClick = ref(!1)
const countyClick = ref(!1)
// 获取更多信息
const getMoreInfo = () => {
    ElMessage.warning('无法获取更多信息了')
}

// 聚焦

const focus = (className) => {
    setTimeout(() => {
        const el = document.querySelector(className)
        el.focus()
    })
        , 10
}


// position

const emits = defineEmits(['update:position'])


</script>
<template>
    <div class="card">
        <div class="container">
            <!-- img -->
            <!-- <img ref="imgQiRef" :src="iconSrc" alt=""> -->
            <!-- icon -->
            <i class="qi-common" :class="iconClass"></i>
            <div>{{ text }}</div>
            <!-- <div class="cloud front">
                <span class="left-front"></span>
                <span class="right-front"></span>
            </div> -->
            <!-- <span class="sun sunshine"></span>
            <span class="sun"></span>
            <div class="cloud back">
                <span class="left-back"></span>
                <span class="right-back"></span>
            </div> -->
        </div>

        <div class="card-header">
            <!-- 选择城市 -->
            <div title="点我选择城市" @click="cityClick = !cityClick; focus('.input-city')"><span v-if="!cityClick">{{ position[0]
                ? position[0] : '--' }}</span><input v-else class="input-city" type="text" placeholder="请输入"
                    @blur="cityClick = !cityClick"></div>
            <div title="点我选择城市" @click="countyClick = !countyClick; focus('.input-county')"><span v-if="!countyClick">{{
                position[1] ? position[1] : '--' }}</span><input v-else class="input-county" type="text"
                    placeholder="请输入" @blur="countyClick = !countyClick"></div>
            <span>{{ time }}</span>
        </div>

        <span class="temp">{{ temp ? temp : '--' }}℃ </span>

        <div class="temp-scale" @click="getMoreInfo">
            <span>获取更多信息</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 350px;
    height: 235px;
    position: relative;
    padding: 25px;
    background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , #FFFFFF;
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
}


@keyframes sunshines {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

@keyframes clouds {
    0% {
        transform: translateX(15px);
    }

    50% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(15px);
    }
}

.container {
    width: 250px;
    height: 250px;
    position: absolute;
    right: -35px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
    flex-direction: column;

    i {
        height: 50px;
        width: 50px;
    }

    .qi-common {
        height: 100px;
        width: 100px;
        font-size: 6em;
        transition: all 1s linear;
        // animation: clouds 2s infinite;

        &:hover {
            color: #0085ff;
        }
    }
}


.cloud {
    width: 250px;
}

.front {
    padding-top: 45px;
    margin-left: 25px;
    display: inline;
    position: absolute;
    z-index: 11;
    animation: clouds 8s infinite;
    animation-timing-function: ease-in-out;
}

.back {
    margin-top: -30px;
    margin-left: 150px;
    z-index: 12;
    animation: clouds 12s infinite;
    animation-timing-function: ease-in-out;
}

.right-front {
    width: 45px;
    height: 45px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -25px;
    z-index: 5;
}

.left-front {
    width: 65px;
    height: 65px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
}

.right-back {
    width: 50px;
    height: 50px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -20px;
    z-index: 5;
}

.left-back {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
}

.sun {
    width: 120px;
    height: 120px;
    background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 60px;
    display: inline;
    position: absolute;
}

.sunshine {
    animation: sunshines 2s infinite;
}


.card-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-header span:first-child {
    word-break: break-all;
    font-weight: 800;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
}

.card-header span:last-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.33);
}

.temp {
    position: absolute;
    left: 25px;
    bottom: 12px;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: rgba(87, 77, 51, 1);
}

.temp-scale {
    width: fit-content;
    padding: 0 10px;
    height: 36px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.06);
    border-radius: 9px;
    border: 1px solid transparent;
    transition: border .6s linear;

    &:hover {
        border: 1px solid #ccc;
    }
}

.temp-scale span {
    font-weight: 700;
    font-size: 13px;
    line-height: 134.49%;
    color: rgba(87, 77, 51, 0.66);
}
</style>
