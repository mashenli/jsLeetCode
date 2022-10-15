/**
有N个正整数组成的一个序列，给定一个整数sum
求长度最长的的连续子序列使他们的和等于sum
返回次子序列的长度，如果没有满足要求的序列 返回-1
备注：
    输入序列仅由数字和英文逗号构成，数字之间采用英文逗号分割
    序列长度 1<=N<=200，输入序列不考虑异常情况
    由题目保证输入序列满足要求
示例
输入：
1,2,3,4,2
6
输出：
3
解析：
1,2,3和4,2两个序列均能满足要求，所以最长的连续序列为1,2,3 因此结果为3
 */
function longList(arr, target) {
    if (target == 0) return -1;
    let result = 0,
        left = 0,
        right = 0,
        sum = 0;
    while (left < arr.length && right < arr.length) {
        if (sum >= target) {
            // 相等时更新 result
            result = (sum == target) ? Math.max(result, right - left) : result;
            sum = sum - arr[left]; // 移动左指针，并更新sum
            left++
        } else {
            sum += arr[right]; // 最后一个数需要跳出循环后计算
            right++
        }
    }
    // sum和target：等于时更新，大于时移动左指针，小于时忽略
    // 这里的情况是当跳出for循环后，此时的left没有++，因此判断条件应该
    // 附加上target==sum-arrs[left++]，这样的话就可以刚好求出最大的result
    // 例如:[4,2,1,2,3]当right超过了数字长度时,此时的left还是1,没有++;但退出
    // 了for循环,并且result并不是最大值,为2,因此通过target == sum - arr[left++]
    // 判断sum减去++后的left是否等于target,如果等于计算这个right-left的值
    result = (target == sum || target == sum - arr[left++]) ?
        Math.max(result, right - left) : result;
    return result;
}

console.log(longList([1, 2, 3, 4, 2], 6));