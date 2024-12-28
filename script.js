let n1 = "0";
let n2 = "0";
let operator = '';
let displayNumber = n1;
const display = document.querySelector('.display');

function add (n1, n2) {
    return n1 + n2;
}

function subtract (n1, n2) {
    return n1 - n2;
}

function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    if (n2 === 0) {
        return 'Infinite';
    }
    return n1 / n2;
}

function operate() {
    number1 = parseInt(n1);
    number2 = parseInt(n2);

    if (operator === '+') {
        return add(number1, number2);
    } else if (operator === '\u2212') {
        return subtract(number1, number2);
    } else if (operator === '\u00D7') {
        return multiply(number1, number2);
    } else if (operator === '\u00F7') {
        return divide(number1, number2);
    } else if (operator === '%') {
        return number1 % number2;
    } else {
        return 0;
    }
}

function updateDisplay(){
    if (operator === '' || n2 === '0') {
        displayNumber = n1;
    } else {
        displayNumber = n2;
    }
    display.textContent = displayNumber;
}

function addNumber(number) {
    if (operator === '') {
        n1 = n1 === '0' ? number : n1 + number;
    } else {
        n2 = n2 === '0' ? number : n2 + number;
    }
    updateDisplay();
}

function clearAll() {
    n1 = "0";
    n2 = "0";
    operator = '';
    updateDisplay();
}

const operatorButtons = document.querySelectorAll('.button.operator');

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
        if(n1 != '0' && n2 != '0') {
            n1 = operate();
            n2 = "0";
            updateDisplay();
        }
        operator = operatorButtons[i].innerText;
    });
}

const numberButtons = document.querySelectorAll('.button.number');

numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        addNumber(button.innerText);
    });
});

const acButton = document.querySelector('.button.ac');
acButton.addEventListener('click', clearAll);

const equalButton = document.querySelector('.button.equal');
equalButton.addEventListener('click', function() {
    n1 = operate();
    n2 = "0";
    operator = '';
    updateDisplay();
});