// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res) {
// 	res.send('<h1>Hello world</h1>');
// });

// http.listen(3000, function() {
// 	console.log('listening on *:3000');
// });


// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		// socket.broadcast.emit('hi');
		io.emit('chat message', msg);
	});
});

// io.on('connection', function(socket) {
// 	socket.broadcast.emit('hi');
// });

// io.emit('some event', {
// 	for: 'everyone'
// });
http.listen(3000, function() {
	console.log('启动成功===listening on *:3000');
});