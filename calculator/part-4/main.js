let nums = document.querySelectorAll('.num-input');
let expEle = document.querySelector('.c-ex');
let resultEle = document.querySelector('.c-result');

let enter = document.querySelector('.enter');
let del = document.querySelector('.del');
let clear = document.querySelector('.clear');
let sqrtNum = document.querySelector('.sqrt');
let switchNum = document.querySelector('.switch');

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

clear.addEventListener('click', function() {
    resetExpEle();
    resetResultEle();
})

del.addEventListener('click', function() {
    if(exp.length > 0) {
        exp = exp.slice(0, exp.length - 1);
        updateExpEle();
    } else {
        resetExpEle();
        return;
    }
})

sqrtNum.addEventListener('click', function() {
    if(result == 0) {
        return
    } else {
        result = Math.sqrt(result);
        updateResultEle();
        resetExpEle();
    }
})

switchNum.addEventListener('click', function() {
    if(result == 0) {
        return
    } else {
        result *= -1;
        updateResultEle();
        resetExpEle();
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

function resetExpEle() {
    exp = "";
    expEle.innerText = exp;
}

function resetResultEle() {
    resultEle.innerText = "";
}
