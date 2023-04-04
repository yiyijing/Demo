# call()、apply()和bind()

# 1、this

bind、call、apply都是用来指定一个函数内部的this的值， 先看看bind、call、apply的用法

```
var year = 2021
function getDate(month, day) {
  return this.year + '-' + month + '-' + day
}

let obj = {year: 2022}
getDate.call(null, 3, 8)    //2021-3-8
getDate.call(obj, 3, 8)     //2022-3-8
getDate.apply(obj, [6, 8])  //2022-6-8
getDate.bind(obj)(3, 8)     //2022-3-8
```

# 2、 call和apply

### 2.1.1. call() 方法

call()方法接受的语法和作用与apply()方法类似，只有一个区别就是call()接受的是一个参数列表，而apply()方法接受的是一个包含多个参数的数组。

二者都是函数对象Function的方法，且第一个参数都是要绑定对象的上下文
例如：

```
let obj = {
    a: 1,
    get: function(){
        return 2
    }
}
let g = obj.get
g.call({},1,2,3)
g.apply({},[1,2,3])
```

### 2.1.2、call方法调用父构造函数

```
function Product(name, price){
    this.name = name;
    this.food = food;
}

// 调用父构造函数的call方法来实现继承
function Food(name, price){
    Product.call(this.name, toy);
    this.category = 'food';
}

function Toy(name, price){
    Product.call(this, name, price);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

### 2.1.3、call调用匿名函数

```
var animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
];

for(var i = 0; i < animals.length; i++){
    (function(i){
        this.print = function(){
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i); //call调用匿名函数
}
```

### 2.1.4、call方法调用函数并且指定上下文的this

```
var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
};

function greet(){
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

greet.call(obj);  //"cats typically sleep between 12 and 16 hours"
```

### 2.1.5、call方法调用函数并且不指定第一个参数(argument)

在这个例子中，我们没有传递第一个参数，this的值将被绑定为全局对象。

```
var sData = 'marshall';

function display(){
    console.log("sData's value is %s",this.sData);
}

display.call();  // sData value is marshall
```

## 2.2. apply() 方法

使用 apply， 我们可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表。apply 可以使用数组字面量（array literal），如 fun.apply(this, [‘eat’, ‘bananas’])，或数组对象， 如 fun.apply(this, new Array(‘eat’, ‘bananas’))。

### 2.2.1、apply方法调用一个具有给定this值的函数，以及以一个数组的形式提供参数。

```
var array = ['marshall','eminem'];
var elements = [0,1,2];
array.push.apply(array,elements);
console.log(array);  //['marshall','eminem',0,1,2]
```

