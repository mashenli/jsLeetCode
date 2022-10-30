// 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

const isStraight = (nums) => {
    nums.sort((a, b) => {
        return a - b;
    })
    let zeroN = nums.lastIndexOf(0) + 1;
    let restArr = nums.slice(nums.lastIndexOf(0) + 1);
    let c = 0
    for (let i = 0; i < restArr.length - 1; i++) {
        if (restArr[i + 1] - restArr[i] > 1) {
            c += restArr[i + 1] - restArr[i] - 1 // 判断大小王的个数 以及 需要填充的空位数是否匹配。
        } else if (restArr[i + 1] === restArr[i]) { // 只要有相等的元素，肯定不是顺子
            return false;
        }
    }
    return c <= zeroN;
}