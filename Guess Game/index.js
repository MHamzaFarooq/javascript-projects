const randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector("#subt");
const guessValue = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".results");
const startButton = document.querySelector(".form");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessValue.value);
    guessValidation(guess);
  });
}

function guessValidation(guess) {
  //is it valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    prevGuess.push(guess);
    if (numberOfGuesses === 11) {
      displayMessage(guess);
      displayGuess(guess);
      displayMessage(`game over, the random number was: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // actual logic
  if (guess === randomNumber) {
    displayMessage(`You guessed it!!! is was ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is higher`);
  } else if (guess > randomNumber) {
    displayMessage(`number is lower`);
  }
}

function displayMessage(message) {
  // display message
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  guessValue.value = "";
  prevGuesses.innerHTML += `${guess} , `;
  numberOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
  if (remainingGuesses == 0) {
    endGame();
  }
}
function endGame() {
  startButton.innerHTML = "<h1>Reload to start new game</h1>";
  guessValue.value = "";
  guessValue.setAttribute("disabled", " ");
  startOver.innerHTML = "";
}
function newGame() {}
