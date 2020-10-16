const startGameEl = document.getElementById("start-game");
const gameEl = document.querySelector('.container');
const endgameEl = document.getElementById("end-game-container");
const btnStartGame = document.getElementById('btn-start-game');
const btnReloadGame = document.getElementById('btn-reload-game');


btnStartGame.addEventListener('click', function() {
    startGameEl.classList.add('hide');
    gameEl.classList.remove('hide');

    // Focus text khi bắt đầu game
    text.focus();

    // Giả định thời gian kết thúc game là 3s
    setTimeout(() => {
        endgameEl.style.display = "flex";
    }, 3000)
})


btnReloadGame.addEventListener('click', function() {
    window.location.reload();
}) 