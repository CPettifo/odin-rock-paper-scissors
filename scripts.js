game();


function getComputerChoice() {
    let min = Math.ceil(1);
    let max = Math.floor(3);

    let num = (Math.floor(Math.random() * (max - min + 1) + min));

    if (num === 1) {
        return "Rock";
    }
    else if (num === 2) {
        return "Scissors";
    }
    else {
        return "Paper";
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

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {

        playerChoice = prompt();
        computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();
        console.log("Computer chose " + computerChoice);
        computerChoice = computerChoice.toLowerCase();
        let result = playRound(playerChoice, computerChoice);
        if (result == "win") {
            score += 1;
            console.log("You win! " + playerChoice + " beats " + computerChoice + ".");
            console.log("Score: " + score + "/5");
        }

        else if (result == "lose") {
            console.log("You lose! " + playerChoice + " is beaten by " + computerChoice + ".");
            console.log("Score: " + score + "/5");
        }

        else {
            console.log("Tie! There will be another turn.");
            i -= 1;
        }
        if (score === 3) {
            i = 5;
        }
    }
    if (score > 2) {
        console.log("You defeated your AI opponent.");
    }
    else {
        console.log("You were defeated.");
    }
}