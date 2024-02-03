
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    const randomnumber =  Math.floor(Math.random() * 3);
    let computerChoice = choices[randomnumber];

    return computerChoice;
}

// Generate a random integer between 0 and 2 (inclusive)


console.log(getComputerChoice())




