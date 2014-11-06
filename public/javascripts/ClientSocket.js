
/*
 *	Client for Socket.IO
 */
 (function($){

 	// initialize socket.io
  	var socket = io();

  	socket.emit('userConnection','Im connected');
  	socket.on('userConnection', function(message){
  		console.log(message);
  	});	

	/*********************************************************************
		 *					RECEIVING EVENTS & HANDLING THEM
		 *********************************************************************/
	socket.on('disconnected', function(id){
	});

	/*
	 *	This takes care of toggling the UI element to show if the user
	 * 	has the handle on the pen or not.
	 */
	socket.on('test', function(writing){
		
	});

})(jQuery);

