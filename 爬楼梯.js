/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ 
 * 思路： f(1) : 1  f(2) : 11 , 2  f(3) : 12, 111, 21 f(4) : 121, 1111, 211, 112, 22 f(n) = f(n-1) + f(n-2)
 * @param {number} num 台阶数
 */
const climbStairs = (num) => {
    if (n < 2) return 1;
    let dp0 = dp1 = 1;
    for (let i = 2; i <= num; i++) {
        const temp = dp0;
        dp0 = dp1;
        dp1 = temp + dp1;
    }
    return dp1;
}
