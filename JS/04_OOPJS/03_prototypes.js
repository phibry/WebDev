// Object.prototype -> Object Literal (in-built)
// Person.prototype -> Person constructor (created)

// Person constructor
function Person(firstName, lastName, dob) {
  // this is like self in python
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // Get Age should be in the prototype and not in the constructor
  // this.calcAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate age
Person.prototype.calcAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calcAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

// in-built property function
console.log(mary.hasOwnProperty('firstName'));

// Is not in it's own property
console.log(mary.hasOwnProperty('getFullName'));
