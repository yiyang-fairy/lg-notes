// Functor 函子
class Container {
    constructor(value) {
        this._value = value //以 _ 开头的成员都是私有的 
    }
    map(fn) {
        return new Container(fn(this._value))
    }
}

let r = new Container(5) //创建一个函子对象
    .map(x => x + 1)
    .map(x => x * x)

console.log(r)