/**
 * 给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串，判断字符串是否有效。
 * 有效字符串需满足： 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

const isVaild = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) {
            stack.push(str[i])
        } else {
            if (isMatch(stack[stack.length - 1], str[i])) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
    }
    console.log(stack);
    return stack.length === 0;
}

const isMatch = (char1, char2) => {
    if (char1 === '(' && char2 === ')' || char1 === '{' && char2 === '}' || char1 === '[' && char2 === ']') {
        return true;
    }
    return false;
}

let str = '{{{}}}[]([])';
console.log(isVaild(str));