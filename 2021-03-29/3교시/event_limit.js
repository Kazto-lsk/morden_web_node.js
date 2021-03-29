process.on('exit', () => { console.log('리스너 1'); });
process.on('exit', () => { console.log('리스너 2'); });
process.on('exit', () => { console.log('리스너 3'); });
process.on('exit', () => { console.log('리스너 4'); });
process.on('exit', () => { console.log('리스너 5'); });
process.on('exit', () => { console.log('리스너 6'); });
process.on('exit', () => { console.log('리스너 7'); });
process.on('exit', () => { console.log('리스너 8'); });
process.on('exit', () => { console.log('리스너 9'); });
process.on('exit', () => { console.log('리스너 10'); });

//이벤트 리스너 리미트 증량
process.setMaxListeners(15);

process.on('exit', () => { console.log('리스너 11'); });