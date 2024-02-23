<script setup >
import { onMounted } from 'vue';
// 正方形
const createSquare = () => {
    //获取canvas
    const canvas = document.getElementById('square')
    //画布对象
    const app = canvas.getContext('2d')
    //填充颜色
    app.fillStyle = 'skyblue';
    //绘制正方形
    app.fillRect(0, 0, 200, 200);
}
// onMounted(() => {
//     createSquare()
// })


// 长方形
const createRectangle = () => {
    //获取元素
    const canvas = document.getElementById('rectangle');
    //创建画布
    const app = canvas.getContext('2d');
    //设置填充颜色
    app.fillStyle = 'red';
    //绘制图形
    app.fillRect(0, 0, 200, 400);
}

// onMounted(() => {
//     createRectangle()
// })

// 空心矩形
const createEmptyRectangle = () => {
    let canvas = document.getElementById('EmptyRectangle');
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.strokeStyle = 'red';
    //设置边框宽度
    app.lineWidth = 50;
    //设置边角类型可以设置：bevel斜角，round圆角，miter尖角
    // app.lineJoin = 'bevel';
    // app.lineJoin = 'round';
    // app.lineJoin = 'miter';
    //默认尖角  在不设置lineJoin值时
    //参数x,y,w,h
    app.strokeRect(50, 50, 400, 400);
}

// onMounted(() => {
//     createEmptyRectangle()
// })

// 绘制圆环
const createRing = () => {
    let canvas = document.getElementById('ring');
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.strokeStyle = 'red';
    //设置边框宽度
    app.lineWidth = 40;
    //绘制圆的函数arc()圆心,(x,y),r,sAngle起始角，
    // eAngle结束角（弧度制），
    // （可选counterclockwise true顺时针）
    app.arc(200, 200, 160, 0, 2 * Math.PI);
    //画
    app.stroke();
}

// onMounted(() => {
//     createRing()
// })

// 绘制实心圆
function createCircle() {
    let canvas = document.getElementById('circle');
    let app = canvas.getContext('2d');
    //填充画布颜色
    //开始路径
    app.beginPath();
    app.fillStyle = 'red';
    //默认颜色黑色
    // app.lineWidth = 40
    app.arc(200, 200, 140, 0, 2 * Math.PI);
    app.closePath();
    app.fill()

}

// onMounted(() => {
//     createCircle()
// })

// 绘制三角形
function createTriangle() {
    //获取元素
    let canvas = document.querySelector('#triangle');
    //创建画布
    let app = canvas.getContext('2d');
    //设置填充颜色
    app.fillStyle = 'green';
    //绘制图形
    app.fillRect(0, 0, 500, 500);
    //开始划线
    app.beginPath();
    //设置线宽
    app.lineWidth = 10;
    //从这点开始
    app.moveTo(250, 0);
    //到这点
    app.lineTo(500, 250);
    //接着到这点
    app.lineTo(0, 250)
    //设置划线的颜色
    app.strokeStyle = 'red'
    //将起始点与结束点相连
    app.closePath();
    //画线
    app.stroke();
}
// onMounted(() => {
//     createTriangle()
// })

// 渐变效果局部填充
function createGradient() {
    //获取元素
    let canvas = document.getElementById('canvas');
    //创建画布
    let app = canvas.getContext('2d');
    //创建渐变效果（x0,y0,x1,y1）
    let gradient = app.createLinearGradient(0, 0, 500, 500);
    //开始绘制参数1为位置，2渐变颜色
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(0.5, 'green')
    gradient.addColorStop(1, 'blue')
    //渐变填充
    app.strokeStyle = gradient;
    //边框宽度
    app.lineWidth = 50;
    //绘制图形
    app.strokeRect(100, 100, 300, 300);
    // let canvas = document.querySelector('#canvas');
    // let app = canvas.getContext('2d');
    // let gradient = app.createLinearGradient(0, 0, 500, 500);
    // gradient.addColorStop(0, ' #6666ff');
    // gradient.addColorStop(0.5, " #ffb366");
    // gradient.addColorStop(1, " #4d4dff");

    // app.strokeStyle = gradient;
    // app.lineWidth = 50;
    // app.strokeRect(100, 100, 300, 300)
}

// onMounted(() => {
//     createGradient()
// })

