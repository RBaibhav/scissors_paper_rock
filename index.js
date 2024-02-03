
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);    // Generate a random integer between 0 and 2 (inclusive)
    let computerChoice = choices[randomnumber];

    return computerChoice;
}
// decides who win or looses 
function playRound(playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();  // converts the playerChoice to toLowerCase 

    if (playerSelection === "paper" && computerChoice === "rock") {
        return "win";
    }
    else if (playerSelection === computerChoice) {
        return "draw";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        return "lose";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        return "win";
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        return "lose";
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        return "lose";
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        return "win";
    }

    return -1;
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
// Will take prompt and calucalte the score for 5 games 
    for (let i = 0; i < 5; i++) {

        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Enter rock, paper or scissors");
        console.log("you chose : ", playerChoice)
        console.log("computer chose : ", computerChoice)

        let result = playRound(playerChoice, computerChoice);
        console.log(result)
        if (result === "win") {
            playerScore += 1;
        } else if (result === "lose") {
            computerScore += 1;
        } else if (result === "draw") { }
        else {
            alert("Enter correct prompt")
        }
    }
    // whill decide who won
    if (playerScore > computerScore) {
        console.log("You Win!!")
    } else if (playerScore === computerScore) {
        console.log("It's a draw");
    } else {
        console.log("You lose")
    }
}

playGame();

