// 모듈을 추출합니다.
var url = require('url');
var querystring = require('querystring');

//더 이상 사용되지 않는 모듈을 대체하여 new URL을 생성하여 서치합니다.
var myURL = new URL('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');


console.log(myURL.searchParams);