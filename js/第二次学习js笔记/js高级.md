# js高级

# 1、异常

在ES3之前JavaScript代码执行的过程中，一旦出现错误，整个JavaScript代码都会停止执行，这样就显的代码非常的不健壮。

在Java或C#等一些高级语言中，都提供了异常处理机制，可以处理出现的异常，而不会停止整个应用程序。

从ES3开始，JavaScript也提供了类似的异常处理机制，从而让JavaScript代码变的更健壮，即使执行的过程中出现了异常，也可以让程序具有了一部分的异常恢复能力。

当错误发生时，JavaScript 提供了错误信息的内置 error 对象。

# 1、Error 对象

error 对象提供两个有用的属性：name 和 message 。

## 1.1、Error 对象属性

| 属性    | 描述                             |
| ------- | -------------------------------- |
| name    | 设置或返回错误名                 |
| message | 设置或返回错误消息（一条字符串） |

**Error Name Values**

error 的 name 属性可返回六个不同的值：

| 错误名         | 描述                          |
| -------------- | ----------------------------- |
| EvalError      | 已在 eval() 函数中发生的错误  |
| RangeError     | 已发生超出数字范围的错误      |
| ReferenceError | 已发生非法引用                |
| SyntaxError    | 已发生语法错误                |
| TypeError      | 已发生类型错误                |
| URIError       | 在 encodeURI() 中已发生的错误 |

## 1.2、异常捕捉

ES3开始引入了 try-catch 语句，是 JavaScript 中处理异常的标准方式

```
try {
    // 可能发生异常的代码
} catch (error) {
    // 发生错误执行的代码
} finally {
    // 无论是否出错都会执行的代码
}
```

在 try…catch 中，try 中一旦出现错误则其它语句不能执行，如果不出现错误则 catch 中的语句不会执行。

Javascript 参考其它编程语言，也提供了一种 finally 语句：不管 try 中的语句有没有错误，在最后都会执行 finally 中的语句。也就是说，try 中语句不发生错误执行完毕后会执行 finally 中的语句，try 中的语句发生错误，则执行 catch中的语句，catch 中的语句执行完毕后也会执行 finally 中的语句。

案例演示：

```
try {
    console.log(a);
    console.log("a未定义肯定报错，你看不见我");
} catch (error) {
    // 发生错误执行的代码
    console.log(error);
} finally {
    // 无论是否出错都会执行的代码
    console.log("finally 执行了 ...")
}
```

