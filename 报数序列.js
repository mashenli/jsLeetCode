const countAndSay = (n) => {
    let resultStr = '1'
    for (let i = 1; i < n; i++) {
        let repeatCount = 1;
        let str = '';
        for (let j = 0; j < resultStr.length; j++) {
            if (resultStr[j] === resultStr[j + 1]) {
                repeatCount++;
            } else {
                str+=repeatCount+resultStr[j];
                repeatCount = 1;
            }
        }
        resultStr = str;
    }
    return resultStr;
}
console.log(countAndSay(5));