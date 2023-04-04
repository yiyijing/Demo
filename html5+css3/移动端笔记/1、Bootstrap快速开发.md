# 1、Bootstrap快速开发

Bootstrap来自Twitter(推特)，是目前最受欢迎的前端框架。Bootstrap是基于HTML、CSS和JAVASCRIPT的，它简介灵活，使得Web开发更加快捷

。中文网站   http://www.bootcss.com/

。官网：  http://getbootstrap.com/

。推荐使用：   http://bootstrap.css88.com/

框架：固定思议就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要按照框架锁规定的某种规范进行开发

## 1.1、优点：

。标准的html+css

。提供了一套简洁、直观、强悍的组件

。有自己的生态圈、不断的更新迭代

。让开发更简单，提高了开发的效率

## 1.2、版本

。2.x.x：停止维护，兼容性好，代码不够简洁，功能不够完善

。3.x.x：目前使用最多，稳定，但是放弃了IE-IE7.对支持但是界面效果不好，偏向用于开发响应式布局、移动设备优先的WEB项目

。4.x.x：最新版本，目前还不是很流行

# 2、bootstrap使用

在现阶段我们还没有解除JS相关课程，所有我们只考虑使用它的样式库

控制权在框架本身，使用者要按照框架锁规定的某种规范进行开发

Bootstrap使用四部曲：

1、穿件文件夹结构

![创建文件夹](C:\Users\86173\Desktop\最新html\移动端笔记\images\创建文件夹.png)

2、创建html骨架结构

![创建骨架](C:\Users\86173\Desktop\最新html\移动端笔记\images\创建骨架.png)

3、引入相关样式文件

![引入样式](C:\Users\86173\Desktop\最新html\移动端笔记\images\引入样式.png)

4、书写内容

。直接拿Bootstrap预先定义好的样式使用

。修改Bootstrap原来的样式，注意权重问题

。学号Bootstrap的关键在于知道它定义了哪些样式，以及这些样式能实现什么样的效果

# 3、布局容器

Bootstrap需要为页面内容和栅格系统包裹一个.container，Bootstarp预先定义好了这个类，叫。container,它提供了两个此用处的类

# 3.1、container

。响应式布局的容器   固定宽度

。大屏（>=1200px）宽度定为1170px

。中屏（>=992px）宽度为970px

。小屏（>=768px）宽度定为750px

。超小屏（100%）

## 3.2、container-fluid

。流式布局容器百分百宽度

。占据全部视口（viewport）

。适合于单独做移动端开发

![布局容器](C:\Users\86173\Desktop\最新html\移动端笔记\images\布局容器.png)

# 4、栅格系统

## 4.1、栅格系统

栅格系统英文为“gird systems”，也有人翻译为“网格系统”，它是将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局

Bootstrap提供了一套响应式、移动设备优点的理由是栅格系统，随着屏幕或视口尺寸的增加，系统会自动分为最多12列

Bootstrap里面container宽度是固定的，但是在不同的屏幕下，container宽度不同，我们再把container划分成为12等份

## 4.2、栅格选项参数

栅格系统用于通过一系列的行row和列column的组合来创建页面布局，你的内容就可以放入这些创建好的布局中

​                     超小768px  小设备>768  中等>=992px  大>=1200px

.container  自动100%    750px             970px              1170px

类前缀         .col-xs-        .col-sm-          .col-md-             .col-lg-

列数                                          12份

![栅格](C:\Users\86173\Desktop\最新html\移动端笔记\images\栅格.png)

。行row必须放到container布局容器里面

。我们实现列的平均划分，需要给列添加类前缀

。xs-extra small:超小；sm-small:小；md-medium：中等；lg-large:大

。列（column）大于12，多余的列（column）所在的元素将被作为一个整体另起一行排列

。每一列默认有左右15像素的padding

。可以同时为一列指定多个设备的类名，以便划分不同的份数，例如：错啦“col-md-4-col-sm-6”

## 4.3、列嵌套

栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再划分成若干份小列。我们可以通过添加一个新的.row元素和一系列.col-sm-*元素到已经存在.col-sm-*元素内。

我们嵌套最好加一个row这样可以取消父元素的padding值，而且高度自动和父级一样高

![列嵌套](C:\Users\86173\Desktop\最新html\移动端笔记\images\列嵌套.png)

## 4.4、列嵌套

使用.col-md-offset-*类可以将列向右侧偏移。这些类实际是通过实验*选择器为当前元素增加了左侧的边距（margin）

![列偏移](C:\Users\86173\Desktop\最新html\移动端笔记\images\列偏移.png)

## 4.5、列排序

通过使用.col-md-push*和.col-md-pull-*类就可以很容易的改变列（column）的顺序

![列排序](C:\Users\86173\Desktop\最新html\移动端笔记\images\列排序.png)

4.6、响应式共计

为了加快对移动设备友好的页面开发工作，利用媒体查询功能，并使用这些工具类可以方便的针对不同的设备展示或隐藏页面内容

类名                   超小屏        小屏       中屏幕        大屏幕

.hidden-xs         隐藏            显示       显示            显示

.hidden-sm        显示            隐藏        显示           显示

.hidden-md        可见             显示        隐藏           显示

.hidden-lg            显示             显示        显示           隐藏

与之相反，是visible-xs、visible-sm、visible-md、visible-lg

Bootstrap其他（按钮、表单、表格）请参考Bootstrap文档

