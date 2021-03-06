let nums = document.querySelectorAll('.num-input');
let expEle = document.querySelector('.c-ex');
let resultEle = document.querySelector('.c-result');

let enter = document.querySelector('.enter');

let exp = "";
let result = 0;

Array.from(nums).forEach(num => {
    num.addEventListener('click', function() {
        let char = num.getAttribute('char');
        exp += char;
        updateExpEle();
    })
})

enter.addEventListener('click', function() {
    try {
        if(exp == "") {
            resultEle.innerText = "0";
        } else {
            result = eval(exp);
            updateResultEle();
        }
    } catch {
        expEle.innerText = "Error";
        exp = "";
        resetResultEle();
    }
})

function updateExpEle() {
    let expCopy = exp;
    expCopy = expCopy.replace(/\*/g, "×");
    expCopy = expCopy.replace(/\//g, "÷");
    expCopy = expCopy.replace(/\-/g, "−");
    expCopy = expCopy.replace(/\+/g, "+");
    expEle.innerText = expCopy;
}

function updateResultEle() {
    resultEle.innerText = result;
}

function resetResultEle() {
    resultEle.innerText = "";
}
