/**
1、算法思想：取一个基准值，比基准值小的在左边，大的在右边；左右在继续这样的操作，最后合并。
2、算法步骤：
从待排序的n个记录中任意选取一个记录（通常选取第一个记录）为分区标准;
把所有小于该排序列的记录移动到左边，把所有大于该排序码的记录移动到右边，中间放所选记录，称之为第一趟排序
然后对前后两个子序列分别重复上述过程，直到所有记录都排好序。
3、算法平均复杂度：n(n log n)
 */

const quick_sort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const quickIndex = Math.floor(arr.length / 2);
    const mid = arr.splice(quickIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quick_sort(right).concat([mid], quick_sort(left));
}