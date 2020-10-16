const assert = require('assert');
const myModule = require('./assembly/index.ts');
assert.equal(myModule.add(1, 2), 3);
console.log('ok');
assert.equal(myModule.fibonacci(5), 3);
