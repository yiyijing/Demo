const { log } = require("console")
function minReadeFile(path){
    return new Promise((resolve,reject)=>{
        // 读取文件
        require("fs").readFile(path,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
minReadeFile("./text.txt").then((value)=>{
console.log(value.toString());
},(value)=>{
    console.log(value);
})