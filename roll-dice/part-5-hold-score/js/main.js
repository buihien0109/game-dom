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
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer(); 
        }
    }    
});

function nextPlayer() {
    // Đổi lượt chơi
    // Khi đổi lượt chơi, điểm của lần chơi hiện tại sẽ hiển thị = 0
    // Thay đổi giao diện biết lượt chơi hiện tại chuyển sang người chơi nào
    // Không ẩn hết con súc sắc
    if(activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }
    
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// Xử lý khi ấn lưu trữ điểm
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Update số lượng điểm của người chơi hiện tại (điểm tích trữ qua cát lần chơi trước + điểm của lần chơi hiện tại)
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        
        let input = document.querySelector('.final-score').value;
        let winningScore;
        
        // Undefined, 0, null or "" => false
        // Anything else is COERCED => true
        // Lấy điểm mục tiêu trong ô input
        // Nếu không có điểm mục tiêu thì mặc định = 100
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        
        // Kiểm tra nếu người chơi nào đó thắng cuộc
        // Hiển thị giao diện người thắng cuộc (text + giao diện)
        // Ẩn hết con xúc sắc
        if (scores[activePlayer] >= winningScore) {
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function init() {
    scores = [0, 0];
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