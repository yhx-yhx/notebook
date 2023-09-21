/**
 * 静态资源服务部署
 * express.static
 * */ 
const express = require('express');


const app = express()
app.use('/static',express.static('./static/index.html'));
app.listen(8080, () => {
    console.log('静态资源启动');
})