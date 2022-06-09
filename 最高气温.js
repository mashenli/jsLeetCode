/**
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 */
const dailyTemperatures = function (temperatures) {
    const res = []
    for (let i = 0; i < temperatures.length; i++) {
        let count = 0
        let flag = false
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                count++
                res.push(count)
                flag = true
                break;
            } else {
                count++
            }
        }
        if (!flag) res.push(0)
    }
    return res
};


// 栈
const dailyTemperatures1 = function (temperatures) {
    const len = temperatures.length
    const res = new Array(len).fill(0)
    const stack = [len - 1]
    for (let i = temperatures.length - 2; i > -1; i--) {
        while (temperatures[i] >= temperatures[stack[stack.length - 1]] && stack.length) {
            stack.pop()
        }
        if (stack.length) res[i] = stack[stack.length - 1] - i
        stack.push(i)
    }
    return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));