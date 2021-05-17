//纯函数
//记忆函数  可缓存
const _ = require("lodash")

//圆面积
function getArea(r) {
    return Math.PI * r * r
}

// memorize 函数 以一个纯函数的返回值作为参数，并返回一个带有记忆功能的函数

// let getAreaWithMemoty = _.memoize(getArea)
// console.log(getAreaWithMemoty(4))
// console.log(getAreaWithMemoty(4))

//模拟 mo=emorize 方法的实现

function memorize(f) {
    let cache = {} //存储 f 函数的执行结果
    return function() {
        // 将 arguments 对象转换成一个字符串
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
}


let getAreaWithMemoty = memorize(getArea)
console.log(getAreaWithMemoty(4))
console.log(getAreaWithMemoty(4))