// 引入express
const express=require("express")

// 创建应用对象
let app=express()

// 创建路由规则
// request是请求报文的封装
// response是对响应报文的封装
app.post("/service",(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-allow-Origin','*');
    // 设置响应
    response.send("服务器已响应");
})

// 监听端口启动
app.listen(8080,()=>{
    console.log("服务器已经启动，8080端口监听中");
})