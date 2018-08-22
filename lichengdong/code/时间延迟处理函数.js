var o = document.getElementsByTagName("body")[0].childNodes;
for (var i = 0; i < o.length; i++) {
    o[i].onmouseover = function (i) {
        return function () {
            f(o[i])
        }
    } (i);
    o[i].onmouseout = function (i) {
        return function () {
            clearTimeout (o[i]).out);
        }
    } (i);
    function f(o) {
        o.out = setTimeout( function () {
            alert(o.tagName);
        },  500);
    }
}
