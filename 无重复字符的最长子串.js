/**
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

const lengthOfLongestSubstring = (s) => {
    const temp = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
        } else {
            temp.shift();
            i--;
            continue;
        }
        max = Math.max(max, temp.length);
    }
    return {
        max,
        temp
    };
};

const s = 'abcabcbb';

console.log(lengthOfLongestSubstring(s));