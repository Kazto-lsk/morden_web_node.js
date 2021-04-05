var http = require('http');

var server = http.createServer();

server.listen(8888, function() {
    console.log("web server started");
});

