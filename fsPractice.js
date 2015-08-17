var fs = require('fs');
var fjs = require('functional.js');

var inBuf = fs.readFileSync(process.argv[2]); // buf short for buffer
var lines = inBuf.toString().split('\n');
console.log( Number(lines.length -1) );

