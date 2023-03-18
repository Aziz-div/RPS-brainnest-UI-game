    let playerSelection = 0;
let computerScore = 0;

function play(playerMove) {
  let options = ['rock', 'paper', 'scissors'];
  let computerMove = options[Math.floor(Math.random() * options.length)];

  let result;

  if (playerMove === computerMove) {
    result = "It's a draw!";
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = "You win!";
    playerSelection++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  document.getElementById('score').innerHTML = playerSelection + "-" + computerScore;

  if (playerSelection === 5) {
    result += " You win the game!";
    resetGame();
  } else if (computerScore === 5) {
    result += " Computer wins the game!";
    resetGame();
  }

  
  let p = document.getElementById('result').innerHTML = "You played " + playerMove + ", computer played " + computerMove + ". " + result;
  
}

function resetGame() {
  playerSelection = 0;
  computerScore = 0;
  document.getElementById('score').innerHTML = playerSelection + "-" + computerScore;
}
document.querySelector('body').style.backgroundColor="#49332243";
document.querySelector('h1').style.color='#0788';