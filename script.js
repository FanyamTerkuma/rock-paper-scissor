// create a function to get Computer's choice
// make the choice random, so it can return either 'rock', 'paper' or 'scissor'
//if the random number is 0 return 'rock'
// if the random number is 1 return 'paper'
// if the random number is 2 return 'scissor'

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); //Expected output is 0,1 and 2
    if (computerChoice === 0) {
        return 'rock';
    }
    if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// function to take the user input
function getHumanChoice() {
    let userChoice = prompt('Enter your choice to play. Valid choices are "Rock", "Paper" and "Scissor":');
    return userChoice.toLowerCase();
}

// logic to play the entire game
function playGame() {
    //variables to keep track of players scores and round count
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    // function for a single round
    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'rock' && computerChoice === 'scissor') ||
            (humanChoice === 'scissor' && computerChoice === 'paper')
        ) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        if (
            (humanChoice === 'paper' && computerChoice == 'scissor') ||
            (humanChoice === 'rock' && computerChoice == 'paper') ||
            (humanChoice === 'scissor' && computerChoice === 'rock') ||
            (humanChoice === 'scissor' && computerChoice === 'rock')
        ) {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        if (humanChoice === computerChoice) {
            console.log("It's a tie");
            roundCount--;
        }
    }
    while (roundCount < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundCount++;
    }
    console.log('----------------------------------------------------');

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} out of 5 rounds played`);
    } else {
        console.log(`You lost ${computerScore} out of 5 rounds played`);
    }
    console.log('----------------------------------------------------');
    return '5 rounds played successfully';
}

console.log(playGame());
