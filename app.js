function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

//pin
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// calc input value
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputNumber = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            inputNumber.value = '';
        } else if (number == '<') {
            inputNumber.value = parseInt(inputNumber.value / 10)
        }
    } else {
        const calcNumber = inputNumber.value;
        const newNumber = calcNumber + number;
        inputNumber.value = newNumber;
    }

})

//verify 
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}

// copy code 
function clippadBtn() {
    const pincopy = document.getElementById('display-pin').value;
    navigator.clipboard.writeText(pincopy)
}