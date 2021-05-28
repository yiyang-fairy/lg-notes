# ECMAScript 新特性

* let  块级作用域
* const  声明只读的常量 
* 数组的解构

~~~js
const arr = [100, 200, 300]

const [one, two, three] = arr  //按照变量名获取对应位置的值

const [, , three] = arr //只获取某个位置的成员，前面的可以只保留逗号 （确保结构的格式与数组一致）

const [one, ...three] = arr //表示从当前位置往后的所有成员，“...”只能在解构的最后一个成员上使用 （从前到后）

~~~

例子 

~~~js
//拆分一个字符串
const path = '/foo/bar/baz'
// const temp = path.split('/')
// const rootdir = tmp[1]

const [, rootdir] = path.split('/')
console.log(rootdir)
~~~

* 对象的解构

  ~~~js
  const obj = { name: 'one', age: 18}
  
  // const { name } = obj
  // cconsole.log(name)
  
  // const name = 'tom'
  // const { name: objName } = obj  //加上新的对象名可以避免冲突
  // console.log(objName)
  
  const name = 'tom'
  const { name: objName = 'jack' } = obj  //可以直接在后面设置默认值
  console.log(objName)
  ~~~

  * 模板字符串

    反引号引用 “ `` ` ` ”

    ~~~js
    //const str = `hello es2015`
    
    // const str = `hello
    // es2015`  //可以直接在内部换行，不需要转义字符
    // console.log(str)
    
    const name = 'tom'
    const msg = `hey, ${name}` //插值表达式  不仅可以嵌入变量，还可以嵌入js语句
    console.log(name)
    
    
    ~~~

* 带标签的模板字符串

  ~~~js
  const str = console.log`hello world` //[ 'hello world' ] 打印了一个数组
  ~~~

* 字符串扩展方法
  * includes()
  * startsWith()
  * endsWith()

~~~js
const str = 'Error: foo is not defined.'

console.log(
    //str.includes('foo') //true
    //str.startsWith('Error') //true
    str.endsWith('.')//true
)
~~~

