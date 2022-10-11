const assert = require('assert');
const func = require('./num_adder')

console.log('Function add(a,b) should add two positive integers')
assert(func.add(1,1) === 2)
console.log('Function add(a,b) should add positive and negative integers')
assert(func.add(-1, 1) === 0)
console.log('Function add(a,b) should add two negative integers')
assert(func.add(-1, -1) === -2)
console.log('Function add(a,b) should not add chars')
assert(isNaN(func.add('a', -1)))