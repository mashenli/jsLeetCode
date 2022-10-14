const findStr = (a, b) => {
    for (let i of b) {
        if (a.indexOf(i) === -1) {
            return i;
        }
    }
    return '';
}

const s1 = 'abcd';
const s2 = 'abdfc';
console.log(findStr(s1, s2));