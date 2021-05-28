// Proxy 对象

// const person = {
//     name: 'zce',
//     age: 19
// }
// const personProxy = new Proxy(person, {
//     get(target, property) { // 代理的目标对象，外部访问的属性名
//         console.log(target, property)
//         return 100
//             //返回值作为外部访问属性得到的结果
//     },
//     set(target, property, value) { // 代理的目标对象，写入的属性名，写入的属性值
//         if (property === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         target[property] = value
//             //console.log(target, property, value)
//     }
// })

// personProxy.age = 11
// personProxy.gender = true

// console.log(personProxy.name)


//Object.defineProperty() 与 Proxy比较

const person = {
    name: 'zce',
    age: 20
}

const personProxy = new Proxy(person, {
    deleteProperty(target, property) {
        console.log('delete', property)
        delete target[property]
    }
})

delete personProxy.age
console.log(person)