function fn() {
    const obj1 = {}
    const obj2 = {}

    obj1.name = obj2
    obj2.name = obj1
        //  obj1 与 obj2 相互引用，使得引用数不为 0  
        // 无法对其内存空间进行回收 造成对内存空间的浪费

    return '1'
}

fn()