

const getComputerChoice = () => {
    const collection = ["rock","paper","scissors"];
    const choice_hand = Math.floor(Math.random()*3);
    return collection[choice_hand];
}

const getHumanChoice = () => {
    const humanchoice = prompt("Play your hand: \n");
    if(humanchoice.toLowerCase() === "rock"||humanchoice.toLowerCase() === "paper"||humanchoice.toLowerCase() === "scissors"){
        return humanchoice.toLowerCase();
    }
    else{
        alert("Please enter only 'rock', 'paper' or 'scissors'");
        return;
    }
}


const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;
    let numRounds = 0;
    const playRound = (humanChoice, computerChoice) => {
        if(humanChoice === computerChoice){
            console.log("It's a draw \n");
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper'){
            console.log("You lose! paper beats rock \n");
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissors'){
            console.log("You lose! scissors beats paper \n");
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock'){
            console.log("You lose! rock beats scissors \n");
            computerScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log("You win! rock beats scissors \n");
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock'){
            console.log("You win! paper beats rock \n");
            humanScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log("You win! scissors beats paper \n");
            humanScore++;
        }
    }
    for(let i=0; i < 5; i++){
        const humanHand = getHumanChoice();
        const compuHand = getComputerChoice();
        playRound(humanHand, compuHand);
    }
    if(humanScore > computerScore){
        console.log("You Win! \n","Your score: " + humanScore + " ", "Computer's score: " + computerScore + " ");
    }
    else if(humanScore < computerScore){
        console.log("Computer Wins! \n","Your score: " + humanScore + " ", "Computer's score: " + computerScore + " ");
    }
    else{
        console.log("It's a tie. \n")
    }
}

window.onload = playGame();

//console.log(getComputerChoice());
//console.log(getHumanChoice());