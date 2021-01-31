const num1 = 100;
const num2 = 50;
let val;

// Basic Math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 3, 4, 5, 9, -10);
val = Math.max(1, 2, 5, 61, 2, 10);
val = Math.random(); // Normal-dist
val = Math.floor(Math.random() * 20 + 1); // Random Number [1, 20]

console.log(val);
