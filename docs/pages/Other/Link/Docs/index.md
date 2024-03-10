
#  组件库

<br/>

<BaseInfo :data="datazujian"/>

<br/>

# vue 全家桶

<br/>

<BaseInfo :data="datakuangjia"/>

# other

<br/>

<BaseInfo :data="dataother"/>

# 第三方插件

<br/>

<BaseInfo :data="datadisanfang"/>


<script setup>
    import BaseInfo from "../../../Base/Components/common/baseInfo.vue"

    const datazujian = [
    {
        link:"https://element-plus.org/zh-CN/",
        title:"ElementUI",
        icon:"https://element-plus.org/images/element-plus-logo-small.svg"
    },
      {
        link:"https://vant-contrib.gitee.io/vant/#/zh-CN",
        title:"Vant",
        icon:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"
    },  {
        link:"https://quasar.dev/docs",
        title:"quasar",
        icon:"https://cdn.quasar.dev/logo-v2/favicon/favicon-32x32.png"
    }, {
        link:"https://echarts.apache.org/zh",
        title:"Echarts官方",
        icon:"https://echarts.apache.org/favicon.ico",
    }, {
        link:"https://www.makeapie.cn/echarts",
        title:"makeapie",
        icon:"https://www.makeapie.cn/favicon.ico"
    }
]

const datakuangjia =
[
 {
   link: "https://cn.vuejs.org/",
   title: "Vue3",
   icon: "https://cn.vuejs.org/images/logo.png"
 },
 {
   link: "https://router.vuejs.org/zh/",
   title: "Vue Router",
   icon: "https://cn.vuejs.org/images/logo.png"
 },
 {
   link: "https://pinia.vuejs.org/zh/",
   title: "Pinia",
   icon: "https://pinia.vuejs.org/logo.png"
 }
]

const dataother = 
[
 {
   link: "https://snippet-generator.app/",
   title: "代码片段",
   icon: "https://snippet-generator.app/favicon.ico"
 },
 {
   link: "https://www.emojiall.com/zh-hans/all-emojis",
   title: "emjoy",
   icon: "https://www.emojiall.com/favicon.ico"
 }
]

const datadisanfang = [
 {
   link: "http://mockjs.com/",
   title: "mock",
   icon: "http://mockjs.com/assets/img/logo-2.svg"
 },
 {
   link: "https://dayjs.fenxianglu.cn/",
   title: "dayjs",
   icon: "https://dayjs.fenxianglu.cn//assets/favicon.png"
 },
 {
   link: "https://www.runoob.com/",
   title: "菜鸟教程",
   icon: "https://www.runoob.com/favicon.ico"
 },
 {
   link: "https://developer.mozilla.org/zh-CN/",
   title: "mdn",
   icon: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
 },
 {
   link: "https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",
   title: "emojis",
   icon: "😀"
 }
]

</script>