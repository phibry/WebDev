// ES6 Feature
// Holds key value pairs
// Any value wether its an object or object reference type or primitives can be used as a key or value, very different thant to just an object literal.

// MAPS = key-value pairs - we can use ANY type as a key or value
const map1 = new Map();

// Set Keys
const key1 = 'some string',
  key2 = {}, // empty object
  key3 = function () {}; // empty function

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values, amount of key value pairs
console.log(map1.size);

// ITERATE THROUGH MAPS
// Loop using for...of to get keys ans values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate Keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate Values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop with forEach
map1.forEach((value, key) => console.log(`${key} = ${value}`));

// CONVERT TO ARRAY
// Create an array of the keys value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
