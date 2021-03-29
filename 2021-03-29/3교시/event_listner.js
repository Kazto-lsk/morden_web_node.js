process.on('exit', function(code){
    console.log('exit 이벤트 발생 코드 :' + code);
})

process.on('tick', (code) => {
    console.log('tick 이벤트 발생 : ' + code);
})

console.log('2초 후에 tick 이벤트 3번 전달');

setTimeout(function() {
    process.emit('tick', 'tick argv1');
    process.emit('tick');
    process.emit('tick', 'tick argv3');

}, 2000);

console.log('4초 후에 프로그램 종료');
setTimeout(function() {
    console.log('종료합니다.');
}, 4000);