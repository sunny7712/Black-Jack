let player = {
    name: "Per",
    chips: 150
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let value = Math.floor((Math.random() * 13) + 1)
    if(value == 1){
        return 11;
    }
    else if(value >= 11 && value <= 13){
        return 10;
    }
    else{
        return value;
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum <= 20){
        message = "Do you want to draw another card?";
    }
    else if(sum === 21){
        message = "Wohoo! You've got BlackJack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;

}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = cards[0] + cards[1];
    renderGame();
}

function newCard(){
    if(isAlive && (!(hasBlackJack))){
        let card;
        card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}