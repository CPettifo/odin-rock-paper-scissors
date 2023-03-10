

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

function playRound(P1, comp) {
    
    if (P1 === comp) {
        return "tie"
    }
    
    P1 = P1.length;
    comp = comp.length;
    if (P1 == 4) {
        if (comp == 5) {
            return "lose"
        }
        else {
            return "win"
        }
    }
    else if (P1 == 8) {
        if (comp == 4) {
            return "lose"
        }
        else {
            return "win"
        }
    }
    else {
        if (comp == 4) {
            return "win"
        }
        else {
            return "lose"
        }
    }
}
/*
function game() {
    let score = 0;
    let choices = ["rock", "scissors", "paper"]
    for (let i = 0; i < 5; i++) {

        playerChoice = prompt("Please enter your choice");
        computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();
        console.log("Computer chose " + computerChoice);
        computerChoice = computerChoice.toLowerCase();
        if (choices.includes(playerChoice)) {
            result = playRound(playerChoice, computerChoice);
        }
        else {
            result = "invalid";
        }
        if (result == "win") {
            score += 1;
            console.log("You win! " + playerChoice + " beats " + computerChoice + ".");
            console.log("Score: " + score + "/5");
        }

        else if (result == "lose") {
            console.log("You lose! " + playerChoice + " is beaten by " + computerChoice + ".");
            console.log("Score: " + score + "/5");
        }
        else if (result == "invalid") {
            i -= 1;
            console.log("Invalid input from user. Another turn will be added.")
        }
        else {
            console.log("Tie! There will be another turn.");
            i -= 1;
        }
        if (score === 3) {
            i = 5;
        }
    }
    console.log("Game Over.")
    if (score > 2) {
        console.log("You were victorious.");
    }
    else {
        console.log("You were defeated.");
    }
}
*/
function getScore (result, playerScore, compScore) {
    if (result == "win") {
        playerScore += 1;
        return (playerScore, compScore);
    }
    else if (result == "lose") {
        compScore += 1;
        return (playerScore, compScore);
    }
    else {
        return (playerScore, compScore);
    }
}

const playerResults = document.querySelector("#playerResults");
const compResults = document.querySelector("#compResults");

const playa = document.createElement('playa');
playa.classList.add("playa");
playa.textContent = "Player Score: ";
const player = document.createElement('player');
player.classList.add("player");
player.textContent = 0;

const com = document.createElement("com");
com.classList.add("com");
com.textContent = "Computer Score: "
const comp = document.createElement('comp');
comp.classList.add("comp");
comp.textContent = 0;


const lastRound = document.querySelector("#lastRound");

const compChoi = document.createElement("compChoi");
compChoi.classList.add("compChoi");
compChoi.textContent = " ";

const prv = document.createElement("prv");
prv.classList.add("prv");
prv.textContent = " ";



playerResults.appendChild(playa);
playerResults.appendChild(player);
compResults.appendChild(com);
compResults.appendChild(comp);
lastRound.appendChild(compChoi);
lastRound.appendChild(prv);


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let compChoice = getComputerChoice();
        let result = playRound(button.id, compChoice);
        let playerScore = +player.textContent;
        let compScore = +comp.textContent;
        compChoi.textContent = "Computer chose " + compChoice + ". ";
        prv.textContent = "You " + result + " with " + button.id;

        
        if (compScore > 4) {
            comp.textContent = "0";
            player.textContent = "0";
            prv.textContent = "You lose!";
            compChoi.textContent = "";
        }
        if (result == "win") {
            playerScore += 1;
            if (playerScore > 4) {
                player.textContent = "0";
                comp.textContent = "0";
                prv.textContent = "You scored 5 first, you win!";
                compChoi.textContent = "";
            }
            else {
                player.textContent = playerScore;
            }
        }
        else if (result == "lose") {
            compScore += 1;
            if (compScore > 4) {
                player.textContent = "0";
                comp.textContent = "0";
                prv.textContent = "The computer scored 5 first, you lose!";
                compChoi.textContent = "";
            }
            else {  
                comp.textContent = compScore;
            }
        }
        else {
            comp.textContent = compScore;
        }
    });
});
