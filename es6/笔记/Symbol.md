# Symbol

es6引入了一种新的原始数据类型，表示独一无二的值。它是javascript语言的第七种数据类型，是一种类似于字符串的数据类型

# 1、symbol的特点

1、symbol的值是唯一的，用来解决命名冲突的问题

2、symbol值不能与其他数据进行运算

3、symbol定义的对象属性不能使用for...in循环遍历，但是可以使用reflect.ownkets来获取对象的所有键名

# 2、创建Symbol的三种方法

![创建symbol](C:\Users\86173\Desktop\es6\笔记\images\创建symbol.png)

注意：

。Symbol()是创建函数，Symbol是创建对象

。Symbol.for（）创建的值是唯一的，但是Symbol（）创建的是由编号的

。Symbol不能与其他的数据进行运算

![Symbol不能与其他的运算进行运算](C:\Users\86173\Desktop\es6\笔记\images\Symbol不能与其他的运算进行运算.png)

# 3、向面向对象中添加方法up、down

![up.down](C:\Users\86173\Desktop\es6\笔记\images\up.down.png)

# 4、Symbol内置值

除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法

![内置值](C:\Users\86173\Desktop\es6\笔记\images\内置值.png)

sInstance可以自己去检测控制类型检测

![链接两个字符串](C:\Users\86173\Desktop\es6\笔记\images\链接两个字符串.png)![检测类型](C:\Users\86173\Desktop\es6\笔记\images\检测类型.png)