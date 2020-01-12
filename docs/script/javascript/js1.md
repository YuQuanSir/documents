# 对象

## 什么是对象？

- 除了基本数据类型，其他的都是对象
- 代表现实中的某个事物, 是该事物在编程中的抽象
- 多个数据的集合体(封装体)
- 用于保存多个数据的容器

## 为什么要使用对象？

- 便于多个有关联的数据统一管理

## 对象的组成？

- 属性：代表现实事物特性的数据（属性名（字符串类型）和属性值（任意类型）构成）
- 方法：代表现实事物行为的数据（属性值是函数）

## 普通对象

### 创建模式：

- 使用构造函数

```javascript
var obj = new Object()
obj.name = "Tom"
obj.age = 18
```

- 使用对象字面量

```javascript
var obj = {
  name:"Jack",
  age:15
  setName:function(name){
  	this.name = name
  }
}
```

- 工厂函数(返回一个对象的函数。不常用)

```javascript
//工厂函数
function creatPerson(name,age){
var obj = {
 name:name,
 age:age,
 setName:function(name){
   this.name = name
 }
}
return obj
}
//实例化对象
var obj = new creatPerson("Tom",12)
obj.setName("Lili")
/*问题：不同的工厂函数的实例化对象的类型都是一样的，与现实不符
```

- 构造函数

```javascript
function Person(name,age){
  this.name = name
  this.age = age
  this.setName = function(name){
  	this.name = name
  }
}
var person = new Person("chang",13)
/*问题：有多个实例化对象时，每一个实例化对象都保存着相同的方法，产生了内存的浪费
```

- 构造函数+原型

```javascript
function Student(name,age,class){
  this.name = name
  this.age = age
  this.class = class
}
Student.prototype.setName = function(name){
	this.name = name
}

var obj = new Student("yuxi",20,5)
obj.setName("changyuxi")
//把方法放在原型对象中，把属性保存在各自的实例化对象中
```

### 对象的储存结构

- 对象的变量名被存在栈内存中(变量所存储的内容是该对象在堆内存中存储的地址)
- 对象的数据存放在堆内存中
- 对象之间的赋值都是引用存储地址,因此改变一个对象，另一个也会改变。

### 访问对象数据的方法

- obj.属性名 有时候不能用
- obj[‘属性名’] 任何情况下都能用
  1. 属性名含有特殊符号：- 空格的时候，就只能使用这种方式
  2. 属性的名称是一个字符串变量的时候，就只能使用这种方式（例如函数传一个属性值字符串作为参数）

**注意** 访问对象不存在的属性时，不会报错。返回（undefined）

## 数组对象

- 什么是数组？
  - 属性为有序整数的特殊对象
  - 属性称为索引（从0开始计数）
  - 属性值可以是任何数据类型

### 如何创建数组

- 构造函数

```javascript
var arr1 = new Array(n)//n代表数组长度
var arr2 = new Array(值1，值2，值3，……)//可以直接传元素值
var arr3 = new Array(10)//代表数组长度为10，并不是给第一个传值为10
```

- 数组字面量

```javascript
var arr = []
var arr1 = [1,2,3,4]//可以指定数组中的元素
```

### 常用的数组的属性length 

- 可以用arr.length来获取数组arr的长度

### 常用的数组方法

- `push()`
  - 可以在数组的末尾依次添加元素，并返回新数组的长度

```javascript
var arr = []
var len = arr.push(1,2,3)
console.log(arr)//[1,2,3]
console.log(len)//返回新数组长度3

```

- `pop()`
  - 删除数组末尾的元素，并将删除元素返回

```javascript
var arr = [1,2,3,4,5]
var del = a.pop()//del用来保存被删除的数据
console.log(del)//5。 5被删除了
console.log(arr)//[1,2,3,4]

```

- `unshift()`
  - 向数组开头添加一个或多个元素，并返回新数组长度

```javascript
var arr = [1,2,3,4]
var len = arr.unshift("yx","威少")
console.log(len)//6 
console.log(arr)//["yx","威少",1,2,3,4] 

```

