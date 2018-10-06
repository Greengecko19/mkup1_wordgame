var letter = require("./letter.js");
var randomWord = require('random-words');
var selectedWord = "";  // temp storage of random word chosen
var num1 = 0; //counter for random word search tries


// Word(); // for testing only

function Word(){
    
    //Pick a word and make theguessesLeft letters for it
    var letters = [];
    var split_word = []; // array to store individual letters of word
    
    //Get a random word
    selectedWord = randomWord();
    this.guessesLeft = (selectedWord.length * 2);
    console.log(selectedWord);
    
    num1++;
    console.log(selectedWord + ":  " + "Length: " + selectedWord.length + " -- Attempt # " + num1);
    // word must be at least 5 letters long
    while (selectedWord.length < 5) {
        selectedWord = randomWord();
        num1++;
        console.log(selectedWord + " -- " + "Length: " + selectedWord.length + " -- Attempt # " + num1);
    }
    
    //Make a Letter instance for each letter
    this.selectedWord = selectedWord;
    split_word = selectedWord.split("");
    split_word.forEach (function(l) {
        var temp = new letter(l);
        letters.push(temp);
    });
    
    this.letters = letters;
    

////////// vvv PREVIOUS CODE VVV /////////////////
//Display word with letters shown or hidden
this.showLetters = function() {
    var board = "";
    this.letters.forEach( function(letter){
        board += letter.position() + " ";
    });
    
    board = board.slice(0, -1);  // removes trailing space
    console.log(board);
}

this.checkGuess = function(guess) {
    var matches_found = 0;
    this.letters.forEach( function(letter){
        if ((letter.guessed === false) && (letter.checkGuess(guess) === true)) {
            letter.guessed = true;
            matches_found++;
        }
    });
    
    return matches_found;
}

////////// ^^^ PREVIOUS CODE ^^^ /////////////////

    
} // end of "Word" function




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