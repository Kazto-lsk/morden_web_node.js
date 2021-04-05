var EventEmitter = require('events');

//EventEmitter를 생성한 custom 변수
var custom = new EventEmitter();

custom.on('tick', function(code) {
    console.log('event activated');
});

custom.emit('tick');