var http = require('http');

var output = []
//var callbackCounter = 0;
//var sReq = 0, rReq = 0;

http.get( process.argv[2], function callback ( response ) {
    var dataTotal = '';
    response.setEncoding("utf8");
    response.on("data", function ( data ) {
      dataTotal += data;
      //sReq++;
    });
    response.on('error', console.error);
    response.on('end', function ( ) {
    //rReq++;
      //if (sReq == rReq) {
      setTimeout ( function () {
        console.log(dataTotal);
      }, 0);
  //  }
    });
  })

http.get( process.argv[3], function callback ( response ) {
    var dataTotal = '';
    response.setEncoding("utf8");
    response.on("data", function ( data ) {
      dataTotal += data;
      //sReq++;
    });
    response.on('error', console.error);
    response.on('end', function ( ) {
      setTimeout ( function () {
        console.log(dataTotal);
      }, 10000);
    //rReq++;
      //if (sReq == rReq) {
//      console.log(dataTotal);
    //  }
    });
  })

http.get( process.argv[4], function callback ( response ) {
    var dataTotal = '';
    response.setEncoding("utf8");
    response.on("data", function ( data ) {
      dataTotal += data;
      //sReq++;
    });
    response.on('error', console.error);
    response.on('end', function ( ) {
    //rReq++;
      setTimeout ( function () {
        console.log(dataTotal);
      }, 20000);
      //if (sReq == rReq) {
      //console.log(dataTotal);
    //  }
    });
  })
//function allResponsesFinished ( sentRequests, finishedRequests ) {
  //return sentRequests == finishedRequests;
//}
