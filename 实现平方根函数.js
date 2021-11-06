/**
 * 实现 int sqrt(int x) 函数。 计算并返回 x 的平方根，其中 x 是非负整数。 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */

// es6

// const mySqrt = (x)=> {
//     return Math.floor(x ** 0.5); //向下取整 x^0.5;
// }

const mySqrl = (x) => {
    let i = 1;
    while (x >= i * i) {
        i++;
    }
    return i - 1;
}

console.log(mySqrt(9));