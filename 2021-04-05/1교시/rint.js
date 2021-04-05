//App.js와 연결되는 파일

var EventEmitter = require('events');

exports.timer = new EventEmitter();

setInterval(() => {
    exports.timer.emit('tick');
}, 1000);

