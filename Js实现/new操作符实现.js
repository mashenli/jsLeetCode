function create(Con, ...args) {
    // 创建一个空对象
    this.obj = {};
    // 将空对象指向构造函数的原型链
    Object.setPrototypeOf(this.obj, Con.prototype);
    // obj绑定到构造函数上
    let res = Con.apply(this.obj, args);
    return res instanceof Object ? res : this.obj;
}