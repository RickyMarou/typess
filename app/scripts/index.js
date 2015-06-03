/// <reference path="../../typings/tsd.d.ts" />
var Index;
(function (Index) {
    Index.Io = io();
    var pongcounter = document.getElementById("counter");
    Index.Pong = function () {
        console.log("PONG");
        Index.Io.emit('ping');
    };
    Index.Io.on('pong', function (count) {
        pongcounter.innerHTML = count.toString();
    });
})(Index || (Index = {}));
