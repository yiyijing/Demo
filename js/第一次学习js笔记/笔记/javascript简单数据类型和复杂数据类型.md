# javascript简单数据类型和复杂数据类型

简单数据类型又叫基本数据类型或者值类型，复杂数据类型又叫引用类型

。值类型：简单数据类型/基本数据类型，在存储时变量中存储的值是本身，因此叫做值类型String 、number、boolean、undefined、null

注意：

简答数据类型null返回的是一个对象性，object，如果有个变量我们以后打算存储为对象，暂时没有想好存放啥，这时候就可以给null

# 1、简单数据类型和复杂数据类型分类

简单数据类型又称为值类型，赋值数据类型又称为引用类型

。值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此有称为值类型，String 、number、boolean、undefined、null

。引用类型：复杂数据类型，在存储的时变量存储的仅仅是地址（引用），因此叫做引用数据类型，通过new关键字创建的对象（系统对象、自定义对象），如object、Array,Date等

# 2、堆和栈

。栈（操作系统）：由操作系统自动分配释放函数的参数值、局部变量的值等，其操作方式类似于数据结构中的栈，简单数据类型存放到栈里面

。堆（操作系统）：存储复杂数据类型，一本是由程序员分配释放，若程序员不释放，由垃圾回收机制回收，复杂数据类型存放到堆里面

注意：javascript中没有堆和栈的概念，通过堆和栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其他语言

![堆和栈](C:\Users\86173\Desktop\javascrpit\笔记\images\堆和栈.png)

# 3、复杂类型的内存分配

。引用类型（复杂数据类型）：通过new关键字创建的对象（系统对象、自定义对象），如object、Arrat、Date等

。引用类型的变量(栈空间)里面存放的是地址，真正的对象实例存放在堆控件中。

![复杂数据类型的内存分配](C:\Users\86173\Desktop\javascrpit\笔记\images\复杂数据类型的内存分配.png)

注意：简单数据类型null返回的是一个空的对象object

如果有个变量我们以后打算存储为对象，暂时没有想好放啥，这个时候给null

。简单数据类型是存放在栈里面，里面直接开辟一个空间存储的值

。复杂数据类型  首先在栈里面存放地址  十六进制表示

# 4、类型传参

## 4.1、简答类型传参

函数的形参可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值赋值了一份给形参，那么在方法内部对形参做任何修改，都不会影响到外部变量。

![简单数据类型传参](C:\Users\86173\Desktop\javascrpit\笔记\images\简单数据类型传参.png)

## 4.2、复杂类型传参

函数的形参可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里面保存的堆地址赋值给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

![复杂数据类型传参](C:\Users\86173\Desktop\javascrpit\笔记\images\复杂数据类型传参.png)