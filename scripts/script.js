const history = document.querySelector('.history');
const result = document.querySelector('.result');
const options = document.querySelector('.input-buttons');

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
}

function operate(op, firstNum, secondNum) {
    return operations[op](firstNum, secondNum)
}

const state = {
    firstOperand: '',
    operator: '',
    secondOperand: '',
    isFirstOperand: true,
    finalResult: '',
}

function updateNumber(e) {
    let value = e.target.textContent;

    if (state.isFirstOperand === true) {
        state.firstOperand += value;
        result.textContent = state.firstOperand;
    } else if (state.isFirstOperand === false) {
        state.secondOperand += value;
        result.textContent = state.secondOperand;
    }
    console.log(state);
}

options.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const option = e.target.dataset.option;
 
    if (option === 'digit' || option === 'point') {
        updateNumber(e);
        return;
    }

    if (option === 'operator') {
        if (state.firstOperand === '') {
            state.firstOperand = state.finalResult;
        }
        state.isFirstOperand = false;
        if (state.firstOperand !== '' && state.secondOperand !== '') {
            state.firstOperand = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
        }
        state.operator = e.target.dataset.operator;
        state.secondOperand = '';
    }

    if (option === 'equal') {
        state.finalResult = String(operate(state.operator, Number(state.firstOperand), Number(state.secondOperand)));
        result.textContent = state.finalResult;
        state.firstOperand = '';
        state.secondOperand = '';
        state.operator = '';
        state.isFirstOperand = true;
    }
    console.log(state);
});
