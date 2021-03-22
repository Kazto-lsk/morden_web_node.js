/* 

    객체 출력

    - console = 콘솔 화면과 관련된 기능을 다루는 객체입니다.
    - exports = 모듈(기능)과 관련된 기능을 다루는 객체입니다.
    - process = 프로그램과 관련된 기능을 다루는 객체입니다.


    ----------- 특수 문자 출력

    * %d = 숫자
    * %s = 문자열
    * %j = JSON (배열)
 
*/
var Users = [{age:20, name:'루댕'},{age:24, name:'얼음쟁이'},{age:999, name:'허수아비'}]

console.log('json : %j', Users);

