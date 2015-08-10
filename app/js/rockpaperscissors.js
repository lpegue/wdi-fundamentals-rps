////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   return prompt();
}
function randomPlay() {
   var randomNumber = Math.random();
   if (randomNumber < 0.33) {
       return "rock";
   } else if (randomNumber < 0.66) {
       return "paper";
   } else {
       return "scissors";
   }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   // Write an expression that operates on a variable called `move`
   // If a `move` has a value, your expression should evaluate to that value.
   // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   if (move === "rock" || "paper" || "scissors") return move;
       else getInput();
}

function getComputerMove(move) {
   // Write an expression that operates on a variable called `move`
   // If a `move` has a value, your expression should evaluate to that value.
   // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === "rock" || "paper" || "scissors") return move;
       else return randomPlay();
}

function getWinner(playerMove,computerMove) {
   var winner;
   // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
   // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
   // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if (playerMove === computerMove) {
   winner = "tie";
  } 
  if (playerMove === "rock" && computerMove === "paper") {
      winner = "computer";
  }
  if (playerMove === "rock" && computerMove === "scissors") {
      winner = "player";
  }
 if (playerMove === "paper" && computerMove === "rock") {
     winner = "player";
  }
if (playerMove === "paper" && computerMove === "scissors") {
    winner = "computer";
}
if (playerMove === "scissors" && computerMove === "rock") {
    winner = "computer";
}
if (playerMove === "scissors" && computerMove === "paper") {
    winner = "player";
}
      
   return winner;
}



function playToFive() {
   console.log("Let's play Rock, Paper, Scissors");
   var playerWins = 0;
   var computerWins = 0;
   
   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  

   for(var i=0; i<5; i= i+0) {
         var move = getInput();
  var playerMove = getPlayerMove(move);
   var computerMove = randomPlay();

   console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   var winner = getWinner(playerMove,computerMove);

   
   if (winner === "computer") {
       computerWins++;
       i++;
   }
   else if (winner === "player") {
       playerWins++;
       i++;
   }
   
   console.log('The winner is',winner);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');  
   
    if (playerWins === 3){
       console.log("Player Won!", playerWins,computerWins);
       return
     }
    if (computerWins === 3){
         console.log("Computer Won!", playerWins,computerWins);
         return
    }
   }
  
   return [playerWins,computerWins];
   
}

 
playToFive();