- `shift()`
  - 可以删除数组的第一个元素，并返回删除的元素

```javascript
var arr = ["c",1,2,3,4]
var del = arr.shift()
console.log(del)//"c"
console.log(arr)//[1,2,3,4]

```

- `forEach()`
  - 需要一个函数作为参数
  - 由我们创建不由我们执行，数组中有几个元素就执行几次
  - 每次执行时浏览器会在回调函数中传入三个参数
    - 参数一：就是当前遍历的元素
    - 参数二：当前遍历的元素的索引值
    - 参数三：整个数组

```javascript
var arr = ["c","q","y","威","少"]
arr.forEach(function(a,b,c){
  console.log("参数1："+a,"参数2："+b,"参数3："+c)
})

//输出结果
/*
参数1：c 参数2：0 参数3：c,q,y,威,少
参数1：q 参数2：1 参数3：c,q,y,威,少
参数1：y 参数2：2 参数3：c,q,y,威,少
参数1：威 参数2：3 参数3：c,q,y,威,少
参数1：少 参数2：4 参数3：c,q,y,威,少
*/

```

- `slice()`

  - 可以用来从数组提取指定元素(不会改变原数组，返回一个截取到的数组对象)
  - 参数1：截取开始位置的索引
  - 参数2：截取结束位置的索引（不包含,不会截取）

  **参数2可以不写** ：表示从开始位置到最后

  - 参数可以传负数：-1代表最后一个，-2代表倒数2个……

```javascript
var arr = [1,2,3,4,5,6,7,8]
var newArr1 = arr.slice(1,3)
console.log(newArr1)//[2,3]

var newArr2 = arr.slice(2)//传入一个值,代表截取索引为2之后的所有元素
console.log(newArr2)//[3,4,5,6,7,8]

var newArr3 = arr.slice(1,-2)//从索引为1的元素一直截取到倒数第2个元素（不包含倒数第2个元素）
console.log(newArr3)//[2,3,4,5,6]

```

- `splice()`
  - 可用于删除数组中指定的元素，要修改原数组，并向数组添加新数据，且以数组的形式返回原数组删除的元素
  - 参数1：开始位置的索引
  - 参数2：想要删除数据的个数
  - 参数3 及以后：传入的一些新元素，自动插入到开始索引对应的元素之前

```javascript
var arr = [1,2,3,4,5,6,7]
var del1 = arr.splice(2,2)//从索引2开始删除2个元素
console.log(del1)//返回删除的元素[3,4]

arr = [1,2,3,4,5,6,7]
var del2 = arr.splice(2,3,"chang","yu")
console.log(del2)//返回[3,4,5]
console.log(arr)//[1,2,"chang","yu",6,7] 向数组中开始索引位置依次向后添加了"chang","yu"。

//splice()练习：写一个函数去除数组中重复的数字并返回新的数组
var arr = [2,1,3,5,6,1,3,6,2,5]

function delRe(arr){
  for(var i = 0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]==a[j]){//如果相等就删除
        arr.splice(i,1)
        j = i+1
      }
    }
  }
  return arr
}

var newArr = delRe(arr)
console.log(newArr)

```

- `concat()`
  - 可以连接多个数组或元素。该方法不会对原数组产生影响，返回一个连接好的新数组

```javascript
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

var newArr = arr1.concat(arr2,arr3,"chang","yu")
console.log(newArr)// [1, 2, 3, 4, 5, 6, 7, 8, 9, "chang", "yu"]

```

- `join()`
  - 可以将数组转换成字符串
  - 指定一个参数为连接字符串

```javascript
var arr = ["雷","霆","总","冠","军"]
var newArr = arr.join("!")//指定！为分割符
console.log(newArr)//"雷！霆！总！冠！军"

```

- `reverse()`
  - 用来翻转数组，会对原数组产生影响

```javascript
var arr = [1,2,3,4,5,6]
console.log(arr.reverse())//[6,5,4,3,2,1]

```

