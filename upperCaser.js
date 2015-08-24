var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response){
  if(request.method != 'POST'){
    return res.end('send me a POST\n');
  }
  request.pipe(map(function (chunkOfStream){
    return chunkOfStream.toString().toUpperCase();
  })).pipe(response);

})

server.listen(Number(process.argv[2])); // port number 80
