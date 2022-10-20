/**
 * 柯里化函数
 */
// 木易杨
function currying(fn, length) {
    length = length || fn.length; // 注释 1
    return function (...args) { // 注释 2
        return args.length >= length // 注释 3
            ?
            fn.apply(this, args) // 注释 4
            :
            currying(fn.bind(this, ...args), ...args) // 注释 5
    }
}

// Test
const fn = currying(function (a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]




/**
 * 延迟计算
 */

// 木易杨
const add = (...args) => args.reduce((a, b) => a + b);

// 简化写法
function currying(func) {
    let args = [];
    return function result(...rest) {
        if (rest.length === 0) {
            const res = func(...args);
            args = [];
            return res;
        } else {
            args.push(...rest);
            return result;
        }
    }
}

const sum = currying(add);

sum(1, 2)(3); // 未真正求值
sum(4); // 未真正求值
sum(); // 输出 10