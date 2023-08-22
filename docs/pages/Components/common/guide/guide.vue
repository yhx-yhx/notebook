<script setup >
import { ElButton } from 'element-plus';
import { onMounted } from 'vue';
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps';


// const squareUrl = ref(require("../../../assets/background/引导页.png"));
//先定义一下
let driver;
//在DOM加载之后展示
onMounted(() => {
    driver = new Driver({//这里需要new一个实例出来
        animate: false,
        opacity: 0.75,
        padding: 10,
        allowClose: false,
        overlayClickNext: false,
        doneBtnText: "Done",
        //下面这些都是按钮名称
        closeBtnText: "Close",
        stageBackground: "#ffffff",
        nextBtnText: "Next",
        prevBtnText: "Previous"
        //有些事件,我这里不需要,所有没有引入.需要的朋友可以去官方查看
    });
})


const guide = () => {
    console.log('启动');
    driver.defineSteps(steps)
    driver.start()//启动!!!!!
}


</script>

<template>
      <div class="app-container">
        <div>引导页</div>
        <br>
        <aside>
          The guide page is useful for some people who entered the project for the first time. You can briefly introduce the
          features of the project. Demo is based on
          <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
        </aside>
        <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
          Show Guide
        </el-button>
        <div class="guide_test">
          <el-button id="hamburger-container" >hamburger-container</el-button>

          <el-button id="breadcrumb-container" >breadcrumb-container</el-button>

          <el-button id="header-search" >header-search</el-button>
          <el-button id="screenfull" >screenfull</el-button>
          <el-button id="size-select" >size-select</el-button>
          <el-button id="tags-view-container" >tags-view-container</el-button>
        </div>
        
      </div>
</template>

<style scoped lang="scss">
.app-container{
  div{
    font-size: 1.6em;
    font-weight: 700;
  }
}
.guide_test {
  margin-top: 20px;
  :deep(.el-button){
    margin-top: 10px;
  }
}
</style>