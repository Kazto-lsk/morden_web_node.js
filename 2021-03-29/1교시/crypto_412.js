var crypto = require('crypto');

var key = "네가 모르는 이야기";
var input = 'pass_word';

var cipher = crypto.createCipher('aes192', key, input);
//var cipher = crypto.createCipheriv('aes-128-ccm', key, iv, {authTagLength: 16});

cipher.update(input, 'utf-8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
//var decipher = crypto.createDecipheriv('aes-128-ccm', key, iv);

decipher.update(cipheredOutput, 'base64', 'utf-8');
var decipheredOutput = decipher.final('utf-8');

console.log(' 원래 문자열은 ' + input);
console.log(' 암호화 된 문자열은 ' + cipheredOutput);
console.log (' 암호화가 풀린 문자열은' + decipheredOutput);

