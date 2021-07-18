//剩余参数

// function foo() {
//     console.log(arguments) //arguments 是个伪数组
// }

function foo(first, ...args) { //"..."只能穿线在形参的最后以为，只能出现一次
    console.log(args)
}

foo(1, 2, 3, 4) //接收的参数都会传递到args数组中