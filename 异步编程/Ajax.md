# Ajax

异步的js和xml

优势：

- 不用刷新可以向服务器发送请求
- 允许根据用户事件来更新部分页面内容

缺点：

- 没有历史记录，不能回退
- 不利于SEO
- 存在跨域问题（同源）

# 1、XML

可扩展标记语言

被设计用来传输和存储数据

xml和html类似，不同的是html里面都是预定义标签，xml是没有预定义标签，全是自定义标签，现在使用都是JSON

# 2、http请求报文响应报文

超文本传输协议，大多数都是http协议，协议是一种约定、规则

向游览器发送请求会向服务器发送请求报文，服务器响应会响应报文

- 请求报文(4部分)：

  (1)行：请求类型（get、post）+url+http协议版本

  (2)请求头：host:""+cookie：""+content-type:""+User-Agent:""

  (3)空行：固定，必须有

  (4)体：如果是get,请求体是空的，如果是post,请求体可以不为空

- 响应报文

  （1）行：协议版本+响应状态码（200:ok,401:未授权、403:、500：服务器内部错误、）+响应状态字符串

  （2）头：Content-Type:""+Content-length：""+Content-encoding:""

  （3）空行：必须要有

  （4）体：主要得返回结果

# 3、手写Ajax

## 创建对象

const xhr=new  XMLHttpRequest()

## 初始化，设置请求的方法和url

xhr.open(method,url)

## 发送

xhr.send

## 事件绑定

处理事件服务端的返回结果

xhr.onreadystatechange=function(){

​        if(xhr.readyState===4){

​                if(xhr.status===200){

​           log(xhr.status)//状态码

​           log(xhr.statusText)//状态码字符串

​           log(xhr.getAllResponseHeaders())//返回所有的响应头

​           log(xhr.response)//响应体

}

}

}

注意：

readyState

-  0 － （未初始化）还没有调用send()方法
-  1 － （载入）已调用send()方法，正在发送请求
-  2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
-  3 － （交互）正在解析响应内容
-  4 － （完成）响应内容解析完成，可以在客户端调用了

status:

-  404 not found  			
- 200 OK
- 301 永久重定向
- 302 临时重定向

# 4、ajax设置post的请求体

## post的请求体

参数放在send里面,例如：

xhr.send("a=100&b=200&c=300")

## get请求体

参数放在初始化，设置方法和url里面,例如：

xhr.open("GET","http://127.0.0.1:8080/service?a=100&b=200&c=300")

# 5、设置请求体

xhr.setRequestHeader("Content-Type":"application/x-www-form")

第一个参数：请求体内容的类型

第二个参数：参数查询字符串

还可以自定义请求头信息，

但是服务器响应的时候要使用:response.setHeader("Access-Control-Allow-Header","*")

app.all:是指可以接收任何类型的请求

# 6、服务器端JSON数据

服务器端：在日常生活中，我们想服务器发送数据，服务器响应回来的都是字符串，我们传递对象的数据可以使用JSON.shringify(),将对象转为字符串再进行传递

游览器端：客户端接收到服务器返回的数据，数据是字符串类型的，我们想要得到数据可以使用JSON.parse()，还有一种方法：xhr.responseType="json",直接可以用

# 7、ie缓存对ajax

我们在发送ajax的时候，当我们改变了服务器里面的数据，chrom游览器可以识别到，ie游览器由于缓存问题，不能及时将结果返回给游览器，可以用xhr.open("get","http://127.0.0.1:8080/service"+Date.now())，实际工作中是不需要我们自己加的，可以使用一个工具

# 8、超时

// 超时设置

​      xhr.timeout=2000

​      // 超时回调

​      xhr.ontimeout=function(){

​        alert("网络请求异常，请稍后重试")

​      }

​      // 网络异常回调

​      xhr.onerror=function(){

​        alert("无网络")

​      }

# 9、取消请求（）

需要解决的：？本人电脑不可用abort()?

使用abort方法可以手动取消ajax请求

![image-20230330142222528](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230330142222528.png)







# 同源策略

同源：协议、域名：端口号必须完全相同

违背同源就是跨域

代码同源策略里面的简写未能运行成功，报错

JSONP

是非官方的跨域解决方案，只支持get，不支持post

网页中有一些标签天生具有跨域特性，如img、script、link

JSONP就是利用script标签的跨域能力来实现的

