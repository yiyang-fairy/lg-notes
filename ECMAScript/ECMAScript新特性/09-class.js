//类的继承

class Person {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`hello, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    hello() {
        super.say()
        console.log(`my school id is ${this.number}`)
    }
}

const s = new Student('Jason', 10001)
s.hello()