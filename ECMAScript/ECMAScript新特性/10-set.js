const s = new Set()

s.add(2).add(3).add(4)

// console.log(s) //Set(3) { 1, 2, 3 }

// s.add(2)
// console.log(s)

// //s.forEach(i => console.log(i));

// for (let i of s) {
//     console.log(i)
// }

// console.log(s.size) //获取数组长度

// console.log(s.has(100)) //false   判断集合中是否存在某元素

// console.log(s.delete(3)) // 删除集合中指定的值
// console.log(s)

// s.clear() //清空集合
// console.log(s) //Set(0) {}

const arr1 = [1, 2, 3, 3, 4, 2, 5]
const arr2 = Array.from(new Set(arr1))
console.log(arr2) //[ 1, 2, 3, 4, 5 ]