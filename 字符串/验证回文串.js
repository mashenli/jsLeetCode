/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。 说明：本题中，我们将空字符串定义为有效的回文串。
 */

const isRalindrome = (str) => {
    let str1 = str.toUpperCase('');
    let str2 = str1.split('').reverse().join('');
    if (str1 === str2) return true;
    return false;
}

let s1 = 'aAbcCBaa';
console.log(isRalindrome(s1));