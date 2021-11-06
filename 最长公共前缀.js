/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。 如果不存在公共前缀，返回空字符串 ""。

 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"

 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""

 * 解释: 输入不存在公共前缀。
 * 说明:所有输入只包含小写字母 a-z 。
 */

const longestCommonPrefix = (strs) => {
    strs.sort((a, b) => a.length - b.length);
    const s1 = strs[0];
    let commenPrefix = '';
    for (let i = 0; i < s1.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (s1[i] !== strs[j][i]) {
                return commenPrefix;
            }
        }
        commenPrefix += s1[i];
    }
    return commenPrefix;
}

let s = ['abs', 'abss', 'ab']

console.log(longestCommonPrefix(s));