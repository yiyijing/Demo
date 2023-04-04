#  JavaScript DOM

# 1、DOM概述

当网页被加载时，浏览器会创建页面的文档对象模型（**D**ocument **O**bject **M**odel）。

HTML **DOM** 模型被结构化为 **对象树** ：

![image-20201019104459658](https://img-blog.csdnimg.cn/img_convert/910bb72bbde0f438991f02a6cda866d7.png)

通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

JavaScript 能改变页面中的所有 HTML 元素
JavaScript 能改变页面中的所有 HTML 属性
JavaScript 能改变页面中的所有 CSS 样式
JavaScript 能删除已有的 HTML 元素和属性
JavaScript 能添加新的 HTML 元素和属性
JavaScript 能对页面中所有已有的 HTML 事件作出反应
JavaScript 能在页面中创建新的 HTML 事件
换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准。

# 2、DOM文档节点

节点：Node——构成HTML文档最基本的单元。

常用节点分为四类：

- 文档节点：整个HTML文档
- 元素节点：HTML文档中的HTML标签
- 属性节点：元素的属性
- 文本节点：HTML标签中的文本内容

![image-20201019115515595](https://img-blog.csdnimg.cn/img_convert/6c58b926da64501f486305b5afe3d9f8.png)

## 2.1、元素节点

`document.getElementById()`，根据id属性值获取一个元素节点对象。

## 2.2、属性节点

例如：`元素节点.getAttributeNode("属性名")`，根据元素节点的属性名获取一个属性节点对象。

## 2.3、文本节点

`元素节点.firstChild;`，获取元素节点的第一个子节点，一般为文本节点。

# 3、查找 HTML 元素

## 3.1、方法介绍

方法	描述
document.getElementById(id)	通过元素 id 来查找元素。
document.getElementsByTagName(name)	通过标签名来查找元素。
document.getElementsByClassName(name)	通过类名来查找元素。
document.querySelector(CSS选择器)	通过CSS选择器选择一个元素。
document.querySelectorAll(CSS选择器)	通过CSS选择器选择多个元素。
获取 HTML 的值

## 3.2、方法介绍

方法	描述
元素节点.innerText	获取 HTML 元素的 inner Text。     //**文本内容**
元素节点.innerHTML	获取 HTML 元素的 inner HTML。   //**的html代码**
元素节点.属性	获取 HTML 元素的属性值。
元素节点.getAttribute(attribute)	获取 HTML 元素的属性值。

拓展知识1：

修改节点的内容除了常用的innerHTML和innerText之外，还有insertAdjacentHTML和insertAdjacentText方法，可以在指定的地方插入内容。insertAdjacentText方法与insertAdjacentHTML方法类似，只不过是插入纯文本，参数相同。

```
object.insertAdjacentHTML(where,html);
object.insertAdjacentText(where,text)
```

where：

- beforeBegin：插入到开始标签的前面
- beforeEnd：插入到结束标签的前面
- afterBegin：插入到开始标签的后面
- afterEnd：插入到结束标签的后面

![img](https://img-blog.csdnimg.cn/img_convert/dae7b01cf5aa68e8b71b939b4aea1a9b.png)

- html：一段html代码
- text：一段文本值

注意事项：

这两个方法必须等文档加载好后才能执行，否则会出错。
insertAdjacentText只能插入普通文本，insertAdjacentHTML插入html代码。
使用insertAdjacentHTML方法插入script脚本文件时，必须在script元素上定义defer属性。
使用insertAdjacentHTML方法插入html代码后，页面上的元素集合将发生变化。
insertAdjacentHTML方法不适用于单个的空的元素标签(如img，input等)。

# 3、修改 HTML 元素

方法	描述
document.createElement(element)	创建 HTML 元素节点。
document.createAttribute(attribute)	创建 HTML 属性节点。
document.createTextNode(text)	创建 HTML 文本节点。
元素节点.removeChild(element)	删除 HTML 元素。
元素节点.appendChild(element)	添加 HTML 元素。
元素节点.replaceChild(element)	替换 HTML 元素。
元素节点.insertBefore(element)	在指定的子节点前面插入新的子节点。

## 3.1、创建一个ul列表，然后在该列表中追加4个li标签


    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    
    <!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
    <script>
        var ul = document.createElement("ul");
    
        var li1 = document.createElement("li");
        var text1 = document.createTextNode("列表项1");
        li1.appendChild(text1);
        ul.appendChild(li1);
    
        var li2 = document.createElement("li");
        var text2 = document.createTextNode("列表项2");
        li2.appendChild(text2);
        ul.appendChild(li2);
    
        var li3 = document.createElement("li");
        var text3 = document.createTextNode("列表项3");
        li3.appendChild(text3);
        ul.appendChild(li3);
    
        var li4 = document.createElement("li");
        var text4 = document.createTextNode("列表项4");
        li4.appendChild(text4);
        ul.appendChild(li4);
    
        document.getElementsByTagName("body")[0].appendChild(ul);
    </script>
    </body>
    </html>
## 3.2、查找 HTML 父子

方法	描述
元素节点.parentNode	返回元素的父节点。
元素节点.parentElement	返回元素的父元素。
元素节点.childNodes	返回元素的一个子节点的数组（包含空白文本Text节点）。
元素节点.children	返回元素的一个子元素的集合（不包含空白文本Text节点）。
元素节点.firstChild	返回元素的第一个子节点（包含空白文本Text节点）。
元素节点.firstElementChild	返回元素的第一个子元素（不包含空白文本Text节点）。
元素节点.lastChild	返回元素的最后一个子节点（包含空白文本Text节点）。
元素节点.lastElementChild	返回元素的最后一个子元素（不包含空白文本Text节点）。
元素节点.previousSibling	返回某个元素紧接之前节点（包含空白文本Text节点）。
元素节点.previousElementSibling	返回指定元素的前一个兄弟元素（相同节点树层中的前一个元素节点）。
元素节点.nextSibling	返回某个元素紧接之后节点（包含空白文本Text节点）。
元素节点.nextElementSibling	返回指定元素的后一个兄弟元素（相同节点树层中的下一个元素节点）。

## 3.3、dom事件

| 属性      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| onblur    | 当窗口失去焦点时运行脚本。                                   |
| onfocus   | 当窗口获得焦点时运行脚本。                                   |
| onload    | 当文档加载之后运行脚本。                                     |
| onresize  | 当调整窗口大小时运行脚本。                                   |
| onstorage | 当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本。 |

## 3.4、表单事件

表单事件在HTML表单中触发 (适用于所有 HTML 元素，但该HTML元素需在form表单内)：

属性	描述
onblur	当元素失去焦点时运行脚本。
onfocus	当元素获得焦点时运行脚本。
onchange	当元素改变时运行脚本。
oninput	当元素获得用户输入时运行脚本。
oninvalid	当元素无效时运行脚本。
onselect	当选取元素时运行脚本。
onsubmit	当提交表单时运行脚本。

## 3.5、键盘事件

通过键盘触发事件，类似用户的行为：

| 属性       | 描述                         |
| ---------- | ---------------------------- |
| onkeydown  | 当按下按键时运行脚本。       |
| onkeyup    | 当松开按键时运行脚本。       |
| onkeypress | 当按下并松开按键时运行脚本。 |

拓展知识：

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标的状态。

在IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的。

解决事件对象的兼容性问题：event = event || window.event;

## 3.6、键鼠属性：

属性	描述
ctrlKey	返回当事件被触发时，“CTRL” 键是否被按下。
altKey	返回当事件被触发时，“ALT” 是否被按下。
shiftKey	返回当事件被触发时，“SHIFT” 键是否被按下。
clientX	返回当事件被触发时，鼠标指针的水平坐标。
clientY	返回当事件被触发时，鼠标指针的垂直坐标。
screenX	返回当某个事件被触发时，鼠标指针的水平坐标。
screenY	返回当某个事件被触发时，鼠标指针的垂直坐标。

## 3.7、、鼠标事件

通过鼠标触发事件，类似用户的行为：

属性	描述
onclick	当单击鼠标时运行脚本。
ondblclick	当双击鼠标时运行脚本。
onmousedown	当按下鼠标按钮时运行脚本。
onmouseup	当松开鼠标按钮时运行脚本。
onmousemove	当鼠标指针移动时运行脚本。
onmouseover	当鼠标指针移至元素之上时运行脚本，不可以阻止冒泡。
onmouseout	当鼠标指针移出元素时运行脚本，不可以阻止冒泡。
onmouseenter	当鼠标指针移至元素之上时运行脚本，可以阻止冒泡。
onmouseleave	当鼠标指针移出元素时运行脚本，可以阻止冒泡。
onmousewheel	当转动鼠标滚轮时运行脚本。
onscroll	当滚动元素的滚动条时运行脚本。

## 3.8、媒体事件

通过视频（videos），图像（images）或音频（audio） 触发该事件。

属性	描述
onabort	当发生中止事件时运行脚本。
oncanplay	当媒介能够开始播放但可能因缓冲而需要停止时运行脚本。
oncanplaythrough	当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本。
ondurationchange	当媒介长度改变时运行脚本。
onemptied	当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本。
onended	当媒介已抵达结尾时运行脚本。
onerror	当在元素加载期间发生错误时运行脚本。
onloadeddata	当加载媒介数据时运行脚本。
onloadedmetadata	当媒介元素的持续时间以及其它媒介数据已加载时运行脚本。
onloadstart	当浏览器开始加载媒介数据时运行脚本。
onpause	当媒介数据暂停时运行脚本。
onplay	当媒介数据将要开始播放时运行脚本。
onplaying	当媒介数据已开始播放时运行脚本。
onprogress	当浏览器正在取媒介数据时运行脚本。
onratechange	当媒介数据的播放速率改变时运行脚本。
onreadystatechange	当就绪状态（ready-state）改变时运行脚本。
onseeked	当媒介元素的定位属性不再为真且定位已结束时运行脚本。
onseeking	当媒介元素的定位属性为真且定位已开始时运行脚本。
onstalled	当取回媒介数据过程中（延迟）存在错误时运行脚本。
onsuspend	当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本。
ontimeupdate	当媒介改变其播放位置时运行脚本。
onvolumechange	当媒介改变音量亦或当音量被设置为静音时运行脚本。
onwaiting	当媒介已停止播放但打算继续播放时运行脚本。

## 3.9、其它事件

| 属性     | 描述                                    |
| -------- | --------------------------------------- |
| onshow   | 当 <menu> 元素在上下文显示时触发。      |
| ontoggle | 当用户打开或关闭 <details> 元素时触发。 |

## 3.10、事件冒泡

事件的冒泡（Bubble）：所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡可以通过事件对象来取消冒泡。

## 3.11、事件委派

我们希望只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素，也就是事件的委派。事件的委派，是指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。事件委派是利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序的性能。

## 3.12、事件传播

事件的传播：关于事件的传播网景公司和微软公司有不同的理解

微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。

网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素。

W3C综合了两个公司的方案，将事件传播分成了三个阶段：

（1）捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
（2）目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件
（3）冒泡阶段：事件从目标元素向它的祖先元素传递，依次触发祖先元素上的事件
![image-20201021145200137](https://img-blog.csdnimg.cn/img_convert/606369d19295725d727fd8a04285f3e2.png)

注意：如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false，并且注意，IE8及以下的浏览器中没有捕获阶段，我们可以使用event.stopPropagation();取消事件传播。
