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