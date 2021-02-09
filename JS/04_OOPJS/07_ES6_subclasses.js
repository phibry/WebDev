class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Extend this with a Customer Class
// Customer is a Sublcass of the Class Perosn
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // Calls the parentclass constructor
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-555', 'Premiun');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
console.log(Person.getMembershipCost());
