

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

const results = document.querySelector("#results");

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


results.appendChild(playa);
results.appendChild(player);
results.appendChild(com);
results.appendChild(comp);

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let compChoice = getComputerChoice();
        let result = playRound(button.id, compChoice);
        let playerScore = +player.textContent;
        let compScore = +comp.textContent;
        console.log("Computer chose " + compChoice);
        console.log("You " + result + " with " + button.id)
        if (result == "win") {
            player.textContent = playerScore + 1;
        }
        else if (result == "lose") {
            comp.textContent = compScore + 1;
        }
        else{
            comp.textContent = compScore;
        }
    });
});
