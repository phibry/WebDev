// Object Literals
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: '36',
  email: 'steve@smith.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Winterthur',
    state: 'ZH',
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

// Get specific value
// val = person['firstName'];
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 28 },
  { name: 'Nancy', age: 76 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].age);
}
