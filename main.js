let computerScoreElement = document.querySelector(".computer-score");
let playerScoreElement = document.querySelector(".player-score");
let computerScoreValue = 0;
let playerScoreValue = 0;

const rock = "✊";
const paper = "✋";
const scissors = "✌️";

let computerChoiceElement = document.querySelector(".computer-choice");
let playerchoiceElement = document.querySelector(".player-choice");
let playerChoice = paper;
let computerChoice = rock;

const rockChoice = document.querySelector(".rock-choice");
const paperChoice = document.querySelector(".paper-choice");
const scissorsChoice = document.querySelector(".scissors-choice");

function randomComputerChoice() {
  let gameChoices = ["✊", "✋", "✌️"];
  randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

function findWinner() {
  let showResultsElement = document.querySelector(".results");
  if (computerChoice === playerChoice) {
    showResultsElement.innerHTML = `DRAW`;
  } else if (
    (playerChoice === rock && computerChoice === scissors) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === scissors && computerChoice === paper)
  ) {
    playerScoreValue += 1;
    playerScoreElement.innerHTML = playerScoreValue;
    showResultsElement.innerHTML = `PLAYER WINS`;
  } else if (
    (playerChoice === scissors && computerChoice === rock) ||
    (playerChoice === rock && computerChoice === paper) ||
    (playerChoice === paper && computerChoice === scissors)
  ) {
    computerScoreValue += 1;
    computerScoreElement.innerHTML = computerScoreValue;
    showResultsElement.innerHTML = `COMPUTER WINS`;
  }
}

rockChoice.addEventListener("click", function () {
  playerChoice = rock;
  playerchoiceElement.innerHTML = playerChoice;
  computerChoice = randomComputerChoice();
  computerChoiceElement.innerHTML = computerChoice;
  findWinner();
});

paperChoice.addEventListener("click", function () {
  playerChoice = paper;
  playerchoiceElement.innerHTML = playerChoice;
  computerChoice = randomComputerChoice();
  computerChoiceElement.innerHTML = computerChoice;
  findWinner();
});

scissorsChoice.addEventListener("click", function () {
  playerChoice = scissors;
  playerchoiceElement.innerHTML = playerChoice;
  computerChoice = randomComputerChoice();
  computerChoiceElement.innerHTML = computerChoice;
  findWinner();
});
