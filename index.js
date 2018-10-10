

var WordState = require("./word.js");
var inquirer = require('inquirer');

var lettersGuessed = [];
var wordState = new WordState(); // new guess state

var gameOver = false;
var numGuesses = 0;  //  total guesses
var guessesLeft = 0; // remaining guesses available
var lettersLeft = wordState.selectedWord.length;
console.log("lettersLeft: "  + lettersLeft);


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
            console.log(response.toString());
            
            playGame();
        }
    });
}  // end of function playGame()
    

// console.log("Your current guesses (Index line 50):  " + WordState.displayArray.join(" "));

//Logic for responding to guesses
function guess(guessedLetter){

        if (!lettersGuessed.includes(guessedLetter)){   // if guess has not been previously used, add it to the list of letters used
            lettersGuessed.push(guessedLetter);    // store all guesses
            guessesLeft--;
        }
        else {
            console.log("That letter has already been guessed.\n");
            console.log("Letters already used: " + lettersGuessed);
            return;
        }
        console.log("wordState.checkGuess(guessedLetter):  " + wordState.checkGuess(guessedLetter));
        
        var isItRight = wordState.checkGuess(guessedLetter);
        console.log("isItRight: " + isItRight);
        
        
        if (isItRight === true) {
            console.log("You guessed correctly!\n");
            console.log("Letters already used: " + lettersGuessed);
            numGuesses++;
            guessesLeft--;
            console.log("You have " + guessesLeft + " guesses remaining!\n");
        }
        else {
            numGuesses++;
            guessesLeft--;
            console.log("Incorrect! You have made " + numGuesses + " guesses so far.\n");
            console.log("Letters already used: " + lettersGuessed);
            console.log("You have " + guessesLeft + " remaining!\n");
        }
    
        if (lettersLeft === 0) {
            console.log("You got it!");
            wordState.showLetters();
            gameOver = true;
        }
    
        if (guessesLeft === 0){
            console.log("Boo-hoo, you lost! :(");
            console.log("The word was " + wordState.selectedWord);
            console.log("The word was " + wordState.resultArray);
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

//////// Murial's code ////////////
// var playGame = () => {
// 	if(guessesLeft > 0){
// 		inquirer.prompt([
// 			{
// 				type: "input",
// 				message: "Guess a letter in the word: " + word.showWord(),
// 				name: "guess"
// 			}
// 		]).then((res) => {
//             letterInProcess.displayChar(res.lettersLeft);
            
			
// 			playGame();
// 		})
// 	}
// }
