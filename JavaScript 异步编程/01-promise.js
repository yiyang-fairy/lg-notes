// Promise 基本示例

//const { reject } = require("lodash")

const promise = new Promise(function(resolve, reject) {
    //这里用于"兑现"承诺
    //resolve(100) //承诺达成

    reject(new Error('promise rejected')) //承诺失败
})


//  then 方法指定unfulfilled 和 unrejected 的回调函数
promise.then(function(value) {
    console.log('resolved', value)
}, function(error) {
    console.log('rejected', error)
})


console.log('end')