# ECMAScript 新特性

* let  块级作用域
* const  声明只读的常量 

## 数组的解构

~~~js
const arr = [100, 200, 300]

const [one, two, three] = arr  //按照变量名获取对应位置的值

const [, , three] = arr //只获取某个位置的成员，前面的可以只保留逗号 （确保结构的格式与数组一致）

const [one, ...three] = arr //表示从当前位置往后的所有成员，“...”只能在解构的最后一个成员上使用 （从前到后）

~~~

例子 

~~~js
//拆分一个字符串
const path = '/foo/bar/baz'
// const temp = path.split('/')
// const rootdir = tmp[1]

const [, rootdir] = path.split('/')
console.log(rootdir)
~~~

## 对象的解构

~~~js
const obj = { name: 'one', age: 18}

// const { name } = obj
// cconsole.log(name)

// const name = 'tom'
// const { name: objName } = obj  //加上新的对象名可以避免冲突
// console.log(objName)

const name = 'tom'
const { name: objName = 'jack' } = obj  //可以直接在后面设置默认值
console.log(objName)
~~~

## 模板字符串

反引号引用 “ `` ` ` ”

~~~js
//const str = `hello es2015`

// const str = `hello
// es2015`  //可以直接在内部换行，不需要转义字符
// console.log(str)

const name = 'tom'
const msg = `hey, ${name}` //插值表达式  不仅可以嵌入变量，还可以嵌入js语句
console.log(name)


~~~

* 带标签的模板字符串

  ~~~js
  const str = console.log`hello world` //[ 'hello world' ] 打印了一个数组
  ~~~


### 字符串扩展方法

* includes()
* startsWith()
* endsWith()

~~~js
const str = 'Error: foo is not defined.'

console.log(
    //str.includes('foo') //true
    //str.startsWith('Error') //true
    str.endsWith('.')//true
)
~~~

## 剩余参数

~~~js'
function foo(first, ...args) {   //"..."只能穿线在形参的最后以为，只能出现一次
    console.log(args)
}

foo(1, 2, 3, 4)   //接收的参数都会传递到args数组中
~~~

"..." 操作符除了可以 rest 接收剩余参数，还可以 spread 展开数组

~~~js
const arr = ['foo', 'bar', 'baz']

//console.log.apply(console, arr)

console.log(...arr)
~~~

## 箭头函数

~~~js
// function inc (number) {
//     return number + 1
// }

// const inc = number => number + 1  //单条语句的箭头函数

const inc = number => {
    console.log('inc invoked')
    return number + 1    //当函数内有多条语句，可以使用花括号{}，但结果需要使用 return 语句
}
console.log(inc(100))
~~~

箭头函数是代码更加简短易读

箭头函数不会改变 this 指向

~~~js
const person = {
    name: 'tom',
    // sayHi: function() {
    //     console.log(`hi, my name is ${this.name}`)  // hi, my name is tom
    // }
    sayHi: () => {
        console.log(`hi, my name is ${this.name}`)    // hi, my name is undefined
    }
}
person.sayHi()
~~~

## 对象字面量的增加

~~~js
const bar = '345'

const obj = {
    foo: 123,
    // bar: bar
    //如果变量名与属性名一致，可以省略冒号和变量名
    bar,
    // method1: function() {
    //     console.log('method')
    //     console.log(this)
    // }
    method1() {
        console.log('method111')
        console.log(this) //内部的 this 会指向当前对象
    },
    math

}
console.log(obj)
obj.method1()
~~~

## 对象扩展方法

### Object.assign

Object.assign 方法将多个源对象中的属性复制到一个目标对象中

~~~js
const source = {
    a: 123,
    b: 123
}

const target = {
    a: 456,
    c: 456
}


const result = Object.assign(target, source) 
const result2 = Object.assign(target, source, source2) //用后面对象的属性覆盖第一个对象

console.log(target)         //  { a: 123, c: 456, b: 123 }
console.log(result === target)    //  true
console.log(result2 === target)   //true
~~~

### Object.is

Object.is 方法用来判断两个值是否相等

### Object.defineProperty() 

Object.defineProperty 方法可以监视某个对象中的属性读写过程

### Proxy

Proxy 为对象设置访问代理器，可以轻松监视到对象读写过程

~~~js
const person = {
    name: 'zce',
    age: 19
}
const personProxy = new Proxy(person, {  // new Proxy(代理的目标对象，代理的处理对象)
    get() {   			// get 方法监视属性的访问

    },
    set() {}			// set 方法监视设置属性的过程
})
~~~

### Object.defineProperty() 与 Proxy比较

* defineProperty 只能监视属性的读写，Proxy 能够监视到更多对象操作（delete操作、方法调用等等）
* Proxy 更好的支持数组对象的监视

## Reflect

* Reflcet 属于静态类，只能调用一些静态方法

* Reflect 内部封装了一系列对对象的底层操作

* Reflect 统一提供一套用于操作对象的API

  

## class

~~~js
//类的继承

class Person {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`hello, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, number) {
        super(name)       //  super 对象，始终指向父类
        this.number = number
    }
    hello() {
        super.say()
        console.log(`my school id is ${this.number}`)
    }
}

const s = new Student('Jason', 10001)
s.hello()
~~~

## SET数据结构

ES6提供了新的数据结构Set。它类似于数组，但是==成员的值都是唯一的，没有重复的值==。

Set本身是一个构造函数，用来生成Set数据结构。

~~~js
const s = new Set()

s.add(1).add(2).add(3)  // add()方法会返回集合对象本身

console.log(s)   //Set(3) { 1, 2, 3 }

s.add(1)
console.log(s)   //Set(3) { 1, 2, 3 }

console.log(s.size)   //获取数组长度

console.log(s.has(100)) //false   判断集合中是否存在某元素

console.log(s.delete(3)) //true 删除集合中指定的值
console.log(s)  //Set(2) { 1, 2 }

s.clear() //清空集合
console.log(s)  //Set(0) {}
~~~

Set 数据解构常见的应用场景是为数组中的元素去重

~~~js
const arr1 = [1, 2, 3, 3, 4, 2, 5]

const arr2 = Array.from(new Set(arr1))  //Array.from() 方法可以将set数据解构转换成数组
const result = [... new Set(arr1)]  

console.log(arr2)  //[ 1, 2, 3, 4, 5 ]
~~~

## Map 数据结构

Map 是一组键值对的结构，具有极快的查找速度

~~~js
const m = new Map([['key1', value1], ['key2', value2], ['key3', value3]])
console.log(m.get('key1'))  //value1
~~~

## for  ... of 循环

* **for ... in**

`for...in` 循环只遍历可枚举属性（包括它的原型链上的可枚举属性）。像 `Array`和`Object`使用内置构造函数所创建的对象都会继承自`Object.prototype`和`String.prototype`的不可枚举属性，例如 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String) 的 [`indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 方法或 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)的[`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法。循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。

~~~js
var obj = {a:1, b:2, c:3};
    
for (let key in obj) {
  console.log(key);
}

// a
// b
// c
~~~

* **for ... of**

**`for...of`语句**在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Map)，[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)，[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)，[`TypedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

~~~js
const array1 = ['a', 'b', 'c'];

for (const val of array1) {
  console.log(val);
}

// a
// b
// c
~~~

* **for of 不可以遍历普通对象**，想要遍历对象的属性，可以用for in循环, 或内建的Object.keys()方法

* **for ... of 与 for ... in 区别**

无论是`for...in`还是`for...of`语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)语句以任意顺序迭代对象的[可枚举属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。

`for...of` 语句遍历[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables)定义要迭代的数据。