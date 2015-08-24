var fjs = require("functional.js");

var add = function ( x, y ) {
  return x + y;
}
console.log( fjs.reduce( add, fjs.map( Number, process.argv.slice( 2 ))));

