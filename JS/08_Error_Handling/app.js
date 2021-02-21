const user = { email: 'jdoe@gmail.com' };

try {
  console.log('Try');
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce Syntaxerror
  // console.log(eval('2+2'));
  // eval('"Hello"');
  // eval('Hello');

  // Will produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log('Catch');
  console.error(e);
  console.log(e);
  console.log(`User Error: ${e.message}`);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  // No mather what, this code section will always run
  console.log('Finally');
}

// With try and catch, the programm continues without breaking
console.log('Program continues...');
