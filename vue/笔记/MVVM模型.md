# MVVM模型

1、M:模型（Model）:对应data中的数据

2、V:视图（View）:模板

3、VM:视图模型（ViewModel）:Vue实例对象

![png](C:\Users\86173\Desktop\vue\笔记\images\.png)

![MVVM](C:\Users\86173\Desktop\vue\笔记\images\MVVM.png)

# 1、创建一个Vue实例

![Vue模型](C:\Users\86173\Desktop\vue\笔记\images\Vue模型.png)

观察发现：

。data中的所有的属性，最后都会出现vm身上

。vm身上的所有属性及Vue原型上所有属性，在Vue模板中都会出现

# 2、数据代理Object.defineproperty

数据代理就是通过一个对象对另一个对象属性的操作（读和写）

![Object.defineproperty](C:\Users\86173\Desktop\vue\笔记\images\Object.defineproperty.png)

![defineprooerty](C:\Users\86173\Desktop\vue\笔记\images\defineprooerty.png)

在数据代理里面：

。enumerble:true；//控制属性是否可以枚举，默认值是false

。writable:true；//控制属性名是否可以被修改，默认为false

。confugurable:true  //控制属性是否可以被修改，默认为false

## 2.1、数据代理图示

![数据代理图示](C:\Users\86173\Desktop\vue\笔记\images\数据代理图示.png)

## 2.2、Vue中的代理

![Vue中的代理](C:\Users\86173\Desktop\vue\笔记\images\Vue中的代理.png)