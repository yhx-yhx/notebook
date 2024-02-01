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

    <h3>flex-wrap</h3>
    <pre>默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排满，如何换行。</pre>
    <br>
    <!--  -->
    <h4>flex-wrap:nowrap</h4>
    <div class="base-flex-nowrap">
        <div class="row">1</div>
        <div class="row">2</div>
        <div class="row">3</div>
        <div class="row">4</div>
        <div class="row">5</div>
        <div class="row">6</div>
    </div>

    <h4>flex-wrap:wrap</h4>
    <div class="base-flex-wrap">
        <div class="row">1</div>
        <div class="row">2</div>
        <div class="row">3</div>
        <div class="row">4</div>
        <div class="row">5</div>
        <div class="row">6</div>
    </div>

    <h4>flex-wrap:reverse</h4>
    <div class="base-flex-wrap-reverse">
        <div class="row">1</div>
        <div class="row">2</div>
        <div class="row">3</div>
        <div class="row">4</div>
        <div class="row">5</div>
        <div class="row">6</div>
    </div>
</template>

<style scoped lang="scss">
.base-flex-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .row {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        margin: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.base-flex-2 {
    display: flex;
    flex-direction: column;

    .col {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        margin: auto;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-child {
            margin-top: 10px;
        }
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

.base-flex-nowrap {
    flex-wrap: nowrap;
    display: flex;
    width: 100%;
    height: 120px;
    color: #000;
    border-radius: .5em;
    border: 1px solid #ccc;
    padding: .5em;

    .row {
        width: 500px;
        height: 100px;
        background-color: #ccc;
        margin: auto;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.base-flex-wrap {
    margin-top: 1em;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    color: #000;
    border-radius: .5em;
    border: 1px solid #ccc;
    // padding: .5em;
    padding-bottom: 1em;

    .row {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        margin: auto;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1em;
    }
}

.base-flex-wrap-reverse {
    margin-top: 1em;
    flex-wrap: wrap-reverse;
    display: flex;
    width: 100%;
    color: #000;
    border-radius: .5em;
    border: 1px solid #ccc;
    // padding: .5em;
    padding-bottom: 1em;

    .row {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        margin: auto;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1em;
    }
}
</style>