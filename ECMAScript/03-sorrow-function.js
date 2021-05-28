//箭头函数

// function inc (number) {
//     return number + 1
// }

//const inc = number => number + 1

const inc = (number) => {
    console.log("inc invoked")
    return number + 1
}

//console.log(inc(100))

// 箭头函数与 this
const person = {
    name: "tom",
    // sayHi: function() {
    //     console.log(`hi, my name is ${this.name}`)
    // }
    sayHi: () => {
        console.log(`hi, my name is ${this.name}`)
    },
    sayHiAsync: function() {
        //const _this = this  保存当前作用域的this
        // setTimeout(function() {
        //console.log(this.name) //undefind  拿不到当前作用域的this
        //     console.log(_this.name)
        // }, 1000);
        setTimeout(() => {
            console.log(this.name) // 箭头函数的 this 始终指向当前作用域的this 
        }, 1000)
    },
}
person.sayHiAsync()