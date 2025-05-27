function setComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); //Expected output is 0,1 and 2
    if (computerChoice === 0) {
        return 'rock';
    }
    if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

const resultsContainer = document.querySelector('#results');
const scissorBtn = document.querySelector('#scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');

function playRound(humanChoice) {
    let computerChoice = setComputerChoice();

    if (humanScore === 5 || computerScore === 5) {
        resultsContainer.textContent = `Game Over! ${humanScore > computerScore ? 'You Win!' : 'You Lose!'} \n Your score: ${humanScore} and Computer's score:${computerScore}`;
        return;
    }
    if (
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultsContainer.textContent = `You Win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()} \n Your score: ${humanScore} Computer's score:${computerScore}`;
    } else if (humanChoice === computerChoice) {
        tieCount++;
        resultsContainer.textContent = `It's a tie \n Your score: ${humanScore} Computer's score:${computerScore}`;
    } else {
        computerScore++;
        resultsContainer.textContent = `You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()} \n Your score: ${humanScore} Computer's score:${computerScore}`;
        resultsContainer.textContent = `You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()} \n Your score: ${humanScore} Computer's score:${computerScore}`;
    }
}

scissorBtn.addEventListener('click', () => playRound('scissors'));
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
