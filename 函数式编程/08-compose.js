// 函数组合演示

function compose(f, g) {
    return function(value) {
        return f(g(value))
    }
}

//例子：获取数组最后一个元素
function reverse(array) {
    return array.reverse()
}

function first(array) {
    return array[0]
}

const last = compose(first, reverse)

console.log(last([1, 2, 3, 4, 5]))