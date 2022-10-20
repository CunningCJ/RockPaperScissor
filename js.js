let playerScore = 0;
let computerScore = 0;
let moves = 0;
let ties = 0;

function getComputerChoice(){ Math.random();
if (Math.random() <= 0.33){
    computerSelection = "rock";
} else if (Math.random() >= 0.66)
    {
    computerSelection = "paper";
} else {
    computerSelection = "scissor";
}}

document.getElementById("rock").addEventListener("click", function(){ 
    playerSelection = 'rock';
    go();
});
document.getElementById("paper").addEventListener("click", function(){ 
    playerSelection = 'paper';
    go();
});
document.getElementById("scissor").addEventListener("click", function(){ 
    playerSelection = 'scissor';
    go();
});
 
function go(){
    getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection); 
    document.getElementById("pS").textContent = "Player - Wins: " + playerScore;
    document.getElementById("gC").textContent = "Games - " + moves;
    document.getElementById("pcS").textContent = "AI - Wins: " + computerScore;
    document.getElementById("tC").textContent = "Tied games - " + ties;
    document.getElementById("winner").textContent = "" + result;
    if (playerScore === 5) {
        document.getElementById("winner").textContent = "Game Over - You are victorious. User("+playerScore+") vs Computer("+computerScore+")"
        // alert("Game Over - You are victorious. User("+playerScore+") vs Computer("+computerScore+")");
        } else if (computerScore === 5){
        document.getElementById("winner").textContent = "Game Over - The computer wins! User("+playerScore+") vs Computer("+computerScore+")";
    }

}
document.getElementById("reset").addEventListener("click", function(){
    reset();
})

function reset(){
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    ties = 0;
    document.getElementById("pS").textContent = "Player - Wins: " + playerScore;
    document.getElementById("gC").textContent = "Games - " + moves;
    document.getElementById("pcS").textContent = "AI - Wins: " + computerScore;
    document.getElementById("tC").textContent = "Tied games - " + ties;
    document.getElementById("winner").textContent = "" ;

}

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    result = "Tie";
    ties++;
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

function game(playerSelection, computerSelection){
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerScore === 2) {
             console.log("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
             alert("Game Over - You are victorious");}
            else if (computerScore === 2){
                console.log("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
                alert("Game Over - The computer wins!");}
            }
    }

// game(playerSelection, computerSelection);

