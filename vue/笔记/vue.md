# vue

# 1、什么是Vue

一套用于构建用户界面的渐进式javaScript框架

渐进式：Vue可以自底向上逐层的应用

简单应用：只需要一个轻量小巧的核心库

## 1.1、Vue的特点：

。采用组件化模式，提高代码复用率、且让代码更好维护

。声明式编码，让编码人员无需直接操作DOM,提高开发效率

![Vue特点](C:\Users\86173\Desktop\vue\笔记\images\Vue特点.png)

## 1.2、Vue的实现

### 1.2.1、原生js

![原生js实现](C:\Users\86173\Desktop\vue\笔记\images\原生js实现.png)

![原生js实现2](C:\Users\86173\Desktop\vue\笔记\images\原生js实现2.png)

### 1.2.2、Vue的实现

![Vue的实现](C:\Users\86173\Desktop\vue\笔记\images\Vue的实现.png)

# 2、学习Vue之前应该掌握的技术

。es6语法规范

。es6模块化

。包管理器

。原型，原型链

。数组常用方法

。axios

。promise

![学习Vue之前掌握的技术](C:\Users\86173\Desktop\vue\笔记\images\学习Vue之前掌握的技术.png)

# 3、Vue.js是什么

vue是一套用于构建用户界面的渐进式框架，与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代工具链以及各种支持类库结合使用时，Vue也会完全能够为复杂的单页面提供驱动

vue官网地址：https://v2.cn.vuejs.org/v2/guide/index.html

![Vue](C:\Users\86173\Desktop\vue\笔记\images\Vue.png)

## 3.1、初始Vue

在编写Vue之前首先引入Vue.js

![初始Vue](C:\Users\86173\Desktop\vue\笔记\images\初始Vue.png)

引入vue，全局就多了vue这个构造函数

![Vue函数](C:\Users\86173\Desktop\vue\笔记\images\Vue函数.png)

## 3.2、创建Vue实例

在创建Vue实例的时候，应该    1、下载下载开发版vue   2、安装开发版调试vue  3、关闭提示

注意：在vscode中，首先引入vue,然后通过src把vue.js导入，在body里面放一个容器，然后通过script标签开始对容器进行操作，在script里面首先通过Vue.config.productionTip=false;意思是(阻止vue在启动时生成生产提示），创建vue实例

![创建Vue实例](C:\Users\86173\Desktop\vue\笔记\images\创建Vue实例.png)

## 3.3、编写Vue

初始：

。想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象

。在容器里面的代码依然复合html规范。只不过混入了一些特殊的Vue语法

。容器里面的代码称为Vue模板

![编写](C:\Users\86173\Desktop\vue\笔记\images\编写.png)

![创建实例的过程](C:\Users\86173\Desktop\vue\笔记\images\创建实例的过程.png)

# 4、总结

。想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象

。在容器里面的代码依然复合html规范。只不过混入了一些特殊的Vue语法

。容器里面的代码称为Vue模板

。Vue实例和容器是一一对应的

。真是的开发中只有一个Vue,并且会配合着组件一起使用

。{{xxx}}中的xxx要写js表达式，并且可以自动读取到data中的所有属性

。一旦data中的数据发生改变，那么模板中用到数据的地方也会自动更新

## 4.1、注意区分js表达式和js代码

### 4.1.1、表达式

。a

。a+b

。demo(1)

。x===y ? 'a' : 'b'

### 4.1.2、js代码

。if()

。for()

