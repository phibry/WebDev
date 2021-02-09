// Birthday example

// Create a function
const onlyBirthday = (isKaySick) => {
  // function will return a promise object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKaySick) {
        // if promise is resolved
        resolve(2);
      } else {
        // if promise is rejected
        reject(new Error('I am sad'));
      }
    }, 2000);
  });
};

console.time('Timer');
// Function returns a promise
// with .then we can continue with the resolved case
// with .catch we can continue with the rejected case
onlyBirthday(true)
  .then((result) => {
    console.timeLog('Timer');
    console.log(`I have ${result} cakes`);
  })
  .catch((err) => {
    console.timeLog('Timer');
    console.log(err);
  })
  .finally(() => {
    console.log('Party');
  });
