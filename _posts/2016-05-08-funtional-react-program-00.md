---
layout: post
title: 函数式编程入门指南00
categories: FRP
---

这是函数式编程扯淡的开始

<!--more-->


## 函数式编程入门指南00

函数反应式编程是一种新的技术也是一种范式，过程式和面向对象是两种对真实世界的抽象，函数式也是对真实世界的一种抽象。  
你我都经历了多年的面向对象的沉浸，但是对具体的抽象，函数式可谓空前绝后。  
编程语言异军突起，迅猛发展。上一次的时间节点是在1960年左右：那个时间网络出现了，跟处理网络问题相关的技术大量涌现，直到今天。而现在似乎出现了另外一个时间节点，大规模计算（不是扯淡的大数据），包括并发和并行。甚至有利用显卡进行矩阵浮点运算来替换CPU计算的。  
为了解决并行和并发问题，提出了许多的解决方案，《七周七并发》里面有详细的说明，大家可以找到看下：

* Erlang的收发信箱
* Scala的AKKA，类似Erlang
* Golang的channel

Erlang的处理方式是最棒的，它做了正确的事情。**Erlang才是唯一正确的抽象了面向对象**，这说的有点儿过了哈，但面向对象的什么继承啊多态啊都是我们对面向对象的误读。  
**几乎所有新出现的编程语言都是大量的采用了函数式编程语言的特性**  

### 函数式特性

* 不可变性，变量在scope范围是一旦设定值就永远不可以改变
* 没有副作用，函数或者对象方法不会改变scope的变量的值：多次调用，结果一样。
* 高阶函数支持，函数是一等公民，可以做为一个普通变量进行传参和返回。

### 数学基础

#### 群

数学啊，都TM忘完了。大概意思就是一个规则下所有的取值可能的整体，很多情况无法全部列出可能取值的值，那么就用一些条件来描述这个所有可能取值的集合，呐 -> 群。  

#### 半群、幺半群

其它的都是在群基础上，再添加一些满足特定映射要求后过滤下来的群。[维基百科解释幺半群](https://zh.wikipedia.org/wiki/%E5%B9%BA%E5%8D%8A%E7%BE%A4)，我就不献丑了，自行查看吧。  
* 结合律
* 单位元

上代数课都看妹纸去了，这些数学理论基础就是你现在看到的函数式编程的理论支撑哦。