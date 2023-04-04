# 移动web开发值rem适配布局

# 1、基础

## 1.1、单位

rem(root em)是一个相对单位，类似于em,em是父元素字体大小

不同的是rem的基准是相对于html元素的字体大小

比如，根源素（html）设置成为font-size：12px；非根元素设置成width:2rem;则换成px表示就是14px;

# 2、媒体查询

媒体查询（media Query）是CSS3新语法

。使用@media查询，可以针对不同的媒体类型定义不同的样式

。@media可以针对不同的屏幕尺寸设置不同的样式

。当你重置游览器大小的过程中，页面也会根据游览器的宽度和高度重新渲染页面

。目前针对很对苹果手机、Android、平板灯设备都用得到多媒体查询

语法：

@media mediatype  and | not | only ( media feature ){

   CSS-Code;

}

。用@media开头注意@符号

。mediatype媒体类型

。关键字and not only 

。media feature 媒体特性必须有小括号包含

## 2.1、mediatype查询类型

将不同的终端上设备划分成不同的类型，称为媒体类型

值           解释说明

all          用于所有设备

print     用于打印机和打印预览

scree     用于电脑屏幕、平板屏幕、智能手机

## 2.2、关键字

关键字将媒体类型或多个媒体特性链接到一起为媒体查询条件

。and:可以将多个媒体特性链接到一起，相当于“且”的意思

。not:排除某个媒体类型，相当于“非”的意思，可以省略

。only:指定某个特定的媒体类型，可以省略

## 2.3、媒体特性

每种媒体类型都具体各自不同的特性，根据不同的媒体类型的媒体特性设置不同的展示风格，我们暂且了解三个。注意他们要加小括号

值             解释说明

width       定义输出设备中页面可见区域的宽度

min-width   定义输出设备中页面最小可见区域宽度

max-width    定义输出设备中页面最大可见区域的宽度

# 3、引入资源（了解）

当样式比较繁多的时候，我们可以针对不同的媒体使用不同的stylesheets（样式表）

语法：

<link  rel="stylesheet" media="mediatype  and |  not |  only ( media feature)"  href="mystylesheet.css">

# 4、维护CSS的弊端

CSS是一门非程旭式的语言，没有变量、函数、SCOPE(作用域)等概念

。CSS需要书写大量看似没有逻辑的代码，CSS冗余度是比较高的

。不方便维护及扩展，不利复用

。CSS没有很好的计算能力

。非前端开发工程师来讲，往往会因为缺少CSS编程经验而很难写出组织良好且易于维护的CSS代码项目

## 4.1、Less介绍

Less（Leaner Style Sheets缩写）是一门CSS扩展语言，也成为CSS预处理器

作为CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序语言特征

他在CSS基础上，引入变量，Mixin(混入)，运算以及函数等功能，大大简化了CSS的编写，并且降低了CSS的维护成本，就像它的名称所说那样，Less可以让我们用更少的代码做更多的事情

Less中文网址：http://lesscss.cn/

常见的CSS预处理器：Sass  、Less、 Stylus

一句话：Less是一门CSS预处理语言，它扩展了CSS的动态特征

![Less](C:\Users\86173\Desktop\最新html\移动端笔记\images\Less.png)

## 4.2、Less的使用

首先我们新建一个后缀名为less的文件，在这个less文件里面书写less语句

。Less变量

。less编程

。less嵌套

。less运算

### 4.2.1、less变量

变量是没有固定的值，是可以改变的，因为我们Css中的一些颜色和数值等经常使用

@变量名：值；

变量名的规范

。必须有@为前缀

。不能包含特殊字符

。不能以数字开头

。大小写敏感

![Less](C:\Users\86173\Desktop\最新html\移动端笔记\images\Less.png)

### 4.2.2、less编程

本质上，less包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的CSS文件

所以，我们需要把我们的less文件，编译生成css文件，这样我们的html页面才能使用

![less插件](C:\Users\86173\Desktop\最新html\移动端笔记\images\less插件.png)

### 4.2.3、less嵌套

![嵌套](C:\Users\86173\Desktop\最新html\移动端笔记\images\嵌套.png)

如果遇见（交集|伪类|伪元素选择器）

。内层选择器的前边没有&符号，则它被解析为父选择器的后代

。如果有&符号，它就被解析为自身或父元素的伪类

![嵌套案例](C:\Users\86173\Desktop\最新html\移动端笔记\images\嵌套案例.png)![less伪元素](C:\Users\86173\Desktop\最新html\移动端笔记\images\less伪元素.png)

### 4.2.4、less运算

任何数字、颜色或者改变变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算数运算

@width :  10px  +  5；

div{

​     border:   @width solid red;

}

生成的CSS：

div{

border{

​    border：  15px solid  red;

}

注意：

。乘号（*）和除号(/)的写法

。运算符中间左右有个空格隔开1px   +    5;

。对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位

。如果两个值之间只有一个值有单位，则运算结果就取该单位

![less运算](C:\Users\86173\Desktop\最新html\移动端笔记\images\less运算.png)

# 5、rem适配方案

适配方案？

1、我们适配的目的是什么？

2、怎么去达到这个目的

3、在实际的开发当中使用？

适配、、方案解决：

1、让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备

2、使用媒体查询根据不同的设备按比例设置html字体大小，然后页面元素使用rem做尺寸单位，当html字体变化元素尺寸也会发生变化，从而达到等比缩放的适配

# 5.1、实际开发适配方案

1、按照设计稿与设备宽度的比例，动态计算并设置html跟标签的font-size大小（媒体查询）

2、CSS中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为rem为单位的值

## 5.2、rem适配方案技术使用（主流市场）

技术方案1：

。less

。媒体查询

。rem

方案2(推荐)

。flexible.js

.rem

总结：

1、两种方案选择都存在

2、方案2更简单，现阶段大家无需了解里面的js代码

### 5.2.1、rem实际开发适配方案1

设计稿常见尺寸宽度

设备                常见宽度

iphone 4.5    640px

iphone678     750px

android            常见的320px 、360px、375px、384px、400px、大部分4.7~5寸的安卓设备为720px

元素大小取值方法：

1、最后的公式：页面元素rem值=页面元素值（px）/(屏幕宽度/划分份数)

2、屏幕宽度/划分的份数就是html font-size的大小

3、或者：页面元素的rem值=页面元素值（px）/html  font-size字体大小

## 5.2.1、rem实际开发适配方案2

![rem适配2](C:\Users\86173\Desktop\最新html\移动端笔记\images\rem适配2.png)