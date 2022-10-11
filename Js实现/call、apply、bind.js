Function.prototype.myBind = function (context) {
    let args = [].slice.call(arguments, 1);
    const context = context;
    const fn = this;

    let fbound = function () {
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        const newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this instanceof fn ? this : context, newArgs)
    };

    function Constructor() {};
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    Constructor.prototype = fn.prototype;
    fbound.prototype = new Constructor();

    return fbound;
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