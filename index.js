let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissors");
let choices = document.getElementById("choices");
let msg = document.getElementById("msg");
let user = document.getElementById("user-score");
let comp = document.getElementById("comp-score");

let userScore = 0;
let compScore = 0;

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const rndmIdx = Math.floor(Math.random() * 3);
  return options[rndmIdx];
}

function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    userScore++;
    msg.innerHTML = `You Win. Your ${userChoice} beats ${compChoice}`;
    user.innerHTML = userScore;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    msg.innerHTML = `You Lose. ${compChoice} beats Your ${userChoice}`;
    comp.innerHTML = compScore;
    msg.style.backgroundColor = "red";
  }
}

function playGame(userChoice) {
  //generate comp choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    msg.innerHTML = "Game was Draw. Play Again!";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.addEventListener("click", (e) => {
  const userChoice = e.target.id;
  playGame(userChoice);
});
