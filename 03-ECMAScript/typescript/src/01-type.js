// let a = 100
// let b = 'aaa'

// a = b
// console.log(a)

//弱类型产生的问题

// const obj = {}

// obj.foo() //TypeReeor: obj.foo is  not a function
// 程序中的类型异常等到程序运行时才发现

function sum(a, b) {
    return a + b
}

console.log(sum(100, 100)) //200
console.log(sum(100, '100')) //100100   内部自动转换成字符串类型
    // 类型不明确可能造成函数功能发生改变