var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    fs.readFile('html/HTMLPage.html', function (error, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
    console.log('Requested');
}).listen(8888, function() {
    console.log('web server was stared');
});