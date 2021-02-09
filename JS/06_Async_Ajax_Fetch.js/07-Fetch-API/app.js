document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Erros Handling
function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

// Get local Text-file Data
function getText() {
  // Fetch returns a promise, so we need .then()
  // resolve() -> .then()
  // reject () -> .catch()
  fetch('test.txt')
    .then((res) => res.text())
    // .then(handleErrors)
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerText = data;
    })
    .catch((err) => console.log(err));
}

// Get local JSON-data
function getJson() {
  fetch('post.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}: ${post.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get external API data
function getExternal() {
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}
