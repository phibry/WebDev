// Object Literal
// const brad = {
//   name: 'Brad',
//   age: 30,
// };

// console.log(Brad);

// Person constructor
function Person(name, dob) {
  // this is like self in python
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  // Get Age
  this.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime();

    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// this here will result to the window object
// this.alert(1);

// const brad = new Person('brad', 20);
// const john = new Person('john', 30);

// console.log(brad.age);
// console.log(john);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calcAge());
