var fs = require('fs');

fs.rmdir('./docs', function(err){
    if (err) throw err;
    console.log('기존의 폴더를 삭제했습니다.')
})