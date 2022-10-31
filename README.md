# Rock-Paper-Scissors

  <!-- 
        - Computer picks a random from rock, paper scissors.
        - User is prompted to pick from rock, paper scissors.
        - User's choice must be case-insensitive
        - The choices made between computer and user is compared.
        - The result of the game is returned.
     -->

    <script>
      function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
      }

      let computerSelection = getComputerChoice();

      function playRound(playersSelection) {
        let playersSelection1 = playersSelection.toLowerCase();

        if (playersSelection1 == "rock") {
          if (computerSelection == "rock") {
            return "You Tie! Rock versus Rock";
          } else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
          } else {
            return "You Win! Rock crushes Scissors";
          }
        } else if (playersSelection1 == "paper") {
          if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
          } else if (computerSelection == "paper") {
            return "You Tie! Paper versus Paper";
          } else {
            return "You Lose! Scisssors cuts Paper";
          }
        } else if (playersSelection1 == "scissors") {
          if (computerSelection == "rock") {
            return "You Lose! Rock crushes Scissors";
          } else if (computerSelection == "paper") {
            return "You Win! Scissors cuts Paper";
          } else {
            return "You Tie! Scisssors versus Scissors";
          }
        }
      }

      let btns = document.querySelectorAll(".btn");

      btns.forEach((btn) =>
        btn.addEventListener("click", playRound(btn.value))
      );

      // btn.forEach((btn) =>
      //   btn.addEventListener("click", playRound(btn.value, computerSelection))
      // );

      // function game() {
      //   for (let i = 0; i < 5; i++) {
      //     let playersSelection = prompt("Rock Paper or Scissors?");
      //     let computerSelection = getComputerChoice();
      //     console.log(playRound(playersSelection, computerSelection));
      //   }
      // }
    </script>
