/**
 *
1.创建一个 EventEmitter 类
2.在该类上创建一个事件中心（Map）
3.on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
4.emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
5.off 方法可以根据 event 值取消订阅（取消订阅）
6.once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
7.注册一个 newListener 用于监听新的事件订阅
 */

class EventEmitter {
    constructor() {
        this._events = {};
    }

    on(eventName, callback) {
        if (this._events[eventName]) {
            if (this.eventName !== "newListener") {
                this.emit("newListener", eventName)
            }
        }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks
    }

    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args))
    }

    once(eventName, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one)
    }

    off(eventName, callback) {
        const callbacks = this._events[eventName] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */ )
        this._events[eventName] = newCallbacks;
    }
}