// 查找有序数组中数字最后一次出现的位置
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：4

// 初始化 left = 0, right = nums.length - 1。
// 循环查找，直到 left > right：
// 计算 mid = left + Math.floor((right - left) / 2)。
// 如果 nums[mid] <= target，说明最后一次出现的位置可能在 mid 或右侧，移动 left = mid + 1。
// 否则，移动 right = mid - 1。
// 检查边界，如果 right 越界或 nums[right] !== target，说明 target 不存在，返回 -1。
// 返回 right，因为它指向最后一个 target。


function lastOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;  // 继续向右查找
        } else {
            right = mid - 1;
        }
    }
    
    // 检查是否找到
    if (right < 0 || nums[right] !== target) {
        return -1;
    }
    
    return right;
}


// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// const lastIndex = nums.findLastIndex((num) => num === target);
// const lastIndex = nums.lastIndexOf(target);
// console.log(lastIndex); // 输出: 4