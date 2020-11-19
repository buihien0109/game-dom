let card = document.getElementsByClassName('card');
let deck = document.getElementById('card-deck');

let cards = [...card];


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

startGame();