// Allow to sub/unsub to certain events/functionality
// Used to notify the DOM of certain elements to be updated -> angular.js
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

// Instantiate
const click = new EventObserver();

// Event Listeners
document
  .querySelector('.sub-ms')
  .addEventListener('click', () => click.subscribe(getCurMilliseconds));

document
  .querySelector('.unsub-ms')
  .addEventListener('click', () => click.unsubscribe(getCurMilliseconds));

document
  .querySelector('.sub-s')
  .addEventListener('click', () => click.subscribe(getCurSeconds));

document
  .querySelector('.unsub-s')
  .addEventListener('click', () => click.unsubscribe(getCurSeconds));

document.querySelector('.fire').addEventListener('click', () => click.fire());

// Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
