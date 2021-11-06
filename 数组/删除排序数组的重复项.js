/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 */

const removeDuplicates = (nums) => {
    let flag = 0;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] !== nums[flag]) {
            flag++;
            nums[flag] = nums[i];
        }
    }
    return flag + 1;
}

let nums = [1, 2, 3, 4, 4, 5, 5, 6];
console.log(removeDuplicates(nums));