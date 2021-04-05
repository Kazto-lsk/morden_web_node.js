var http = require('http');
var server = http.createServer();

server.on('request', function(code) {
    console.log("requested");
});

server.on('connection', function(code) {
    console.log('connected');
});

server.on('close', function(code){
    console.log('closed');
});

server.listen(8888, function(){
    console.log('web server was stared');
});