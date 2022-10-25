/**
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

const findItem = (arr) => {
    // const map = new Map();
    // const obj = {};
    // for (let i = 0; i < arr.length; i++) {
    //     if (obj[arr[i]]) {
    //         obj[arr[i]]++;
    //     } else {
    //         obj[arr[i]] = 1;
    //     }
    //     if (obj[arr[i]] > (arr.length / 2)) {
    //         return [arr[i]];
    //     }
    // }
    arr.sort();
    return arr[Math.ceil(arr.length / 2)];
}

const a = [1, 2, 3, 4, 4, 4, 4];

console.log(findItem(a));