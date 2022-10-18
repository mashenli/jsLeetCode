/**
 * JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个
 */

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
});
class Scheduler {
    constructor() {
        this.awaitArr = [];
        this.count = 0;
    }
    async add(promiseCreator) {

        if (this.count >= 2) {
            await new Promise(resolve => {
                this.awaitArr.push(resolve);
            });
        }
        this.count++;
        const res = await promiseCreator();
        this.count--;

        if (this.awaitArr.length) {
            this.awaitArr.shift()();
        }
        return res;
    }
}
const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}
addTask(1000, '1000')
addTask(500, '500')
addTask(400, '400')
addTask(300, '300')