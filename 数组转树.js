const arr = [{
        id: 1,
        pid: 0
    },
    {
        id: 2,
        pid: 1
    },
    {
        id: 3,
        pid: 1
    },
    {
        id: 4,
        pid: 2
    },
    {
        id: 5,
        pid: 2
    },
    {
        id: 6,
        pid: 3
    },
];

// const arrToTree = (arr) => {
//     const hash = {};
//     const result = [];

//     for (let item of arr) {
//         hash[item.id] = item;
//     }

//     for (let item of arr) {
//         const parent = hash[item.pid];

//         if (parent) {
//             if (!parent.children) {
//                 parent.children = [];
//             }
//             parent.children.push(item);
//         } else {
//             result.push(item);
//         }
//     }
//     return result;
// }


function arrToTree(arr, parentId) {
    return arr.filter(item => parentId === undefined ? item.pid === 0 : item.pid === parentId).map(item => {
        if (arrToTree(arr, item.id).length) {
            item.children = arrToTree(arr, item.id)            
        }
        return item
    })
}

console.log(JSON.stringify(arrToTree(arr)));