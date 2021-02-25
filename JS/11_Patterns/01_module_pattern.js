// Basic structure

// Immediately Invoked Function Expression
// IIFE
// Runs as soon as it is defined
// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   };
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function () {
  let text = 'Hello World';

  // this is privat
  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  // this is public, can be accessed from the outside
  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // won't work, changeText is private
