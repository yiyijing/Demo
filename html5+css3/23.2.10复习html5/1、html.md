# 1、html

 < !DOCTYPE  html >表示声明为HTML5文档

< html>元素是HTML页面的根元素

< head >元素包含了文档元（meta）数据，如< mate charset="utf-8">定义网络编码格式是utf-8

< body>元素包含了可见的页面内容

# 2、常用的标签和属性

文本标签

文本格式化标签

1. < b >粗体文本< /b >
2. < code > 计算机代码< /code >
3. < em >强调文本< /em >
4. < i >斜体文本< /i >
5. < kbd>键盘输入< /kbd> 
6. < pre>预格式化文本< /pre>
7. < small>更小的文本< /small>

# 3、链接

普通的链接：< a href="http://www.example.com/">链接文本</a>
图像链接： < a href="http://www.example.com/">< img src="URL" alt="替换文本">< /a>
邮件链接： < a href="mailto:webmaster@example.com">发送e-mail< /a>
书签：
< a id="tips">提示部分< /a>
< a href="#tips">跳到提示部分< /a>

# 4、块级元素

常见块元素有：div、p、h1~h6、ul、ol、dl、li、dd、table、hr、blockquote、address、table、menu、pre，HTML5新增的header、section、aside、footer等等。

- （1）独占一行，排斥其他元素跟其位于同一行，包括块元素和行内元素；
- （2）块元素内部可以容纳其他块元素或行元素；

常见行内元素有：span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认display：inline-block）等。

- （1）可以与其他行内元素位于同一行；
- （2）行内内部可以容纳其他行内元素，但不可以容纳块元素，不然会出现无法预知的效果；

行内块元素

- #### img 、input 、td

# 5、HTML的3种列表

有序列表（ol）、无序列表(ul)和定义列表(dl)。

有序列表（ol）：

- ```html
  <``ol``>
    ``<``li``>有序列表项</``li``>
    ``<``li``>有序列表项</``li``>
    ``<``li``>有序列表项</``li``>
  </``ol``>
  ```

| type属性值 | 列表项的序号类型         |
| :--------- | :----------------------- |
| 1          | 数字1、2、3……            |
| a          | 小写英文字母a、b、c……    |
| A          | 大写英文字母A、B、C……    |
| i          | 小写罗马数字i、ii、iii…… |
| I          | 大写罗马数字I、II、III…… |

