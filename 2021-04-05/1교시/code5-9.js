process.on('exit', function (code) {
    console.log("exit event activated : "+ code);
});

var tickFunc = (code) => {
    console.log("Tick event activated :" + code);
};

process.once('tick', tickFunc);

console.log('Tick event activate interval 2seconds.');

var count = 0;
var timeId = setInterval(function () {
    count += 1;
    
    console.log("tick "+ count);
    process.emit('tick', count);

    if(count == 6){
        clearInterval(timeId);
    }

})