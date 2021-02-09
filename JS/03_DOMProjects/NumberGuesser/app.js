/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the plaer of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // else {
  // message.style.display = 'none';
  // }
  // Check if won
  if (guess === winningNum) {
    // Game over - won

    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost

      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border tcolor
      guessInput.style.borderColor = 'red';

      // Message for wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

      // Clear the input
      guessInput.value = '';
    }
  }
});

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // if (!won) {
  //   guessBtn.disabled = true;
  // }
  // Disable Input
  guessInput.disabled = true;
  // Change border tcolor
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
