/* 
TO DO
  check if player is typing space, and remove it from input
  add hangman images
  check if rightLetter.length === unique # of letters in wordToGuess
  check if lose
  show error message if player enters value without starting a game
BUGS:
  can only fetch(txt) with live server, not when loading "index.html" file from folder.
  can enter SPACE in input, covering the placeholder text
    can't seem to reset input when there is a SPACE typed
  can't get "\n" to work
*/

let wordToGuess = "";
let guessedLetters = "";
let wrongLetters = "";
let rightLetters = "";
let wrongGuesses = 0;
let playerSolution = "";
let solutionUniqueChars = 0;
const allowedLetters = /^[A-Za-z]+$/;

function resetGame() {
  guessedLetters = "";
  wrongLetters = "";
  rightLetters = "";
  wrongGuesses = 0;
  playerSolution = "";
  solutionUniqueChars = 0;
  document.getElementById("hangman").innerHTML = `${wrongGuesses}/10 wrong guesses`;
  document.getElementById("wrongGuesses").innerHTML = "";
}

function newGame() {
  resetGame();
  chooseRandomWord().then(() => {
    fillSolution();
    countUniqueCharacters(wordToGuess);
    // any other function calls that depend on wordToGuess
  });
}

function fillSolution() {
  for (let i = 0; i < wordToGuess.length; i++) {
    playerSolution += "_";
  }
  document.getElementById("rightGuesses").innerHTML = playerSolution;
}

function chooseRandomWord() {
  // Fetch the text file
  return fetch('hangman_words22.txt')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to load the text file.');
      }
      // Read the response as text
      return response.text();
    })
    .then(text => {
      // convert string into array
      text = text.split(" ");
      // count # of words in:  handman_words.txt      
      wordCount = text.length;      
      // generate random number from 1 to wordCount
      let rando = Math.floor((Math.random() * wordCount));
      wordToGuess = text[rando];
      /* show answer to debug */
      /* document.getElementById('feedback').textContent = wordToGuess; */
      document.getElementById('feedback').textContent = "Guess a letter!";
      return wordToGuess;
    })
    .catch(error => {
      // Display an error message if the file couldn't be loaded
      document.getElementById('feedback').textContent = 'Error loading the text file.';
      console.error(error);
    });
}

function enteringKey(event) {
  if (event.key == "Enter") {
    submitLetter();
  }
}

function submitLetter() {
  let pInput = document.getElementById("playerInput").value;
  pInput = pInput.toLowerCase();
  console.log(pInput);
  // check if input is empty or space
  if (pInput != "" && pInput != " ") {
    // check if input is A-Z
    if (pInput.match(allowedLetters)) {
      document.getElementById("feedback").innerHTML = `You entered '${pInput.toUpperCase()}'`;
      // check if letter has been guessed already
      if (!guessedLetters.includes(pInput)) {
        guessedLetters += pInput;
        // check if guess is correct
        if (wordToGuess.includes(pInput)) {
          rightLetters += pInput;
          addCorrectLetter(pInput);
          checkWin();
        } else {
          wrongLetters += pInput.toUpperCase() + " ";
          wrongGuesses++;
          document.getElementById("wrongGuesses").innerHTML = wrongLetters;
          document.getElementById("hangman").innerHTML = `${wrongGuesses}/10 wrong guesses`;
        }
      } else {
        document.getElementById("feedback").innerHTML = `You have already guessed '${pInput}'. Choose a different letter`;
      }
    } else {
      document.getElementById("feedback").innerHTML = `'${pInput}' Is not a valid letter. Enter a letter (a-z).`;
    }
    document.getElementById("playerInput").value = "";
    // refocus input after submitting
    document.getElementById("playerInput").focus();
  }
}

function addCorrectLetter(letter) {
  //get all indices of the input in the wordToGuess
  let indices = [];
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter) {
      indices.push(i);
      // ADD LETTER(S) TO SOLUTION
    }
  }
  /* alert(indices); */
  let capitalLetter = letter.toUpperCase();
  playerSolution = placeLetterInAnswer(capitalLetter, indices, playerSolution);
  document.getElementById("rightGuesses").innerHTML = playerSolution;
}

function placeLetterInAnswer(letter, indices, answer) {
  let newAnswer = answer.split('');

  indices.forEach(index => {
    newAnswer[index] = letter;
  });

  return newAnswer.join('');
}




function checkWin() {
  let uniqueChars = countUniqueCharacters(wordToGuess);
  if (uniqueChars === rightLetters.length) {
    /* Capitalise first letter of word */
    solutionCapitalised = wordToGuess.charAt(0).toUpperCase() + wordToGuess.slice(1);
    document.getElementById("feedback").innerHTML = `You have Won! The word was: '${solutionCapitalised}'`;
  }
}
function countUniqueCharacters(str) {
  // Create an object to store encountered characters
  var charMap = {};

  // Iterate over each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // If the character is not already in the charMap, add it
    if (!charMap[char]) {
      charMap[char] = true;
    }
  }

  // Count the number of keys (unique characters) in the charMap
  var count = Object.keys(charMap).length;

  return count;
}

/*
countUniqueCharacters(input)
{
    String unique = input.replaceAll("(.)(?=.*?\\1)", "");
    return unique.length();
}
*/
