//数组扩展模式
Array.prototype._m = Array.prototype.m ||
(Array.prototype.m = function () {
    //扩展方法的具体代码
});
Object.prototype.m = Array.prototype._m;


Array.prototype._sum = Array.prototype.sum ||
(Array.prototype.sum = function () {
    var _n = 0;
    for (var i in this) {
        if (parseFloat(this[i])) 
            _n += parseFloat(this[i]);
    };
    return _n;
});
Object.prototype.sum = Array.prototype._sum;


