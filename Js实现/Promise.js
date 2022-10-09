class myPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.reason = null;
        this.onResolveCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if (this.state === 'pending') {
                this.value = value;
                this.state = 'fulfilled'
                this.onResolveCallbacks.forEach(fn => fn());
            }
        };
        let reject = (res) => {
            if (this.state === 'pending') {
                this.reason = res;
                this.state = 'rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        if (this.state === 'rejected') {
            onRejected(this.reason);
        }
        if (this.state === 'pending') {
            this.onResolveCallbacks.push(() => {
                onFulfilled(this.value);
            });

            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}


class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    // 解决回调地狱
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            };
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            };
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
            };
        });
        return promise2;
    }
    catch (fn) {
        return this.then(null, fn);
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
//resolve方法
Promise.resolve = function (val) {
    return new Promise((resolve, reject) => {
        resolve(val)
    });
}
//reject方法
Promise.reject = function (val) {
    return new Promise((resolve, reject) => {
        reject(val)
    });
}
//race方法 
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        };
    })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let times = 0;
        // 将成功结果放入数组中对应的位置
        const processSuccess = (index, val) => {
            result[index] = val;
            if (++times === promises.length) {
                resolve(result); // 全部执行成功，返回 result
            }
        }

        // 遍历处理集合中的每一个 promise
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i];
            if (p && typeof p.then === 'function') {
                // 调用这个p的 then 方法
                p.then((data) => {
                    // 按照执行顺序存放执行结果
                    processSuccess(i, data)
                }, reject);
            } else {
                // 普通值，直接按照执行顺序放入数组对应位置
                processSuccess(i, p)
            }
        }
    })
}

// allsettled方法
// 批处理 promise，返回 promise；
// 存在失败结果也会拿到全部执行结果，不会走 catch；
// 解决了 Promise.all 不能拿到失败执行结果的问题；
Promise.allSettled = function (promises) {
    const result = new Array(promises.length); // 记录执行的结果：用于返回直接结果
    let times = 0; // 记录执行完成的次数：判断是否完成
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i];
            if (p && typeof p.then === 'function') {
                p.then((data) => {
                    result[i] = {
                        status: 'fulfilled',
                        value: data
                    }
                    times++;
                    if (times === promises.length) {
                        resolve(result);
                    }
                }).catch(err => {
                    result[i] = {
                        status: 'rejected',
                        reason: err
                    }
                    times++;
                    if (times === promises.length) {
                        resolve(result);
                    }
                })
            } else { // 普通值，加入
                result[i] = {
                    status: 'fulfilled',
                    value: p
                }
                times++;
                if (times === promises.length) {
                    resolve(result);
                }
            }
        }
    })
}