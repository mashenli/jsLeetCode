/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) – 将元素 x 推入栈中。
 * pop() – 删除栈顶的元素。
 * top() – 获取栈顶元素。
 * getMin() – 检索栈中的最小元素。
 */

const myStack = function () {
    this.stack = [];
}

myStack.prototype.push = function (x) {
    this.stack[this.stack.length] = x;
}

myStack.prototype.pop = function () {
    this.stack.length--;
}

myStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
}

myStack.prototype.getMin = function () {
    let min = this.stack[0];
    for (let i = 0; i < this.stack.length; i++) {
        min = Math.min(min, this.stack[i]);
    }
    return min;
}