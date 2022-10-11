/*
 给定两个二进制字符串，返回他们的和（用二进制表示）。
*/

const sumFn = (str1, str2) => {
    let res = [];
    let num = 1;
    let addOne = 0; //是否进位
    let maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, 0);
    str2 = str2.padStart(maxLength, 0);
    for (let i = str1.length - 1; i >= 0; i--) {
        num = parseInt(str1[i]) + parseInt(str2[i]) + addOne;
        if (num >= 2) {
            res[i] = num - 2;
            addOne = 1;
        } else {
            res[i] = num;
            addOne = 0;
        }
    }
    if (addOne > 0) {
        res.unshift(1);
    }
    return res.join('')
}

const s1 = '10101010'
const s2 = '10111'
console.log(sumFn(s1, s2));