# 1 css字体设置

font属性用于定于字体系列，大小，粗细和文字样式（如斜体）

## 1.1设置字体

使用font-family属性定义文本的字体

语法格式：p{

font-family:"微软雅黑"；}

## 1.2设置字体大小

font-size定义字体大小

px(像素)大小是我们最常用的单位

谷歌游览器默认的字体大小是16px

不同的游览器可能默认显示的字号大小不一致，我们尽量给一个明确的值，不要默认大小

## 1.3设置字体的粗细

font-weight设置字体粗细

font-weight:normal正常字体,相当于font-weight:400（后边没有px）

font-weight：bold  加粗字体，相当于font-weight：700（后边没有px）

# 2文字样式

font-style:设置文本的风格

属性值：

normal:默认值，浏览器会显示标准的字体样式

italic 游览器会显示斜体的字体样式

# 3 复合字体属性

选择器{

font: font-style  font-weight  font-size/line-height   font-failmy

}

节约代码

不能颠倒顺序，各个属性用空格隔开

有些属性可以省略，但是font-size和font-failmy不能省略

# 4总结

font-size   :设置字号，单位为px像素

font-failmy   :设置字体

font-weight   :设置字体粗细，加粗700，不加粗400（无单位）

font-style   :字体样式，倾斜是italic,不倾斜是normal

font   :字体连写   ，有些属性考科一省略，但是font-size（字号）和font-failmy（字体）不能省略，必须按照顺序写





# css单行文字居中

文字行高=盒子高度

行高=上空隙+下空隙+文字
