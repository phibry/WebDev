async function getUsers() {
  // normally we had to to .then and then another .then

  // await response of the fetch call
  // would have been the first promise -> .then()
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once the promise is resolved
  // would have been the second promise -> .then()
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
