

# Promise

# 1、回顾

## 1.1

- 函数对象：将函数作为对象使用时，简称为函数对象
- 实例对象：new函数产生的对象，简称对象

## 1.2、回调函数

- 同步回调：立即执行，完全执行完了才结束，不会放入回调队列中。如：数组遍历相关的回调函数/Promise的excutor

- 异步回调:不会立即执行，会放入回调队列中将来执行。如：定时器回调、ajax、Promise成功/失败的回调

## 1.3、Err函数

进一步理解js中的错误（ERROR）和错误处理

- 错误类型：

  。Error:所有错误的父类型

  。referenceError:引用的变量不存在

  。TypeError：数据类型不正确的错误

  。RangeError:数据不在所允许的范围内

  。SyntaxError:语法错误

- 错误处理：捕获处理

  。捕获错误:try ....catch

  。抛出错误：throw  error

- 、错误对象

  。message属性：错误相关信息

  。stack属性：函数调用栈记录信息

# 2、Promise

Promise是js中进行异步编程的新的解决方案

具体表达：

- 从语法上说是一个构造函数
- 从功能上说：Promise对象用来封装一个异步操作并且可以获取其结果

promise的状态：

- pendding变为resolved
- pending 变为rejecte

只有这2中，且一个Promise对象只能改变一次

无论变为成功还是失败，都会有一个结果数据

成功的结果数据一般为value，失败的结果数据一般为reason

![](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230402104037932.png)

## 2.1、Promise的使用流程

// 1、创建一个新的对象

// 2、执行异步操作任务

 // 3、如果成功了，执行resolve (value)， // 如果失败了，调用rejected(reason)

## 2.2、Promise的基本使用

```
 // 1、创建一个新的对象
        let p = new Promise((resolve, reject) => {
            // 2、执行异步操作任务
            setTimeout(()=>{
                const time=Date.now()
                if(time%2==0){
                    // 3、如果成功了，执行resolve (value)
                    resolve("，成功的数据，time="+time);
                }else{
                    // 如果失败了，调用rejected(reason)
                    reject("，失败的数据，time="+time);
                }
            })
        })
        p.then(value=>{
            console.log("成功的回调"+value);
        },reason=>{
            console.log("失败的回调"+reason);
        })
```

## 2.3、为什么要使用Promise

- 指定回调函数的方式更加灵活

  。旧的：必须在启动异步任务前指定

  promise：启动异步任务=》返回promise对象绑定回调函数（甚至可以在异步）

- 支持链式调用，可以解决回调地狱问题

  。什么是回调地狱：回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的函数执行的条件

  。回调地狱的缺点：不便于阅读/不便于异常处理

  。解决方案：promsie链式调用

  。终极解决方案：await、async

# 2.4、Promise的API

Promise.all()方法是函数对象的方法

p.then()方法是实例对象的方法，所以会出现Promise.prototype.then()

所以原型对象上的方法应该由实例对象调用

1. Promise构造函数：Promise（excutor）{}

   。excutor函数：同步执行（resolve,reject）=>{}

   。resolve函数：内部定义成功时我们调用的函数value=>{}

   。reject函数：内部函数失败时我们调用的函数reason=>{}

   说明：excutor会在Promise内部立即同步回调，异步操作在执行器中执行

2. Promise.prototype.then():（onresolved，onRejected）=>{}

   。onresolved函数：成功的回调函数（value）=>{}

   。onRejected函数：失败的回调函数（reason）=>{}

   说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调返回一个新的Promise对象

3. Promise.prototype.catch():（onRejected）=>{}

   onRejected函数：失败的回调函数（reason）=>{}

   说明：then()的语法糖，相当于then(undefied,onRejected)

4. Promise.resolve方法：(value)=>{}

   。value:成功的回调

   说明：返回一个成功/失败的Promise对象

5. Promise.all():（Promise）=>{}

   promise:包含n个promise的数组

   说明:返回一个新的promise，只有所有的promise都成功才成功，只有一个失败了就直接失败

6. Promise.race():（Promise）=>{}

   。promise：包含了n个promsie的数组

   说明：返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态

# 3、Promise的关键问题

## 3.1、如何改变Promise状态

1. resolve(value):如果当前是pendding就会变成resolved
2. reject(reason):如果当前是pendding就会变成rejected
3. 抛出异常：如果当前是pendding就会变成rejected

![image-20230402131803848](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230402131803848.png)

## 3.2、一个Promise指定多个成功/失败回调函数，都会调用吗？

当promise改变为对应状态时都会调用

## 3.3、改变Promise状态和指定回调函数谁先谁后

1. 都有可能，正常情况下是谁先指定回调在改变状态，但也可以先改变状态再指定回调

2. 如何先改变状态再指定会到：

   。在执行延时器中直接调用resolve()/reject()

   。延迟更长时间才调用then()

3. 什么时候才能得到数据？

   。如果先指定的回调，那当状态发生改变时，回调函数就会调用

![image-20230402134701729](C:\Users\86173\AppData\Roaming\Typora\typora-user-images\image-20230402134701729.png)

## 3.3、promise.then()

1. 简单表达：由then()指定的回调函数执行的结果决定

2. 详细表达：

   。如果抛出异常，新的promise变为reject,reason为抛出的异常

   。如果返回的是非promise的任意值，新promise变为resolved,value为返回的值

   。如果返回的是另一个新的promsie，此时的promise的结果就会称为新的promise的结果