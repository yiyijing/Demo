# css新增属性

。新增的css特性有兼容性问题，ie9+才支持

。移动端支持优于pc端

。不断改进中

。应用相对广泛

。现阶段主要学习：新增选择器和盒子模型以及其他特性

css给我们新添了选择器，可以更加便捷，更加自由的选择目标元素

1、属性选择器

2、结构伪类选择器

3、伪元素选择器

# 1属性选择器

属性选择器可以根据元素特定属性来选择元素，这样就可以不用借助类或者id选择器

选择符            简介

E{att}             选择具有att属性的E元素

E{att="val"}    选择具有att属性且属性值等于val的E元素

E{att^="val"}   匹配具有att属性且值以val开头的元素

E{att$="val"}   匹配具有att属性且值以val结尾的E元素

E{att*="val"}   匹配具有att属性且值中含有val的元素

注意：类选择器、属性选择器、伪类选择器权重为10.

# 2结构伪类选择器

结构伪类选择器主要根据文档结构来选择元素，常用于根据父级选择器里面的子元素

属性值                 描述

E : first-child       匹配父元素中的第一个子元素E

E :last-child         匹配父元素中最后一个E元素

E :nth-child（n）匹配父元素中的第n个子元素E

E :first-of-type    指定类型E的第一个

E :last-of-type     指定类型的最后一个

E :nth-of-type(n)  指定类型E的第n个

## 2.1  E :nth-child（n）

nth-child（n）选择某个父元素的一个或多个特定的子元素

（1）n可以是数字，关键字和公式

（2）n如果是数字，就是选择第n个子元素，里面数字从1开始

（3）n可以是关键字：even偶数，odd奇数

举例：

选择所有li里面的偶数孩子

。ul   li  :  nth-child  ( even ) {

​       background - color  :  #ccc;

} 

选择所有li里面的奇数孩子

。ul   li  :  nth-child  ( odd) {

​       background - color  :  #ccc;

} 

（4）n可以是公式：常见的公式如下（如果是公式，则从0开始计算，但是第0个元素或者超出了元素的个数会被忽略）

公式            取值

2n                偶数

2n+1            奇数

5n                 5    10    15.....

n+5              从第5个开始（包含第五个）到最后

-n+5               前5个（包含第5个）

# 3总结

。结构伪类选择器一般用于选择父级里面的第几个孩子

。nth-child 对父元素里面所有孩子排序选择（序号是固定的，先找第几个孩子），然后看是否和E匹配

。nth-of-type 对父元素里面指定子元素进行排序选择，先去匹配E,然后再根据E找到第n个孩子

。关于nth-child(n) 我们要知道n是从0开始计算的，要记住公式

。如果是无序列表（ul）,我们肯定 nth-child更多

。类选择器，属性选择器，伪类选择器，权重为10

# 4新增伪元素选择器(重点)

选择器              简介

：：before       在元素内部的前面插入内容

：：after          在元素内部的后面插入内容

注意：

。before和after创建一个元素，但是属于行内元素

。新创建的这个元素在文档树中是找不到的，所以我们称为伪元素

。语法：      element     : : before{}   

。before和after必须有content属性

。before在父元素内容的前面创建元素，after在父元素内容的后面插入元素

。伪元素选择器和标签选择器一样，权重为1

#   5伪元素清除浮动

## 5.1为什么清除浮动

由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为0时，就会影响下面标准流盒子

。由于浮动元素不再占用文档流的位置，所有它会对后面的元素排版产生影响。

## 5.2清除浮动-

### 5.2.1额外标签法

额外标签法也称为隔墙法，是w3c推荐的做法

额外表圈法会在浮动元素末尾添加一个空的标签，比如<di v style="clear:both"  ></div>或者其他的标签（如br/等）

。有点：通俗易懂，书写方便

。缺点：添加许多无意义的标签，结构化较差

注意：要求这个新的标签必须是块级元素

![额外标签法](C:\Users\86173\Desktop\最新html\笔记\images\额外标签法.png)



总结：

1.清除浮动的本质是？

清除浮动的本质是清除浮动元素脱离标准流造成的影响

2.清除浮动的策略是？

闭合浮动，只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子

3.额外标签法？

隔墙法，就是最后一个浮动的子元素后面添加一个额外标签，添加清除浮动样式

实际工作可能会遇到，但是不常用

### 5.2.2清除浮动-父元素overflow

可以给父级添加overflow属性，将其属性值设置为hidden、auto、或者scroll。

。优点：代码简洁

。缺点：无法显示溢出的部分

### 5.2.3清除浮动-：after伪元素

![伪元素1](C:\Users\86173\Desktop\最新html\笔记\images\伪元素1.png)

：after方式是额外标签法的升级版。也是给父元素添加

语法：

.clearfix : after{

content : " "          //伪元素必须要有这个属性

display : block ;     //插入的伪元素必须是块级

height : 0 ;              //不要看见这个元素

clear ：both ;         //核心代码清除浮动

visibility ：hidden ;   

}

![after](C:\Users\86173\Desktop\最新html\笔记\images\after.png)

. clearfix {//兼容

ie6 ie7专有

*zoom :1;

}

。优点：没有增加标签，结构更简单

。缺点：照顾低版本浏览器

。代表网站：百度、淘宝网、网易等

### 5.2.3清除浮动-双伪元素清除浮动

![双伪元素2](C:\Users\86173\Desktop\最新html\笔记\images\双伪元素2.png)

语法格式：

.clearfix : before , .clearfix : after{

content : "";

display table;

}

.clearfix :after{

clear : both;

}

.clearfix{

*zoom:1;

}

![before+after](C:\Users\86173\Desktop\最新html\笔记\images\before+after.png)

。优点：代码更简洁

。缺点：照顾低版本浏览器

。代表网站：小米、腾讯等

# 6总结：

为什么要清除浮动：

。父级没高度

。子盒子浮动了

。影响下面布局了，我们就应该清除浮动

清除浮动的方式：             优点：                                    缺点

额外标签法                        通俗易懂，书写方便          添加许多无意义的标签，结构化较差

父级overflow:hidden;      书写简单                            溢出隐藏

父级after伪元素                 结构语义正确                    由于IE6-7不支持，兼容性问题

父级双伪元素                      结构语义化正确                 由于IE6-7不支持，兼容性问题



