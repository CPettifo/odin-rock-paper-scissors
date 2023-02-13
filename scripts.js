playerChoice = prompt();
const computerChoice = getComputerChoice();
playerChoice = playerChoice.toLowerCase();
console.log(playRound(playerChoice, computerChoice));


function getComputerChoice() {
    let min = Math.ceil(1);
    let max = Math.floor(3);

    let num = (Math.floor(Math.random() * (max - min + 1) + min));

    if (num === 1) {
        return "rock";
    }
    else if (num === 2) {
        return "scissors";
    }
    else {
        return "paper";
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
}