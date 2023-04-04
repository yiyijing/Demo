// 引入express
const express = require("express")

// 创建应用实例
let app = express()

// 创建路由规则
app.all("/service", (request, response) => {
    // 设置响应头
    response.setHeader("Access-Control-allow-Origin", "*")
    setTimeout(() => {
        // 设置响应
        const data = {
            name: "张三"

        }
        let str = JSON.stringify(data)
        response.send(str)
    },0)
})

// 监听端口
app.listen("8080", () => {
    console.log("8080端口已经打开");
})


