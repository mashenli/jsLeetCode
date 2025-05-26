// var obj = {
//     a: {
//         c: [
//             1, 2
//         ]
//     },
//     b: 1
// }
// obj.a.c.d = obj
// console.log(cycleDetector(obj)) // true

// 实现思路：用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用

function cycleDetector(obj) {
    const arr = [obj]
    let flag = false

    function cycle(o) {
        for (const key in o) {
            const temp = o[key]
            if (typeof temp === 'object' && temp !== null) {
                if (arr.indexOf(temp) >= 0) {
                    flag = true
                    return
                }
                arr.push(temp)
                cycle(temp)
            }
        }
    }

    cycle(obj)

    return flag
}