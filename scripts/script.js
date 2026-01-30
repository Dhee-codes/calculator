const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
}

function operate(op, firstNum, secondNum) {
    return operations[op](firstNum, secondNum)
}

const firstOperand = '';
const operator = '';
const secondOperand = '';
