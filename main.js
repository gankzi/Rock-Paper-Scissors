let choices = ["rock", "paper", "scissors"];
let result = document.querySelector(".result");
let btns = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

let pScoreContainer = document.querySelector(".playerscore");
let cScoreContainer = document.querySelector(".computerscore");

let pScore = document.createElement("p");
let cScore = document.createElement("p");
let restart = document.createElement("button");

pScore.textContent = `Player score: ${playerScore}`;
cScore.textContent = `Computer score: ${computerScore}`;
restart.textContent = "Play again?";

pScoreContainer.appendChild(pScore);
cScoreContainer.appendChild(cScore);

btns.forEach((btn) =>
    btn.addEventListener('click', () => {
        playRound(btn.value); 
    })
);

function getComputerChoice() {
let randomChoice = Math.floor(Math.random() * 3);
return choices[randomChoice];
}

function playRound(playersSelection) {
let computerSelection = getComputerChoice();

if (playersSelection == "rock") {
  if (computerSelection == "rock") {
    result.textContent = "You Tie! Rock versus Rock";
  } else if (computerSelection == "paper") {
    result.textContent = "You Lose! Paper beats Rock";
    computerScore += 1;
  } else {
    result.textContent = "You Win! Rock crushes Scissors";
    playerScore += 1;
  }
} else if (playersSelection == "paper") {
  if (computerSelection == "rock") {
    result.textContent = "You Win! Paper beats Rock";
    playerScore += 1;
  } else if (computerSelection == "paper") {
    result.textContent = "You Tie! Paper versus Paper";
  } else {
    result.textContent = "You Lose! Scisssors cuts Paper";
    computerScore += 1;
  }
} else if (playersSelection == "scissors") {
  if (computerSelection == "rock") {
    result.textContent = "You Lose! Rock crushes Scissors";
    computerScore += 1;
  } else if (computerSelection == "paper") {
    result.textContent = "You Win! Scissors cuts Paper";
    playerScore += 1;
  } else {
    result.textContent = "You Tie! Scisssors versus Scissors";
  }
}


gameResult(playerScore, computerScore);
}

function gameResult (playerScore, computerScore) {
if (playerScore < 5 && computerScore < 5) {
pScore.textContent = `Player score: ${playerScore}`;
cScore.textContent = `Computer score: ${computerScore}`;

pScoreContainer.appendChild(pScore);
cScoreContainer.appendChild(cScore);
} else if (playerScore >= 5) {
    pScore.textContent = `Player score: ${playerScore}`;
    pScoreContainer.appendChild(pScore);
    result.textContent = "Player Wins!!!";
    disableButtons();
    resetGame();
} else {
    cScore.textContent = `Computer score: ${computerScore}`;
    cScoreContainer.appendChild(cScore);
    result.textContent = "Computer Wins!!!";
    disableButtons();
    resetGame();
}
};

function disableButtons() {
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableButtons() {
    btns.forEach((btn) => {
        btn.disabled = false;
    })
}



function resetGame() {
  result.appendChild(restart);
  restart.addEventListener("click", function() {
    restartGame()});
}

function restartGame() {
    result.removeChild(restart);
    enableButtons();
    btns.disabled = false;
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `Player score: ${playerScore}`;
    pScoreContainer.appendChild(pScore);
    cScore.textContent = `Computer score: ${computerScore}`;
    cScoreContainer.appendChild(cScore);
}




