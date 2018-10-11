function Letter(letter) {
    this.letter = letter; //holds the letter for the current position
    this.wasGuessed = false; //indicates if current position has been guessed or not

    this.checkGuess = function(guess) {  // 
        if (guess === this.letter) {
            this.wasGuessed = true;
            return true;
        }
        else {
            return false;
        }
    }

    this.showChar = function() {  //  if the letter was guessed, display the letter, otherwise display "_"
        if (!this.wasGuessed){
            return "_";
        }
        else{
            return this.letter;
        }
    }
} // end of constructor

module.exports = Letter;




//////// vvv WORKING CODE BELOW vvv //////////
// var tempWord = "shipwreck";
// var holder;
// var letterArray = [];
// var resultArray = [];
// var guess = "p";


// for (i=0; i < tempWord.length; i++) {
    
//     holder = new Letter(tempWord[i]);
//     console.log("i:  " + i);
//     console.log("holder:  " + holder.letter);
    
//     letterArray.push(holder.checkGuess(guess));
    
//     // console.log("letterArray (line 43):  " + letterArray);
//     // console.log("Line 43: " + letterArray.join(" "));
    
// } // end of for loop


// for (i=0; i < letterArray.length; i++) {
//     if (letterArray[i]) {
//         resultArray.push(guess);
//     }
//     else {
//         resultArray.push("_");
//     }
// }

// console.log("Your current guesses:  " + resultArray.join(" "));

//////// ^^^ WORKING CODE ABOVE ^^^ //////////


// if (holder.letter === "e") {
//     holder.guessed = true;
// }

// letterArray.push(holder.position());

// var temp = new Letter("a");
// console.log(temp);
// console.log( "temp.position: " + temp.position() );
// temp.guessed = true;
// console.log( "temp.position: " + temp.position() );