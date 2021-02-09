// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const p1 = new Person('John', 'Doe');
console.log(p1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // Inherit from the Person Constructor
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods -> will still be person constructor
Customer.prototype = Object.create(Person.prototype);

// Make customer.protoype return customer()
Customer.prototype.constructor = Customer;

const c1 = new Customer('Mary', 'Liu', '9999999', 'Premium');
console.log(c1);
console.log(c1.greeting());

// Customer Greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to the Company.`;
};
console.log(c1.greeting());
console.log(p1.greeting());
