// 모듈을 추출합니다.
var http = require('http');
var url = require('url');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        console.log('GET 요청입니다.');

        var query = url.parse(request.url, true).query;

        response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    response.end('<h1>' + JSON.stringify(query) + '</h1>');


    } else if (request.method == 'POST') {
        console.log('POST 요청입니다.')

    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
