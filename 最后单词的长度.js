/**
 * 给定一个仅包含大小写字母和空格 ’ ’ 的字符串，返回其最后一个单词的长度。
 */

const lastWordLength = (str) => {
    str = str.trim() //删除两端的空字符串
    const strList = str.split(' ');
    return strList[strList.length - 1].length;
}

console.log(lastWordLength(' asdas asdsadawew klasda Ssdas '))