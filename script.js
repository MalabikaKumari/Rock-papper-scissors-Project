let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Game was draw. Play again!";
  msg.style.color = "black";
  msg.style.backgroundColor = "yellow";
};

const showWin = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You won!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    console.log("computer won!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};
const playGame = (userChoice) => {
  console.log("Users choice is", userChoice);
  const compChoice = genCompChoice();
  console.log("computer's choice is", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, papers
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //paper,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
