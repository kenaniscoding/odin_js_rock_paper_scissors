let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  let isHumanWin = 0;
  if (humanChoice === computerChoice) {
    console.log("TIE");
    isHumanWin = -1;
  } else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore += 1;
    isHumanWin = 0;
    console.log("AI WINS!");
  } else if ((computerChoice === "rock" && humanChoice === "paper")
    || (computerChoice === "paper" && humanChoice === "scissors")
    || (computerChoice === "scissors" && humanChoice === "rock")) {
    console.log("YOU WINS!");
    isHumanWin = 1;
    humanScore += 1;
  }
  return isHumanWin;
}


document.addEventListener('DOMContentLoaded', () => {
  const enterButton = document.querySelector('.enterButton');
  const humanChoice = document.querySelector('.humanChoice');
  const humanScoreTxt = document.getElementById('humanScore');
  const computerScoreTxt = document.getElementById('computerScore');
  const comments = document.getElementById('comments');
  enterButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = humanChoice.value;
    const isHumanWin = playRound(humanSelection, computerSelection);
    if (isHumanWin === 1) {
      humanScoreTxt.innerHTML = 'Human: ' + humanScore;
      comments.innerHTML = 'human wins :)';
    } else if (isHumanWin === 0) {
      computerScoreTxt.innerHTML = 'Computer: ' + computerScore;
      comments.innerHTML = 'computer wins ;_;';
    } else {
      comments.innerHTML = 'TIE :O';
    }
    if ((humanScore + computerScore === 5) || (humanScore === 4) || (computerScore === 4)) {
      if (humanScore > computerScore) {
        comments.innerHTML = 'FINALLY YOU WIN';
      } else {
        comments.innerHTML = 'YOU LOSE TRY AGAIN';
      }
    }
  });
});



