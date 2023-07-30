<script setup>
import { onMounted } from "vue"
class Flipper {
    constructor(node, currentTime, nextTime) {
        this.isFlipping = false;
        this.duration = 600;
        this.flipNode = node;
        this.frontNode = node.querySelector(".front");
        this.backNode = node.querySelector(".back");
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
    }
    setFrontTime(time) {
        this.frontNode.dataset.number = time;
    }
    setBackTime(time) {
        this.backNode.dataset.number = time;
    }
    flipDown(currentTime, nextTime) {
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
        this.flipNode.classList.add("running");
        setTimeout(() => {
            this.flipNode.classList.remove("running");
            this.isFlipping = false;
            this.setFrontTime(nextTime);
        }, this.duration);
    }
}
const getTimeFromDate = (date) => date
    .toTimeString()
    .slice(0, 8)
    .split(":")
    .join("");
onMounted(() => {
    let flips = document.querySelectorAll(".flip");
    let now = new Date();
    let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
    let nextTimeStr = getTimeFromDate(now);
    let flippers = Array.from(flips).map((flip, i) => new Flipper(flip, nowTimeStr[i], nextTimeStr[i]));
    setInterval(() => {
        let now = new Date();
        let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
        let nextTimeStr = getTimeFromDate(now);
        for (let i = 0; i < flippers.length; i++) {
            if (nowTimeStr[i] === nextTimeStr[i]) {
                continue;
            }
            flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
        }
    }, 1000);
})

</script>
<template>
    <div class="clock">
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <em class="divider">:</em>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <em class="divider">:</em>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* 定义整个body样式 */
// body {
//     display: flex;
//     justify-content: center;
//     /* 在弹性盒对象的 <div> 元素中的各项周围留有空白 */
//     align-items: center;
//     /* 居中对齐弹性盒的各项 <div> 元素*/
//     height: 100vh;
// }

.clock {
    margin-top: 10px;
    display: flex;
    /* 将整个时钟定义为弹性容器，弹性容器内包含了一个或多个弹性子元素。 */
}

.clock .divider {
    /* 定义时钟间的“ ：”冒号 */
    font-size: 1.4em;
    line-height: 50px;
    font-style: normal;
}

.clock .flip {
    /* 定义共六个flip代表时钟数字 */
    position: relative;
    width: 60px;
    height: 46px;
    margin: 2px;
    font-size: 1.4em;
    line-height: 44px;
    text-align: center;
    background: white;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    // -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.4));
}

.clock .flip .digital::before,
.clock .flip .digital::after {
    /* 定义时钟翻下前以及翻下后 */
    position: absolute;
    content: attr(data-number);
    left: 0;
    right: 0;
    color: white;
    background: black;
    overflow: hidden;
    perspective: 160px;
}

.clock .flip .digital::before {
    /* 时钟翻下前 */
    top: 0;
    bottom: 50%;
    border-radius: 4px 4px 0 0;
}

.clock .flip .digital::after {
    /* 时钟翻下后 */
    top: 50%;
    bottom: 0;
    line-height: 0;
    border-radius: 0 0 4px 4px;
}

.clock .flip .back::before,
.clock .flip .front::after {
    /* 定义层叠 */
    z-index: 1;
}

.clock .flip .back::after {
    /* 翻下后覆盖住之前的页 */
    z-index: 2;
}

.clock .flip .front::before {
    /* 循环下翻遮住之前页 */
    z-index: 3;
}

.clock .flip .back::after {
    /* 定义上下两分页的动画 */
    transform-origin: center top;
    transform: rotateX(0.5turn);
}

.clock .flip.running .front::before {
    transform-origin: center bottom;
    -webkit-animation: frontFlipDown 0.6s ease-in-out;
    animation: frontFlipDown 0.6s ease-in-out;
    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.clock .flip.running .back::after {
    -webkit-animation: backFlipDown 0.6s ease-in-out;
    animation: backFlipDown 0.6s ease-in-out;
}

@-webkit-keyframes frontFlipDown {
    to {
        transform: rotateX(0.5turn);
    }
}

@keyframes frontFlipDown {
    to {
        transform: rotateX(0.5turn);
    }
}

@-webkit-keyframes backFlipDown {
    to {
        transform: rotateX(0);
    }
}

@keyframes backFlipDown {
    to {
        transform: rotateX(0);
    }
}
</style>
