function PromiseLimit(funcArr, limit = 5) {
    let i = 0;
    const res = [];
    const executing = [];
    const queue = function () {
        if (i === funcArr.length) return Promise.all(executing);
        const p = funcArr[i++]();
        res.push(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= limit) {
            return Promise.race(executing).then(() => queue(), e => Promise.reject(e));
        }
        return Promise.resolve().then(() => queue());
    }
    return queue().then(() => Promise.all(res));
}