![image-20201023080345639](https://img-blog.csdnimg.cn/img_convert/6d678270bcee5c15d0e826cb9c4adb5d.png)

在JavaScript中，如果添加了 finally 语句，则 catch 语句可以省略。但是如果没有 catch 语句，则一旦发生错误就无法捕获这个错误，所以在执行完 finally 中的语句后，程序就会立即停止了。所以，在实际使用中，最好一直带着 catch 语句。如果你写了 catch 语句，则finally 语句也是可以省略的。

## 1.2、异常捕获

#### 1.2.1、Eval 错误

EvalError 指示 eval() 函数中的错误。更新版本的 JavaScript 不会抛出任何 EvalError，请使用 SyntaxError 代替。

案例演示：

```
try {
    eval("alert('Hello)");   // 缺少 ' 会产生错误
} catch (error) {
    console.log(error)
}
```

![image-20201023081303304](https://img-blog.csdnimg.cn/img_convert/3c0561b704e79191f5e4ceda413e1d73.png)

#### 1.2.2、范围错误

RangeError 会在您使用了合法值的范围之外的数字时抛出。

案例演示：您不能将数字的有效位数设置为 500。

```
var num = 1;
try {
    num.toPrecision(500);   // 数无法拥有 500 个有效数
} catch (error) {
    console.log(error)
}
```

![image-20201023081001501](https://img-blog.csdnimg.cn/img_convert/adaaaf76a0a8ef4a9d70b8bbb5109297.png)

### 1.2.3、引用错误

假如您使用（引用）了尚未声明的变量，则 ReferenceError 会被抛出：

案例演示：

```
var x;
try {
    x = y + 1;   // y 无法被引用（使用）
} catch (error) {
    console.log(error)
}
```

![image-20201023081145369](https://img-blog.csdnimg.cn/img_convert/3a0ccee2ef764c308a9279d68a32fc16.png)

#### 1.2.4、语法错误

假如您计算带语法错误的代码，会 SyntaxError 被抛出：

```
try {
    eval("alert('Hello)");   // 缺少 ' 会产生错误
} catch (error) {
    console.log(error)
}
```

![image-20201023081303304](https://img-blog.csdnimg.cn/img_convert/3c0561b704e79191f5e4ceda413e1d73.png)

### 1.2.5、类型错误

假如您使用的值不在期望值的范围之内，则 TypeError 被抛出：

案例演示：

```
var num = 1;
try {
    num.toUpperCase();   // 您无法将数字转换为大写
} catch (error) {
    console.log(error)
}
```

![image-20201023081357388](https://img-blog.csdnimg.cn/img_convert/f9f32b39e9d5fe8c4c8abe4a5baa2d20.png)

### 1.2.6、URI 错误

假如您在 URI 函数中使用非法字符，则 URIError 被抛出：

案例演示：

```
try {
    decodeURI("%%%");   // 您无法对这些百分号进行 URI 编码
} catch (error) {
    console.log(error)
}
```

![image-20201023081458426](https://img-blog.csdnimg.cn/img_convert/d20e2e247438b6abbcb0ebb86a85d1da.png)

## 1.3、异常抛出

在大部分的代码执行过程中，都是出现错误的时候，由浏览器(javascript引擎)抛出异常，然后程序或者停止执行或被try…catch 捕获。

然而有时候我们在检测到一些不合理的情况发生的时候也可以主动抛出错误，请使用 throw 关键字抛出来主动抛出异常。

注意事项：

。thow后面就是我们要抛出的异常对象，在以前的时候都是出现错误的时候浏览器抛出异常对象，只是现在是我们自己主动抛出的异常对象。
。只要有异常对象抛出，不管是浏览器抛出的，还是代码主动抛出，都会让程序停止执行。如果想让程序继续执行，则有也可以用try…catch来捕获。
。每一个错误类型都可以传入一个参数，表示实际的错误信息。
。我们可以在适当的时候抛出任何我们想抛出的异常类型。throw new SyntaxError("语法错

### 1.3.1、主动抛出内置异常

```
/*该函数接收一个数字，返回它的平方。*/
function foo(num) {
    if (typeof num == "number") {
        return num * num;
    } else {
        throw new TypeError("您输入的是一个非法数字！")
    }
}

console.log(foo(4));
console.log(foo("abc"));
```

![image-20201023082421480](https://img-blog.csdnimg.cn/img_convert/e007286652aaaa25c0a3cfc3cdf4bdaa.png)

### 1.3.2主动抛出自定义异常

我们不仅仅可以抛出js内置的错误类型的对象，也可以自定义错误类型，然后抛出自定义错误类型的对象。

如果要自定义错误类型，只需要继承任何一个自定义错误类型都可以，一般直接继承Error即可。

```
/*自定义错误*/
function MyError(message) {
    this.message = "注意：这是自定义的错误"
    this.name = "自定义错误";
}
MyError.prototype = new Error();

try {
    throw new MyError("注意：这是自定义错误类型")
} catch (error) {
    console.log(error.message)
}
```

![image-20201023082719743](https://img-blog.csdnimg.cn/img_convert/8c8dd5b1b84a1446075ad73a3f9e8414.png)

# 2、JSON

JSON：JavaScript Object Notation（JavaScript 对象标记法），它是一种存储和交换数据的语法

当数据在浏览器与服务器之间进行交换时，这些数据只能是文本，JSON 属于文本并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。

## 2.1、JSON语法

在json中，每一个数据项，都是由一个键值对（或者说是名值对）组成的，但是键必须是字符串，且由双引号包围，而值必须是以下数据类型之一：

- 字符串（在 JSON 中，字符串值必须由双引号编写）
- 数字
- 对象（JSON 对象）
- 数组
- 布尔
- null

JSON 的值不可以是以下数据类型之一：

- 函数
- 日期
- undefined

因为 JSON 语法由 JavaScript 对象标记法衍生而来，所以很少需要其它额外的软件来处理 JavaScript 中的 JSON。

通过 JavaScript，您能够创建对象并向其分配数据，就像这样：

```
var person = {"name": "zhangsan", "age": 62, "city": "BeiJing"};
console.log(person);
```

![image-20201023091704109](https://img-blog.csdnimg.cn/img_convert/d3060f7c44592e4b2e269ec2f290155a.png)

## 2.2、JSON数据类型

### 2.2.1、JSON 字符串

JSON 中的字符串必须用双引号包围

### 2.2.2、JSON 数字

JSON 中的数字必须是整数或浮点数。

### 2.2.3、JSON 对象

#### JSON 对象

JSON 中的值可以是对象，JSON 中作为值的对象必须遵守与 JSON 对象相同的规则。

```
{
    "employee": {"name": "Bill Gates", "age": 62, "city": "Seattle"}
}
```

### 2.2.4、JSON 数组

JSON 中的值可以是数组。

### 2.2.5、JSON 布尔

JSON 中的值可以是 true/false。

### 2.2.6、JSON null

JSON 中的值可以是 null。

```json
{"middlename": null}
```

### 3.1、JSON字符串转JS对象

```
var jsonStr = '{"name":"孙悟空","age":18,"gender":"男"}';
var obj = JSON.parse(jsonStr);
console.log(obj);
```

![image-20201023093124404](https://img-blog.csdnimg.cn/img_convert/75043196321febfa7ff2044a01c36251.png)

注意 ：JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错

## 3.2、JS对象转JSON字符串

JSON.stringify()：可以将一个JS对象转换为JSON字符串，需要一个js对象作为参数，会返回一个JSON字符串

案例演示：

```
var obj = {name: "猪八戒", age: 28, gender: "男"};
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);
```

![image-20201023093346336](https://img-blog.csdnimg.cn/img_convert/f7dc872335de8f09109ea0c9b9f798b4.png)

# 4、AJAX

AJAX 是一种用于创建快速动态网页的技术，通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## 4.1的XMLHttpRequest对象

**AJAX 的核心是 XMLHttpRequest 对象。** 所有现代浏览器都支持 XMLHttpRequest 对象。

XMLHttpRequest 对象用于幕后同服务器交换数据，这意味着可以更新网页的部分，而不需要重新加载整个页面。

```
variable = new XMLHttpRequest();
```

老版本的 Internet Explorer（IE5 和 IE6）使用 ActiveX 对象：

```
variable = new ActiveXObject("Microsoft.XMLHTTP");
```

但是需要注意的是，出于安全原因，现代浏览器不允许跨域访问，这意味着尝试加载的网页和 XML 文件都必须位于相同服务器上。 

## 4.2AJAX的XMLHttpRequest对象方法

方法	描述
new XMLHttpRequest()	创建新的 XMLHttpRequest 对象
abort()	取消当前请求
getAllResponseHeaders()	返回头部信息
getResponseHeader()	返回特定的头部信息
open(method, url, async, user, psw)	规定请求method：请求类型 GET 或 POST
url：文件位置
async：true（异步）或 false（同步）
user：可选的用户名称
psw：可选的密码
send()	将请求发送到服务器，用于 GET 请求
send(string)	将请求发送到服务器，用于 POST 请求
setRequestHeader()	向要发送的报头添加标签/值对

## 4.3、AJAX的XMLHttpRequest对象属性

属性	描述
onreadystatechange	定义当 readyState 属性发生变化时被调用的函数
readyState	保存 XMLHttpRequest 的状态。
0：请求未初始化
1：服务器连接已建立
2：请求已收到
3：正在处理请求
4：请求已完成且响应已就绪
responseText	以字符串返回响应数据
responseXML	以 XML 数据返回响应数据
status	返回请求的状态号
200: "OK"
403: "Forbidden"
404: "Not Found"
如需完整列表请访问 Http 消息参考手册
statusText	返回状态文本（比如 “OK” 或 “Not Found”）
://blog.csdn.net/qq_38490457/article/details/109257751

# 5、cookie

Cookie 是一些数据，存储于你电脑上的文本文件中，当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息，Cookie 的作用就是用于解决 “如何记录客户端的用户信息”：

当用户访问 web 页面时，它的名字可以记录在 cookie 中。
在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
Cookie 以名/值对形式存储，如下所示：

```
username=zhangsan
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中，服务端通过这种方式来获取用户的信息。

JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 Cookie。

## 5.1、Cookie创建

```
document.cookie = "username=zhangsan";
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除。

```
document.cookie = "username=zhangsan; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

```
document.cookie = "username=zhangsan; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

## 5.1、Cookie读取

JavaScript 中，读取 cookie 如下所示：

document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value;

```
document.cookie = "username=zhangsan";
var cookies = document.cookie;
console.log(cookies);
```

![image-20201023124113003](https://img-blog.csdnimg.cn/img_convert/7f5f050ac3395ad2d8e04a83f52b9f17.png)

## 5.2、Cookie修改

JavaScript 中，修改 cookie 如下所示：

使用 document.cookie 将旧的 cookie 将被覆盖就是修改。

```
document.cookie = "username=zhangsan";
document.cookie = "username=lisi";
var cookies = document.cookie;
console.log(cookies);
```

![image-20201023124645689](https://img-blog.csdnimg.cn/img_convert/fe094b63b05824c69ed5147e180b298b.png)

## 5.3、Cookie删除

JavaScript 中，删除 cookie 如下所示：

删除 cookie 非常简单，您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

```
document.cookie = "username=zhangsan";
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
var cookies = document.cookie;
console.log(cookies);
```

![image-20201023124936436](https://img-blog.csdnimg.cn/img_convert/ed1e94b6c81dc809c2dd0a8436ed2c6f.png)

## 5.4、Cookie值设置函数

/**
 * ```
     * Cookie值设置函数
     * @param cname     cookie名称
     * @param cvalue    cookie值
     * @param exdays    过期天数
       */
       function setCookie(cname, cvalue, exdays) {
       var d = new Date();
       d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
       var expires = "expires=" + d.toGMTString();
       document.cookie = cname + "=" + cvalue + "; " + expires;
       }
    ```

    

## 5.5、Cookie值获取函数

 * ```
 /**

     * Cookie值获取函数
     * @param cname     cookie名称
     * @returns {string}
       */
       function getCookie(cname) {
       var name = cname + "=";
       var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
    }
 ```
 
 # 6、WebStorage
 
 