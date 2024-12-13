let humanScore = 0
let compScore = 0

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber]
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors")
    return choice.toLowerCase()
}



function playRound(p, c){
    if (p === "rock"){
        switch(c){
            case "rock":
                console.log("It's a tie!")
                break
            case "paper":
                console.log("You lose!")
                compScore += 1
                break
            case "scissors":
                console.log("You win!")
                humanScore += 1
                break
        }
    }else if(p === "paper"){
        switch(c){
            case "rock":
                console.log("You win!")
                humanScore += 1
                break
            case "paper":
                console.log("It's a tie!")
                break
            case "scissors":
                console.log("You lose!")
                compScore += 1
                break
        }
    }else if(p === "scissors"){
        switch(c){
            case "rock":
                console.log("You lose")
                compScore += 1
                break
            case "paper":
                console.log("You win!")
                humanScore += 1
                break
            case "scissors":
                console.log("It's a tie!")
                break
        }
    }

    console.log(`Current score is User: ${humanScore} to Computer: ${compScore}`)
}

function playGame(){
    for(i = 0; i < 5; i++){
        console.log(`Welcome to round ${i + 1}. Good luck!`)
        player = getHumanChoice()
        comp = getComputerChoice()
        playRound(player, comp)
    }
    console.log("Thanks for playing")
}

playGame()
