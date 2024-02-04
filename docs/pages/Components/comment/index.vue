<script setup >
// import Gitalk from "gitalk"
// import { inBrowser } from "vitepress"
// import 'gitalk/dist/gitalk.css';
// import { onMounted, ref } from "vue";


// // gitalk
// const commentRef = ref()
// let gitTalk
// const init = () => {
//     if (inBrowser) {
//         gitTalk = new Gitalk({
//             id: location.pathname, // 可选。默认为 location.href
//             // id: 'yhx-yhx',
//             owner: 'yhx-yhx', // GitHub repository 所有者
//             repo: 'notebook', // GitHub repo
//             clientID: 'b238faf6e921cca36fa7', // clientID
//             clientSecret: '7f350b01f16b92c4d43e7f3050156e68c2dd4a05', // clientSecret
//             admin: ['yhx-yhx'], // GitHub repo 所有者
//             labels: ['Gitalk'], // GitHub issue 标签
//             distractionFreeMode: false,
//             proxy: "https://gitalk.2045399856.workers.dev/?https://github.com/login/oauth/access_token",
//             createIssueManually: true //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
//         })
//         gitTalk.render('gitalk-page-container')
//     }
// }

// onMounted(init)

import Giscus from '@giscus/vue';


</script>

<template>
    <!-- <script src="https://giscus.app/client.js" data-repo="yhx-yhx/notebook" data-repo-id="R_kgDOJkptEw" data-category="Q&A"
        data-category-id="DIC_kwDOJkptE84Cc7Yx" data-mapping="pathname" data-strict="0" data-reactions-enabled="1"
        data-emit-metadata="0" data-input-position="top" data-theme="preferred_color_scheme" data-lang="zh-CN"
        data-loading="lazy" crossorigin="anonymous" async>
    </script> -->
    <Giscus src="https://giscus.app/client.js" id="Q&A" repo="yhx-yhx/notebook" repoId="R_kgDOJkptEw" category="Q&A"
        categoryId="DIC_kwDOJkptE84Cc7Yx" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="top"
        theme="preferred_color_scheme" lang="zh-CN" loading="lazy" />
</template>

<style scoped lang="scss">
.color-text-secondary.text-sm {
    display: none;
}
</style>