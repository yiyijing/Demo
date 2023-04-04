// 引入express
const express=require("express")

// 创建实例
let app = express()

// 创建路由规则
app.get("/user",(request,response)=>{
    response.setHeader("Access-Control-allow-origin","*")
    let data={
        name:"张三",
        age:18
    }
    let str=JSON.stringify(data)
    response.send(str)
})
// 监听端口
app.listen("8080",()=>{
    console.log("8080端口已经启动");
})