
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const randomnumber =  Math.floor(Math.random() * 3);    // Generate a random integer between 0 and 2 (inclusive)
    let computerChoice = choices[randomnumber];

    return computerChoice;
}


let playerChoice = "paPer"
const computerChoice = getComputerChoice();


function game(playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();

    if (playerSelection === "paper" && computerChoice === "rock") {
        console.log("You win! paper chatches the rock")
    } 
    else if (playerSelection === computerChoice) {
        console.log("Draw try again")
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log("You Loose, Paper catches the rock")
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log("You Win! rock broke the scissors");
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log("You Lose! rock broke the scissors")
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log("You Lose! scissors cuts the paper");
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log("You Win! scissors cuts the paper");
    }
    else {
        console.log("Enter the correct input")
    }
}

game(playerChoice, computerChoice)



