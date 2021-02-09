// Not many uses for this methods
// String

const name1 = 'Jeff';

// Technically a string, but it is an object
const name2 = new String('Jeff');

// You can add things
// name2.foo = 'bar';

// Problems with matching types
console.log(typeof name1);
console.log(typeof name2);

if (name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1, num1);
console.log(typeof num2, num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1, bool1);
console.log(typeof bool2, bool2);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum1(1, 1));
console.log(getSum2(1, 1));

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });

console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
