var o = {
    x: 1,
    y: true
}
var o1 = o;
delete o;
o1.x;
o.x;

//复制对象
function F(x,y) {
    this.x = x;
    this.y = y;
    this.add = function () {
        return this.x + this.y;
    }
}
F.prototype.mul = function () {
    return this.x * this.y;
}
var f = new F(2, 3);
var o = {};
for (var i in f) {
    o[i] = f[i];
}
o.x;
o.y;
o.add();
o.mul();

//克隆对象
Function.prototype.clone = function (o) {
    function Temp () {};
    Temp.prototype = o;
    return new Temp();
}
var o = Function.clone(new F(2, 3));
o.x;
o.y;
o.add();
o.mul();