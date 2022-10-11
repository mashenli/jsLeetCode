/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。 
 * 思路： 偷取第 i 家时，有两种选择： 偷取第 i 家，此时金额为：res[i] = res[i-2]+nums[i]; 不偷，此时金额为：res[i] = res[i-1]; 所以最高金额为两者取较大值。
 */

const maxCount = (nums) => {
    const len = nums.length;
    if (!len) {
        return 0;
    }

    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[len];
}

let list = [2, 7, 9, 3, 1]

console.log(maxCount(list));