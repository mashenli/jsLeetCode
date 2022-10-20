Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    let args = [...arguments].slice(1);
    let fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
}

Function.prototype.myCall = function (context) {
    context = context || window;
    // 给context添加一个属性
    // 如 getValue.call(a,'zfh',18) => a.fn = getValue
    context.fn = this;
    // 将参数取出
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    // 删除fn
    delete context.fn;
    return result;
}

Function.prototype.myApply = function (context) {
    const context = context || window;
    context.fn = this;

    let result;
    // 需要判断是否存在第二个参数
    // 如果存在则将第二个参数展开
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }

    delete context.fn;
    return result;
}