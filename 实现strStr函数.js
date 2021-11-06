/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
 */

const strStr = (haystack, needle) => {
    if (needle.length === 0) return;
    const needLength = needle.length;
    const length = haystack.length - needLength;
    for (let i = 0; i <= length; i++) {
        if (haystack.subString(i, needLength + i) === needle) {
            return i;
        }
    }
    return -1;
}