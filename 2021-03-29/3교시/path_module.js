var path = require('path');

//디렉토리와 이름을 합칩니다.
var dirs = ['users', 'mike', 'docs'];
var docDir = dirs.join(path.sep);

console.log('문서 디렉토리 : %s', docDir);


// 디렉토리와 파일 이름을 합칩니다.
var curPath = path.join(docDir, 'nodepad.exe');
console.log('파일 패스 : %s\n', curPath);

//패스에서 디렉토리, 파일이름, 확장자를 구별합니다.
var filename = 'c:\\user4s\\mike\\docs\\nodepad.exe';

//디렉토리
console.log(path.dirname(filename));
//파일 명
console.log(path.basename(filename));
//확장자 명
console.log(path.extname(filename));