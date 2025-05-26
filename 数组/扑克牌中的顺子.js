// 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

const isStraight = (nums) => {
    let max = 0;
    let min = 14;
    const seen = new Set();

    for (const i of nums) {
        if (i === 0) {
            continue;
        }
        if (seen.has(i)) {
            return false;
        }
        seen.add(i);
        min = Math.min(i, min);
        max = Math.max(i, max);
    }

    return max - min < 5;
}