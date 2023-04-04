// 引入express
// const { request, response } = require("express")
const express = require("express")
// const express = require("express")
// 创建应用
let app=express()

// 创建路由规则
app.all("/service",(request,response)=>{

     // 设置响应头
     response.setHeader("Access-Control-allow-Origin", "*")

    // 设置响应
    let data={
        name:"张三"
    }
    let str=JSON.stringify(data)
    // 向客户端发送响应
    response.send(str)
})

// 监听端口
app.listen("8080",()=>{
    console.log("8080端口已经启用");
})