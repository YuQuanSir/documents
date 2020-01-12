---
title: 对象
---


#
## 什么是对象？

+ 除了基本数据类型，其他的都是对象
+ 代表现实中的某个事物, 是该事物在编程中的抽象
+ 多个数据的集合体(封装体)
+ 用于保存多个数据的容器

## 为什么要使用对象？

* 便于多个有关联的数据统一管理

## 对象的组成？

* 属性：代表现实事物特性的数据（属性名（字符串类型）和属性值（任意类型）构成）
* 方法：代表现实事物行为的数据（属性值是函数）

## 普通对象

### 创建模式

  1. 使用构造函数

```javascript
var obj = new Object()
obj.name = "Tom"
obj.age = 18
```

  2. 使用对象字面量

```javascript
var obj = {
    name:"Jack",
    age:15
    setName:function(name){
        this.name = name
	}
}
```

  3. 工厂函数(返回一个对象的函数。(不常用)

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
  /* 不足：不同的工厂函数的实例化对象的类型都是一样的，与现实不符
```

  4. 构造函数

```javascript
 function Person(name,age){
      this.name = name
      this.age = age
      this.setName = function(name){
          this.name = name
     }
  }
  var person = new Person("chang",13)
  /*
不足：有多个实例化对象时，每一个实例化对象都保存着相同的方法，产生了内存的浪费
```

  5. 构造函数+原型

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

+ 对象的变量名被存在栈内存中(变量所存储的内容是该对象在堆内存中存储的地址)
+ 对象的数据存放在堆内存中
+ 对象之间的赋值都是引用存储地址,因此改变一个对象，另一个也会改变。

### 访问对象数据的方法

 + obj.属性名  有时候不能用

 + obj['属性名']  任何情况下都能用
   1. 属性名含有特殊符号：- 空格的时候，就只能使用这种方式
   2. 属性的名称是一个字符串变量的时候，就只能使用这种方式（例如函数传一个属性值字符串作为参数）

### 注意

 1. 访问对象不存在的属性时，不会报错。返回（undefined）