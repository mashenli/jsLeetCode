const myCreate = function (o) {
    const F = function () {};
    F.prototype = o;
    return new F();
}