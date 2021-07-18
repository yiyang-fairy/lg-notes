//实现可迭代接口


// const obj = { //最外面的对象实现可迭代接口  内部必须有一个返回迭代器的 iterator 方法
//     [Symbol.iterator]: function() { //迭代器接口 
//         return { //返回一个实现迭代器方法的对象
//             next: function() { //next 方法用于实现向后迭代的逻辑
//                 return { //返回一个迭代结果的对象  迭代结果接口
//                     value: 'ok',
//                     done: true //布尔值 用来表示迭代有没有结束
//                 }
//             }

//         }
//     }
// }

const obj = { //最外面的对象实现可迭代接口  内部必须有一个返回迭代器的 iterator 方法
    store: ['one', 'two', 'three'],
    [Symbol.iterator]: function() { //迭代器接口 
        let index = 0
        const self = this
        return { //返回一个实现迭代器方法的对象
            next: function() { //next 方法用于实现向后迭代的逻辑
                const result = { //返回一个迭代结果的对象  迭代结果接口
                    value: self.store[index],
                    done: index >= self.store.length //布尔值 用来表示迭代有没有结束
                }
                index++
                return result
            }

        }
    }
}


for (const item of obj) {
    console.log('aaa', item)
}