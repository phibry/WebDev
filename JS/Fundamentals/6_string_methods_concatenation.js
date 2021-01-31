const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello there my name is Phil';
const age = 36;
const tags = 'Web design, web development, programming, python, nodejs';

let val;

// without a space
val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Phil ';
val += 'Rieser';
console.log(val);

val = 'Hello my name is ' + firstName + ' and i am ' + age;

// Escaping
val = "That's awesome I can't wait";
// prettier-ignore
val = 'That\'s awesome I can\'t wait';

// Length
val = firstName.length; // Property, not a method

// Concat, method
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index
val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
// not exist -> Default is -1
val = firstName.lastIndexOf('x');

// charAt()
val = firstName.charAt('2');

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Phil', 'Tanja');

// includes()
val = str.includes('Hello');

val = console.log(val);
