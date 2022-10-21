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
    return max; // 最大长度
};

const s = 'abcabcbb';

console.log(lengthOfLongestSubstring(s));


const longSubstring = (s) => {
    let left = 0;
    let right = 1;
    let res; // 结果
    let temp;
    let max = 0; // 最大长度
    while (right < s.length) {
        temp = s.slice(left, right);
        if (temp.indexOf(s.charAt(right)) > -1) {
            left++;
            continue;
        } else {
            right++;
        }
        if (right - left > max) {
            max = right - left;
            res = s.slice(left, left + max)
        }
    }
    return {res, max};
}

console.log(longSubstring(s)); // abc