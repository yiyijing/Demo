# Emmet语法

emmet语法的前身是Zen coding,它使用缩写，来提高html/css的编写速度，Vscode内部已经集成该语法。

# 1快速生成html结构语法

。生成标签，直接输入标签名，按tab键即可，比如div,按tab键即可生成<div></div>

。如果想要生成多个相同的标签，加上*就可以，比如div *3,就可以快速生成3个div

。如果父子级关系的标签，可以用>,比如：ul>li就可以

。如果是兄第关系的标签，用+就可以了，比如div+p

。如果生成带有类名或者id名字的，直接.demo或者#two tab键就可以了

。如果生成的div类名是有顺序的，可以用自增符号$

。如果想要在生成的标签内部写内容可以用{}表示

# 2快速生成css样式语法

css基本上采用简写形式即可

。比如w200   按tab生成width: 200px;

。比如lh26  按tab生成line-height: 26px;

# 3快速格式化代码

shift+alt+f  可以快速格式化代码

也可以设置当我们保存页面时候自动格式化代码

。文件---------首选项----------设置

。搜索emmet.include

。在setting.json下的【用户】中添加以下语句；

“edit.formatOnType”:true

"editor.formatOnSave":true

只需要设置一次即可，以后都可以自动保存格式化代码
