function getComputerChoice () {

    let computerChoice = getChoice();


    return computerChoice

}

function randomizeNum () {
    return Math.random() * (1-0) + 0;
}

function getChoice() {
    
    let choiceNum = randomizeNum();

    if( choiceNum<0.33 ) {
        return "paper";
    } else if ( choiceNum<0.66 ) {
        return "rock"
    } else {
        return "scissors";
    }

    return "Error";

}

function playRound( playerChoice, computerChoice ) {

    if( playerChoice.toLowerCase() === computerChoice ) {
        announceRoundWinner("tie");
        return "tie";
    } else if( playerChoice.toLowerCase()==="paper" ) {
       if( computerChoice==="rock" ) {
        updatePlayerScore()
        return "You win. Paper beats rock!";
       } else {
        updateComputerScore()
        return "You lose. Scissors beat paper";
       }
    } else if( playerChoice.toLowerCase() === "rock" ) {
        if ( computerChoice === "scissors" ) {
            updatePlayerScore()
            return "You win. Rock beats scissors";
        } else {
            updateComputerScore()
            return "You lose. Paper beats rock";
        }
    } else {
        if( computerChoice === "paper" ) {
            updatePlayerScore()
            return "You win. Scissors beat paper";
        } else {
            updateComputerScore()
            return "You lose. Rock beats scissors";
        }
    }

    return "Error";
} 

function updatePlayerScore() {

    const playerScore = document.querySelector("#player-points");

    playerScore.textContent = parseInt(playerScore.textContent) + 1;

    checkScore(parseInt(playerScore.textContent), "player" );

}

function updateComputerScore() {

    const computerScore = document.querySelector("#computer-points");
    
    computerScore.textContent = parseInt(computerScore.textContent)+1;

    checkScore(parseInt(computerScore.textContent), "computer" );

}

function announceWinner( scoreOwner ) {

    const announcementContainer = document.querySelector("#announcement");
    const winnerAnnouncement = document.createElement("p");

    if(scoreOwner === "computer") {
        winnerAnnouncement.textContent = "AI wins. Better luck next time!"
    }else {
        winnerAnnouncement.textContent = "You win. Congratulations!";
    }

    announcementContainer.appendChild(winnerAnnouncement);

}

function announceRoundWinner ( scoreOwner ) {

    const announcementContainer = document.querySelector("#announcement");
    const roundWinnerAnnouncement = document.createElement("p");

    roundWinnerAnnouncement.style.display = "block";

    if( scoreOwner !== "computer" && scoreOwner !== "player" ) {

        roundWinnerAnnouncement.textContent = "Tie!";

        roundWinnerAnnouncement.style.color = "yellow";

        roundWinnerAnnouncement.style.backgroundColor = "black";

    }else if( scoreOwner === "computer" ) {
        
        roundWinnerAnnouncement.textContent = "Ai wins!";

        roundWinnerAnnouncement.style.color = "red";
        
        roundWinnerAnnouncement.style.backgroundColor = "black";

    }else {

        roundWinnerAnnouncement.textContent = "Player wins!";

        roundWinnerAnnouncement.style.color = "green";

        roundWinnerAnnouncement.style.backgroundColor = "black";
    }

    announcementContainer.appendChild(roundWinnerAnnouncement);

} 

function checkScore( score, scoreOwner ) {

    if( score == 5 ) {

        announceWinner( scoreOwner );

    }else {
        announceRoundWinner( scoreOwner );
    }

}



const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
   playRound("scissors", getComputerChoice()) ;
});