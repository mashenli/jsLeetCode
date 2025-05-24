/**
 * JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个
 */

class Scheduler {
    constructor(limit = 2) {
        this.limit = limit;        // 并发限制
        this.count = 0;            // 当前运行任务数
        this.queue = [];           // 任务队列
    }

    add(task) {
        return new Promise((resolve) => {
            this.queue.push(() => task().then(resolve));
            this.runNext();
        });
    }

    runNext() {
        if (this.count >= this.limit || this.queue.length === 0) return;

        const nextTask = this.queue.shift();
        this.count++;

        nextTask().finally(() => {
            this.count--;
            this.runNext(); // 启动下一个任务
        });
    }
}


const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
});

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}
addTask(1000, '1000')
addTask(500, '500')
addTask(400, '400')
addTask(300, '300')