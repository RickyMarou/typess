/// <reference path="../typings/tsd.d.ts" />
import express = require('express');
import io = require('socket.io');
import http = require('http');

module Typess {
	
	export var App: express.Express = express();
	export var Server = http.createServer(App);
	export var Io = io(Server);
	
	var _GlobalPongCount = 0;
	
	App.get('/', function(req, res) {
		res.sendFile(__dirname + '/html/index.html');
	});
	
	//Scripts
	App.get('/scripts/index.js', function(req, res) {
		res.sendFile(__dirname + '/scripts/index.js');
	});
	
	
	
	Io.on('connection', function(socket){
		socket.on('ping', function(msg) {
		_GlobalPongCount++;
		Io.emit('pong', _GlobalPongCount);
		});
	});
	
	Server.listen(3000, function(){
		console.log('listening on *:3000');
	});
}