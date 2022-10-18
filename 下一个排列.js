/**
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。
更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。
必须 原地 修改，只允许使用额外常数空间。

第一步：从后往前找；看有没有下坡（前一个数比后一个数小的） 如果没有直接排序后返回；
第二步：如果有就说明有更小的排列 记住小的位置的索引设为index；再从后往前找比index位置的值大的索引；然后交换值；
第三步：index后的值从小到大排序；
*/

var nextPermutation = function (nums) {
    const length = nums.length;
    let index = -1;
    //第一步：从后往前找；看有没有下坡（前一个数比后一个数小的） 
    for (let i = length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            index = i - 1; //如果有就说明有更小的排列 记住小的位置的索引设为index；
            break;
        }
    }
    //如果没有直接排序后返回；
    if (index === -1) return nums.sort((a, b) => a - b);
    //第二步：再从后往前找比index位置的值大的索引；然后交换值；
    for (let i = length - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    //第三步：index后的值从小到大排序；(因为是递减的所以直接两两交换位置就行了)
    let left = index + 1;
    let right = length - 1;
    while (left < right)[nums[left++], nums[right--]] = [nums[right], nums[left]];
};