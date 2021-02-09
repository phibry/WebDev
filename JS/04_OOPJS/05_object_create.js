// object.create
const personPrototype = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);

mary.getsMarried('Thomsen');
console.log(mary.greeting());

const phil = Object.create(personPrototype, {
  firstName: { value: 'Phil' },
  lastName: { value: 'Rieser' },
  age: { value: 28 },
});

console.log(phil);
console.log(phil.greeting());
