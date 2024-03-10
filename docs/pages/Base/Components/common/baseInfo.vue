<script setup>
import { ref } from 'vue';
const props = defineProps({
    data: Array,
})
</script>
<template>
    <div class="base-info-wrapper">
         <a class="base-info" v-for="(item,index) in data" :key="index" :href="item.link" target="_blank">
            <img class="icon" v-if="item.icon" :src="item.icon"/>
            <div class="description text-ellipsis" v-if="item.description">{{ item.description }}</div>
            <div class="link text-ellipsis" v-if="item.link" :title="item.title">{{ item.title }}</div>
        </a>
    </div>
   
</template>

<style lang="scss" scoped>
a{
    
}
.text-ellipsis {
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 width: 100%;
}
.base-info-wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
 .base-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px;
    &:hover {
        box-shadow: 0px 0px 10px #88888877;
    }
    .icon{
        width:80px;
        height:80px;
    }
    .link{
        text-align: center;
        cursor: pointer;
    }
    .description{
        color:#88888890;


    }
 }

}
</style>
