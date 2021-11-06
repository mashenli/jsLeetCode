/**
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 例如， 1 -> A 2 -> B 3 -> C ... 26 -> Z 27 -> AA 28 -> AB ...
 */

const convertToTitle = (n) => {
    let res = '';
    while (n > 0) {
        const a = parseInt((n - 1) % 26);
        n = parseInt((n - 1) / 26);
        res = String.fromCharCode(a + 65) + res;
    }
    return res;
}