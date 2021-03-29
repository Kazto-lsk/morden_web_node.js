var fs = require('fs');

fs.mkdir('./docs', function(err){
    if(err) throw err;
    console.log("폴더를 만들었습니다.")
})