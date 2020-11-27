const btn_submit = document.getElementById('btn-submit');
const input_height = document.getElementById('height');
const input_weight = document.getElementById('weight');

const inputs = document.querySelectorAll('.input');

let height, weight;
let isValid;

btn_submit.addEventListener('click', function() {
    Array.from(inputs).map((e) => e.classList.remove("error"));
    Array.from(inputs).map((e) => e.classList.remove("success"));
    
    isValid = checkInputs();
})

function checkInputs() {
    height = input_height.value.trim();
    weight = input_weight.value.trim();

    isValid = true;

    if(weight == '') {
        isValid = false;
        setErrorFor(input_weight, "Cân nặng không được để trống.");
    } else if(!isNumber(weight)) {
        isValid = false;
        setErrorFor(input_weight, "Không đúng định dạng.");
    } else {
        setSuccessFor(input_weight)
    }

    if(height == '') {
        isValid = false;
        setErrorFor(input_height, "Chiều cao không được để trống.");
    } else if(!isNumber(height)) {
        isValid = false;
        setErrorFor(input_height, "Không đúng định dạng.");
    } else {
        setSuccessFor(input_height)
    }

    return isValid
}

function setErrorFor(input, message) {
    const parent = input.parentElement;
    parent.classList.add('error');
    const small = parent.querySelector('small');
    small.innerText = message;
}

function setSuccessFor(input) {
    const parent = input.parentElement;
    parent.classList.add("success");
}

function isNumber(num) {
    return /^\d+$/.test(num);
}

