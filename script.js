// Select all game buttons
const gameButtons = document.querySelectorAll('button');
// Select result element
const resultEl = document.getElementById('result');
// Select player score element
const playerScoreEl = document.getElementById('user-score');
// Select computer score element
const computerScoreEl = document.getElementById('computer-score');

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Add click event listener to each game button
gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Play a round when a button is clicked
    const result = playRound(button.id, computerPlay());
    // Update the result text
    resultEl.textContent = result;
  });
});

// Generate computer's choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a round of the game
function playRound(playerSelection, computerSelection) {
  // Define winning combinations
  const winningCombos = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  // Check for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  // Check if the player wins
  else if (winningCombos[playerSelection] === computerSelection) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  // The computer wins
  else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
