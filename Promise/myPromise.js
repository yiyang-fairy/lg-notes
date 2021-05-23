const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class MyPromise {
    // executor 执行器
    consstructor(executor) {
            executor(this.resolve, this.reject)
        }
        //promise 状态
    status = PENDING
        //成功之后的值
    value = undefined
        //失败之后的原因
    reason = undefined
        //成功回调
    successCallbck = []
        //失败回调
    failCallback = []
    resolve = (value) => {
        //如果状态不是等待， 阻止程序向下执行
        if (this.status !== PENDING) return
            //将状态改为成功
        this.status = FULFILLED
            //保存成功后的值 value
        this.value = value
            //判断成功回调是否存在 如果存在 调用
            //this.successCallbck && this.successCallbck(this.value)
        while (this.successCallbck.length) {
            this.successCallbck.shift()(this.value)
        }
    }
    reject = (reason) => {
        //如果状态不是等待， 阻止程序向下执行
        if (this.status !== PENDING) return
            //将状态改为失败
        this.status = REJECTED
            // 保存失败后的原因
        this.reason = reason
            //判断失败回调是否存在 如果存在 调用
            //this.failCallback && this.failCallback(thi.reason)
        while (this.failCallback.length) {
            this.failCallback.shift()(this.reason)
        }
    }
    then(successCallbck, failCallback) {
        //判断状态
        if (this.status === FULFILLED) {
            successCallbck(this.value)
        } else if (this.status === REJECTED) {
            failCallback(this.reason)
        } else {
            //等待
            //将成功回调和失败回调存储起来
            this.successCallbck.push(successCallbck)
            this.failCallback.push(failCallback)

        }
    }
}

module.exports = MyPromise