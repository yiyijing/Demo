# BOM

# 1、BOM概述

浏览器对象模型（BOM）使 JavaScript 有能力与浏览器"对话"。

浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是BOM的方法和属性。

浏览器对象模型（BOM）可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作，常见的BOM对象如下：

。Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象
。Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
。Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
。History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效
。Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息
这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。

# 2、Window对象

## 2.1弹出框

**JavaScript 有三种类型的弹出框：警告框、确认框和提示框。**

### 2.1.1、警告框

如果要确保信息传递给用户，通常会使用警告框。当警告框弹出时，用户将需要单击“确定”来继续。

```
window.alert("sometext");
```

注意：window.alert() 方法可以不带 window 前缀来写。

### 2.1.3、确认框

如果您希望用户验证或接受某个东西，则通常使用“确认”框。

当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行。

如果用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false。

```
window.confirm("sometext");
```

注意：window.confirm() 方法可以不带 window 前缀来编写。

### 2.1.4、提示框

如果您希望用户在进入页面前输入值，通常会使用提示框。

当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行。

如果用户单击“确定”，该框返回输入值。如果用户单击“取消”，该框返回 NULL。

**语法**

```javascript
window.prompt("sometext","defaultText");
1
```

```
window.prompt() 方法可以不带 window 前缀来编写。

var person = prompt("请输入您的姓名", "比尔盖茨");
if (person != null) {
    console.log(person);
}
```

## 2.2、定时事件

**JavaScript 可以在时间间隔内执行，这就是所谓的定时事件（ Timing Events）。**

window 对象允许以指定的时间间隔执行代码，这些时间间隔称为定时事件。

通过 JavaScript 使用的有两个关键的方法

- setTimeout(*function*, *milliseconds*)

  在等待指定的毫秒数后执行函数。

- setInterval(*function*, *milliseconds*)

  等同于 setTimeout()，但持续重复执行该函数。

setTimeout() 和 setInterval() 都属于 window 对象的方法。

### 2.2.1、延时器

**setTimeout() 方法：延时器**

```
window.setTimeout(function, milliseconds);
```

注意：window.setTimeout() 方法可以不带 window 前缀来编写。

- 第一个参数是要执行的函数。
- 第二个参数指示执行之前的毫秒数。

### 2.2.2、定时器

setInterval() 方法：定时器

setInterval() 方法在每个给定的时间间隔重复给定的函数。

window.setInterval(function, milliseconds);
注意：window.setInterval() 方法可以不带 window 前缀来写。

- 第一个参数是要执行的函数。
- 第二个参数每个执行之间的时间间隔的长度。

## 2.3、常用窗口属性

两个属性可用用于确定浏览器窗口的尺寸。

这两个属性都以像素返回尺寸：

- window.innerHeight - 浏览器窗口的内高度（以像素计）
- window.innerWidth - 浏览器窗口的内宽度（以像素计）

对于 Internet Explorer 8, 7, 6, 5：

- document.documentElement.clientHeight
- document.documentElement.clientWidth

或

- document.body.clientHeight
- document.body.clientWidth

## 2.4、其它窗口方法

### 2.4.1、window.open() ：打开新的窗口**

```
window.open(URL,name,specs,replace);
```

![image-20201022094734710](https://img-blog.csdnimg.cn/img_convert/786bc5b7eacc1a8aba149c0741484aee.png)

### 2.4.2、window.close() ：关闭当前窗口

```
window.close();
```

### 2.4.3、window.moveTo() ：移动当前窗口

```
window.moveTo(x,y);
```

# 3、Navigator对象

Navigator代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器，由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了，一般我们只会使用userAgent来判断浏览器的信息，userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent，如下代码：

```
var ua = navigator.userAgent;
console.log(ua);
```

谷歌浏览器：

   。 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36

火狐浏览器：

​    。Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0

IE11浏览器：

​     。 Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

IE10浏览器：

​      。Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE9浏览器：

​      。Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE8浏览器：

​       。Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE7浏览器：

​      。Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)
于是乎，我们就可以实现对浏览器类型的判断：

```
var ua = navigator.userAgent;
if (/firefox/i.test(ua)) {
    alert("你是火狐浏览器");
} else if (/chrome/i.test(ua)) {
    alert("你是谷歌浏览器");
} else if (/msie/i.test(ua)) {
    alert("你是IE5-IE10浏览器");
} else if ("ActiveXObject" in window) {
    alert("你是IE11浏览器");
}
```

注意：在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了，如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息，比如：ActiveXObject

# 4、Location对象

Location对象中封装了浏览器的地址栏的信息，如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）

```
console.log(location);          //输出location对象
console.log(location.href);     //输出当前地址的全路径地址
console.log(location.origin);   //输出当前地址的来源
console.log(location.protocol); //输出当前地址的协议
console.log(location.hostname); //输出当前地址的主机名
console.log(location.host);     //输出当前地址的主机
console.log(location.port);     //输出当前地址的端口号
console.log(location.pathname); //输出当前地址的路径部分
console.log(location.search);   //输出当前地址的?后边的参数部分
```

## 4.1、修改地址：

location = "https://www.baidu.com";

location.href = "https://www.baidu.com";

## 4.2、常用方法

### 4.2.1、assign()：

assign()：用来跳转到其它的页面，作用和直接修改location一样

```javascript
location.assign("https://www.baidu.com");
```

### 4.2.1、reload()：

reload()：用于重新加载当前页面，作用和刷新按钮一样，如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面

```
location.reload(true);
```

### 4.2.3、replace()：

replace()：可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，它不会生成历史记录，不能使用回退按钮回退

```
location.replace("https://www.baidu.com");
```

# 5、History对象

History对象可以用来操作浏览器向前或向后翻页

```
console.log(history);           //输出history对象
console.log(history.length);    //可以获取到当成访问的链接数量
```

![image-20201022114945012](https://img-blog.csdnimg.cn/img_convert/3075d1de3bdaf4848f9da17f494d8d8e.png)

## 5.1、常用方法

### 5.1.1、back()：

back()：可以回退到上一个页面，作用和浏览器的回退按钮一样

```
history.back();
```

### 5.1.2、forward()：

forward()：可以跳转到下一个页面，作用和浏览器的前进按钮一样

```
history.forward();
```

### 5.1.3、go()：

go()：可以用来跳转到指定的页面，它需要一个整数作为参数

- 1：表示向前跳转一个页面，相当于forward()
- 2：表示向前跳转两个页面
- -1：表示向后跳转一个页面，相当于back()
- -2：表示向后跳转两个页面

# 6、Screen对象

Screen 对象包含有关客户端显示屏幕的信息。

> 注意：没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象。

Screen对象描述
每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。

## 6.1、Screen对象属性

属性	描述
availHeight	返回显示屏幕的高度 (除 Windows 任务栏之外)。
availWidth	返回显示屏幕的宽度 (除 Windows 任务栏之外)。
bufferDepth	设置或返回调色板的比特深度。
colorDepth	返回目标设备或缓冲器上的调色板的比特深度。
deviceXDPI	返回显示屏幕的每英寸水平点数。
deviceYDPI	返回显示屏幕的每英寸垂直点数。
fontSmoothingEnabled	返回用户是否在显示控制面板中启用了字体平滑。
height	返回显示屏幕的高度。
logicalXDPI	返回显示屏幕每英寸的水平方向的常规点数。
logicalYDPI	返回显示屏幕每英寸的垂直方向的常规点数。
pixelDepth	返回显示屏幕的颜色分辨率（比特每像素）。
updateInterval	设置或返回屏幕的刷新率。
width	返回显示器屏幕的宽度。
