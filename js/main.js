const scoreInfo = document.querySelector('#scoreInfo');
const scoreMessage = document.querySelector('#scoreMessage');

const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#computerSign');

const playerScoreBoard = document.querySelector('#playerScore');
const computerScoreBoard = document.querySelector('#computerScore');

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const buttons = document.querySelector('buttons');

const endGameScreen = document.querySelector('#endGame');
const overlay = document.querySelector('#overlay');

endGameScreen.classList.add("active");
overlay.classList.add("active");

let playerScore = 0;
let computerScore = 0;


let handleClick = (playerOption) => {
    let playerChoice = playerOption;
    if (playerChoice == 'rock'){
        playerSign.textContent = rockBtn.textContent;
    }
    else if(playerChoice == 'paper'){
        playerSign.textContent = paperBtn.textContent;
    }
    else{
        playerSign.textContent = scissorsBtn.textContent
    }
    return playerChoice;
}

// pass function to eventlistener with parameter
rockBtn.addEventListener("click", () => {
    playRound(handleClick('rock'), getComputerChoice());
});
paperBtn.addEventListener("click", () => {
    playRound(handleClick('paper'), getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
    playRound(handleClick('scissors'), getComputerChoice());
});


// get computer choice randomly
let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() *3);

    switch(computerChoice){
        case 0:
            computerChoice = 'rock';
            computerSign.textContent = rockBtn.textContent;
            break;
        case 1:
            computerChoice = 'paper';
            computerSign.textContent = paperBtn.textContent;
            break;
        case 2:
            computerChoice = 'scissors';
            computerSign.textContent = scissorsBtn.textContent;
            break;
    }
    return computerChoice;
}

let showScore = (playerScore, computerScore) => {
    playerScoreBoard.textContent = `Player ${playerScore}`;
    computerScoreBoard.textContent = `Computer ${computerScore}`;

}

let playRound = (playerChoice, computerChoice) => {
    if (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper'
    ){
        scoreInfo.textContent = 'Player Won!';
        scoreMessage.textContent = `${playerChoice} beats ${computerChoice}`;
        playerScore++;
        showScore(playerScore, computerScore);
    }
    else if(computerChoice == 'rock' && playerChoice == 'scissors' ||
            computerChoice == 'paper' && playerChoice == 'rock' ||
            computerChoice == 'scissors' && playerChoice == 'paper'
    ){
        scoreInfo.textContent = 'You lost!';
        scoreMessage.textContent = `${computerChoice} beats ${playerChoice}`;
        computerScore++;
        showScore(playerScore, computerScore);

    }
    else{
        scoreInfo.textContent = 'Tie!';
        scoreMessage.textContent = `${playerChoice} ties ${computerChoice}`;
    }
}


