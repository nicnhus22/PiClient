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
		console.log("New User");

		socket.on('disconnect', function(){
			console.log("User Disconnected");
			// socket.broadcast.emit('disconnected', socket.id);
		});

	});
};

