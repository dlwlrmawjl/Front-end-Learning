//数组迭代器
Array.prototype.each = function (f) {
    try{
        this.i || (this.i = 0);
        if (this.length > 0 && f.constructor == Function) {
            while (this.i < this.length) {
                var e = this[this.i];
                if (e && e.constructor == Array) {
                    e.each(f);
                } else {
                    f.apply(e, [e]);
                }
                this.i ++ ;
            }
            delete this.i;
        }
    }
    catch(w){
    }
    return this;
}

//一个使用迭代器的数组扩展方法   动态改变数组中每个元素的值
Array.prototype._edit = Array.prototype.edit ||
( Array.prototype.edit = function () {
    var b = arguments, a = [];
    this.each( function () {
        a.push( b[0].call( b[1], this) );
    });
    return a;
});
Object.prototype.edit = Array.prototype._edit;

var a = [1, 2, 3, 4];
var f = function (x) {
    return x * x;
}








Array.matrix = fucntion (m ,n, initial) {
    var a, mat = [];
    for (var i = 0; i < m; i++) {
        a = [];
        for (var j = 0; j < n; j++){
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
}