// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // CREATE XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  // - Type of the Request
  // - The file of the request
  // - If Async -> true
  xhr.open('GET', 'data.txt', true);

  // 1: server connection established
  console.log('readyState', xhr.readyState);

  // OPTIONAL - Used for spinners/loaders
  xhr.onprogress = function () {
    // 3: processing request
    console.log('readyState', xhr.readyState);
    // Here we can put in a loader/spinner
  };

  xhr.onerror = function () {
    console.log('Request error...');
  };

  // readyState: 4
  xhr.onload = function () {
    // We dont have to check for readystate === 4, with this new way, we are already at the state 4
    // 4: request finished and response is ready
    console.log('readyState', xhr.readyState);

    // everything what we need to do with the data
    if (this.status === 200) {
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }

    const text = this.responseText;
    console.log(typeof text);
    let val;
    val = text.split(' ');
    console.log(val[2]);
    val.forEach(function (word, index) {
      console.log(`${index} ${word}`);
    });
  };

  // The old way, check for status and readystate
  // xhr.onreadystatechange = function () {
  //   console.log('readyState', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.send();
}
