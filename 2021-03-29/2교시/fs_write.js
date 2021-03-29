var fs = require('fs');

var data = "Hello world,\nThis is futher of korea";

fs.writeFile('sample.txt', data, 'utf8',
    function (error){
        console.log('** 파일을 작성 했습니다 **')
    });

console.log('ended');

//아래 코드로도 파일을 작성할 수 있습니다.
fs.writeFileSync('writefilesync.txt', data, 'utf8');