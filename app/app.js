/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var io = require('socket.io');
var http = require('http');
var Typess;
(function (Typess) {
    Typess.App = express();
    Typess.Server = http.createServer(Typess.App);
    Typess.Io = io(Typess.Server);
    var _GlobalPongCount = 0;
    Typess.App.get('/', function (req, res) {
        res.sendFile(__dirname + '/html/index.html');
    });
    //Scripts
    Typess.App.get('/scripts/index.js', function (req, res) {
        res.sendFile(__dirname + '/scripts/index.js');
    });
    Typess.Io.on('connection', function (socket) {
        socket.on('ping', function (msg) {
            _GlobalPongCount++;
            Typess.Io.emit('pong', _GlobalPongCount);
        });
    });
    Typess.Server.listen(3000, function () {
        console.log('listening on *:3000');
    });
})(Typess || (Typess = {}));
