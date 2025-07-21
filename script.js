// let getHumanChoice = () => prompt("Input rock, paper, or scissors: ").toLowerCase().trim();
document.addEventListener('DOMContentLoaded', () => {
  const enterButton = document.querySelector('.enterButton');
  const humanChoice = document.querySelector('.humanChoice');
  enterButton.addEventListener("click", () => {
    // get the humanChoice id
    alert(humanChoice.value);
  });
});

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  console.log("YOU play " + humanChoice);
  console.log("AI plays " + computerChoice);
  if (humanChoice === computerChoice) {
    console.log("TIE");
  } else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore += 1;
    console.log("AI WINS!");
  } else if ((computerChoice === "rock" && humanChoice === "paper")
    || (computerChoice === "paper" && humanChoice === "scissors")
    || (computerChoice === "scissors" && humanChoice === "rock")) {
    console.log("YOU WINS!");
    humanScore += 1;
  } else {
    console.log("ERROR! Input a valid choice (rock paper or scissors)!");
  }
  console.log("SCORE");
  console.log("HUMAN: " + humanScore);
  console.log("AI: " + computerScore);
}

// while (humanScore + computerScore != 5) {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//
//   playRound(humanSelection, computerSelection);
//
// }



