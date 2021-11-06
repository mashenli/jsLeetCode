/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。 
 * 字符 数值 I 1 V 5 X 10 L 50 C 100 D 500 M 1000 
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。
 */

const romanToInt = (romanStr) => {
    let num = 0;
    for (let i = 0; i < romanStr.length; i++) {
        num += romanObj[romanStr[i]]
    }
    return num;
}

const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

console.log(romanToInt('II'));