## 内存管理

内存管理： 开发人员主动申请空间、使用空间、释放空间

内存：有可读写单元组成，表示一片可操作空间

## JavaScript中的垃圾回收

JavaScript中的垃圾：

	* JavaScript中的内存管理是自动的
	* 对象不再被引用时是垃圾
	* 对象不能从根上访问到时是垃圾

JavaScript 中的可达对象：

​	从根（可理解为全局变量对象）出发是否能被找到（通过引用、作用域链）



GC算法：

	* GC就是垃圾回收机制的简写
	* GC可以找到内存中的垃圾 ，并释放和回收空间
	* GC中的垃圾：程序不再需要使用的对象、程序中不能被再访问到的对象

常见GC算法：

* 引用计数
* 标记清除
* 标记整理
* 分代回收 （V8 中会用到）



### 引用计数算法：

* 核心思想：设置引用数，判断当前引用数是否为0
* 引用计数器
* 优点：1、发现垃圾时立即回收   2、最大减少程序暂停
* 缺点：1、无法回收循环引用的对象  2、时间开销大

~~~js
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
~~~

### 标记清除算法：

* 遍历所有对象找**标记**活动对象（递归查找）
* 遍历所有对象**清除**没有标记对象
* 回收相应空间
* 优点：可以解决无法回收循环引用的问题
* 缺点：会产生空间碎片化的问题，是空间不能最大化使用，不会立即回收 

### 标记整理算法：

* 标记阶段的操作与标记清除算法一致
* 清除阶段会先执行整理，移动对象位置（使在地址上产生连续）
* 优点：减少碎片化空间
* 缺点：不能立即回收垃圾对象

## V8

V8 ：

V8 垃圾回收策略：分代回收

* 内存分为新生代、老生代
* 针对不同对象采用不同算法

**新生代对象回收：**

* 回收过程采用复制算法、标记整理
* 新生代内存区**分为两个等大空间**（使用空间 From，空闲空间 To）
* 活动对象存储在 From空间
* 标记整理后将活动对象拷贝至 To空间
* From 与 To 交换空间完成释放

一轮GC后还存活、To空间使用率超过25%的新生代对象需要移动至老生代

**老生代对象回收**：

* 64位操作系统1.4G，32位操作系统700M
* 老生代对象指的是存活时间较长的对象
* 主要采用标记清除、标记整理、增量标记算法
* 首先用标记清除完成垃圾空间的回收
* 采用标记整理进行空间优化
* 采用增量标记进行效率优化

performence 时刻监控内存

