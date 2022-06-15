//steps:
//get user input through on-screen keyboard or user's keyboard, display in squares in rows
//check if word is in accepted words list
//  if word is good, display correct states of letters in squares
//      states: correct, almost, incorrect. drives colors of backgrounds of squares and keys on on-screen keyboard
//  
//  if word is bad, display msg that word is not accepted and keep them continuing to try again
function ValidKey(key) {
    return (key ==="Backspace" || key ==="Enter") || (key.length === 1 && /^[a-zA-Z]+$/.test(key));
}

function Guess(guess, targetword) {
    if (guess === targetword) {
        console.log("You guessed it! Add maybe a status code to return or idk yet.");
        return 0;
    }
    //it works but copying the code from the internet makes it harder to read
    for (let i = 0; i < targetword.length; i++) {
        console.log(guess[i]);
        if (targetword.includes(guess[i])) {
            if (targetword[i] === guess[i]) {
                console.log("Correct!");
            } else {
                console.log("Almost!");
            }
        }else{
            console.log("Incorrect!");
        }
    }

}



//change later with dynamic square creation
let targetword = "afdas";
let guess = "";
let wordLength = 5;
let currentGuessRow = 0;
document.addEventListener('keyup', (event) => {
    var key = event.key;

    if (ValidKey(key)){
        if (guess.length < wordLength){
            if (key === "Backspace"){
                if (guess.length > 0) guess = guess.substring(0, guess.length - 1);
            }
            else if (key === "Enter") console.log("Word too short!!! Add message and change css class or something.");
            else guess += key;
        } 
        else{
            if (key === "Enter") Guess(guess, targetword);
            if (key === "Backspace") guess = guess.substring(0, guess.length - 1);
    }
    console.log(guess);
        //im a robot, so I don't need to check if the word is in the list of accepted words
        //find currentguessrow and select it.
        //var currentGuessRow = document.getElementById("currentGuessRow");
        //maybe just keep track of input up to length of currentguessrow/global word length
        //if currentguessrow is full, dont add to it.
        //else find next empty square and add to its contents.
        //if submitted or enter pressed, do word check. 
        //check length of word, check if word is in accepted words list
        //display proper square states based on letters in guess and targetword
    }



  }, false);