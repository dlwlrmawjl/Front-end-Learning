function A(x) {
    this.get1 = function () {
        return x;
    }
}
A.prototype.has = function () {
    return ! (this.get1() == 0);
}
function B() {
    var a = [];
    a = Array.apply(a, arguments);
    A.call(this, a.length);
    this.add = function () {
        return a.push.apply(a, arguments);
    }
    this.geta = function () {
        return a;
    }
}
B.prototype = new A();
B.prototype.constructor = B;
B.prototype.str = function () {
    return this.geta().toString();
}
function C() {
    B.apply(this, arguments);
    this.sort = function () {
        var a = this.geta();
        a.sort.apply(a, arguments);
    }
}
C.prototype = new B();
C.prototype.constructor = C;
var b = new B(1, 2, 3, 4);
console.log(b.get1());
console.log(b.has());
var c = new C(30, 10, 20, 40);
c.add(6, 5);
console.log(c.geta());
c.sort();
console.log(c.geta());
console.log(c.get1());
console.log(c.has());
console.log(c.str());