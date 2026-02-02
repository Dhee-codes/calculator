# Calculator

A web-based calculator built with HTML, CSS, and JavaScript. Supports basic arithmetic operations (+, -, *, /), decimal calculations, and handles edge cases like division by zero. Includes keyboard accessibility and proper UI feedback for a smooth user experience.

## Demo

### Screenshot

![Previw Screenshot](images/screenshot.png)

### Live Preview

[Github Pages](https://dhee-codes.github.io/calculator/)

## Features

- Basic arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/)
- Decimal support with proper handling of multiple decimal points
- Chaining of operations without needing to press equals after each step
- Division by zero detection, displaying `ERR` for invalid operations
- Clear Entry (CE) and All Clear (AC) functionality
- Dynamic history display showing the current operands and operator
- Keyboard accessibility for digits, operators, decimal point, and Enter/Backspace keys
- Automatic rounding of long decimal results to prevent floating-point inaccuracies

## How to Use

1. Open the `index.html` file in your web browser.
2. Click the buttons on the calculator to input numbers and operations.
3. You can also use your keyboard for input:
   - Numbers: `0-9`
   - Decimal point: `.`
   - Operators: `+`, `-`, `*`, `/`
   - Equals: `Enter`
   - Clear Entry: `Backspace`
   - All Clear: `Escape`
4. The calculator displays the current input and operator in the history area, and the result in the main display.
5. Division by zero will display `ERR` in the result.

## Technologies

- HTML5
- CSS3
- JavaScript

## Accessibility

This calculator is intended to be keyboard-accessible. Key bindings support digits, operators, decimal point, Enter, Backspace, Delete and Escape.

## Project Structure

```
calculator/
│
├── scripts
│   └── script.js
├── styles
│   └── style.css
├── index.html
├── LICENSE
└── README.md
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/dhee-codes/calculator.git
   ```

2. Open index.html in your browser

## Acknowledgements

The Odin Project

## Author

***Divine E. Obiorah***

## License

MIT License