const crypto = require('crypto');

// 암호화 키
const key = 'keykeykeykeykeyk';

// number used once 매번 바꿔 사용하는 번호 
const random = crypto.randomBytes(12);

const aad = Buffer.from('0123456789', 'hex');

// aes 128 ccm 암호화 객체 생성 TAG는 16바이트
const cipher = crypto.createCipheriv('aes-128-ccm', key, random,  {
  authTagLength: 16
});

// 평문 데이터
const plaintext = 'Hello-world';

// aad 추가
cipher.setAAD(aad, {
  plaintextLength: Buffer.byteLength(plaintext)
});

// 평문 암호화
const ciphertext = cipher.update(plaintext, 'utf8');

// 암호화 완료 - 이 이후로는 더이상 이 암호화 객체를 사용할 수 없음
cipher.final();

// 암호화
console.log('원문 글자' + plaintext);
console.log('암호화 : ' + ciphertext.toString("hex"));