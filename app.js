let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const computerScorePara= document.querySelector("#computer-score");

const reset_button = document.querySelector("#restart");

const genCompChoice  = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const drawGame  = () =>{
    message.innerText = "Game was Draw! Play again!";
    message.style.backgroundColor = "#081b31";
}

const userWins = (userChoice, compChoice) =>{
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green" ;
   
}

const computerWins = (userChoice, compChoice) =>{
    computerScore++;
    computerScorePara.innerText = computerScore;
    message.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
    
}

reset_button.addEventListener("click", () =>{
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    message.innerText = "Game Restarted! Play again!";
    message.style.backgroundColor = "#081b31";
})


const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("computer Choice = ", compChoice)

    if (userChoice === compChoice){
        drawGame();
    }
    else if (userChoice === "rock" &&  compChoice === "scissors" || 
        userChoice === "paper" && compChoice === "rock" ||
         userChoice === "scissors" && compChoice === "paper" )
         {
        userWins(userChoice, compChoice);
        

        
    } 
    else { 
        computerWins(userChoice, compChoice);
        
    
    }

}


choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () =>{
    const userChoice =choice.getAttribute("id")
    playGame(userChoice)
    })
})