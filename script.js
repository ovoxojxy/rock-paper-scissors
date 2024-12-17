const body = document.querySelector('body')

const rock = document.createElement('button')
const paper = document.createElement('button')
const scissors = document.createElement('button')
const results = document.createElement('div')

const resetButton = document.createElement('button')

const roundWinner = document.createElement('h2')

const score = document.createElement('p')

const gameWinner = document.createElement('h1')

resetButton.textContent = "Reset Game"
resetButton.onclick = () => resetGame()

paper.textContent = "Paper"
rock.textContent = "Rock"
scissors.textContent = "Scissors"



let humanScore = 0
let compScore = 0
let roundCount = 0

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber]
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors")
    return choice.toLowerCase()
}


rock.onclick = () => playRound("rock", getComputerChoice())
paper.onclick = () => playRound("paper", getComputerChoice())
scissors.onclick = () => playRound("scissors", getComputerChoice())



function playRound(p, c){
    results.appendChild(roundWinner)
    roundCount += 1
    if (humanScore < 5 && compScore < 5){
        if (p === "rock"){
            
            switch(c){
                case "rock":
                    // console.log("It's a tie!")
                    roundWinner.textContent = `Round ${roundCount} is a tie`
                    break
                case "paper":
                    // console.log("You lose!")
                    roundWinner.textContent = `You lose round ${roundCount}`
                    compScore += 1
                    break
                case "scissors":
                    // console.log("You win!")
                    roundWinner.textContent = `You win round ${roundCount}`
                    humanScore += 1
                    break
            }
        }else if(p === "paper"){
            switch(c){
                case "rock":
                    // console.log("You win!")
                    roundWinner.textContent = `You win round ${roundCount}`
                    humanScore += 1
                    break
                case "paper":
                    // console.log("It's a tie!")
                    roundWinner.textContent = `Round ${roundCount} is a tie`
                    break
                case "scissors":
                    // console.log("You lose!")
                    roundWinner.textContent =  `You lose round ${roundCount}`
                    compScore += 1
                    break
            }
        }else if(p === "scissors"){
            switch(c){
                case "rock":
                    // console.log("You lose")
                    roundWinner.textContent =  `You lose round ${roundCount}`
                    compScore += 1
                    break
                case "paper":
                    // console.log("You win!")
                    roundWinner.textContent = `You win round ${roundCount}`
                    humanScore += 1
                    break
                case "scissors":
                    // console.log("It's a tie!")
                    roundWinner.textContent = `Round ${roundCount} is a tie`
                    break
            }
        }
        score.textContent = `Current score is User: ${humanScore} to Computer: ${compScore}`
    }
    if (humanScore === 5){
        results.appendChild(gameWinner)
        
        roundWinner.textContent = "Game over!"
        gameWinner.textContent = "User Wins the game. Play Again?"
        body.appendChild(resetButton)
    }else if(compScore === 5){
        results.appendChild(gameWinner)
        
        roundWinner.textContent = "Game over!"
        gameWinner.textContent = "Computer Wins the game. Play Again?"
        body.appendChild(resetButton)
    }
}


function resetGame(){
    roundCount = 0
    body.removeChild(resetButton)
    humanScore = 0
    compScore = 0
    score.textContent = `Current score is User: ${humanScore} to Computer: ${compScore}`
    results.removeChild(gameWinner)
    results.removeChild(roundWinner)
}

function playGame(){
    // for(i = 0; i < 5; i++){
        console.log(`Welcome to round ${i + 1}. Good luck!`)
        player = getHumanChoice()
        comp = getComputerChoice()
        playRound(player, comp)
    // }
    console.log("Thanks for playing")
}




results.appendChild(score)

body.appendChild(rock)
body.appendChild(scissors)
body.appendChild(paper)
body.appendChild(results)
// playGame()
