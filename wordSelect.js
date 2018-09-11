
var randomWord = require("random-words");
var selectedWord = [];
var wordBoard;

getWord();
console.log(selectedWord[0]);

setBoard();

function getWord()
{
    selectedWord = randomWords({exactly: 1, maxLength: 12 });
    if (selectedWord[0].length  < 5) {
        getWord();
    }
}

function setBoard() {
    for (i=0; i < selectedWord.length; i++) {
        wordBoard += " _ ";
    }
    $("#wordBoard").innerHTML = wordBoard;

}

module.exports = randomWord;
