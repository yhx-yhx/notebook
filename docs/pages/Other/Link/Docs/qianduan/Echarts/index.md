### 安利好用的echartsdemo 案例

[https://ppchart.com/](https://ppchart.com/#/)

<BaseInfo :data="data"/>

<script setup>
    import BaseInfo from "../../../../../Base/Components/common/baseInfo.vue"

    const dataG = [
    {
        link:"https://ppchart.com/",
        title:"PPChart",
        icon:"https://ppchart.com/favicon.ico",
        description:"https://ppchart.com/",
    }
]
// TODO

let data = Array.from({length:40}).map((_,index)=>(dataG[0]))
</script>
