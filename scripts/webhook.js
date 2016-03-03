var http = require('http');
var exec = require('child_process').exec;

var cmdStr = 'bash -c /usr/local/bin/deploy.sh';

setInterval(function() {
  console.log("Start auto reload.")
  exec(cmdStr, function(err, stdout, stderr) {
    if (err) {
      console.error(err);
    } else {
      console.log("Update success!");
      console.log(stdout);
    }
  });
}, 5 * 60 * 1000);

http.createServer(function(req, res) {
  console.log("Start webhook reload.")
  exec(cmdStr, function(err, stdout, stderr) {
    if (err) {
      console.error(err);
    } else {
      console.log("Update success!");
      console.log(stdout);
    }
  });
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("");

}).listen(8080);
