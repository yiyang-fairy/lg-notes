//对象字面量

const bar = '345'

const obj = {
    foo: 123,
    // bar: bar
    //如果变量名与属性名一致，可以省略冒号和变量名
    bar,
    // method1: function() {
    //     console.log('method')
    //     console.log(this)
    // }
    method1() {
        console.log('method111')
        console.log(this) //内部的 this 会指向当前对象
    },
    math

}
console.log(obj)
obj.method1()