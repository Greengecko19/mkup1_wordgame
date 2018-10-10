

var letter = require("./letter.js");
var randomWord = require("random-words");


function Word() {
    var selectedWord = "";  // temp storage of random word chosen
    var tf_Array = [];  // stores True/False for each position
    var tempLetter;            // temporarily holds new Letter object while creating letter array from selected word and guesses
    var wordSplitArray = [];   // save letters individually in array

    // var guess; // ***** temporary - remove for final
    // Word(); // ***** temporary -- for testing only

    
    //Get a random word
    while (selectedWord.length < 5) {  // word must be at least 5 letters long
        selectedWord = randomWord();    
    }

    // selectedWord = "possibly"; // ***** temporary -- for testing only
    this.selectedWord = selectedWord;
    console.log("selectedWord: " + selectedWord);
    
    this.guessesLeft = (selectedWord.length * 2);  // give the user twice the number of letters to guess the word

    // guess = "s";  // ***** temporary - remove for final
    // console.log("Your guess: " + guess);
    
 
    //Make a "Letter" instance for each letter in selectedWord
    var split_word = selectedWord.split("");
    split_word.forEach( function(l) {
        var temp = new letter(l);
        console.log("temp: " + temp);  
        wordSplitArray.push(temp);
    });

    this.wordSplitArray = wordSplitArray;
    console.log("wordSplitArray:  " + JSON.stringify(wordSplitArray));
    

    // Create an array consisting of the individual letters of the word
    for (i=0; i < selectedWord.length; i++) {
        
        tempLetter = new letter(selectedWord[i]);
        console.log("i:" + i + "  tempLetter:  " + tempLetter.letter ); // displays value of the letter
        tf_Array.push(tempLetter.checkGuess());
        // console.log("tf_Array (line 42):  " + tf_Array);  // shows guessed T/F state for each position in the word
    } // End of for loop

    this.tf_Array = tf_Array;

    // Display current word state -- parses each position of the array to see if it is True or False, then pushes either a letter or "_" into displayArray
    this.showLetters = function() {
        var displayArray = "";
        this.wordSplitArray.forEach( function(letter){
            displayArray += letter.showChar() + " ";
            
            // if (wordSplitArray.wasGuessed === true) {
            //     displayArray.push(wordSplitArray.letter);
            //     }
            // else {
            //         displayArray.push("_");
            // }
        })
                
                console.log("displayArray: "  + displayArray);

        } // end of function
        

    this.checkGuess = function(guess) {  
        this.tf_Array.forEach ( function(letter){
            console.log("letter.wasGuessed:  "  + letter.wasGuessed);
            
            if ((letter.wasGuessed === false) && (letter.checkGuess(guess) === true)) {
                letter.wasGuessed = true;
            }
        })       
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

