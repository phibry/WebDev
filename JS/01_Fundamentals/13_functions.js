// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe') {
  // OLDSCHOOL DEFAULT ARGUMENTS
  // if (typeof firstName === 'undefined') {
  //   firstName = 'John';
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Smith';
  // }
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());
console.log(greet('Steve', 'Rieser'));

// FUNCTION EXPRESSIONS
// for advanced stuff
// anonymous function
const square = function (x = 3) {
  return x * x;
};

console.log(square());
console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS
// IIEFs
// Useful
// MODULE PATTERN
// DESIGN PATTERN
(function () {
  console.log('IIFE Ran..');
})();

(function (name = 'Phil') {
  console.log('Hello ' + name);
})('Yolo');

// Property Methods
const todo = {
  add: function () {
    console.log('Add todo...');
  },

  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
