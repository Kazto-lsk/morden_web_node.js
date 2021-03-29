var fs = require('fs');

//일본어 코드도 정상적으로 읽을 수 있다.
fs.readFile('textfile.txt', 'utf8',
    function(error, data){
        console.log(data);
    }
)

