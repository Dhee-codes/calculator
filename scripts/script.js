const history = document.querySelector('.history');
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
        history.textContent += value;
    } else if (state.isFirstOperand === false) {
        state.secondOperand += value;
        result.textContent = state.secondOperand;
        history.textContent += value;
    }
    console.log(state);
}

const decimalPoint = options.querySelector('[data-option="point"');

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
            history.textContent += state.firstOperand + state.operator;
        }
        state.isFirstOperand = false;
        if (state.firstOperand !== '' && state.secondOperand !== '') {
            state.firstOperand = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
            history.textContent = '';
            history.textContent += state.firstOperand;
        }
        state.operator = e.target.dataset.operator;
        state.secondOperand = '';
        result.textContent = state.firstOperand;
        history.textContent += state.operator;
    }

    if (option === 'equal') {
        decimalPoint.disabled = false;
        if (state.firstOperand === '' || state.operator === '' || state.secondOperand === '') return;
        state.firstOperand = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
        history.textContent = '';
        state.justEvaluated = true;
        result.textContent = state.firstOperand;
        state.secondOperand = '';
        state.operator = '';
        state.isFirstOperand = true;
    }
    console.log(state);
});
