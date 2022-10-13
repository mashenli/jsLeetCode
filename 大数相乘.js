function multiply(num1, num2) {
    //首先转换成字符串
    num1 = '' + num1
    num2 = '' + num2
    if (num1 === '0' || num2 === '0') return '0'
    if (num1 === '1' || num2 === '1') return num1 === '1' ? num2 : num1
    let n1 = num1.length,
        n2 = num2.length
    //存储结果的数组 最长为n1 + n2
    let res = new Array(n1 + n2).fill(0)
    for (let i = n1 - 1; i >= 0; i--) {
        for (let j = n2 - 1; j >= 0; j--) {
            let mul = (+num1[i]) * (+num2[j]), //此时遍历到的两数之积
                p1 = i + j,
                p2 = i + j + 1,
                sum = mul + res[p2] //第一次res[p2]一定是0， 加的是上一次如果有超过10的部分， 上一次的十位加在这一次的个位上
            //后面的位置
            res[p2] = sum % 10
            //sum如果有超过10的部分就加到上一位中， 下次进来， p1就会到p2的位置
            res[p1] += parseInt(sum / 10)
        }
    }
    //找到res中前面所有剩余的0
    let i = 0
    while (i < res.length && res[i] == 0) {
        i++
    }
    //转换结果
    let str = ''
    while (i < res.length) {
        str += res[i]
        i++
    }
    return str
}