// 【快递运输】一辆运送快递的货车，运送的快递均放在大小不等的长方体快递盒中，
// 为了能够装载更多的快递，同事不让货车超载，需要计算最多能装多少个快递
// 注：快递体积不受限制，快递数最多1000个，货车载重最大50000。
// 输入描述：
// 第一行输入每个快递的重量，用英文逗号分隔，如：5,10,2,11
// 第二行输入货车的载重量，如20
// 输出描述：
// 输出最多能装多少个快递
// 示例：
// 输入
// 5,10,2,11
// 20
// 输出
// 3


const getMax = (nums, max) => {
    const sortNums = nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < sortNums.length; i++) {
        if (sum + sortNums[i] <= max) {
            sum += sortNums[i];
        }
        else {
            return i;
        }
    }
    return sortNums.length;
}
const a = [5, 10, 2, 11];
console.log(getMax(a, 20));