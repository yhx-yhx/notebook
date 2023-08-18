# icon 用例

> 这个组件毫无卵用 局限性太大了
<br/>

## 
<script setup>

import Icon from "../../pages/Components/common/icon.vue"
</script>

<Icon iconClass="line" color="red" fontSize="40px"/>
<Icon iconClass="polygon" color="blueviolet" fontSize="40px"/>
<Icon iconClass="marker_none" color="aqua" fontSize="40px"/>
<Icon iconClass="marker_focus" color="burlywood" fontSize="40px"/>
<Icon iconClass="polyline" color="yellowgreen" fontSize="40px"/>
<Icon iconClass="space_query" color="greenyellow" fontSize="40px"/>
<Icon iconClass="point" color="hotpink" fontSize="40px"/>
<Icon iconClass="jiaodian" color="olivedrab" fontSize="40px"/>
<Icon iconClass="wancheng" color="purple" fontSize="40px"/>
<Icon iconClass="cuowu" color="wheat" fontSize="40px"/>
<Icon iconClass="full-screen" color="violet" fontSize="40px"/>

## 

::: details 具体实现代码

```vue
<script setup >
import { computed } from "vue"

// 仅支持 iconfont
const props = defineProps(['iconClass','fontSize','color'])

// iconclass
const icon = computed(()=> `iconfont icon-${props.iconClass}`)


</script>

<template>
    <i :class="icon"></i>
</template>

<style scoped lang="scss">
// public 本地资源
@import "/iconfont/iconfont.css";

.iconfont {
    font-size:v-bind('props.fontSize');
    color:v-bind('props.color');
}

</style>

```

:::
