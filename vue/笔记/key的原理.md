# key的原理

![key模板](C:\Users\86173\Desktop\vue\笔记\images\key模板.png)

在真实的开发中，只需要将红色的东西传递给数据服务器，服务器将数据存放到数据库，数据库为我们生成id。

# 1、首先添加数据

![向模板中添加数据](C:\Users\86173\Desktop\vue\笔记\images\向模板中添加数据.png)

上述代码中，通过button按钮，为其添加一个点击事件，且只能单机一次可用once，当单击的时候调用add；在add方法中，通过创建一个对象p，将对象p添加到这个数据

需要注意下述：

![遍历的key](C:\Users\86173\Desktop\vue\笔记\images\遍历的key.png)

上面整个结构，在书写模板的时候，每个li都有一个属性叫key，值是遍历时候的索引值，代码如下：

![遍历代码](C:\Users\86173\Desktop\vue\笔记\images\遍历代码.png)

，但是在生成页面上的真是dom中，貌似每一个li不再拥有key属性了

## 1.1、思考为什么页面中的key没有了

因为key是Vue内部在使用的，模板中的确使用的key，Vue也的确使用了，Vue用完之后，在真是dom中给干掉了。如果不写key，写a,在真是dom就真是存在，因为a不是特殊属性。也就是说所有元素身上的key，都被vue给征用了，你不能使用，给Vue使用了，所以写了也不现实

这就存在一个效率问题

## 1.2、添加数据

当单机添加老刘的信息的时候会出现下述结果：

![单击完的运行结果](C:\Users\86173\Desktop\vue\笔记\images\单击完的运行结果.png)

数据都形成了错乱，代码如下：

![错乱代码](C:\Users\86173\Desktop\vue\笔记\images\错乱代码.png)

上述代码：有问题，错在特殊情况下用index做索引值，用p.id（p.id是数据的唯一标识）不会出现问题，运行结果如下：

![p.id](C:\Users\86173\Desktop\vue\笔记\images\p.id.png)

注意：如果不写key的代码：也会出现问题，代码如下：

![不写key](C:\Users\86173\Desktop\vue\笔记\images\不写key.png)

所以：不管写什么都会出现问题，只有p.id（p.id是数据的唯一标识）才不会出问题

# 2.数据代理

执行的完整流程：

![数据代理的完整流程](C:\Users\86173\Desktop\vue\笔记\images\数据代理的完整流程.png)

## 2.1、首先初始化

![初始化数据](C:\Users\86173\Desktop\vue\笔记\images\初始化数据.png)

## 2.2、首先vue根据数据生成虚拟的dom

![生成虚拟dom](C:\Users\86173\Desktop\vue\笔记\images\生成虚拟dom.png)

截至目前，dom中什么也没有，只是内存中出现了三个虚拟节点，编号是0，1，2，里面有文本节点和标签节点

## 2.3、虚拟dom转为真实dom

![虚拟dom转为真实dom](C:\Users\86173\Desktop\vue\笔记\images\虚拟dom转为真实dom.png)

接下来用户在真是dom中输入信息，输入的东西残留在真是dom，用户输入完毕后初始化已经完成

## 2.4、新的数据数据出现了

![新的数据出现](C:\Users\86173\Desktop\vue\笔记\images\新的数据出现.png)

新的数据排在所有数据的前面，随后根据新的数据生成新的虚拟dom

## 2.5、新的虚拟dom

![新的虚拟dom](C:\Users\86173\Desktop\vue\笔记\images\新的虚拟dom.png)

这时候新的数据的索引值排在最前面，因为index作为key,接下来并没有转成真实dom，而是将新的虚拟dom，与旧的虚拟dom去进行对比，对比的时候依赖key对比

![新旧虚拟dom对比](C:\Users\86173\Desktop\vue\笔记\images\新旧虚拟dom对比.png)

首先来到新的虚拟dom按照顺序取出第一个，然后根据虚拟dom中标识key=0的节点，然后去找旧的虚拟dom中的标识key=0的那个节点,找到之后对比里面的内容，里面有两个节点，第一个几点：老刘30的文本节点，还有一个input标签节点。随后发现

![虚拟dom节点比较](C:\Users\86173\Desktop\vue\笔记\images\虚拟dom节点比较.png)

文本节点的内容不一样，不一样；然后对比input标签节点，在虚拟的dom中发现标签节点的一样（因为对比的是虚拟dom的input里面的value是在真实dom里面，这个是在内存里面对比的是虚拟dom，标签名，标签结构，标签所有都一样，所以这两个虚拟dom的input标签一样）。经过对比之后，将虚拟dom转换为真实dom,不一致的结果不能复用，不一样的，将新的虚拟dom转换为真实dom，一样的结果进行复用（一样的时候，因为旧的虚拟dom已经转为真实dom，又因为input标签的两个虚拟dom一样，所以直接用原来真是dom直接拿过来使用，这种就叫做复用）

![复用](C:\Users\86173\Desktop\vue\笔记\images\复用.jpg)

以此类推

## 2.7、为什么会出现效率低的问题

里面的完全可以复用，错就错在用index作为key

为啥效率低，因为后来文本节点没有复用

用id作为key没有问题

### 2.7.1、初始化---生成虚拟dom---转为虚拟dom

![id初始化](C:\Users\86173\Desktop\vue\笔记\images\id初始化.png)

### 2.7.2、添加新数据---新的虚拟dom

![id添加数据](C:\Users\86173\Desktop\vue\笔记\images\id添加数据.png)

对比之后发现没有这个key=4

### 2.7.3、虚拟dom转为真实dom

![虚拟dom转为真实dom2](C:\Users\86173\Desktop\vue\笔记\images\虚拟dom转为真实dom2.png)

出来老刘，其他的都是复用的

## 2.8、对比

用id作为key优势：

。效率高

。数据也没有错乱

如果没有写key也会出现问题，因为vue在使用v-for遍历的时候，自动将index作为key

# 3、总结

![总结数据代理](C:\Users\86173\Desktop\vue\笔记\images\总结数据代理.png)