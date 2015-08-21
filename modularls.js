module.exports = function (directory, filter, callback ) {
  var fs = require('fs');
  var fjs = require('functional.js');
  var path = require('path');

  var myNewFileList = [];
  fs.readdir(directory, function ( err, files ) {
    if ( err ) { return callback( err ); }
    myNewFilelist = fjs.filter(function ( fileName ){
      //if( path.extname(fileName) == "." + filter ) {
        //callback(null, fileName);
      //}
      return path.extname(fileName) == "." + filter;
    }, files);
  callback(null, myNewFilelist);
  });
};

