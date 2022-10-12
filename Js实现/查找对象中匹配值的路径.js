const obj = {
    a: {
        b: 1,
        c: {
            d: 2,
        },
    },
    e: {
        c: 3
    },
    d: 4
}

const search = (obj, value) => {
    let res = [];
    for (let key in obj) {
        if (obj[key] === value) {
            res = [key];
        } else if (typeof obj[key] === 'object') {
            const temp = search(obj[key], value);
            if (temp.length) {
                res = [key, ...temp];
            }
        }
    }
    return res;
}

console.log(search(obj, 2));