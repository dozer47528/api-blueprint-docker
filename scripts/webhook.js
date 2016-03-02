var http = require('http');
var exec = require('child_process').exec;

var cmdStr = 'bash -c /usr/local/bin/deploy.sh';

http.createServer(function(req, res) {
  exec(cmdStr, function(err, stdout, stderr) {
    console.log("Update success!")
  });
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("");

}).listen(8080);
