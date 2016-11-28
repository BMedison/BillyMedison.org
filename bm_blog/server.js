'use strict';
var http = require('http');
var port = process.env.port || 8000;

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello Node JS\n");
});

server.listen(port);
