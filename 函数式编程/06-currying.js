//lodash 中的 curry 基本使用
const _ = require('lodash')


function getSum(a, b, c) {
    return a + b + c
}


const curried = _.curry(getSum)

//如果传入的参数数量满足要求，则立即执行函数 并返回相应结果
console.log(curried(1, 2, 3))

//如果只传入部分参数，此时会返回一个函数来接收 getSum 中的剩余参数

console.log(curried(1)(2, 3))

//使用柯里化的目的是将多元的函数转化成一元的函数

console.log(curried(1)(2)(3))



//柯里化案例

//提取字符串中的空白字符
''.match(/\s+/g) //match 方法可以传入一个正则表达式
    //提取数字
''.match(/\d+/g)



const match = _.curry(function(reg, str) {
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

// console.log(haveSpace('helloworld'))
// console.log(haveSpace('hello world'))
// console.log(haveNumber('123abc'))

//对数组进行过滤，调用数组的filter方法，可以将filter封装成一个纯函数的形式
const filter = _.curry(function(func, array) {
    return array.filter(func)
})

console.log(filter(haveSpace, ['one two', 'one_two']))


//使用filter 直接生成一些特定功能的函数
const findSpace = filter(haveSpace)

console.log(findSpace(['one two', 'one_two']))