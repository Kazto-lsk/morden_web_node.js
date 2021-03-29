/*

    - Hash 생성과 암호화를 수행하는 모듈
    - 해시는 다른 문자열이라도 같은 값이 나올 수 있습니다.
    - 해시를 원래의 값으로 되돌리는 것은 불가능합니다. (단방향 암호화이기 때문입니다.)
    - 교재는 80페이지 CODE 4-11

*/

var crypto = require('crypto');

//해시 알고리즘을 지정합니다.
var shasum = crypto.createHash('sha256');

//특정 문자열을 암호화 합니다.
shasum.update('password_nodejs');

//인코딩 출력은 base64 또는 HEX, Latin1 등으로 출력할 수 있습니다.
var output = shasum.digest('hex');

console.log('Hash :', output);
