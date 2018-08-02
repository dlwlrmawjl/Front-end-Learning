function f (x) {
    var a = [];
    for ( var i = 0; i < x.length; i++ ) {
        var temp = x[i];
        a.push( 
            (function (temp, i) {
                return function () {
                    console.log(temp + " " + x[i] );
                }
            }) (temp, i)
        );
    }
    return a;
}

function e() {
    var a = f( ["a", "b", "c"] );
    for (var i in a) {
        a[i]();
    }
}
e();


//同一个闭包，分别引用，再当前环境生成多个闭包
function f(x) {
    var temp = x;
    return function (x) {
        temp += x;
        console.log( temp );
    }
}

var a = f(50);
var b = f(100);
a(5);
b(10);


//闭包为函数提供参数
function f(a, b) {
    return function () {
        a(b);
    }
}
var c = f(console.log, "hello,world");
setTimeout(c, 2000);

//我们希望数组中部分元素的值是动态的，然后把这个动态数组的元素值连接在一起生成一个字符串
//通过闭包可以使作为缓冲器的数组与依赖它的函数关联起来，实现优雅的打包，同时也能够在全局命名空间外指定的缓冲数组的属性名，
//避免了名称冲突和意外交互的危险

var f = function () {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return function (a1, a2, a3, a4, a5) {
        a[0] = a1;
        a[1] = a2;
        a[2] = a3;
        a[3] = a4;
        a[4] = a5;
        return a.join("-");
    };
}();
var a = f(11, 12, 13, 14, 15);
var b = f("a", "b", "c", "d", "e");
console.log(a);
console.log(b);

var f = function () {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return function () {
        for (var i = 0; i < a.length && i < arguments.length; i++){
            a[i] = arguments[i];
        }
        return a.join("-");
    };
}();
var a = f(11, 12, 13, 14, 15);
var b = f("a", "b", "c", "d", "e");
console.log(a);
console.log(b);