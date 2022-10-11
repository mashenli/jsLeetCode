/**
1、算法思想：判断两个相邻元素，大于则交换位置
2、算法步骤
    从数组中第一个数开始，依次与下一个数比较并次交换比自己小的数，直到最后一个数。
    如果发生交换，则继续下面的步骤，如果未发生交换，则数组有序，排序结束，此时时间复杂度为O(n)；
    每一轮”冒泡”结束后，最大的数将出现在乱序数列的最后一位。重复步骤（1）
3、算法平均复杂度：n(n^2)
*/

const sortArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}