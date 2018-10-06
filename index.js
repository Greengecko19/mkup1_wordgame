

var WordState = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require('inquirer');

var letters_guessed = new Set();
var badGuesses = [];
var wordState = new WordState(); // new guess state
var letterInProcess = new Letter();

var gameOver = false;
var numGuesses = 0;  //  total guesses
var isItRight = false;  // current guess status

var guesses_left = wordState.resultArray.length;
var letters_left = wordState.resultArray.length;


console.log("Index line 16:  " + wordState.spacedArray ); // display current guessing progress

playGame();

function playGame() {
    wordState.showLetters(); // run function from word.js
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter:  ',
            name: 'guessedLetter'
        }
    ]).then( function(response) {
        if ((response.guessedLetter.length === 1) && (!gameOver)) {   //mutliple characters not allowed
                guess(response.guessedLetter);
                playGame(); // ask for letter again
        }
        else {
            console.log("You can only guess one letter at a time!\n");
            playGame();
        }
    });
}  // end of function playGame()
    
   
// console.log("Your current guesses (Index line 50):  " + WordState.displayArray.join(" "));

//Logic for responding to guesses
function guess(guessedLetter){

        if (!letters_guessed.has(guessedLetter)){   // if guess matches one letter in word, add it to the list of letters guessed
            letters_guessed.add(guessedLetter);
        }
        else {
            console.log("That letter has already been guessed.\n");
            // badGuesses.push(guessedLetter);                     // store bad guesses
            // console.log("Incorrect guesses so far: " + badGuesses);
            return;
        }
        
        console.log("isItRight 56: " + isItRight);
        isItRight = wordState.checkGuess(guessedLetter);
        console.log("isItRight 58: " + isItRight);

        if (isItRight === true) {
            console.log("You guessed correctly!\n");
            letters_left -= isItRight;
            console.log("You have " + guessesLeft + " remaining!\n");
        }
        else {
            numGuesses++;
            console.log("Incorrect! You have made " + numGuesses + " so far.\n");
            console.log("You have " + guessesLeft + " remaining!\n");
        }
    
        if (letters_left === 0) {
            console.log("You got it!");
            word.showLetters();
            gameOver = true;
        }
    
        if (guessesLeft === 0){
            console.log("Boo-hoo, you lost! :(");
            console.log("The word was " + word.word)
            gameOver = true;
        }

}  // end of function guess()




// inquirer.prompt([
// {
//     type: 'confirm',
//     message: 'Would you like to play the Word Game?',
//     name: 'confirm',
//     default: true
// }
// ]).then( function(response) {
// console.log(response);

// if (response.confirm) {
// 
// else {
//     console.log("OK, no game then.");
// }