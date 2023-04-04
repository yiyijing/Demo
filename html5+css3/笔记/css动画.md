# css动画

动画是css3中最具有颠覆性的特征之一，可以通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果

相比于过渡，动画可以实现更多的变化，更多控制，连续自动播放效果

# 1、动画的基本使用

分两步走

。先定义动画

。再使用（调用）动画

## 1.1、用keyframes定义动画（类似定义类选择器）

@keyframes 动画名称{

​    0%{

​             width :100 px ;

​            }

​     100%{

​               width : 200 px ;

​               }

}

定义

![定义动画](C:\Users\86173\Desktop\最新html\笔记\images\定义动画.png)动画序列：

。%0是动画的开始。100%是动画的完成。这样的规则就是动画序列

。在@keyframes中规定某项CSS样式，就能创建有当前样式逐渐改为动画效果

。动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数

。请用百分比来规定变化发生的时间，或用关键字"form"和“to”,等同于0%和100%

![动画的from](C:\Users\86173\Desktop\最新html\笔记\images\动画的from.png)

## 1.2元素的使用

div{

​      width :200 px ;

​       height:200px;

​        background-color: pink;

​        antimation-name:动画名称；

​         antimation-duration:  持续时间；

}

![动画使用](C:\Users\86173\Desktop\最新html\笔记\images\动画使用.png)

# 2、动画的常用属性

![动画的常用属性](C:\Users\86173\Desktop\最新html\笔记\images\动画的常用属性.png)

## 2.2、速度曲线细节

antimation -timing-function : 规定动画的速度曲线，默认是：ease

![速度曲线](C:\Users\86173\Desktop\最新html\笔记\images\速度曲线.png)

# 3动画的简写属性

antimation  :  动画名称   持续时间  何时开始  播放次数   是否反方向  动画起始或者结束状态

   例如：

antimation  ： myfirst   5s  linear  2s  infinite alternate;     （前两个不能省略）

注意：

。简写属性里面不包括antimation-play-state;

。暂停动画：antimation-play-state: pused;  经常和鼠标经过等其他配合使用

。想要动画走回来，而不是直接跳回来：antimation-direction:alternate;

。盒子动画结束后，停留结束位置：antimation-fill-mode:forward；

![动画简写](C:\Users\86173\Desktop\最新html\笔记\images\动画简写.png)

