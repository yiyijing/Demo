# css的背景

背景可以设置背景颜色、背景图片、背景平铺、背景背景图片位置、背景图像固定

# 1背景颜色

background-color:属性定义了元素的背景颜色

一般情况下元素的背景颜色默认是transparent(透明)，也可以手动指定背景颜色为透明的

# 2背景图片

background-image:属性用来描述元素的背景图像，实际开发中常用语logo或者一些装饰性的图片或者大的背景图片，优点是非常便于控制位置（精灵图也是一种运用场景）

语法：

background-image:   none/url（url）;

none是无背景图（默认的）

url使用绝对或者相对地址指定背景图像

# 3背景平铺

可以使用background-repeat属性对图片进行平铺

语法：

background-repeat:repeat/no-repeat/repeat-x/repeat-y

默认情况下都是平铺的background-repeat:repeat

背景图像不平铺：background-repeat:no-repeat

背景图像在横向上平铺：background-repeat:repeat-x

背景图像在纵向上平铺：background-repeat:repeat-y

# 4背景图片位置

background-position属性改变图片在在背景中的位置

语法：

background-position:x y;

参数代表的意思是：x坐标和y坐标,可以使用方位名词或者精确单位

参数值：方位名词

length:百分比/由浮点数和单位表示浮组成的长度值

position:top/center/bottom/left/center/right

如果x和y的参数是方位名词需要注意的事项

。如果指定的两个值都是方位名词，则两个值的前后顺序无关，比如left top和top left效果一样

。如果至指定了一个方位名词，另一个值省略，则第二个默认局中对齐

参数值：精确单位

。如果参数值是精确坐标，那么第一个肯定是x坐标，第二个一定是y坐标

。如果指定一个数值，那该数值一定是x坐标，另一个默认是垂直居中

。混合单位

如果指定的两个值是精确和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标

# 5背景固定（背景附着）

background-attachment:设置背景的图像是否固定或者随着页面的其余部分滚动，（后期可以制作视差滚动的效果）

语法：

background-attachment: scroll/fixed

。scroll   背景图像是随着对象内容滚动的(默认)

。fixed    背景图像固定

# 6背景属性的复合写法

一般情况下的约定顺序为：

background:背景颜色  背景图片的地址   背景平铺   背景图像滚动    背景图片位置

background：red  url（images/tup.jpg） no-repeat  fixed top;

6css背景色半透明

background: rgba( 0,0,0,0);

。最后一个参数是alpha透明度，取值范围在0~1之间

。我们习惯把0.3的0省略掉，写为background:rgba(0,0,0,.3);

。注意：背景半透明是指盒子背景半透明，盒子里面的内容不受影响

。Css新增属性，是ie9+版本浏览器才支持的

。但是现在实际开发中，我们不太关注兼容性写法，可以放心使用

# 总结

。background-color:    背景颜色   预定义的颜色值/十六进制/rgb代码，默认是transparent(透明)，

。background-image:   背景图片    url(图片路径)。none是无背景图（默认的）

。background-repeat:   是否平铺：repeat/no-repeat/repeat-x/repeat-y，默认情况下都是平铺的background-repeat:repeat

。background-position：  背景位置    length/position 分别是x和y的坐标

。background-attachment:   背景附着   scroll(背景滚动)   fixed(背景固定)     （默认：  scroll）

。背景简写：  书写简单     ：背景颜色   背景图片地址  背景平铺    背景滚动   背景位置

。背景色半透明：   背景颜色半透明   background：rgba（0,0，0,0.3），后面必须是四个值