let playerScore = 0;
let computerScore = 0;
let moves = 0;

function getComputerChoice(){ Math.random();
if (Math.random() <= 0.33){
    computerSelection = "rock";
} else if (Math.random() >= 0.66)
    {
    computerSelection = "paper";
} else {
    computerSelection = "scissor";
}}

getComputerChoice();

console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    result = "Tie";
    moves++;
return;
}
else if (playerSelection === "rock" && computerSelection === "paper"){
computerScore++;
moves++;
result = "You lost. Loser!";
return ;
}
else if (playerSelection === "rock" && computerSelection === "scissor"){
playerScore++;
moves++;
result = "You won. Hooray!";
return ;
}
else if (playerSelection === "paper" && computerSelection === "scissor"){
    computerScore++;
    moves++;
    result = "You lost. Loser!";
    return ;
} 
else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
    moves++;
    result = "You won. Hooray!";
    return ;
}
else if (playerSelection === "scissor" && computerSelection === "rock"){
    computerScore++;
    moves++;
    result = "You lost. Loser!";
    return ;
} 
else if (playerSelection === "scissor" && computerSelection === "paper"){
    playerScore++;
    moves++;
    result = "You won. Hooray!";
    return ;
}} 

playRound(playerSelection, computerSelection);
console.log(result);
console.log("your score = " + playerScore);
console.log("Computer's score = " + computerScore);
console.log(moves);
function game(playerSelection, computerSelection){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();
        getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(result);
        console.log("your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
        console.log(moves);
        if (playerScore === 2) {
             console.log("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
             alert("Game Over - You are victorious");}
            else if (computerScore === 2){
                console.log("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
                alert("Game Over - The computer wins!");}
   
            }
    }

game(playerSelection, computerSelection);

/*
var i = 0;
const play = () => {
    let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();
    getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(result);
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    console.log(moves);
    i++;
    if (i !== 5) {
        play();
    } else {
        alert("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
    }
}

play();
*/
