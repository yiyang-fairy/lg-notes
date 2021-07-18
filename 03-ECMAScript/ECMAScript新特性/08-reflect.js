const obj = {
    name: 'zce',
    age: 20
}

console.log('name' in obj)
console.log(delete obj['age'])
console.log(Object.keys(obj))

console.log(Reflect.has(obj, 'name'))
console.log(Reflect.deleteProperty(obj, 'age'))
console.log(Reflect.ownKeys(obj))