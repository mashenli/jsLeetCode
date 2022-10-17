Array.prototype._map = function (fn, thisArg = []) {
    return this.reduce((pre, cur, index, arr) => {
        return pre.concat(fn.call(thisArg, cur, index, arr));
    }, []);;
};

const a = new Array(3);
a.push(...[1, 2, 3]);
const b = a._map((i) => {
    console.log(i);
    return i;
})
console.log(b);