// ES6 Feature
// Easy way to assign variables and extract variables from arrays and objects.
// Used modularized JavaScript -> React.js

// Destructuring
// Initializing two variables
let a, b;
// Set some brackets
[a, b] = [100, 200];
console.log(a);
console.log(b);

// Rest pattern, ...-> rest-Operator
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// Objects
// () -> Expressiong
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b, rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
// person1 = John
// person2 = Beth
// person3 = Mike
console.log(person1, person2, person3);

// Parese Array returned form function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}
// init person
let person11, person22, person33;
[person11, person22, person33] = getPeople();
console.log(person11, person22, person33);

// Object Destructuring
// ES6 Modules or React.js are use cases
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello');
  },
};
// OLD ES5-Way
// const name = person.name,
//   age = person.age,
//   city = person.city;

// NEW ES6-Way -> Destructuring
// Much cleaner and easier ways
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();

//
