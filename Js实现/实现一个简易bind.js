Function.prototype.bind = function () {
    const _this = this;
    const context = arguments[0];
    const agrs = [].slice.call(arguments, 1);
    return function () {
        agrs = [].concat.apply(agrs, arguments);
        _this.apply(context, agrs);
    }
}