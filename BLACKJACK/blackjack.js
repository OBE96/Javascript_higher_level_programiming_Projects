let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let person = {
	name: "Bright: ",
	chips: 145
}

let personEl =document.getElementById("person-el")

personEl.textContent = person.name + "$" + person.chips

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() *13) +1
	if(randomNumber <= 1) {
		return 11
	}
	else if (randomNumber > 10) {
		return 10
	}
	else {
		return randomNumber
	}
	}
	
function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	let cards = [firstCard , secondCard]
	let sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	 cardsEl.textContent = "Cards: "

	for (let i= 0 ; i < cards.length ;i++){
		cardsEl.textContent += cards[i] + " "
	}

	sumEL.textContent = "Sum: " + sum
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	}
	else if(sum === 21) {
		message = "Wohoo! You've got Blackjack!"
		hasBlackjack = true
	}
	else {
		message = "You're out of the game"
		isAlive = false
	}
	messageEl.textContent = message
}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
}
}
	
