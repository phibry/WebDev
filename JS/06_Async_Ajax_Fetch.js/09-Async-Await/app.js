// ES7
// Maybe we have to backward compile this ES7 feature to an ES5-version with Webpack/Babel

// will return a promise
async function myFunc() {
  // return 'Hello';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = false;

  if (!error) {
    // Wait until promise is resolved
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

// console.log(myFunc());
myFunc().then((res) => console.log(res));
