let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// Function to get computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to play a single round
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return `It's a tie! Both chose ${humanSelection}.`;
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
        humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
}

// Function to update the score display
function updateScore() {
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

// Function to handle game logic after each round
function gameLogic(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    // Display result and update the score
    resultDiv.textContent = result;
    updateScore();

    // Check if someone has won the game (5 points)
    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry! The computer won the game.";
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => gameLogic('rock'));
document.getElementById('paper').addEventListener('click', () => gameLogic('paper'));
document.getElementById('scissors').addEventListener('click', () => gameLogic('scissors')); 