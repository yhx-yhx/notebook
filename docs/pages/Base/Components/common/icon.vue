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
//  public 本地资源
@import "/iconfont/iconfont.css"; 

.iconfont {
    font-size:v-bind('props.fontSize');
    color:v-bind('props.color');
}

</style>