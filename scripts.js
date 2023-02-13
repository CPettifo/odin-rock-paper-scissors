console.log(getComputerChoice())

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