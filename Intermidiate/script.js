let currentNumber = '0';
let previousNumber = '';
let operation = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentNumber;
}

function appendNumber(number) {
    if (currentNumber === '0' || shouldResetDisplay) {
        currentNumber = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && currentNumber.includes('.')) return;
    if (currentNumber.length < 12) {
        currentNumber += number;
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operation = '';
    updateDisplay();
}

function setOperation(op) {
    if (previousNumber === '') {
        previousNumber = currentNumber;
        operation = op;
        shouldResetDisplay = true;
    } else if (!shouldResetDisplay) {
        calculate();
        previousNumber = currentNumber;
        operation = op;
        shouldResetDisplay = true;
    } else {
        operation = op;
    }
}

function calculate() {
    if (previousNumber === '' || shouldResetDisplay) return;

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = Math.round(result * 1000000) / 1000000;
    previousNumber = '';
    operation = '';
    updateDisplay();
}
