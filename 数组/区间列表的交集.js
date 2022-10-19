/**
给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，
其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。
每个区间列表都是成对 不相交 的，并且 已经排序 。
返回这 两个区间列表的交集 。
形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。
两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。
 */

// 双指针移动的时机
// 求完一个交集区间后，较早结束的子区间，不可能再和别的子区间重叠，它的指针要移动。
// 较长的子区间还有可能和别人重叠，它的指针暂时不动。


const intervalIntersection = (A, B) => {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < A.length && j < B.length) {
        const start = Math.max(A[i][0], B[j][0]); // 交集区间的左端，取它们的较大者
        const end = Math.min(A[i][1], B[j][1]); // 交集区间的右端，取它们的较小者
        if (start <= end) { // 形成了交集区间
            res.push([start, end]);
        }
        if (A[i][1] < B[j][1]) { // 谁先结束，谁的指针就步进，考察下一个子区间
            i++;
        } else {
            j++;
        }
    }
    return res;
};