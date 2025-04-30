// create a function to get Computer's choice
// make the choice random, so it can return either 'rock', 'paper' or 'scissor'
//if the random number is 0 return 'rock'
// if the random number is 1 return 'paper'
// if the random number is 2 return 'scissor'

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //Expected output is 0,1 and 2
    if (choice === 0) {
        return 'Rock';
    }
    if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}
