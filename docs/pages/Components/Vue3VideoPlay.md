## Vue3VideoPlaye

> **props  And Event 详见** [npm vue3-video-play](https://www.npmjs.com/package/vue3-video-play/v/1.3.1-beta.1)

## 安装

npm安装：

```txt
npm i vue3-video-play --save
```

yarn安装：

```txt
yarn add vue3-video-play --save
```



## 开始使用

### 全局使用

```txt
import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App)

import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
app.use(vue3videoPlay)

app.mount('#app') 
```





## 事件示例

```vue
<template>
  <div>
      <vue3VideoPlay 
      width="800px"
      title="钢铁侠"
      :src="options.src"
      :poster="options.poster"
      :type="options.type"
      @play="onPlay"
      @pause="onPause" 
      @timeupdate="onTimeupdate" 
      @canplay="onCanplay" />
  </div>

</template>


<script setup>
import { reactive } from 'vue';

const options = reactive({
  src: "https://go.dreamwq.com/videos/IronMan.mp4", //视频源
  poster: '', //封面
  type:'m3u8'
})
const onPlay = (ev) => {
  console.log('播放')
}
const onPause = (ev) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}
</script>
```