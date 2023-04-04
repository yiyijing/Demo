# 1CSS3新增盒子模型

CSS3中可以通过box-sizing来指定盒子模型，有2个值：即可以指定 content-box  、  border - box，这样我们在计算盒子大小的当时就发生了变化

可以分为两种情况：

1、box - sizing : content - box 盒子大小为 width +padding  +border（以前默认）

2、 border - sizing ： border -box 盒子大小为width

注意：

如果盒子模型我们改为了  border -sizing : border-box , 那padding 和  border   就不会撑大盒子了（前提  padding 和border 不会超过width宽度）

# 2 、CSS3的其他特性（了解）

## 2.1图片变模糊

### 2.1.1 css3滤镜filter

filter CSS属性将模糊或颜色偏移等图形效果应用于元素

filter ：函数（）；例如 filter ：blur(5px) ;blur模糊处理，数值越大越模糊

### 2.1.2 CSS3 calc函数：

calc （） 此CSS函数让你在声明CSS属性值时执行一些计算

width ： calc( 100% - 80px )；

描述：盒子宽度比父盒子 始终少80px

calc （）；括号里面可以使用 + - * /

CSS3还增加了一下动画2D 、3D等特性，我们就业班会继续学习

# 3 CSS过渡（重点）

## 3.1过渡（transition）简介

过渡（transition）是CSS3中具有颠覆性的特征之一，我们可以在不使用Flash动画或者JavaScript的情况下，当元素从一中样式变换成为另一种样式时为元素添加的效果

。过渡动画：是指从一个状态渐渐的过渡到另一个状态

。可以让我们页面更好看，更动感十足，虽然低版本游览器不支持（IE9以下版本）但是不会影响页面布局

我们经常和 ：hover一起搭配使用

## 3.2过渡（transition）

transition : 要过渡的属性    花费时间   运动曲线   何时开始   ；

1、属性：想要变化的CSS属性，宽度、高度、背景颜色、内外边距都可以。如果想要所有的属性都变化过渡，写一个all就可以

2、花费时间 ：单位是秒 （必须写单位）比如0.5s

3、运动曲线：默认是ease（可以省略）

![运动曲线](C:\Users\86173\Desktop\最新html\笔记\images\运动曲线.png)

4、何时开始：单位是秒（必须写单位）可以设置延迟触发，默认0s(可以省略)



