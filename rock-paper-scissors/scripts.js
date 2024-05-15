const buttonSection = document.getElementById("primary-buttons");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const humanChoiceBoard = document.getElementById("human-choice");
const compuChoiceBoard = document.getElementById("computer-choice");
const humanScoreBoard = document.getElementById("human-score");
const compuScoreBoard = document.getElementById("computer-score");
const resultRound = document.getElementById("result-round");
const resultGame = document.getElementById("result-game");
const restartGame = document.getElementById("restart");
let computerScore = 0;
let humanScore = 0;
let endflag = 0;


// const humanHand = getHumanChoice();
// const compuHand = getComputerChoice();

const getComputerChoice = () => {
    const collection = ["rock","paper","scissors"];
    return collection[Math.floor(Math.random()*3)];
}

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice){
        resultRound.innerText = "It's a draw";
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
        resultRound.innerText = "You lose! paper beats rock";
        computerScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        resultRound.innerText = "You lose! scissors beats paper";
        computerScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        resultRound.innerText = "You lose! rock beats scissors";
        computerScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        resultRound.innerText = "You win! rock beats scissors";
        humanScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        resultRound.innerText = "You win! paper beats rock";
        humanScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        resultRound.innerText = "You win! scissors beats paper";
        humanScore++;
        humanChoiceBoard.innerText = `You played: ${humanChoice}`;
        compuChoiceBoard.innerText = `Computer played: ${computerChoice}`;
        humanScoreBoard.innerText = `Your current score: ${humanScore}`;
        compuScoreBoard.innerText = `Computer's current score: ${computerScore}`;
        scorejudge(humanScore,computerScore);
    }
}


const playGame = (e) => {
    const humanHand = e;
    const compuHand = getComputerChoice();
    playRound(humanHand, compuHand);
}

const scorejudge = (humanscore,computerscore) => {

    if(humanscore > computerscore && humanscore === 5){
        resultGame.innerText = `You Win! Your score is: ${humanScore} and Computer's score is: ${computerScore}`;
        restartGame.style.display = "block";
        buttonSection.style.display = "none";
    }
    else if(humanscore < computerscore && computerscore === 5){
        resultGame.innerText = `Computer Wins! Your score is: ${humanScore} and Computer's score is: ${computerScore}`;
        restartGame.style.display = "block";
        buttonSection.style.display = "none";
    }
    else {
        return;
    }
}

const gameReset = () => {
    humanChoiceBoard.innerText = ""
    compuChoiceBoard.innerText = ""
    humanScoreBoard.innerText = ""
    compuScoreBoard.innerText = ""
    resultRound.innerText = ""
    resultGame.innerText = ""
    computerScore = 0;
    humanScore = 0;
    restartGame.style.display = "none";
    buttonSection.style.display = "flex";
}

rock.addEventListener("click",() => {
    playGame("rock");
})

paper.addEventListener("click",() => {
    playGame("paper");
})

scissors.addEventListener("click",() => {
    playGame("scissors");
})

restartGame.addEventListener("click",gameReset);
//window.onload = playGame();

//console.log(getComputerChoice());
//console.log(getHumanChoice());


