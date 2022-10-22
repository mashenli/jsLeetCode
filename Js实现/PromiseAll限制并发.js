// 从array第1个元素开始，初始化promise对象，同时用一个executing数组保存正在执行的promise
// 不断初始化promise，直到达到poolLimt
// 使用Promise.race，得到executing中promise的执行状况，当有一个promise执行完毕，继续初始化promise并放入executing中
// 全部promise都执行完了，调用Promise.all返回

function PromiseLimit(funcArr, limit = 5) {
    let i = 0;
    const res = [];
    const executing = [];
    const queue = function () {
        // 边界处理，array为空数组
        if (i === funcArr.length) return Promise.all(executing);
        // 每调一次enqueue，初始化一个promise
        const p = funcArr[i++]();
        // 放入promises数组
        res.push(p);
        // promise执行完毕，从executing数组中删除
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        // 插入executing数字，表示正在执行的promise
        executing.push(e);
        // 使用Promise.rece，每当executing数组中promise数量低于poolLimit，就实例化新的promise并执行
        if (executing.length >= limit) {
            return Promise.race(executing).then(() => queue(), e => Promise.reject(e));
        }
        // 递归，直到遍历完array
        return Promise.resolve().then(() => queue());
    }
    return queue().then(() => Promise.all(res));
}
const result = [];

for (let index = 0; index < 10; index++) {

    result.push(function () {

        return new Promise((resolve, reject) => {

            console.log("开始" + index, new Date().toLocaleString());

            setTimeout(() => {

                resolve(index);

                console.log("结束" + index, new Date().toLocaleString());

            }, parseInt(Math.random() * 10000));

        });

    });

}
// console.log(PromiseLimit(result).then(d => console.log(d)));


const res = [];

for (let i = 0; i < 10; i++) {
    // res.push()
    // const p = new Promise((res) => {
    //     setTimeout(() => {
    //         res(i);
    //     }, 2000);
    // });
    const p = function () {
        return new Promise((res) => {
            setTimeout(() => {
                res(i);
            }, 2000);
        });
    }
    res.push(p);
}

PromiseLimit(res).then(data => {
    console.log(data);
})