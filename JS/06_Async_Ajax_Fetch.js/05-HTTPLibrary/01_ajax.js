// ES5 - AJAX - with prototypes

// Constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  // Arrow-Function would work -> ES6
  // this.http.onload = () => {

  let self = this;
  this.http.onload = function () {
    // this. is here in a function, so it is in another scope. An error message will occur. A workaround is defining this outside of the function: here self
    if (self.http.status === 200) {
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  // we don't need to check for status, because we do here a post request
  let self = this;
  this.http.onload = function () {
    // responseText should be the new post, shoudl have id of 101, since we have 100 posts from GET
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  // we don't need to check for status, because we do here a post request
  let self = this;
  this.http.onload = function () {
    // responseText should be the new post, shoudl have id of 101, since we have 100 posts from GET
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  // Arrow-Function would work -> ES6
  // this.http.onload = () => {

  let self = this;
  this.http.onload = function () {
    // this. is here in a function, so it is in another scope. An error message will occur. A workaround is defining this outside of the function: here self
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
