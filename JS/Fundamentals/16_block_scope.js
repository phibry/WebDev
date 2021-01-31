// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

// BLOCK LEVEL SCOPE
// Everything inside curly braces
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block (if) Scope: ', a, b, c);
}

// if it would be
//    var a = 0
// it would change in the global scope
for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
