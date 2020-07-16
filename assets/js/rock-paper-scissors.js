function initBtns() {
    gameBtns = document.querySelectorAll(".game-btn")
    newGameBtn = document.getElementById("new-game-btn")
    newGameBtn.addEventListener("mousedown", newGame)
    gameBtns.forEach(btn => {
        btn.addEventListener("mousedown", () => (playRound(btn.dataset.choice, computerPlay())))
    });
    // btn.disabled = true
}

function newGame(){
    updateScore("clear")
    toggleGame()
}

function toggleGame() {
    let gameBtns = document.querySelectorAll(".game-btn")

    gameBtns.forEach(btn => {
        btn.disabled = !btn.disabled

    })    
    let newGame = document.getElementById("new-game-btn")
    let playGame = document.getElementById("play-msg")
    newGame.disabled = !newGame.disabled
    if (newGame.classList.contains("hidden")){ 
    playGame.classList.remove("hidden")      
    newGame.classList.remove("hidden")
 } else {
    playGame.classList.add("hidden")
    newGame.classList.add("hidden")

 }
}
class Game {
    constructor(playerRoundWins = 0,
        computerRoundWins = 0,
        roundsPerGame = 5,
        gameRound = 0,
        ties = 0
    ) {
        this.playerRoundWins = playerRoundWins
        this.computerRoundWins = computerRoundWins
        this.roundsPerGame = roundsPerGame
        this.gameRound = gameRound
        this.ties = ties
    }
}

thisGame = new Game()

function computerPlay() {

    let choices = ["Rock", "Paper", "Scissors"]
    let choiceIdx = Math.floor(Math.random() * 3);
    return choices[choiceIdx]
}


function playRound(playerSelection, computerSelection) {

    // 
    //  else {

        // 


        let cSelectLower = computerSelection.toLowerCase()
        let pSelectLower = playerSelection.toLowerCase()
        let pSelectTitle = pSelectLower[0].toUpperCase() + pSelectLower.substr(1)
        let cSelectTitle = cSelectLower[0].toUpperCase() + cSelectLower.substr(1)
        // 0=computer, 1=player, 3=tie
        let winner = -1
        if (cSelectLower == "rock") {
            switch (pSelectLower) {
                case "rock":
                    winner = 3
                    break
                case "paper":
                    winner = 1
                    break
                case "scissors":
                    winner = 0
                    break
            }

        } else if (cSelectLower == "paper") {
            switch (pSelectLower) {
                case "rock":
                    winner = 0
                    break
                case "paper":
                    winner = 3
                    break
                case "scissors":
                    winner = 1
                    break
            }

        } else if (cSelectLower == "scissors") {
            switch (pSelectLower) {
                case "rock":
                    winner = 1
                    break
                case "paper":
                    winner = 0
                    break
                case "scissors":
                    winner = 3
                    break
            }

        }


        if (winner == 0) {
            // msgDisplay("You lose! " + cSelectTitle + " beats " + pSelectLower + ".")
            // thisGame.computerRoundWins +=1
            updateScore("computer")
        } else if (winner == 1) {
            // msgDisplay("You win! " + pSelectTitle + " beats " + cSelectLower + ".")
            // thisGame.playerRoundWins +=1
            updateScore("player")
        } else if (winner == 3) {
            // msgDisplay("Tie")
            updateScore("tie")
        } else {
            return "Come on man, play by the rules. Choose rock paper or sissors!"
        }
    
        if (thisGame.gameRound >= thisGame.roundsPerGame) {
            toggleGame()
            let playerMsg = document.getElementById("player-msg")
                if (thisGame.computerRoundWins > thisGame.playerRoundWins) {
                    // thisGame.computerWins += 1
                    playerMsg.textContent="You Lose!"
                } else if (thisGame.computerRoundWins < thisGame.playerRoundWins) {
                    // thisGame.playerWins += 1
                    playerMsg.textContent="You Win!"
                } else {
                    playerMsg.textContent="It was a draw!"
                    // thisGame.ties += 1
                }
        
                
            }
    
    }



function updateScore(winner) {
    thisGame.gameRound += 1
    document.getElementById("rounds").textContent = thisGame.gameRound
    if (winner == "computer") {
        thisGame.computerRoundWins += 1
        document.getElementById("c-score").textContent = thisGame.computerRoundWins
    } else if (winner == "player") {
        thisGame.playerRoundWins += 1
        document.getElementById("p-score").textContent = thisGame.playerRoundWins
    } else if (winner == "tie") {
        thisGame.ties += 1
        document.getElementById("tie-score").textContent = thisGame.ties
    } else if (winner == "clear") {
        with(thisGame) {
            playerRoundWins = 0
            computerRoundWins = 0
            ties = 0
            gameRound = 0
        }
        document.getElementById("c-score").textContent = 0
        document.getElementById("p-score").textContent = 0
        document.getElementById("tie-score").textContent = 0
        document.getElementById("rounds").textContent = 0
        document.getElementById("player-msg").textContent =""
    }
}

function game() {


    // for (let i = 0; i < 5; i++) {

    //     playerChoice = prompt("Choose rock, paper, or scissors:  ")
    //     while (["rock","paper","scissors"].indexOf(playerChoice.toLowerCase()) == -1){
    //         playerChoice = prompt("You must choose either rock, paper, or scissors:  ")
    //     }

    //     console.log(playRound(playerChoice, computerPlay()))
    // }
}

initBtns()