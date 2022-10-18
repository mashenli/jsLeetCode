/**
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

本题采用DFS的思想。
只要有左括号剩余的时候，就将左括号剩余数量-1，然后继续投入DFS。
当左括号的长度小于有括号的长度时，将右括号剩余数量-1，然后继续投入DFS。
 */

var generateParenthesis = function (n) {
    // 定义最终返回的结果
    const res = [];
    dfs(n, n, '');
    // dfs函数
    function dfs(Lremain, Rremain, str) {
        // 如果str参数的长度等于2n，说明递归结束了
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        // 如果左括号剩余的多，将左括号放入递归
        if (Lremain > 0) {
            dfs(Lremain - 1, Rremain, str + '(')
        }
        if (Lremain < Rremain) {
            dfs(Lremain, Rremain - 1, str + ')')
        }
    }
    return res;
};