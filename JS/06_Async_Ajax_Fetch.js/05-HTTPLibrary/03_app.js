const http = new EasyHTTP();

// GET Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Date
const data = {
  name: 'Phil Vanilli',
  username: 'phibry',
  email: 'phibry@zhaw.ch',
};

// Create User
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Update User
// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delte User
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
