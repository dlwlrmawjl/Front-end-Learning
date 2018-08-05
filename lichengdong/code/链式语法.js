Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};
String.method("trim", function () {
    return this.replace(/^\s+|\s+$/g, '');
});
String.method("writeln", function () {
    document.writeln(this);
    return this;
});
String.method("alert", function () {
    window.alert(this);
    return this;
});
var str = " ab c ";
str.trim().writeln().alert();


String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
}
String.prototype.writeln = function () {
    document.writeln(this);
    return this;
}
String.prototype.alert = function ()  {
    window.alert(this);
    return this;
}
var str = " ab c ";
str.trim().writeln().alert();
