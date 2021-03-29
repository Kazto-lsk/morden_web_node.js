var fs = require('fs');

try{
    var text = fs.readFileSync('textfile22.txt', 'utf8');
    console.log(text);
} catch (error){
    console.log(error);
}

console.log('readFileSync 가 종료 되었습니다.');

try{
    var text = fs.writeFileSync('textfile_sync.txt', 'utf8');
    console.log('File Write Complete');
} catch (error){
    console.log(error);
}

console.log('writeFileSync 가 종료 되었습니다.')