var modls = require("./modularls.js");

modls( process.argv[2], process.argv[3], function (err, data ) {
  if ( err ) { throw err; }
  data.forEach(function (datum) {
    console.log(datum);
  })
});
