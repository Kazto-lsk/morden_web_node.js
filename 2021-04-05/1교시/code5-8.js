process.on('exit', function (code) {
    console.log("exit 이벤트 발생 코드 : " + code);
});

var tickFunc = (code) => {

    console.log("tick 이벤트 발생 코드 :" + code);

    if (code == 3){
        
        process.removeListner('tick', tickFunc);

    }
};

process.on('tick', tickFunc);

console.log('2초 간격으로 틱 이벤트 전달');

var count = 0;

var timeId = setInterval(function () {
    count += 1;
    
    console.log("tick "+ count);
    process.emit('tick', count);

    if(count == 6){
        clearInterval(timeId);
    }

})