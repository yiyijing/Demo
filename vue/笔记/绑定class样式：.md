# 绑定class样式：

绑定class样式模板如下：

![绑定样式模板](C:\Users\86173\Desktop\vue\笔记\images\绑定样式模板.png)

操作节点，在Vue里面，不用亲自动dom，不变的东西该怎么写就怎么写上述代码的中的class='basic mormal'

![动态指定](C:\Users\86173\Desktop\vue\笔记\images\动态指定.png)

上述代码        ：class的类动态指定，:class='a',a当表达式用

## 1.1、绑定class样式

![绑定class样式](C:\Users\86173\Desktop\vue\笔记\images\绑定class样式.png)

上述代码：就是vue的工作方式，正常的样式正常写，变化的样式用绑定的形式去写。将红的和绿的汇总成一个正常的形式，如果不加：，就没有绑定

## 1.2、总结

### 1.2.1、绑定class样式字符串

绑定class样式----字符串写法适用于类名不确定，需要动态指定，如下图：

![绑定class样式字符串](C:\Users\86173\Desktop\vue\笔记\images\绑定class样式字符串.png)

动态切换心情，如下图：

![动态切换心情](C:\Users\86173\Desktop\vue\笔记\images\动态切换心情.png)



### 1.2.2、数组绑定方式

这是另一种动态的绑定，可以动态操作这几个类，使用要绑定的样式个数不确定，名字也不确定，如下图：

![另一种绑定方式](C:\Users\86173\Desktop\vue\笔记\images\另一种绑定方式.png)

第二种方式也可以这样写，，不太好，里面的a,b，c是key,不建议这样如下图：

![另一种方式](C:\Users\86173\Desktop\vue\笔记\images\另一种方式.png)

### 1.2.3、class样式---对象写法

第三种class样式---对象写法，适用于要绑定的样式个数确定，名字确定，但要动态决定用不用，如下图：

![class样式---对象写法](C:\Users\86173\Desktop\vue\笔记\images\class样式---对象写法.png)

# 2、css写行内样式

可以写行内样式，如下图

![css写行内样式](C:\Users\86173\Desktop\vue\笔记\images\css写行内样式.png)

上述粉色框里的表达式不合法，因为粉色框里面的是表达式。想要动态绑定style，Vue的要求是把它写成一个对象，如下图：

![行内写成对象](C:\Users\86173\Desktop\vue\笔记\images\行内写成对象.png)

上边这样写的优势是，打开Vue开发者工具不用操作dom,可以直接修改，但是一般是这样写的，如下图：

![一般行内对象写法](C:\Users\86173\Desktop\vue\笔记\images\一般行内对象写法.png)

注意：之所以能写fontSize是因为原始的css里面 是有font-size这个控制

## 2.1、修改其他属性

![修改其他属性](C:\Users\86173\Desktop\vue\笔记\images\修改其他属性.png)

采用驼峰命名法

想要同时应用两种属性，可以利用这种写法,如下图：

![同时应用两种属性](C:\Users\86173\Desktop\vue\笔记\images\同时应用两种属性.png)

## 2.2、也可以使用数组应用，很少使用

可以使用数组应用，很少使用，模板如下：

![使用数组应用模板](C:\Users\86173\Desktop\vue\笔记\images\使用数组应用模板.png)

执行代码如下：

![执行代码](C:\Users\86173\Desktop\vue\笔记\images\执行代码.png)

结果如下：

![结果](C:\Users\86173\Desktop\vue\笔记\images\结果.png)

# 3、样式总结

以上是常用的样式的绑定

![样式的绑定总结](C:\Users\86173\Desktop\vue\笔记\images\样式的绑定总结.png)

常用的是前3个

绑定样式总结：不变的东西正常写，变化的东西动态指定，动态指定体现在如下图：

![动态指定体现](C:\Users\86173\Desktop\vue\笔记\images\动态指定体现.png)

![data](C:\Users\86173\Desktop\vue\笔记\images\data.png)

上述这里面，只要一改变，就会影响页面所有用到这些东西的地方

# 4、总结

![总结1](C:\Users\86173\Desktop\vue\笔记\images\总结1.png)

![对象样式](C:\Users\86173\Desktop\vue\笔记\images\对象样式.png)

红色是样式对象，样式对象里面的key不能瞎写，必须是存在的css属性