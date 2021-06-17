/*
* return promise
* status pending FULFILLED rejected
* resolve , reject 作为回调传给 excutor
* resolve/reject 被调用，状态更改
* then
* 1. 根据当前的status，执行then中的函数
* 2. 实现链式调用
*      - 返回新的 promise,同时需要更改状态，不能为pending,否则停止不前
*      - 比对原生：返回 new Promise 能够在下次的then中取到值
* */
let PENDING = 'PENDING';
let FULFILLED = 'FULFILLED';
let REJECTED = 'REJECTED';
let resolvePromise = (promise2, x, resolve, reject) => {
    // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    // Promise/A+ 2.3.3.3.3 只能调用一次
    let called;
    // 后续的条件要严格判断 保证代码能和别的库一起使用
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
        try {
            // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x,y=>{
                    if (called) return;
                    called = true;
                    // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
                    resolvePromise(promise2, y, resolve, reject);
                },r=>{
                    // 只要失败就失败 Promise/A+ 2.3.3.3.2
                    if (called) return;
                    called = true;
                    reject(r);
                })
            } else {
                // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
                resolve(x);
            }
        } catch (e) {
            // Promise/A+ 2.3.3.2
            if (called) return;
            called = true;
            reject(e)
        }
    } else {
        // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
        resolve(x)
    }
}

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (data) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = data
                this.onResolvedCallbacks.forEach(fun => fun())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fun => fun())
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }

    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function'?onRejected: err => { throw err };
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        //Promise/A+ 2.2.7.1
                        let x = onFulfilled(this.value);
                        // x可能是一个proimise
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        //Promise/A+ 2.2.7.2
                        reject(e)
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch (e){
                        reject(e)
                    }
                }, 0)

            }
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(()=>{
                        try {
                            let x =  onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject)
                        }catch (e){
                            reject(e)
                        }
                    },0)

                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(()=>{
                        try {
                            let x =  onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject)
                        }catch (e){
                            reject(e)
                        }
                    },0)

                })
            }
        })
        return promise2
    }
}

Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve, reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;
