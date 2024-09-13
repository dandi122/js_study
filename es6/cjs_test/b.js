/**
 * cjs 방식으로 모듈 가져오기
 */

// b.js 에서 a.js를 가져와서 사용
const mod = require('./a.js'); // ./a or ./a.js
console.log(mod);

const mod_c = require('./c.js'); // ./a or ./a.js
console.log(mod_c);
console.log(mod_c.a);
mod_c.b();

const {a, b, obj} = require('./c.js');
console.log(a, obj);
b();

// 대표모듈이 있다면 대표만 가져오기가 성립된다
const mod_d = require('./d');
console.log(mod_d);

