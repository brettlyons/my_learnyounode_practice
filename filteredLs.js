var fs = require('fs');
var fjs = require('functional.js');
var path = require('path');

fs.readdir(process.argv[2], function ( err, files ) {
  if ( err ) { throw err; }
  var myNewFilelist = fjs.filter(function ( fileName ){
    if( path.extname(fileName) == "." + process.argv[3] ) {
      console.log(fileName);
    }
    return path.extname(fileName) == "." + process.argv[3];
  }, files);
});

