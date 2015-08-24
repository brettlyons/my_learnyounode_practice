var net = require('net');

var myTime = new Date();

//should abstract "now()" into a function.
// shrink the server section to three lines or so

var server = net.createServer(function (socket) {
  var testTime = myTime.getFullYear() + "-"
    + (myTime.getMonth().length ==2 ? myTime.getMonth()
        : "0" + Number(myTime.getMonth() + 1))
    + "-"
    + myTime.getDate()
    + " "
    + myTime.getHours()
    + ":"
    + myTime.getMinutes();
  socket.end(testTime);
})
server.listen(process.argv[2]);

