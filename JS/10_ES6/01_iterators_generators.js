// Both are similiar. can be used to iterate through something.
// Call part of a retunr, pause it, and call the next part
// Somewhat like advaned loops that can be paused

// Iterators Functions that can be paused and can return multiple values

// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false } // if
        : { done: true }; // else
    },
  };
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().done);
console.log(names.next().done);

// Generators - yield values -> * -> for generator
// Same as Iterator, different setup
// The result is the name
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
// console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* createIDs() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
