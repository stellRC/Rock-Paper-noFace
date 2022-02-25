const [Rock, Paper, Scissors] = [2, 0, 1];

// Computer

let computerPlay = [Rock, Paper, Scissors]

let computerDecision = computerPlay[Math.floor(Math.random () * computerPlay.length)];

console.log("comp: " + computerDecision);
console.log(parseInt(computerDecision))


   
// Player

let playerPlay = [Rock, Paper, Scissors];

let playerDecision = playerPlay[Math.floor(Math.random () * playerPlay.length)];

console.log("player: "+playerDecision)
console.log(parseInt(playerDecision))


// Game

function playRound(playerDecision, computerDecision) {
   
    if (playerDecision === computerDecision) {
        return ( "You Tied!");
    } else if ((playerDecision === 0) && (computerDecision === 2)) {
        return "Player Wins!";
    } else if ((playerDecision === 2) && (computerDecision === 0)) {
        return "Computer Wins!";
    } else if (playerDecision > computerDecision) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}
    

console.log(playRound(playerDecision, computerDecision));
