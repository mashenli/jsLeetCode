/**
 * 从数组中随机取m个数
 */

const getRandomArr = (arr, count) => {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let temp, index;

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(min);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(getRandomArr(arr, 3));