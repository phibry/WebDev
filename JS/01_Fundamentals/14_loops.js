// FOR LOOP
console.log('FOR LOOP');
// i++ -> i = i + 1
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue; // goes to the next iteration
  }

  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log('Number ' + i);
}

// WHILE LOOP
console.log(' ');
console.log('WHILE LOOP');
let i = 0;
while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// DO WHILE LOOP
console.log(' ');
console.log('DO WHILE LOOP');
let j = 100;
do {
  console.log('Number ' + 1);
  j++;
} while (j < 10);

// ARRAYS
// FOR THROUGH ARRAY
console.log(' ');
console.log('ARRAY');
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// forEACH
console.log(' ');
console.log('forEACH()');
cars.forEach(function (car, index) {
  console.log(`${index} : ${car}`);
});

// MAP
console.log(' ');
console.log('MAP');
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Phil' },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

// For in Loop
console.log(' ');
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
