// Standard function
const sayHello = function () {
  console.log('Hello');
};
sayHello();

// Delete the function keyword, add arrow
const sayHelloArr1 = () => {
  console.log('Hello');
};
sayHelloArr1();

// One liner, delete curly braces
const sayHelloArr2 = () => console.log('Hello');
sayHelloArr2();

// Returning
const sayHello3 = () => 'Hello';
console.log(sayHello3());

// Returning Object Literal
// will result in undefined. Arrow Functions sees the object literal as the function body
const objLit = () => {
  msg: 'Hello';
};
console.log(objLit());

// Fix with adding braces
const objLit2 = () => ({
  msg: 'Hello',
});
console.log(objLit2());

// Parameters
const paraFun = (name) => console.log(`Hello ${name}`);
paraFun('Phil');

// Multiple Parameters
const paraFun2 = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
paraFun2('Phil', 'Vanilli');

// Callbacks
const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shorter version
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
