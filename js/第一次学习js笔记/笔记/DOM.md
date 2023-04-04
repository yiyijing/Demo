# DOM

# 1、什么是DOM

文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或XML）的标准编程接口

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

# 2、DOM树

。文档：一个页面就是一个文档，DOM中使用document表示

。元素：页面中的所有标签都是元素。DOM中使用的是element表示

。节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用的node表示

DOM把以上的内容看做是对象

# 2、获取元素

## 2.1、如何获取页面元素

DOM在我们实际开发中主要用来操作元素

获取元素的使用一下几种方式

。根据ID获取

。根据标签名获取

。通过HTML5新增的方法获取

。特殊元素获取

### 2.1.1、根据ID获取

使用getElementById（）方法获取带有ID的元素对象

![getElementById](C:\Users\86173\Desktop\javascrpit\笔记\images\getElementById.png)

### 2.2.2、根据标签名获取

使用getElementsByTagName('标签名')方法 返回带有指定标签名的对象的集合

注意：父元素必须是单个对象（必须指明是哪一个元素对象）.获取的时候不包括父元素自己

![getElementsBiTagName1](C:\Users\86173\Desktop\javascrpit\笔记\images\getElementsBiTagName1.png)

![getElementsByTagName2](C:\Users\86173\Desktop\javascrpit\笔记\images\getElementsByTagName2.png)

### 2.2.3、通过HTML5新增方法获取

。document.getElementsByClassName('类名')；//根据类名返回元素对象集合

。document.querySelector('选择器');  //根据指定选择器返回第一个元素对象

。document.querySelectorAll('选择器')；   //根据指定选择器返回 ![html5新增1](C:\Users\86173\Desktop\javascrpit\笔记\images\html5新增1.png)

![html5新增2](C:\Users\86173\Desktop\javascrpit\笔记\images\html5新增2.png)

### 2.2.4、获取特殊元素（body、html）

获取body元素

document.body   //返回body元素对象

获取html元素

document.documentElement  //返回html元素对象

# 3、事件概述

javascript使我们有能力创建动态页面，而事件是可以被javaScript侦测到的行为。

简单理解：触发--------响应机制

网页中的每个元素都可以产生某些可以触发JavaScript的事件，例如：我们可以在用户单击某按钮时产生一个事件，然后去执行某些操作。

## 3.1、事件是由三部分组成

事件源、事件类型、事件处理程序   我们也称为三要素

。事件源   ：事件被触发的对象   谁    按钮

。事件类型：   如何触发，什么事件，比如鼠标点击（onclick）还是鼠标经过，还是鼠标按下

。事件处理程序   通过一个函数赋值的方式完成

## 3.2、执行事件的步骤

。获取事件源

。注册事件（绑定事件）

。添加事件处理程序（采取函数赋值形式）

![执行事件的步骤](C:\Users\86173\Desktop\javascrpit\笔记\images\执行事件的步骤.png)

# 4、常见的鼠标事件

![常见的鼠标事件](C:\Users\86173\Desktop\javascrpit\笔记\images\常见的鼠标事件.png)

# 5、改变元素内容

javascript的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容，属性等

## 5.1、innerText和innerHTML 

。element.innerText       从其实位置到终止位置的内容，但它取出html标签，同时空格和换行也会去掉

。innerHTML      其实位置到终止位置的全部内容，包括html标签，同时保留空格和换行

![innerText和innerHTML](C:\Users\86173\Desktop\javascrpit\笔记\images\innerText和innerHTML.png)

## 5.2、常用元素的属性操作

。innerText、innerHTML改变元素内容

。src、href

。id、alt、title

![常用的属性操作1](C:\Users\86173\Desktop\javascrpit\笔记\images\常用的属性操作1.png)

![常用的属性操作2](C:\Users\86173\Desktop\javascrpit\笔记\images\常用的属性操作2.png)

## 5.3、表单元素的属性操作

利用DOM可以操作如下表的属性：

type、value、checked、selected、disable

![表单元素的属性操作](C:\Users\86173\Desktop\javascrpit\笔记\images\表单元素的属性操作.png)

## 5.4、样式属性操作

我们可以通过JS修改元素的大小、颜色、位置等样式

。element.style      //行内样式操作

。element.className     //类名样式操作

![样式属性操作](C:\Users\86173\Desktop\javascrpit\笔记\images\样式属性操作.png)

element.style      //行内样式操作    注意：

。JS里面的样式采取驼峰命名法，比如fontSize、backgroundColor

。JS修改style样式操作，产生的是行内样式，CSS权重比较高

例子如下：

![类名样式](C:\Users\86173\Desktop\javascrpit\笔记\images\类名样式.png)

![案例](C:\Users\86173\Desktop\javascrpit\笔记\images\案例.png)

element.className     //类名样式操作注意点

。如果样式修改比较多，可以采取操作类名方式更改元素样式

。class因为十个保留字，因此使用className来操作元素类名属性

。className会直接更改元素的类名，会覆盖原先的类名

# 6、总结

![操作元素的总结](C:\Users\86173\Desktop\javascrpit\笔记\images\操作元素的总结.png)

# 7、排他思想

![排他思想](C:\Users\86173\Desktop\javascrpit\笔记\images\排他思想.png)

# 8、自定义属性

## 8.1、自定义属性的操作

获取属性值：

。element.属性    获取属性值

。element.getAttribute('属性');

区别：

。element.属性     获取内置属性值（元素本身自带的属性）

。element.getAttribute('属性')   主要获得自定义的属性（标准），我们程序员自定义的属性

## 8.2、自定义属性的操作

移除属性

。element.removeAttribute('属性');

### 8.2.1、H5自定义的属性

自定义属性的目的：是为了保存并使用数据，有些数据可以保存到页面中而不用保存到数据库中。

自定义属性获取是通过getAttribute('属性')获取；

。但是有些自定义属性很容易引起歧义，不容易判断元素内置属性还是自定义属性

设置H5自定义属性：

规定自定义属性data-开头作为属性名并且赋值

比如：<di v  data-index="1"  ></div》

或者使用js设置：element.setAttribute('data-index',2);

![自定义属性](C:\Users\86173\Desktop\javascrpit\笔记\images\自定义属性.png)

### 8.2.2、获取自定义属性

。兼容性获取element.getAttribute('data-index');

。H5新增element.dataset.index或者element.dataset['index']  ie11才支持

![自定义属性获取](C:\Users\86173\Desktop\javascrpit\笔记\images\自定义属性获取.png)