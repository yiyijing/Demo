// 引入express
const express=require("express")
// 创建应用对象
let app=express()

// 创建路由规则
app.all("/service",(request,response)=>{
    // 设置响应头
    response.setHeader("Access-Control-allow-Origin","*")
    // 设置响应
    const data={
        name:"第一条数据"
    }
    let str=JSON.stringify(data)
    response.send(str)
})

// 监听端口
app.listen(8080,()=>{
    console.log("服务器已经启动，8080端口监听中");
})