- `sort()`

  - 用来给数组排序（会影响原数组）

  - 按照Unicode编码来排序，所以排数字的时候可能出错

  - 我们可以自己指定排序规则

    - 可以在sort()写一个回调函数，回调函数中指定两个参数 a、b

      浏览器会分别使用数组中的元素作为实参去调用函数

      a在b前面:

      - 如果函数返回值大于0，则a b 交换位置。a\>b
      - 如果返回一个负数， 则a b位置不变。a\<b

    - 如果返回0，两个元素相等，位置不变。

      - 总结：返回a-b（升序排列）返回b-a（降序排列）

```javascript
var arr = [1,4,2,6,7,5,11]
console.log(arr.sort())//[1, 11,2, 4, 5, 6, 7] 排序出现错误！11比2还小？

//自定义排序规则
arr = [1,4,2,6,7,5,11]
var newArr1 = arr.sort(function(a,b){//顺序
 if(a>b){
     return 1
 }else if(a<b){
      return -1    
 }else{
     return 0
 }
})
console.log(newArr1)// [1, 11, 2, 4, 5, 6, 7]

var newArr2 = arr.sort(function(a,b){//倒序
 if(a>b){
     return -1
 }else if(a<b){
      return 1    
 }else{
     return 0
 }
})
console.log(newArr2)//[11, 7, 6, 5, 4, 2, 1]

//简写
var newArr3 = arr.sort(function(a,b){
	return a-b//顺序排
})
var newArr3 = arr.sort(function(a,b){
	return b-a//到序排
})

```

### 遍历数组

- for in循环
- 普通for循环

## 函数对象

- 什么是函数？
  - 具有特定功能的n条语句的封装体
  - 只有函数是可执行的, 其它类型的数据是不可执行的
- 为什么要使用函数：提高代码重用， 方便交流阅读

### 如何定义函数

- 函数时声明式：

```javascript
function FunctionName(){函数体} //在页面加载前先构建完成

```

- 函数表达式：

```javascript
var abs = functoin(){}//存在变量名提升，函数并没有构建好

```

- 构造函数：

```javascript
var abs = new Function()

```

### 调用函数

- 函数调用时浏览器都会传递两个隐含的`parameter`

  - 函数的执行上下文对象`this`

  - 封装实参的对象`arguments`

    - `arguments`是一个类数组对象，他也可以通过索引操作数据，获取长度

    - 在调用函数时传递的实参都会在`arguments`中保存

    - 不定义形参也可以使用`arguments`来使用实参，只不过烦

      **使用形式**：`arguments[0]`//第一个实参 `arguments[1]`//第二个实参……

    - `arguments`的`callee`属性：这个属性对应当前正在执行的函数对象

  **注意**

  - 函数.call(obj，参数1，参数2……) 修改函数的`this`为`obj`
  - 函数.apply(obj,[参数1，参数2，……])，与`call`效果相同，只是传入的参数必须是一个**数组对象** [……]

### 回调函数

- 特点
  - 自己定义
  - 自己没有调用执行他
  - 它却执行了
- 分类
  - `DOM`事件操作回调函数
  - 定时器回调函数
  - `ajax` 请求回调函数
  - 生命周期回调函数

### 函数中的`this`

- 任何函数本质上都是通过某个对象调用的
- 所有函数内部都有this
- 它的值是当前调用此函数的对象

### 两个方法

- `call`方法和`apply`方法
  1. call方法
     - 通过函数对象来调用 `（function.call(obj,parameter)）`
     - 使用此方法函数就会执行
     - 改变函数执行时的`this`为参数`parameter`
  2. `apply`方法：与`call`唯一的区别就是 传参数时必须是一个封装的数组对象 [……]

### IIFE

- 全写：`Immediately-Invoked Function Expression` (立即执行函数）
- 形式：

```javascript
(function(){

  	var a = 1
   function test(){
       a++
       console.log(a)
   }
   window.$ = function(){
       return {
           test:test//向全局暴露内部函数
       }
   }
  })()

  //调用 $()代表函数执行后的返回对象，$().test()，调用对象的test方法
  $().test()//2

```

- 作用：
- 隐藏实现（外部程序访问不了）
  - 不会污染命名空间
  - 用来编写js模块
