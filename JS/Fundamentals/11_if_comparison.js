// if (something) {
//   do something
// } else {
//   do something else
// }

const id = 100;

// Equal to
// Doesn't matter if string or integer
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Not equal to
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Equal to value & type
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Not equal to value & type
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

console.log(' ');
// Test if undefined
const id2 = 100;
if (typeof id2 !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

console.log(' ');
// Greater or less than
const id3 = 100;
if (id3 <= 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

console.log(' ');
// IF ELSE
const color = 'yellow';
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

console.log(' ');
// Logical Operators
const name = 'Steve';
const age = 32;

// AND && -> Both are true
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR || -> one must be true
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary Operator
// Conditional Statement
// ? -> IF
// : -> ELSE
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without curly braces
if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');
