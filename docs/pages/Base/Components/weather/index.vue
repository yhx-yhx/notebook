<script setup>
import axios from 'axios'
import weather from './weather.vue'
import { ref, onMounted, watchEffect, computed, reactive } from "vue"
import { dayjs } from "element-plus"
const options = reactive({
    temp: null, // now temp
    time: null, // now time
    icon: '304'  //icon
})
// 通过 ip 通过开发接口能力获取
const city = ref('天津') // city
const county = ref('河东区') // county

const position = computed({
    set: (value) => {
        city = value[0]
        county = value[1]
    }, get: () => ([city.value, county.value])
}) // position

// 获取天气资源

const getnowWeather = async () => {
    try {
        let res = await axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=f842bed3886f405e8d9142755248e804')
        //  console.log(res);
        options.temp = res.data.now.temp
        options.time = dayjs().format('YYYY-MM-DD')
        options.icon = res.data.now.icon
        options.text = res.data.now.text
    } catch (error) {
        console.warn(error)
    }
}

//  城市搜索
// const searchCity = async (location = "天津")=> {
//   try {
//      let res = await axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${location}&key=f842bed3886f405e8d9142755248e804`)
//      console.log(res);
//     //  options.temp = res.data.now.temp
//     //  options.time = dayjs().format('YYYY-MM-DD')
//     //  options.icon = res.data.now.icon
//     //  options.text = res.data.now.text
//      } catch (error) {
//         console.warn(error)
//      }
// } 

// searchCity()

onMounted(() => {
    getnowWeather()
})
</script>
<template>
    <weather v-bind="options" v-model:position="position" />
</template>

<style lang="scss" scoped></style>
