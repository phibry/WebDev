// Guessing Game
// User can enter a number. The system picks a random number from 1 to 6. If the user's number is equal to a random number, give the user 2 points. If the user's number is different than the random number by 1, gibe the user 1 point. Otherwise, give the user 0 points. The user can play the game as long as they want.

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt('Enter a number (1-6: '));
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    if (isNaN(userNumber)) {
      reject(new Error('Wrong Input Type!'));
    }

    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};

const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (window.confirm('Continue?')) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

// .then and .catch the Promises
// const handleGuess = () => {
//   enterNumber()
//     .then((result) => {
//       alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);

//       continueGame().then((result) => {
//         if (result) {
//           handleGuess();
//         } else {
//           alert('Game End');
//         }
//       });
//     })
//     .catch((error) => alert(error));
// };

// Async & Await instead of .then and .catch
const handleGuess = async () => {
  try {
    const result = await enterNumber();
    alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      handleGuess();
    } else {
      alert('Game End');
    }
  } catch (error) {
    alert(error);
  }
};

const start = () => {
  handleGuess();
};

start();
