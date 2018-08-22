var url = "http://news.baidu.com";
document.write('<a href=http://www.baidu.com/: target="newW">切换到百度首页');
var me = window.open(url, "newW");
setTimeout(function () {
    if (me.closed) {
        alert("创建的窗口已关闭")
    }else {
        me.close;
    }
}, 5000);