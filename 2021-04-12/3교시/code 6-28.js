// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    if (request.headers.cookie){
        response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});

        var cookie = request.headers.cookie.split(";");
        cookie.forEach(function (item, index){
            response.write('<h1>${item}</h1>');
        })


        response.write("쿠키 분해 완료, 출력완료");
    }else{

        response.writeHead(200, {
            'Content-Type' : 'text/html; charset=UTF-8',
            'Set-cookie' : ['name=lsk','region = korea'

            ]


        });


    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});