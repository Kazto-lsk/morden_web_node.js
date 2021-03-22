/* 
    3-3. 프로그램 실행시간 측정

*/

//실행 시간 측정을 시작합니다.
console.time('alpha');

var output = 1;

for (var i =1; i <= 10; i++){
    output *= 1;
}

console.log('result :', + output);

//실행 시간 측정을 종료합니다.
console.timeEnd('alpha');