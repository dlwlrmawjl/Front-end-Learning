var f1 = (function () {
    var t;
    return function () {
        t = t ? t : new Date();
        return t;
    }
}) ();

var f2 = function () {
    var t = new Date();
    f2 = function () {
        return t;
    }
    return f2();
}



function time (f, n) {
    n = 100;
    var a = new Date();
    var x = a.getTime();
    for (var i = 0; i < n; i++) {
        f();
    }
    var b = new Date();
    var y = b.getTime();
    return y - x;
}


//记忆
var memorizer = function (memo, fundamental) {
    var recur = function (n) {
        var a = memo[n];
        if (typeof a != "number") {
            a = fundamental(recur, n);
            memo[n] = a;
        }
        return a;
    }
    return recur;
}

fibonacci = memorizer ([0, 1],  function(recur, n) {
    return recur(n - 1) + recur(n - 2);
})
fibonacci(3);