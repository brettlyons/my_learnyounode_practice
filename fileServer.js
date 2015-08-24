var http = require('http');
var fs = require('fs');

var fileStream = fs.createReadStream(process.argv[3]) // read the file from
  // the cmdline a la "node fileServer.js <filename>.txt"

var server = http.createServer(function (request, response){
  fileStream.pipe(response);
})

server.listen(process.argv[2]); // port number 80
