# 天气组件
::: warning 浪费我一个小时 

    和风天气 API 免费版每天有1000次请求的限制，如果需要使用付费版，请自行申请。
    如果是免费订阅，将上述API Host更改为devapi.qweather.com。参考免费订阅可用的数据。
:::

[和风天气](https://dev.qweather.com/)


::: warning 图标问题
   图标问题 png 403 Forbidden 没权限 
:::
<script setup>
import axios from 'axios'
import weather from '../../pages/Components/message/weather.vue'
import {ref,onMounted,watchEffect,computed,reactive } from "vue"
import {dayjs} from "element-plus"
const options = reactive({
  temp:null, // now temp
  time:null, // now time
  icon:'304'  //icon
})
// 通过 ip 通过开发接口能力获取
const city = ref('天津') // city
const county = ref('河东区') // county

const position = computed({set:(value)=>{
  city = value[0]
  county = value[1]
},get:()=>([city.value, county.value])}) // position
    
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


<br/>

<weather v-bind="options" v-model:position="position" />

<br />
