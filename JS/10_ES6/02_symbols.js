// Symbols are unique
// Hidden Object
// Create a symbol
// not: new Symbol(), it is no constructor
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(typeof sym2, sym2);

// no two symbols can be the same
// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// Uses KEY1 as a property
// myObj.KEY1 = 'Prop1';

// Uses KEY1 as an actual Symbol()
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3'; // is no symbol
myObj.key4 = 'Prop4'; // is no symbol

// console.log(myObj);
// console.log(myObj.KEY1);
// console.log(myObj[KEY1]);

// Symbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }
// We get only the keys that are no symbols

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
