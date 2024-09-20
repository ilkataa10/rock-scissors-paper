function getComputerChoice() {
    const randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
    
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return choice; 
}

function playRound(humanSelection, computerSelection) {
    console.log("Your choice: " + humanSelection);
    console.log("Computer's choice: " + computerSelection);
    
    if (humanSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${humanSelection}`);
        return null; // Indicates a tie
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        return 'human'; 
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        return 'computer'; 
    }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Play a single round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const roundWinner = playRound(humanSelection, computerSelection);

// Increment scores based on the round winner
if (roundWinner === 'human') {
    humanScore++;
} else if (roundWinner === 'computer') {
    computerScore++;
}


console.log(`Current Score: You ${humanScore} - Computer ${computerScore}`);
