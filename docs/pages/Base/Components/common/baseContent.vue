<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="previews_ctn">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <div class="main_ctn">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.previews_ctn {
    display: flex;
    flex-direction: column;
    border: 1px solid #666;
    width: 100%;
    height: fit-content;
    padding: 10px;

    .previews_view {
        min-height: 500px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border: 1px solid #ccc;
    }

    .previews_img {
        // display: block;
        // width:100%;
        // height: calc(var(--hc-dialog-height) - 30px);
        // margin: auto;
        object-fit: contain;
        // border: 1px solid #ccc;
    }

    .name {
        margin: auto;
        margin-top: 10px;
    }

    .previews_view_video {
        object-fit: fill;
    }
}

.pd-5 {
    padding: 5px;
}

.empty_views {
    min-height: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.previews_ctn {
    margin: 0 auto;
    background-color: #011522;
    border-radius: 8px;
    z-index: 1;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;
    border-bottom: 1px solid #666;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}
</style>
