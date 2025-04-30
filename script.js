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
    //variables to keep track of players scores
    let humanScore = 0;
    let computerScore = 0;
    let count = 0;

    // function for a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissor') {
            console.log(`You Win! Rock beats Scissor`);
            humanScore++;
        }
        if (humanChoice === 'scissor' && computerChoice === 'paper') {
            console.log(`You Win! Scissor beats paper`);
            humanScore++;
        }
        if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`You Win! Paper beats Rock`);
            humanScore++;
        }
        if (humanChoice === 'scissor' && computerChoice === 'rock') {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        if (humanChoice === 'paper' && computerChoice == 'scissor') {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        if (humanChoice === 'rock' && computerChoice == 'paper') {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        if (humanChoice === computerChoice) {
            console.log(`It's a tie`);
        }
    }
    while (count < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        count++;
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
