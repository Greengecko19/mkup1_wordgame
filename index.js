var randomWord = require("random-words");
var Word = require("./word.js");
var inquirer = require("inquirer");

var lettersGuessed = [];
var badGuesses = 0;  //  bad guesses
var storedGuesses = "";
var guessesLeft = 0;
var upperWord = "";

var word = new Word(randomWord());
guessesLeft = (word.selectedWord.length); // remaining guesses available


playGame();

function playGame() {
    console.log("(Index Line 16) word.selectedWord:  " + word.selectedWord + "\n");
    
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter:  ',
            name: 'guessedLetter'
        }
    ]).then( function(response) {
        // console.log("(Index 25) You have only " + guessesLeft + " incorrect guesses left.\n");
   
        if ((guessesLeft === 0) && (word.wordArray.includes("_"))) { // if no guesses remain, and it still has an underscore, lose
            console.log("***************************************************** ");
            console.log("Sorry, you lost!  The word was " + word.selectedWord.toUpperCase());
            console.log("***************************************************** ");

        }
        if ((response.guessedLetter.length === 1) && (guessesLeft > 0)) {   //mutliple characters not allowed
            
            if (word.selectedWord.includes(response.guessedLetter)) {
                console.log("\nThat is correct!");
                console.log("(Index 35) You have only " + guessesLeft + " incorrect guesses left.\n");
                word.showWord(response.guessedLetter);
            }
            
            // console.log("storedGuesses.indexOf(response.guessedLetter -- " + storedGuesses.indexOf(response.guessedLetter));
            
            if ((!word.selectedWord.includes(response.guessedLetter)) && (!storedGuesses.includes(response.guessedLetter)) &&
                (guessesLeft > 0)) {
                console.log("That letter is not in the word!");
                storedGuesses += response.guessedLetter;
                console.log("(Index line 43) storedGuesses: " + storedGuesses);
                badGuesses++;
                guessesLeft--;
                console.log("(Index 49) You have only " + guessesLeft + " incorrect guesses left.\n");
                word.showWord(response.guessedLetter);
            }
            
            if ((!word.selectedWord.includes(response.guessedLetter)) && (storedGuesses.includes(response.guessedLetter))) {
                console.log(">>>> That letter was already used -- Try again. <<<<\n");
                console.log("(Index 49) You have only " + guessesLeft + " incorrect guesses left.\n");
                word.showWord(response.guessedLetter);
            }
            
            if (!word.wordArray.includes("_")) {
                console.log("***************************************************** ");
                word.showWord(response.guessedLetter);
                console.log("******************** You got it! ******************** ");
                return;
            }


        }
        else if ((response.guessedLetter.length != 1))  {
            console.log("Single letter guess only!\n");
            console.log(response.guessedLetter);
        }
            
        playGame();
        
    });// end then
}  // end of function playGame()



// console.log("Your current guesses (Index line 50):  " + WordState.displayArray.join(" "));

//Logic for responding to guesses
// function guess(guessedLetter){

//         if (  )
            
//         }
//         else {
//             console.log("That letter has already been guessed.\n");
//             console.log("Letters already used: " + lettersGuessed);
//             return;
//         }
//         console.log("wordState.checkGuess(guessedLetter):  " + wordState.checkGuess(guessedLetter));
        
//         var isItRight = wordState.checkGuess(guessedLetter);
//         console.log("isItRight: " + isItRight);
        
        
//         if (isItRight === true) {
//             console.log("You guessed correctly!\n");
//             console.log("Letters already used: " + lettersGuessed);
//             badGuesses++;
//             guessesLeft--;
//             console.log("You have " + guessesLeft + " guesses remaining!\n");
//         }
//         else {
//             badGuesses++;
//             guessesLeft--;
//             console.log("Incorrect! You have made " + badGuesses + " guesses so far.\n");
//             console.log("Letters already used: " + lettersGuessed);
//             console.log("You have " + guessesLeft + " remaining!\n");
//         }
    
//         if (lettersLeft === 0) {
//             console.log("You got it!");
//             wordState.showLetters();
//             gameOver = true;
//         }
    
//         if (guessesLeft === 0){
//             console.log("Boo-hoo, you lost! :(");
//             console.log("The word was " + wordState.selectedWord);
//             console.log("The word was " + wordState.resultArray);
//             gameOver = true;
//         }





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
