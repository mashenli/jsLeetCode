/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素）返回其最大和。
 */

const suborderSum = (nums) => {
    // 默认当前的最大和为第一个元素
    let sum = nums[0]
    // dp代表以当前元素结尾的最大和，默认也是第一个元素
    let dp = nums[0]
    // 从数组的第二个元素开始循环
    for (let i = 1; i < nums.length; i++) {
        // 上文中提到的dp公式
        // 当前的最优解就是取前一个元素组合的最优解加上当前值和当前值里更大的一个
        dp = Math.max(dp + nums[i], nums[i])
        // 同时进行当前最大值的记录
        sum = Math.max(sum, dp)
    }
    return sum
}

const numList = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(suborderSum(numList));