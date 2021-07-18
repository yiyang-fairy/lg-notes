//模拟常用高阶函数

//map

const map = (array, fn) => {
    let results = []
    for (let value of array) {
        results.push(fn(value))
    }
    return results
}

//测试
let arr = [1, 2, 3, 4]
arr = map(arr, v => v * v)
console.log(arr)