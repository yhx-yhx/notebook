<script setup >
import { ref } from "vue"
</script>

<template>
    <h3>flex-direction : row</h3>
    <br>
    <div class="base-flex-1">
        <div class="row">3</div>
        <div class="row">3</div>
        <div class="row">3</div>
        <div class="row">3</div>
    </div>
    <h3>flex-direction : column</h3>
    <br>
    <div class="base-flex-2">
        <div class="col">3</div>
        <div class="col">3</div>
    </div>

    <h3> order </h3>
    <pre>感觉可以用 order 来动态实现排序( 从小到大 ) </pre>
    <br>
    <div class="base-flex-3">
        <article>article</article>
        <nav>nav</nav>
        <aside>aside</aside>
    </div>
</template>

<style scoped lang="scss">
.base-flex-1 {
    display: flex;
    flex-direction: row;

    .row {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        margin: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        margin: auto;
        text-align: center;
        line-height: 100px;
        padding: 10px;
    }
}

.base-flex-2 {
    display: flex;
    flex-direction: column;

    .col {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        margin: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        margin: auto;
        padding: 10px;
        text-align: center;
        line-height: 100px;
        margin-bottom: 10px;
    }
}

.base-flex-3 {
    display: flex;
    width: 100%;
    height: 120px;
    color: #000;
    border-radius: .5em;
    border: 1px solid #ccc;
    padding: .5em;

    article {
        flex: 1;
        order: 2;
        background-color: aqua;
    }

    nav {
        width: 200px;
        order: 1;
        background-color: #fff;
    }

    aside {
        width: 200px;
        order: 3;
        background-color: blueviolet;
    }

    * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>