/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 */

const reverse = (x) => {
    const numList = x.toString().split('').reverse();
    const res = parseInt(numList.join(''));
    if (res > 2 ** 31) return 0;
    return x > 0 ? res : -res;
}