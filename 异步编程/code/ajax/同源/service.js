// 引入express
const express=require("express")

// 创建实例
let app=express()

// 创建路由规则
app.get("/service",(request,response)=>{
    response.setHeader("Access-Control-allow-Origin","*")
    response.send("/service返回的数据")
})


app.listen("9000",()=>{
    console.log("服务器9000端口已经启动");
})