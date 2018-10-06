var wordclass = require("./temp-word.js");
var inquirer = require("inquirer");
var game_over = false;
var letters_guessed = new Set();


var word = new wordclass();
var guesses_left = word.letters.length;

var letters_left = word.letters.length;

console.log(guesses_left);


function ask(){
    word.showLetters();
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter"
        }
    ]).then( function(response){
        guess(response.letter);
        if(!game_over){
            ask();
        }
    })
}

ask();

//Logic for responding to guesses
function guess(letter){
    if(letter.length === 1){
        if(!letters_guessed.has(letter)){
            letters_guessed.add(letter);
        }
        else{
            console.log("Letter has already been guessed!\n");
            console.log("Incorrect!  " + guesses_left + " guesses remaining\n");
            return;
        }
        var num_correct = word.checkGuess(letter);
        console.log("num_correct: " + num_correct);
        if( num_correct > 0){
            console.log("Correct!\n");
            console.log("Incorrect!  " + guesses_left + " guesses remaining\n");
            letters_left -= num_correct;
        }
        else{
            guesses_left--;
            console.log("Incorrect!  " + guesses_left + " guesses remaining\n");
        }
    
        if(letters_left === 0){
            console.log("You win!");
            word.showLetters();
            game_over = true;
        }
    
        if(guesses_left === 0){
            console.log("You lose!");
            console.log("Word was " + word.word)
            game_over = true;
        }

    }
    else{
        console.log("You can only guess one letter at a time!\n");
    }
    
    
}
