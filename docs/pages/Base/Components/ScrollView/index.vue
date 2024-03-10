<script setup >
import { ref , onMounted} from "vue"
import { ElTable, ElTableColumn } from "element-plus"
const tableData = ref([  
  {  
    "date": "2016-05-02",  
    "name": "Tom",  
    "address": "189 Grove St, Los Angeles"  
  },  
  {  
    "date": "2017-02-15",  
    "name": "张三",  
    "address": "北京朝阳区三里屯路24号"  
  },  
  {  
    "date": "2018-09-10",  
    "name": "李四",  
    "address": "上海市黄浦区南京东路100号"  
  },  
  {  
    "date": "2019-11-23",  
    "name": "王五",  
    "address": "广州市天河区体育西路222号"  
  },  
  {  
    "date": "2020-04-29",  
    "name": "赵六",  
    "address": "深圳市南山区科技园路1号"  
  },  
  {  
    "date": "2021-07-18",  
    "name": "孙七",  
    "address": "杭州市西湖区文一路200号"  
  },  
  {  
    "date": "2022-03-14",  
    "name": "周八",  
    "address": "南京市鼓楼区中央路88号"  
  },  
  {  
    "date": "2023-01-30",  
    "name": "吴九",  
    "address": "成都市武侯区人民南路四段45号"  
  },  
  {  
    "date": "2024-08-19",  
    "name": "陈十",  
    "address": "武汉市江汉区建设大道558号"  
  },  
  {  
    "date": "2025-12-12",  
    "name": "杨十一",  
    "address": "天津市和平区南京路189号"  
  }  
])
onMounted(() => {
    setInterval(() => {
        tableData.value.push(tableData.value[0])
        tableData.value.shift()
    },1000)   
})

</script>

<template>
    <div class="container">
        <el-table :data="tableData" style="width: 100%" stripe >
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<style scoped lang="scss">
:deep(.el-table__inner-wrapper) {
    height: 300px;
}
.anim { 
    animation: animscroll 1s linear;
}
@keyframes animscroll {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }

}
</style>