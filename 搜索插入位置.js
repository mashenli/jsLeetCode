/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */

const searchNum = (numList, num) => {
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] >= num) {
            return i;
        }
    }
    return numList.length;
}

const numList = [1, 2, 3, 4, 6];
console.log(searchNum(numList, 2));