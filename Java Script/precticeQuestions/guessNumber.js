let gameNum = 10;

let userNum = prompt("Enter the guess number!");

while ( userNum != gameNum){
    userNum = prompt("you guess the wrong number , guess again!");
}

console.log("congratulation you guess the right number!");
