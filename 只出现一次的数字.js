/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

const findOnce = (list) => {
    list.sort((a, b) => a - b);
    for (let i = 0; i < list.length; i += 2) {
        if (list[i] !== list[i + 1]) return list[i];
    }
}

const list = [1, 1, 2, 2, 4, 3, 3, 5, 5];
console.log(findOnce(list));


// const findOne = (list) => {
//     for (let i = 0; i < list.length; i++) {
//         if (findEqual(list, list[i]) === 1) return list[i];
//     }
// }

// const findEqual = (list, target) => {
//     let res = 0;
//     list.map((item) => {
//         if (item === target) {
//             res++;
//         }
//     })
//     return res;
// }

// const list = [1, 2, 3, 4, 1, 2, 3, 4, 12, 3, 4, 1, 34, 5, 1]
// console.log(findOne(list));