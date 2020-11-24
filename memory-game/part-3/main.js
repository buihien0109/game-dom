let card = document.getElementsByClassName('card');
let deck = document.getElementById('card-deck');

let cards = [...card];

let openedCards = [];

function randomPosition(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function startGame() {
    cards = randomPosition(cards);
    deck.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        deck.appendChild(cards[i]);
        cards[i].classList.remove('open', 'match', 'disable');
    }
}

for (let i = 0; i < cards.length; i++) {
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
    if (len == 2) {
        if (openedCards[0].type === openedCards[1].type) {
            console.log('Giống nhau');
            openedCards = [];
        } else {
            console.log('Khác nhau');
            openedCards = [];
        }
    }
}

startGame();