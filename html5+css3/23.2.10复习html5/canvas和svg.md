# 图形可视化

# canvas

canvas使用的是javascript动态生成

< canvas>标签：画布标签 （height，width，半透明），本身不具备绘图能力，可以通过脚本（通常指js）来实现

```html5
width：设置画布宽度，默认为300px
height：设置画布高度，默认为150px
注意：不能通过css设置画布大小！
```

### 基本图形绘制

1.canvasOBJ.getContext（“2d”）：返回一个用来在画布上绘图的方法和属性的对象

2.ctx.beginPath():开始/重新绘制路径

3.ctx.closePath():结束绘制路径

4.ctx.moveTo（x，y）：设置路径的起点

5.ctx.lineTo(x,y):设置路径的另一个点

6.ctx.stroke():绘制路径（空心）

7.ctx.fill():填充路径（实心）

8.ctx.acr():绘制圆形或圆弧路径

9.ctx.rect():绘制矩形路径

10.ctx.strokeRect():绘制空心矩形

11.ctx.fillRect():绘制实心矩形

12.ctx.strokeStyle()：设置笔触的颜色

13.ctx.lineWidth：设置线条粗细（px）

14.ctx.fillStyle:设置fill时的相关属性

15.设置渐变色

```
var grident = ctx.createLinearGradient(渐变开始的x坐标, 渐变开始的y坐标, 渐变结束的x坐标, 渐变结束的y坐标);
    //添加渐变色及位置
    grident.addColorStop(0, "pink"); //渐变开始的颜色
    grident.addColorStop(0.6, "lightblue");//添加中间的渐变颜色
    grident.addColorStop(1, "lightyellow");//渐变结束的颜色
    ctx.fillStyle = grident; //填充样式为渐变对象
    //填充已定义的路径
    ctx.fill();
```

16.ctx.strokeText():绘制空心的文字

17.ctx.fillText():绘制实心的文字

18.ctx.font:设置文字相关属性

19.ctx.drawImage():绘制图像

20.ctx.scale（）：缩放画布

21.ctx.rotate（）：旋转画布

22.ctx.translate():平移画布

注意：缩放、旋转、平移实际是改变原点的位置，只对变换之后的绘制有影响；画布显示区域为未改变之前的位置不变

23.ctx.clearRect():清除矩形区域内的像素；可用来清空画布

24，ctx.save():保存绘图状态 -- 不能保存绘制的图形

25.ctx.restore():返回保存的绘图状态 -- restore()和save()对应

restor()只能小于save()次数



# svg相当于ai

使用xml静态描述

基于矢量（公式），不失真

修改后不需要重绘

1.可伸缩矢量图，扩展名`.svg`

2.压缩和放大都不改变画质

3.通过`xml`描述的2D图片

4.只要能够打开`xml`文件的编辑器都可以编辑`svg`图片

5.优点：

```
1.画质不会随压缩改变(不失真)
2.svg可以通过js编辑
3.体积更小
```

## 二、使用svg

1.使用`<img>`标签引入

2.作为背景图片引入

3.使用`<svg>`标签绘制图形：不能写`.svg`文件中的`xml`头

```
< svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
    < polygon points="100,10 40,180 190,60 10,60 160,180">
< /svg>
```

4.使用<embed>标签引入：将svg作为多媒体插件引入

```
< embed src="./takeout/images/shopping_cart.svg" type="">
```

5.使用< object>标签引入:将svg作为对象引入

```
 < object d ata=" ./takeout/images/thumb_down.svg">< /object>
```

6.使用<iframe>标签引入：将svg作为框架页引入

```
< iframe src="./takeout/images/favorite.svg"></iframe>


```

```
rame src="./takeout/images/favorite.svg"></iframe>
```

## 三、设置svg样式

1.直接通过`CSS`更改样式：1.`<svg>`标签

2.`<img>`标签：不能直接更改，可以通过插件实现

```
以svg-inject.min.js为例：
1.引入svg-inject.min.js
2.在svg的图片标签上写上：οnlοad="SVGInject(this)"
3.svg所在页面打开方式要更改为web形式
注意：更改样式不能再使用img，必须更改为svg或class等
```

2.通过js更改样式''

# 四、canvas使用

## 1、canvas的使用

canvas 绘制图形的基本步骤：

① 创建画布：< canvas>< /canvas>

② 准备画笔（获取上下文对象）：canvas.getContext(‘2d’);

③ 开始路径规划 ：context.beginPath();

