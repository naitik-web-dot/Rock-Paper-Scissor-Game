let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options [randomIdx]
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was draw, Play again."
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose")
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor = "Red"
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice ();
    console.log("compChoice = ", compChoice)

    if (userChoice === compChoice) {
        drawGame ();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", choiceId);
        playGame(userChoice);
    })
})
