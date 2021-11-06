/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 说明:
 * 初始化 nums1和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 暴力解法
const merge = (nums1, m, nums2, n) => {
    for (let i = 0; i < n; i++) {
        nums1[i + n] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
}

// 双指针
const merge = (nums1, m, nums2, n) => {
    let p = m + n - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    while (p2 >= 0) {
        if (p1 < 0) {
            nums1[p--] = nums2[p2--];
        } else if (nums2[p2] > nums1[p1]) {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        } else {
            nums1[p] = nums1[p1];
            p--;
            p1--;
        }
    }
}