let humanScore = 0;
let computerScore = 0;
const THRESHOLD = 5;

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (humanScore !== THRESHOLD && computerScore !== THRESHOLD) {
      const humanChoice = document.querySelector("#human-choice");
      humanChoice.textContent = btn.textContent;

      const computerChoice = document.querySelector("#computer-choice");
      computerChoice.textContent = getComputerChoice();

      playRound(humanChoice.textContent, computerChoice.textContent);
    }
  });
});

function playRound(humanChoice, computerChoice) {
  const winner = determineWinner(humanChoice, computerChoice);

  if (winner === "human") {
    humanScore++;
    document.querySelector("#human-score").textContent = humanScore;
    displayResult(winner);
  } else if (winner === "computer") {
    computerScore++;
    document.querySelector("#computer-score").textContent = computerScore;
    displayResult(winner);
  } else {
    result.textContent = "It's a tie!";
  }

  result.classList.remove("hidden");
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice == "rock" && computerChoice === "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function displayResult(winner) {
  const result = document.querySelector("#result");

  if (humanScore !== THRESHOLD && computerScore !== THRESHOLD) {
    result.textContent = `${winner} wins!`;
  } else {
    if (winner === "human") {
      result.textContent = "human wins the game! 😁🥇";
      document.body.style.backgroundColor = "green";
    } else {
      result.textContent = "computer wins the game! 😕";
      document.body.style.backgroundColor = "red";
    }
  }
}
