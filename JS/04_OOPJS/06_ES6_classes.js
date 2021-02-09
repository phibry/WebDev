class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // Direct into the __proto__
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calcAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static Method
  // Stand alone function without the need of an instantiation
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Liu', '11-13-1980');
console.log(mary);
console.log(mary.greeting());

mary.getsMarried('Smith');
console.log(mary.greeting());

console.log(Person.addNumbers(1, 2));
