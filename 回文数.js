/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

const isPalindrome = (x) => {
    return x === Number(x.toString().split('').reverse().join(''));
}

console.log(isPalindrome(123321))


const isPalindrome = (x) => {
    const str = x.toString();
    const len = str.length;
    const halfLen = (len - 1) / 2;
    for (let i = 0; i < halfLen; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}