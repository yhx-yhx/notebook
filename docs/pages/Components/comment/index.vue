<script setup >
import Gitalk from "gitalk"
import { inBrowser } from "vitepress"
import 'gitalk/dist/gitalk.css';
import { onMounted, ref } from "vue";


// gitalk
const commentRef = ref()
let gitTalk
const init = () => {
    if (inBrowser) {
        gitTalk = new Gitalk({
            id: location.pathname, // 可选。默认为 location.href
            // id: 'yhx-yhx',
            owner: 'yhx-yhx', // GitHub repository 所有者
            repo: 'notebook', // GitHub repo
            clientID: 'b238faf6e921cca36fa7', // clientID
            clientSecret: '7f350b01f16b92c4d43e7f3050156e68c2dd4a05', // clientSecret
            admin: ['yhx-yhx'], // GitHub repo 所有者
            labels: ['Gitalk'], // GitHub issue 标签
            distractionFreeMode: false,
            createIssueManually: true //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
        })
        gitTalk.render('gitalk-page-container')
    }
}

onMounted(init)

</script>

<template>
    <div id="gitalk-page-container"></div>
</template>

<style scoped lang="scss"></style>