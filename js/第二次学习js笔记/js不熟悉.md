# js不熟悉

判断当前对象是否包含指定的属性或方法可以使用 in 运算符来检查

# 1、in

![image-20230318102454882](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230318102454882.png)

# 2、hasOwnProperty()

如果我只想要检查自身对象是否含有某个方法或属性，我们可以使用Object的hasOwnProperty()方法，它返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。如下代码演示：

```
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);           //true
console.log("name" in mc);           //true

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age"));           //true
console.log(mc.hasOwnProperty("name"));           //false
```

# 3、继承（只学前3）

- **原型链继承**
- **借用构造函数继承**
- **组合继承（重要）**

- 原型式继承
- 寄生式继承
- 寄生组合式继承

# 4、apply()、和call()

# 5、正责方法

split()、search、match、search、replace

# 6、insertAdjacentText和insertAdjacentHTML

```
object.insertAdjacentHTML(where,html);
object.insertAdjacentText(where,text)
```

![image-20230319102022999](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230319102022999.png)

![image-20230319102056313](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230319102056313.png)

# 7、dom文档操作

# 8、bom

| [clientX](https://www.w3school.com.cn/jsref/event_clientx.asp) | 返回当事件被触发时，鼠标指针的水平坐标。     |
| ------------------------------------------------------------ | -------------------------------------------- |
| [clientY](https://www.w3school.com.cn/jsref/event_clienty.asp) | 返回当事件被触发时，鼠标指针的垂直坐标。     |
| [screenX](https://www.w3school.com.cn/jsref/event_screenx.asp) | 返回当某个事件被触发时，鼠标指针的水平坐标。 |
| [screenY](https://www.w3school.com.cn/jsref/event_screeny.asp) | 返回当某个事件被触发时，鼠标指针的垂直坐标。 |

# 9、继承

# 10、闭包

