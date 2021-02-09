// Window or the Browser is the runtime of the client-side
// WINDOW METHODS / OBJECTS / PROPERTIES

// CONSOLE
// window.console.log(123);
// console.log(123);

// ALERT
// window.alert('Hello');
// alert('hello2');

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// OUTER HEIGTH AND WIDTH
val = window.outerHeight;
val = window.outerWidth;

// INNER
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY; // div in index.html

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// HISTORY OBJECT
// window.history.go(-2);
val = window.history.length;

// NAVIGATOR OBJECT, does have to do smth with the browser
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
