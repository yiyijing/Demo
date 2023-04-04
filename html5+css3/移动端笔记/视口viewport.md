# 视口viewport

视口viewport就是游览器显示页面的屏幕区域。视口可以分为布局视口、视觉视口和理想视口

# 1、布局视口layout viewport

。一般移动设备的游览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题

。iSO、Android基本都将这个视口分辨率设置为980px,所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页

# 2、视觉视口visual viewport

。字面意思，它是用户正在看到的网站的区域。注意：是网站的区域

。我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度

# 3、理想视口ideal viewport

。为了使网站在移动端有最理想的游览和阅读宽度而设定

。理想视口，对设备来讲，是最理想的视口和尺寸

。需要手动添加meta视口标签通知游览器操作

。meta视口标签的主要目的：布局视口的宽度应该与理想的宽度宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽

# 5、meta视口标签

## 5.1、meta

<meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0, minimum-scale=1.0"

常见属性    解释说明

width          宽度设置的是viewport ，可以设置device-width 特殊值

initial-sacle    初始缩放，大于0的数字

maximum-scale    最大缩放比，大于0的数字

minimun-scale       最小缩放比，大于0的数字

user-scalable         用户是否可以缩放，yes或no(1或0)

![视口标签](C:\Users\86173\Desktop\最新html\移动端笔记\images\视口标签.png)

## 5.2、标准的viewport

。视口宽度和设备保持一直，

。视口的默认缩放比例1.0

。不允许用户自行缩放

。最大允许缩放比例1.0

。最小允许缩放比例1.0

