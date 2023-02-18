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

    if( playerChoice.toLowerCase() == computerChoice ) {
        return "tie";
    } else {
        
    }

} 