const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
var attempts = 0;
var maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  maxNumberOfAttempts--;
  // Get value from guess input element
  var guess = parseInt(guessInput.value, 10);
  attempts = attempts++;

  hideAllMessages();

  
  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = 'You made ${attempts} guesses';

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

    if (attempts === maxNumberOfAttempts) {
    maxGuessesMessage.style.display = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = "";

  resetButton.style.display = "";
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
      messages[elementIndex].style.display = 'none';
  }
}


function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //attempts = 0;
 maxNumberOfAttempts = 5;

 
 // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;
  
  hideAllMessages();
  resetButton.style.display = 'none';

  /*hide messages at the beginning;
  tooHighMessage.style.display='none';
  tooLowMessage.style.display='none';
  maxGuessesMessage.style.display='none';
  numberOfGuessesMessage.style.display='none';
  messages.style.display='none';
  correctMessage.style.display='none';*/
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);


setup();
