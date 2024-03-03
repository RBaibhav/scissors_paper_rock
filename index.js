
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

    let computerScore = 0;
    let playerScore = 0;

function playGame(result) {
// Will take prompt and calucalte the score for 5 games 

        if (result === "win") {
            playerScore += 1;
        } else if (result === "lose") {
            computerScore += 1;
        } else if (result === "draw") { }

    // whill decide who won
    if (playerScore > computerScore && playerScore > 2) {
        return "You Win!!";
    } else if (playerScore === computerScore && playerScore == 5) {
        return "It's a draw";
    } else if (computerScore > playerScore && computerScore > 2) {
        return "You lose";
    }
}


const buttons = document.querySelectorAll('button');

console.log(buttons)

buttons.forEach( (button) => {

    let count = 0;

    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        console.log(buttonText);
        let computer = getComputerChoice();
        console.log(computer);
        let answerOfCurrentGame = playRound(buttonText, computer);

        let result = playGame(answerOfCurrentGame); 
        let outputDiv = document.getElementById('result');
        outputDiv.textContent = "Current Result : " + answerOfCurrentGame;
        console.log(count)
        
        count++;
        
        if (count == 5) {
            let finalAnswer = document.getElementById('finalResult');
            finalAnswer.textContent = "Final Result : " + result;        
        }
    })
})
