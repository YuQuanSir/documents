---
title: 函数对象
---

#

* 什么是函数？
  * 具有特定功能的n条语句的封装体
  * 只有函数是可执行的, 其它类型的数据是不可执行的
  * 为什么要使用函数：提高代码重用， 方便交流阅读

## 如何定义函数

* 函数时声明式：

```javascript
function FunctionName(){函数体} //在页面加载前先构建完成   
```

* 函数表达式：

```javascript
var abs = functoin(){}//存在变量名提升，函数并没有构建好
```

* 构造函数：

```javascript
var abs = new Function()
```



## 调用函数

* 函数调用时浏览器都会传递两个隐含的`parameter`

  * 函数的执行上下文对象`this`

  * 封装实参的对象`arguments`

    * `arguments`是一个类数组对象，他也可以通过索引操作数据，获取长度

    * 在调用函数时传递的实参都会在`arguments`中保存

    * 不定义形参也可以使用`arguments`来使用实参，只不过烦

      **使用形式**：`arguments[0]`//第一个实参 `arguments[1]`//第二个实参……

    * `arguments`的`callee`属性：这个属性对应当前正在执行的函数对象

  1. 函数.call(obj，参数1，参数2……) 修改函数的`this`为`obj`

  2. 函数.apply(obj,[参数1，参数2，……])，与`call`效果相同，只是传入的参数必须是一个

     *数组对象* [……]   

## 回调函数

  * 特点
    + 自己定义
    + 自己没有调用执行他
    + 它却执行了
  * 分类
    * `DOM`事件操作回调函数
    * 定时器回调函数
    * `ajax` 请求回调函数
    * 生命周期回调函数

## 函数中的`this`

* 任何函数本质上都是通过某个对象调用的
* 所有函数内部都有this
* 它的值是当前调用此函数的对象

## 两个方法

  * `call`方法和`apply`方法
    1. call方法
       * 通过函数对象来调用	`（function.call(obj,parameter)）`
       * 使用此方法函数就会执行
       * 改变函数执行时的`this`为参数`parameter`
    2. `apply`方法：与`call`唯一的区别就是 传参数时必须是一个封装的数组对象 [……]

## IIFE   

  * 全写：`Immediately-Invoked Function Expression` (立即执行函数）
  * 形式：

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

  * 作用：

    + 隐藏实现（外部程序访问不了）
    + 不会污染命名空间
    + 用来编写js模块