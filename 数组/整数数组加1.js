/**
 * 1.给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 */

const numFn = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i] += 1;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
}

const addOne = (arr) => {
    return (+arr.join('') + 1 + '').split('').map(Number)
};

const num = [4, 3, 2, 1];
console.log(numFn(num));

console.log(addOne(num))