- 有序列表列表项符号由[list-style-type属性](http://www.lvyestudy.com/les_cj/cj_9.2.aspx)定义，到时候应该摒弃type属性

无序列表(ul)

```html
<``ul` `type``=``"列表项符号"``>
  ``<``li``>无序列表项</``li``>
  ``<``li``>无序列表项</``li``>
  ``<``li``>无序列表项</``li``>
</``ul``>
```

| type属性值 | 列表项的序号类型  |
| :--------- | :---------------- |
| disc       | 默认值，实心圆“●” |
| circle     | 空心圆“○”         |
| square     | 实心正方形“■”     |

定义列表

```html
<``dl``>
  ``<``dt``>定义名词</``dt``>
  ``<``dd``>定义描述</``dd``>
  ``……
</``dl``>
```

# 6、表格的合并

合并行使用td标签的[rowspan属性](http://www.lvyestudy.com/les_hj/hj_6.5.aspx)，而合并列则用到td标签的[colspan属性](http://www.lvyestudy.com/les_hj/hj_6.6.aspx)。

# 7、链接

< a href="链接地址" target="目标窗口的打开方式">

| target属性值 | 说明                           |
| :----------- | :----------------------------- |
| _self        | 默认方式，即在当前窗口打开链接 |
| _blank       | 在一个全新的空白窗口中打开链接 |
| _top         | 在顶层框架中打开链接           |
| _parent      | 在当前框架的上一层里打开链接   |

# 8、表单

表单标签共有4个：< input>、< textarea>、< select>和< option>。其中< select>和< option>是配合使用的。

< input type="表单类型"/>

![image-20230326153836633](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326153836633.png)

< textarea rows="行数" cols="列数">多行文本框内容< /textarea>

```
 < select multiple="mutiple" size="可见列表项的数目">
      <option value="选项值" selected="selected">选项内容</option>
    ……
      <option value="选项值">选项显示的内容</option>
< /select>
```

# 9、HTML5

### `2.HTML5` 拓展了哪些内容

- 语义化标签
- 本地存储
- 兼容特性
- `2D`、`3D`
- 动画、过渡
- `CSS3` 特性
- 性能与集成

# 10、语义化

由于HTML简单，很多初学者对它存在一种偏见，觉得它没多少东西，因此在学习的过 程中随便对待。其实，学习HTML的重点不在于掌握了多少标签，而是在于掌握标签的语义 以及如何编写一个语义结构良好的页面。

### 标题语义化

h1 - h6是标题标签，h表示“header”。h1~ h6在HTML语义化中占有极其重要的地位

### 图片语义化

在HTML中，我们使用img标签来表示图片。对于图片的语义化，我们从以下两个方面 来深入探讨一下。（1） alt属性和title属性。2） figure 元素和 

```
//figcaption 元素。
<figure>
    <img src="" alt=""/>
    <figcaption></figcaption>
</figure>
```

### 表格语义化

| ***\**\*font-weight属性值\*\**\*** | 说明                     |
| ---------------------------------- | ------------------------ |
| ***\**\*normal\*\**\***            | 默认值,正常体            |
| ***\**\*lighter\*\**\***           | 较细                     |
| ***\**\*bold\*\**\***              | 较粗                     |
| ***\**\*bolder\*\**\***            | 很粗（效果跟bold差不多） |

| 标 签   | 说 明            |
| ------- | ---------------- |
| table   | 表格             |
| caption | 标题             |
| thead   | 表头（语义划分） |
| tbody   | 表身（语义划分） |
| tfoot   | 表尾（语义划分） |
| tr      | 行               |
| th      | 表头单元格       |
| td      | 表格单元格       |

### 表单语义化

表单跟表格，这是两个完全不一样的概念，不过还是有不少初学者傻傻分不清。对于表单语义化，我们从2个方面来探究一下。

- label 标签。用于显示在输入控件旁边的说明性文字。也就是将某个表单元素和某段说明文字关联起来。

label标签的for属性有两个作用。

①语义上绑定了 label元素和表单元素。

②增强了鼠标可用性。也就是说我们点击label中的文本时，其所关联的表单元素也会 获得焦点。

```
< !DOCTYPE html>
< html xmlns="http://www.w3.org/1999/xhtml" >
< h ead>
    < title>< /title>
< /head>
< b ody>
    < d iv>
        < input id="Radio1" type="radio"/>单选框
        < input id="Checkbox1" type="checkbox" />复选框
    < /div>
    < hr />
    < div>
        < input id="rdo" name="rdo" type="radio"/><label for="rdo">单选框</label>
        < input id="cbk" name="cbk" type="checkbox" /><label for="cbk">复选框</label>
    < /div>
< /body>
< /html>
```

 ![image-20230326160451579](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326160451579.png)

- （2）fieldset 标签和 legend 标签。

使用fieldset和legend标签有两个作用。（1）增强表单的语义。（2）可以定义fieldset元素的disabled属性来禁用整个组中的表单元素。

```
< fieldset>
    <legend> 表单组标题 </legend>
< /fieldset>
```

### 其他语义化

换行符 <br/>

无序列表ul

strong标签和em标签

del标签和ins标签

img标签

## HTML5舍弃的标签

（1）仅仅为了定义样式，没有任何语义，因此被舍弃。

（2）很少使用或者已经被新标签代替，因此被舍弃。

| 标 签    | 说 明                              |
| -------- | ---------------------------------- |
| basefont | 定义页面文本的默认字体、颜色或尺寸 |
| big      | 定义大字号文本                     |
| center   | 定义文本居中                       |
| font     | 定义文本的字体样式                 |
| strike   | 定义删除线文本                     |
| s        | 定义删除线文本                     |
| u        | 定义下划线文本                     |

# 11、h5新增的标签

### 新增了那些语义化标签

- `header` --- 头部标签
- `nav` --- 导航标签
- `article` --- 内容标签
- `section` --- 块级标签
- `aside` --- 侧边栏标签
- `footer` --- 尾部标签

![image-20230326160827659](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326160827659.png)

### 使用语义化标签的注意

- 语义化标签主要针对搜索引擎
- 新标签可以使用一次或者多次
- 在 `IE9` 浏览器中，需要把语义化标签都转换为块级元素
- 语义化标签，在移动端支持比较友好，
- 另外，`HTML5` 新增的了很多的语义化标签，随着课程深入，还会学习到其他的

# 12、h5的多媒体音频标签

- 音频 -- `audio`
- 视频 -- `video`
- canvas
- svg

### `audio` 标签说明

- 可以在不使用标签的情况下，也能够原生的支持音频格式文件的播放，
- 但是：播放格式是有限的

### audio 支持的音频格式

- audio 目前支持三种格式

![image-20230326161016746](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161016746.png)

### audio 的参数

![image-20230326161042807](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161042807.png)

```
<body>
  <!-- 注意：在 chrome 浏览器中已经禁用了 autoplay 属性 -->
  <!-- <audio src="./media/snow.mp3" controls autoplay></audio> -->
  <!-- 
    因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件
   -->
  < audio controls>
    < source src="./media/snow.mp3" type="audio/mpeg" />
  < /audio>
</body>
```

# 13、多媒体视频标签(video、audio、svg、canvas)

### video 视频标签

![image-20230326161244621](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161244621.png)

< video src="./media/video.mp4" controls="controls"></video>

### video 参数

![image-20230326161319652](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161319652.png)

```
<body>
  <!-- <video src="./media/video.mp4" controls="controls"></video> -->
  <!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 -->
  < video controls="controls" autoplay muted loop poster="./media/pig.jpg">
    < source src="./media/video.mp4" type="video/mp4">
    < source src="./media/video.ogg" type="video/ogg">
  < /video>
</body>
```

多媒体标签总结
音频标签与视频标签使用基本一致

多媒体标签在不同浏览器下情况不同，存在兼容性问题

谷歌浏览器把音频和视频标签的自动播放都禁止了

谷歌浏览器中视频添加 muted 标签可以自己播放

注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册

# 14、新增 input 标签

![image-20230326161456793](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161456793.png)

# 15、新增表单属性

![image-20230326161520893](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230326161520893.png)

# 16、svg、canvas