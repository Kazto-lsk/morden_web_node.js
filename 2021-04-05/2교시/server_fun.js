var server = require('http').createServer();

var date = new Date();
server.listen(8888, function () {
    console.log("server started at :" + date.getSeconds() + " second");
});

var test = function () {
    date = new Date();
    // 웹 서버 종료문을 먼저 출력 후 서버를 종료한다
    console.log('web server was closed at :' + date.getSeconds() +' seconds' );
    server.close();
}

//10초 후 test Function을 작동한다
setTimeout(test, 10000);