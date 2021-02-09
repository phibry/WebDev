let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to Number
val = Number('5');

// Boolean to number
val = Number(true);
val = Number(false);
val = Number(null);

// String
val = Number('hello'); // can't be parsed to a number
val = Number([1, 2, 3]); // NaN

// ParseInt Only Integer
val = parseInt('100.31');
val = parseFloat('100.31');

const val1 = '5';
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
console.log(typeof Number(sum));
// Output
console.log(val);
console.log(typeof val);

// .length() works only for string
// console.log(val.length);

// .toFixed() for numbers
console.log(val.toFixed());
