var fs = require('fs');
var fjs = require('functional.js');


fs.readFile(process.argv[2], 'utf8', function( err, data ){
  if (err) { throw err; }
  console.log(data.split('\n').length - 1);
//  return data.split('\n').length - 1;
});

