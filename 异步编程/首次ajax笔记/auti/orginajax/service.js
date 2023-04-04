// 1、引入express
const express =require('express')
// 2、创建应用对象
const app =express()
// 3、创建路由规则
// request 是对请求报文的封装
// response是对响应报文的封装
app.get('/service',(request,response)=>{
    // 设置响应体
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('HELLO AJAX')
})
// 4、监听端口启动服务set
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
})
