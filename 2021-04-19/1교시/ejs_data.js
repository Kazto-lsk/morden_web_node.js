// ejs 실습2 데이터 전달

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var server = http.createServer(function (request, response) {
    fs.readFile('html/ejsPage.ejs', 'utf8', function (error, data){
        response.end(ejs.render(data, {
            name : "RintIanTta2",
            description : 'EJS Page'
        }));
    });
    console.log('ejs Page Request On');
}).listen(8888, function () {
    console.log('Web server started on port 8888');
})