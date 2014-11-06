'use strict';

/*
 *	Socket controller
 */
var myIO;

module.exports.init = function(httpServer){
	
	var io = require('socket.io').listen(httpServer);
	myIO = io;

	/*
	 *	Open socket
	 */
	io.sockets.on('connection', function(socket){

		socket.on('disconnect', function(){
			console.log("User Disconnected");
			// socket.broadcast.emit('disconnected', socket.id);
		});

		socket.on('userConnection', function(message){
			console.log(message);
			io.sockets.emit('userConnection','From Server: '+message);
		});

	});
};

