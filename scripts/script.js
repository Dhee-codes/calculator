const firstOperandHistory = document.querySelector('.first-operand');
const operatorHistory = document.querySelector('.operator');
const secondOperandHistory = document.querySelector('.second-operand');
const result = document.querySelector('.result');
const options = document.querySelector('.input-buttons');

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0) ? a / b : 'ERR',
}

function operate(op, firstNum, secondNum) {
    return operations[op](firstNum, secondNum)
}

const state = {
    firstOperand: '',
    operator: '',
    secondOperand: '',
    isFirstOperand: true,
    justEvaluated: false,
}

function updateNumber(e) {
    let value = e.target.textContent;

    if (state.isFirstOperand === true) {
        state.firstOperand += value;
        result.textContent = state.firstOperand;
        firstOperandHistory.textContent += value;
    } else if (state.isFirstOperand === false) {
        state.secondOperand += value;
        result.textContent = state.secondOperand;
        secondOperandHistory.textContent += value;
    }
    console.log(state);
}

const decimalPoint = options.querySelector('[data-option="point"]');

options.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const option = e.target.dataset.option;
 
    if (option === 'digit' || option === 'point') {
        if (option === 'point') {
            decimalPoint.disabled = true;
        }

        if (state.justEvaluated === true) {
            state.firstOperand = '';
            state.justEvaluated = false;
        }
        updateNumber(e);
        return;
    }

    if (option === 'operator') {
        decimalPoint.disabled = false;
        if (state.justEvaluated === true) {
            state.firstOperand = state.firstOperand;
            state.justEvaluated = false;
            firstOperandHistory.textContent += state.firstOperand
            // history.textContent += state.operator;
        }
        state.isFirstOperand = false;
        if (state.firstOperand !== '' && state.secondOperand !== '') {
            state.firstOperand = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
            firstOperandHistory.textContent = '';
            secondOperandHistory.textContent = '';
            operatorHistory.textContent = '';
            firstOperandHistory.textContent += state.firstOperand;
        }
        state.operator = e.target.dataset.operator;
        state.secondOperand = '';
        result.textContent = state.firstOperand;
        operatorHistory.textContent = e.target.textContent;
    }

    if (option === 'equal') {
        decimalPoint.disabled = false;
        if (state.firstOperand === '' || state.operator === '' || state.secondOperand === '') return;
        state.firstOperand = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
        firstOperandHistory.textContent = '';
        secondOperandHistory.textContent = '';
        operatorHistory.textContent = '';
        state.justEvaluated = true;
        result.textContent = state.firstOperand;
        state.secondOperand = '';
        state.operator = '';
        state.isFirstOperand = true;
    }

    if (option === 'clear-entry') {
        if (state.isFirstOperand === true) {
            if (state.firstOperand.length > 0) {
                state.firstOperand = state.firstOperand.slice(0, -1);
                firstOperandHistory.textContent = state.firstOperand;
                result.textContent = state.firstOperand;
            }
        } else if (state.isFirstOperand === false) {
            if (state.secondOperand.length > 0) {
                state.secondOperand = state.secondOperand.slice(0, -1);
                secondOperandHistory.textContent = state.secondOperand;
                result.textContent = state.secondOperand;
            }
        }
    }

    if (option === 'all-clear') {
        state.firstOperand = '';
        state.secondOperand = '';
        state.operator = '';
        state.isFirstOperand = true;
        state.justEvaluated = false;

        decimalPoint.disabled = false;
        firstOperandHistory.textContent = '';
        secondOperandHistory.textContent = '';
        operatorHistory.textContent = '';
        result.textContent = '0';
    }
    console.log(state);
});
