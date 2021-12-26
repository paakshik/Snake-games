var snakes = [];

var express =require('express')
var socket =require('socket.io')
var app = express()
var server = app.listen('3000');

app.use(express.static('Public'))
var io = socket(server)
setInterval(heartbeat, 33);

function heartbeat() {
  io.sockets.emit('heartbeat', snakes);
}

io.sockets.on('connection', newConnect)

function newConnect(socket){
console.log('We get a new connection');
socket.on('start', function(data) {
      console.log(socket.id + ' ' + data.x + ' ' + data.y + ' ' + data.r);
      var snake = new Snake(data.x, data.y, data.r,socket.id,);
      snakes.push(snake);
    });
     socket.on('update', function(data) {
      //console.log(socket.id + " " + data.x + " " + data.y + " " + data.r);
      var snake;
      for (var i = 0; i < snakes.length; i++) {
        if (socket.id == snakes[i].id) {
          snake = snakes[i];
          console.log(snake)
        }
      }
      console.log(data)
      snake.x = data.x;
      snake.y = data.y;
      snake.total = data.r;
      console.log(snakes)
    });

    socket.on('disconnect', function() {
      console.log('Client has disconnected');
    });

}
function Snake(x,y,r,id){
this.x = x;
this.y = y;
this.r = r;
this.id = id;
}