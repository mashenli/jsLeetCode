/**
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true
示例 2:
输入: s = "rat", t = "car"
输出: false
 */

const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    const obj = {};
    for (let i = 0; i < s1.length; i++) {
        if (!obj[s1[i]]) {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]]++;
        }
        if (!obj[s2[i]]) {
            obj[s2[i]] = -1;
        } else {
            obj[s2[i]]--;
        }
    }

    return Object.values(obj).every(i => i === 0);
}

// const isAlien1 = (s1, s2) => {
//     if (s1.length !== s2.length) return false;
//     const s = [...s1].sort();
//     const t = [...s2].sort();
//     return s.join('') === t.join('');
// }

const s1 = 'anagram';
const s2 = 'nagaram';
console.log(isAnagram(s1, s2));