// object.assign 方法

const source = {
    a: 123,
    b: 123
}

const source2 = {
    b: 789,
    d: 789
}

const target = {
    a: 456,
    c: 456
}

const result1 = Object.assign(target, source)
const result2 = Object.assign(target, source, source2)

console.log(target)
console.log(result1 === target)
console.log(result2 === target)