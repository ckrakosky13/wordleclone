let currentGuessRow = 0;
const container = document.getElementById("container");
containersChildren = document.getElementsByClassName("container").children;
console.log(containersChildren, container.children);
let targetword = "afdas";
let guess = "";
let wordLength = 5;
let guessLength = 3;
function Initialize() {

}


function ValidKey(key) {
    return (key ==="Backspace" || key ==="Enter") || (key.length === 1 && /^[a-zA-Z]+$/.test(key));
}

function Guess(guess, targetword) {
    for (let i = 0; i < targetword.length; i++) {
        console.log(guess[i]);
        if (targetword.includes(guess[i])) {
            if (targetword[i] === guess[i]) {
                //TODO: need to check count of this as well as to not assign good if only < this number of this letter exists.
                container.children.item(currentGuessRow).children.item(i).classList.add("correct");
            } else {
                container.children.item(currentGuessRow).children.item(i).classList.add("almost");
            }
        }else{
            container.children.item(currentGuessRow).children.item(i).classList.add("bad");
        }
    }
    if (guess === targetword) {
        return guess;
    }
    currentGuessRow+=1;
    return "";
}



function createRows(){
    for (let j=0; j<wordLength; j++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("row");
        for (let i = 0; i < wordLength; i++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            const newTextNode = document.createTextNode("");
            newSquare.appendChild(newTextNode);
            newDiv.appendChild(newSquare);
        }
        container.appendChild(newDiv);
    }
}
createRows();
document.addEventListener('keyup', (event) => {
    var key = event.key;
    if (ValidKey(key)){
        
        if (guess.length < wordLength){
            if (key === "Backspace"){
                if (guess.length > 0) {
                    guess = guess.substring(0, guess.length - 1);
                    container.children.item(currentGuessRow).children.item(guess.length).innerText = "";
                }
            }
            else if (key === "Enter") console.log("Word too short!!! Add message and change css class or something.");
            else{
                
                let upperKey = key.toUpperCase();
                guess += key;
                container.children.item(currentGuessRow).children.item(guess.length - 1).innerText = upperKey;
            } 
        } 
        else{
            if (key === "Enter") guess = Guess(guess, targetword);
            if (key === "Backspace") {
                guess = guess.substring(0, guess.length - 1);
                container.children.item(currentGuessRow).children.item(guess.length).innerText = "";
            }
            
    }
    console.log(guess);
    }



  }, false);