④ 移动起始点 ：context.moveTo(x, y);

⑤ 绘制线（矩形、圆形、图片…）：context.lineTo(x, y);

⑥ 闭合路径：context.closePath();

⑦ 绘制描边 ：context.stroke();

![image-20230327093354188](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230327093354188.png)

## 2、 canvas 绘制矩形

		< canvas id="canvas" width="400" height="300">
			您的浏览器不支持canvas标签，请更新浏览器
		< /canvas>
		< script>
			var canvas = document .getElementById('canvas');// 获取canvas标签
			var context = canvas .getContext('2d')// 获得context对象
			context. fillStyle = 'red';	// 设置填充颜色
			context. fillRect(0,0,200,100);	// 绘制填充的矩形
		< /script>
	< /body>
			
- 设置 fillStyle 属性可以是 CSS 颜色、渐变或图案。fillStyle 默认设置是 `#000000`（黑色）。
- fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。

## 3、 canvas 绘制圆形

```
arc(x, y, r, start, stop)
```

```
参数分别是：（圆心x坐标, 圆心y坐标, 半径r, 开始弧度, 结束弧度）。
```

结束弧度的计算公式：`角度 * Math.PI / 180`。

```
<script>
    var canvas = document.getElementById('canvas');	// 获取canvas标签
    var context = canvas.getContext('2d');// 获得context对象
    context.arc(100, 100, 50, 0, 360 * Math.PI / 180);// 绘制圆形
    context.stroke();// 描边

</script>
```

## 4、canvas 绘制椭圆

```
ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
```

```
参数分别是：（椭圆圆心x坐标, 椭圆圆心y坐标, 半径x, 半径y, 旋转的角度, 起始角, 结束角, 顺时针/逆时针）
```

```
< script>
    var canvas = document.getElementById('canvas');// 获取canvas标签
    var context = canvas.getContext('2d');	// 获得context对象
    context. ellipse(120, 100, 100, 50, 0, 0, 360 * Math.PI / 180);	// 绘制椭圆
    context.stroke();	// 描边
</script>
```

## 5、anvas 渐变

渐变可以填充到矩形、圆形、线条、文本等，各种形状可以自定义不同的颜色。

有两种方式来设置 Canvas 渐变：

createLinearGradient(x, y, x1, y1)：创建线条渐变；
createRadialGradient(x, y, r, x1, y1, r1)：创建一个径向/圆渐变。
```
< script>
    var canvas = document.getElementById('canvas');	// 获取canvas标签
    var context = canvas.getContext('2d');	// 获得context对象
    var gradient = context.createLinearGradient(0, 0, 200, 0);	// 创建渐变
    gradient.addColorStop(0, 'red');	// 设置渐变颜色（开始）
    gradient.addColorStop(1, 'green');	// 设置渐变颜色（结束）
    context.fillStyle = gradient;	// 设置渐变填充样式
    context.fillRect(10, 10, 200, 80);	// 绘制矩形
</script>
```

#  五、SVG的使用

## 1、SVG

SVG 英文全称为 Scalable Vector Graphics，意思为可缩放的矢量图。

HTML5 支持内联 SVG。

HTML `<svg> `元素是 SVG 图形的容器。

SVG 有多种绘制路径、框、圆、文本和图形图像的方法。

###  2、什么是SVG ?

- SVG 指可伸缩矢量图形（Scalable Vector Graphics）；
- SVG 用于定义用于网络的基于矢量的图形；
- SVG 使用 XML 格式定义图形；
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失；
- SVG 是万维网联盟的标准。

###  3、SVG优势

与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

- SVG 图像可通过文本编辑器来创建和修改；
- SVG 图像可被搜索、索引、脚本化或压缩；
- SVG 是可伸缩的；
- SVG 图像可在任何的分辨率下被高质量地打印；
- SVG 可在图像质量不下降的情况下被放大。

### 4、SVG 与 Canvas 两者间的区别

SVG 是一种使用 XML 描述 2D 图形的语言。

Canvas 通过 JavaScript 来绘制 2D 图形。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

Canvas 是逐像素进行渲染的。在 Canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
![image-20230327094456903](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230327094456903.png)

## 7、绘制圆和椭圆

### 7.1、绘制矩形

```
< svg width="500" height="500">
	 < rect x="100" y="10" width="100" height="100" rx="50"</rect>
< /svg>
```

方法二：使用专门的标签绘制，主要属性：

- cx/cy：圆绘制的位置，圆心位置。
- r：圆的半径。