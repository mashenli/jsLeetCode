/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行
 */

const generate = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        let item = [1];
        for (let j = 1; j < i; j++) {
            item[j] = res[i - 1][j] + res[i - 1][j - 1];
        }
        item[i] = 1;
        res.push(item);
    }
    return res;
}

console.log(generate(6))

/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。 用递归实现
 */

const getRow = (n) => {
    if (n === 0) return [1];
    if (n === 1) return [1, 1];
    let row = [1];
    const upRow = getRow(n - 1);
    for (let i = 1; i < n - 1; i++) {
        row[i] = upRow[i] + upRow[i - 1];
    }
    row.push(1);
    return row;
}
console.log(getRow(6));