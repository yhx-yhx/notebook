## 西瓜视频播放器

[官网](http://v2.h5player.bytedance.com/)

简单使用学习demo



[西瓜视频生成器](http://v2.h5player.bytedance.com/generate/)

### 简单demo样例
<br/>

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name=viewport
        content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
    <meta name="referrer" content="no-referrer">
    <title>xgplayer</title>
    <style type="text/css">
        html,
        body {
            position: absolute;
            width: 50vw;
            height: 50vh;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        video {
            width: 400px;
            height: 300px;
        }
    </style>
</head>

<body>
    <video controls
        src="//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4"></video>
    <div id="mse"></div>
    <script src="//unpkg.byted-static.com/xgplayer/2.31.6/browser/index.js" charset="utf-8"></script>
    <script>
        let player = new Player({
            "id": "mse",
            "url": "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
            "playsinline": true,
            "whitelist": [
                ""
            ],
            "poster": "https://img2.baidu.com/it/u=1395980100,2999837177&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1673974800&t=5883b73148b9bf17ff1a70bb57469ead",
            "autoplay": false,
            "fluid": true,
            "playbackRate": [
                0.5,
                1,
                1.25,
                1.5,
                2,
                2.5,
                3
            ],
            "danmu": {
                "comments": [
                    {
                        "duration": 15000,
                        "id": "2",
                        "start": 3000,
                        "txt": "长弹幕长弹幕长弹幕",
                        "mode": "top"
                    },
                    {
                        "duration": 15000,
                        "id": "3",
                        "start": 4000,
                        "txt": "长弹幕长弹幕长弹幕",
                        "mode": "bottom"
                    },
                    {
                        "duration": 15000,
                        "id": "4",
                        "start": 5000,
                        "txt": "长弹幕长弹幕长弹幕",
                        "mode": "scroll"
                    },
                    {
                        "duration": 15000,
                        "id": "5",
                        "start": 8000,
                        "txt": "长弹幕长弹幕长弹幕",
                        "mode": "scroll"
                    }
                ],
                "area": {
                    "start": 0,
                    "end": 1
                },
                "closeDefaultBtn": false,
                "defaultOff": false,
                "panel": true
            },
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
            "screenShot": true,
            "download": true,
            "pip": true,
            "nativeTextTrack": [
                {
                    "src": "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/textTrack-1.vtt",
                    "label": "字幕1",
                    "default": true
                },
                {
                    "src": "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/textTrack-2.vtt",
                    "label": "字幕2",
                    "default": false
                }
            ],
            "keyShortcut": "on",
            "x5-video-player-type": "h5"
        });

    </script>
</body>

</html>
```



## 西瓜视频音乐播放器

[官网](http://v2.h5player.bytedance.com/music/)

demo
<br/>


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
    <meta name="referrer" content="no-referrer">
    <title>播放器</title>
    <style type="text/css">
      html, body {width:100%;height:100%;background:white;margin:auto;overflow: hidden;}
      body {background-image:url('//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/bg.jpg');background-size:100% 100%}
      #left {position:absolute;top:0;left:0;width:40%;height:100%;margin-left:10%;z-index:1;}
      #mask {position:absolute;left: 50%;top:0;width:50%;height:100%;-webkit-mask-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.6) 15%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 75%,rgba(255,255,255,.1) 85%,rgba(255,255,255,0) 100%);}
      #gc {height:100%;display: block;position: relative;}
      #mse {position:absolute;bottom:0;left:0;}
      #album {height:55%;background-image:url('//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-big.jpeg');background-size:60%;background-repeat:no-repeat;background-position:center left;}
      #info {font-size: 18px;line-height:40px;width:53%;color: white;}
      #info > div {font-size: 12px;line-height:16px;color: rgba(225,225,225,.8);}
      .xgplayer-lyric-item {
          display: block;
          text-align: center;
          line-height: 22px !important;
          font-size: 12px !important;
          color: rgba(225,225,225,.8) !important;
      }
      .xgplayer-lyric-item-active {
        color: rgb(49, 194, 124) !important;
      }
      #canvas {
        position:absolute;bottom:-5px;left:0;z-index:0;
        -webkit-mask-image:linear-gradient(to bottom,rgba(255,255,255,0.3) 0,rgba(255,255,255,.8) 70%,rgba(255,255,255,0.9) 100%);
      }
      .xgplayer-lrcWrap {
        border: 0px solid #ddd !important;
        height: 100% !important;
        padding: 0 !important;
      }
      .xgplayer-play {
        margin: -2px 0 0 !important;
      }
      .xgplayer-time {
        top: 50% !important;
      }
      .xgplayer-lrcForward {left: 0px !important;}
      .xgplayer-lrcBack {left: 0px !important;top: 75% !important;}
    </style>
  </head>
  <body>
    <div id="left">
		<div id="album"></div>
        <div id="info">
          脆弱一分钟
          <div>歌手：林宥嘉</div>
          <div>专辑：脆弱一分钟 </div>
        </div>
    </div>
    <div id="canvas">
            <canvas width="550" height="110"></canvas>
        </div>
    <div id="mask"><div id="gc"></div></div>

    <div id="mse"></div>
    <script src="//unpkg.byted-static.com/xgplayer/2.31.2/browser/index.js" charset="utf-8"></script>
    <script src="//unpkg.byted-static.com/xgplayer-music/2.1.7/browser/index.js" charset="utf-8"></script>
    <script type="text/javascript">
      let player = new window.Music({
          id: 'mse',
          url: [{src: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3', name: '林宥嘉·脆弱一分钟', poster: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-small.jpeg'}],
          volume: 0.8,
          width: window.innerWidth,
          height: 50
      });
      player.crossOrigin = "anonymous";
      let lyric = `[00:00.00] 脆弱一分钟\n[00:00.00] 作曲 : 林家谦\n[00:00.00] 作词 : 徐世珍/吴辉福\n[00:00.000]编曲：林家谦\n[00:00.000]时钟不要走\n[00:04.220]让我脆弱一分钟\n[00:07.440]要多久才能习惯被放手\n[00:15.800]马克杯空了 暖暖的温热\n[00:22.660]却还在我手中停留\n[00:27.960]\n[00:29.790]勇气不要走\n[00:32.200]给我理由再冲动\n[00:35.690]去相信爱情 就算还在痛\n[00:43.960]如果我不说不会有人懂\n[00:50.720]失去你我有多寂寞\n[00:55.610]还是愿意\n[00:57.580]付出一切仅仅为了一个好梦\n[01:03.980]梦里有人真心爱我 陪我快乐也陪我沉默\n[01:11.260]没有无缘无故的痛承受越多越成熟\n[01:18.630]能让你拥抱更好的我\n[01:25.030] 谁也不要走\n[01:28.270]应该是一种奢求\n[01:31.900]可是我只想 握紧你的手\n[01:39.780]我宁愿等候 也不愿错过\n[01:46.630]你对我微笑的时候\n[01:56.780]\n[02:18.910]还是愿意\n[02:21.320]用尽全力仅仅为了一个以后\n[02:27.870]哪怕生命并不温柔哪怕被幸福一再反驳\n[02:34.870]也要相信伤痕累累 其实只是在琢磨\n[02:42.070]能让你为之一亮 的我\n[02:53.910]\n[02:56.350]制作人：林宥嘉\n[02:57.750]制作助理：张婕汝\n[02:59.010]录音师：陈文骏、叶育轩\n[03:00.410]录音室：白金录音室\n[03:01.740]混音师：SimonLi @ nOiz\n[03:03.000]OP: Terence Lam Production & Co. (Warner/Chappell Music, HK Ltd.)\n[03:04.050]SP: Warner/Chappell Music Taiwan Ltd.\n[03:04.910]OP：Universal Ms Publ Ltd Taiwan\n`
      let nullText = 0;
      player.on('lyricUpdate', (res) => {
        console.log(res);
        if(res.lyric === '\n') {
        	nullText++;
        }
      });
      var an=player.analyze(document.querySelector('canvas'))
      an.style = {
        bgColor: '#c8c8c8',
        color: '#909099'
      }
      player.on('playing', function(){
        player.lyric (lyric, document.querySelector('#gc'));
        player.__lyric__.show();
        player.mode = 2;
      });
      document.getElementById("canvas").width = window.innerWidth;
      document.getElementById("canvas").height =  window.innerHeight * 0.36;
    </script>
  </body>
</html>

```

