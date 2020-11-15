document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random số nút của 2 con xúc xắc
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Hiển thị kết quả bằng hình ảnh lên trên màn hình
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = `./img/dice-${dice1}.png`;
        document.getElementById('dice-2').src = `./img/dice-${dice2}.png`;

        //3. Update điểm của lượt chơi hiện tại nếu 1 trong 2 con súc sắc có giá trị khác 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Cập nhật điểm và hiển thị
            roundScore += dice1 + dice2;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlayer(); 
        }
    }    
});

function nextPlayer() {
    console.log('Đổi người chơi');
}

function init() {
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

window.onload = init();