<script setup >
import { ref, onMounted } from "vue"
import Tree from "./index"
onMounted(() => {
    const data = [
        {
            "id": 1,
            "name": "root1",
            "children": [
                {
                    "id": 2,
                    "name": "child1",
                    "children": []
                },
                {
                    "id": 3,
                    "name": "child2",
                    "children": []
                }
            ]
        }
    ]

    // tree 渲染根节点
    const elem = '.xcxcx.container'

    // 节点点击事件
    function nodeClick(data, node, parent, level) {
        console.log(data, node, parent, level);
    }
    const tree = new Tree(data, elem, nodeClick);
    tree.render();
})
</script>

<template>
    <div class="xcxcx container"></div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 50vh;
}

li.hidden {
    display: none;
}
</style>