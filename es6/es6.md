# es6

# 1、let、const、var的区别

# 2、Symbol()

Symbol是ES6中引入的一种新的基本数据类型，表示独一无二的，不能与其他数据类型进行运算

```
const a = Symbol();
console.log(a);  //Symbol()
//因为Symbol是基本数据类型，而不是对象，不能 new 。
const a = new Symbol();//报错，Symbol is not a constructor
```

# 3、模板字符串

- 在ES6之前，处理模板字符串：
  通过“\”和“+”来构建模板
- 对ES6来说:
  用`${}`来界定；
  反引号`(``)`直接搞定；

```js
<script>
      url="xxxxxx"
       // es6之前
       let html="<div>"+
                  " <a>"+url+"</a>"+
               "</div>";
		//es6
       let eshtml=`<div>
                   <a>${url}</a>
               </div>`
</script>
```

# 4、字符串新方法

- `includes()`判断字符串是否包含参数字符串，返回boolean值。
- `startsWith() / endsWith()`，判断字符串是否以参数字符串开头或结尾。返回boolean值。这两个方法可以有第二个参数，一个数字，表示开始查找的位置。

```
let str = 'blue,red,orange,white'; str.includes('blue');*//true* str.startsWith('blue');*//true* str.endsWith('blue');*//false*
```

- `repeat()`方法按指定次数返回一个新的字符串。

```
console.log('hello'.repeat(2));   *//'hellohello'*
```

- `padStart()/padEnd()`，用参数字符串按给定长度从前面或后面补全字符串，返回新字符串。

```
let arr = 'hell';
console.log(arr.padEnd(5,'o'));  //'hello'
console.log(arr.padEnd(6,'o'));  //'helloo'
console.log(arr.padEnd(6));  //'hell  ',如果没有指定将用空格代替

console.log(arr.padStart(5,'o'));  //'ohell'
```

# 5、结构赋值

[解构赋值](https://so.csdn.net/so/search?q=解构赋值&spm=1001.2101.3001.7020)是对赋值运算符的扩展。它是一种针对**数组**或者**对象**进行[模式匹配](https://so.csdn.net/so/search?q=模式匹配&spm=1001.2101.3001.7020)，然后对其中的变量进行赋值。
**字符串**、以及ES6新增的**Map**和**Set** 都可以使用解构表达式

## 5.1数组的结构赋值

```
let [a,b,c] = [1,2,3];
console.log(a,b,c);    //1,2,3
let [a,b,c] = [1,,3];
console.log(a,b,c);    //1,undefined,3
let [a,,b] = [1,2,3];
console.log(a,b);//1,3
let [a,..b] = [1,2,3];  //...是剩余运算符，表示赋值运算符右边除第一个值外剩余的都赋值给b
console.log(a,b);//1,[2,3]
```

## 5.2、对象的结构赋值

对象的解构赋值和数组类似，不过左边的变量名需要使用对象的属性名，并且用大括号{}而非中括号[]

```
let obj = { 
	name: "ren", 
	age: 12, 
	sex: "male" 
};
let { name, age, sex } = obj;
console.log(name, age, sex); //'ren' 12 'male'
let { name: myName, age: myAge, sex: mySex } = obj; //自定义变量名
console.log(myName, myAge, mySex); //'ren' 12 'male'
```

### 5.2.1、Map

Map：属于es6新增加的对象

Map对象用于保存键值对，任何的javascript支持的值都可以作为一个键key或者一个值value

与对象不同的是：

- object的键只能是字符串或者es6的symbol值，而map可以是任何值
- map对象有一个size属性，存储了键值的个数，而object对象没有类似的属性

```
let myMap = new Map([['name','ren'],['age',12]]);
console.log(myMap);  //{'name'=>'ren','age'=>12}
myMap.set('sex','male');
console.log(myMap);  //{'name'=>'ren','age'=>12,'sex'=>'male'}
console.log(myMap.size);  //3
myMap.get('name');  //'ren'
myMap.has('age');  //true
myMap.delete('age');  //true
myMap.has('age');  //false
myMap.get('age');  //undefined
```

### 5.2.2、Set()

可以理解为后端的Set集合对象
Set对象和Map对象类似，但它存储不是键值对。类似数组，但它的**每个元素都是唯一的

```
let mySet = new Set([1,2,3]);//里面要传一个数组，否则会报错
console.log(mySet);  //{1,2,3}
mySet.add(4);
console.log(mySet);  //{1,2,3,4}
mySet.delete(1);  //true
mySet.has(1);  //false
console.log(mySet);  //{2,3,4}
```

