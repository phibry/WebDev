// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//   // console.log("Hello");

//   // Current Index of words
//   const current = this.wordIndex % this.words.length;

//   // Get full Text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if (this.isDeleting) {
//     // Remove Character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add Character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   // Check if Deleting, faste for deleting
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // Check if the word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // make pause at end
//     typeSpeed = this.wait;

//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;

//     // Move to the next word
//     this.wordIndex++;

//     // Pause before typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// // Init on DOM Load
// document.addEventListener("DOMContentLoaded", init);

// // Init APP
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // console.log("Hello");

    // Current Index of words
    const current = this.wordIndex % this.words.length;

    // Get full Text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove Character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add Character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    // Check if Deleting, faste for deleting
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // Check if the word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // make pause at end
      typeSpeed = this.wait;

      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      // Move to the next word
      this.wordIndex++;

      // Pause before typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init APP
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
