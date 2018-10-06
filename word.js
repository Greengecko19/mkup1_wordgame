

var Letter = require("./letter.js");
var randomWord = require('random-words');
var selectedWord = "";  // temp storage of random word chosen
var num1 = 0; //counter for random word search tries

var resultArray = [];  // stores True/False for each position
var holder;            // temporarily holds new Letter object while creating letter array from selected word and guesses
var displayArray = [];

// var guess; // ***** temporary - remove for final

// Word(); // ***** temporary -- for testing only

function Word() {

    //Get a random word
    selectedWord = randomWord();
    // selectedWord = "possibly"; // ***** temporary -- for testing only
    num1++;
    while (selectedWord.length < 5) {  // word must be at least 5 letters long
        selectedWord = randomWord();
        num1++; // ***** temporary counter for testing only
    }
    console.log("selectedWord: " + selectedWord);
    
    this.guessesLeft = (selectedWord.length * 2);  // give the user twice the number of letters to guess the word

    // console.log("Number of attempts:  " + num1);  // shows how many attempts required
    // guess = "s";  // ***** temporary - remove for final

    // Create an array consisting of the individual letters of the word
    for (i=0; i < selectedWord.length; i++) {
        
        holder = new Letter(selectedWord[i]);
        console.log("i:  " + i);
        console.log("holder:  " + holder.letter ); // displays value of the letter
        
        resultArray.push(holder.checkGuess());

    } // End of for loop

    console.log("resultArray (line 43):  " + resultArray);  // shows guessed T/F state for each position in the word

    this.resultArray = resultArray;

    // Display current word state
    this.showLetters = function(guess) {
        for (i=0; i < resultArray.length; i++) {
            if (resultArray[i]) {
                displayArray.push(guess);
            }
            else {
                displayArray.push("_");
            }
        }
        this.spacedArray = displayArray.join(" ");
        console.log("Your current guesses (displayArray, Word.js - line 57):  " + displayArray.join(" "));
    }

    this.checkGuess = function(guess) {
        for (i=0; i < displayArray.length; i++) {
            var matchesFound = 0;
            console.log(holder.wasGuessed);
            
            if ((holder.wasGuessed === false) && (holder.checkGuess(guess) === true)) {
                holder.wasGuessed = true;
                matchesFound++;
            }
        }
         

    }
    
    // this.showLetters(); // ***** temporary -- for testing only
    // this.checkGuess();  // ***** temporary -- for testing only
    
} // end of main "Word" function

module.exports = Word;


// --- Optional random selection from array ---
// var wordChoices = ["internet", "server", "memory", "database", "application", "spreadsheet"];
// selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// Using 'random-words' npm package
// selectedWord = randomWord({ exactly: 1, maxLength: 12 });
// console.log(selectedWord);


////////////////////////////////////////
// This section for use with 'random-words' npm package with minimum length
// function getWord() {
//     selectedWord = randomWord();
//     num1++;
//     console.log(selectedWord + ":  " + "Length: " + selectedWord.length + " -- Attempt # " + num1);
//     // word must be at least 5 letters long
//     if (selectedWord.length < 5) {
//         num1++;
//         console.log(selectedWord + " -- " + "Length: " + selectedWord.length + " -- Attempt # " + num1);
//         getWord();
//     }
//     console.log(selectedWord);
// }
// getWord();
//////////////////////////////////////

