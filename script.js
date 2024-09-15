let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const winner = determineWinner(humanChoice, computerChoice);
  if (winner === "human") {
    console.log("You win!");
    humanScore++;
  } else if (winner === "computer") {
    console.log("Computer wins!");
    computerScore++;
  } else {
    console.log("It's a tie!");
  }

  console.log(
    `Current Score: Human: ${humanScore}, Computer: ${computerScore}`
  );
  console.log("================================");
}

function getHumanChoice() {
  const playerChoice = prompt("Enter your choice (rock, paper, or scissors): ");
  return playerChoice.toLowerCase();
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

playGame();
