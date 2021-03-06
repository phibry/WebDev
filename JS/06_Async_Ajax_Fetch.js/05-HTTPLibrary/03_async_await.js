/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Phil Rieser
 * @licence MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request
  // This method will return a promise
  // fetch returns a promise and will return a promise again
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }
  // Make an HTTP DELETE Request
  async delete(url, data) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = 'Resource deleted...';
    return resData;
  }
}
