let card = document.getElementsByClassName('card');
let deck = document.getElementById('card-deck');
let cardMatch = document.getElementsByClassName('match')

let cards = [...card];

let openedCards = [];

function randomPosition(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function startGame() {
    cards = randomPosition(cards);
    deck.innerHTML = "";
    for(let i = 0; i< cards.length; i++) {
        deck.appendChild(cards[i]);
        cards[i].classList.remove('open', 'match', 'disable');
    }
}

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
    cards[i].addEventListener('click', cardOpen);
}

function displayCard() {
    this.classList.toggle('open');
    this.classList.toggle('disable');
}

function cardOpen() {
    openedCards.push(this);
    console.log(openedCards);

    let len = openedCards.length;
    if(len == 2) {
        if(openedCards[0].type === openedCards[1].type) {
            matched()
        } else {
            unmatched()
        }
    }
}

function matched() {
    openedCards[0].classList.add('match', 'disable');
    openedCards[1].classList.add('match', 'disable');
    openedCards[0].classList.remove('open');
    openedCards[1].classList.remove('open');
    openedCards = [];
}

function unmatched() {
    openedCards[0].classList.add('unmatched');
    openedCards[1].classList.add('unmatched');
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove('open', 'unmatched');
        openedCards[1].classList.remove('open', 'unmatched');
        enable();
        openedCards = [];
    }, 1100);
}

function disable() {
    cards.map(card => card.classList.add('disable'));
}

function enable() {
    cards.map(card => card.classList.remove('disable'));
    Array.from(cardMatch).map(card => card.classList.add('disable'));
}

startGame();