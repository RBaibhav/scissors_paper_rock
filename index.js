
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);    // Generate a random integer between 0 and 2 (inclusive)
    let computerChoice = choices[randomnumber];

    return computerChoice;
}


let playerChoice = "paPer"
const computerChoice = getComputerChoice();


function game(playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();  // converts the playerChoice to toLowerCase 

    if (playerSelection === "paper" && computerChoice === "rock") {
        return "You win! paper chatches the rock";
    }
    else if (playerSelection === computerChoice) {
        return "Draw try again";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        return "You Loose, Paper catches the rock";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        return "You Win! rock broke the scissors";
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        return "You Lose! rock broke the scissors";
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        return "You Lose! scissors cuts the paper";
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        return "You Win! scissors cuts the paper";
    }

    return "Enter the correct input";
}

console.log(game(playerChoice, computerChoice))



