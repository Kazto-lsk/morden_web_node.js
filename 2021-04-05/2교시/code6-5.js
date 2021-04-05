var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, { 'Content-Type' : 'text/html'});
    response.write("<h1> Hello, How are You? </h1>");

    console.log('requested');
}).listen(8888, function(){
    console.log('webserver was stared');
})