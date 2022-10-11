/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ 
 * 思路： f(1) : 1  f(2) : 11 , 2  f(3) : 12, 111, 21 f(4) : 121, 1111, 211, 112, 22 f(n) = f(n-1) + f(n-2)
 * @param {number} n 台阶数
 */
const climbStairs = (n) => {
    //使用动态规划的方法；时间复杂度是o（n），空间也是o（n）
    //n表示楼梯数
    if (n === 1) {
        return 1;
    }
    let result = []; //用数组result保存1-n个楼梯时走路的种数
    result[1] = 1; //为了方便，数组下标从1开始保存数值，第n个表示n步有几种走法
    result[2] = 2;
    for (let i = 3; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
}