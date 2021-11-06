/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素）返回其最大和。
 */

const suborderSum = (list) => {
    let max = list[0];
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (sum < 0) {
            sum = 0;
        }
        sum += list[i];
        max = Math.max(sum, max);
    }
    return max;
}

const numList = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(suborderSum(numList));