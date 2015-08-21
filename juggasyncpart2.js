var http = require('http');

var results = [];
var count = 0;

function printResults () {
  for ( var i = 0 ; i < 3; i++ ){
    console.log(results[i]);
  }
}

function httpGet ( index ) {
  http.get( process.argv[2 + index], function ( response ) {
      //console.log(index, "in the http");
      var dataTotal = '';
      response.setEncoding("utf8");
      response.on("data", function ( data ) {
        dataTotal += data;
      });
      response.on('error', console.error);
      response.on('end', function ( ) {
        results[index] = dataTotal;
        count++;
        if ( count == 3 ) {
          printResults();
        }
      });
    })
  }

for ( var i = 0 ; i < 3 ; i++ ) {
  httpGet(i);
}

