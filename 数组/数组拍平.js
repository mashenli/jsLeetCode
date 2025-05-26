function flat(arr) {
    let arrRes = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            arrRes = arrRes.concat(flat(item));
        } else {
            arrRes.push(item);
        }
    });
    return arrRes;
};


// 用reduce实现
const flat = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
}


// 通过传入参数，控制拉平层数
function flat(arr, num = 1) {
    return num > 0 ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur)
    }, []) : arr.slice();
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", {
    name: "弹铁蛋同学"
}];


console.log(flat(arr));