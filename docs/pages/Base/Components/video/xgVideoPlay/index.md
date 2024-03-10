## 西瓜视频播放器测试用例

<script setup>
import xgVideoPlay from "./xgVideoPlay.vue"
import xgMusicPlay from "./xgMusicPlay.vue"
</script>

<client-only>

<xgVideoPlay/>

<br/>

<xgMusicPlay/>

</client-only>

::: warning 视频格式支持
 目前仅支持（hls，mp4，flv）
:::

<br/>

::: details 具体实现代码
::: code-group  

<<< ./xgVideoPlay.vue
<<< ./xgMusicPlay.vue

:::

<br/>




