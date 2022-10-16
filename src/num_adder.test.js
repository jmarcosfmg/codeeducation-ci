const assert = require('assert');
const { add } = require('./num_adder');

test("Function add(a,b) should add two positive integers", () => expect(add(1,1)).toBe(2))
test("Function add(a,b) should add positive and negative integers", () => expect(add(-1, 1)).toBe(0))
test("Function add(a,b) should add two negative integers", () => expect(add(-1, -1)).toBe(-2))
test("Function add(a,b) should not add chars", () => expect(add('a', -1)).toBe(NaN))