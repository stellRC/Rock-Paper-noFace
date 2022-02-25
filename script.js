
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [ 
    {
        name: 'rock',
        emoji: '🔥',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🕷️',
        beats: 'rock'
    }, 
    {
        name: 'scissors',
        emoji: '👻',
        beats:  'paper'
    }
]

// Player

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })

function makeSelection(selection) {
    console.log(selection)
}


// Computer 


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}
//Iteration 

 
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}


// 



// const [Rock, Paper, Scissors] = [2, 0, 1];

// // Computer

// let computerPlay = [Rock, Paper, Scissors]

// let computerDecision = computerPlay[Math.floor(Math.random () * computerPlay.length)];

// console.log("comp: " + computerDecision);
// console.log(parseInt(computerDecision))


// let playerRock = document.getElementById('rock');
// // playerRock.addEventListener("click", function)
// let playerPaper = document.getElementById('paper');
// let playerScissors = document.getElementById('scissors');

// let selection = 

// // Game

// function playRound(selection, computerDecision) {
   
//     if (selection === computerDecision) {
//         return ( "You Tied!");
//     } else if ((selection === 0) && (computerDecision === 2)) {
//         return "Player Wins!";
//     } else if ((selection === 2) && (computerDecision === 0)) {
//         return "Computer Wins!";
//     } else if (selection > computerDecision) {
//         return "Player Wins!";
//     } else {
//         return "Computer Wins!";
//     }
// }
    

// console.log(playRound(selection, computerDecision));

















