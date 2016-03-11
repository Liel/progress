var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('new connection');
  socket.on('scanFiles',function(fileList) {
    var files = fileList,
        percent = 100 / files.length,
        currPercent = 0;

  var loop = setInterval(function () {
    var file = files.pop();
    if(!file) {
      clearInterval(loop);
      socket.emit('status', {text: "complete!", percent: 100});
      return false;
    }

    socket.emit('status', {text: "scanning " + file + '...', percent: currPercent});
    currPercent += percent;
  }, 3000);
  });
});

server.listen(80, function() {
  console.log('server up and running at 80 port');
});