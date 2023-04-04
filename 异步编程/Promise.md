# Promise

promise介绍与基本使用

promiseApi

Promise关键问题

promise自定义封装

## 1.1、Promise

- Promise是一门新的技术（ES6）

- Promise是JS中进行异步编程的新解决方案

  旧方案是单纯使回调函数

## 1.2、具体表达

- 从语法上来说：Promise是一个构造函数

- 从功能上来说，Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 1.3、异步编程

- fs文件操作
- 数据库操作
- Ajax
- 定时器
- Promise

## 1.4指定回调函数的方式更加灵活

旧的：必须在启动异步任务前指定

Promise：启动异步任务===》返回Promise对象===》给Promise对象绑定回调函数（甚至可以在异步任务结束后指定/多个）

## 1.5、支持链式调用，可以解决回调地狱

什么是回调地狱？

- 回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件

会到地狱的缺点？

- 不便于阅读
- 不便于异常处理

解决方法？

- promise链式调用

# 2、Promise的使用

因为Promise是一个构造函数，所以可以直接new Promise(),里面接收的是一个函数，函数里面有两个参数，回调函数成功的回调，回调函数失败的回调，具体如下：

```
let p = new Promise((resolve, reject) => {
​        setTimeout(() => {
​          let n = rando(1, 100)
​          if (n < 30) {
​            resolve()
​          } else {
​            reject()
​          }
​        }, 300)
​      })
​      p.then(() => {
​        alert("恭喜你中奖了")
​      }, () => {
​        alert("未中奖")
​      })
```

## 2.1、promise除了封装异步操作之外，还可以获取异步任务中成功和失败的结果值

```
 p.then((value) => {
​        alert("恭喜你中奖了,中奖号码："+value)
​      }, () => {
​        alert("未中奖,未中奖号码："+value)
​      })
```

用Promise来封装一个异步的操作，然后在成功的时候调用resolve,失败的时候调用reject，把失败的原因传给reject，等到then方法调用回调函数的代码

## 2.2、promie案例

```
// 引入fs文件
const { log } = require("console")
const fs=require("fs")
let p = new Promise((resolve,reject)=>{
  fs.readFile("./tex.txt",(err,data)=>{
​    // 如果出错
​    if(err) reject(err)
​    // 如果成功
​    resolve(data)
  })
})
// 调用then
p.then(value=>{
  console.log(value.toString());
},reson=>{
  console.log(reson);
})
```

## 2.3、封装ajax

```
var btn = document.querySelector("button")
​    btn.onclick = function () {
​      let p = new Promise((resolve, reject) => {
​        // 创建对象
​        var xhr = new XMLHttpRequest()
​        // 初始化
​        xhr.open("get", "http://127.0.0.1:8080/user"
​        // 发送数据
​        xhr.send()
​        // 注册事件
​        xhr.onreadystatechange = function () {
​          if (xhr.readyState === 4) {
​            if (xhr.status >= 200 && xhr.status < 300) {
​              let data = JSON.parse(xhr.response)
​              // console.log();/
​              resolve(data.name)
​            } else {
​              reject(xhr.status)
​            }
​          }
​        }
​      },
​        
​      )
​      p.then((name) => {
​          console.log(name);
​        }, (value) => {
​          console.log(value);
​        })
​    }
```

## 2.4、nodejs读取文件

```
//如果不是全局就得引入fs成员
const fs = require("fs");
//fs  核心模块中提供了一个 fs.readFile方法,来读取指定目录下的文件
//fs.resdFile 三个参数
// 1,读取文件的路径
// 2,读取文件的编码格式
// 3,当文件读取完成,调用这个callback回调函数来读取文件的结果
//第一个参数文error对象   第二个参数 才是读取成功的结果
// fs.readFile('./http/111.txt','utf-8',function(error,data){
// console.log(error); //如果err为null说明读取成功了,没有出错
// console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
// });
fs.readFile("./http/111.txt", "utf-8", function(error, data) {
  // console.log(error);  //如果err为null就说明读取成功了,没有出错
  // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
  //  用error来判断文件是否读取成功
  if (error) return console.log("读取文件失败,内容是" + error.message);
  console.log("读取文件成功,内容是" + data);
});
```