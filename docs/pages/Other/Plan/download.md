## 一般常用 下载方法

<br/>

```javascript
function  Download(url, title="文件名字"){
    const elLink = document.createElement('a')
    elLink.href = url //下载地址
    elLInk.download = title //所下载文件名字
    document.body.appendChild(elLink)
    elLink.style.display = "none";
    elLink.click()
    document.removeChild(elLink)
} 
```













## canvas 转成 png 下载

<br/>

```javascript
<canvas id="canvas"></canvas>
    <script>
        let canvas = document.querySelector('#canvas');
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
        canvas.addEventListener('click', (e, title = "文件") => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = title;
            document.body.appendChild(link);
            link.click()
            document.body.removeChild(link);
        })
    </script>
```