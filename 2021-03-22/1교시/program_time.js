/* 
    3-3. 프로그램 실행시간 측정

*/

console.time('alpha');

var output = 1;

for (var i =1; i <= 10; i++){
    output *= 1;
}

console.log('result :', + output);
console.timeEnd('alpha');