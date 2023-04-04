# flex布局体验

# 1、传统布局与flex布局

## 1.1、传统布局

。兼容性好

。布局繁琐

。局限性，不能再移动端很好的布局

## 1.2、flex弹性布局

。操作方便，布局极为简单，移动端应用很广泛

。PC端游览器支持情况较差

。IE 11或更低版本，不支持或仅部分支持

## 1.3、建议

。如果是PC端页面布局，我们还是建议传统布局‘

。如果是移动端或者不考虑兼容性问题的PC页面布局，我们可以使用flex弹性布局

# 2、布局原理

flex是flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局。

。当我们为父盒子设为flex布局以后，子元素的float、clear和vertical-align属性将失效

。伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex布局

## 2.1、布局原理

采用Flex布局的元素，称为Flex容器（flex container），简称“容器”。它的所有子元素自动称为容器成员，称为Flex项目（flex item）,简称为项目

。体验中div就是flex父容器

。体验中span就是子容器flex项目

。子容器可以横向配列也可以纵向排列

总结 flex布局原理

就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式

# 3、flex常见属性

## 3.1、常见父项属性

以下6个属性是对父元素设置的

。flex-direction :设置主轴方向

。justify-content : 设置主轴上的子元素排列方式

。flex-wrap : 设置子元素是否换行

。align-content : 设置侧轴上的子元素的排列方式（多行）

。align-items ： 设置侧轴上的子元素排列方式（单行）

。flex-flow : 复合属性，相当于同时设置了flex-direction和flex-wrap

### 3.1.1、flex-direction设置主轴的方向

主轴与侧轴

在flex布局中，是分主轴和侧轴两个方向的，同样的叫法：行和列，x和y轴

。默认主轴方向就是X轴方向，水平向右

。默认侧轴方向就是y轴方向，水平向下

![主轴方向](C:\Users\86173\Desktop\前端笔记\html\移动端笔记\images\主轴方向.png)

属性值

flex-direction属性决定主轴的方向（即项目的排列方向）

注意：主轴和侧轴是会变化的，就看flex-direction设置为主轴，剩下的就是侧轴。然而我们的子元素是跟着主轴来排列的

属性值：                说明：

row                         默认值从左到右

row-reverse          从右到左

column                   从上到下

column-reverse    从下到上

### 3.1.2、justify-content设置主轴上的子元素排列方式

justify-content属性定义了项目在主轴上的对齐方式

注意：使用这个属性之前一定要确定好主轴是哪个

属性值           说明

flex-start       默认值是从头开始，如果是x轴，从左到右

flex-end         从尾部开始排列

center         在主轴居中对齐（如果主轴是x轴则水平居中

space-around    平分剩余空间

space-between       先两边贴边，再平分剩余控件（重要）![justify-content](C:\Users\86173\Desktop\最新html\移动端笔记\images\justify-content.png)

### 3.1.3、flex-wrap设置子元素是否换行

默认情况下，项目都排在一条线上（又称为“轴线”）上，flex-wrap属性定义，flex布局中默认是不换行的

属性值        说明

nowrap       默认值，不换行

wrap            换行

### 3.1.4、align-items设置侧轴上的子元素排列方式（单行）

属性值           说明

flex-start      从上到下

flex-end        从下到上

center         挤在一起居中（垂直居中）

stretch         拉伸（默认值）

![align-center](C:\Users\86173\Desktop\最新html\移动端笔记\images\align-center.png)

### 3.1.5、align-content设置侧轴上的子元素的排列方式（多行）

设置子项在侧轴的排列方式并且只能用于子项出现换行的情况（多行），在单行下是没有效果的

属性值       说明

flex-start     默认情况下在侧轴的头部开始排列

flex-end       在侧轴的尾部开始排列

center           在侧轴中间显示

space-around   子项在侧轴平分剩余控件

space-between 子项在侧轴先分布两头，再平分剩空间

stretch           设置子项元素高度平分父元素高度

![align-centre](C:\Users\86173\Desktop\最新html\移动端笔记\images\align-centre.png)

## 3.6、align-content 和 align-items区别

。align-items 适用于单行情况下，只有上对齐，下对齐，居中和拉伸

。align-content 适用于换行（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余控件等属性值

。总结就是单行找align-items多行找align-content

![lia区别](C:\Users\86173\Desktop\最新html\移动端笔记\images\lia区别.png)

## 3.7、flex-flow

flex-flow属性是flex-direction和flex-wrap属性和复合属性

flex-flow:row    wrap  ;

。flex-direction：设置主轴的方向

。justify-content：设置主轴上的子元素排列方式

。flex-wrap：设置子元素是否换行

。align-content：设置侧轴上的子元素的排列方式（多行）

。align-items：设置侧轴上的子元素排列方式（单行）

。flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap

![flex-flow](C:\Users\86173\Desktop\最新html\移动端笔记\images\flex-flow.png)

# 4、flex布局子项常见属性

。flex子项目占得份数

。align-self控制子项自己在侧轴的排列方式

。order属性定义子项的排列顺序（前后顺序）

## 4.1、flex属性

flex属性定义子项目分配的剩余控件，用flex来表示占多少份数

语法：

item{

   flex: <number>;          /**default:0*/

}

## 4.2、align-self控制子项自己在侧轴上的排列方式

align-self属性允许单个项目与其他项目不一样的对齐方式，可覆盖align-items属性，默认为auto,表示继承父元素align-items属性，如果没有父元素，则等同于stratch

span：nth-child（2）{

algin-self：flex-end;

}

## 4.3、order属性定义项目的排列顺序

数值越小，排列越靠前，默认为0

注意：和z-index不一样

