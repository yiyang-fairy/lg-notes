const MyPromise = require("./myPromise")

let promise = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    //         resolve("成功")
    //     }, 2000)
    //resolve("成功")
    reject('失败')
})

promise.then((value) => {
    console.log(value)
})

promise.then((value) => {
    console.log(value)
})

promise.then((value) => {
    console.log(value)
})