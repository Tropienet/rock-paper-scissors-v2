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
        return "tie";
    } else if( playerChoice.toLowerCase()==="paper" ) {
       if( computerChoice==="rock" ) {
        return "You win. Paper beats rock!";
       } else {
        return "You lose. Scissors beat paper";
       }
    } else if( playerChoice.toLowerCase() === "rock" ) {
        if ( computerChoice === "scissors" ) {
            return "You win. Rock beats scissors";
        } else {
            return "You lose. Paper beats rock";
        }
    } else {
        if( computerChoice === "paper" ) {
            return "You win. Scissors beat paper";
        } else {
            return "You lose. Rock beats scissors";
        }
    }
    
    return "Error";
} 