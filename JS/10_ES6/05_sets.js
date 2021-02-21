// SETS
// Store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // will not be added, is already there

const set2 = new Set([1, true, 'string']);

console.log(set1);
console.log(set2);

// Get count, amount of elements in the set
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({ name: 'John' })); // not the same, it is a reference object. It reference to a place in memory. It is not a primitive object which are stored directly

// Delete from set
set1.delete(100);
console.log(set1);

// ITERATE THROUGH SETS
// for...of
// you can use set1.value() and .keys(), they all result the same
console.log('LOOP');
for (let item of set1) {
  console.log(item);
}

// forEach
console.log('forEach');
set1.forEach((item) => console.log(item));

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
