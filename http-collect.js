var http = require('http');

http.get( process.argv[2], function callback ( response ) {
  var dataTotal = '';
  response.setEncoding("utf8");
  response.on("data", function ( data ) {
    dataTotal += data;
  });
  response.on('error', console.error);
  response.on('end', function ( ) {
    console.log(dataTotal.length);
    console.log(dataTotal);
  });
})

