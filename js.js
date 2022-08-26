/*function getComputerChoice(){Math.random();
if (Math.random() <= 0.33){
    console.log("Rock") 
} else if (Math.random() >= 0.66)
    {
        console.log("Paper")
} else {
    console.log("Scissor")
}}

getComputerChoice(); */

const getComputerChoice = Math.random();
    if (Math.random() <= 0.33){
        computerSelection = "rock";
    } else if (Math.random() >= 0.66)
        {
        computerSelection = "paper";
    } else {
        computerSelection = "scissor";
    }

console.log(computerSelection)    
let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();



if (playerSelection === computerSelection){
    result = "Tie"
    console.log(result)
}

if (playerSelection === "rock" && computerSelection === "paper"){
    result = "You lost. Loser!"
    console.log(result)
} else if (playerSelection === "rock" && computerSelection === "scissor"){
    result = "You won. Hooray!"
    console.log(result)}

if (playerSelection === "paper" && computerSelection === "scissor"){
        result = "You lost. Loser!"
        console.log(result)
 } else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "You won. Hooray!"
        console.log(result)}

if (playerSelection === "scissor" && computerSelection === "rock"){
            result = "You lost. Loser!"
            console.log(result)
} else if (playerSelection === "scissor" && computerSelection === "paper"){
            result = "You won. Hooray!"
            console.log(result)}