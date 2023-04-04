# Javascript

。javascript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）

。脚本语言：不需要编译，运行过程中有js解释器（js引擎）逐行解释并执行

。现在也可以基于Node.js技术进行服务器端编程

# 1、javascript作用

![javascript作用](C:\Users\86173\Desktop\javascrpit\images\javascript作用.png)

## 1.2、html,css、js的关系

html/css标记语言------描述类语言

。HTML决定网页结构和内容（决定看到什么），相当于人的身体

。css决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服、化妆

js脚本语言---编程语言

。实现业务逻辑和页面控制（决定功能），相当于人的各种动作

## 1.3、游览器执行JS简介

游览器分为两部分：渲染引擎和JS引擎

。渲染引擎：用来解释HTML与CSS,俗称内核，比如chrome游览器的blink,老版本的webkit

。js引擎：也称JS解释器。用来读取网页中的Javascript代码，对其处理后运行，比如chorme游览器的v8

游览器本身并不会执行js代码，而是通过javascript引擎（解释器）来执行js代码，js引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以javascript语言为脚本语言，会逐行解释执行

## 2、javascript组成

分为：ECMAscript、DOM、BOM

## 2.1、ECMAscript

ECMAscript是由ECMA国际（原欧洲计算机制造协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为Javascript或JScript，但实际上后两者是由ECMAscript语言的实现和扩展

ECMAscript：ECMAscript规定了JS的编程语法和基础核心知识，是所有游览器厂商共同遵守的一套JS语法工业标准

## 2.2、DOM----文档对象模型

文档对象模型，是W3C组织推荐的处理可扩展标记语言的标准编程接口

通过DOM提供的接口可以对页面上各种元素进行操作（大小、位置、颜色等）

## 2.2、BOM----游览器对象模型

BOM是指游览器对象模型，它提供了独立于内容的，可以于游览器窗口进行的互动的对象结构。通过BOM可以操作游览器窗口，比如弹出框、控制游览器跳转、获取分辨率等

# 3、js的书写位置

js的3种书写位置，分别是行内、内嵌和外部

## 3.1、行内式js

<inp ut type="button"  onclick"alert(Hello)"/>

。可以将单行或少量JS代码写在html代码写在html标签的时间属性中（以on开头的属性）

。注意单双引号的使用：在HTML中我们推荐使用双引号，JS中我们推荐使用单引号

。可读性差，在html中编写大量代码时，不方便阅读

。引号易错，引号多层嵌套匹配时，非常容易弄混

。特殊情况下使用

## 3.2、内嵌js

<script>

</script>

​    alert('hello');

</script>

## 3.3、外部js

<script src='my.js'></script>

。利用HTML页面代码结构化，把大量JS代码独立到HTML页面之外，既美观，也方便文件级别的复用

。引入外部JS文件的script标签中间不可以写代码

。适合于JS代码量较大的情况

# 4、JS注释

单行、多行注释

单行注释   快捷键  :  ctrl+/

多行注释     默认的快捷键    shift    +   alt         +    a

# 5、输出语句

方法                           说明                                 归属

alert(msg)               游览器弹出警示框           游览器

console.log(msg)   游览器控制台打印信息            游览器

prompt(info)         游览器弹出输入框，可以输入   游览器

![输入](C:\Users\86173\Desktop\javascrpit\images\输入.png)

# 6、变量名命名规则

。由字母（A-Z）、数字（0-9）、下划线（_）、下划线、美元符号组成，

。严格区分大小写

。不能以数字开头

。不能是关键字

。变量名必须有意义

。遵循驼峰命名法

。推荐翻译网站：有道、爱词霸

![命名](C:\Users\86173\Desktop\javascrpit\笔记\images\命名.png)