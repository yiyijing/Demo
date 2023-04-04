# v-bind指令

vue里面所有指令，都是以v-开头

如果标签属性前边有v-开头的指令，里面的值就把它当做一个js语句来执行了

![v-bind指令](C:\Users\86173\Desktop\vue\笔记\images\v-bind指令.png)

v-bind:可以简写  ：  ，但是不是所有的指令都可以这样简写

# 1、Vue的语法有两大模板

## 1.1、插值语法：

功能：用于解析标签内容

写法：{{xxx}},xxx是js表达式，且可以直接读取到data中的所有属性

## 1.2、指令语法：

功能：用于解析标签（包括标签属性、标签体中内容、绑定事件）

![指令语法](C:\Users\86173\Desktop\vue\笔记\images\指令语法.png)

举例

![v-bind举例](C:\Users\86173\Desktop\vue\笔记\images\v-bind举例.png)

v-bind：是单向绑定   v-model:双向绑定

# 2、Vue中有两种绑定的方式

## 2.1、单向绑定（v-bind）

数据只能从data中流向页面

## 2.2、双向绑定（v-model）

数据不仅能从data流向页面，还可以从页面流向data

备注：

。双向绑定一般都应用在表单元素上，如input、select

。v-model：value可以简写为v-model，因为v-model默认收集的就是value

![两种数据绑定](C:\Users\86173\Desktop\vue\笔记\images\两种数据绑定.png)

 v-model:双向绑定，只能用于表单元素的输入类带有value值，不能输入就没有value,没有value值，就不能捕获用户的输入，连输入都捕获不了，如何影响数据的变化，这就是 v-model:双向绑定的意义。例如：输入类元素：input、单选框、多选框、select、多行输入，他们都有一个特点：就是都具有输入和value,

![两种数据绑定的案例](C:\Users\86173\Desktop\vue\笔记\images\两种数据绑定的案例.png)

# 3、el和data的两种写法

## 3.1、el的两种写法el

el（选择元素）和$mount（选择元素）

![el的第一种写法](C:\Users\86173\Desktop\vue\笔记\images\el的第一种写法.png)

![el的两种写法](C:\Users\86173\Desktop\vue\笔记\images\el的两种写法.png)

## 3.2、data的两种写法

data的两种写法：1、对象式、data: {  },第二种写法：函数式 data:function(){  return{  }}

![data的两种写法](C:\Users\86173\Desktop\vue\笔记\images\data的两种写法.png)

注意：

data的第二种写法：函数式data:function(){  return{  }}；里面的函数式一般函数，不能写成箭头函数，因为箭头函数的this指向windows

## 3.3、总结

![总结](C:\Users\86173\Desktop\vue\笔记\images\总结.png)