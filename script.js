let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerCredits = document.getElementById("player-credits")

// Credit
let player = {
    name: "Deepak",
    credits: 150
}
playerCredits.textContent = player.name + " $" + player.credits

// Generating random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

// Start Button

let startBtn = document.querySelector(".startGame-btn");
startBtn.onclick = () => {
    if(cardEl.textContent == "Cards:"){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}

// Rendring status
function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Wanna draw a new card?"
    }

    else if (sum === 21) {
        messageEl.textContent = "You've Black Jack"
        hasBlackJack = true
        startBtn.disabled = true
        newCardBtn.disabled = true
        playerCredits.textContent = player.name + " $" + (player.credits + 50)
    }
    else {
        messageEl.textContent = "You are out of the game"
        isAlive = false
        startBtn.disabled = true
        newCardBtn.disabled = true
        playerCredits.textContent = player.name + " $" + (player.credits - 50)
    }
}

// New Card Button

let newCardBtn = document.querySelector(".newCard-btn");
newCardBtn.onclick = () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// Adding Reset button

let reStartBtn = document.querySelector(".re-start-game");
reStartBtn.onclick = () => {
    cardEl.textContent = "Cards:"
    sumEl.textContent = "Sum:"
    isAlive = false
    hasBlackJack = false
    startBtn.disabled = false  
    newCardBtn.disabled = false
};
