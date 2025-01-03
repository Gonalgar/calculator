let n1 = "0";
let n2 = "0";
let operator = '';
let displayNumber = n1;
const display = document.querySelector('.display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by 0';
    }
    return a / b;
}

function operate() {
    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);

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
        return n1;
    }
}

function updateDisplay(number){
    display.textContent = number;
}

function addNumber(number) {
    if (operator === '') {
        n1 = n1 === '0' ? number : n1 + number;
        updateDisplay(n1);
    } else {
        n2 = n2 === '0' ? number : n2 + number;
        updateDisplay(n2);
    }
}

function clearAll() {
    n1 = "0";
    n2 = "0";
    operator = '';
    updateDisplay(n1);
}

function changeSign() {
    if (operator === '') {
        n1 = (parseFloat(n1) * -1).toString();
        updateDisplay(n1);
    } else {
        n2 = (parseFloat(n2) * -1).toString();
        updateDisplay(n2);
    }
}

const operatorButtons = document.querySelectorAll('.button.operator');

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
        if(n1 != '0' && n2 != '0') {
            n1 = operate();
            n2 = "0";
            updateDisplay(n1);
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
    updateDisplay(n1);
});

const decimalButton = document.querySelector('.button.decimal');
decimalButton.addEventListener('click', function() {
    if (operator === '' && !n1.includes('.')) {
        n1 += '.';
        updateDisplay(n1);
    } else if (operator !== '' && !n2.includes('.')) {
        n2 += '.';
        updateDisplay(n2);
    }
});

const backspaceButton = document.querySelector('.button.backspace');
backspaceButton.addEventListener('click', function() {
    if (operator === '') {
        n1 = n1.length > 1 ? n1.slice(0, -1) : '0';
        updateDisplay(n1);
    } else {
        n2 = n2.length > 1 ? n2.slice(0, -1) : '0';
        updateDisplay(n2);
    }
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        addNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operatorButtons.forEach(button => {
            if (button.innerText === key) {
                button.click();
            }
        });
    } else if (key === 'Enter' || key === '=') {
        equalButton.click();
    } else if (key === 'Backspace') {
        backspaceButton.click();
    } else if (key === 'Escape') {
        acButton.click();
    } else if (key === '.') {
        decimalButton.click();
    }
});

const signButton = document.querySelector('.button.sign');
signButton.addEventListener('click', changeSign);