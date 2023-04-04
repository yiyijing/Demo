# 1、html5新增input

属性值                说明

type=" emil "      限制用户输入必须为Email

type=" url"      限制用户输入必须为URL类型

type=" date"     限制用户输入必须为日期类型

type=" time "    限制用户输入类型必须为时间类型

type=" month"     限制用户输入必须为月类型

type=" week"     限制用户输入必须为周类型

type=" number"     限制用户输入必须为数字类型

type=" tel"         手机号码

type=" search"   搜索栏

type=" color"     生成一个颜色选择表单

重点记住：

number   、tel 、 search

# 2、html5新增表单属性

属性              值              说明

required      required  表单该属性表示内容不能为空必填

placeholder  提示文本   表单提示信息，有默认值将不显示

autofocus   autifocus  自动聚焦属性，页面加载完成聚焦指定表单

autocomplete  off/on   当用户在字段开始键入时，游览器基于之前键入过得值，应该显示出在字段中填写的选项。默认已经打开，如autocomplete="on"    ,关闭autocomplete="off"，需要放在表单内，同时加上name属性，同时成功提交

mutiple     mutiple    可以多选文件提交

。可以通过以下设置方式修改placeholder里面的字体颜色

input ：：placeholder{

color:pink;

}

![新添html属性](C:\Users\86173\Desktop\最新html\笔记\images\新添html属性.png)