
// 引入fs文件
const { log } = require("console")
const fs=require("fs")
let p = new Promise((resolve,reject)=>{
    fs.readFile("./tex.txt",(err,data)=>{
        // 如果出错
        if(err) reject(err)
        // 如果成功
        resolve(data)
    })
})
// 调用then
p.then(value=>{
    console.log(value.toString());
},reson=>{
    console.log(reson);
})