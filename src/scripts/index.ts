/// <reference path="../../typings/tsd.d.ts" />
declare var io;
module Index {
	export var Io = io();
		
	var pongcounter = document.getElementById("counter");
	
	export var Pong = () => {
		console.log("PONG");
		Io.emit('ping');
	}
	
	Io.on('pong', function(count: number){
		pongcounter.innerHTML = count.toString();
	});
	
}