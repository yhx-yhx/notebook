# 天气组件
::: warning 浪费我一个小时 
    和风天气 API 免费版每天有1000次请求的限制，如果需要使用付费版，请自行申请。
    如果需要使用付费版，请自行申请。
    
    如果需要使用付费版，请自行申请。
    
    如果需要使用付费版，请自行申请。
    
    如果需要使用付费版，请自行申请。

    如果是免费订阅，将上述API Host更改为devapi.qweather.com。参考免费订阅可用的数据。
:::
<script setup>
    import axios from 'axios'
    import weather from '../../pages/Components/message/weather.vue'
    import {ref } from "vue"
import {dayjs} from "element-plus"
    const temp = ref(null) // now temp
    const time  = ref(null) // now time
    const icon = ref(null) //icon
    
    const getnowWeather = async () => {
        try {
            let res = await axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=f842bed3886f405e8d9142755248e804')
            console.log(res);
            temp.value = res.data.now.temp
            time.value = dayjs().format('YYYY-MM-DD')
            icon.value = res.data.now.icon

        } catch (error) {
            console.warn(error)
        }
    }
    getnowWeather()
    

//         if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position)=> {
//     console.log(position);
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//     // axios.get(`https://api.map.baidu.com/reverse_geocoding/v3/?ak=8IBN1OxuUNKPpO3UHAcTxsyiqGutrecI&output=json&coordtype=wgs84ll&location=${latitude},${longitude}&callback=showPub`).then(res=>{
//     //     console.log(res);
//     // })
      
//   }, function(error) {
//     console.log(error.message);
//   });
// } else {
//   console.log("浏览器不支持地理定位功能");
// }


// mdn


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("More or less " + crd.accuracy + " meters.");
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
</script>

<br/>

<weather :temp="temp" :time="time" :icon="icon"/>

<br />
