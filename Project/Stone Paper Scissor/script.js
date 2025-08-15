let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was draw , Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePare.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePare.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
  ;
    

    if (userChoice === compChoice) {
        drawGame();
    } else{
            let userWin = true;
            if (userChoice === "Rock") {
            userWin = compChoice === "Paper"? false : true;
            }else if (userChoice === "Paper") {
                userWin = compChoice === "Scissor"? false : true;
            }else{
                userWin = compChoice === "Rock" ? false : true;
            }
            showWinner(userWin , userChoice , compChoice);
        }
    };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice );
    });
});