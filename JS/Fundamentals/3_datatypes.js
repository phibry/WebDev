// Primitive Data Type:
/* 
Stored directly in the location the variables accesses
Stored on the stack

- String
- Number
- Boolean
- Null
- Undefined
- Symbols (ES6)
*/

// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);
// #92BFBF
// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Reference Data Type:
/*
Accessed by reference
Objects that are stored on the heap
A pointer to a location in memory

- Arrasy
- Object Literals
- Functions
- Dates
- Antything Else...
*/
// Array
const hobbies = ['movies', 'music'];
console.log(typeof sym);

// Object literal
const address = {
  city: 'boston',
  state: 'MA',
};
console.log(address);
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);

// Dynamically Typed Language
/*
- Types are associated with values not variables
- The same variable can hold multiple types
- We do not need to specify types
- Most other languages are statically typed (Java, C# C++)
- There are supersets of JS and addons to allow static typing (TypeScript)
*/
