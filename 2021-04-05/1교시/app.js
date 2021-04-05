var rint = require('./rint');

rint.timer.on('tick', () => {
    console.log('tick event activated');
})