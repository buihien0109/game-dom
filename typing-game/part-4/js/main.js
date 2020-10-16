const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

const startGameEl = document.getElementById("start-game");
const gameEl = document.querySelector('.container');
const endgameEl = document.getElementById("end-game-container");
const btnStartGame = document.getElementById('btn-start-game');
const btnReloadGame = document.getElementById('btn-reload-game');

const selectEl = document.getElementById('level');


// danh sách các từ
const words = [
    "write",
    "began",
    "he",
    "sea",
    "eye",
    "learn",
    "have",
    "love",
    "dog",
    "game",
    "element",
    "read",
    "such",
    "up",
    "them",
    "every",
    "point",
    "all",
    "form",
    "thing",
];

// Khởi tạo từ
let randomWord;

// Khởi tạo score
let score = 0;

// Khởi tạo thời gian
let time = 20;

// Khởi tạo score
let level;

// Đếm ngược thời gian
let timeInterval

// Random 1 từ trong mảng
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Thêm từ vào trong DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update điểm
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update thời gian
function updateTime() {
    time--;
    if(time <= 5) {
        timeEl.style.color = "red";
    } else {
        timeEl.style.color = "white";
    }
    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}

// Khi game kết thúc thì show màn end game
function gameOver() {
    endgameEl.querySelector('.score').innerText = score;
    endgameEl.style.display = "flex";
}

addWordToDOM();



// Typing
text.addEventListener("input", (e) => {
    const insertedText = e.target.value;

    // Nếu không đúng thì thêm background đỏ
    if(!randomWord.startsWith(insertedText)) {
        word.classList.add('word-fail');
    } else {
        word.classList.remove('word-fail');
    }

    // handle khi gõ đúng từ
    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clear input
        e.target.value = "";

        // Nếu level khó thì + thêm 2s
        // Nếu level trung bình thì + thêm 3s
        // Nếu level dễ thì + thêm 5s

        if (level === "hard") {
            time += 2;
        } else if (level === "medium") {
            time += 3;
        } else {
            time += 5;
        }

        // Update lại thời gian
        updateTime();
    }
});



btnStartGame.addEventListener('click', function() {
    startGameEl.classList.add('hide');
    gameEl.classList.remove('hide');

    // Focus text khi bắt đầu game
    text.focus();

    timeInterval = setInterval(updateTime, 1000);

    // Giả định thời gian kết thúc game là 3s
    // setTimeout(() => {
    //     endgameEl.style.display = "flex";
    // }, 3000)
})


btnReloadGame.addEventListener('click', function() {
    window.location.reload();
}) 