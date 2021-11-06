const isEqualObject = (obj1, obj2) => {
    /*
    Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
    Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    共同点：都是返回自身的属性，不会返回原型链上的。
    区别： Object.keys()返回可枚举的，Object.getOwnPropertyNames()返回所有的。
    Object.getOwnPropertyNames也可以获取key
    */
    const keyList1 = Object.keys(obj1);
    const keyList2 = Object.keys(obj2);
    if (keyList1.length !== keyList2.length) return false;
    for (let i = 0; i < keyList1.length; i++) {
        const keyItem = keyList1[i];
        const value1 = obj1[keyItem];
        const value2 = obj2[keyItem];
        if (typeof value1 === 'object') {
            if (isEqualObject(value1, value2)) {
                return true;
            } else {
                return false;
            }
        }
        if (value1 !== value2) {
            return false;
        }
    }
    return true;

}

const a = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        a: 1,
        b: 2
    },
    e: {
        a: 1,
        b: 2
    },
}

const b = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        a: 1,
        b: 2
    },
    e: {
        a: 1,
        b: 2
    },
}


console.log(isEqualObject(a, b))