// 渐变效果全面填充
function createLinearGradient() {
    //获取元素
    let canvas = document.getElementById('LinearGradient');
    //创建画布
    let app = canvas.getContext('2d');
    //创建渐变
    let gradient = app.createLinearGradient(0, 0, 500, 500)
    //设置
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'green');
    //设置颜色
    app.fillStyle = gradient;
    //绘制图形
    app.fillRect(0, 0, 500, 500);
}

// onMounted(() => {
//     createLinearGradient()
// })
// 某一区域变成透明
function createRegionalTransparency() {
    //创建画布
    let canvas = document.querySelector('#RegionalTransparency').getContext('2d');
    //设置填充颜色
    canvas.fillStyle = 'red';
    //设置填充区域
    canvas.fillRect(0, 0, 500, 500);
    //清楚区域(x0,y0,x,y)初始值 宽高
    canvas.clearRect(200, 200, 100, 100);
}

// onMounted(() => {
//     createRegionalTransparency()
// })

// 文字填充
function createTextFill() {
    let canvas = document.getElementById('textfill').getContext('2d');
    canvas.fillStyle = 'red'
    canvas.font = '23px CascadiaMono';
    //设置基线
    canvas.textBaseline = 'top';
    //设置文字位置
    canvas.textAlign = 'left';

    //fillText填充文本 参数一：text文本，参数2：（x,y）(相对于画布)，参数3：Maxheight文字最大高度
    canvas.fillText('今天星期五，明天星期六,再有一天我就要放假了', 1, 100)
    canvas.strokeRect(0, 0, 500, 500);
}
// onMounted(() => {
//     createTextFill()
// })


// 文字颜色渐变（文字描边）
function createTextGradient() {
    let canvas = document.getElementById('TextGradient').getContext('2d');
    let gradient = canvas.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'pink');
    canvas.strokeStyle = gradient;
    canvas.font = '40px CascadiaMono';
    canvas.textAlign = 'left';
    canvas.textBaseline = 'top';
    canvas.strokeText('这是一个canvas渐变效果', 50, 200);
}

// onMounted(() => {
//     createTextGradient()
// })

// 图片填充
function createImageFill() {
    //创建画布
    let canvas = document.getElementById('imgfill').getContext('2d');
    //创建图片对象
    let img = new Image();
    //引入一张本地图片
    img.src = 'test.jpg';
    //加载图片
    img.onload = () => {
        //创建规则
        let pat = canvas.createPattern(img, 'no-repeat');
        //指定填充样式
        canvas.fillStyle = pat;
        canvas.fillRect(0, 0, 600, 600)
    }
}
// onMounted(() => {
//     createImageFill()
// })


// 图片缩放
// 环
const createyh = () => {
    let el = document.getElementById('yh')
    let ctn = el.getContext('2d')
    ctn.beginPath()
    ctn.fillStyle = 'blueviolet';
    // 圆心x，y 半径 圆弧开始角度 终止角度 顺时针 false 逆时针 true 
    ctn.arc(150, 70, 40, 0, Math.PI * 2, true)
    ctn.lineWidth = '20'
    ctn.strokeStyle = "blueviolet"
    ctn.stroke()
    ctn.fillStyle = "#000"
    // ctn.fillText('三角形', 50, 50)
}

// onMounted(() => {
//     createyh()

// })
</script>

<template>
    <!-- <div class="flex">
        <div>
            <h4>0-1绘制正方形</h4>
            <canvas id="square"></canvas>
            <br>
        </div>

        <div>
            <h4>圆形</h4>
            <canvas id="circle"></canvas>
            <br>
        </div>
        <div>
            <h4>三角形</h4>
            <canvas id="triangle"></canvas>
            <br>
        </div>
        <div>
            <h4>圆环</h4>
            <canvas id="yh"></canvas>
            <br>
        </div>
        <div>
            <h4>矩形</h4>
            <canvas id="rectangle"></canvas>
        </div>
    </div> -->
</template>

<style scoped lang="scss">
.flex {
    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
    justify-content: flex-start;

    div {
        border: 1px solid #ccc;
        border-radius: 1em;
        margin: auto;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        box-shadow: 0 0 1px 6px rgba(246, 231, 255, 0.67);

        canvas {
            margin: auto;
        }
    }
}
</style>