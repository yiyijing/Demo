# 	HTML5的新增属性

html 5 的新增特性主要是针对与以前的不足，增加了一下新的标签，新的表单和新的表单属性

这些特性都有兼容性问题，基本是 IE9+以上版本的游览器才支持，如果不考虑兼容性问题，才可以大方使用这些属性

。新特性增加了很多，但是我们专注于开发常用的新特性

。基础班我们讲解部分新特性，到了就业班还会继续讲解其他新特性

# 1、html 5新增的语义化标签

以前的布局，我们基本用div。div对于搜索引擎来说，是没有语义的



![div](C:\Users\86173\Desktop\最新html\笔记\images\div.png)

## 1.1html5新增的语义化标签

。<header> : 头部标签

。<nav> : 导航标签

。<article > : 内容标签

。<section > : 定义文档某个区域

。<aside> : 侧边栏标签

。<footer> :尾部标签、



![语义化标签](C:\Users\86173\Desktop\最新html\笔记\images\语义化标签.png)

注意；

。这种语义标准化主要是针对搜索引擎的

。这些新标签页面中可以使用多次

。在IE中，需要把这些元素转换为块级元素

。其实，我们移动端更喜欢使用这些标签

。html5还增加了很多其他标签，我们后面再慢慢学

# 2html5新增多媒体标签

新增的多媒体标签主要包含两个

。音频 ： < audio >

。 视频  ： < video >

使用他们可以很方便的在网页中嵌入音频和视频，而不是再去使用 flash 和其他游览器插件

## 2.1视频

html5 在不使用插件的情况下，也可以原生的视频支持视频格式的文件播放，当然，支持支持的价格是有限的

游览器                        MP4     webM      ogg

internet Explorer      YES        NO           NO

chrome                       YES        YES            YES

firefox                         YES        YES            YES

​                   MP4  从fire21开始linux系统从firefox30开始

SAfari                          YES        YES            YES

Oera                            YES        YES            YES

语法：

< video  src=" 文件地址 "    controls = "  controls "  >< /video>

常见属性：

属性                    值                   描述

autoplay          autoplay       视频就绪自动播放（谷歌游

​                                                 览器需要添加  muted来解决自

​                                                   动播放问题）

controls            controls          向用户显示播放控件

width                  pixels             设置播放器宽度

height                 pixels              设置播放器高度

preload            auto(预先加载)    规定是否加载视频

​                   none(不应加载视频)有autoplay，就忽略

src                      url                      视频的url地址

poster                Imgurl               加载等待的画面图片

muted                muted              静音播放

![视频](C:\Users\86173\Desktop\最新html\笔记\images\视频.png)

## 2.2音频

当前< dudio>支持三种音频格式

游览器                        MP3     webM      ogg

internet Explorer      YES        NO           NO

chrome                       YES        YES            YES

firefox                         YES        YES            YES

SAfari                          YES        YES            NO

Opera                         YES        YES            YES

语法：

< audio src="文件地址" controls="controls"> < /audio>

![音频](C:\Users\86173\Desktop\最新html\笔记\images\音频.png)

常见属性：

属性：     值：             描述

autoplay  autoplay     该属性是音频在就绪后播放

controls   controls      该属性是向用户显示控件，播放按钮

loop            loop          该属性是当视频结束时重新开始播放

src              url               要播放的音频的url

![音频2](C:\Users\86173\Desktop\最新html\笔记\images\音频2.png)

。谷歌游览器把音频和视频自动播放禁止了

## 1.3总结

。音频标签和视频标签的使用方式基本一致

。游览器支持情况不同

。谷歌游览器把音频和视频自动播放禁止了

。我们可以给视频标签添加muted属性来静音播放视频，音频不可以（可以通过javascript解决）

。视频标签是重点，我们经常设置自动播放，不适用controls控件，循环和设置大小属性

