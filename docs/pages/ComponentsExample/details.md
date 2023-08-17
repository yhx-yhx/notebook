# details 样例

<br/>



<script setup>
import Details from  "../../pages/Components/message/details.vue"
</script>

- 自定义属性

<Details name="自定义属性" content="我是详情内容" color="#fff" bgcColor="rgb(137, 85, 186)" />
<Details name="自定义属性" content="我是详情内容" color="#fff" bgcColor="rgb(137, 85, 186)" :showArrow ="false" />

- 通过插槽来实现

<Details open>
    <template #name> <span>插槽来实现name</span></template>
    <template #content> <div>插槽来实现详情内容</div></template>
</Details>

<br/>

- 插槽及属性

| 属性（插槽） | 默认值 |   类型    |
| :----------: | :----: | :-------: |
|     name     |   -    | 属性/插槽 |
|   content    |   -    | 属性/插槽 |
|    color     |  #000  |   属性    |
|   bgcColor   |  #fff  |   属性    |
|   showArrow |  true  |   属性    |
|   arrowIcon   |  inherit  |   属性    |

