# vertical- align属性应用

CSS的 vertical - align 属性使用场景：经常拥有设置图片或者表单（行内块元素）和文字垂直对齐

官方解释：   用于设置一个元素的垂直对齐方式，但是它只针对与行内元素或者行内块元素有效

语法：

vertical - align : baseline | top |middle | bottom

值                        描述

baseline             默认。元素放置在父元素的基线上

top                       把元素的顶端与行中最高元素的顶端对齐

middle                 把此元素放置在父元素的中部

bottom                把元素的顶端与行中最低的元素的顶端对齐

# 1图片、表单和文字对齐

图片、表单属于行内块元素，默认的vertical - align 是基线对齐

此时可以给图片、表单这些行内块元素的vertical属性设置为middle就可以让文字和图片垂直居中对齐了

# 2解决图片底部默认空白缝隙问题

bug : 图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐

主要解决方法有两种：

。给图片添加 vertical - align : middle | top | bottom 等；

。给图片转换为块级元素 display : block ;



