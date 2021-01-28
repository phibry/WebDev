// 2
// Variables
// var, let, const
// var is old school
var name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

// // Init var
var greeting2;
console.log(greeting2);
greeting2 = 'hello';
console.log(greeting2);

// // Can be a variable
// // letterns, numbers, _, $
// // Can not start with a number

// var 1name = 'John'
// // not recommende, for jquery
var $name = 'John';

// // global for private variables
var _name = 'John';

// // Multi word vars
// // Camel case
var fistName = 'John';
var fist_name = 'Sara'; // for like python, php etc.

// // Pascal case
// // Constructor Function, or Class names starts with an uppercase letter
var FirstName = 'Tom';

// // not recomennde
var firstname = 'Philipp';

//
//
// Let
// let name;
let name1 = 'John Doe';
console.log(name1);

name1 = 'Steve Smith';
console.log(name1);

//
//
// Const (can't change)
const name2 = 'John';
console.log(name2);
// // Can not reassigned
// // name = 'Sara';
// // Have to assign a value
// // const greeting;

const person = {
  name: 'John',
  age: 30,
};
console.log(person);

person.name = 'Sara';
person.age = 32;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
