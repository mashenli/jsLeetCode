const obj = [{
    a: 1,
    b: 2
}, {
    a: 1
}, {
    a: 1
}, {
    a: 1,
    b: {
        c: 1
    }
}, {
    b: {
        c: 1
    },
    a: 1
}]

const isEqualObject = (obj1, obj2) => {
    /*
    Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
    Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    共同点：都是返回自身的属性，不会返回原型链上的。
    区别： Object.keys()返回可枚举的，Object.getOwnPropertyNames()返回所有的。
    Object.getOwnPropertyNames也可以获取key
    */
    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);

    if (k1.length !== k2.length) return false;

    for (let i = 0; i < k1.length; i++) {
        const key = k1[i];
        const v1 = obj1[key];
        const v2 = obj2[key];
        if (typeof v1 === 'object') {
            if (!isEqualObject(v1, v2)) {
                return false;
            }
        } else {
            if (v1 !== v2) {
                return false;
            }
        }
    }
    return true;
}
const arrF = (arr) => {
    const res = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!res.has(arr[i])) {
            let flag = true;
            const vals = [...res.values()];
            for (let j = 0; j < vals.length; j++) {
                if (isEqualObject(arr[i], vals[j])) {
                    flag = false;
                }
            }
            flag && res.set(JSON.stringify(arr[i]), arr[i]);
        }
    }

    return [...res.values()];
}

console.log(arrF(obj));